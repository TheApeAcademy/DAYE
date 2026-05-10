export interface DocSection {
  heading: string;
  body: string;
}

export interface Document {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  tagline: string;
  sections: DocSection[];
}

export const documents: Document[] = [
  {
    slug: "vision",
    title: "Product Vision",
    subtitle: "Why Daye Exists",
    icon: "🔭",
    color: "#8B5CF6",
    tagline: "The future of music is not a playlist.",
    sections: [
      {
        heading: "The Problem With Music Today",
        body: "Streaming platforms gave us infinite music and infinite choice — but they didn't give us intelligence. Every session starts the same way: open app, think of a song, build a playlist, skip tracks, lose the vibe. This is not listening. This is manual labor disguised as entertainment.\n\nThe average user skips 30% of tracks they play. Why? Because playlists are static and mood is dynamic. The platform doesn't know you're on a rooftop in Lagos at 11PM. It doesn't know you want the energy to climb slowly, not drop. It doesn't know when to transition from Afrobeats into Afro-house. You do — but you shouldn't have to manage it.",
      },
      {
        heading: "The Shift From Passive to Conversational",
        body: "Daye is founded on a single premise: music should respond to you the way a great DJ does. A world-class DJ doesn't play songs — they read the room. They feel the energy, anticipate the next emotional beat, and guide the crowd somewhere they didn't know they wanted to go.\n\nThat intelligence has never existed in software form. Until now.\n\nDaye is the first music system built around conversational intelligence rather than playlists. You don't search. You don't curate. You communicate. You tell Daye what you need and Daye builds the experience around that intent.",
      },
      {
        heading: "The Vision Statement",
        body: "Daye exists to transform music from passive listening into interactive emotional experiences. We believe that the future of music is conversational, emotional, and adaptive — and that the relationship between a listener and their music should feel as intelligent and responsive as the relationship between a great DJ and their crowd.\n\nWe are not building another streaming app. We are building the operating system for how humans relate to music.",
      },
      {
        heading: "Why Now",
        body: "The convergence of large language models, audio intelligence, and real-time AI has made this possible for the first time. The technical barriers that prevented music systems from truly understanding human intent have collapsed. Daye is the product that was only possible in this exact moment — and the window to define this category is open right now.",
      },
    ],
  },
  {
    slug: "prd",
    title: "Product Requirements",
    subtitle: "PRD — Scope & System Boundaries",
    icon: "📋",
    color: "#22D3EE",
    tagline: "Build the right thing. Not everything.",
    sections: [
      {
        heading: "Core Feature Set (MVP)",
        body: "Daye's MVP is defined by four capabilities and nothing else:\n\n1. AI DJ Mode — Conversational session generation from mood/vibe input. The primary interaction model.\n\n2. Live Session Adaptation — Real-time session modification via commands. \"More energy.\" \"Slow it down.\" \"Make it darker.\"\n\n3. AI Producer Mode — Voice/audio upload to beat/arrangement generation.\n\n4. Conversational Music Intelligence — Deep music knowledge, artist context, genre relationships, lyric interpretation.",
      },
      {
        heading: "Interaction Rules",
        body: "The system operates under strict interaction principles:\n\n— Users communicate intent, not commands. The difference: \"Play something upbeat\" is intent. Selecting a genre from a dropdown is a command. Daye is built for the former.\n\n— Sessions evolve, they don't restart. Modifications are additive. If a user says \"more energy,\" the session shifts — it doesn't rebuild from scratch.\n\n— Transitions are never abrupt. The DJ logic must always find a smooth harmonic and energetic path between states.\n\n— Daye has an opinion. When a request is ambiguous, Daye makes a creative choice and explains it. This is not a neutral system.",
      },
      {
        heading: "System Boundaries (What We Are NOT Building)",
        body: "These features are explicitly excluded from MVP scope:\n\n× Social feed or follower systems\n× Creator marketplace\n× DJ battle or competitive modes\n× Collaborative listening rooms\n× Event discovery or ticketing\n× Complex analytics dashboards\n× User-generated content submission\n× Full DAW replacement\n\nEvery excluded feature represents a complexity cost that would dilute the core experience. The MVP's power comes from its focus.",
      },
      {
        heading: "MVP Success Criteria",
        body: "The MVP succeeds when a user can:\n\n1. Open Daye and describe a vibe in natural language\n2. Receive an emotionally coherent music session within 3 seconds\n3. Modify the session through natural language mid-session\n4. Feel that Daye understood their intent better than they could articulate it themselves\n\nIf criterion 4 is achieved, everything else follows.",
      },
    ],
  },
  {
    slug: "ux",
    title: "UX Philosophy",
    subtitle: "Emotional Design & Interaction Logic",
    icon: "🎨",
    color: "#F59E0B",
    tagline: "Design for the feeling, not the function.",
    sections: [
      {
        heading: "Users Think in Vibes, Not Songs",
        body: "The fundamental insight driving Daye's UX is that humans experience music emotionally, not categorically. When someone wants music, they don't think 'I want a 94 BPM track in the key of G minor.' They think 'I want something that feels like Lagos at night' or 'I need something that matches how I feel right now.'\n\nThe entire interface is designed around this reality. The input is freeform. The output is emotional. The system translates between them invisibly.",
      },
      {
        heading: "The Conversation Model",
        body: "Daye's interface is conversation-first by design. This is a fundamental philosophical choice, not a UI pattern.\n\nTraditional music UI: [Search bar] → [Results list] → [Play button]\nDaye's UI: [Natural language input] → [Daye interprets] → [Session begins]\n\nThe conversation panel is not a chat interface bolted onto a music app. It IS the interface. The music experience emerges from the conversation.\n\nThis means every visual element — now playing, session state, energy indicators — is a visualization of the conversation, not a separate information layer.",
      },
      {
        heading: "Emotional Flow Design",
        body: "Sessions have emotional arcs. The UX must communicate this arc visually at all times. This means:\n\n— Energy level is visible and dynamic (not a static number)\n— Mood indicators evolve as the session progresses\n— The visual atmosphere of the interface shifts with the session state\n— Transitions are visualized, not just played\n\nThe interface should feel like it's *alive with the music*, not just displaying information about it.",
      },
      {
        heading: "The Immersion Principle",
        body: "Daye's visual design follows one rule above all others: immersion over information.\n\nWhen in doubt, show less. Dark interfaces reduce cognitive load and let the music take center stage. Gradients and motion create atmosphere without requiring content. The space between elements is as important as the elements themselves.\n\nUsers should feel they've stepped into a music environment — not opened a software application.",
      },
    ],
  },
  {
    slug: "prototype",
    title: "Prototype Logic",
    subtitle: "How the AI DJ Simulation Works",
    icon: "⚙️",
    color: "#1ED760",
    tagline: "Fake execution. Real perception.",
    sections: [
      {
        heading: "The Simulation Philosophy",
        body: "The Daye prototype is not a working AI music system — it is a high-fidelity simulation of one. The goal is not functional accuracy but perceptual accuracy.\n\nThe question we answer is: what does it feel like to use Daye? Not: how does Daye technically work?\n\nThis distinction drives every decision in the prototype. The system should feel intelligent, responsive, and emotionally aware — even when the intelligence is scripted.",
      },
      {
        heading: "Vibe Recognition System",
        body: "The prototype uses keyword matching to detect vibe intent from user input. Recognized vibe categories include:\n\n— Geographic/cultural: 'Lagos', 'Lagos rooftop', 'South African', 'Brazilian'\n— Emotional: 'heartbreak', 'sad', 'emotional', 'confident'\n— Physical context: 'gym', 'workout', 'drive', 'morning'\n— Musical genre: 'afrobeats', 'amapiano', 'afro-house', 'funk'\n— Energy level: 'aggressive', 'chill', 'dark', 'luxury'\n\nUnmatched inputs receive a generative fallback response that maintains the illusion of intelligence while acknowledging the specific input.",
      },
      {
        heading: "Session State Model",
        body: "Each session has four dynamic properties that update with every vibe change:\n\n1. Energy Level (0–100) — Visual energy bar with animated fill\n2. Accent Color — Hue shifts based on genre/mood category\n3. BPM Range — Displayed range showing progression intent\n4. Mood Tag — Descriptive qualifier (e.g., 'hypnotic', 'ascending', 'silk')\n\nThese properties create the perception of an intelligent system responding to emotional state, not just swapping track lists.",
      },
      {
        heading: "Transition Logic",
        body: "The prototype simulates DJ transition intelligence through:\n\n— BPM progression: Sessions always display ascending or descending BPM ranges, never random jumps\n— Harmonic compatibility: Track keys in each library are selected for tonal compatibility\n— Energy arc: Track ordering within each library follows an intentional emotional arc\n— Session memory: The Daye conversation remembers previous vibe requests and can reference them\n\nThese rules create the sensation of genuine musical intelligence.",
      },
    ],
  },
  {
    slug: "strategy",
    title: "Strategic Positioning",
    subtitle: "Where Daye Fits in Music's Future",
    icon: "🎯",
    color: "#F43F5E",
    tagline: "A new category, not a better playlist.",
    sections: [
      {
        heading: "The Category Gap",
        body: "The music industry has three established categories:\n\n1. Streaming platforms (Spotify, Apple Music) — passive listening + discovery\n2. DJ software (Serato, Traktor, Rekordbox) — professional mixing tools\n3. Production software (Ableton, Logic) — music creation\n\nDaye doesn't fit into any of these. Daye creates a fourth category: conversational music intelligence.\n\nThis isn't a feature that any existing platform can bolt on. It requires a fundamentally different product philosophy, interaction model, and AI architecture.",
      },
      {
        heading: "The Spotify Integration Thesis",
        body: "The most natural home for Daye at scale is as a Spotify-native feature. Here's why:\n\nSpotify has 600M+ users, a catalog of 100M+ tracks, and the infrastructure to support real-time AI music experiences. What Spotify lacks is the interaction layer that makes that catalog truly intelligent.\n\nDaye is that interaction layer. As a Spotify feature (or acquisition), Daye would give Spotify what no competitor can replicate: a conversational AI that turns passive listening into an active, emotionally responsive experience.\n\nThis is the strategic north star: Daye as the intelligence layer on top of existing music infrastructure.",
      },
      {
        heading: "Competitive Defensibility",
        body: "Daye's moat is not technical — any AI lab can build music recommendation. Daye's moat is cultural and behavioral.\n\nThe moat is: taste.\n\nDaye's personality, its way of describing music, its cultural fluency across Afrobeats, Amapiano, R&B, and global genres — this is not something that can be replicated by a generic AI assistant. It requires deep music culture knowledge, opinionated curation, and a character that users trust.\n\nThe longer users interact with Daye, the more calibrated it becomes to their taste. This personalization compounds over time in a way that a cold system cannot replicate.",
      },
      {
        heading: "The Long-Term Vision",
        body: "In five years, Daye is the default way humans interact with music.\n\nNot just streaming — any music context. Creating music (producer mode). Performing music (live DJ sessions). Discovering music (cultural deep dives). Teaching music (sonic education).\n\nThe vision is a world where 'I want music that feels like...' is the only UI anyone needs. Daye is the system that makes that world real.",
      },
    ],
  },
];

export function getDocument(slug: string): Document | undefined {
  return documents.find((d) => d.slug === slug);
}
