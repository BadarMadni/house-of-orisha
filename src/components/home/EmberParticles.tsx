"use client"

import { motion } from "framer-motion"

const EMBERS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  delay: (i * 2.7) % 8,
  duration: 6 + (i * 1.3) % 6,
  left: `${(i * 3.57) % 100}%`,
  size: 2 + (i * 0.7) % 4,
  xDrift: ((i * 17) % 80) - 40,
  xDrift2: ((i * 13) % 60) - 30,
}))

export function EmberParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden">
      {EMBERS.map((ember) => (
        <motion.div
          key={ember.id}
          className="absolute rounded-full"
          style={{
            left: ember.left,
            bottom: "-5%",
            width: ember.size,
            height: ember.size,
            background: `radial-gradient(circle, rgba(212,175,55,0.9) 0%, rgba(212,175,55,0.3) 50%, transparent 70%)`,
            boxShadow: `0 0 ${ember.size * 2}px rgba(212,175,55,0.4)`,
          }}
          animate={{
            y: [0, -1200],
            x: [0, ember.xDrift, ember.xDrift2],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 0.8, 0.3],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
