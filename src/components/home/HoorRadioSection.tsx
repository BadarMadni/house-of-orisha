"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { RevealText } from "@/components/ui/RevealText"
import { FadeIn } from "@/components/ui/FadeIn"
import { GoldDivider } from "@/components/ui/GoldDivider"
import { RadioPlayer } from "@/components/radio/RadioPlayer"

const FREQ_BARS = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  height: 8 + ((i * 7) % 24),
  delay: (i * 0.06) % 1.8,
}))

export function HoorRadioSection() {
  return (
    <section className="relative overflow-hidden bg-[#080A10]/80 py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/griot-drummer.png"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#080A10]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-crimson/[0.05] via-transparent to-transparent" />
      </div>

      {/* Animated frequency lines top */}
      <div className="absolute top-0 left-0 right-0 flex items-end justify-center gap-[2px] overflow-hidden opacity-20">
        {FREQ_BARS.map((bar) => (
          <motion.div
            key={bar.id}
            animate={{ height: [bar.height * 0.3, bar.height, bar.height * 0.5, bar.height * 0.8, bar.height * 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: bar.delay, ease: "easeInOut" }}
            className="w-[2px] rounded-full bg-gradient-to-t from-gold/60 to-gold/10"
          />
        ))}
      </div>

      {/* Pulsing radio waves behind content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            animate={{ scale: [1, 2.5, 3], opacity: [0.15, 0.05, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: ring * 1.2, ease: "easeOut" }}
            className="absolute h-40 w-40 rounded-full border border-gold/20"
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* ON AIR badge */}
        <FadeIn direction="up">
          <div className="mb-6 flex justify-center">
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(196,30,58,0.2)", "0 0 40px rgba(196,30,58,0.4)", "0 0 20px rgba(196,30,58,0.2)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 border border-crimson/30 bg-crimson/10 px-5 py-2 backdrop-blur-sm"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-crimson"
              />
              <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-crimson">
                On Air
              </span>
            </motion.div>
          </div>
        </FadeIn>

        {/* Section Header */}
        <div className="mb-14 text-center">
          <RevealText>
            <h2 className="font-[family-name:var(--font-cinzel)] text-4xl font-bold tracking-wide text-bone md:text-5xl lg:text-7xl">
              HOOR <span className="text-shimmer">Radio</span>
            </h2>
          </RevealText>
          <FadeIn delay={0.3} direction="up">
            <p className="mx-auto mt-4 font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] text-bone/40 sm:text-base">
              Your Music. Your Stories. Your World.
            </p>
          </FadeIn>
          <GoldDivider className="mt-8" />
        </div>

        {/* Player + Info */}
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <FadeIn direction="up">
            <RadioPlayer />
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <div>
              <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.3em] uppercase text-gold/50">
                The Official Station
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-cinzel)] text-2xl font-bold text-bone md:text-3xl">
                Listen Live
              </h3>
              <div className="my-5 h-px w-16 bg-gradient-to-r from-gold/40 to-transparent" />
              <p className="leading-relaxed text-bone/50">
                HOOR RADIO is the official internet radio station of House of
                Orisha. Listen live while you explore our books, films, music,
                and the world of the Òrìṣà.
              </p>

              {/* Animated feature cards */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: "M9 18V5l12-2v13", label: "Original Music", delay: 0.3 },
                  { icon: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z", label: "Live Shows", delay: 0.4 },
                  { icon: "M3 18v-6a9 9 0 0 1 18 0v6", label: "24/7 Stream", delay: 0.5 },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay, duration: 0.6 }}
                    whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.3)" }}
                    className="border border-gold/10 bg-obsidian/40 p-4 text-center backdrop-blur-sm transition-all duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto text-gold/50">
                      <path d={item.icon} />
                    </svg>
                    <p className="mt-2 text-[9px] tracking-[0.12em] uppercase text-bone/40">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Animated frequency lines bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex rotate-180 items-end justify-center gap-[2px] overflow-hidden opacity-15">
        {FREQ_BARS.map((bar) => (
          <motion.div
            key={bar.id}
            animate={{ height: [bar.height * 0.5, bar.height * 0.8, bar.height * 0.3, bar.height, bar.height * 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: bar.delay + 0.5, ease: "easeInOut" }}
            className="w-[2px] rounded-full bg-gradient-to-t from-crimson/40 to-gold/10"
          />
        ))}
      </div>
    </section>
  )
}
