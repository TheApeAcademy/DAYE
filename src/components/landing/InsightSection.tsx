"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";

const contrast = [
  {
    label: "Today",
    color: "text-sp-muted",
    steps: [
      "Open Spotify",
      "Think of a song or artist",
      "Build a playlist manually",
      "Skip 30% of tracks",
      "Lose the vibe",
      "Start over",
    ],
  },
  {
    label: "With DAYE",
    color: "text-sp-green",
    steps: [
      "Open Spotify",
      "Tell DAYE what you feel",
      "DAYE builds the session",
      "Adapt in real time: \"darker\" / \"more energy\"",
      "The vibe evolves with you",
      "Session ends when you do",
    ],
  },
];

export function InsightSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="insight" className="py-32 border-t border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-8" ref={ref}>
        <SectionLabel number="02" label="The Insight" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.03em] text-white max-w-3xl mb-6 leading-tight"
        >
          People don&apos;t think in song titles.{" "}
          <span className="text-sp-sub font-normal">They think in feelings.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-sp-sub text-[16px] max-w-xl mb-20 leading-relaxed"
        >
          When someone opens Spotify, they don&apos;t have a track in mind. They have
          a moment. A mood. A place. The interface forces them to translate feeling
          into search — a fundamental mismatch that DAYE eliminates.
        </motion.p>

        {/* Contrast grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.08] mb-20">
          {contrast.map((col, ci) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + ci * 0.1 }}
              className="bg-black p-8"
            >
              <div className={`text-[13px] font-bold uppercase tracking-[0.15em] mb-6 ${col.color}`}>
                {col.label}
              </div>
              <div className="space-y-3">
                {col.steps.map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="text-sp-muted text-[12px] font-mono w-5 mt-[2px] flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[15px] leading-snug ${
                        col.label === "With DAYE" ? "text-white" : "text-sp-muted"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="border-l-2 border-sp-green pl-8 py-2"
        >
          <p className="text-[22px] font-medium text-white leading-snug tracking-[-0.01em] max-w-2xl">
            "The gap between what a listener feels and what they can search
            for is where Spotify loses them. DAYE closes that gap."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
