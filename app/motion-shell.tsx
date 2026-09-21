"use client";

import { useEffect, type ReactNode } from "react";

export default function MotionShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".site-header");
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-links a[href^="#"]');
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", `${max > 0 ? window.scrollY / max : 0}`);
      header?.toggleAttribute("data-scrolled", window.scrollY > 24);
    };

    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      root.style.setProperty("--portrait-x", `${(event.clientX / window.innerWidth - 0.5) * 10}px`);
      root.style.setProperty("--portrait-y", `${(event.clientY / window.innerHeight - 0.5) * 8}px`);
    };

    let revealObserver: IntersectionObserver | undefined;
    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
        { threshold: 0.14, rootMargin: "0px 0px -8%" },
      );
      revealObserver = observer;
      revealItems.forEach((item) => observer.observe(item));
      window.addEventListener("pointermove", updatePointer, { passive: true });
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.toggleAttribute("data-active", link.hash === `#${entry.target.id}`));
      }),
      { threshold: 0.35 },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      revealObserver?.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return <>{children}</>;
}
