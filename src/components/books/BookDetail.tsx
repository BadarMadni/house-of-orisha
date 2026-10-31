"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn } from "@/components/ui/FadeIn"
import { CornerFrame } from "@/components/ui/CornerFrame"
import type { Book } from "@/data/books"

export function BookDetail({ book }: { book: Book }) {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20"
    >
      {/* Blurred cover background */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <Image src={book.cover} alt="" fill priority className="object-cover blur-2xl scale-110" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-obsidian/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/[0.04] via-transparent to-transparent" />

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-12">
        {/* Back link */}
        <Link
          href="/books"
          className="mb-10 inline-flex items-center gap-2 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.2em] uppercase text-gold/50 transition-colors hover:text-gold"
        >
          <span className="h-px w-4 bg-gold/30" />
          Back to Library
        </Link>

        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center lg:gap-16">
          {/* Book Cover */}
          <FadeIn>
            <motion.div
              whileHover={{ rotateY: -5, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto w-52 shrink-0 sm:w-60 lg:w-72"
              style={{ perspective: 1200 }}
            >
              <CornerFrame className="relative aspect-[2/3] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                <Image src={book.cover} alt={book.title} fill priority className="object-contain" sizes="300px" />
                <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 to-transparent" />
              </CornerFrame>
            </motion.div>
          </FadeIn>

          {/* All Info + CTA */}
          <FadeIn delay={0.15}>
            <div>
              {book.series && (
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="h-px w-6 bg-gold/40" />
                  <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.35em] uppercase text-gold/60">
                    {book.series} {book.bookNumber && `— ${book.bookNumber}`}
                  </p>
                </div>
              )}
              <h1 className="font-[family-name:var(--font-cinzel)] text-3xl font-bold text-bone md:text-5xl lg:text-6xl">
                {book.title}
              </h1>
              {book.subtitle && (
                <p className="mt-2 font-[family-name:var(--font-cinzel)] text-base text-bone/50 md:text-lg">
                  {book.subtitle}
                </p>
              )}
              {book.tagline && (
                <p className="mt-3 italic text-gold/60 text-sm">&ldquo;{book.tagline}&rdquo;</p>
              )}

              {/* Genre + Author */}
              <div className="mt-5 flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-gold/40 to-transparent" />
                <p className="text-xs tracking-wider text-bone/40">{book.genre} &middot; {book.author}</p>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/55 md:text-base">
                {book.shortDescription}
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                {book.amazonLink !== "#" && (
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden border border-gold bg-gold px-10 py-4 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.25em] uppercase text-obsidian font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
                  >
                    Buy on Amazon
                  </a>
                )}
                {book.luluLink && (
                  <a
                    href={book.luluLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden border border-gold/30 px-10 py-4 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.25em] uppercase text-gold transition-all duration-500 hover:border-gold hover:bg-gold hover:text-obsidian"
                  >
                    Lulu Paperback
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom — Explore More */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/15" />
          <Link href="/books" className="group inline-flex items-center gap-3 shrink-0">
            <span className="h-px w-6 bg-gold/20 transition-all duration-500 group-hover:w-10 group-hover:bg-gold/40" />
            <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.25em] uppercase text-gold/50 transition-colors group-hover:text-gold">
              Explore More Books
            </span>
            <span className="h-px w-6 bg-gold/20 transition-all duration-500 group-hover:w-10 group-hover:bg-gold/40" />
          </Link>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/15" />
        </div>
      </motion.div>
    </section>
  )
}
