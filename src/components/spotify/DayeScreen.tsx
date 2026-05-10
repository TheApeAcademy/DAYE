"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { matchVibe, SessionState } from "@/data/vibeResponses";
import { Track } from "@/data/tracks";

interface Message {
  id: string;
  role: "user" | "daye";
  text: string;
}

const WELCOME: Message = {
  id: "w0",
  role: "daye",
  text: "Hey. I'm DAYE — your AI DJ. Tell me what you're feeling, where you are, or what you need. I'll build the session. No playlists. No searching.",
};

const CHIPS = [
  "Rooftop Lagos, 11PM",
  "Dark Afro-house",
  "Heartbreak but confident",
  "Gym — max intensity",
  "Luxury night drive",
  "Amapiano morning",
];

interface DayeScreenProps {
  onBack: () => void;
  onSessionChange: (s: SessionState) => void;
  onTrackChange: (t: Track) => void;
  nowPlayingId: string | null;
  isPlaying: boolean;
}

// Avatar placeholder — swap src prop when character image is ready
function DayeAvatar({ src }: { src?: string }) {
  if (src) {
    return <img src={src} alt="DAYE" className="w-16 h-16 rounded-full object-cover" />;
  }
  return (
    <div className="w-16 h-16 rounded-full bg-sp-green flex items-center justify-center">
      <span className="text-black text-2xl font-black">D</span>
    </div>
  );
}

function WaveBars({ active }: { active: boolean }) {
  const delays = [0, 0.15, 0.3, 0.15, 0];
  return (
    <div className="flex items-end gap-[3px] h-4">
      {delays.map((d, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-sp-green"
          animate={active ? { scaleY: [0.3, 1, 0.3] } : { scaleY: 0.3 }}
          transition={{ duration: 0.8, repeat: Infinity, delay: d, ease: "easeInOut" }}
          style={{ originY: 1, height: "100%" }}
        />
      ))}
    </div>
  );
}

export function DayeScreen({
  onBack,
  onSessionChange,
  onTrackChange,
  nowPlayingId,
  isPlaying,
}: DayeScreenProps) {
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [session, setSession] = useState<SessionState | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = useCallback(async (text: string) => {
    if (!text.trim() || typing) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", text: text.trim() };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setTyping(true);

    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 800));

    const result = matchVibe(text);
    setTyping(false);
    setMessages((p) => [...p, { id: Date.now().toString(), role: "daye", text: result.message }]);
    setSession(result.session);
    onSessionChange(result.session);
    onTrackChange(result.session.nowPlaying);
  }, [typing, onSessionChange, onTrackChange]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-black">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.08] flex-shrink-0">
        <button onClick={onBack} className="p-1.5 -ml-1.5 rounded-full hover:bg-white/10 transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M12 4L6 10l6 6" />
          </svg>
        </button>
        <div className="flex items-center gap-3 flex-1">
          <DayeAvatar />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-[16px]">DAYE</span>
              <span className="text-[10px] font-bold bg-sp-green text-black px-2 py-0.5 rounded-full">Beta</span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-sp-green animate-pulse" />
              <span className="text-[#B3B3B3] text-[12px]">AI DJ · Online</span>
            </div>
          </div>
        </div>
        <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
            <circle cx="10" cy="4" r="1.5" /><circle cx="10" cy="10" r="1.5" /><circle cx="10" cy="16" r="1.5" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto phone-scroll px-4 py-4 space-y-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}
          >
            {msg.role === "daye" && <DayeAvatar />}
            <div
              className={`max-w-[78%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#282828] text-white rounded-br-md"
                  : "bg-[#121212] text-white rounded-bl-md border border-white/[0.06]"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {typing && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-end gap-2"
          >
            <DayeAvatar />
            <div className="bg-[#121212] border border-white/[0.06] rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#B3B3B3]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
        <div ref={endRef} />
      </div>

      {/* Now playing session indicator */}
      <AnimatePresence>
        {session && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mx-4 mb-3 flex-shrink-0"
          >
            <div
              className="rounded-xl p-3 flex items-center gap-3"
              style={{
                background: session.accentColor + "18",
                border: `1px solid ${session.accentColor}30`,
              }}
            >
              <WaveBars active={isPlaying} />
              <div className="flex-1 min-w-0">
                <div className="text-white text-[13px] font-semibold truncate">
                  {session.nowPlaying.title}
                </div>
                <div className="text-[#B3B3B3] text-[11px] truncate">{session.vibeLabel} · {session.bpmRange}</div>
              </div>
              <span
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                style={{ background: session.accentColor + "25", color: session.accentColor }}
              >
                {session.energy}% energy
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Suggestion chips — only at start */}
      {messages.length === 1 && (
        <div className="px-4 pb-3 flex-shrink-0">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {CHIPS.map((chip) => (
              <button
                key={chip}
                onClick={() => send(chip)}
                className="flex-shrink-0 px-3 py-2 rounded-full border border-white/15 text-[#B3B3B3] text-[12px] font-medium hover:border-white/30 hover:text-white transition-all"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-4 pb-4 flex-shrink-0">
        <div
          className="flex items-center gap-2 rounded-full px-4 py-3"
          style={{
            background: "#282828",
            border: input ? "1px solid #1DB95460" : "1px solid transparent",
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { e.preventDefault(); send(input); }
            }}
            placeholder="Describe a vibe, mood, or place..."
            className="flex-1 bg-transparent text-white text-[14px] placeholder:text-[#535353] outline-none"
            disabled={typing}
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || typing}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
              input.trim() && !typing ? "bg-sp-green" : "bg-[#535353]"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M12 7H2M7 2l5 5-5 5" stroke={input.trim() && !typing ? "black" : "#B3B3B3"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
