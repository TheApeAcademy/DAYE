"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { documents, Document } from "@/data/documents";
import { DocModal } from "@/components/docs/DocModal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DocsPage() {
  const [selected, setSelected] = useState<Document | null>(null);

  return (
    <div className="min-h-screen bg-black">
      {/* Nav */}
      <nav className="px-8 py-5 flex items-center justify-between border-b border-white/[0.06]">
        <Link href="/" className="flex items-center gap-2 text-sp-sub text-[14px] hover:text-white transition-colors">
          <ArrowLeft size={15} />
          Overview
        </Link>
        <Link href="/daye">
          <button className="px-5 py-2 rounded-full bg-sp-green text-black text-[13px] font-bold hover:bg-sp-green-bright transition-colors">
            Launch DAYE
          </button>
        </Link>
      </nav>

      <main className="max-w-[1200px] mx-auto px-8 py-20">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-sp-green" />
            <span className="text-sp-green text-[11px] font-bold tracking-[0.2em] uppercase">
              Product Intelligence
            </span>
          </div>
          <h1 className="text-[48px] font-black tracking-[-0.03em] text-white mb-4">
            The Documents
          </h1>
          <p className="text-sp-sub text-[16px] max-w-lg leading-relaxed">
            Five product documents supporting the DAYE concept — vision, requirements,
            UX logic, prototype mechanics, and strategic positioning.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {documents.map((doc, i) => (
            <motion.button
              key={doc.slug}
              onClick={() => setSelected(doc)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="bg-black text-left p-8 hover:bg-sp-elevated transition-colors group"
            >
              <div className="text-3xl mb-5">{doc.icon}</div>
              <div className="text-white font-bold text-[18px] mb-1 group-hover:text-sp-green transition-colors">
                {doc.title}
              </div>
              <div className="text-sp-muted text-[13px] mb-4">{doc.subtitle}</div>
              <div
                className="text-[13px] font-medium italic mb-5"
                style={{ color: doc.color }}
              >
                &ldquo;{doc.tagline}&rdquo;
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sp-muted text-[12px]">{doc.sections.length} sections</span>
                <span className="text-sp-muted text-[12px] group-hover:text-white transition-colors">
                  Read →
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sp-muted text-[13px] text-center mt-12"
        >
          Click to read in full · Export as .txt available inside each document
        </motion.p>
      </main>

      <DocModal doc={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
