import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Header } from "@/components/Header";
import { HeroLight } from "@/components/HeroLight";
import { MoveTheNeedle } from "@/components/MoveTheNeedle";
import { StatSection } from "@/components/StatSection";
import { SystemsMatrix } from "@/components/SystemsMatrix";
import { InView } from "@/components/motion-primitives/in-view";
import { ScrollProgress } from "@/components/motion-primitives/scroll-progress";
import { profile } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

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
      <InView variants={fadeUp} viewOptions={{ once: true, amount: 0.4 }}>
        <p className="text-[11px] tracking-wider text-brand uppercase">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-balance text-ink">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {description}
        </p>
      </InView>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <ScrollProgress className="fixed inset-x-0 top-0 z-50 bg-teal-accent" />
      <Header />
      <main className="flex-1 divide-y divide-line">
        <HeroLight />
        <StatSection />
        <MoveTheNeedle />

        <Section
          id="systems"
          eyebrow="Systems"
          title="Software and portals, by domain"
          description="The tools she works in daily, grouped by how a practice uses them."
        >
          <SystemsMatrix />
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
    </>
  );
}
