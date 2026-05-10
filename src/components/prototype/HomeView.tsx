"use client";

import { motion } from "framer-motion";
import { Sparkles, Play, Clock, TrendingUp } from "lucide-react";

const recentSessions = [
  { name: "Rooftop Lagos", subtitle: "Afrobeats · 47 min", color: "#F59E0B", emoji: "🌆" },
  { name: "Dark Afro-House", subtitle: "Underground · 1h 12min", color: "#8B5CF6", emoji: "🌑" },
  { name: "Gym: Beast Mode", subtitle: "Trap · Hip-hop · 38 min", color: "#22D3EE", emoji: "⚡" },
  { name: "Heartbreak Sovereign", subtitle: "Neo-soul · R&B · 52 min", color: "#F43F5E", emoji: "💔" },
  { name: "Luxury Night Drive", subtitle: "R&B · Trap soul · 44 min", color: "#8B5CF6", emoji: "🌃" },
  { name: "Golden Morning", subtitle: "Indie · Folk · 31 min", color: "#F59E0B", emoji: "🌅" },
];

const trending = [
  { title: "Asibe Happy", artist: "Kabza De Small", tag: "Amapiano", color: "#22D3EE" },
  { title: "Ye", artist: "Burna Boy", tag: "Afrobeats", color: "#F59E0B" },
  { title: "SICKO MODE", artist: "Travis Scott", tag: "Trap", color: "#8B5CF6" },
  { title: "Nights", artist: "Frank Ocean", tag: "Alt R&B", color: "#F43F5E" },
];

export function HomeView({ onDayeClick }: { onDayeClick: () => void }) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-white text-3xl font-bold mb-2">Good evening.</h1>
        <p className="text-white/40">What are we feeling tonight?</p>
      </motion.div>

      {/* Daye CTA */}
      <motion.button
        onClick={onDayeClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.01 }}
        className="w-full p-5 rounded-2xl mb-8 text-left relative overflow-hidden group"
        style={{
          background: "linear-gradient(135deg, #8B5CF620 0%, #22D3EE15 100%)",
          border: "1px solid rgba(139,92,246,0.25)",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, #8B5CF630 0%, #22D3EE20 100%)",
          }}
        />
        <div className="relative flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-daye-purple/20 border border-daye-purple/30 flex items-center justify-center">
            <Sparkles size={20} className="text-daye-purple" />
          </div>
          <div>
            <div className="text-white font-semibold text-base flex items-center gap-2">
              Talk to Daye
              <span className="w-2 h-2 rounded-full bg-daye-green animate-pulse" />
            </div>
            <p className="text-white/40 text-sm mt-0.5">
              Tell me your vibe. I'll build the perfect session.
            </p>
          </div>
          <div className="ml-auto">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-daye-green transition-colors">
              <Play size={16} className="text-black ml-0.5" fill="black" />
            </div>
          </div>
        </div>
      </motion.button>

      {/* Recent Sessions */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <Clock size={14} className="text-white/40" />
          <h2 className="text-white font-semibold text-base">Recent Daye Sessions</h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {recentSessions.map((session, i) => (
            <motion.button
              key={session.name}
              onClick={onDayeClick}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-daye-surface-2 hover:bg-daye-surface-3 transition-colors text-left group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: `${session.color}20` }}
              >
                {session.emoji}
              </div>
              <div className="min-w-0">
                <div className="text-white text-sm font-medium truncate">{session.name}</div>
                <div className="text-white/35 text-xs truncate">{session.subtitle}</div>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                  <Play size={12} className="text-black ml-0.5" fill="black" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Trending */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={14} className="text-white/40" />
          <h2 className="text-white font-semibold text-base">Daye's Picks Right Now</h2>
        </div>
        <div className="space-y-1">
          {trending.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.06 }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group cursor-pointer"
            >
              <span className="text-white/20 text-xs font-mono w-5 text-center">{i + 1}</span>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                style={{ background: `${track.color}20` }}
              >
                🎵
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white/80 text-sm font-medium truncate">{track.title}</div>
                <div className="text-white/35 text-xs">{track.artist}</div>
              </div>
              <span
                className="text-[11px] px-2 py-0.5 rounded-full font-mono flex-shrink-0"
                style={{ background: `${track.color}15`, color: `${track.color}99` }}
              >
                {track.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
