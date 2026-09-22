"use client";

import { motion, type Transition, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

type AnimationStep = Record<string, string | number>;

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: AnimationStep;
  animationTo?: AnimationStep[];
  easing?: (value: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

function buildKeyframes(from: AnimationStep, steps: AnimationStep[]) {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((step) => Object.keys(step)),
  ]);

  return Object.fromEntries(
    [...keys].map((key) => [key, [from[key], ...steps.map((step) => step[key])]]),
  );
}

// Adapted from React Bits BlurText (TS-CSS) for Next.js and reduced-motion support.
export default function BlurText({
  text = "",
  delay = 45,
  className = "",
  animateBy = "words",
  direction = "bottom",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (value) => value,
  onAnimationComplete,
  stepDuration = 0.24,
}: BlurTextProps) {
  const segments = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.unobserve(element);
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reduceMotion, rootMargin, threshold]);

  const defaultFrom = useMemo(
    () => ({
      filter: "blur(6px)",
      opacity: 0,
      y: direction === "top" ? -12 : 12,
    }),
    [direction],
  );
  const defaultTo = useMemo(
    () => [
      { filter: "blur(2px)", opacity: 0.75, y: direction === "top" ? 2 : -2 },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction],
  );
  const from = animationFrom ?? defaultFrom;
  const to = animationTo ?? defaultTo;
  const keyframes = buildKeyframes(from, to);
  const stepCount = to.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from(
    { length: stepCount },
    (_, index) => (stepCount === 1 ? 0 : index / (stepCount - 1)),
  );

  return (
    <p ref={ref} className={className}>
      {segments.map((segment, index) => {
        const transition: Transition = reduceMotion
          ? { duration: 0 }
          : {
              duration: totalDuration,
              times,
              delay: (index * delay) / 1000,
              ease: easing,
            };

        return (
          <motion.span
            key={`${segment}-${index}`}
            initial={reduceMotion ? false : from}
            animate={reduceMotion || inView ? keyframes : from}
            transition={transition}
            onAnimationComplete={
              index === segments.length - 1 ? onAnimationComplete : undefined
            }
            style={{ display: "inline-block", willChange: "transform, filter, opacity" }}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < segments.length - 1 ? "\u00A0" : null}
          </motion.span>
        );
      })}
    </p>
  );
}
