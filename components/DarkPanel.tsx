import { BorderTrail } from "@/components/motion-primitives/border-trail";
import { cn } from "@/lib/utils";

export function DarkPanel({
  eyebrow,
  title,
  children,
  graphic,
  className,
}: {
  eyebrow?: string;
  title?: string;
  children?: React.ReactNode;
  /** Optional decorative visual, shown beside the text on wider screens. */
  graphic?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-teal-line bg-teal-panel p-6",
        graphic && "sm:flex sm:items-center sm:justify-between sm:gap-6",
        className,
      )}
    >
      <BorderTrail className="bg-teal-accent" size={90} />
      <div>
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
      {graphic && (
        <div className="mt-5 flex shrink-0 justify-center sm:mt-0">
          {graphic}
        </div>
      )}
    </div>
  );
}
