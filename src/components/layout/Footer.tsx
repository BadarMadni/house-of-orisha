"use client"

import Link from "next/link"
import Image from "next/image"
import { FadeIn } from "@/components/ui/FadeIn"
import { navLinks, contactInfo } from "@/data/navigation"

export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/[0.03] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/brand/logo-crest.png"
                alt="House of Orisha"
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <p className="font-[family-name:var(--font-cinzel)] text-sm tracking-[0.1em] text-gold">
                  HOUSE OF ORISHA
                </p>
                <p className="text-[10px] text-bone/30 tracking-wider">
                  Spirit &middot; Culture &middot; Creation
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-bone/40">
              Where Spirit, Culture, and Creation Become One. The creative
              universe of Oriyomi Ismail.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h4 className="mb-5 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.25em] uppercase text-gold/60">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bone/40 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h4 className="mb-5 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.25em] uppercase text-gold/60">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-bone/40 transition-colors duration-300 hover:text-gold"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="text-bone/40">{contactInfo.phone}</li>
              <li className="text-bone/40">{contactInfo.location}</li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h4 className="mb-5 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.25em] uppercase text-gold/60">
              The Inner Circle
            </h4>
            <p className="mb-4 text-sm text-bone/40">
              Get exclusive releases and updates.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gold/15 bg-obsidian/50 px-4 py-3 text-sm text-bone placeholder:text-bone/20 focus:border-gold/40 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full border border-gold/40 bg-gold/10 py-2.5 font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.2em] uppercase text-gold transition-all duration-300 hover:bg-gold hover:text-obsidian"
              >
                Join the House
              </button>
            </form>
          </FadeIn>
        </div>
      </div>

      <div className="border-t border-gold/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row lg:px-12">
          <p className="text-xs text-bone/20">
            &copy; 2026 House of Orisha. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-bone/20">
            <Link href="/privacy" className="transition-colors hover:text-gold/50">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold/50">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
