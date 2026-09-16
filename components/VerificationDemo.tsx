"use client";

import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  ShieldAlert,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Coverage = "Active" | "Inactive" | "Termed";

interface EligibilityRecord {
  id: string;
  name: string;
  dob: string;
  memberId: string;
  payer: string;
  plan: string;
  coverage: Coverage;
  copay: string;
  deductible: string;
  priorAuth: string | null;
  note: string;
}

type ItemState = "clear" | "flagged" | "critical";

interface ChartItem {
  id: string;
  category: string;
  label: string;
  detail: string;
  state: ItemState;
}

const PATIENTS: EligibilityRecord[] = [
  {
    id: "p1",
    name: "Delia Fontenot",
    dob: "1966-04-02",
    memberId: "W2749013845",
    payer: "UnitedHealthcare",
    plan: "Choice Plus PPO",
    coverage: "Active",
    copay: "$35.00 specialist",
    deductible: "$1,180 / $1,500",
    priorAuth: null,
    note: "Verified via UHC Provider Portal. No action needed before the visit.",
  },
  {
    id: "p2",
    name: "Marcus Ivey",
    dob: "1954-11-19",
    memberId: "AET8830221",
    payer: "Aetna",
    plan: "Medicare Advantage HMO",
    coverage: "Active",
    copay: "$0.00 primary / $45.00 imaging",
    deductible: "$0 / $0",
    priorAuth: "73721 — MRI lower extremity",
    note: "Auth request submitted through Availity, reference AV-4417. Awaiting determination.",
  },
  {
    id: "p3",
    name: "Priya Raman",
    dob: "1989-07-30",
    memberId: "BCBS4471902",
    payer: "BCBS of Texas",
    plan: "Blue Advantage HMO",
    coverage: "Termed",
    copay: "—",
    deductible: "$0 / $2,750",
    priorAuth: null,
    note: "Coverage termed 08/31. Patient contacted for updated card; visit flagged as self-pay until replaced.",
  },
  {
    id: "p4",
    name: "Gordon Teasley",
    dob: "1971-01-08",
    memberId: "CIG9920374",
    payer: "Cigna",
    plan: "Open Access Plus",
    coverage: "Active",
    copay: "$50.00 specialist",
    deductible: "$420 / $1,500",
    priorAuth: "97110 — PT, 12 visits requested",
    note: "Auth approved for 8 of 12 visits through 11/14. Front desk notified of visit cap.",
  },
  {
    id: "p5",
    name: "Alma Sandoval",
    dob: "1996-09-23",
    memberId: "HUM6618490",
    payer: "Humana",
    plan: "Gold Plus HMO",
    coverage: "Inactive",
    copay: "—",
    deductible: "$0 / $1,000",
    priorAuth: null,
    note: "Eligibility returned inactive for date of service. Rescheduled pending employer reinstatement.",
  },
];

const INITIAL_ITEMS: ChartItem[] = [
  {
    id: "c1",
    category: "Labs",
    label: "CMP + lipid panel from 09/02",
    detail: "Quest results not attached to encounter — requested re-fax.",
    state: "critical",
  },
  {
    id: "c2",
    category: "Allergies",
    label: "Sulfa allergy not reconciled",
    detail: "Documented in 2023 intake, missing from active allergy list.",
    state: "critical",
  },
  {
    id: "c3",
    category: "Diagnoses",
    label: "Active ICD-10 list",
    detail: "E11.9, I10, M54.51 carried forward and confirmed current.",
    state: "clear",
  },
  {
    id: "c4",
    category: "Diagnoses",
    label: "Stale diagnosis on problem list",
    detail: "J06.9 from 02/2024 still active — candidate for resolution.",
    state: "flagged",
  },
  {
    id: "c5",
    category: "Charges",
    label: "CPT queued for visit",
    detail: "99214 + 36415 staged; modifiers reviewed against payer rules.",
    state: "clear",
  },
  {
    id: "c6",
    category: "Insurance",
    label: "Re-verification for date of service",
    detail: "Cigna Open Access Plus active, $420 / $1,500 deductible met.",
    state: "clear",
  },
  {
    id: "c7",
    category: "Referral",
    label: "PT authorization on file",
    detail: "8 of 12 visits approved — cap reached in 3 weeks.",
    state: "flagged",
  },
  {
    id: "c8",
    category: "Intake",
    label: "Consent forms unsigned",
    detail: "Annual HIPAA acknowledgment expired 08/2026.",
    state: "flagged",
  },
];

const coverageVariant = {
  Active: "positive",
  Inactive: "caution",
  Termed: "critical",
} as const;

const stateStyles = {
  clear: { icon: CheckCircle2, ring: "border-good/30", text: "text-good" },
  flagged: { icon: AlertTriangle, ring: "border-warn/30", text: "text-warn" },
  critical: { icon: ShieldAlert, ring: "border-bad/30", text: "text-bad" },
} as const;

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] uppercase tracking-wider text-ink-subtle">{label}</span>
      <span className="font-mono text-sm tabular-nums text-ink">{value}</span>
    </div>
  );
}

export function VerificationDemo() {
  const [selectedId, setSelectedId] = useState(PATIENTS[0].id);
  const [resolved, setResolved] = useState<string[]>([]);

  const patient = PATIENTS.find((p) => p.id === selectedId) ?? PATIENTS[0];
  const openItems = INITIAL_ITEMS.filter(
    (i) => i.state !== "clear" && !resolved.includes(i.id),
  ).length;

  return (
    <div>
      <Tabs defaultValue="eligibility">
        <TabsList>
          <TabsTrigger value="eligibility">Insurance Eligibility Sweep</TabsTrigger>
          <TabsTrigger value="precharting">Pre-Charting Audit</TabsTrigger>
        </TabsList>

        <TabsContent value="eligibility">
          <div className="grid gap-4 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]">
            <Card>
              <CardHeader>
                <CardTitle>Today&apos;s Verification Queue</CardTitle>
                <p className="text-xs text-ink-muted">
                  {PATIENTS.length} patients checked before 8:00 AM
                </p>
              </CardHeader>
              <CardContent className="flex flex-col gap-1.5">
                {PATIENTS.map((p) => {
                  const active = p.id === patient.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedId(p.id)}
                      aria-pressed={active}
                      className={cn(
                        "w-full rounded-lg border px-3 py-2.5 text-left transition-colors",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
                        active
                          ? "border-brand bg-brand-soft"
                          : "border-line hover:border-line-strong hover:bg-canvas-alt",
                      )}
                    >
                      <span
                        className={cn(
                          "block text-sm font-medium",
                          active ? "text-ink" : "text-ink",
                        )}
                      >
                        {p.name}
                      </span>
                      <span className="mt-0.5 block font-mono text-[11px] tabular-nums text-ink-subtle">
                        DOB {p.dob} · {p.payer}
                      </span>
                    </button>
                  );
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex-row items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <CardTitle>{patient.name}</CardTitle>
                  <p className="font-mono text-[11px] tabular-nums text-ink-subtle">
                    Member ID {patient.memberId}
                  </p>
                </div>
                <Badge variant={coverageVariant[patient.coverage]}>{patient.coverage}</Badge>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Payer" value={patient.payer} />
                  <Field label="Plan" value={patient.plan} />
                  <Field label="Copay" value={patient.copay} />
                  <Field label="Deductible met" value={patient.deductible} />
                </div>
                <div className="flex flex-col gap-2 rounded-lg border border-line bg-surface p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-ink-subtle">
                      Prior authorization
                    </span>
                    {patient.priorAuth ? (
                      <Badge variant="caution">Required</Badge>
                    ) : (
                      <Badge variant="positive">Not required</Badge>
                    )}
                  </div>
                  <span className="font-mono text-sm tabular-nums text-ink">
                    {patient.priorAuth ?? "No CPT on this encounter requires authorization."}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">{patient.note}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="precharting">
          <Card>
            <CardHeader className="flex-row items-start justify-between gap-3">
              <div className="flex flex-col gap-1">
                <CardTitle>Chart prep — Gordon Teasley, 9:15 AM follow-up</CardTitle>
                <p className="text-xs text-ink-muted">
                  {openItems > 0
                    ? `${openItems} of ${INITIAL_ITEMS.length} items need attention`
                    : `All ${INITIAL_ITEMS.length} items cleared — chart ready for the provider`}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setResolved([])}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5",
                  "text-xs text-ink-muted transition-colors hover:border-line-strong hover:text-ink",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
                )}
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                Reset
              </button>
            </CardHeader>
            <CardContent className="flex flex-col gap-1.5">
              {INITIAL_ITEMS.map((item) => {
                const isResolved = item.state === "clear" || resolved.includes(item.id);
                const style = isResolved ? stateStyles.clear : stateStyles[item.state];
                const Icon = isResolved ? CheckCircle2 : style.icon;
                const toggleable = item.state !== "clear";

                return (
                  <button
                    key={item.id}
                    type="button"
                    disabled={!toggleable}
                    onClick={() =>
                      setResolved((prev) =>
                        prev.includes(item.id)
                          ? prev.filter((id) => id !== item.id)
                          : [...prev, item.id],
                      )
                    }
                    className={cn(
                      "flex w-full items-start gap-3 rounded-lg border bg-surface px-3 py-2.5 text-left transition-colors",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
                      style.ring,
                      toggleable
                        ? "hover:border-line-strong hover:bg-canvas-alt"
                        : "cursor-default",
                    )}
                  >
                    <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", style.text)} aria-hidden />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] uppercase tracking-wider text-ink-subtle">
                        {item.category}
                      </span>
                      <span
                        className={cn(
                          "block text-sm font-medium",
                          isResolved ? "text-ink-muted line-through" : "text-ink",
                        )}
                      >
                        {item.label}
                      </span>
                      <span className="mt-0.5 block font-mono text-[11px] tabular-nums text-ink-subtle">
                        {item.detail}
                      </span>
                    </span>
                    {toggleable && (
                      <span className="shrink-0">
                        {isResolved ? (
                          <Badge variant="positive">Resolved</Badge>
                        ) : (
                          <Badge variant={item.state === "critical" ? "critical" : "caution"}>
                            {item.state === "critical" ? "Critical" : "Flagged"}
                          </Badge>
                        )}
                      </span>
                    )}
                  </button>
                );
              })}
              {openItems === 0 && (
                <p className="mt-2 text-xs text-good">
                  Chart closed out. Provider walks into a visit with nothing pending.
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
