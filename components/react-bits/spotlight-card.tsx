"use client";

import {
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type PointerEventHandler,
  type PropsWithChildren,
} from "react";

type SpotlightCardProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    spotlightColor?: string;
  }
>;

type SpotlightStyle = CSSProperties & {
  "--spotlight-color"?: string;
};

// Adapted from React Bits SpotlightCard (TS-CSS) with semantic article markup.
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(25, 181, 165, 0.13)",
  onPointerMove,
  style,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handlePointerMove: PointerEventHandler<HTMLElement> = (event) => {
    const card = cardRef.current;
    if (!card || event.pointerType === "touch") return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    onPointerMove?.(event);
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`card-spotlight ${className}`.trim()}
      style={{ "--spotlight-color": spotlightColor, ...style } as SpotlightStyle}
      {...props}
    >
      {children}
    </article>
  );
}
