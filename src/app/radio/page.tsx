"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn } from "@/components/ui/FadeIn"
import { GoldDivider } from "@/components/ui/GoldDivider"
import { RadioPlayer } from "@/components/radio/RadioPlayer"

export default function RadioPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <>
      {/* Parallax Hero */}
      <section ref={heroRef} className="relative flex h-[55vh] min-h-[400px] items-end overflow-hidden pt-20 md:h-[70vh] md:min-h-[500px]">
        <motion.div className="absolute inset-0" style={{ y: heroImgY, scale: heroScale }}>
          <Image
            src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/griot-drummer.png"
            alt="Griot drummer performing"
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

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-12">
          <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 1, delay: 0.2 }} className="mb-6 h-px bg-gradient-to-r from-gold to-transparent" />
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/70"
          >
            Live Broadcasting
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-4 font-[family-name:var(--font-cinzel)] text-5xl font-bold tracking-[0.08em] text-bone md:text-7xl lg:text-8xl"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
            >
              <span className="text-shimmer">HOOR Radio</span>
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 max-w-md font-[family-name:var(--font-cinzel)] text-sm tracking-[0.15em] text-bone/50 sm:text-base"
          >
            Your Music. Your Stories. Your World.
          </motion.p>
        </motion.div>
      </section>

      {/* Player Section */}
      <section className="relative bg-obsidian/80 py-14 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/[0.03] via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-2xl px-5 sm:px-6 lg:px-12">
          <FadeIn direction="up">
            <RadioPlayer />
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.2} direction="up">
            <div className="mt-12 text-center">
              <GoldDivider className="mb-8" />
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-bone/50">
                HOOR RADIO is the official internet radio station of House of Orisha.
                Listen live while you explore our books, films, music, and the
                world of the Òrìṣà.
              </p>
            </div>
          </FadeIn>

          {/* Features */}
          <FadeIn delay={0.3} direction="up">
            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
              {[
                { icon: "M9 18V5l12-2v13", label: "Original Music" },
                { icon: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z", label: "Live Shows" },
                { icon: "M3 18v-6a9 9 0 0 1 18 0v6", label: "24/7 Stream" },
              ].map((item) => (
                <div key={item.label} className="border border-gold/10 bg-obsidian/40 p-4 backdrop-blur-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto text-gold/50">
                    <path d={item.icon} />
                  </svg>
                  <p className="mt-2 text-[10px] tracking-[0.15em] uppercase text-bone/40">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
