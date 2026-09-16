import { cn } from "@/lib/utils";

const variants = {
  default: "border-line-strong bg-canvas-alt text-ink-muted",
  accent: "border-brand/30 bg-brand-soft text-brand",
  positive: "border-good/30 bg-good/8 text-good",
  caution: "border-warn/30 bg-warn/8 text-warn",
  critical: "border-bad/30 bg-bad/8 text-bad",
} as const;

export function Badge({
  variant = "default",
  className,
  ...props
}: React.ComponentProps<"span"> & { variant?: keyof typeof variants }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
