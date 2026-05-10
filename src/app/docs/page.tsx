"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { documents, Document } from "@/data/documents";
import { DocsGrid } from "@/components/docs/DocsGrid";
import { DocModal } from "@/components/docs/DocModal";
import Link from "next/link";
import { ArrowLeft, Sparkles, BookOpen } from "lucide-react";

export default function DocsPage() {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  return (
    <div className="min-h-screen bg-daye-bg">
      {/* Nav */}
      <nav className="px-6 py-4 flex items-center justify-between border-b border-white/[0.05]">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors text-sm"
          >
            <ArrowLeft size={14} />
            Home
          </Link>
          <div className="w-[1px] h-5 bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-daye-green flex items-center justify-center">
              <Sparkles size={10} className="text-black" />
            </div>
            <span className="text-white font-semibold text-sm">Daye</span>
          </div>
        </div>
        <Link href="/prototype">
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-daye-surface-2 border border-white/10 text-white text-sm font-medium hover:bg-daye-surface-3 transition-colors">
            Open Prototype
          </button>
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen size={16} className="text-white/30" />
            <span className="text-white/30 text-sm font-mono uppercase tracking-wider">
              Product Intelligence
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            The Documents
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Five documents that define Daye's product vision, interaction logic, and strategic positioning.
            Readable on-site. Exportable.
          </p>
        </motion.div>

        {/* Grid */}
        <DocsGrid docs={documents} onSelect={setSelectedDoc} />

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-white/20 text-sm mt-16 font-mono"
        >
          Click any document to read in full · Export as .txt for offline reading
        </motion.p>
      </main>

      {/* Doc modal */}
      <DocModal doc={selectedDoc} onClose={() => setSelectedDoc(null)} />
    </div>
  );
}
