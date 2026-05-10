"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stagger = {
  container: { transition: { staggerChildren: 0.1 } },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  },
};

export function LandingHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black pt-20">
      {/* Thin green accent line at top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-sp-green origin-left"
      />

      <div className="max-w-[1200px] mx-auto px-8 w-full">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.div
            variants={stagger.item}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-2 h-2 rounded-full bg-sp-green animate-pulse-green" />
            <span className="text-sp-sub text-[13px] font-medium tracking-[0.15em] uppercase">
              A Product Concept — Spotify Core Experience PM
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            variants={stagger.item}
            className="text-[clamp(80px,14vw,200px)] font-black leading-none tracking-[-0.04em] text-white mb-8"
            style={{ lineHeight: 0.9 }}
          >
            DAYE
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={stagger.item}
            className="text-[clamp(22px,3vw,40px)] font-light text-white/70 mb-6 max-w-2xl leading-tight tracking-[-0.02em]"
          >
            What if Spotify could{" "}
            <span className="text-white font-medium">read the room?</span>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={stagger.item}
            className="text-[16px] text-sp-sub max-w-xl leading-relaxed mb-14"
          >
            DAYE is a conversational AI music intelligence system — a native Spotify
            feature that replaces manual curation with real emotional understanding.
            You describe the vibe. DAYE builds the session.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={stagger.item}
            className="flex items-center gap-4"
          >
            <Link href="/daye">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full bg-sp-green text-black font-bold text-[15px] hover:bg-sp-green-bright transition-colors"
              >
                Launch the Prototype
              </motion.button>
            </Link>
            <a href="#problem">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-[15px] hover:border-white/40 transition-colors"
              >
                Read the Case
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom horizontal rule */}
      <div className="absolute bottom-12 left-8 right-8 flex items-center gap-6">
        <div className="flex-1 h-[1px] bg-white/10" />
        <span className="text-sp-muted text-[12px] font-mono tracking-wider uppercase">
          Scroll to explore
        </span>
        <div className="w-16 h-[1px] bg-white/10" />
      </div>
    </section>
  );
}
