"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";

const problems = [
  {
    stat: "30%+",
    label: "of tracks skipped",
    desc: "Users skip nearly one in three songs they play. The platform can't distinguish between \"wrong vibe\" and \"wrong song\" — so it never learns.",
  },
  {
    stat: "0",
    label: "platforms understand intent",
    desc: "\"I want music that sounds like a Lagos rooftop at midnight\" — no streaming platform can process that. They serve genres and artists, not human feeling.",
  },
  {
    stat: "Static",
    label: "playlists in a dynamic world",
    desc: "Mood shifts. Energy climbs. A playlist built at 8PM doesn't fit at 11PM. There is no system that adapts in real time to where a session is going.",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-32 border-t border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-8" ref={ref}>
        <SectionLabel number="01" label="The Problem" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.03em] text-white max-w-3xl mb-6 leading-tight"
        >
          Streaming gave us infinite music.{" "}
          <span className="text-sp-sub font-normal">
            It never gave us musical understanding.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sp-sub text-[16px] max-w-xl mb-20 leading-relaxed"
        >
          Spotify solved the supply problem — 100M+ tracks available instantly.
          But the demand problem — understanding what a listener actually needs in
          a given moment — remains completely unsolved.
        </motion.p>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.08]">
          {problems.map((p, i) => (
            <motion.div
              key={p.stat}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
              className="bg-black p-8"
            >
              <div className="text-[44px] font-black text-white mb-2 tracking-tight leading-none">
                {p.stat}
              </div>
              <div className="text-sp-green text-[13px] font-semibold uppercase tracking-[0.1em] mb-4">
                {p.label}
              </div>
              <p className="text-sp-sub text-[14px] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
