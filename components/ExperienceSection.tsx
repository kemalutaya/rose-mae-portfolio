"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DarkPanel } from "@/components/DarkPanel";
import { GlossaryTerm } from "@/components/GlossaryTerm";
import {
  Disclosure,
  DisclosureTrigger,
  DisclosureContent,
} from "@/components/motion-primitives/disclosure";
import { SlidingNumber } from "@/components/motion-primitives/sliding-number";
import { cn } from "@/lib/utils";
import { roles } from "@/lib/data";

function YearsBadge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div ref={ref} className="mt-1 flex items-baseline gap-1.5 text-sm text-ink-muted">
      <div className="font-mono text-2xl font-semibold text-ink">
        <SlidingNumber value={inView ? 15 : 0} />
      </div>
      years in operations and support
    </div>
  );
}

function HighlightLine({ role, highlight }: { role: (typeof roles)[number]; highlight: string }) {
  if (role.company === "Truelife Hospital" && highlight.includes("ICD-10")) {
    return (
      <>
        Applied{" "}
        <GlossaryTerm
          term="ICD-10"
          definition="International Classification of Diseases, 10th revision. The code set used to document diagnoses on a claim."
        />{" "}
        and{" "}
        <GlossaryTerm
          term="CPT"
          definition="Current Procedural Terminology. The code set used to document the procedures and services billed on a claim."
        />{" "}
        codes and finalized claims for submission
      </>
    );
  }
  return <>{highlight}</>;
}

export function ExperienceSection() {
  const [openRole, setOpenRole] = useState<string | null>(
    roles.find((r) => r.current)?.company ?? null,
  );

  return (
    <div>
      <YearsBadge />

      <div className="relative mt-8 pl-6 sm:pl-8">
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[3px] w-px bg-line sm:left-[7px]"
        />

        <ol className="space-y-10">
          {roles.map((role) => {
            const key = `${role.company}-${role.start}`;
            const isOpen = openRole === role.company;

            return (
              <li key={key} className="relative">
                <span
                  aria-hidden
                  className={cn(
                    "absolute -left-6 top-1.5 h-[9px] w-[9px] rounded-full border sm:-left-8",
                    role.current
                      ? "border-teal-accent bg-teal-accent"
                      : "border-line-strong bg-surface",
                  )}
                />

                {role.current ? (
                  <DarkPanel>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="text-base font-semibold text-on-panel">
                        {role.title}
                      </h3>
                      <Badge
                        variant="accent"
                        className="border-teal-accent/40 bg-teal-accent/10 text-teal-accent"
                      >
                        Current
                      </Badge>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-sm text-on-panel-muted">{role.company}</span>
                      <span className="font-mono text-[11px] tracking-wider text-on-panel-muted/70 uppercase tabular-nums">
                        {role.start} &ndash; {role.end}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-on-panel-muted">
                      {role.summary}
                    </p>

                    <Disclosure
                      open={isOpen}
                      onOpenChange={(open) => setOpenRole(open ? role.company : null)}
                      className="mt-3"
                    >
                      <DisclosureTrigger>
                        <button
                          type="button"
                          className="flex items-center gap-1.5 text-xs font-medium text-teal-accent"
                        >
                          {isOpen ? "Hide" : "View"} responsibilities
                          <ChevronDown
                            className={cn(
                              "size-3.5 transition-transform",
                              isOpen && "rotate-180",
                            )}
                            aria-hidden
                          />
                        </button>
                      </DisclosureTrigger>
                      <DisclosureContent>
                        <ul className="mt-3 space-y-2 pt-1">
                          {role.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-2.5 text-sm leading-relaxed text-on-panel-muted"
                            >
                              <span
                                aria-hidden
                                className="mt-2 h-px w-3 shrink-0 bg-teal-line"
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </DisclosureContent>
                    </Disclosure>
                  </DarkPanel>
                ) : (
                  <>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="text-base font-semibold text-ink">{role.title}</h3>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-sm text-ink-muted">{role.company}</span>
                      <span className="font-mono text-[11px] tracking-wider text-ink-subtle uppercase tabular-nums">
                        {role.start} &ndash; {role.end}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {role.summary}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {role.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
                        >
                          <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                          <span>
                            <HighlightLine role={role} highlight={highlight} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
