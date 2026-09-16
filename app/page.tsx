import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RecruiterChat } from "@/components/RecruiterChat";
import { SystemsMatrix } from "@/components/SystemsMatrix";
import { VerificationDemo } from "@/components/VerificationDemo";
import { profile } from "@/lib/data";

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6">
      <p className="text-[11px] tracking-wider text-brand uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-balance text-ink">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
        {description}
      </p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1 divide-y divide-line">
        <Hero />

        <Section
          id="systems"
          eyebrow="Systems"
          title="Software and portals, by domain"
          description="The tools she works in daily, grouped by how a practice uses them."
        >
          <SystemsMatrix />
        </Section>

        <Section
          id="workflows"
          eyebrow="Workflows"
          title="How the day-to-day work actually runs"
          description="Two everyday tasks, shown end to end: verifying a morning's eligibility queue, and auditing a chart before the provider walks in. Both are interactive — click through them."
        >
          <VerificationDemo />
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Fifteen years of healthcare and support work"
          description="Seven of them supporting U.S. healthcare providers, with claims and customer service before that."
        >
          <ExperienceSection />
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Hiring for eligibility, prior auth, or patient scheduling?"
          description="Available immediately and aligned to U.S. business hours."
        >
          <ContactSection />
        </Section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto w-full max-w-6xl px-4 text-xs text-ink-subtle sm:px-6">
          {profile.name} · {profile.location} · {profile.phone}
        </div>
      </footer>

      <RecruiterChat />
    </>
  );
}
