"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface PageHeroProps {
  title: string
  subtitle: string
  image: string
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative flex h-[70vh] min-h-[500px] items-end overflow-hidden pt-20">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 via-transparent to-obsidian/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.3em] uppercase text-gold/70"
        >
          {subtitle}
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 font-[family-name:var(--font-cinzel)] text-5xl font-bold text-bone md:text-7xl"
          >
            {title}
          </motion.h1>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 h-px bg-gradient-to-r from-gold to-transparent"
        />
      </div>
    </section>
  )
}
