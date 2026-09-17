/** Three nodes with a dot travelling the connecting path on a loop, a
 *  "data moves between these systems" metaphor for the Systems section. */
export function FlowDiagram() {
  return (
    <svg viewBox="0 0 260 140" className="w-full max-w-[220px]" role="presentation">
      <defs>
        <linearGradient id="flow-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-teal-line)" />
          <stop offset="100%" stopColor="var(--color-teal-accent)" />
        </linearGradient>
      </defs>

      <path
        id="flow-path"
        d="M30 30 C 90 30, 90 110, 130 110 C 170 110, 170 30, 230 30"
        fill="none"
        stroke="url(#flow-line)"
        strokeWidth="2"
        strokeDasharray="4 5"
        opacity="0.6"
      />

      <circle cx="30" cy="30" r="9" fill="var(--color-teal-panel-soft)" stroke="var(--color-teal-accent)" strokeWidth="1.5" />
      <circle cx="130" cy="110" r="9" fill="var(--color-teal-panel-soft)" stroke="var(--color-teal-accent)" strokeWidth="1.5" />
      <circle cx="230" cy="30" r="9" fill="var(--color-teal-panel-soft)" stroke="var(--color-teal-accent)" strokeWidth="1.5" />

      <circle r="5" fill="var(--color-teal-accent)">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#flow-path" />
        </animateMotion>
      </circle>
    </svg>
  );
}
