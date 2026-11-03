"use client"

import Image from "next/image"
import { RevealText } from "@/components/ui/RevealText"
import { FadeIn } from "@/components/ui/FadeIn"
import { GoldDivider } from "@/components/ui/GoldDivider"
import { RadioPlayer } from "@/components/radio/RadioPlayer"

export function HoorRadioSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0D14]/80 py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/griot-drummer.png"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A0D14]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/[0.04] via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <FadeIn direction="up">
            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-crimson/30" />
              <div className="h-2 w-2 rotate-45 border border-gold/40" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-crimson/30" />
            </div>
          </FadeIn>
          <RevealText>
            <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/60">
              Now Broadcasting
            </p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="mt-5 font-[family-name:var(--font-cinzel)] text-4xl font-bold tracking-wide text-bone md:text-5xl lg:text-6xl">
              HOOR <span className="text-shimmer">Radio</span>
            </h2>
          </RevealText>
          <FadeIn delay={0.3} direction="up">
            <p className="mx-auto mt-4 font-[family-name:var(--font-cinzel)] text-sm tracking-[0.15em] text-bone/40 sm:text-base">
              Your Music. Your Stories. Your World.
            </p>
          </FadeIn>
          <GoldDivider className="mt-10" />
        </div>

        {/* Player + Info */}
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          {/* Left — Player */}
          <FadeIn direction="up">
            <RadioPlayer />
          </FadeIn>

          {/* Right — Description */}
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

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: "M9 18V5l12-2v13", label: "Original Music" },
                  { icon: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z", label: "Live Shows" },
                  { icon: "M3 18v-6a9 9 0 0 1 18 0v6", label: "24/7 Stream" },
                ].map((item) => (
                  <div key={item.label} className="border border-gold/10 bg-obsidian/40 p-3 text-center backdrop-blur-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto text-gold/50">
                      <path d={item.icon} />
                    </svg>
                    <p className="mt-1.5 text-[9px] tracking-[0.12em] uppercase text-bone/40">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
