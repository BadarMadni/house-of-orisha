"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn } from "@/components/ui/FadeIn"
import { RevealText } from "@/components/ui/RevealText"
import { CornerFrame } from "@/components/ui/CornerFrame"
import { books } from "@/data/books"

export function BooksGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  const featured = books.filter((b) => b.featured)
  const remaining = books.filter((b) => !b.featured)

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden bg-[#0D0D0D]">
      {/* Parallax tribal bg */}
      <motion.div className="absolute -inset-[20%]" style={{ y: bgY }}>
        <Image
          src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/brand/bg-tribal.webp"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/[0.03] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <FadeIn>
            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
              <div className="h-2 w-2 rotate-45 border border-gold/40 bg-gold/10" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
            </div>
          </FadeIn>
          <RevealText>
            <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/60">
              The Collection
            </p>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-6 mx-auto max-w-lg text-sm text-bone/50 leading-relaxed">
              Explore the books, myths, and histories of the House of Orisha universe.
              Every story carries a world within it.
            </p>
          </FadeIn>
        </div>

        {/* Featured Books — Large Cards */}
        <div className="grid gap-6 sm:grid-cols-2 mb-16">
          {featured.map((book, i) => (
            <FadeIn key={book.slug} delay={i * 0.1}>
              <Link href={`/books/${book.slug}`} className="group block">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <CornerFrame className="overflow-hidden bg-charcoal/40">
                    <div className="flex gap-5 p-5">
                      <div className="relative w-32 shrink-0 overflow-hidden shadow-xl sm:w-36">
                        <div className="relative aspect-[2/3]">
                          <Image
                            src={book.cover}
                            alt={book.title}
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                            sizes="150px"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-between py-1 min-w-0">
                        <div>
                          {book.series && (
                            <p className="text-[9px] tracking-[0.3em] uppercase text-gold/50 mb-1">
                              {book.series}
                            </p>
                          )}
                          <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-bold text-bone leading-snug transition-colors duration-300 group-hover:text-gold sm:text-xl">
                            {book.title}
                          </h3>
                          {book.subtitle && (
                            <p className="mt-1 text-xs text-bone/40">{book.subtitle}</p>
                          )}
                          <div className="mt-3 h-px w-12 bg-gradient-to-r from-gold/40 to-transparent" />
                          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-bone/40">
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

        {/* Divider */}
        <div className="mb-12 flex items-center gap-3">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/15" />
          <div className="h-2 w-2 rotate-45 border border-gold/30" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/15" />
        </div>

        {/* All Other Books — Cover Grid */}
        <div className="grid gap-x-6 gap-y-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {remaining.map((book, i) => (
            <FadeIn key={book.slug} delay={i * 0.06}>
              <Link href={`/books/${book.slug}`} className="group block">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative overflow-hidden shadow-2xl shadow-black/50"
                >
                  <div className="relative aspect-[2/3] bg-charcoal">
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <div className="absolute inset-0 border border-gold/0 transition-all duration-500 group-hover:border-gold/25" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block border border-gold/50 bg-obsidian/80 px-3 py-1.5 font-[family-name:var(--font-cinzel)] text-[8px] tracking-[0.2em] uppercase text-gold backdrop-blur-sm">
                      View Book &rarr;
                    </span>
                  </div>
                </motion.div>
                <div className="mt-3 space-y-1">
                  <h3 className="font-[family-name:var(--font-cinzel)] text-sm font-bold text-bone transition-colors duration-300 group-hover:text-gold line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-[10px] tracking-wider text-gold/30">
                    {book.genre}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
