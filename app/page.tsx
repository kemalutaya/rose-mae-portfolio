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
      <p className="text-[11px] tracking-wider text-accent uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-balance text-slate-50">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
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
      <main className="flex-1 divide-y divide-slate-900">
        <Hero />

        <Section
          id="systems"
          eyebrow="Systems"
          title="Software and portals, by domain"
          description="The tools she works in daily, grouped by where they sit in a practice's back office."
        >
          <SystemsMatrix />
        </Section>

        <Section
          id="workflows"
          eyebrow="Workflows"
          title="How the back-office work actually runs"
          description="Two everyday tasks, shown end to end: verifying a morning's eligibility queue, and auditing a chart before the provider walks in. Both are interactive — click through them."
        >
          <VerificationDemo />
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Fifteen years of operations and support"
          description="Seven of them inside U.S. healthcare back-office work, with claims and customer operations before that."
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

      <footer className="border-t border-slate-900 py-8">
        <div className="mx-auto w-full max-w-6xl px-4 text-xs text-slate-600 sm:px-6">
          {profile.name} · {profile.location} · {profile.phone}
        </div>
      </footer>

      <RecruiterChat />
    </>
  );
}
