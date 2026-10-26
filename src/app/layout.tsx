import type { Metadata } from "next"
import { Inter, Cinzel } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SmoothScroll } from "@/components/providers/SmoothScroll"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "House of Orisha | Where Spirit, Culture, and Creation Become One",
  description:
    "The creative universe of Oriyomi Ismail — Books, Music, Film & Television rooted in Yoruba mythology and African storytelling.",
  keywords: [
    "House of Orisha", "Oriyomi Ismail", "Yoruba mythology",
    "African literature", "Sàngó", "Ògún", "Ọya",
  ],
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="min-h-screen antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
