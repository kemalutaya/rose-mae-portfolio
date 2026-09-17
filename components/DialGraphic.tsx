const TICKS = Array.from({ length: 24 }, (_, i) => i * 15);

/** Decorative dial — a "dialed in" metaphor for consistent process, not a
 *  literal control. Purely illustrative, drawn as inline SVG. */
export function DialGraphic() {
  return (
    <svg viewBox="0 0 240 240" className="w-full max-w-[280px]" role="presentation">
      <defs>
        <radialGradient id="dial-face" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="var(--color-teal-accent)" stopOpacity="0.9" />
          <stop offset="35%" stopColor="var(--color-teal)" />
          <stop offset="100%" stopColor="var(--color-brand-hover)" />
        </radialGradient>
        <radialGradient id="dial-rim" cx="50%" cy="50%" r="50%">
          <stop offset="82%" stopColor="var(--color-line-strong)" stopOpacity="0" />
          <stop offset="90%" stopColor="var(--color-line-strong)" />
          <stop offset="100%" stopColor="var(--color-line)" />
        </radialGradient>
      </defs>

      <circle cx="120" cy="120" r="118" fill="url(#dial-rim)" />

      {TICKS.map((deg) => (
        <line
          key={deg}
          x1="120"
          y1="14"
          x2="120"
          y2={deg % 90 === 0 ? "26" : "21"}
          stroke="var(--color-ink-subtle)"
          strokeWidth={deg % 90 === 0 ? 2 : 1}
          strokeLinecap="round"
          opacity={0.5}
          transform={`rotate(${deg} 120 120)`}
        />
      ))}

      <circle cx="120" cy="120" r="86" fill="url(#dial-face)" />
      <circle cx="120" cy="120" r="86" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="1" />

      <line
        x1="120"
        y1="120"
        x2="120"
        y2="52"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        transform="rotate(-35 120 120)"
      />
      <circle cx="120" cy="120" r="8" fill="white" fillOpacity="0.9" />
    </svg>
  );
}
