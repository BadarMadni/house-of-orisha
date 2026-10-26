import { R2_BASE } from "@/lib/constants"

export interface Book {
  slug: string
  title: string
  subtitle?: string
  tagline?: string
  series?: string
  bookNumber?: string
  author: string
  genre: string
  cover: string
  amazonLink: string
  luluLink?: string
  shortDescription: string
  featured?: boolean
}

export const books: Book[] = [
  {
    slug: "house-of-orisha-book-one",
    title: "House of Orisha",
    subtitle: "Book One — The Fracture",
    series: "House of Orisha Series",
    bookNumber: "Book One",
    author: "Oriyomi Ismail",
    genre: "Contemporary Mythological Fantasy",
    cover: `${R2_BASE}/images/books/house-of-orisha-book-1.jpeg`,
    amazonLink: "https://www.amazon.com/dp/B0H7QX64H4",
    shortDescription:
      "Something is quietly dismantling the world, removing memory, connection, and the forces that hold reality together. The scattered Orishas must reunite, confront old fractures, and face an enemy that has already studied how each of them can be broken.",
    featured: true,
  },
  {
    slug: "sango-thunder-king-chronicles",
    title: "SÀNGÓ: The Thunder-King Chronicles",
    tagline: "When Fire Courts the Wind, the Heavens Must Choose a Side",
    series: "House of Orisha Series",
    bookNumber: "Book 1",
    author: "Oriyomi Ismail",
    genre: "Epic Historical Fantasy",
    cover: `${R2_BASE}/images/books/sango-poster-awards.png`,
    amazonLink: "https://www.amazon.com/dp/B0FTF85VLW",
    luluLink: "https://www.lulu.com",
    shortDescription:
      "In the heart of the ancient Oyo Empire, a warrior prince rises with the power of thunder in his blood. A sweeping story of power, love, destiny, consequence, and the man whose legend would outlive an empire.",
    featured: true,
  },
  {
    slug: "blood-money",
    title: "Blood Money",
    tagline: "One Man. Two Worlds. One Secret.",
    author: "Oriyomi Ismail",
    genre: "Corporate Crime Thriller",
    cover: `${R2_BASE}/images/books/blood-money.png`,
    amazonLink: "https://www.amazon.com/dp/B0GXZDTGGS",
    shortDescription:
      "Some fathers leave letters. Some leave money. Richard Blackwood left both — and a secret that changes everything. A gripping saga of wealth, betrayal, and an empire worth billions.",
    featured: true,
  },
  {
    slug: "bleeding-earth",
    title: "The Bleeding Earth",
    subtitle: "Echoes from the Heart of Africa",
    author: "Oriyomi Ismail",
    genre: "Historical Fiction",
    cover: `${R2_BASE}/images/books/kangiba-bleeding-earth.png`,
    amazonLink: "https://www.amazon.com/dp/B0GSP275LZ",
    shortDescription:
      "In 1743, ten-year-old Kangiba's world is shattered when raiders descend on his village. A historical epic of survival, resistance, memory, and a land that refuses to forget its people.",
  },
  {
    slug: "fall-of-oyo-empire",
    title: "The Fall of the Oyo Empire",
    subtitle: "Afonja, Alimi, and the War That Ended Oyo",
    author: "Oriyomi Ismail",
    genre: "Historical Epic",
    cover: `${R2_BASE}/images/books/fall-of-oyo-empire.jpg`,
    amazonLink: "https://www.amazon.com/dp/B0GY4FLK3X",
    shortDescription:
      "At the height of its power, the Oyo Empire appears unshakable. But beneath the drums, markets, and authority of the throne, fractures are already forming.",
  },
  {
    slug: "god-of-iron-wind-queen",
    title: "The God of Iron and the Wind Queen",
    subtitle: "An Epic of Ogun and Oya — Book I: The First Path",
    series: "God of Iron Trilogy",
    bookNumber: "Book I",
    author: "Oriyomi Ismail",
    genre: "Mythological Fiction",
    cover: `${R2_BASE}/images/books/god-of-iron-book-1.jpg`,
    amazonLink: "https://www.amazon.com/dp/B0GXQNLXLK",
    shortDescription:
      "Before iron became law and before wind learned its own name, two destinies were already moving toward each other. A sweeping Yoruba epic of iron and storm, creation and sacrifice.",
    featured: true,
  },
  {
    slug: "where-fire-still-calls",
    title: "Where the Fire Still Calls",
    subtitle: "A Story of Survival and Memory",
    tagline: "What was lost still calls",
    author: "Oriyomi Ismail",
    genre: "Historical Drama",
    cover: `${R2_BASE}/images/books/fall-of-oyo-alt.jpeg`,
    amazonLink: "https://www.amazon.com/dp/B0GZGDYVF7",
    shortDescription:
      "In Maré City, a young man watches violence creep closer to his family. As survival demands choices he never expected, Ayo must discover what it means to stand, protect, and remember.",
  },
  {
    slug: "broken-oaths",
    title: "The Broken Oaths",
    subtitle: "Book One: The Pin",
    tagline: "Loyalty Lives Longer Than Truth",
    author: "Oriyomi Ismail",
    genre: "Crime Thriller",
    cover: `${R2_BASE}/images/books/the-broken-oaths.png`,
    amazonLink: "#",
    shortDescription:
      "Three families. One promise. Two cities. A generation of consequences. Loyalty lives longer than truth.",
  },
  {
    slug: "house-of-orisha-book-three",
    title: "House of Orisha",
    subtitle: "Book Three — The Origin",
    series: "House of Orisha Series",
    bookNumber: "Book Three",
    author: "Oriyomi Ismail",
    genre: "Contemporary Mythological Fantasy",
    cover: `${R2_BASE}/images/books/house-of-orisha-book-3-the-origin.png`,
    amazonLink: "#",
    shortDescription:
      "The origin of the Orishas revealed. The third chapter in the House of Orisha saga continues the epic journey.",
  },
  {
    slug: "what-i-will-not-accept-again",
    title: "What I Will Not Accept Again",
    subtitle: "20 Standards I Live By",
    author: "Oriyomi Ismail",
    genre: "Non-Fiction / Self-Development",
    cover: `${R2_BASE}/images/books/what-i-will-not-accept-again.png`,
    amazonLink: "#",
    shortDescription:
      "This is not a book about motivation. It is about clarity. A direct, no-nonsense guide to recognizing what drains you and no longer belongs in your life.",
  },
]
