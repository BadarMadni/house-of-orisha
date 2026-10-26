"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { FeaturedWorlds } from "@/components/home/FeaturedWorlds"
import { FeaturedBooks } from "@/components/home/FeaturedBooks"
import { FilmSection } from "@/components/home/FilmSection"
import { MusicSection } from "@/components/home/MusicSection"
import { NewsletterSection } from "@/components/home/NewsletterSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWorlds />
      <FeaturedBooks />
      <FilmSection />
      <MusicSection />
      <NewsletterSection />
    </>
  )
}
