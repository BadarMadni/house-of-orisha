export interface Track {
  slug: string
  title: string
  category: string
  relatedProject?: string
  audioSrc?: string
  duration?: string
}

export const tracks: Track[] = [
  {
    slug: "blood-money",
    title: "Blood Money",
    category: "Book / Film Soundtrack",
    relatedProject: "Blood Money — Book & Film Adaptation",
  },
  {
    slug: "echoes-from-the-heart",
    title: "Echoes from the Heart",
    category: "Book / Story-Inspired Music",
    relatedProject: "The Bleeding Earth: Echoes from the Heart of Africa",
  },
  {
    slug: "house-of-orisha",
    title: "House of Orisha (Ilé Orisha)",
    category: "Book Series Music",
    relatedProject: "House of Orisha — Book Series",
    audioSrc: "/music/house-of-orisha.mp3",
  },
  {
    slug: "iwo-ni-mo-fe",
    title: "Iwo Ni Mo Fe (Forever Starts Today)",
    category: "Original Music / Wedding Song",
    relatedProject: "House of Orisha — Independent Music",
  },
  {
    slug: "call-of-thunder-king",
    title: "The Call of Thunder King",
    category: "Book / Story-Inspired Music",
    relatedProject: "SÀNGÓ: The Thunder-King Chronicles",
    audioSrc: "/music/call-of-thunder-king.mp3",
  },
  {
    slug: "we-still-remember-you",
    title: "We Still Remember You",
    category: "Book / Story-Inspired Music",
    relatedProject: "The God of Iron and the Wind Queen",
    audioSrc: "/music/we-still-remember-you.mp3",
  },
  {
    slug: "where-fire-still-calls",
    title: "Where the Fire Still Calls",
    category: "Book / Story-Inspired Music",
    relatedProject: "Where the Fire Still Calls",
  },
]
