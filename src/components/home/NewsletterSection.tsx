"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { RevealText } from "@/components/ui/RevealText"
import { FadeIn } from "@/components/ui/FadeIn"

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#0D0A05]">
      {/* Warm dark gold-tinted bg */}
      <div className="absolute inset-0">
        <Image
          src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/scenes/sacred-river.png"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0D0A05]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/[0.06] via-transparent to-transparent" />
      </div>

      {/* Decorative Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-8">
        <div className="w-px h-20 bg-gradient-to-b from-gold/20 to-transparent" />
        <div className="w-px h-14 bg-gradient-to-b from-gold/10 to-transparent" />
        <div className="w-px h-20 bg-gradient-to-b from-gold/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <FadeIn direction="left">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center">
            <div className="relative">
              <div className="h-8 w-8 rotate-45 border border-gold/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-3 w-3 rotate-45 bg-gold/20" />
              </div>
            </div>
          </div>
        </FadeIn>

        <RevealText>
          <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/60">
            The Inner Circle
          </p>
        </RevealText>
        <RevealText delay={0.1}>
          <h2 className="mt-5 font-[family-name:var(--font-cinzel)] text-3xl font-bold text-bone md:text-4xl lg:text-5xl">
            Join the <span className="text-shimmer">House</span>
          </h2>
        </RevealText>

        <FadeIn delay={0.2} direction="left">
          <p className="mt-6 text-bone/50 leading-relaxed">
            Be the first to know about new book releases, music drops,
            film announcements, and exclusive content from the House of Orisha universe.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} direction="right">
          <form
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gold/15 bg-black/30 px-6 py-4 text-sm text-bone backdrop-blur-sm placeholder:text-bone/30 focus:border-gold/40 focus:outline-none transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="relative overflow-hidden border border-gold bg-gold px-10 py-4 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.25em] uppercase text-obsidian font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            >
              Join Now
            </motion.button>
          </form>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-gold/10" />
            <p className="text-[10px] tracking-[0.15em] text-bone/25">
              No spam. Unsubscribe at any time.
            </p>
            <div className="h-px w-8 bg-gold/10" />
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.5} direction="right">
          <div className="mt-16 grid grid-cols-3 gap-4">
            {[
              { number: "10+", label: "Published Works" },
              { number: "3", label: "Film Awards" },
              { number: "7", label: "Original Songs" },
            ].map((stat) => (
              <div key={stat.label} className="py-4">
                <p className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-gold/80 md:text-3xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-[9px] tracking-[0.2em] uppercase text-bone/35">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-px h-16 bg-gradient-to-t from-gold/15 to-transparent" />
      </div>
    </section>
  )
}
