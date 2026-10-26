"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { PageHero } from "@/components/ui/PageHero"
import { FadeIn } from "@/components/ui/FadeIn"
import { GoldDivider } from "@/components/ui/GoldDivider"

const films = [
  {
    title: "SÀNGÓ: The Thunder-King Chronicles",
    description:
      "An epic historical fantasy screenplay inspired by the extraordinary life, history, and mythology of one of Africa's most legendary figures. Selected and awarded at international film festivals.",
    poster: "/images/books/sango-poster-awards.png",
    video: "/videos/thunder-king-clip.mp4",
    awards: [
      {
        name: "World Class Film Awards",
        achievement: "Winner — Best Feature Screenplay",
        image: "/images/awards/world-class-film-laurel.jpg",
      },
      {
        name: "Rohip International Film Festival",
        achievement: "Winner — Best Feature Script / Screenplay",
        image: "/images/awards/rohip-sango-certificate.png",
      },
      {
        name: "Indie Gathering International Film Festival",
        achievement: "Semi-Finalist",
        image: "/images/awards/indie-gathering-certificate.png",
      },
    ],
  },
  {
    title: "Blood Money",
    description:
      "A gripping corporate crime thriller adapted from the bestselling novel. One family. Two worlds. A secret worth billions.",
    poster: "/images/books/blood-money.png",
    video: "/videos/blood-money-clip.mp4",
    awards: [],
  },
]

export default function FilmsPage() {
  return (
    <>
      <PageHero
        title="The Screen"
        subtitle="Film & Television"
        image="/images/scenes/village-burning.png"
      />

      <section className="bg-obsidian py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-32">
          {films.map((film, i) => (
            <div key={film.title} className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <FadeIn className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="relative aspect-video overflow-hidden gold-glow">
                  <video
                    className="h-full w-full object-cover"
                    poster={film.poster}
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={film.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 pointer-events-none border border-gold/10" />
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="font-[family-name:var(--font-cinzel)] text-3xl font-bold text-bone md:text-4xl">
                  {film.title}
                </h2>
                <GoldDivider className="my-6" width="60px" />
                <p className="leading-relaxed text-bone/50">{film.description}</p>

                {film.awards.length > 0 && (
                  <div className="mt-8 space-y-4">
                    <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.3em] uppercase text-gold/50">
                      Awards & Recognition
                    </p>
                    {film.awards.map((award) => (
                      <motion.div
                        key={award.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                      >
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm">
                          <Image
                            src={award.image}
                            alt={award.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <p className="font-[family-name:var(--font-cinzel)] text-sm font-bold text-gold">
                            {award.name}
                          </p>
                          <p className="text-xs text-bone/50">{award.achievement}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </FadeIn>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
