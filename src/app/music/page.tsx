"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { CornerFrame } from "@/components/ui/CornerFrame"
import { MusicTrackList } from "@/components/music/MusicTrackList"

export default function MusicPage() {
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
            src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/griot-drummer.png"
            alt="The Griot — keeper of sound and story"
            fill
            priority
            className="object-cover object-[50%_20%]"
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
            Original Music
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-4 font-[family-name:var(--font-cinzel)] text-5xl font-bold tracking-[0.08em] text-bone md:text-7xl lg:text-8xl"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
            >
              The <span className="text-shimmer">Sound</span>
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 max-w-lg font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.25em] uppercase text-bone/50"
          >
            Every story has a rhythm. Every world has a voice.
          </motion.p>
        </motion.div>
      </section>

      {/* Tracks Section */}
      <section className="relative bg-obsidian/80 py-14 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/[0.03] via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center md:mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/40" />
              <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/60">
                The Collection
              </p>
              <div className="h-px w-8 bg-gold/40" />
            </div>

            <CornerFrame className="mx-auto max-w-2xl p-6 bg-obsidian/50 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-bone/60" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                Original House of Orisha music — created for specific books, film
                adaptations, and as independent releases. Each track carries a story.
              </p>
            </CornerFrame>
          </motion.div>

          <MusicTrackList />

          {/* Bottom ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-center gap-3"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <p className="font-[family-name:var(--font-cinzel)] text-[9px] tracking-[0.3em] uppercase text-gold/25">
              More tracks coming soon
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
