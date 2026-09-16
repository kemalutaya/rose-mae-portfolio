"use client";

import { useInView } from "motion/react";
import { MapPin, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import { Tilt } from "@/components/motion-primitives/tilt";
import { Badge } from "@/components/ui/badge";
import { metrics, profile, toolCategories } from "@/lib/data";

const allTools = toolCategories.flatMap((category) =>
  category.tools.map((tool) => tool.name),
);

function MetricCard({ metric }: { metric: (typeof metrics)[number] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <Tilt rotationFactor={6} springOptions={{ stiffness: 200, damping: 20 }}>
      <div
        ref={ref}
        className="relative overflow-hidden rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
      >
        <Spotlight className="from-brand/25 via-brand/5 to-transparent" size={180} />
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
        <div className="mt-1.5 text-sm text-ink-muted">{metric.label}</div>
      </div>
    </Tilt>
  );
}

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-4 pt-16 pb-14 sm:px-6">
      <AnimatedGroup preset="blur-slide">
        <Badge variant="positive" className="gap-2">
          <ShieldCheck className="size-3.5" aria-hidden />
          HIPAA Certified ·{" "}
          <TextShimmer
            as="span"
            duration={2.5}
            className="[--base-color:var(--color-good)] [--base-gradient-color:var(--color-teal-accent)]"
          >
            Available Immediately
          </TextShimmer>
        </Badge>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          {profile.name}
        </h1>

        <TextEffect
          as="p"
          per="word"
          preset="fade-in-blur"
          delay={0.15}
          className="mt-3 text-xl text-ink-muted sm:text-2xl"
        >
          {profile.role}
        </TextEffect>

        <p className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
          <MapPin className="size-4 shrink-0" aria-hidden />
          {profile.location} · {profile.availability}
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          {profile.bio}
        </p>
      </AnimatedGroup>

      <div className="relative mt-12 grid gap-4 sm:grid-cols-3">
        <GlowEffect
          colors={["#7a2e48", "#a9793f", "#0e6f64"]}
          mode="static"
          blur="strongest"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        />
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="relative mt-6 overflow-hidden rounded-xl border border-teal-line bg-teal-panel py-3">
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
