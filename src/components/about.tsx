"use client";

import dynamic from "next/dynamic";
import { TextOutline } from "@/components/text-outline";

const TechObject = dynamic(
  () => import("@/components/tech-object").then((m) => m.TechObject),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-2xl bg-grey-1" />
    ),
  }
);

export function About() {
  return (
    <section
      className="relative min-h-screen flex flex-col md:grid md:grid-cols-2 md:min-h-screen bg-fg text-bg"
    >
      {/* Left: intro + scroll-responsive outline heading */}
      <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-0">
        <p className="mb-4 text-xs tracking-[0.3em] text-black/50 uppercase">
          About
        </p>
        <TextOutline className="font-display font-bold tracking-tight text-[clamp(1.3rem,3.5vw,2.5rem)] leading-[1.1]">
          Python full-stack,
          <br />
          shipped end to end.
        </TextOutline>
        <p className="mt-4 max-w-lg text-base leading-6 text-black/70 md:text-lg md:leading-7">
          I&apos;m GITARAMO Mihigo Joseph, a final-year Business Information Technology student at the University of Rwanda, passionate about Artificial Intelligence, Data Science, and Software Development.

I enjoy transforming data into meaningful insights, building backend systems, and developing technology-driven solutions to real-world problems. My technical interests include Python, Django, React, SQL, Data Analytics, and Machine Learning.

My goal is to become an AI Engineer, building innovative and impactful solutions that contribute to technological advancement and create meaningful opportunities, particularly across Africa.
        </p>
      </div>

      {/* Right: realistic 3D tech object */}
      <div className="relative flex items-center justify-center overflow-hidden px-4 py-8 md:px-8 md:py-0">
        <div className="h-full w-full max-w-[520px]">
          <TechObject />
        </div>
      </div>
    </section>
  );
}