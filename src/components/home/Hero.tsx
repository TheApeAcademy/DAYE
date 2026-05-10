"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Waveform } from "@/components/ui/Waveform";

const TAGLINES = [
  "Tell Daye what you feel.",
  "Rooftop Lagos at 11PM.",
  "Dark Afro-house. Deep.",
  "Heartbreak but dignified.",
  "Gym mode. Maximum intensity.",
  "Late-night drive. Luxury.",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-daye-bg">
      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.15] blur-[120px] animate-float-slow pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[100px] animate-float-medium pointer-events-none"
        style={{ background: "radial-gradient(circle, #22D3EE, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.05] blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1ED760, transparent 70%)" }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-daye-green animate-pulse" />
          <span className="text-sm text-white/60 font-medium tracking-wider uppercase">
            AI-Native Music Intelligence
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[120px] md:text-[160px] font-black tracking-[-0.05em] leading-none text-white mb-6 select-none"
          style={{
            textShadow: "0 0 80px rgba(139,92,246,0.3), 0 0 160px rgba(139,92,246,0.15)",
          }}
        >
          DAYE
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-xl md:text-2xl text-white/50 font-light tracking-wide mb-4 max-w-2xl"
        >
          The AI-native conversational DJ & producer that deeply understands{" "}
          <span className="text-white/80">music, emotion, and vibe.</span>
        </motion.p>

        {/* Tagline rotator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-8 flex items-center justify-center mb-12"
        >
          <TaglineRotator taglines={TAGLINES} />
        </motion.div>

        {/* Waveform */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <Waveform bars={32} color="#8B5CF6" active className="opacity-60" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link href="/prototype">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-base tracking-wide hover:bg-daye-green transition-colors duration-200"
            >
              Enter the Experience
              <ArrowRight size={18} />
            </motion.button>
          </Link>
          <Link href="/docs">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/70 font-medium text-base hover:border-white/40 hover:text-white transition-all duration-200"
            >
              Read the Vision
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function TaglineRotator({ taglines }: { taglines: string[] }) {
  return (
    <motion.div
      key={0}
      animate={{}}
      className="relative overflow-hidden"
    >
      <RotatingText items={taglines} />
    </motion.div>
  );
}

function RotatingText({ items }: { items: string[] }) {
  return (
    <motion.div
      animate={{ y: ["0%", `-${(items.length - 1) * 100}%`] }}
      transition={{
        duration: items.length * 2,
        repeat: Infinity,
        ease: "easeInOut",
        times: items.map((_, i) => i / (items.length - 1)),
        repeatDelay: 0,
      }}
      style={{ height: `${items.length * 2}rem` }}
      className="flex flex-col"
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="h-8 flex items-center justify-center text-daye-green/80 font-mono text-sm tracking-[0.2em] uppercase"
        >
          {item}
        </div>
      ))}
    </motion.div>
  );
}
