"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";
import Link from "next/link";

const capabilities = [
  {
    n: "01",
    title: "AI DJ Mode",
    desc: "Natural language → intelligently sequenced music session. BPMs progress. Keys harmonize. Energy arcs build. It feels like a real DJ set.",
    example: '"Lagos rooftop, 11PM, energy building slowly"',
  },
  {
    n: "02",
    title: "Live Session Adaptation",
    desc: "Modify mid-session through conversation. Sessions evolve — they never restart. The system retains context across every instruction.",
    example: '"Darker. Less vocal. Keep the same BPM."',
  },
  {
    n: "03",
    title: "AI Producer Mode",
    desc: "Upload voice notes, humming, or freestyle. DAYE generates beats, suggests instrumentation, and builds sonic environments from raw ideas.",
    example: '"Make this feel cinematic and South African"',
  },
  {
    n: "04",
    title: "Music Intelligence",
    desc: "Ask anything. Genre origins. Artist context. Why a transition works. Lyric meaning. DAYE responds like a world-class music expert.",
    example: '"Why does this album feel so different from his earlier work?"',
  },
];

export function FeatureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="feature" className="py-32 border-t border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-8" ref={ref}>
        <SectionLabel number="03" label="The Feature" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.03em] text-white mb-6 leading-tight"
            >
              DAYE lives{" "}
              <span className="text-sp-green">inside Spotify.</span>
              <br />
              <span className="text-sp-sub font-normal text-[clamp(20px,3vw,36px)]">
                Not beside it.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-sp-sub text-[16px] mb-8 leading-relaxed"
            >
              Like AI Playlist (Beta) — already shipping in Spotify — DAYE is a
              native feature, not a third-party integration. It sits within
              Spotify&apos;s existing Create menu, speaks Spotify&apos;s design language,
              and accesses the full catalog.
            </motion.p>

            {/* Positioned within Spotify note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="p-5 border border-sp-green/20 bg-sp-green/5 rounded-lg mb-10"
            >
              <div className="text-sp-green text-[12px] font-bold uppercase tracking-[0.15em] mb-2">
                Product Positioning
              </div>
              <p className="text-white text-[14px] leading-relaxed">
                DAYE is to AI Playlist what Spotify DJ is to Autoplay — a category
                jump, not an iteration. It extends what Spotify has already proven
                users want into a fundamentally more powerful experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Link href="/daye">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full bg-sp-green text-black font-bold text-[15px] hover:bg-sp-green-bright transition-colors"
                >
                  See DAYE inside Spotify →
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Capabilities list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-1"
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.n}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="p-5 border-b border-white/[0.06] group hover:bg-sp-elevated transition-colors cursor-default"
              >
                <div className="flex items-start gap-4">
                  <span className="text-sp-muted text-[12px] font-mono mt-1 w-6 flex-shrink-0">
                    {cap.n}
                  </span>
                  <div>
                    <div className="text-white font-semibold text-[16px] mb-1">
                      {cap.title}
                    </div>
                    <p className="text-sp-sub text-[14px] leading-relaxed mb-2">
                      {cap.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sp-card rounded text-[12px] font-mono text-sp-sub">
                      {cap.example}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
