"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { CornerFrame } from "@/components/ui/CornerFrame"

interface Orisha {
  name: string
  title: string
  domain: string
  image: string
  description: string
  number: string
}

export function OrishaStickySection({ orishas }: { orishas: Orisha[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * orishas.length), orishas.length - 1)
    setActiveIndex(idx)
  })

  const active = orishas[activeIndex]

  return (
    <div ref={containerRef} className="relative" style={{ height: `${orishas.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-obsidian/80">
        {/* Background image transition */}
        {orishas.map((orisha, i) => (
          <motion.div
            key={orisha.name}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: activeIndex === i ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={orisha.image}
              alt={orisha.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </motion.div>
        ))}

        {/* Overlays */}
        <div className="absolute inset-0 bg-obsidian/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-obsidian/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gold/[0.03] via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-end pb-20 md:items-center md:pb-0">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 items-center md:gap-12">
              {/* Left — Text (stays in place) */}
              <div className="space-y-4 md:space-y-6">
                {/* Progress dots */}
                <div className="flex gap-2 mb-4 md:mb-8">
                  {orishas.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        activeIndex === i ? "w-8 bg-gold" : "w-2 bg-gold/20"
                      }`}
                    />
                  ))}
                </div>

                <motion.div
                  key={`title-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-3 mb-2">
                    <div className="h-px w-8 bg-gold/40" />
                    <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/60">
                      {active.title}
                    </p>
                  </div>

                  <h2
                    className="font-[family-name:var(--font-cinzel)] text-4xl font-bold text-bone sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
                  >
                    {active.name}
                  </h2>

                  <p className="mt-2 text-[9px] tracking-[0.2em] uppercase text-gold/30 sm:mt-3 sm:text-[10px]">
                    {active.domain}
                  </p>

                  <div className="mt-4 h-px w-12 bg-gradient-to-r from-gold/50 to-transparent md:mt-6 md:w-16" />

                  <CornerFrame className="mt-4 max-w-md p-4 bg-obsidian/50 backdrop-blur-sm md:mt-6 md:p-5">
                    <p className="text-xs leading-relaxed text-bone/60 sm:text-sm">
                      {active.description}
                    </p>
                  </CornerFrame>
                </motion.div>

                {/* Number */}
                <p className="font-[family-name:var(--font-cinzel)] text-7xl font-bold text-gold/[0.06] absolute bottom-24 left-5 sm:text-9xl sm:bottom-10 sm:left-6 lg:left-12">
                  {active.number}
                </p>
              </div>

              {/* Right — Image card */}
              <div className="hidden md:flex justify-center">
                <motion.div
                  key={`img-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-80 lg:w-96"
                >
                  <CornerFrame className="relative aspect-[3/4] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
                  </CornerFrame>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        {activeIndex === 0 && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="font-[family-name:var(--font-cinzel)] text-[9px] tracking-[0.3em] uppercase text-gold/30">
              Scroll to explore
            </p>
            <motion.div
              className="h-6 w-px bg-gradient-to-b from-gold/40 to-transparent"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}
