"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

/** Ascending sparkline that draws in once visible, an "experience keeps
 *  compounding" metaphor for the Experience section. */
export function GrowthSparkline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 56"
      className="h-14 w-full max-w-[200px]"
      preserveAspectRatio="none"
      role="presentation"
    >
      <path
        d="M0 48 L35 40 L65 44 L95 24 L130 30 L165 10 L200 6"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: inView ? 0 : 1,
          transition: "stroke-dashoffset 1.2s ease-out",
        }}
      />
      <circle
        cx="200"
        cy="6"
        r="4"
        fill="var(--color-teal-accent)"
        style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 0.3s ease-out 1.1s",
        }}
      />
    </svg>
  );
}
