"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { navLinks } from "@/data/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-obsidian/90 backdrop-blur-xl border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <Link href="/" className="relative z-50 flex items-center">
            <Image
              src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/brand/logo-crest.png"
              alt="House of Orisha"
              width={80}
              height={80}
              className="object-contain"
            />
            <span className="hidden font-[family-name:var(--font-cinzel)] text-sm tracking-[0.15em] text-gold sr-only">
              HOUSE OF ORISHA
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-cinzel)] text-[11px] tracking-[0.2em] uppercase text-bone/70 transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex flex-col gap-1.5 p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-gold"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-6 bg-gold"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-gold"
            />
          </button>
        </nav>
      </motion.header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/brand/mobile-nav-bg.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-obsidian/30" />

          <nav className="relative z-10 flex flex-col items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-[family-name:var(--font-cinzel)] text-lg tracking-[0.2em] uppercase text-bone/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative z-10 mt-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
