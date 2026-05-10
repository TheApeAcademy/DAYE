"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play, Pause, SkipBack, SkipForward,
  Shuffle, Repeat, Volume2, Heart, Mic2
} from "lucide-react";
import { Waveform } from "@/components/ui/Waveform";
import { Track } from "@/data/tracks";
import { cn } from "@/lib/utils";

interface PlaybackBarProps {
  nowPlaying: Track | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  accentColor?: string;
}

export function PlaybackBar({
  nowPlaying,
  isPlaying,
  onPlayPause,
  accentColor = "#1ED760",
}: PlaybackBarProps) {
  const [progress, setProgress] = useState(23);
  const [volume, setVolume] = useState(72);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 5 : p + 0.15));
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (nowPlaying) setProgress(8);
  }, [nowPlaying]);

  const parseDuration = (dur: string) => {
    const [m, s] = dur.split(":").map(Number);
    return m * 60 + s;
  };

  const totalSecs = nowPlaying ? parseDuration(nowPlaying.duration) : 240;
  const currentSecs = Math.floor((progress / 100) * totalSecs);
  const fmt = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <div className="h-20 bg-[#0a0a0a] border-t border-white/[0.06] flex items-center px-4 gap-4 flex-shrink-0">
      {/* Track info */}
      <div className="w-56 flex items-center gap-3 min-w-0">
        {nowPlaying ? (
          <>
            <div
              className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center text-lg"
              style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}30` }}
            >
              🎵
            </div>
            <div className="min-w-0">
              <div className="text-white text-sm font-medium truncate">{nowPlaying.title}</div>
              <div className="text-white/40 text-xs truncate">{nowPlaying.artist}</div>
            </div>
            <button
              onClick={() => setLiked(!liked)}
              className="flex-shrink-0 ml-2"
            >
              <Heart
                size={16}
                className={cn(
                  "transition-colors",
                  liked ? "fill-daye-green text-daye-green" : "text-white/30 hover:text-white/60"
                )}
              />
            </button>
          </>
        ) : (
          <div className="text-white/20 text-sm">No session active</div>
        )}
      </div>

      {/* Controls */}
      <div className="flex-1 flex flex-col items-center gap-2 max-w-xl mx-auto">
        <div className="flex items-center gap-5">
          <button className="text-white/30 hover:text-white/60 transition-colors">
            <Shuffle size={16} />
          </button>
          <button className="text-white/50 hover:text-white transition-colors">
            <SkipBack size={18} />
          </button>
          <button
            onClick={onPlayPause}
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause size={16} className="text-black" fill="black" />
            ) : (
              <Play size={16} className="text-black ml-0.5" fill="black" />
            )}
          </button>
          <button className="text-white/50 hover:text-white transition-colors">
            <SkipForward size={18} />
          </button>
          <button className="text-white/30 hover:text-white/60 transition-colors">
            <Repeat size={16} />
          </button>
        </div>

        {/* Progress */}
        <div className="w-full flex items-center gap-2">
          <span className="text-white/30 text-[11px] w-8 text-right">{fmt(currentSecs)}</span>
          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer group">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: accentColor }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "linear" }}
            />
          </div>
          <span className="text-white/30 text-[11px] w-8">{nowPlaying?.duration ?? "0:00"}</span>
        </div>
      </div>

      {/* Volume + Waveform */}
      <div className="w-48 flex items-center gap-3 justify-end">
        {isPlaying && nowPlaying && (
          <Waveform bars={12} color={accentColor} active size="sm" className="opacity-70" />
        )}
        <Mic2 size={14} className="text-white/30" />
        <Volume2 size={16} className="text-white/50" />
        <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer">
          <div
            className="h-full bg-white/60 rounded-full"
            style={{ width: `${volume}%` }}
          />
        </div>
      </div>
    </div>
  );
}
