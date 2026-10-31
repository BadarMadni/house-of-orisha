"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { CornerFrame } from "@/components/ui/CornerFrame"
import { FadeIn } from "@/components/ui/FadeIn"

const opportunities = [
  {
    title: "Film & Television",
    icon: "🎬",
    description:
      "Licensing opportunities for screen adaptations of House of Orisha books and original stories.",
  },
  {
    title: "Publishing",
    icon: "📖",
    description:
      "Translation rights, international publishing partnerships, and co-publishing opportunities.",
  },
  {
    title: "Music Licensing",
    icon: "🎵",
    description:
      "Original House of Orisha music for film, television, advertising, and media projects.",
  },
  {
    title: "Merchandise & Brand",
    icon: "✦",
    description:
      "Clothing, collectibles, art prints, and branded merchandise partnerships.",
  },
  {
    title: "Educational",
    icon: "📜",
    description:
      "Academic and educational licensing for Yoruba mythology and African history content.",
  },
  {
    title: "Events & Experiences",
    icon: "⚡",
    description:
      "Live events, exhibitions, and immersive cultural experience collaborations.",
  },
]

export default function LicensingPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <>
      {/* Parallax Hero */}
      <section ref={heroRef} className="relative flex h-[65vh] min-h-[450px] items-end overflow-hidden pt-20 md:h-[80vh] md:min-h-[550px]">
        <motion.div className="absolute inset-0" style={{ y: heroImgY, scale: heroScale }}>
          <Image
            src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/scenes/village-celebration.png"
            alt="Village celebration"
            fill
            priority
            className="object-cover object-[50%_30%]"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-obsidian/60" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-12">
          <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 1, delay: 0.2 }} className="mb-6 h-px bg-gradient-to-r from-gold to-transparent" />
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/70"
          >
            Licensing & Collaborations
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-4 font-[family-name:var(--font-cinzel)] text-5xl font-bold tracking-[0.08em] text-bone md:text-7xl lg:text-8xl"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
            >
              <span className="text-shimmer">Partnerships</span>
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 max-w-lg font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.25em] uppercase text-bone/50"
          >
            Amplifying African storytelling across all media and platforms
          </motion.p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="relative bg-obsidian/80 py-14 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/[0.03] via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <FadeIn>
            <CornerFrame className="mx-auto max-w-2xl p-5 bg-obsidian/50 backdrop-blur-sm text-center md:p-8">
              <p className="text-sm leading-relaxed text-bone/60 md:text-base" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                House of Orisha welcomes meaningful partnerships that amplify African
                storytelling, Yoruba cultural heritage, and the creative universe across
                all media and platforms.
              </p>
            </CornerFrame>
          </FadeIn>

          {/* Divider */}
          <div className="my-12 flex items-center justify-center gap-4 md:my-16">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
            <div className="h-1.5 w-1.5 rotate-45 border border-gold/40" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
          </div>

          {/* Opportunities Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {opportunities.map((opp, i) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="group relative h-full border border-gold/[0.08] bg-obsidian/40 p-6 backdrop-blur-md transition-all duration-500 hover:border-gold/25 hover:bg-gold/[0.04] md:p-8">
                  <span className="text-2xl">{opp.icon}</span>

                  <h3 className="mt-4 font-[family-name:var(--font-cinzel)] text-base font-bold text-bone transition-colors group-hover:text-gold md:text-lg"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
                  >
                    {opp.title}
                  </h3>

                  <div className="my-4 h-px w-8 bg-gold/20 transition-all duration-500 group-hover:w-14 group-hover:bg-gold/40" />

                  <p className="text-xs leading-relaxed text-bone/40 sm:text-sm">{opp.description}</p>

                  {/* Corner accents */}
                  <div className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t border-l border-gold/10 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:border-gold/30" />
                  <div className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-gold/10 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:border-gold/30" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <FadeIn className="mt-14 text-center md:mt-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/30" />
              <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.3em] uppercase text-gold/50">
                Get in Touch
              </p>
              <div className="h-px w-8 bg-gold/30" />
            </div>
            <p className="text-sm text-bone/40 md:text-base" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              For all partnership inquiries, contact us at{" "}
              <a href="mailto:info@houseoforisha.com" className="text-gold transition-colors hover:text-gold-light">
                info@houseoforisha.com
              </a>
            </p>
          </FadeIn>

          {/* Bottom ornament */}
          <div className="mt-12 flex flex-col items-center gap-3 md:mt-16">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          </div>
        </div>
      </section>
    </>
  )
}
