"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    n: "01",
    title: "You speak the vibe",
    body: "Type or speak naturally. No genre dropdowns. No artist search. Just describe what you need — a place, a feeling, a moment.",
    example: {
      label: "User says:",
      text: "Rooftop Lagos. 11PM. Warm night. Energy building slowly.",
    },
  },
  {
    n: "02",
    title: "DAYE builds the session",
    body: "DAYE sequences tracks using BPM progression, harmonic compatibility, and emotional arc — not just algorithmic similarity. The session has intention.",
    example: {
      label: "DAYE responds:",
      text: "Rooftop Lagos. Starting with Burna Boy for the foundation — ascending into Asake at 105 BPM mid-session. Rema closes the first hour as the skyline lights up. Trust the arc.",
    },
  },
  {
    n: "03",
    title: "You adapt in real time",
    body: "Sessions respond to commands mid-flow. No restarts. DAYE reads context, remembers where the session has been, and shifts accordingly.",
    example: {
      label: "User says:",
      text: "Darker. Less vocal. Keep the energy.",
    },
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how" className="py-32 border-t border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-8" ref={ref}>
        <SectionLabel number="04" label="How It Works" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.03em] text-white mb-20 leading-tight max-w-2xl"
        >
          Three interactions.{" "}
          <span className="text-sp-sub font-normal">Zero manual curation.</span>
        </motion.h2>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-8 py-12 border-b border-white/[0.08] items-start"
            >
              <div className="text-sp-muted text-[13px] font-mono pt-1">{step.n}</div>

              <div>
                <h3 className="text-[22px] font-bold text-white mb-3 tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="text-sp-sub text-[15px] leading-relaxed">{step.body}</p>
              </div>

              <div className="bg-sp-elevated rounded-lg p-5">
                <div className="text-sp-green text-[11px] font-bold uppercase tracking-[0.15em] mb-3">
                  {step.example.label}
                </div>
                <p className="text-white text-[14px] leading-relaxed italic font-light">
                  &ldquo;{step.example.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
