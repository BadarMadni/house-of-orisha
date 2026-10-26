"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect, useState, useCallback } from "react"
import { MagneticButton } from "@/components/ui/MagneticButton"

// Floating ember particle
function Ember({ delay, duration, left, size }: { delay: number; duration: number; left: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left,
        bottom: "-5%",
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(212,175,55,0.9) 0%, rgba(212,175,55,0.3) 50%, transparent 70%)`,
        boxShadow: `0 0 ${size * 2}px rgba(212,175,55,0.4)`,
      }}
      animate={{
        y: [0, -window?.innerHeight * 1.2 || -1200],
        x: [0, Math.random() * 80 - 40, Math.random() * 60 - 30],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 0.8, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  )
}

// Generate ember configs once
const EMBERS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 6,
  left: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 4,
}))

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

  // Staggered letter animation for "ORISHA"
  const orishaLetters = "ORISHA".split("")

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Parallax Background - NEW IMAGE */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="/images/characters/sango-warrior-rain.png"
          alt="Sàngó warrior in the rain"
          fill
          priority
          className="object-cover object-[70%_2%] lg:object-[60%_2%]"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Film grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/30 to-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/60 to-transparent lg:from-obsidian/90 lg:via-obsidian/35" />
      {/* Vignette edges */}
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 200px 60px rgba(0,0,0,0.6)" }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />

      {/* Ambient golden glow behind title area */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[35%] h-[300px] w-[400px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)" }}
      />

      {/* Floating Embers */}
      {mounted && (
        <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden">
          {EMBERS.map((ember) => (
            <Ember key={ember.id} {...ember} />
          ))}
        </div>
      )}

      {/* Main Content - Left aligned */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12"
      >
        <div className="max-w-2xl">
          {/* Decorative accent - animated line with glow */}
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

          {/* Title - ORISHA with staggered letters */}
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

          {/* Divider with diamond and glow */}
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

      {/* Scroll Indicator - Bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
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
