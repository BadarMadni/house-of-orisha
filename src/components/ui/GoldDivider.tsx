"use client"

import { motion } from "framer-motion"

interface GoldDividerProps {
  className?: string
  width?: string
}

export function GoldDivider({ className = "", width = "120px" }: GoldDividerProps) {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent ${className}`}
    />
  )
}
