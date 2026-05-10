"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Waveform } from "@/components/ui/Waveform";
import { Track } from "@/data/tracks";
import { SessionState } from "@/data/vibeResponses";
import { cn } from "@/lib/utils";
import { Clock, Zap, Music2, ListMusic } from "lucide-react";

interface SessionPanelProps {
  session: SessionState | null;
  isPlaying: boolean;
  onTrackSelect: (track: Track) => void;
  nowPlayingId: string | null;
}

function EnergyBar({ energy, color }: { energy: number; color: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-white/40 text-xs font-medium flex items-center gap-1">
          <Zap size={11} /> Session Energy
        </span>
        <span className="text-white/60 text-xs font-mono">{energy}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${energy}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function TrackRow({
  track,
  index,
  isActive,
  isPlaying,
  color,
  onClick,
}: {
  track: Track;
  index: number;
  isActive: boolean;
  isPlaying: boolean;
  color: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors group",
        isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"
      )}
    >
      {/* Index / waveform */}
      <div className="w-6 flex items-center justify-center flex-shrink-0">
        {isActive && isPlaying ? (
          <Waveform bars={4} color={color} active size="sm" />
        ) : (
          <span
            className={cn(
              "text-xs font-mono transition-colors",
              isActive ? "text-white" : "text-white/25 group-hover:text-white/50"
            )}
          >
            {index + 1}
          </span>
        )}
      </div>

      {/* Track info */}
      <div className="flex-1 min-w-0">
        <div
          className={cn(
            "text-sm font-medium truncate transition-colors",
            isActive ? "text-white" : "text-white/70 group-hover:text-white"
          )}
          style={isActive ? { color } : {}}
        >
          {track.title}
        </div>
        <div className="text-white/35 text-xs truncate">{track.artist}</div>
      </div>

      {/* Genre + duration */}
      <div className="flex flex-col items-end gap-1 flex-shrink-0">
        <span
          className="text-[10px] font-mono px-2 py-0.5 rounded-full"
          style={{ background: `${color}18`, color: `${color}99` }}
        >
          {track.genre}
        </span>
        <span className="text-white/25 text-[11px] font-mono">{track.duration}</span>
      </div>
    </motion.button>
  );
}

export function SessionPanel({
  session,
  isPlaying,
  onTrackSelect,
  nowPlayingId,
}: SessionPanelProps) {
  if (!session) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
          <Music2 size={24} className="text-white/20" />
        </div>
        <p className="text-white/30 text-sm">No active session</p>
        <p className="text-white/15 text-xs mt-1">Tell Daye what you want to hear</p>
      </div>
    );
  }

  const color = session.accentColor;

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Session header */}
      <div className="px-4 pt-4 pb-3 flex-shrink-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={session.vibeLabel}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-white/30 text-[11px] font-mono uppercase tracking-wider mb-1">
                  Active Session
                </p>
                <h3
                  className="text-xl font-bold tracking-tight"
                  style={{ color }}
                >
                  {session.vibeLabel}
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: color }}
                />
                <span className="text-white/40 text-[11px] font-mono">LIVE</span>
              </div>
            </div>

            {/* Metadata row */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
              <span className="text-white/35 text-xs flex items-center gap-1">
                <Clock size={10} />
                {session.bpmRange}
              </span>
              <span
                className="text-xs font-mono px-2 py-0.5 rounded-full"
                style={{ background: `${color}15`, color: `${color}aa` }}
              >
                {session.mood}
              </span>
            </div>

            <p className="text-white/25 text-[11px] leading-relaxed mb-3">
              {session.moodTag}
            </p>

            <EnergyBar energy={session.energy} color={color} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Now Playing card */}
      {session.nowPlaying && (
        <AnimatePresence mode="wait">
          <motion.div
            key={session.nowPlaying.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="mx-4 mb-3 p-4 rounded-xl flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${color}18 0%, transparent 100%)`,
              border: `1px solid ${color}25`,
            }}
          >
            <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-2">
              Now Playing
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                style={{ background: `${color}20` }}
              >
                🎵
              </div>
              <div className="min-w-0">
                <div className="text-white font-semibold text-sm truncate">
                  {session.nowPlaying.title}
                </div>
                <div className="text-white/45 text-xs truncate">{session.nowPlaying.artist}</div>
              </div>
              {isPlaying && (
                <div className="ml-auto flex-shrink-0">
                  <Waveform bars={6} color={color} active size="sm" />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Track queue */}
      <div className="flex-1 overflow-y-auto px-2 pb-2 min-h-0">
        <div className="flex items-center gap-2 px-3 mb-2">
          <ListMusic size={12} className="text-white/25" />
          <span className="text-white/25 text-[11px] uppercase tracking-wider font-medium">Queue</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={session.vibeLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {session.tracks.map((track, i) => (
              <TrackRow
                key={track.id}
                track={track}
                index={i}
                isActive={track.id === nowPlayingId}
                isPlaying={isPlaying}
                color={color}
                onClick={() => onTrackSelect(track)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
