"use client";

import { useState, useEffect } from "react";
import { Track } from "@/data/tracks";
import { cn } from "@/lib/utils";

interface PlaybarProps {
  track: Track | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  accentColor?: string;
}

export function Playbar({ track, isPlaying, onPlayPause, accentColor = "#1DB954" }: PlaybarProps) {
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    if (!isPlaying) return;
    const t = setInterval(() => setProgress((p) => (p >= 100 ? 5 : p + 0.2)), 600);
    return () => clearInterval(t);
  }, [isPlaying]);

  useEffect(() => { if (track) setProgress(8); }, [track]);

  if (!track) return null;

  return (
    <div className="flex-shrink-0 px-3 pb-1">
      <div
        className="rounded-xl overflow-hidden"
        style={{ background: accentColor + "30", border: `1px solid ${accentColor}20` }}
      >
        {/* Progress */}
        <div className="h-[2px] bg-white/10">
          <div
            className="h-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: accentColor }}
          />
        </div>

        <div className="flex items-center gap-3 px-3 py-2.5">
          {/* Art */}
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
            style={{ background: accentColor + "25" }}
          >
            🎵
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="text-white text-[13px] font-semibold truncate">{track.title}</div>
            <div className="text-[#B3B3B3] text-[12px] truncate">{track.artist}</div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Device */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B3B3B3" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            {/* Add */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B3B3B3" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            {/* Play/Pause */}
            <button
              onClick={onPlayPause}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
            >
              {isPlaying ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="black">
                  <rect x="1" y="1" width="4" height="10" rx="1" />
                  <rect x="7" y="1" width="4" height="10" rx="1" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="black">
                  <path d="M2 1l9 5-9 5V1z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
