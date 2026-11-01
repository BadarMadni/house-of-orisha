"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { EmberParticles } from "@/components/home/EmberParticles"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  useEffect(() => setMounted(true), [])

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80])

  const orishaLetters = "ORISHA".split("")

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/sango-warrior-rain.png"
          alt="Sàngó warrior in the rain"
          fill
          priority
          className="object-cover object-[70%_2%] lg:object-[60%_2%]"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/30 to-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/60 to-transparent lg:from-obsidian/90 lg:via-obsidian/35" />
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 200px 60px rgba(0,0,0,0.6)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />

      {/* Floating Embers */}
      {mounted && <EmberParticles />}

      {/* Main Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12"
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-8 h-px"
            style={{
              background: "linear-gradient(90deg, rgba(212,175,55,0.9), rgba(212,175,55,0.3), transparent)",
              boxShadow: "0 0 12px rgba(212,175,55,0.4)",
            }}
          />

          {/* Title - HOUSE OF */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="font-[family-name:var(--font-cinzel)] text-5xl font-bold tracking-[0.08em] whitespace-nowrap sm:text-6xl md:text-7xl lg:text-8xl"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.6), 0 0 120px rgba(212,175,55,0.1)" }}
              >
                <span className="text-shimmer">HOUSE OF</span>
              </h1>
            </motion.div>
          </div>

          {/* Title - ORISHA */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="font-[family-name:var(--font-cinzel)] text-5xl font-bold tracking-[0.12em] sm:text-6xl md:text-7xl lg:text-8xl"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.6), 0 0 120px rgba(212,175,55,0.1)" }}
              >
                {orishaLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-shimmer inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + i * 0.08, ease: "easeOut" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1.8, delay: 1.6 }}
              className="h-px"
              style={{
                background: "linear-gradient(90deg, rgba(212,175,55,0.8), rgba(212,175,55,0.4), transparent)",
                boxShadow: "0 0 8px rgba(212,175,55,0.3)",
              }}
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="absolute left-[100px] top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rotate-45 border border-gold/80"
              style={{ boxShadow: "0 0 10px rgba(212,175,55,0.5)" }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mb-12 max-w-lg font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.3em] uppercase text-bone/50 sm:text-xs"
          >
            Where Spirit, Culture, and Creation Become One
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <MagneticButton href="#worlds">Enter The House</MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <motion.p
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-[9px] tracking-[0.4em] uppercase text-gold/40"
        >
          Scroll
        </motion.p>
        <motion.div className="h-12 w-px overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full bg-gradient-to-b from-transparent via-gold/80 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
