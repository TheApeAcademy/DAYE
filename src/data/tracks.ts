export interface Track {
  id: string;
  title: string;
  artist: string;
  genre: string;
  bpm: number;
  duration: string;
  key: string;
  mood: string;
  vibeTag: string;
}

export const trackLibrary: Record<string, Track[]> = {
  afrobeats: [
    { id: "a1", title: "Ye", artist: "Burna Boy", genre: "Afrobeats", bpm: 98, duration: "3:42", key: "Cm", mood: "confident", vibeTag: "rooftop" },
    { id: "a2", title: "Terminator", artist: "Asake", genre: "Street Pop", bpm: 105, duration: "3:18", key: "Am", mood: "energetic", vibeTag: "rooftop" },
    { id: "a3", title: "Calm Down", artist: "Rema", genre: "Afropop", bpm: 106, duration: "3:37", key: "Dm", mood: "smooth", vibeTag: "rooftop" },
    { id: "a4", title: "Location", artist: "Davido ft. Focalistic", genre: "Afrobeats", bpm: 108, duration: "3:52", key: "Fm", mood: "upbeat", vibeTag: "rooftop" },
    { id: "a5", title: "Essence", artist: "Wizkid ft. Tems", genre: "Afrobeats", bpm: 94, duration: "4:12", key: "Gm", mood: "sensual", vibeTag: "rooftop" },
    { id: "a6", title: "UNAVAILABLE", artist: "Davido ft. Musa Keys", genre: "Afrobeats", bpm: 112, duration: "3:28", key: "Bbm", mood: "euphoric", vibeTag: "rooftop" },
    { id: "a7", title: "Ojuelegba", artist: "Wizkid", genre: "Afrobeats", bpm: 88, duration: "3:55", key: "Ebm", mood: "nostalgic", vibeTag: "rooftop" },
  ],
  afrohouse: [
    { id: "ah1", title: "Midnight Frequencies", artist: "Black Coffee", genre: "Afro-house", bpm: 122, duration: "7:14", key: "Fm", mood: "deep", vibeTag: "dark-afro" },
    { id: "ah2", title: "Drive", artist: "Themba", genre: "Afro-house", bpm: 124, duration: "8:02", key: "Am", mood: "hypnotic", vibeTag: "dark-afro" },
    { id: "ah3", title: "Indaba We Sishayel'imali", artist: "Busta 929", genre: "Afro-house", bpm: 118, duration: "6:47", key: "Dm", mood: "dark", vibeTag: "dark-afro" },
    { id: "ah4", title: "I Found You", artist: "Black Coffee ft. Pharrell", genre: "Afro-house", bpm: 120, duration: "5:33", key: "Gm", mood: "spiritual", vibeTag: "dark-afro" },
    { id: "ah5", title: "We Dance Again", artist: "Naughty Boy ft. Nile Rodgers", genre: "Afro-house", bpm: 116, duration: "6:18", key: "Cm", mood: "transcendent", vibeTag: "dark-afro" },
  ],
  amapiano: [
    { id: "am1", title: "Asibe Happy", artist: "Kabza De Small ft. Ami Faku", genre: "Amapiano", bpm: 112, duration: "5:44", key: "Fm", mood: "joyful", vibeTag: "amapiano" },
    { id: "am2", title: "John Vuli Gate", artist: "Mapara A Jazz", genre: "Amapiano", bpm: 108, duration: "4:58", key: "Bbm", mood: "celebratory", vibeTag: "amapiano" },
    { id: "am3", title: "Temperature", artist: "Kamo Mphela", genre: "Amapiano", bpm: 114, duration: "5:22", key: "Ebm", mood: "ecstatic", vibeTag: "amapiano" },
    { id: "am4", title: "Siyathandana", artist: "Kabza De Small ft. Ami Faku", genre: "Amapiano", bpm: 110, duration: "6:11", key: "Abm", mood: "smooth", vibeTag: "amapiano" },
    { id: "am5", title: "Mamela", artist: "DBN Gogo", genre: "Amapiano", bpm: 116, duration: "5:07", key: "Dbm", mood: "peak", vibeTag: "amapiano" },
    { id: "am6", title: "Waiter", artist: "Daliwonga ft. Young Stunna", genre: "Amapiano", bpm: 106, duration: "4:39", key: "Gbm", mood: "swagger", vibeTag: "amapiano" },
  ],
  heartbreak: [
    { id: "h1", title: "Essence (Slowed)", artist: "Wizkid ft. Tems", genre: "Afropop", bpm: 80, duration: "4:48", key: "Gm", mood: "aching", vibeTag: "heartbreak" },
    { id: "h2", title: "Nobody Has to Know", artist: "Tems", genre: "Alt R&B", bpm: 76, duration: "3:52", key: "Cm", mood: "raw", vibeTag: "heartbreak" },
    { id: "h3", title: "Found Your Way", artist: "Ayra Starr", genre: "Afropop", bpm: 72, duration: "3:44", key: "Am", mood: "melancholic", vibeTag: "heartbreak" },
    { id: "h4", title: "La La", artist: "Giveon", genre: "R&B", bpm: 68, duration: "3:21", key: "Bbm", mood: "longing", vibeTag: "heartbreak" },
    { id: "h5", title: "Overdue", artist: "Genesis Owusu", genre: "Neo-soul", bpm: 74, duration: "3:58", key: "Dm", mood: "bittersweet", vibeTag: "heartbreak" },
    { id: "h6", title: "Hurt Me", artist: "Tems", genre: "Alt R&B", bpm: 70, duration: "4:02", key: "Fm", mood: "resigned", vibeTag: "heartbreak" },
  ],
  gym: [
    { id: "g1", title: "Tunnel Vision", artist: "Kodak Black", genre: "Trap", bpm: 140, duration: "4:25", key: "Cm", mood: "focused", vibeTag: "gym" },
    { id: "g2", title: "Goosebumps", artist: "Travis Scott ft. Kendrick Lamar", genre: "Trap", bpm: 130, duration: "4:03", key: "Fm", mood: "intense", vibeTag: "gym" },
    { id: "g3", title: "SICKO MODE", artist: "Travis Scott", genre: "Trap", bpm: 155, duration: "5:12", key: "Am", mood: "aggressive", vibeTag: "gym" },
    { id: "g4", title: "DNA.", artist: "Kendrick Lamar", genre: "Hip-hop", bpm: 164, duration: "3:05", key: "Dm", mood: "primal", vibeTag: "gym" },
    { id: "g5", title: "Numb / Encore", artist: "Jay-Z ft. Linkin Park", genre: "Rap-rock", bpm: 148, duration: "3:22", key: "Gm", mood: "explosive", vibeTag: "gym" },
    { id: "g6", title: "Power", artist: "Kanye West", genre: "Hip-hop", bpm: 142, duration: "4:52", key: "Cm", mood: "monumental", vibeTag: "gym" },
  ],
  luxuryDrive: [
    { id: "l1", title: "Come Through", artist: "H.E.R.", genre: "R&B", bpm: 76, duration: "4:18", key: "Bbm", mood: "silk", vibeTag: "luxury-drive" },
    { id: "l2", title: "Location", artist: "Khalid", genre: "Indie R&B", bpm: 78, duration: "3:42", key: "Fm", mood: "drifting", vibeTag: "luxury-drive" },
    { id: "l3", title: "Nights", artist: "Frank Ocean", genre: "Alt R&B", bpm: 82, duration: "5:07", key: "Ebm", mood: "cinematic", vibeTag: "luxury-drive" },
    { id: "l4", title: "Self Control", artist: "Frank Ocean", genre: "Neo-soul", bpm: 74, duration: "4:09", key: "Dbm", mood: "introspective", vibeTag: "luxury-drive" },
    { id: "l5", title: "Whipped Cream", artist: "Ari Lennox", genre: "Neo-soul", bpm: 72, duration: "3:33", key: "Gbm", mood: "luxurious", vibeTag: "luxury-drive" },
    { id: "l6", title: "Until", artist: "Bryson Tiller", genre: "Trap soul", bpm: 80, duration: "3:48", key: "Abm", mood: "late-night", vibeTag: "luxury-drive" },
  ],
  brazilianFunk: [
    { id: "b1", title: "Vai Malandra", artist: "Anitta ft. Mc Zaac", genre: "Baile funk", bpm: 148, duration: "3:12", key: "Am", mood: "chaotic", vibeTag: "brazilian" },
    { id: "b2", title: "Bum Bum Tam Tam", artist: "MC Fioti", genre: "Funk carioca", bpm: 152, duration: "2:58", key: "Fm", mood: "explosive", vibeTag: "brazilian" },
    { id: "b3", title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", genre: "Latin pop", bpm: 89, duration: "3:47", key: "Bm", mood: "sensual", vibeTag: "brazilian" },
    { id: "b4", title: "Envolver", artist: "Anitta", genre: "Reggaeton", bpm: 96, duration: "2:44", key: "Cm", mood: "magnetic", vibeTag: "brazilian" },
    { id: "b5", title: "Problema", artist: "Bad Bunny ft. Jhay Cortez", genre: "Latin trap", bpm: 102, duration: "3:18", key: "Gm", mood: "tension", vibeTag: "brazilian" },
  ],
  morning: [
    { id: "mo1", title: "Golden Hour", artist: "JVKE", genre: "Indie pop", bpm: 86, duration: "3:29", key: "Db", mood: "warm", vibeTag: "morning" },
    { id: "mo2", title: "Peach", artist: "Kevin Abstract", genre: "Indie", bpm: 80, duration: "2:58", key: "Eb", mood: "tender", vibeTag: "morning" },
    { id: "mo3", title: "Sunday Best", artist: "Surfaces", genre: "Indie pop", bpm: 90, duration: "3:12", key: "G", mood: "optimistic", vibeTag: "morning" },
    { id: "mo4", title: "Bloom", artist: "The Paper Kites", genre: "Folk", bpm: 72, duration: "3:44", key: "C", mood: "gentle", vibeTag: "morning" },
    { id: "mo5", title: "Banana Pancakes", artist: "Jack Johnson", genre: "Acoustic", bpm: 84, duration: "3:10", key: "A", mood: "cozy", vibeTag: "morning" },
  ],
};

export const getTracksForVibe = (vibeKey: string): Track[] => {
  return trackLibrary[vibeKey] || trackLibrary.afrobeats;
};
