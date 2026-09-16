import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { roles } from "@/lib/data";

export function ExperienceSection() {
  return (
    <div className="relative pl-6 sm:pl-8">
      <span
        aria-hidden
        className="absolute left-[3px] top-2 bottom-2 w-px bg-slate-800 sm:left-[7px]"
      />

      <ol className="space-y-10">
        {roles.map((role) => (
          <li key={`${role.company}-${role.start}`} className="relative">
            <span
              aria-hidden
              className={cn(
                "absolute -left-6 top-1.5 h-[9px] w-[9px] rounded-full border sm:-left-8",
                role.current
                  ? "border-accent bg-accent"
                  : "border-slate-700 bg-slate-900",
              )}
            />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="text-base font-semibold text-slate-100">
                {role.title}
              </h3>
              {role.current && <Badge variant="accent">Current</Badge>}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-sm text-slate-400">{role.company}</span>
              <span className="font-mono text-[11px] tabular-nums uppercase tracking-wider text-slate-500">
                {role.start} &ndash; {role.end}
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {role.summary}
            </p>

            <ul className="mt-3 space-y-2">
              {role.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                >
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-slate-700" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
