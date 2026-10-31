"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { CornerFrame } from "@/components/ui/CornerFrame"
import { OrishaStickySection } from "@/components/orisha/OrishaStickySection"

const orishas = [
  {
    name: "Sàngó",
    title: "The Thunder King",
    domain: "Thunder, Lightning, Justice, Kingship",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/sango-warrior-rain.png",
    description:
      "Born of lightning into the royal house of Ọ̀yọ́. A warrior prince whose power commands the storm itself. His legend would outlive an empire.",
    number: "I",
  },
  {
    name: "Ògún",
    title: "The God of Iron",
    domain: "Iron, War, Creation, Path-Opening",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/books/god-of-iron-book-1.jpg",
    description:
      "Path-opener, builder, warrior of creation. He walks into wilderness and raises civilization. Iron is his language, the forge his temple.",
    number: "II",
  },
  {
    name: "Ọya",
    title: "The Wind Queen",
    domain: "Wind, Change, Storms, Transformation",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/books/god-of-iron-book-2.jpg",
    description:
      "Fierce, untamed, carrying a wind that refuses to belong to anyone. She challenges the storm and carves her own path through destiny.",
    number: "III",
  },
  {
    name: "The Diviner",
    title: "Keeper of Ifá",
    domain: "Wisdom, Prophecy, Destiny",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/babalawo-diviner.png",
    description:
      "Guardian of Ifá, reader of destiny, keeper of the wisdom that holds the world in balance. He sees the patterns others cannot.",
    number: "IV",
  },
  {
    name: "Kangiba",
    title: "Walker of the Forest Roads",
    domain: "Survival, Memory, Resistance",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/books/kangiba-bleeding-earth.png",
    description:
      "The boy who survived Mamgadi, walked to the edge of the world, broke chains beneath the moon, and became the watcher who remembered.",
    number: "V",
  },
]

export default function OrishaPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative flex h-[65vh] min-h-[450px] items-end overflow-hidden pt-20 md:h-[80vh] md:min-h-[550px]">
        <motion.div className="absolute inset-0" style={{ y: heroImgY, scale: heroScale }}>
          <Image
            src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/sango-mountain-lightning.png"
            alt="Sàngó commands lightning atop the mountain"
            fill
            priority
            className="object-cover object-[50%_30%]"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/60" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian/80 to-transparent" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-12">
          <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 1, delay: 0.2 }} className="mb-6 h-px bg-gradient-to-r from-gold to-transparent" />
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/70"
          >
            Worlds of the Òrìṣà
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-4 font-[family-name:var(--font-cinzel)] text-5xl font-bold tracking-[0.08em] text-bone md:text-7xl lg:text-8xl"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
            >
              The <span className="text-shimmer">Chambers</span>
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 max-w-lg font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.25em] uppercase text-bone/50"
          >
            Step into the chambers and meet the forces that shaped worlds, commanded storms, and forged civilizations
          </motion.p>
        </motion.div>
      </section>

      {/* Sticky Scroll Characters Section */}
      <OrishaStickySection orishas={orishas} />
    </>
  )
}
