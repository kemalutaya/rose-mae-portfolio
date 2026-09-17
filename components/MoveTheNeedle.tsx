import { DialGraphic } from "@/components/DialGraphic";

const bullets = [
  "System fluency across Availity, the UHC provider portal, and IMS",
  "Catch denials and coverage gaps before they become write-offs",
  "Communicate status clearly so nothing stalls quietly on someone's desk",
];

export function MoveTheNeedle() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-[11px] tracking-wider text-brand uppercase">Approach</p>
      <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl">
        How I stay effective
      </h2>

      <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-ink">
            I own eligibility and claims end to end, from the first verification
            to the final submission, so nothing falls through before a provider
            ever sees the patient.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-line-strong" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <DialGraphic />
        </div>
      </div>
    </section>
  );
}
