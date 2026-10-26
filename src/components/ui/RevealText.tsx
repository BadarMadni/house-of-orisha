"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface RevealTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function RevealText({ children, className = "", delay = 0 }: RevealTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
