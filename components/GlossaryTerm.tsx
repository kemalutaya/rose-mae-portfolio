"use client";

import {
  MorphingPopover,
  MorphingPopoverTrigger,
  MorphingPopoverContent,
} from "@/components/motion-primitives/morphing-popover";

export function GlossaryTerm({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  return (
    <MorphingPopover>
      <MorphingPopoverTrigger className="rounded border-b border-dashed border-brand/40 font-medium text-ink underline-offset-2 hover:border-brand">
        {term}
      </MorphingPopoverTrigger>
      <MorphingPopoverContent className="z-20 w-64 rounded-lg border border-line bg-surface p-3 text-xs leading-relaxed text-ink-muted shadow-lg">
        {definition}
      </MorphingPopoverContent>
    </MorphingPopover>
  );
}
