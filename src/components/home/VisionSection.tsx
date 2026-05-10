"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const quotes = [
  {
    text: "Music should respond to you the way a great DJ does. A world-class DJ doesn't play songs — they read the room.",
    accent: "#8B5CF6",
  },
];

const stats = [
  { value: "30%", label: "of tracks get skipped", sublabel: "because playlists don't adapt" },
  { value: "0", label: "platforms understand vibe", sublabel: "in natural language" },
  { value: "∞", label: "emotional states", sublabel: "one conversational layer handles all" },
];

export function VisionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden bg-daye-surface-1">
      {/* Background gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-[0.08] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8B5CF6, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="text-6xl text-daye-purple/30 font-serif leading-none mb-6">"</div>
          <p className="text-3xl md:text-4xl font-light text-white/80 leading-relaxed max-w-3xl mx-auto tracking-tight">
            {quotes[0].text}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-daye-purple/40" />
            <span className="text-daye-purple/60 text-sm font-mono tracking-wider">DAYE PRODUCT VISION</span>
            <div className="w-8 h-[1px] bg-daye-purple/40" />
          </div>
        </motion.blockquote>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl border border-white/[0.06] bg-daye-bg/50"
            >
              <div className="text-5xl font-black text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-white/60 font-medium mb-1">{stat.label}</div>
              <div className="text-white/30 text-sm">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-daye-cyan text-sm font-mono tracking-[0.3em] uppercase mb-4">The Philosophy</p>
            <h3 className="text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Music is a conversation.
              <br />
              <span className="text-white/30">It always has been.</span>
            </h3>
            <p className="text-white/40 leading-relaxed">
              Every great DJ set is a dialogue between a curator and their crowd. The music responds. The energy adapts.
              Transitions are felt, not just heard.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Users speak in vibes, not song titles",
              "Sessions evolve like real DJ sets",
              "Transitions are harmonic, never abrupt",
              "The system has taste — not just data",
            ].map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-daye-green/20 border border-daye-green/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-daye-green" />
                </div>
                <span className="text-white/60">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-24"
        >
          <p className="text-white/30 mb-8 text-lg">
            Ready to experience music that understands you?
          </p>
          <Link href="/prototype">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-daye-surface-2 border border-white/10 text-white font-semibold text-lg hover:bg-daye-surface-3 hover:border-white/20 transition-all duration-200"
            >
              Open the Prototype
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
