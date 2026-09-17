"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

/** Heartbeat-style line that draws itself once in view, an EKG metaphor
 *  for "operations that keep running steadily." Pure SVG + CSS, no
 *  library — the stroke just animates its own dash offset to zero. */
export function PulseLine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <svg
      ref={ref}
      viewBox="0 0 600 60"
      className="h-12 w-full"
      preserveAspectRatio="none"
      role="presentation"
    >
      <path
        d="M0 30 H180 L205 8 L230 52 L255 30 H320 L345 14 L365 46 L385 30 H600"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: inView ? 0 : 1,
          transition: "stroke-dashoffset 1.4s ease-out",
        }}
      />
      <circle cx="230" cy="52" r="4" fill="var(--color-teal-accent)">
        {inView && (
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.55;0.85;1"
            dur="1.6s"
            begin="0.2s"
            fill="freeze"
          />
        )}
      </circle>
    </svg>
  );
}
