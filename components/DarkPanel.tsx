import { BorderTrail } from "@/components/motion-primitives/border-trail";
import { cn } from "@/lib/utils";

export function DarkPanel({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-teal-line bg-teal-panel p-6",
        className,
      )}
    >
      <BorderTrail className="bg-teal-accent" size={90} />
      {eyebrow && (
        <p className="text-[11px] tracking-wider text-teal-accent uppercase">
          {eyebrow}
        </p>
      )}
      {title && (
        <h3 className="mt-2 text-lg font-semibold text-balance text-on-panel">
          {title}
        </h3>
      )}
      {children && (
        <div className="mt-3 text-sm leading-relaxed text-on-panel-muted">
          {children}
        </div>
      )}
    </div>
  );
}
