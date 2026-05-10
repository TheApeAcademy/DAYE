"use client";

import { motion, AnimatePresence } from "framer-motion";

interface CreateMenuProps {
  open: boolean;
  onClose: () => void;
  onDaye: () => void;
}

const OPTIONS = [
  {
    icon: "♪",
    title: "Playlist",
    desc: "Create a playlist with songs or episodes",
    badge: null,
    special: false,
  },
  {
    icon: "⊕",
    title: "Collaborative playlist",
    desc: "Create a playlist together with friends",
    badge: null,
    special: false,
  },
  {
    icon: "⇄",
    title: "Mixed playlist",
    desc: "Mix songs with smooth transitions",
    badge: "Beta",
    special: false,
  },
  {
    icon: "◎",
    title: "Blend",
    desc: "Combine your friends' tastes into a playlist",
    badge: null,
    special: false,
  },
  {
    icon: "✦",
    title: "AI Playlist",
    desc: "Turn your ideas into playlists with AI",
    badge: "Beta",
    special: false,
  },
  {
    icon: "✧",
    title: "DAYE — AI DJ",
    desc: "Describe your vibe. Get a full intelligent session.",
    badge: "New",
    special: true,
    action: true,
  },
  {
    icon: "⊿",
    title: "Jam",
    desc: "Listen together from anywhere",
    badge: null,
    special: false,
  },
];

export function CreateMenu({ open, onClose, onDaye }: CreateMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 z-40"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute bottom-0 left-0 right-0 bg-[#282828] rounded-t-2xl z-50 pb-8"
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>

            {/* Options */}
            <div className="px-4 space-y-1">
              {OPTIONS.map((opt) => (
                <button
                  key={opt.title}
                  onClick={() => {
                    if (opt.action) {
                      onClose();
                      onDaye();
                    } else {
                      onClose();
                    }
                  }}
                  className={`w-full flex items-center gap-4 p-3 rounded-xl text-left transition-colors ${
                    opt.special
                      ? "bg-sp-green/10 hover:bg-sp-green/20 border border-sp-green/20"
                      : "hover:bg-white/5"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
                      opt.special ? "bg-sp-green/20" : "bg-[#3e3e3e]"
                    }`}
                  >
                    <span className={opt.special ? "text-sp-green" : "text-white"}>
                      {opt.icon}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[15px] font-semibold ${
                          opt.special ? "text-sp-green" : "text-white"
                        }`}
                      >
                        {opt.title}
                      </span>
                      {opt.badge && (
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            opt.badge === "New"
                              ? "bg-sp-green text-black"
                              : "bg-[#1DB954] text-black"
                          }`}
                        >
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-[#B3B3B3] text-[12px] mt-0.5 truncate">{opt.desc}</div>
                  </div>

                  {/* Arrow */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#B3B3B3">
                    <path d="M6 4l4 4-4 4" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Close button */}
            <div className="flex justify-end px-4 mt-3">
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-[#3e3e3e] flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="2" x2="12" y2="12" />
                  <line x1="12" y1="2" x2="2" y2="12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
