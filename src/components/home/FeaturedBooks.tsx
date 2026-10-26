"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { RevealText } from "@/components/ui/RevealText"
import { FadeIn } from "@/components/ui/FadeIn"
import { CornerFrame } from "@/components/ui/CornerFrame"
import { books } from "@/data/books"

export function FeaturedBooks() {
  const featured = books.filter((b) => b.featured)
  const hero = featured[0]
  const rest = featured.slice(1)

  return (
    <section className="relative py-20 overflow-hidden bg-[#0D0D0D]">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/[0.02] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <FadeIn direction="right">
            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
              <div className="h-2 w-2 rotate-45 border border-gold/40 bg-gold/10" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
            </div>
          </FadeIn>
          <RevealText>
            <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/60">
              The Library
            </p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="mt-5 font-[family-name:var(--font-cinzel)] text-4xl font-bold tracking-wide text-bone md:text-5xl lg:text-6xl">
              Featured <span className="text-shimmer">Stories</span>
            </h2>
          </RevealText>
          <FadeIn delay={0.3} direction="right">
            <p className="mt-6 mx-auto max-w-lg text-sm text-bone/50 leading-relaxed">
              Every story carries a world. Explore the books, myths, and histories
              of the House of Orisha universe.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} direction="right">
            <div className="mt-10 flex items-center justify-center gap-2">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/30" />
              <div className="flex gap-1">
                <div className="h-1 w-1 rotate-45 bg-gold/30" />
                <div className="h-1.5 w-1.5 rotate-45 bg-gold/50" />
                <div className="h-1 w-1 rotate-45 bg-gold/30" />
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/30" />
            </div>
          </FadeIn>
        </div>

        {/* Hero Book */}
        {hero && (
          <FadeIn className="mb-24" direction="left">
            <Link href={`/books/${hero.slug}`} className="group block">
              <div className="relative grid gap-12 md:grid-cols-[auto_1fr] md:items-center lg:gap-20">
                <motion.div
                  whileHover={{ rotateY: -8, scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                  className="relative mx-auto w-64 shrink-0 sm:w-72 lg:w-80"
                  style={{ perspective: 1200 }}
                >
                  <div className="absolute -inset-8 bg-gradient-to-br from-forest/20 via-gold/10 to-forest/20 blur-3xl rounded-full opacity-40 transition-opacity duration-700 group-hover:opacity-70" />
                  <CornerFrame className="relative aspect-[2/3] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                    <Image
                      src={hero.cover}
                      alt={hero.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="320px"
                    />
                    <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/50 to-transparent" />
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-t from-gold/15 via-transparent to-transparent" />
                  </CornerFrame>
                </motion.div>

                <div className="text-center md:text-left">
                  {hero.series && (
                    <div className="inline-flex items-center gap-3 mb-3">
                      <div className="h-px w-6 bg-gold/40" />
                      <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.35em] uppercase text-gold/60">
                        {hero.series}
                      </p>
                    </div>
                  )}
                  <h3 className="font-[family-name:var(--font-cinzel)] text-3xl font-bold text-bone transition-colors duration-500 group-hover:text-gold md:text-4xl lg:text-5xl">
                    {hero.title}
                  </h3>
                  {hero.subtitle && (
                    <p className="mt-2 font-[family-name:var(--font-cinzel)] text-base text-bone/60">
                      {hero.subtitle}
                    </p>
                  )}
                  <div className="mt-6 h-px w-24 bg-gradient-to-r from-gold/50 to-transparent mx-auto md:mx-0" />
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/50 mx-auto md:mx-0">
                    {hero.shortDescription}
                  </p>
                  <p className="mt-3 text-[10px] tracking-[0.2em] uppercase text-gold/40">
                    {hero.genre}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3">
                    <span className="border border-gold/30 px-6 py-3 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.2em] uppercase text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-obsidian group-hover:border-gold">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        )}

        {/* Divider */}
        <div className="mb-12 flex items-center gap-3">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/15" />
          <div className="h-2 w-2 rotate-45 border border-gold/30" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/15" />
        </div>

        {/* Remaining Books - Consistent Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((book, i) => (
            <FadeIn key={book.slug} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
              <Link href={`/books/${book.slug}`} className="group block h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <CornerFrame className="h-full overflow-hidden bg-charcoal/60 p-6">
                    <div className="flex gap-5 h-full">
                      {/* Cover - Fixed size */}
                      <div className="relative w-28 shrink-0 overflow-hidden shadow-xl">
                        <div className="relative aspect-[2/3]">
                          <Image
                            src={book.cover}
                            alt={book.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="120px"
                          />
                        </div>
                      </div>

                      {/* Info - Consistent layout */}
                      <div className="flex flex-col justify-between py-1 min-w-0">
                        <div>
                          {book.series && (
                            <p className="text-[9px] tracking-[0.3em] uppercase text-gold/50 mb-1">
                              {book.series}
                            </p>
                          )}
                          <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-bold text-bone leading-snug transition-colors duration-300 group-hover:text-gold">
                            {book.title}
                          </h3>
                          {book.subtitle && (
                            <p className="mt-1 text-xs text-bone/40 leading-snug">{book.subtitle}</p>
                          )}
                          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-bone/40">
                            {book.shortDescription}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                          <span className="font-[family-name:var(--font-cinzel)] text-[9px] tracking-[0.2em] uppercase text-gold/50 transition-colors group-hover:text-gold">
                            View Book
                          </span>
                          <span className="h-px w-4 bg-gold/30 transition-all duration-500 group-hover:w-8 group-hover:bg-gold" />
                        </div>
                      </div>
                    </div>
                  </CornerFrame>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* View All */}
        <FadeIn className="mt-24 text-center">
          <Link
            href="/books"
            className="group relative inline-block overflow-hidden border border-gold/30 px-12 py-4 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.25em] uppercase text-gold transition-all duration-500 hover:border-gold hover:text-obsidian"
          >
            <span className="absolute inset-0 bg-gold translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative">View All Books</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
