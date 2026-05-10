"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function LandingNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/90 backdrop-blur-md border-b border-white/[0.06]"
    >
      {/* Spotify wordmark treatment */}
      <div className="flex items-center gap-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#1DB954" />
          <path
            d="M17.5 16.3c-.2.3-.6.4-.9.2-2.5-1.5-5.6-1.9-9.3-1-. 4.1-.1.5.3.5.6-.1.4-.5.5-.8.4-4.1-1-7.6-.6-10.4 1.2-.3.2-.7.1-.9-.2-.2-.3-.1-.7.2-.9 3-1.8 6.9-2.2 11.2-1.2.4.1.6.5.5.9z"
            fill="#000"
            transform="scale(0.55) translate(3, 3)"
          />
          <path
            d="M8.7 6.3c-3.1.9-5.2 3-5.2 5.7 0 .4.3.7.7.7s.7-.3.7-.7c0-2 1.6-3.6 4.2-4.4.4-.1.6-.5.5-.9-.1-.3-.5-.5-.9-.4z"
            fill="#000"
            transform="scale(0.7) translate(3.5, 3.5)"
          />
        </svg>
        <span className="text-white font-bold text-[15px] tracking-[-0.01em]">Spotify</span>
        <span className="text-sp-muted text-[13px] font-medium mx-1">·</span>
        <span className="text-sp-sub text-[13px] font-medium">Core Experience Concept</span>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/docs" className="text-sp-sub text-[14px] font-medium hover:text-white transition-colors">
          Documents
        </Link>
        <Link href="/daye">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2 rounded-full bg-sp-green text-black text-[14px] font-bold hover:bg-sp-green-bright transition-colors"
          >
            Launch DAYE
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}
