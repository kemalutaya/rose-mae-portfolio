/** Blurred horizontal light beam marking the hero/content seam. Blue-only,
 *  not the green/blue/purple version this was modeled on. Fades the black
 *  hero down into the light canvas so the seam isn't a hard cut. */
export function GradientDivider() {
  return (
    <div
      aria-hidden
      className="relative h-20 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #000 0%, var(--color-canvas) 100%)",
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-16 blur-2xl"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-teal) 15%, var(--color-teal-accent) 50%, var(--color-brand) 85%, transparent 100%)",
          opacity: 0.8,
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-teal-accent) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
