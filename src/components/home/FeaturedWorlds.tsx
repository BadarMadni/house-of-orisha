"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { RevealText } from "@/components/ui/RevealText"
import { FadeIn } from "@/components/ui/FadeIn"
import { GoldDivider } from "@/components/ui/GoldDivider"
import { CornerFrame } from "@/components/ui/CornerFrame"

const orishaWorlds = [
  {
    name: "Sàngó",
    title: "The Thunder King",
    image: "/images/characters/sango-warrior-rain.png",
    description: "God of Thunder, Lightning, and Justice",
    number: "I",
  },
  {
    name: "Ògún",
    title: "The God of Iron",
    image: "/images/books/god-of-iron-book-1.jpg",
    description: "Path-Opener, Builder, Warrior of Creation",
    number: "II",
  },
  {
    name: "Ọya",
    title: "The Wind Queen",
    image: "/images/books/god-of-iron-book-2.jpg",
    description: "Goddess of Wind, Change, and Transformation",
    number: "III",
  },
  {
    name: "The Diviner",
    title: "Keeper of Wisdom",
    image: "/images/characters/babalawo-diviner.png",
    description: "Guardian of Ifá, Reader of Destiny",
    number: "IV",
  },
]

export function FeaturedWorlds() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25])

  return (
    <section ref={sectionRef} id="worlds" className="relative py-20 overflow-hidden bg-forest-dark">
      {/* Tribal Background with Parallax */}
      <motion.div className="absolute -inset-[30%]" style={{ y: bgY, scale: bgScale }}>
        <Image
          src="/images/brand/bg-tribal.webp"
          alt=""
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-dark/40" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian/80" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <FadeIn direction="left">
            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
              <div className="h-2 w-2 rotate-45 border border-gold/40" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
            </div>
          </FadeIn>
          <RevealText>
            <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/60">
              The Chambers
            </p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="mt-5 font-[family-name:var(--font-cinzel)] text-4xl font-bold tracking-wide text-bone md:text-5xl lg:text-6xl">
              Worlds of the <span className="text-shimmer">Òrìṣà</span>
            </h2>
          </RevealText>
          <FadeIn delay={0.3} direction="left">
            <p className="mt-6 mx-auto max-w-lg text-sm text-bone/50 leading-relaxed">
              Step into the chambers and meet the forces that shaped worlds,
              commanded storms, and forged civilizations.
            </p>
          </FadeIn>
          <GoldDivider className="mt-10" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {orishaWorlds.map((world, i) => (
            <FadeIn key={world.name} delay={i * 0.12} direction={i % 2 === 0 ? "right" : "left"}>
              <Link href="/orisha" className="group block">
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <CornerFrame className="aspect-[3/4] overflow-hidden">
                    <Image
                      src={world.image}
                      alt={world.name}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                    <div className="absolute top-4 right-4">
                      <span className="font-[family-name:var(--font-cinzel)] text-4xl font-bold text-gold/[0.08] transition-all duration-700 group-hover:text-gold/20">
                        {world.number}
                      </span>
                    </div>

                    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-t from-gold/[0.08] via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-[family-name:var(--font-cinzel)] text-[9px] tracking-[0.35em] uppercase text-gold/60 transition-colors duration-500 group-hover:text-gold/80">
                        {world.title}
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-cinzel)] text-2xl font-bold text-bone transition-colors duration-500 group-hover:text-gold lg:text-3xl">
                        {world.name}
                      </h3>
                      <p className="mt-2 text-sm text-bone/50 transition-colors duration-500 group-hover:text-bone/80">
                        {world.description}
                      </p>
                      <div className="mt-5 h-px w-0 bg-gradient-to-r from-gold/60 to-transparent transition-all duration-700 group-hover:w-full" />
                    </div>
                  </CornerFrame>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
