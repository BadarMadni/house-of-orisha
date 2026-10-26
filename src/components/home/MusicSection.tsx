"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { RevealText } from "@/components/ui/RevealText"
import { FadeIn } from "@/components/ui/FadeIn"
import { GoldDivider } from "@/components/ui/GoldDivider"
import { CornerFrame } from "@/components/ui/CornerFrame"
import { tracks } from "@/data/music"

export function MusicSection() {
  const [playing, setPlaying] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = (slug: string, src?: string) => {
    if (!src) return
    if (playing === slug) {
      audioRef.current?.pause()
      setPlaying(null)
      return
    }
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = src
      audioRef.current.play()
    }
    setPlaying(slug)
  }

  const heroTrack = tracks.find((t) => t.audioSrc)
  const playableTracks = tracks.filter((t) => t.audioSrc)

  return (
    <section className="relative py-20 overflow-hidden bg-[#0A1A10]">
      <audio ref={audioRef} onEnded={() => setPlaying(null)} />

      {/* Immersive Background Layers */}
      <div className="absolute inset-0">
        <Image
          src="/images/brand/bg-tribal.webp"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A1A10]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <FadeIn direction="right">
            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-forest-light/40" />
              <div className="h-2 w-2 rotate-45 border border-gold/40" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-forest-light/40" />
            </div>
          </FadeIn>
          <RevealText>
            <p className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/60">
              The Sound
            </p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="mt-5 font-[family-name:var(--font-cinzel)] text-4xl font-bold tracking-wide text-bone md:text-5xl lg:text-6xl">
              Original <span className="text-shimmer">Music</span>
            </h2>
          </RevealText>
          <FadeIn delay={0.3} direction="right">
            <p className="mt-6 mx-auto max-w-lg text-sm text-bone/50 leading-relaxed">
              Every story has a sound. Original compositions inspired by the
              worlds, characters, and journeys of the House of Orisha universe.
            </p>
          </FadeIn>
          <GoldDivider className="mt-10" />
        </div>

        {/* Hero Featured Track */}
        {heroTrack && (
          <FadeIn className="mb-14" direction="left">
            <div
              className="group relative cursor-pointer"
              onClick={() => togglePlay(heroTrack.slug, heroTrack.audioSrc)}
            >
              <CornerFrame className="overflow-hidden">
                {/* Full-width cinematic bg */}
                <div className="relative py-16 px-8 sm:px-12 md:py-20 lg:py-24">
                  <Image
                    src="/images/characters/griot-drummer.png"
                    alt=""
                    fill
                    className="object-cover opacity-20 transition-opacity duration-700 group-hover:opacity-30"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A10]/90 via-[#0A1A10]/70 to-[#0A1A10]/90" />

                  <div className="relative flex flex-col items-center text-center sm:flex-row sm:text-left sm:gap-10 lg:gap-16">
                    {/* Vinyl / Play Visual */}
                    <div className="relative mb-8 sm:mb-0 shrink-0">
                      {/* Outer ring */}
                      <motion.div
                        animate={playing === heroTrack.slug ? { rotate: 360 } : {}}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="relative h-40 w-40 rounded-full border border-gold/20 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
                      >
                        {/* Inner rings */}
                        <div className="absolute inset-3 rounded-full border border-gold/10" />
                        <div className="absolute inset-6 rounded-full border border-gold/[0.06]" />
                        <div className="absolute inset-10 rounded-full border border-gold/10" />
                        {/* Center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 border border-gold/30 transition-all duration-500 group-hover:bg-gold/20 group-hover:scale-110">
                            {playing === heroTrack.slug ? (
                              <div className="flex items-end gap-[3px]">
                                {[1, 2, 3, 4, 5].map((bar) => (
                                  <motion.div
                                    key={bar}
                                    animate={{ height: [4, 18, 4] }}
                                    transition={{
                                      duration: 0.5,
                                      repeat: Infinity,
                                      delay: bar * 0.1,
                                    }}
                                    className="w-[3px] bg-gold rounded-full"
                                  />
                                ))}
                              </div>
                            ) : (
                              <svg width="20" height="24" viewBox="0 0 20 24" className="ml-1 text-gold">
                                <polygon points="0,0 20,12 0,24" fill="currentColor" />
                              </svg>
                            )}
                          </div>
                        </div>
                        {/* Groove lines */}
                        <div className="absolute inset-[30%] rounded-full border border-dashed border-gold/[0.06]" />
                      </motion.div>

                      {/* Glow */}
                      <div className="absolute -inset-4 rounded-full bg-gold/5 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    </div>

                    {/* Track Info */}
                    <div>
                      <p className="font-[family-name:var(--font-cinzel)] text-[9px] tracking-[0.35em] uppercase text-gold/50">
                        Featured Track
                      </p>
                      <h3 className="mt-3 font-[family-name:var(--font-cinzel)] text-3xl font-bold text-bone transition-colors duration-500 group-hover:text-gold md:text-4xl">
                        {heroTrack.title}
                      </h3>
                      <p className="mt-2 text-sm text-bone/40">
                        {heroTrack.relatedProject}
                      </p>
                      <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold/40 to-transparent mx-auto sm:mx-0" />
                      <p className="mt-6 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.2em] uppercase text-gold/60 transition-colors group-hover:text-gold">
                        {playing === heroTrack.slug ? "Now Playing — Tap to Pause" : "Tap to Play"}
                      </p>
                    </div>
                  </div>
                </div>
              </CornerFrame>
            </div>
          </FadeIn>
        )}

        {/* All Tracks Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, i) => (
            <FadeIn key={track.slug} delay={i * 0.06} direction={i % 2 === 0 ? "right" : "left"}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`group relative cursor-pointer border transition-all duration-500 p-5 ${
                  playing === track.slug
                    ? "border-gold/30 bg-gold/[0.06]"
                    : "border-gold/[0.06] bg-black/20 hover:border-gold/15 hover:bg-black/30"
                }`}
                onClick={() => togglePlay(track.slug, track.audioSrc)}
              >
                <div className="flex items-start gap-4">
                  {/* Play Button */}
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    playing === track.slug
                      ? "border-gold/40 bg-gold/15"
                      : "border-gold/15 bg-gold/[0.04] group-hover:border-gold/30"
                  }`}>
                    {playing === track.slug ? (
                      <div className="flex items-end gap-[2px]">
                        {[1, 2, 3].map((bar) => (
                          <motion.div
                            key={bar}
                            animate={{ height: [3, 12, 3] }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              delay: bar * 0.12,
                            }}
                            className="w-[2px] bg-gold rounded-full"
                          />
                        ))}
                      </div>
                    ) : (
                      <svg
                        width="10"
                        height="12"
                        viewBox="0 0 10 12"
                        className={`ml-0.5 transition-colors ${
                          track.audioSrc ? "text-gold/50 group-hover:text-gold" : "text-bone/15"
                        }`}
                      >
                        <polygon points="0,0 10,6 0,12" fill="currentColor" />
                      </svg>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 pt-1">
                    <p className={`font-[family-name:var(--font-cinzel)] text-sm font-bold transition-colors duration-300 ${
                      playing === track.slug ? "text-gold" : "text-bone/80 group-hover:text-bone"
                    }`}>
                      {track.title}
                    </p>
                    <p className="mt-1 text-[11px] text-bone/30 truncate">
                      {track.relatedProject}
                    </p>
                    <div className="mt-3">
                      {track.audioSrc ? (
                        <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.15em] uppercase text-gold/50">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold/50" />
                          {playing === track.slug ? "Playing" : "Play"}
                        </span>
                      ) : (
                        <span className="text-[9px] tracking-[0.15em] uppercase text-bone/20">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Active indicator */}
                {playing === track.slug && (
                  <motion.div
                    layoutId="activeTrackBar"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-forest-light via-gold to-forest-light"
                  />
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn className="mt-16 text-center">
          <Link href="/music" className="group inline-flex items-center gap-3">
            <span className="h-px w-6 bg-gold/20 transition-all duration-500 group-hover:w-10 group-hover:bg-gold/40" />
            <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.25em] uppercase text-gold/50 transition-colors group-hover:text-gold">
              View All Tracks
            </span>
            <span className="h-px w-6 bg-gold/20 transition-all duration-500 group-hover:w-10 group-hover:bg-gold/40" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
