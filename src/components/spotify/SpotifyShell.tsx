"use client";

import { useState, useCallback } from "react";
import { StatusBar } from "./StatusBar";
import { BottomNav, SpotifyScreen } from "./BottomNav";
import { Playbar } from "./Playbar";
import { HomeScreen } from "./HomeScreen";
import { CreateMenu } from "./CreateMenu";
import { DayeScreen } from "./DayeScreen";
import { SessionState } from "@/data/vibeResponses";
import { Track } from "@/data/tracks";

// Simple Search and Library screens
function SearchScreen() {
  return (
    <div className="flex-1 overflow-y-auto phone-scroll bg-black px-4 pt-2">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-white text-[22px] font-bold">Search</h1>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#B3B3B3" strokeWidth="1.5">
          <rect x="2" y="6" width="18" height="14" rx="2" />
          <path d="M7 6V4a4 4 0 018 0v2" />
        </svg>
      </div>
      <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2.5 mb-6">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
          <circle cx="7" cy="7" r="5" /><line x1="12" y1="12" x2="15" y2="15" />
        </svg>
        <span className="text-black/40 text-[14px]">What do you want to listen to?</span>
      </div>
      <div>
        <h2 className="text-white text-[16px] font-bold mb-3">Browse categories</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Afrobeats", color: "#1a3a00", emoji: "🌍" },
            { name: "Amapiano", color: "#003a3a", emoji: "🎹" },
            { name: "Hip-Hop", color: "#1a0030", emoji: "🎤" },
            { name: "R&B", color: "#3a0020", emoji: "🎶" },
            { name: "Electronic", color: "#003020", emoji: "⚡" },
            { name: "Afro-House", color: "#20003a", emoji: "🌑" },
          ].map((g) => (
            <button
              key={g.name}
              className="relative rounded-lg overflow-hidden text-left p-3 h-20 flex items-end"
              style={{ background: g.color }}
            >
              <span className="absolute top-2 right-2 text-2xl">{g.emoji}</span>
              <span className="text-white font-bold text-[14px]">{g.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function LibraryScreen({ onDaye }: { onDaye: () => void }) {
  const sessions = [
    { name: "Lagos Rooftop", desc: "DAYE Session · 7 tracks", color: "#F59E0B" },
    { name: "Dark Afro-House Mix", desc: "DAYE Session · 5 tracks", color: "#8B5CF6" },
    { name: "Heartbreak Sovereign", desc: "DAYE Session · 6 tracks", color: "#F43F5E" },
    { name: "Gym: Beast Mode", desc: "DAYE Session · 6 tracks", color: "#22D3EE" },
    { name: "Golden Morning", desc: "DAYE Session · 5 tracks", color: "#F59E0B" },
  ];

  return (
    <div className="flex-1 overflow-y-auto phone-scroll bg-black px-4 pt-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="white">
            <rect x="2" y="2" width="7" height="18" rx="1" />
            <rect x="12" y="2" width="8" height="5" rx="1" />
            <rect x="12" y="10" width="8" height="10" rx="1" />
          </svg>
          <h1 className="text-white text-[22px] font-bold">Your Library</h1>
        </div>
        <button onClick={onDaye} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
            <line x1="7" y1="2" x2="7" y2="12" strokeWidth="2" stroke="white" strokeLinecap="round" />
            <line x1="2" y1="7" x2="12" y2="7" strokeWidth="2" stroke="white" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="flex gap-2 mb-5 overflow-x-auto scrollbar-hide">
        {["Playlists", "DAYE Sessions", "Artists"].map((f, i) => (
          <button
            key={f}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[13px] font-medium ${
              i === 1 ? "bg-white text-black" : "bg-[#282828] text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {sessions.map((s) => (
          <button key={s.name} onClick={onDaye} className="flex items-center gap-3 w-full text-left">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: s.color + "22" }}
            >
              🎧
            </div>
            <div>
              <div className="text-white text-[14px] font-semibold">{s.name}</div>
              <div className="text-[#B3B3B3] text-[12px]">{s.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function SpotifyShell() {
  const [screen, setScreen] = useState<SpotifyScreen>("home");
  const [showCreate, setShowCreate] = useState(false);
  const [session, setSession] = useState<SessionState | null>(null);
  const [nowPlaying, setNowPlaying] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNavChange = (s: SpotifyScreen) => {
    if (s === "daye") {
      setShowCreate(true);
    } else {
      setScreen(s);
    }
  };

  const handleOpenDaye = useCallback(() => {
    setScreen("daye");
  }, []);

  const handleSessionChange = useCallback((s: SessionState) => {
    setSession(s);
    setIsPlaying(true);
  }, []);

  const handleTrackChange = useCallback((t: Track) => {
    setNowPlaying(t);
    setIsPlaying(true);
  }, []);

  // Determine active nav tab
  const navActive: SpotifyScreen = screen === "daye" ? "daye" : screen;

  return (
    <div className="flex flex-col h-full bg-black relative overflow-hidden">
      <StatusBar />

      {/* Main content */}
      <div className="flex-1 min-h-0 relative flex flex-col overflow-hidden">
        {screen === "home" && (
          <HomeScreen onOpenDaye={handleOpenDaye} />
        )}
        {screen === "search" && <SearchScreen />}
        {screen === "library" && <LibraryScreen onDaye={handleOpenDaye} />}
        {screen === "daye" && (
          <DayeScreen
            onBack={() => setScreen("home")}
            onSessionChange={handleSessionChange}
            onTrackChange={handleTrackChange}
            nowPlayingId={nowPlaying?.id ?? null}
            isPlaying={isPlaying}
          />
        )}

        {/* Create bottom sheet */}
        <CreateMenu
          open={showCreate}
          onClose={() => setShowCreate(false)}
          onDaye={handleOpenDaye}
        />
      </div>

      {/* Playbar */}
      {nowPlaying && screen !== "daye" && (
        <Playbar
          track={nowPlaying}
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying((p) => !p)}
          accentColor={session?.accentColor}
        />
      )}

      {/* Bottom nav */}
      <BottomNav
        active={navActive}
        onChange={handleNavChange}
      />
    </div>
  );
}
