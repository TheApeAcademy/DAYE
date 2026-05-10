"use client";

import { cn } from "@/lib/utils";

interface WaveformProps {
  active?: boolean;
  bars?: number;
  color?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const DELAY_OFFSETS = [
  "0s", "0.1s", "0.2s", "0.15s", "0.05s", "0.3s", "0.25s",
  "0.12s", "0.22s", "0.08s", "0.18s", "0.35s", "0.4s", "0.28s", "0.45s",
  "0.03s", "0.32s", "0.16s", "0.38s", "0.42s",
];

const HEIGHT_CLASSES = [
  "h-2", "h-4", "h-6", "h-8", "h-5", "h-7", "h-3",
  "h-9", "h-6", "h-4", "h-8", "h-5", "h-7", "h-3", "h-6",
  "h-4", "h-8", "h-5", "h-7", "h-3",
];

export function Waveform({
  active = true,
  bars = 20,
  color = "#1ED760",
  className,
  size = "md",
}: WaveformProps) {
  const heightMultiplier = size === "sm" ? 0.6 : size === "lg" ? 1.4 : 1;

  return (
    <div className={cn("flex items-end gap-[2px]", className)}>
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: color,
            animationDelay: active ? DELAY_OFFSETS[i % DELAY_OFFSETS.length] : "0s",
            animationPlayState: active ? "running" : "paused",
            opacity: active ? 0.9 : 0.3,
            transform: active ? undefined : "scaleY(0.3)",
          }}
          className={cn(
            "w-[3px] rounded-full origin-bottom transition-opacity duration-300",
            HEIGHT_CLASSES[i % HEIGHT_CLASSES.length],
            active && "animate-wave"
          )}
        />
      ))}
    </div>
  );
}
