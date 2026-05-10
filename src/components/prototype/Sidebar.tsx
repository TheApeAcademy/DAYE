"use client";

import { cn } from "@/lib/utils";
import { Home, Search, Library, Sparkles, Music2, Radio } from "lucide-react";
import { Waveform } from "@/components/ui/Waveform";

export type SidebarTab = "home" | "search" | "library" | "daye";

interface SidebarProps {
  active: SidebarTab;
  onTabChange: (tab: SidebarTab) => void;
}

const navItems: { tab: SidebarTab; icon: React.ElementType; label: string }[] = [
  { tab: "home", icon: Home, label: "Home" },
  { tab: "search", icon: Search, label: "Search" },
  { tab: "library", icon: Library, label: "Your Library" },
];

const fakePlaylists = [
  { name: "Daye Session — Lagos Rooftop", updated: "Today" },
  { name: "Dark Afro-House Mix", updated: "Yesterday" },
  { name: "Morning Ritual", updated: "3 days ago" },
  { name: "Heartbreak Sovereign", updated: "Last week" },
  { name: "Brazilian Energy", updated: "Last week" },
];

export function Sidebar({ active, onTabChange }: SidebarProps) {
  return (
    <aside className="w-64 flex-shrink-0 bg-black flex flex-col h-full overflow-hidden">
      {/* Logo */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-daye-green flex items-center justify-center">
            <Music2 size={14} className="text-black" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Spotify</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 mb-4">
        {navItems.map(({ tab, icon: Icon, label }) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-150",
              active === tab
                ? "text-white bg-daye-surface-2"
                : "text-white/50 hover:text-white/80"
            )}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}

        {/* Daye special tab */}
        <button
          onClick={() => onTabChange("daye")}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-semibold transition-all duration-200 mt-1",
            active === "daye"
              ? "text-black bg-daye-green"
              : "text-daye-green bg-daye-green/10 hover:bg-daye-green/20 border border-daye-green/20"
          )}
        >
          <Sparkles size={18} />
          <span>Daye</span>
          {active === "daye" && (
            <Waveform bars={8} color="#000000" active size="sm" className="ml-auto" />
          )}
          {active !== "daye" && (
            <span className="ml-auto text-[10px] font-mono bg-daye-green/20 text-daye-green px-2 py-0.5 rounded-full">
              AI
            </span>
          )}
        </button>
      </nav>

      {/* Divider */}
      <div className="mx-6 border-t border-white/[0.08] mb-4" />

      {/* Playlists */}
      <div className="flex-1 overflow-y-auto px-3 pb-4 scrollbar-hide">
        <div className="flex items-center gap-2 px-3 mb-3">
          <Radio size={14} className="text-white/30" />
          <span className="text-white/30 text-xs font-medium uppercase tracking-wider">Daye Sessions</span>
        </div>
        <div className="space-y-0.5">
          {fakePlaylists.map((pl) => (
            <button
              key={pl.name}
              onClick={() => onTabChange("daye")}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <div className="text-white/60 text-sm truncate group-hover:text-white/80 transition-colors">
                {pl.name}
              </div>
              <div className="text-white/25 text-xs mt-0.5">{pl.updated}</div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
