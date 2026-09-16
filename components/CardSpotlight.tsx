"use client";

import { cn } from "@/lib/utils";

/** Aceternity-style spotlight: feeds cursor position to the .spotlight gradient. */
export function CardSpotlight({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }}
      className={cn("spotlight", className)}
      {...props}
    />
  );
}
