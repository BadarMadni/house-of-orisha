"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { RevealText } from "@/components/ui/RevealText"
import { FadeIn } from "@/components/ui/FadeIn"
import { GoldDivider } from "@/components/ui/GoldDivider"
import { CornerFrame } from "@/components/ui/CornerFrame"

const awards = [
  {
    name: "World Class Film Awards",
    achievement: "Winner — Best Feature Screenplay",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/awards/world-class-film-laurel.jpg",
  },
  {
    name: "Rohip International Film Festival",
    achievement: "Winner — Best Feature Script / Screenplay",
    image: "https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/awards/rohip-sango-certificate.png",
  },
]

export function FilmSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#110A0A]">
      {/* Dark crimson tinted background */}
      <div className="absolute inset-0">
        <Image
          src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/scenes/village-burning.png"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#110A0A]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-crimson/[0.04] via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <FadeIn direction="left">
            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-crimson/30" />
              <div className="h-2 w-2 rotate-45 border border-gold/40" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-crimson/30" />
            </div>
          </FadeIn>
          <RevealText>
            <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/60">
              The Screen
            </p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="mt-5 font-[family-name:var(--font-cinzel)] text-4xl font-bold tracking-wide text-bone md:text-5xl lg:text-6xl">
              Film & <span className="text-shimmer">Television</span>
            </h2>
          </RevealText>
          <FadeIn delay={0.3} direction="left">
            <p className="mt-6 mx-auto max-w-lg text-sm text-bone/50 leading-relaxed">
              Award-winning screenwriting bringing Yoruba mythology to the screen.
            </p>
          </FadeIn>
          <GoldDivider className="mt-10" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="left">
            <CornerFrame className="aspect-video overflow-hidden bg-obsidian">
              <video
                className="h-full w-full object-cover"
                poster="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/books/sango-poster-awards.png"
                controls
                preload="metadata"
                playsInline
              >
                <source src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/videos/thunder-king-clip.mp4" type="video/mp4" />
              </video>
            </CornerFrame>
            <div className="mt-4 flex items-center gap-3 justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/15" />
              <p className="text-[9px] tracking-[0.3em] uppercase text-gold/40">Preview</p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/15" />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-6">
              <div>
                <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.35em] uppercase text-gold/60">
                  Award-Winning Screenplay
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-cinzel)] text-3xl font-bold text-bone md:text-4xl">
                  SÀNGÓ
                </h3>
                <p className="mt-1 font-[family-name:var(--font-cinzel)] text-sm text-bone/60">
                  The Thunder-King Chronicles
                </p>
              </div>

              <div className="h-px w-16 bg-gradient-to-r from-gold/50 to-transparent" />

              <p className="leading-relaxed text-bone/50">
                An epic historical fantasy screenplay inspired by the extraordinary
                life, history, and mythology of one of Africa&apos;s most legendary
                figures. Selected and awarded at international film festivals.
              </p>

              <div className="mt-8 space-y-4">
                <p className="font-[family-name:var(--font-cinzel)] text-[9px] tracking-[0.3em] uppercase text-gold/50">
                  Awards & Recognition
                </p>
                {awards.map((award, i) => (
                  <motion.div
                    key={award.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                    className="group flex items-center gap-4 border border-gold/[0.08] bg-black/30 p-4 transition-all duration-500 hover:border-gold/20"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden">
                      <Image
                        src={award.image}
                        alt={award.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                      <div className="absolute inset-0 border border-gold/10" />
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-cinzel)] text-xs font-bold text-gold">
                        {award.name}
                      </p>
                      <p className="mt-0.5 text-[11px] text-bone/50">{award.achievement}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
