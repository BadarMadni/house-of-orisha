"use client"

import { ReactNode } from "react"

interface CornerFrameProps {
  children: ReactNode
  className?: string
  cornerSize?: number
}

export function CornerFrame({ children, className = "", cornerSize = 20 }: CornerFrameProps) {
  const s = cornerSize

  return (
    <div className={`relative ${className}`}>
      {children}
      {/* Top-Left */}
      <div
        className="pointer-events-none absolute top-0 left-0 border-t border-l border-gold/30 transition-all duration-500 group-hover:border-gold/60"
        style={{ width: s, height: s }}
      />
      {/* Top-Right */}
      <div
        className="pointer-events-none absolute top-0 right-0 border-t border-r border-gold/30 transition-all duration-500 group-hover:border-gold/60"
        style={{ width: s, height: s }}
      />
      {/* Bottom-Left */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 border-b border-l border-gold/30 transition-all duration-500 group-hover:border-gold/60"
        style={{ width: s, height: s }}
      />
      {/* Bottom-Right */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 border-b border-r border-gold/30 transition-all duration-500 group-hover:border-gold/60"
        style={{ width: s, height: s }}
      />
    </div>
  )
}
