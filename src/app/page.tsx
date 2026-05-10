import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { VisionSection } from "@/components/home/VisionSection";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-daye-bg">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-daye-green flex items-center justify-center">
            <Sparkles size={12} className="text-black" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">Daye</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/docs"
            className="text-white/50 text-sm font-medium hover:text-white/80 transition-colors flex items-center gap-1.5"
          >
            <BookOpen size={14} />
            Docs
          </Link>
          <Link href="/prototype">
            <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-daye-green transition-colors">
              Open Prototype
              <ArrowRight size={13} />
            </button>
          </Link>
        </div>
      </nav>

      <Hero />
      <Features />
      <VisionSection />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/[0.06] bg-daye-bg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-daye-green flex items-center justify-center">
              <Sparkles size={10} className="text-black" />
            </div>
            <span className="text-white/40 text-sm font-medium">Daye</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/prototype" className="text-white/30 text-sm hover:text-white/60 transition-colors">
              Prototype
            </Link>
            <Link href="/docs" className="text-white/30 text-sm hover:text-white/60 transition-colors">
              Documents
            </Link>
          </div>
          <p className="text-white/20 text-xs font-mono">
            The future of music is conversational.
          </p>
        </div>
      </footer>
    </main>
  );
}
