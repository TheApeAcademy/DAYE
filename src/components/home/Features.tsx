"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🎛️",
    label: "AI DJ Mode",
    color: "#8B5CF6",
    description:
      "Communicate your mood, vibe, or environment in natural language. Daye builds intelligent DJ sets with smooth transitions, harmonic sequencing, and emotional arc.",
    examples: ["Rooftop Lagos night vibes", "Dark Afro-house, deep", "Luxury late-night drive"],
  },
  {
    icon: "🔄",
    label: "Live Session Adaptation",
    color: "#22D3EE",
    description:
      "Modify sessions in real-time through natural commands. The AI adapts fluidly — never restarting, always evolving. Your session has memory.",
    examples: ["More energy", "Make it darker", "Add female vocals"],
  },
  {
    icon: "🎚️",
    label: "AI Producer Mode",
    color: "#F59E0B",
    description:
      "Upload humming, voice notes, or rough ideas. Daye generates beats, suggests instrumentation, and builds sonic environments around your raw creative intent.",
    examples: ["Make this atmospheric", "Turn this into amapiano", "Add cinematic tension"],
  },
  {
    icon: "🧠",
    label: "Music Intelligence",
    color: "#1ED760",
    description:
      "Ask Daye anything. Album meaning, artist inspiration, genre origins, lyric interpretation, sonic analysis. Daye responds like a world-class music expert.",
    examples: ["Why does this transition work?", "Artists similar to Tems but darker", "Explain this album"],
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group relative p-6 rounded-2xl border border-white/[0.06] bg-daye-surface-1 hover:bg-daye-surface-2 transition-colors duration-300"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${feature.color}15, transparent 70%)`,
        }}
      />

      <div className="relative">
        {/* Icon + label */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}30` }}
          >
            {feature.icon}
          </div>
          <h3 className="text-white font-semibold text-lg">{feature.label}</h3>
        </div>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-5">{feature.description}</p>

        {/* Example commands */}
        <div className="flex flex-wrap gap-2">
          {feature.examples.map((ex) => (
            <span
              key={ex}
              className="px-3 py-1 rounded-full text-xs font-mono"
              style={{
                background: `${feature.color}12`,
                color: `${feature.color}cc`,
                border: `1px solid ${feature.color}25`,
              }}
            >
              "{ex}"
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-32 px-6 bg-daye-bg relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-daye-purple text-sm font-mono tracking-[0.3em] uppercase mb-4"
          >
            Four Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6"
          >
            Not a playlist.
            <br />
            <span className="text-white/30">Not a chatbot.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl mx-auto"
          >
            Four tightly scoped capabilities that replace how you interact with music forever.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.label} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
