"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, Sparkles } from "lucide-react";
import { matchVibe, SessionState } from "@/data/vibeResponses";
import { Track } from "@/data/tracks";
import { SessionPanel } from "./SessionPanel";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "daye";
  text: string;
  timestamp: string;
}

interface DayeInterfaceProps {
  onSessionChange: (session: SessionState) => void;
  onNowPlayingChange: (track: Track) => void;
  isPlaying: boolean;
  nowPlayingId: string | null;
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "daye",
  text: "Hey. I'm Daye — your AI DJ and producer. Tell me what you're feeling, where you are, or what you need. I'll build the session. No playlists. No searching. Just talk to me.",
  timestamp: "Now",
};

const SUGGESTIONS = [
  "Rooftop Lagos night vibes",
  "Heartbreak but confident",
  "Dark Afro-house session",
  "Gym — maximum intensity",
  "Luxury late-night drive",
  "Amapiano for the morning",
];

function TypingIndicator({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0"
        style={{ background: `${color}20` }}
      >
        <Sparkles size={12} style={{ color }} />
      </div>
      <div className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-daye-surface-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/40"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MessageBubble({
  message,
  accentColor,
}: {
  message: Message;
  accentColor: string;
}) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "flex items-end gap-2 px-4 py-1.5",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {!isUser && (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 mb-1"
          style={{ background: `${accentColor}25`, border: `1px solid ${accentColor}40` }}
        >
          <Sparkles size={11} style={{ color: accentColor }} />
        </div>
      )}
      <div
        className={cn(
          "max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed",
          isUser
            ? "rounded-br-md bg-white/10 text-white"
            : "rounded-bl-md bg-daye-surface-2 text-white/85"
        )}
        style={
          isUser
            ? { background: `${accentColor}22`, border: `1px solid ${accentColor}30` }
            : {}
        }
      >
        {message.text}
        <div className={cn("text-[10px] mt-1.5", isUser ? "text-white/25 text-right" : "text-white/20")}>
          {message.timestamp}
        </div>
      </div>
    </motion.div>
  );
}

export function DayeInterface({
  onSessionChange,
  onNowPlayingChange,
  isPlaying,
  nowPlayingId,
}: DayeInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [session, setSession] = useState<SessionState | null>(null);
  const [accentColor, setAccentColor] = useState("#8B5CF6");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const handleSend = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const response = matchVibe(text);
    const delay = 1200 + Math.random() * 800;

    await new Promise((r) => setTimeout(r, delay));

    const dayeMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "daye",
      text: response.message,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, dayeMsg]);

    setSession(response.session);
    setAccentColor(response.session.accentColor);
    onSessionChange(response.session);
    onNowPlayingChange(response.session.nowPlaying);
  }, [onSessionChange, onNowPlayingChange]);

  const handleTrackSelect = useCallback(
    (track: Track) => {
      if (!session) return;
      const updatedSession = { ...session, nowPlaying: track };
      setSession(updatedSession);
      onNowPlayingChange(track);
    },
    [session, onNowPlayingChange]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Conversation Panel */}
      <div className="w-[420px] flex-shrink-0 flex flex-col border-r border-white/[0.06]">
        {/* Header */}
        <div className="px-4 py-4 border-b border-white/[0.06] flex items-center gap-3 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: `${accentColor}20`,
              border: `1px solid ${accentColor}40`,
            }}
          >
            <Sparkles size={16} style={{ color: accentColor }} />
          </div>
          <div>
            <div className="text-white font-semibold text-sm flex items-center gap-2">
              Daye
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                style={{ background: `${accentColor}20`, color: accentColor }}
              >
                AI DJ
              </span>
            </div>
            <div className="text-white/30 text-xs flex items-center gap-1.5 mt-0.5">
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: accentColor }}
              />
              Online · Music intelligence active
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto py-2 min-h-0">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} accentColor={accentColor} />
          ))}
          {isTyping && <TypingIndicator color={accentColor} />}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="px-4 pb-3 flex flex-wrap gap-2"
          >
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                className="text-xs px-3 py-1.5 rounded-full border border-white/[0.08] text-white/40 hover:text-white/70 hover:border-white/20 transition-all"
              >
                {s}
              </button>
            ))}
          </motion.div>
        )}

        {/* Input */}
        <div className="px-4 pb-4 pt-2 flex-shrink-0">
          <div
            className="flex items-center gap-2 rounded-2xl border px-4 py-3 transition-colors"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: input ? `${accentColor}40` : "rgba(255,255,255,0.08)",
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe a vibe, mood, or place..."
              className="flex-1 bg-transparent text-white text-sm placeholder:text-white/25 outline-none"
              disabled={isTyping}
            />
            <button
              className="text-white/25 hover:text-white/60 transition-colors"
              title="Voice input (simulated)"
            >
              <Mic size={16} />
            </button>
            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim() || isTyping}
              className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center transition-all",
                input.trim() && !isTyping
                  ? "text-black hover:scale-105"
                  : "text-white/20 bg-white/5 cursor-not-allowed"
              )}
              style={
                input.trim() && !isTyping
                  ? { backgroundColor: accentColor }
                  : {}
              }
            >
              <Send size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Session Panel */}
      <div className="flex-1 flex flex-col overflow-hidden bg-daye-surface-1/50 min-w-0">
        <SessionPanel
          session={session}
          isPlaying={isPlaying}
          onTrackSelect={handleTrackSelect}
          nowPlayingId={nowPlayingId}
        />
      </div>
    </div>
  );
}
