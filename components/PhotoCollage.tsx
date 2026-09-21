"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { Tilt } from "@/components/motion-primitives/tilt";

const helpTags = ["Eligibility", "Prior Auth", "Claims"];

/** A winding route with milestone dots behind the monogram, a "path to
 *  here" metaphor for the career-history card. Purely illustrative. */
function CareerPathLines() {
  return (
    <svg
      viewBox="0 0 200 250"
      className="absolute inset-0 h-full w-full opacity-40"
      role="presentation"
    >
      <path
        d="M20 230 C 60 190, 10 150, 50 120 S 130 90, 100 60 S 170 30, 150 10"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />
      {[
        [20, 230],
        [50, 120],
        [100, 60],
        [150, 10],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="white" fillOpacity="0.7" />
      ))}
    </svg>
  );
}

/** Mt. Apo's silhouette over a simple skyline, standing in for a photo of
 *  Davao City on the location card. Purely illustrative. */
function DavaoSkyline() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-x-0 bottom-0 h-2/3 w-full opacity-35"
      preserveAspectRatio="xMidYMax slice"
      role="presentation"
    >
      <path
        d="M0 170 L55 90 L80 130 L110 55 L150 170 Z"
        fill="white"
        fillOpacity="0.55"
      />
      <rect x="10" y="150" width="18" height="30" fill="white" fillOpacity="0.3" />
      <rect x="150" y="130" width="22" height="50" fill="white" fillOpacity="0.3" />
      <rect x="175" y="150" width="16" height="30" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

/**
 * Placeholder art for the three collage cards, since there are no real
 * photos yet. The monogram tile and the location-card illustration are drawn
 * entirely in CSS/SVG, in-theme, so the layout looks finished rather than
 * broken until real photos replace them.
 */
export function PhotoCollage() {
  return (
    <div className="relative mx-auto mt-14 h-[420px] max-w-sm sm:h-[440px] sm:max-w-md">
      <Tilt
        rotationFactor={4}
        className="absolute top-0 left-0 z-10 w-[58%] -rotate-6"
        style={{ transformOrigin: "center" }}
      >
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40 backdrop-blur-sm">
          <p className="text-[10px] tracking-wider text-white/50 uppercase">
            Where I help
          </p>
          <div className="mt-3 flex flex-col items-start gap-2.5">
            {helpTags.map((tag, i) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-sm"
                style={{
                  marginLeft: `${i * 14}px`,
                  background:
                    i % 2 === 0
                      ? "linear-gradient(135deg, var(--color-brand), var(--color-teal))"
                      : "linear-gradient(135deg, var(--color-teal), var(--color-teal-accent))",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Tilt>

      <Tilt
        rotationFactor={4}
        className="absolute top-10 left-[36%] z-20 w-[52%] rotate-3"
        style={{ transformOrigin: "center" }}
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
          <p className="bg-white/[0.04] px-4 pt-3 pb-2 text-[10px] tracking-wider text-white/50 uppercase">
            How I got here
          </p>
          <div
            className="relative flex aspect-[4/5] items-center justify-center overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, var(--color-teal-accent), var(--color-teal) 55%, var(--color-brand-hover) 100%)",
            }}
          >
            <Image
              src="/rose-mae.jpg"
              alt="Rose Mae Alipan"
              fill
              sizes="220px"
              className="object-cover mix-blend-luminosity opacity-90"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, transparent 35%, var(--color-brand-hover) 105%)",
              }}
            />
            <CareerPathLines />
          </div>
        </div>
      </Tilt>

      <Tilt
        rotationFactor={4}
        className="absolute top-[260px] left-[16%] z-30 w-[50%] -rotate-3 sm:top-[270px]"
        style={{ transformOrigin: "center" }}
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40">
          <p className="px-4 pt-3 pb-2 text-[10px] tracking-wider text-white/50 uppercase">
            Life off-screen
          </p>
          <div
            className="relative flex aspect-square items-center justify-center overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, var(--color-brand) 0%, var(--color-brand-hover) 100%)",
            }}
          >
            <DavaoSkyline />
            <MapPin className="relative size-8 text-teal-accent" aria-hidden />
          </div>
          <p className="px-4 py-2 text-[11px] text-white/60">Davao City, PH</p>
        </div>
      </Tilt>
    </div>
  );
}
