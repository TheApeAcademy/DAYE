"use client";

import { cn } from "@/lib/utils";

export type SpotifyScreen = "home" | "search" | "library" | "daye";

interface BottomNavProps {
  active: SpotifyScreen;
  onChange: (s: SpotifyScreen) => void;
}

export function BottomNav({ active, onChange }: BottomNavProps) {
  const items = [
    {
      id: "home" as SpotifyScreen,
      label: "Home",
      icon: (a: boolean) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={a ? "white" : "#B3B3B3"}>
          <path d="M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3z" />
        </svg>
      ),
    },
    {
      id: "search" as SpotifyScreen,
      label: "Search",
      icon: (a: boolean) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={a ? "white" : "#B3B3B3"} strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      id: "library" as SpotifyScreen,
      label: "Your Library",
      icon: (a: boolean) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={a ? "white" : "#B3B3B3"}>
          <rect x="3" y="3" width="7" height="18" rx="1" />
          <rect x="13" y="3" width="8" height="5" rx="1" />
          <rect x="13" y="11" width="8" height="10" rx="1" />
        </svg>
      ),
    },
    {
      id: "daye" as SpotifyScreen,
      label: "Create",
      icon: (a: boolean) => (
        <div
          className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center",
            a ? "bg-sp-green" : "bg-[#B3B3B3]"
          )}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="black">
            <line x1="7" y1="2" x2="7" y2="12" strokeWidth="2" stroke="black" strokeLinecap="round" />
            <line x1="2" y1="7" x2="12" y2="7" strokeWidth="2" stroke="black" strokeLinecap="round" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="flex-shrink-0 bg-[#0a0a0a] border-t border-white/[0.08] pb-5 pt-2">
      <div className="flex items-center">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className="flex-1 flex flex-col items-center gap-1 py-1"
            >
              {item.icon(isActive)}
              <span
                className={cn(
                  "text-[10px] font-medium",
                  isActive ? "text-white" : "text-[#B3B3B3]"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
