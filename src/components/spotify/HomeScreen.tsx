"use client";

import { motion } from "framer-motion";

const RECENT = [
  { name: "DAYE Session — Lagos Rooftop", color: "#1DB954", emoji: "🌆" },
  { name: "This Is Burna Boy", color: "#E2B96F", emoji: "🔥" },
  { name: "Amapiano Hits", color: "#4FC3F7", emoji: "🎹" },
  { name: "Dark Afro-House", color: "#9C27B0", emoji: "🌑" },
  { name: "Late Night R&B", color: "#F06292", emoji: "🌃" },
  { name: "Afrobeats 2024", color: "#FF8F00", emoji: "⚡" },
];

const JUMP_BACK = [
  { name: "Heartbreak Sovereign", sub: "Daye Session", color: "#F43F5E" },
  { name: "Gym: Beast Mode", sub: "Daye Session", color: "#22D3EE" },
  { name: "Golden Morning", sub: "Daye Session", color: "#F59E0B" },
  { name: "Dark Afro-House Mix", sub: "Daye Session", color: "#8B5CF6" },
];

const DAYE_FEATURED = [
  { label: "Rooftop Lagos", tag: "Afrobeats · Afro-house" },
  { label: "Dark Club Session", tag: "Afro-house · Underground" },
  { label: "Luxury Night Drive", tag: "R&B · Neo-soul" },
];

interface HomeScreenProps {
  onOpenDaye: () => void;
}

export function HomeScreen({ onOpenDaye }: HomeScreenProps) {
  return (
    <div className="flex-1 overflow-y-auto phone-scroll bg-black">
      {/* Top filter bar */}
      <div className="flex items-center gap-2 px-3 pt-3 pb-3 sticky top-0 bg-black z-10">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0">
          B
        </div>
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {["All", "Music", "Podcasts"].map((f, i) => (
            <button
              key={f}
              className={`px-4 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap flex-shrink-0 transition-colors ${
                i === 0
                  ? "bg-white text-black"
                  : "bg-[#282828] text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Recent grid */}
      <div className="grid grid-cols-2 gap-2 px-3 mb-6">
        {RECENT.map((item) => (
          <button
            key={item.name}
            onClick={onOpenDaye}
            className="flex items-center gap-2 bg-[#282828] rounded overflow-hidden hover:bg-[#383838] transition-colors"
          >
            <div
              className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-xl"
              style={{ background: item.color + "30" }}
            >
              {item.emoji}
            </div>
            <span className="text-white text-[12px] font-bold leading-tight truncate pr-2">
              {item.name}
            </span>
          </button>
        ))}
      </div>

      {/* DAYE featured banner */}
      <motion.button
        onClick={onOpenDaye}
        whileTap={{ scale: 0.98 }}
        className="mx-3 mb-6 p-4 rounded-xl w-[calc(100%-24px)] text-left relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a3a24 0%, #0d1f14 100%)", border: "1px solid #1DB95440" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-sp-green flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="black">
              <path d="M8.5 4.5a.5.5 0 010 1C5.5 5.5 3 7 3 7V3s2.5 1.5 5.5 1.5z" />
            </svg>
          </div>
          <span className="text-sp-green text-[11px] font-bold uppercase tracking-[0.15em]">
            DAYE · AI DJ — Beta
          </span>
        </div>
        <p className="text-white text-[16px] font-bold mb-1">What are we feeling tonight?</p>
        <p className="text-[#B3B3B3] text-[13px] mb-4">Tell DAYE your vibe. Get a session built for this exact moment.</p>
        <div className="flex gap-2">
          {DAYE_FEATURED.map((d) => (
            <div
              key={d.label}
              className="px-3 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-medium whitespace-nowrap"
            >
              {d.label}
            </div>
          ))}
        </div>
      </motion.button>

      {/* Jump back in */}
      <div className="px-3 mb-6">
        <h2 className="text-white text-[16px] font-bold mb-3">Jump back in</h2>
        <div className="grid grid-cols-2 gap-3">
          {JUMP_BACK.map((item) => (
            <button
              key={item.name}
              onClick={onOpenDaye}
              className="text-left"
            >
              <div
                className="w-full aspect-square rounded-lg mb-2 flex items-center justify-center text-3xl"
                style={{ background: item.color + "22", border: `1px solid ${item.color}30` }}
              >
                🎧
              </div>
              <div className="text-white text-[13px] font-semibold truncate">{item.name}</div>
              <div className="text-[#B3B3B3] text-[12px]">{item.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* New release */}
      <div className="px-3 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-orange-400/20 flex items-center justify-center text-base">🔥</div>
          <div>
            <div className="text-[#B3B3B3] text-[12px]">New release from</div>
            <div className="text-white text-[14px] font-bold">Burna Boy</div>
          </div>
        </div>
        <div
          className="rounded-lg overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #3a2000, #1a0f00)" }}
        >
          <div className="p-4 flex items-end justify-between">
            <div>
              <div className="text-[#B3B3B3] text-[11px] uppercase tracking-wider mb-1">Single</div>
              <div className="text-white text-[18px] font-black mb-1">TESTED</div>
              <div className="text-[#B3B3B3] text-[12px]">Burna Boy</div>
            </div>
            <button
              onClick={onOpenDaye}
              className="w-12 h-12 rounded-full bg-sp-green flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="black">
                <path d="M3 2l11 6-11 6V2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
