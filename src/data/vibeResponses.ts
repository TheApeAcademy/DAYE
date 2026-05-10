import { Track, trackLibrary } from "./tracks";

export interface SessionState {
  vibeLabel: string;
  accentColor: string;
  energy: number;
  mood: string;
  moodTag: string;
  bpmRange: string;
  tracks: Track[];
  nowPlaying: Track;
}

export interface VibeResponse {
  message: string;
  session: SessionState;
}

const buildSession = (
  vibeLabel: string,
  accentColor: string,
  energy: number,
  mood: string,
  moodTag: string,
  bpmRange: string,
  libraryKey: string
): SessionState => {
  const tracks = trackLibrary[libraryKey] || trackLibrary.afrobeats;
  return {
    vibeLabel,
    accentColor,
    energy,
    mood,
    moodTag,
    bpmRange,
    tracks,
    nowPlaying: tracks[0],
  };
};

export const vibeResponses: Record<string, VibeResponse> = {
  rooftop: {
    message:
      "Rooftop Lagos. Okay I see you — let me build this properly. Starting with Burna Boy for the foundation, then we're sliding into Asake to keep the energy ascending. Mid-session I'm pulling Rema in for texture, then Wizkid closes the first hour as the Lagos skyline lights up. BPMs climbing from 94 to 112 — this one's built to evolve. Sit back.",
    session: buildSession(
      "Rooftop Lagos",
      "#F59E0B",
      72,
      "ascending",
      "afrobeats · afropop · night",
      "94 → 112 BPM",
      "afrobeats"
    ),
  },
  lagos: {
    message:
      "Rooftop Lagos. Okay I see you — let me build this properly. Starting with Burna Boy for the foundation, then we're sliding into Asake to keep the energy ascending. Mid-session I'm pulling Rema in for texture, then Wizkid closes the first hour as the Lagos skyline lights up. BPMs climbing from 94 to 112 — this one's built to evolve. Sit back.",
    session: buildSession(
      "Rooftop Lagos",
      "#F59E0B",
      72,
      "ascending",
      "afrobeats · afropop · night",
      "94 → 112 BPM",
      "afrobeats"
    ),
  },
  afrobeats: {
    message:
      "Pure Afrobeats mode — no fillers, only heat. I'm sequencing this by emotional arc: Wizkid opens with warmth, Davido brings the crowd energy mid-way, and we close with some underground gems you probably haven't heard. Trust the progression.",
    session: buildSession(
      "Afrobeats Session",
      "#F59E0B",
      68,
      "warm",
      "afrobeats · street pop",
      "88 → 108 BPM",
      "afrobeats"
    ),
  },
  amapiano: {
    message:
      "Amapiano session loading — log drum first, always. Kabza De Small sets the foundation, Kamo Mphela brings the movement, and DBN Gogo closes us out at peak temperature. This is South African joy engineered into music. Piano keys, log drums, and something you can only feel after midnight.",
    session: buildSession(
      "Amapiano Session",
      "#22D3EE",
      78,
      "euphoric",
      "amapiano · south african house",
      "106 → 116 BPM",
      "amapiano"
    ),
  },
  "dark afro": {
    message:
      "Dark Afro-house. This is where the underground lives. Black Coffee is the architect here — I'm building this session from his sonic blueprint. Deep bass frequencies, atmospheric percussion, and vocal samples that hit different at 2AM. BPMs locked between 118–124. This isn't playlist territory — this is a journey.",
    session: buildSession(
      "Dark Afro-House",
      "#8B5CF6",
      65,
      "hypnotic",
      "afro-house · deep house · underground",
      "116 → 124 BPM",
      "afrohouse"
    ),
  },
  dark: {
    message:
      "Dark Afro-house. This is where the underground lives. Black Coffee is the architect here — I'm building this session from his sonic blueprint. Deep bass frequencies, atmospheric percussion, and vocal samples that hit different at 2AM. BPMs locked between 118–124. This isn't playlist territory — this is a journey.",
    session: buildSession(
      "Dark Afro-House",
      "#8B5CF6",
      65,
      "hypnotic",
      "afro-house · deep house · underground",
      "116 → 124 BPM",
      "afrohouse"
    ),
  },
  afrohouse: {
    message:
      "Dark Afro-house. This is where the underground lives. Black Coffee is the architect here — I'm building this session from his sonic blueprint. Deep bass frequencies, atmospheric percussion, and vocal samples that hit different at 2AM. BPMs locked between 118–124. This isn't playlist territory — this is a journey.",
    session: buildSession(
      "Dark Afro-House",
      "#8B5CF6",
      65,
      "hypnotic",
      "afro-house · deep house · underground",
      "116 → 124 BPM",
      "afrohouse"
    ),
  },
  heartbreak: {
    message:
      "Heartbreak but make it dignified. I hear you — this isn't crying into a pillow music, this is sitting with your feelings like they owe you something. Tems opens with raw vulnerability, Ayra Starr keeps the ache alive, and Giveon closes with the kind of beauty that makes pain feel earned. Slow BPMs, warm keys. You'll be okay.",
    session: buildSession(
      "Heartbreak Sovereign",
      "#F43F5E",
      32,
      "aching",
      "alt r&b · neo-soul · afropop",
      "68 → 80 BPM",
      "heartbreak"
    ),
  },
  sad: {
    message:
      "Heartbreak but make it dignified. I hear you — this isn't crying into a pillow music, this is sitting with your feelings like they owe you something. Tems opens with raw vulnerability, Ayra Starr keeps the ache alive, and Giveon closes with the kind of beauty that makes pain feel earned. Slow BPMs, warm keys. You'll be okay.",
    session: buildSession(
      "Heartbreak Sovereign",
      "#F43F5E",
      32,
      "aching",
      "alt r&b · neo-soul · afropop",
      "68 → 80 BPM",
      "heartbreak"
    ),
  },
  emotional: {
    message:
      "I got you. Emotional territory — let me be careful with this one. I'm sequencing based on emotional arc, not just vibe. Tems sets the tone, then we let Frank Ocean carry the weight of the middle, and Giveon closes it. The transitions are soft on purpose. Let it breathe.",
    session: buildSession(
      "Emotional Arc",
      "#F43F5E",
      28,
      "tender",
      "alt r&b · neo-soul",
      "68 → 76 BPM",
      "heartbreak"
    ),
  },
  gym: {
    message:
      "GYM MODE ACTIVATED. No slow builds — we're starting at 130 BPM and climbing from there. Travis Scott sets the energy, Kendrick brings the mental focus, and SICKO MODE is your peak set trigger. By the time Power hits, you're not thinking anymore. Just moving. This session doesn't have a cool-down because you don't need one.",
    session: buildSession(
      "Gym: Beast Mode",
      "#22D3EE",
      96,
      "aggressive",
      "trap · hip-hop · rap",
      "130 → 164 BPM",
      "gym"
    ),
  },
  workout: {
    message:
      "GYM MODE ACTIVATED. No slow builds — we're starting at 130 BPM and climbing from there. Travis Scott sets the energy, Kendrick brings the mental focus, and SICKO MODE is your peak set trigger. By the time Power hits, you're not thinking anymore. Just moving. This session doesn't have a cool-down because you don't need one.",
    session: buildSession(
      "Gym: Beast Mode",
      "#22D3EE",
      96,
      "aggressive",
      "trap · hip-hop · rap",
      "130 → 164 BPM",
      "gym"
    ),
  },
  aggressive: {
    message:
      "High-aggression mode. Channeling pure intensity — trap, drill, and anything with teeth. No melody that doesn't have purpose. This session is built for tunnel vision.",
    session: buildSession(
      "Maximum Intensity",
      "#EF4444",
      99,
      "primal",
      "trap · drill · hip-hop",
      "140 → 164 BPM",
      "gym"
    ),
  },
  luxury: {
    message:
      "Luxury late-night drive. This is the 2AM freeway session — no traffic, city lights in the rearview, windows slightly open. Frank Ocean for the introspection, H.E.R. for the silk, Bryson Tiller to close. Low BPMs, high production density. Every transition is a smooth merge, not a lane change.",
    session: buildSession(
      "Luxury Night Drive",
      "#8B5CF6",
      45,
      "silk",
      "r&b · neo-soul · trap soul",
      "72 → 82 BPM",
      "luxuryDrive"
    ),
  },
  drive: {
    message:
      "Late-night drive, luxury settings. Let me build the perfect freeway session — Frank Ocean for the introspective stretches, H.E.R. for the smooth cruise, Bryson Tiller when the city gets quiet. Every transition mimics a smooth merge.",
    session: buildSession(
      "Night Drive",
      "#8B5CF6",
      45,
      "smooth",
      "r&b · neo-soul · trap soul",
      "72 → 82 BPM",
      "luxuryDrive"
    ),
  },
  "late night": {
    message:
      "Late-night drive, luxury settings. Let me build the perfect freeway session — Frank Ocean for the introspective stretches, H.E.R. for the smooth cruise, Bryson Tiller when the city gets quiet. Every transition mimics a smooth merge.",
    session: buildSession(
      "Night Drive",
      "#8B5CF6",
      45,
      "smooth",
      "r&b · neo-soul · trap soul",
      "72 → 82 BPM",
      "luxuryDrive"
    ),
  },
  brazilian: {
    message:
      "Brazilian energy — Baile Funk meets Latin pop meets something that makes your body move before your brain catches up. Anitta is the cultural anchor here, MC Fioti keeps the rhythm chaotic, and Bad Bunny bridges the Latin trap crossover. This session is geographic chaos in the best way. Prepare for movement.",
    session: buildSession(
      "Brazilian Frequency",
      "#F59E0B",
      88,
      "chaotic",
      "baile funk · latin pop · reggaeton",
      "89 → 152 BPM",
      "brazilianFunk"
    ),
  },
  funk: {
    message:
      "Brazilian energy — Baile Funk meets Latin pop meets something that makes your body move before your brain catches up. Anitta is the cultural anchor here, MC Fioti keeps the rhythm chaotic, and Bad Bunny bridges the Latin trap crossover. This session is geographic chaos in the best way. Prepare for movement.",
    session: buildSession(
      "Brazilian Frequency",
      "#F59E0B",
      88,
      "chaotic",
      "baile funk · latin pop · reggaeton",
      "89 → 152 BPM",
      "brazilianFunk"
    ),
  },
  morning: {
    message:
      "Good morning. Soft entry — I'm starting this with pure acoustic warmth. JVKE sets the golden hour tone, then we build gradually toward Sunday optimism. No percussion overload, just warm keys and clean production. By track 4 you'll feel like you've already had coffee. This session is designed to make the morning feel like a gift.",
    session: buildSession(
      "Golden Morning",
      "#F59E0B",
      38,
      "warm",
      "indie pop · folk · acoustic",
      "72 → 90 BPM",
      "morning"
    ),
  },
  chill: {
    message:
      "Chill mode. Low effort, high atmosphere. I'm pulling back the BPMs and letting texture do the work. This session is built for existing in a space, not performing in one.",
    session: buildSession(
      "Low Effort High Feeling",
      "#22D3EE",
      35,
      "atmospheric",
      "indie pop · lo-fi · acoustic",
      "72 → 86 BPM",
      "morning"
    ),
  },
};

export const getFallbackResponse = (input: string): VibeResponse => ({
  message: `Interesting request — "${input}". I'm reading between the lines here. Let me build something that captures what I think you're going for. If the energy isn't right, just tell me to adjust and I'll pivot the session immediately.`,
  session: buildSession(
    "Custom Session",
    "#8B5CF6",
    60,
    "exploring",
    "mixed · curated",
    "88 → 112 BPM",
    "afrobeats"
  ),
});

export function matchVibe(input: string): VibeResponse {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(vibeResponses)) {
    if (lower.includes(key)) {
      return response;
    }
  }
  return getFallbackResponse(input);
}
