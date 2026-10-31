"use client"

import { motion } from "framer-motion"
import { CornerFrame } from "@/components/ui/CornerFrame"

interface StatusModalProps {
  type: "success" | "error"
  onClose: () => void
  errorEmail?: string
}

export function StatusModal({ type, onClose, errorEmail }: StatusModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/80 backdrop-blur-sm px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md"
      >
        <CornerFrame className="bg-obsidian border border-gold/20 p-8 text-center backdrop-blur-md sm:p-10">
          {type === "success" ? (
            <>
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center border border-gold/30">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cinzel)] text-xl font-bold text-gold">Message Delivered</h3>
              <div className="mx-auto my-4 h-px w-12 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <p className="text-sm leading-relaxed text-bone/60">
                Your message has been sent successfully. We will respond to your inquiry shortly.
              </p>
            </>
          ) : (
            <>
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center border border-crimson/30">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C41E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cinzel)] text-xl font-bold text-crimson">Sending Failed</h3>
              <div className="mx-auto my-4 h-px w-12 bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
              <p className="text-sm leading-relaxed text-bone/60">
                Something went wrong. Please try again or email us directly at{" "}
                {errorEmail && <a href={`mailto:${errorEmail}`} className="text-gold hover:text-gold-light">{errorEmail}</a>}
              </p>
            </>
          )}
          <button
            onClick={onClose}
            className="mt-6 w-full border border-gold/30 py-3 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.2em] uppercase text-gold/70 transition-all hover:border-gold hover:text-gold"
          >
            Close
          </button>
        </CornerFrame>
      </motion.div>
    </motion.div>
  )
}
