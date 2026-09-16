import { cn } from "@/lib/utils";

const variants = {
  default: "border-slate-700 bg-slate-800/60 text-slate-300",
  accent: "border-accent/40 bg-accent/10 text-accent",
  positive: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  caution: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  critical: "border-rose-500/40 bg-rose-500/10 text-rose-300",
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
