"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { tracks } from "@/data/music"

export function MusicTrackList() {
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
    <div className="space-y-2">
      <audio ref={audioRef} onEnded={() => setPlaying(null)} />

      {tracks.map((track, i) => {
        const isPlaying = playing === track.slug
        const hasAudio = !!track.audioSrc

        return (
          <motion.div
            key={track.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            onClick={() => togglePlay(track.slug, track.audioSrc)}
            className={`group relative flex cursor-pointer items-center gap-3 border border-gold/[0.06] p-3 backdrop-blur-md transition-all duration-300 hover:border-gold/20 hover:bg-gold/[0.04] md:gap-5 md:p-5 ${
              isPlaying
                ? "border-gold/20 bg-gold/[0.06]"
                : "bg-obsidian/40"
            } ${!hasAudio ? "opacity-50 cursor-default" : ""}`}
          >
            {/* Track number */}
            <span className="hidden font-[family-name:var(--font-cinzel)] text-2xl font-bold text-gold/10 transition-colors group-hover:text-gold/25 sm:block">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Play button */}
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 md:h-12 md:w-12 ${
              isPlaying ? "border-gold/50 bg-gold/10" : "border-gold/15 group-hover:border-gold/40"
            }`}>
              {isPlaying ? (
                <div className="flex items-end gap-[3px]">
                  {[1, 2, 3].map((bar) => (
                    <motion.div
                      key={bar}
                      animate={{ height: [4, 18, 4] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: bar * 0.12 }}
                      className="w-[3px] bg-gold"
                    />
                  ))}
                </div>
              ) : (
                <svg width="12" height="14" viewBox="0 0 10 12" className="ml-0.5 text-gold/30 transition-colors group-hover:text-gold">
                  <polygon points="0,0 10,6 0,12" fill="currentColor" />
                </svg>
              )}
            </div>

            {/* Track info */}
            <div className="flex-1 min-w-0">
              <p className={`font-[family-name:var(--font-cinzel)] text-xs font-bold transition-colors sm:text-sm md:text-base ${
                isPlaying ? "text-gold" : "text-bone group-hover:text-gold"
              }`} style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
                {track.title}
              </p>
              <p className="mt-1 text-xs text-bone/40">{track.category}</p>
            </div>

            {/* Related project */}
            {track.relatedProject && (
              <p className="hidden max-w-[200px] text-right text-[11px] leading-tight text-bone/25 lg:block">
                {track.relatedProject}
              </p>
            )}

            {/* Status badge */}
            <div className={`shrink-0 border px-2 py-1 text-[8px] tracking-[0.15em] uppercase sm:px-3 sm:text-[9px] sm:tracking-[0.2em] ${
              hasAudio
                ? "border-gold/20 text-gold/40"
                : "border-bone/10 text-bone/20"
            }`}>
              <span className="hidden sm:inline">{hasAudio ? (isPlaying ? "NOW PLAYING" : "PLAY") : "COMING SOON"}</span>
              <span className="sm:hidden">{hasAudio ? (isPlaying ? "LIVE" : "PLAY") : "SOON"}</span>
            </div>

            {/* Active glow line */}
            {isPlaying && (
              <motion.div
                layoutId="activeTrack"
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/60 via-gold to-gold/60"
              />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
