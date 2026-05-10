"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ArrowLeft } from "lucide-react";
import { Document } from "@/data/documents";
import { useEffect } from "react";

interface DocModalProps {
  doc: Document | null;
  onClose: () => void;
}

export function DocModal({ doc, onClose }: DocModalProps) {
  useEffect(() => {
    if (!doc) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [doc, onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (doc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [doc]);

  return (
    <AnimatePresence>
      {doc && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-x-[10%] md:inset-y-[5%] z-50 bg-daye-surface-1 rounded-3xl border border-white/[0.08] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div
              className="px-8 py-6 flex-shrink-0 border-b border-white/[0.06]"
              style={{
                background: `linear-gradient(135deg, ${doc.color}10 0%, transparent 100%)`,
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${doc.color}20`, border: `1px solid ${doc.color}30` }}
                  >
                    {doc.icon}
                  </div>
                  <div>
                    <p className="text-white/35 text-xs font-mono uppercase tracking-wider mb-1">
                      Daye Product Intelligence
                    </p>
                    <h2 className="text-white text-2xl font-bold">{doc.title}</h2>
                    <p className="text-white/45 text-sm mt-0.5">{doc.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const content = doc.sections.map(s => `# ${s.heading}\n\n${s.body}`).join("\n\n---\n\n");
                      const blob = new Blob([`# ${doc.title}\n${doc.subtitle}\n\n${doc.tagline}\n\n---\n\n${content}`], { type: "text/plain" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `daye-${doc.slug}.txt`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm hover:text-white/80 hover:border-white/20 transition-all"
                  >
                    <Download size={14} />
                    Export
                  </button>
                  <button
                    onClick={onClose}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Tagline */}
              <div className="mt-4 pl-16">
                <p
                  className="text-base font-mono italic"
                  style={{ color: doc.color }}
                >
                  "{doc.tagline}"
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto px-8 py-10 space-y-12">
                {doc.sections.map((section, i) => (
                  <motion.section
                    key={section.heading}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-1 h-6 rounded-full flex-shrink-0"
                        style={{ backgroundColor: doc.color }}
                      />
                      <h3 className="text-white font-semibold text-xl">{section.heading}</h3>
                    </div>
                    <div className="pl-4 space-y-3">
                      {section.body.split("\n\n").map((paragraph, j) => (
                        <p
                          key={j}
                          className="text-white/60 leading-relaxed text-base"
                          style={{
                            whiteSpace: paragraph.includes("—\n") || paragraph.startsWith("1.") || paragraph.startsWith("×")
                              ? "pre-line"
                              : undefined,
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.section>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 border-t border-white/[0.06] flex items-center justify-between flex-shrink-0">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-white/40 text-sm hover:text-white/70 transition-colors"
              >
                <ArrowLeft size={14} />
                Back to Documents
              </button>
              <span className="text-white/20 text-xs font-mono">
                DAYE · PRODUCT INTELLIGENCE © 2024
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
