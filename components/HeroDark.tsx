import { PhotoCollage } from "@/components/PhotoCollage";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { profile } from "@/lib/data";

export function HeroDark() {
  return (
    <section id="top" className="bg-black px-4 pt-20 pb-14 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <TextEffect
          as="h1"
          per="word"
          preset="fade-in-blur"
          className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl"
        >
          {profile.name}
        </TextEffect>
        <TextEffect
          as="p"
          per="word"
          preset="fade-in-blur"
          delay={0.3}
          speedReveal={1.6}
          className="mt-3 text-base text-balance text-white/60 sm:text-lg"
        >
          {`${profile.role} who keeps insurance eligibility, prior authorizations, and claims moving, without letting a patient visit stall on paperwork.`}
        </TextEffect>
      </div>

      <PhotoCollage />
    </section>
  );
}
