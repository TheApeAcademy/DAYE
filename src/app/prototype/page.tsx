import { Metadata } from "next";
import { SpotifyShell } from "@/components/prototype/SpotifyShell";
import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Daye Prototype — AI DJ Experience",
  description: "Interactive prototype simulating Daye as a native Spotify feature. Converse with the AI DJ.",
};

export default function PrototypePage() {
  return (
    <div className="flex flex-col h-screen bg-daye-bg overflow-hidden">
      {/* Top bar */}
      <div className="h-10 flex items-center justify-between px-4 bg-black/60 border-b border-white/[0.05] flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors text-xs"
          >
            <ArrowLeft size={12} />
            Back
          </Link>
          <div className="w-[1px] h-4 bg-white/10" />
          <span className="text-white/30 text-xs font-mono">DAYE · INTERACTIVE PROTOTYPE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-daye-green/10 border border-daye-green/20">
            <div className="w-1.5 h-1.5 rounded-full bg-daye-green animate-pulse" />
            <span className="text-daye-green text-[11px] font-mono font-medium">AI ACTIVE</span>
          </div>
          <div
            className="flex items-center gap-1.5 text-white/25 text-[11px]"
            title="This is a high-fidelity prototype demonstrating Daye's interaction model"
          >
            <Info size={11} />
            <span className="hidden sm:inline">Simulated experience</span>
          </div>
        </div>
      </div>

      {/* Spotify shell */}
      <div className="flex-1 overflow-hidden">
        <SpotifyShell />
      </div>
    </div>
  );
}
