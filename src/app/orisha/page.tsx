"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { PageHero } from "@/components/ui/PageHero"
import { FadeIn } from "@/components/ui/FadeIn"
import { GoldDivider } from "@/components/ui/GoldDivider"

const orishas = [
  {
    name: "Sàngó",
    title: "The Thunder King",
    domain: "Thunder, Lightning, Justice, Kingship",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/sango-warrior-rain.png",
    description:
      "Born of lightning into the royal house of Ọ̀yọ́. A warrior prince whose power commands the storm itself. His legend would outlive an empire.",
  },
  {
    name: "Ògún",
    title: "The God of Iron",
    domain: "Iron, War, Creation, Path-Opening",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/books/god-of-iron-book-1.jpg",
    description:
      "Path-opener, builder, warrior of creation. He walks into wilderness and raises civilization. Iron is his language, the forge his temple.",
  },
  {
    name: "Ọya",
    title: "The Wind Queen",
    domain: "Wind, Change, Storms, Transformation",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/books/god-of-iron-book-2.jpg",
    description:
      "Fierce, untamed, carrying a wind that refuses to belong to anyone. She challenges the storm and carves her own path through destiny.",
  },
  {
    name: "The Diviner",
    title: "Keeper of Ifá",
    domain: "Wisdom, Prophecy, Destiny",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/babalawo-diviner.png",
    description:
      "Guardian of Ifá, reader of destiny, keeper of the wisdom that holds the world in balance. He sees the patterns others cannot.",
  },
  {
    name: "Kangiba",
    title: "Walker of the Forest Roads",
    domain: "Survival, Memory, Resistance",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/books/kangiba-bleeding-earth.png",
    description:
      "The boy who survived Mamgadi, walked to the edge of the world, broke chains beneath the moon, and became the watcher who remembered.",
  },
]

export default function OrishaPage() {
  return (
    <>
      <PageHero
        title="The Chambers"
        subtitle="Worlds of the Òrìṣà"
        image="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/sango-mountain-lightning.png"
      />

      <section className="bg-obsidian py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn className="mb-16 text-center">
            <p className="mx-auto max-w-2xl text-bone/40 leading-relaxed">
              Step into the chambers and meet the forces that shaped worlds,
              commanded storms, and forged civilizations.
            </p>
          </FadeIn>

          <GoldDivider className="mb-20" />

          <div className="space-y-32">
            {orishas.map((orisha, i) => (
              <FadeIn key={orisha.name} delay={0.1}>
                <div
                  className={`grid gap-10 md:grid-cols-2 md:items-center lg:gap-16 ${
                    i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                    className="group relative aspect-[3/4] overflow-hidden"
                  >
                    <Image
                      src={orisha.image}
                      alt={orisha.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 border border-gold/0 transition-all duration-700 group-hover:border-gold/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
                  </motion.div>

                  <div className="space-y-4 px-2 md:px-6">
                    <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.35em] uppercase text-gold/50">
                      {orisha.title}
                    </p>
                    <h2 className="font-[family-name:var(--font-cinzel)] text-5xl font-bold text-bone md:text-6xl lg:text-7xl">
                      {orisha.name}
                    </h2>
                    <p className="text-xs tracking-[0.15em] text-gold/30">{orisha.domain}</p>
                    <div className="h-px w-16 bg-gradient-to-r from-gold/50 to-transparent" />
                    <p className="max-w-md pt-2 text-base leading-relaxed text-bone/50">
                      {orisha.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
