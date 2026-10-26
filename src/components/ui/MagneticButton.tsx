"use client"

import { motion } from "framer-motion"
import { ReactNode, useRef, useState } from "react"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
}

export function MagneticButton({ children, className = "", href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) * 0.15
    const y = (e.clientY - top - height / 2) * 0.15
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })
  const Tag = href ? "a" : "div"

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Tag
        href={href}
        className={`
          inline-flex items-center justify-center gap-2
          border border-gold/40 px-8 py-4
          font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] uppercase
          text-gold transition-all duration-500
          hover:bg-gold hover:text-obsidian hover:border-gold
          ${className}
        `}
      >
        {children}
      </Tag>
    </motion.div>
  )
}
