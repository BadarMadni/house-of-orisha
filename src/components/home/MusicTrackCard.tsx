"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/FadeIn"
import type { Track } from "@/data/music"

interface MusicTrackCardProps {
  track: Track
  index: number
  playing: string | null
  onToggle: (slug: string, src?: string) => void
}

export function MusicTrackCard({ track, index, playing, onToggle }: MusicTrackCardProps) {
  const isPlaying = playing === track.slug

  return (
    <FadeIn delay={index * 0.06} direction="up">
      <motion.div
        whileHover={{ y: -4 }}
        className={`group relative cursor-pointer border transition-all duration-500 p-5 ${
          isPlaying
            ? "border-gold/30 bg-gold/[0.06]"
            : "border-gold/[0.06] bg-black/20 hover:border-gold/15 hover:bg-black/30"
        }`}
        onClick={() => onToggle(track.slug, track.audioSrc)}
      >
        <div className="flex items-start gap-4">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isPlaying
              ? "border-gold/40 bg-gold/15"
              : "border-gold/15 bg-gold/[0.04] group-hover:border-gold/30"
          }`}>
            {isPlaying ? (
              <div className="flex items-end gap-[2px]">
                {[1, 2, 3].map((bar) => (
                  <motion.div
                    key={bar}
                    animate={{ height: [3, 12, 3] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: bar * 0.12 }}
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

          <div className="flex-1 min-w-0 pt-1">
            <p className={`font-[family-name:var(--font-cinzel)] text-sm font-bold transition-colors duration-300 ${
              isPlaying ? "text-gold" : "text-bone/80 group-hover:text-bone"
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
                  {isPlaying ? "Playing" : "Play"}
                </span>
              ) : (
                <span className="text-[9px] tracking-[0.15em] uppercase text-bone/20">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>

        {isPlaying && (
          <motion.div
            layoutId="activeTrackBar"
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-forest-light via-gold to-forest-light"
          />
        )}
      </motion.div>
    </FadeIn>
  )
}
