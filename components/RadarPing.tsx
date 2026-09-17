/** Concentric rings pulsing outward, an "actively broadcasting
 *  availability" metaphor for the Contact section. */
export function RadarPing() {
  return (
    <svg viewBox="0 0 100 100" className="size-14" role="presentation">
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx="50"
          cy="50"
          r="6"
          fill="none"
          stroke="var(--color-teal-accent)"
          strokeWidth="2"
          opacity="0"
        >
          <animate
            attributeName="r"
            values="6;46"
            dur="2.4s"
            begin={`${i * 0.8}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;0"
            dur="2.4s"
            begin={`${i * 0.8}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      <circle cx="50" cy="50" r="6" fill="var(--color-teal-accent)" />
    </svg>
  );
}
