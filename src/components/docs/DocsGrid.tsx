"use client";

import { motion } from "framer-motion";
import { Document } from "@/data/documents";
import { ArrowRight } from "lucide-react";

interface DocsGridProps {
  docs: Document[];
  onSelect: (doc: Document) => void;
}

export function DocsGrid({ docs, onSelect }: DocsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {docs.map((doc, i) => (
        <motion.button
          key={doc.slug}
          onClick={() => onSelect(doc)}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.99 }}
          className="text-left p-6 rounded-2xl border border-white/[0.06] bg-daye-surface-1 hover:bg-daye-surface-2 transition-colors group relative overflow-hidden"
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 30% 0%, ${doc.color}15, transparent 70%)`,
            }}
          />

          <div className="relative">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
              style={{
                background: `${doc.color}18`,
                border: `1px solid ${doc.color}30`,
              }}
            >
              {doc.icon}
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold text-lg mb-1">{doc.title}</h3>
            <p className="text-white/35 text-sm mb-3">{doc.subtitle}</p>

            {/* Tagline */}
            <p
              className="text-sm font-mono italic mb-5"
              style={{ color: `${doc.color}99` }}
            >
              "{doc.tagline}"
            </p>

            {/* Sections count */}
            <div className="flex items-center justify-between">
              <span className="text-white/25 text-xs">{doc.sections.length} sections</span>
              <div
                className="flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                style={{ color: doc.color }}
              >
                Read
                <ArrowRight size={13} />
              </div>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
