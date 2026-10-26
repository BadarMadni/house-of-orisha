"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export function BooksHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -50])

  return (
    <section
      ref={ref}
      className="relative flex h-[75vh] min-h-[500px] items-end overflow-hidden pt-20"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="/images/characters/warrior-kneeling-ruins.png"
          alt="A warrior kneels among ancient ruins"
          fill
          priority
          className="object-cover object-[50%_30%]"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-obsidian/70" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0D0D0D] to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-12"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 h-px bg-gradient-to-r from-gold to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/70"
        >
          Books & Stories
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 font-[family-name:var(--font-cinzel)] text-5xl font-bold tracking-[0.08em] text-bone md:text-7xl lg:text-8xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
          >
            The <span className="text-shimmer">Library</span>
          </motion.h1>
        </div>

        {/* Divider with diamond */}
        <div className="relative my-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-px bg-gradient-to-r from-gold via-gold/50 to-transparent"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="absolute left-[80px] top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rotate-45 border border-gold/60"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-md font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.25em] uppercase text-bone/60 sm:text-xs"
        >
          Every story carries a world within it
        </motion.p>
      </motion.div>
    </section>
  )
}
