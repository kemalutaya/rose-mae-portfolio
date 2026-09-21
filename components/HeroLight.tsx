import { Download, Mail, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/data";

const badges = [
  { Icon: ShieldCheck, text: "HIPAA certified" },
  { Icon: MapPin, text: "Davao City, PH" },
  { Icon: Mail, text: "U.S. business hours" },
];

export function HeroLight() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-canvas px-4 pt-14 pb-16 sm:px-6 lg:pt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-brand">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            Open to remote roles
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance text-ink sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg font-semibold text-brand">{profile.role}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            {profile.bio} I make sure a patient visit never stalls on paperwork.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={profile.resume}
              download
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              <Download className="size-4" aria-hidden />
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-lg border border-line-strong bg-surface px-5 text-sm font-medium text-ink transition-colors hover:border-brand"
            >
              Contact me
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {badges.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-sm text-ink-muted">
                <Icon className="size-4 text-brand" aria-hidden />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/15 to-transparent blur-2xl"
          />
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-brand-soft shadow-xl shadow-brand/10"
            style={{
              maskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
            }}
          >
            <Image
              src="/rose-mae.jpg"
              alt="Rose Mae Alipan in scrubs"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover object-top"
            />
            <div aria-hidden className="absolute inset-0 bg-brand/45 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
