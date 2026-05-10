"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";
import Link from "next/link";

const impacts = [
  {
    metric: "Skip rate",
    current: "30%+ of tracks skipped",
    withDaye: "Session-fit tracks reduce skips to near zero",
    signal: "Spotify's skip rate is a direct proxy for recommendation quality",
  },
  {
    metric: "Time in app",
    current: "Passive listening sessions exit when playlist ends",
    withDaye: "Conversational sessions self-extend — users stay to adapt, not just play",
    signal: "AI Playlist (Beta) already shows +engagement from AI-generated sessions",
  },
  {
    metric: "Subscription retention",
    current: "Users who don't feel understood churn",
    withDaye: "Personalization that compounds creates switching costs that don't exist in playlists",
    signal: "Spotify DJ shows conversational AI increases premium attachment",
  },
  {
    metric: "Creator ecosystem",
    current: "Afrobeats, Amapiano, African music underrepresented in algorithmic playlists",
    withDaye: "DAYE surfaces culturally-specific music that search-based systems miss",
    signal: "African streaming revenue growing 30%+ YoY — underserved by current UX",
  },
];

export function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-32 border-t border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-8" ref={ref}>
        <SectionLabel number="05" label="Business Case" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.03em] text-white mb-6 leading-tight max-w-3xl"
        >
          Why this.{" "}
          <span className="text-sp-sub font-normal">Why Spotify. Why now.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-sp-sub text-[16px] max-w-xl mb-16 leading-relaxed"
        >
          Spotify has already proven the market with AI Playlist (Beta) and
          Spotify DJ. DAYE is the next category — not an experiment, a strategic
          move on the conversational music intelligence space before anyone else
          occupies it.
        </motion.p>

        {/* Impact table */}
        <div className="space-y-0 mb-20">
          <div className="grid grid-cols-[140px_1fr_1fr] gap-6 pb-3 mb-2">
            <div className="text-sp-muted text-[11px] uppercase tracking-[0.15em] font-bold" />
            <div className="text-sp-muted text-[11px] uppercase tracking-[0.15em] font-bold">Today</div>
            <div className="text-sp-green text-[11px] uppercase tracking-[0.15em] font-bold">With DAYE</div>
          </div>
          {impacts.map((row, i) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.07 }}
              className="grid grid-cols-[140px_1fr_1fr] gap-6 py-5 border-t border-white/[0.08] items-start"
            >
              <div className="text-white text-[14px] font-semibold">{row.metric}</div>
              <div className="text-sp-muted text-[14px] leading-relaxed">{row.current}</div>
              <div className="text-white text-[14px] leading-relaxed">{row.withDaye}</div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 border border-white/[0.08] rounded-lg"
        >
          <div>
            <div className="text-white font-bold text-[22px] tracking-[-0.01em] mb-2">
              Ready to see it work?
            </div>
            <p className="text-sp-sub text-[15px]">
              The prototype simulates DAYE as a native Spotify feature — same design
              language, real interaction model.
            </p>
          </div>
          <Link href="/daye" className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-sp-green text-black font-bold text-[15px] hover:bg-sp-green-bright transition-colors whitespace-nowrap"
            >
              Launch the Prototype →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
