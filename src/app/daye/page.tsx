"use client";

import { SpotifyShell } from "@/components/spotify/SpotifyShell";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DayePage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top bar */}
      <div className="flex-shrink-0 flex items-center justify-between px-6 py-3 border-b border-white/[0.06]">
        <Link
          href="/"
          className="flex items-center gap-2 text-sp-sub text-[13px] hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M10 4L6 8l4 4" />
          </svg>
          Back to overview
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-sp-green/30 bg-sp-green/10">
            <div className="w-1.5 h-1.5 rounded-full bg-sp-green animate-pulse" />
            <span className="text-sp-green text-[11px] font-bold uppercase tracking-[0.12em]">
              Interactive Prototype
            </span>
          </div>
          <span className="text-sp-muted text-[12px] hidden sm:block">
            DAYE inside Spotify — simulated
          </span>
        </div>
      </div>

      {/* Main — phone frame centered */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10">
        {/* Phone frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          style={{
            width: 390,
            height: 780,
          }}
        >
          {/* Phone bezel */}
          <div
            className="absolute inset-0 rounded-[44px] pointer-events-none z-10"
            style={{
              boxShadow:
                "inset 0 0 0 2px #333, 0 0 0 8px #1a1a1a, 0 0 0 9px #111, 0 60px 120px rgba(0,0,0,0.9)",
            }}
          />

          {/* Dynamic island */}
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-black rounded-full pointer-events-none"
            style={{ width: 120, height: 34 }}
          />

          {/* Screen */}
          <div className="absolute inset-[2px] rounded-[42px] overflow-hidden bg-black">
            {/* Scrollable content with top padding for island */}
            <div className="h-full flex flex-col pt-[44px] pb-[8px]">
              <SpotifyShell />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Instruction */}
      <div className="flex-shrink-0 pb-6 text-center">
        <p className="text-sp-muted text-[13px]">
          Tap the <span className="text-white font-medium">+&nbsp;Create</span> button or the{" "}
          <span className="text-sp-green font-medium">DAYE banner</span> to open the AI DJ
        </p>
      </div>
    </div>
  );
}
