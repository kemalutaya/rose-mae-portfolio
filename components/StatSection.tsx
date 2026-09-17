"use client";

import { useInView } from "motion/react";
import { Clock, FileText, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { PulseLine } from "@/components/PulseLine";
import { metrics, toolCategories } from "@/lib/data";

const allTools = toolCategories.flatMap((category) =>
  category.tools.map((tool) => tool.name),
);

const icons = [Clock, ShieldCheck, FileText];
const subtext = [
  "Across insurance eligibility, prior auth, and claims: remote, healthcare, and support roles",
  "Every eligibility check and claim handled under an active HIPAA certification",
  "Diagnosis and procedure coding carried through to a finalized, submitted claim",
];

function Stat({ metric, Icon, sub }: { metric: (typeof metrics)[number]; Icon: typeof Clock; sub: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <Icon className="size-5 text-brand" aria-hidden />
      <div className="font-mono text-2xl font-semibold tracking-tight text-ink tabular-nums">
        {"number" in metric ? (
          <>
            <AnimatedNumber value={inView ? metric.number : 0} />
            {metric.suffix}
          </>
        ) : (
          metric.text
        )}
      </div>
      <p className="text-sm text-ink-muted">{metric.label}</p>
      <p className="text-xs text-ink-subtle">{sub}</p>
    </div>
  );
}

export function StatSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-[11px] tracking-wider text-brand uppercase">Where I help</p>
      <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl">
        Where I keep practices running
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
        Since 2009, I&apos;ve worked at the intersection of healthcare operations and
        customer support, verifying coverage, clearing authorizations, and closing
        claims so providers get paid and patients don&apos;t wait.
      </p>

      <PulseLine />

      <div className="mt-4 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
        {metrics.map((metric, i) => (
          <Stat key={metric.label} metric={metric} Icon={icons[i]} sub={subtext[i]} />
        ))}
      </div>

      <div className="relative mt-10 overflow-hidden rounded-xl border border-teal-line bg-teal-panel py-3">
        <InfiniteSlider gap={40} speed={28} speedOnHover={8}>
          {allTools.map((name) => (
            <span
              key={name}
              className="text-sm font-medium whitespace-nowrap text-on-panel-muted"
            >
              {name}
            </span>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          direction="left"
          className="pointer-events-none absolute inset-y-0 left-0 w-16"
        />
        <ProgressiveBlur
          direction="right"
          className="pointer-events-none absolute inset-y-0 right-0 w-16"
        />
      </div>
    </section>
  );
}
