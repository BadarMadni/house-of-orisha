"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { PageHero } from "@/components/ui/PageHero"
import { FadeIn } from "@/components/ui/FadeIn"
import { tracks } from "@/data/music"

export default function MusicPage() {
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

  return (
    <>
      <PageHero
        title="The Sound"
        subtitle="Original Music"
        image="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/griot-drummer.png"
      />

      <section className="bg-obsidian py-24">
        <audio ref={audioRef} onEnded={() => setPlaying(null)} />

        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <FadeIn>
            <p className="mb-12 text-center leading-relaxed text-bone/50">
              Original House of Orisha music — created for specific books, film
              adaptations, and as independent releases. Each track carries a story.
            </p>
          </FadeIn>

          <div className="space-y-1">
            {tracks.map((track, i) => (
              <FadeIn key={track.slug} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className={`group flex cursor-pointer items-center gap-6 border-b border-gold/5 p-5 transition-all hover:bg-gold/[0.02] ${
                    playing === track.slug ? "bg-gold/[0.04]" : ""
                  }`}
                  onClick={() => togglePlay(track.slug, track.audioSrc)}
                >
                  <span className="font-[family-name:var(--font-cinzel)] text-sm text-gold/20 group-hover:text-gold/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/15 group-hover:border-gold/30">
                    {playing === track.slug ? (
                      <div className="flex items-end gap-[2px]">
                        {[1, 2, 3].map((bar) => (
                          <motion.div
                            key={bar}
                            animate={{ height: [4, 16, 4] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: bar * 0.12 }}
                            className="w-[2px] bg-gold"
                          />
                        ))}
                      </div>
                    ) : (
                      <svg width="10" height="12" viewBox="0 0 10 12" className="ml-0.5 text-gold/40 group-hover:text-gold">
                        <polygon points="0,0 10,6 0,12" fill="currentColor" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="font-[family-name:var(--font-cinzel)] text-sm font-bold text-bone group-hover:text-gold">
                      {track.title}
                    </p>
                    <p className="mt-0.5 text-xs text-bone/30">{track.category}</p>
                  </div>

                  {track.relatedProject && (
                    <p className="hidden text-xs text-bone/20 md:block">
                      {track.relatedProject}
                    </p>
                  )}

                  <span className="text-[10px] tracking-wider text-bone/15">
                    {track.audioSrc ? "PLAY" : "SOON"}
                  </span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
