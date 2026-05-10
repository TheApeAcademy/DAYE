"use client";

import { useState, useCallback } from "react";
import { Sidebar, SidebarTab } from "./Sidebar";
import { PlaybackBar } from "./PlaybackBar";
import { DayeInterface } from "./DayeInterface";
import { HomeView } from "./HomeView";
import { SessionState } from "@/data/vibeResponses";
import { Track } from "@/data/tracks";
import { Search, Library } from "lucide-react";

export function SpotifyShell() {
  const [activeTab, setActiveTab] = useState<SidebarTab>("home");
  const [session, setSession] = useState<SessionState | null>(null);
  const [nowPlaying, setNowPlaying] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [accentColor, setAccentColor] = useState("#1ED760");

  const handleSessionChange = useCallback((s: SessionState) => {
    setSession(s);
    setAccentColor(s.accentColor);
    setIsPlaying(true);
  }, []);

  const handleNowPlayingChange = useCallback((track: Track) => {
    setNowPlaying(track);
    setIsPlaying(true);
  }, []);

  const handlePlayPause = useCallback(() => {
    setIsPlaying((p) => !p);
  }, []);

  const handleTabChange = (tab: SidebarTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-full bg-daye-bg overflow-hidden">
      {/* Sidebar */}
      <Sidebar active={activeTab} onTabChange={handleTabChange} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Content area */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {activeTab === "home" && (
            <HomeView onDayeClick={() => setActiveTab("daye")} />
          )}

          {activeTab === "daye" && (
            <DayeInterface
              onSessionChange={handleSessionChange}
              onNowPlayingChange={handleNowPlayingChange}
              isPlaying={isPlaying}
              nowPlayingId={nowPlaying?.id ?? null}
            />
          )}

          {activeTab === "search" && (
            <div className="flex-1 overflow-y-auto p-6">
              <h1 className="text-white text-2xl font-bold mb-6">Search</h1>
              <div className="relative mb-8">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  placeholder="Or just tell Daye what you want..."
                  className="w-full pl-10 pr-4 py-3 rounded-full bg-daye-surface-2 border border-white/[0.08] text-white placeholder:text-white/25 outline-none text-sm focus:border-white/20 transition-colors"
                  onFocus={() => setActiveTab("daye")}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Afrobeats", color: "#F59E0B", emoji: "🌍" },
                  { name: "Amapiano", color: "#22D3EE", emoji: "🎹" },
                  { name: "Afro-House", color: "#8B5CF6", emoji: "🌑" },
                  { name: "R&B / Neo-soul", color: "#F43F5E", emoji: "🎶" },
                  { name: "Hip-Hop", color: "#6366F1", emoji: "🎤" },
                  { name: "Latin", color: "#F59E0B", emoji: "🔥" },
                  { name: "Electronic", color: "#22D3EE", emoji: "⚡" },
                  { name: "Acoustic", color: "#1ED760", emoji: "🎸" },
                  { name: "Workout", color: "#EF4444", emoji: "💪" },
                ].map((genre) => (
                  <button
                    key={genre.name}
                    onClick={() => setActiveTab("daye")}
                    className="p-4 rounded-xl text-left hover:scale-[1.02] transition-transform"
                    style={{ background: `${genre.color}25`, border: `1px solid ${genre.color}30` }}
                  >
                    <div className="text-2xl mb-2">{genre.emoji}</div>
                    <div className="text-white font-semibold text-sm">{genre.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "library" && (
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex items-center gap-3 mb-6">
                <Library size={20} className="text-white/60" />
                <h1 className="text-white text-2xl font-bold">Your Library</h1>
              </div>
              <p className="text-white/30 text-sm mb-6">
                All your Daye sessions are saved here automatically.
              </p>
              <div className="space-y-2">
                {[
                  { name: "Daye Session — Lagos Rooftop", count: "7 tracks", color: "#F59E0B", date: "Today" },
                  { name: "Dark Afro-House Mix", count: "5 tracks", color: "#8B5CF6", date: "Yesterday" },
                  { name: "Morning Ritual", count: "5 tracks", color: "#F59E0B", date: "3 days ago" },
                  { name: "Heartbreak Sovereign", count: "6 tracks", color: "#F43F5E", date: "Last week" },
                  { name: "Brazilian Frequency", count: "5 tracks", color: "#F59E0B", date: "Last week" },
                  { name: "Gym: Beast Mode", count: "6 tracks", color: "#22D3EE", date: "2 weeks ago" },
                ].map((pl, i) => (
                  <button
                    key={pl.name}
                    onClick={() => setActiveTab("daye")}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors text-left"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${pl.color}20` }}
                    >
                      🎧
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{pl.name}</div>
                      <div className="text-white/35 text-xs">Daye Session · {pl.count} · {pl.date}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Playback bar */}
        <PlaybackBar
          nowPlaying={nowPlaying}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          accentColor={accentColor}
        />
      </div>
    </div>
  );
}
