"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Hls from "hls.js"
import { CornerFrame } from "@/components/ui/CornerFrame"

const HLS_URL = "https://api.nobexradio.com/hls/hoorradio/playlist.m3u8"
const NOW_PLAYING_URL = "https://api.nobexradio.com/public/stations/hoorradio/now-playing"
const NOBEX_URL = "https://www.nobexradio.com/radio/ns-hoorradio/hoor-radio"

interface NowPlaying {
  title?: string
  artist?: string
  artwork?: string
}

export function RadioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hlsRef = useRef<Hls | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [nowPlaying, setNowPlaying] = useState<NowPlaying>({})
  const [isLoading, setIsLoading] = useState(false)

  const fetchNowPlaying = useCallback(async () => {
    try {
      const res = await fetch(NOW_PLAYING_URL)
      if (!res.ok) return
      const data = await res.json()
      setNowPlaying({
        title: data.title || data.song || "HOOR RADIO",
        artist: data.artist || data.dj || "Live Broadcast",
        artwork: data.artwork || data.cover || "",
      })
    } catch { /* silent */ }
  }, [])

  useEffect(() => {
    fetchNowPlaying()
    const interval = setInterval(fetchNowPlaying, 15000)
    return () => clearInterval(interval)
  }, [fetchNowPlaying])

  const initHls = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true })
      hls.loadSource(HLS_URL)
      hls.attachMedia(audio)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        audio.play().catch(() => setIsPlaying(false))
      })
      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) { setIsPlaying(false); setIsLoading(false) }
      })
      hlsRef.current = hls
    } else if (audio.canPlayType("application/vnd.apple.mpegurl")) {
      audio.src = HLS_URL
      audio.play().catch(() => setIsPlaying(false))
    }
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      hlsRef.current?.destroy()
      hlsRef.current = null
      setIsPlaying(false)
    } else {
      setIsLoading(true)
      initHls()
      setIsPlaying(true)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v
  }

  return (
    <CornerFrame className="bg-obsidian/60 p-6 backdrop-blur-xl sm:p-10">
      <audio
        ref={audioRef}
        onPlaying={() => { setIsPlaying(true); setIsLoading(false) }}
        onPause={() => setIsPlaying(false)}
        onError={() => { setIsPlaying(false); setIsLoading(false) }}
      />

      {/* Live Indicator */}
      <div className="mb-6 flex items-center justify-center gap-2">
        <span className={`h-2 w-2 rounded-full ${isPlaying ? "bg-crimson animate-pulse" : "bg-bone/20"}`} />
        <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.3em] uppercase text-gold/70">
          {isPlaying ? "On Air" : "Radio"}
        </span>
      </div>

      {/* Now Playing */}
      <div className="mb-8 text-center">
        <p className="font-[family-name:var(--font-cinzel)] text-xl font-bold text-bone sm:text-2xl">
          {nowPlaying.title || "HOOR RADIO"}
        </p>
        <p className="mt-1 text-sm text-bone/40">{nowPlaying.artist || "Live Broadcast"}</p>
      </div>

      {/* Play Button */}
      <div className="mb-8 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/40 bg-gold/10 transition-all duration-500 hover:border-gold hover:bg-gold/20 sm:h-24 sm:w-24"
        >
          {isLoading ? (
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="h-6 w-6 rounded-full border-2 border-gold/30 border-t-gold" />
          ) : isPlaying ? (
            <div className="flex gap-1.5">
              <div className="h-6 w-1.5 rounded-full bg-gold" />
              <div className="h-6 w-1.5 rounded-full bg-gold" />
            </div>
          ) : (
            <svg width="22" height="26" viewBox="0 0 22 26" className="ml-1 text-gold">
              <polygon points="0,0 22,13 0,26" fill="currentColor" />
            </svg>
          )}
          {isPlaying && (
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-gold/30"
            />
          )}
        </motion.button>
      </div>

      {/* Volume */}
      <div className="mx-auto flex max-w-xs items-center gap-3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-gold/40">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
        </svg>
        <input
          type="range" min="0" max="1" step="0.01" value={volume}
          onChange={handleVolumeChange}
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-gold/20 accent-gold [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold"
        />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-gold/40">
          <path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      </div>

      {/* Nobex Link */}
      <div className="mt-8 text-center">
        <a
          href={NOBEX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-gold/40 transition-colors hover:text-gold"
        >
          Listen on Nobex Radio
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
        </a>
      </div>
    </CornerFrame>
  )
}
