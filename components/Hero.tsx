import { MapPin, ShieldCheck } from "lucide-react";
import { CardSpotlight } from "@/components/CardSpotlight";
import { Badge } from "@/components/ui/badge";
import { metrics, profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-4 pt-16 pb-14 sm:px-6">
      <Badge variant="positive" className="gap-2">
        <ShieldCheck className="size-3.5" aria-hidden />
        HIPAA Certified · Available Immediately
      </Badge>

      <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-xl text-ink-muted sm:text-2xl">{profile.role}</p>

      <p className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
        <MapPin className="size-4 shrink-0" aria-hidden />
        {profile.location} · {profile.availability}
      </p>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
        {profile.bio}
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <CardSpotlight
            key={metric.label}
            className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
          >
            <div className="font-mono text-2xl font-semibold tracking-tight text-ink tabular-nums">
              {metric.value}
            </div>
            <div className="mt-1.5 text-sm text-ink-muted">{metric.label}</div>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
}
