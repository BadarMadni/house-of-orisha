"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { CornerFrame } from "@/components/ui/CornerFrame"
import { FadeIn } from "@/components/ui/FadeIn"
import { StatusModal } from "@/components/ui/StatusModal"
import { contactInfo } from "@/data/navigation"

const categories = [
  "General Inquiries",
  "Publishing",
  "Film & Television",
  "Press / Media",
  "Licensing",
  "Business Partnerships",
  "Collaborations",
]

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const [form, setForm] = useState({ name: "", email: "", category: categories[0], message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("sent")
      setForm({ name: "", email: "", category: categories[0], message: "" })
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full border border-gold/15 bg-obsidian/60 backdrop-blur-sm px-4 py-3 text-sm text-bone placeholder:text-bone/20 focus:border-gold/40 focus:outline-none transition-colors"

  return (
    <>
      {/* Parallax Hero */}
      <section ref={heroRef} className="relative flex h-[55vh] min-h-[400px] items-end overflow-hidden pt-20 md:h-[70vh] md:min-h-[500px]">
        <motion.div className="absolute inset-0" style={{ y: heroImgY, scale: heroScale }}>
          <Image
            src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/yoruba-chiefs.png"
            alt="Yoruba chiefs in council"
            fill
            priority
            className="object-cover object-[50%_25%]"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-obsidian/60" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-12">
          <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 1, delay: 0.2 }} className="mb-6 h-px bg-gradient-to-r from-gold to-transparent" />
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.4em] uppercase text-gold/70"
          >
            Get in Touch
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-4 font-[family-name:var(--font-cinzel)] text-5xl font-bold tracking-[0.08em] text-bone md:text-7xl lg:text-8xl"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
            >
              <span className="text-shimmer">Contact</span>
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="relative bg-obsidian/80 py-14 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/[0.03] via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 lg:px-12">
          <div className="grid gap-12 md:grid-cols-5 md:gap-16">
            {/* Left — Info */}
            <FadeIn className="md:col-span-2">
              <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-bone" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
                Reach the House
              </h2>
              <div className="my-5 h-px w-12 bg-gradient-to-r from-gold/50 to-transparent md:my-6" />

              <div className="space-y-5">
                {[
                  { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                  { label: "Phone", value: contactInfo.phone },
                  { label: "Location", value: contactInfo.location },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-gold/50 sm:text-[10px]">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-sm text-bone transition-colors hover:text-gold" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-bone" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-[9px] tracking-[0.3em] uppercase text-gold/50 sm:text-[10px]">Inquiry Categories</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <span key={cat} className="border border-gold/10 bg-obsidian/40 px-3 py-1 text-[10px] text-bone/40 backdrop-blur-sm sm:text-xs">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right — Form */}
            <FadeIn className="md:col-span-3">
              <CornerFrame className="bg-obsidian/50 p-5 backdrop-blur-md sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-[9px] tracking-[0.2em] uppercase text-gold/50 sm:text-[10px]">Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[9px] tracking-[0.2em] uppercase text-gold/50 sm:text-[10px]">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[9px] tracking-[0.2em] uppercase text-gold/50 sm:text-[10px]">Category</label>
                    <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={inputClass}>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[9px] tracking-[0.2em] uppercase text-gold/50 sm:text-[10px]">Message</label>
                    <textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Your message..." />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full border border-gold bg-gold py-3.5 font-[family-name:var(--font-cinzel)] text-xs tracking-[0.2em] uppercase text-obsidian transition-all hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent" : "Send Message"}
                  </button>

                </form>
              </CornerFrame>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Success / Error Modal */}
      {(status === "sent" || status === "error") && (
        <StatusModal
          type={status === "sent" ? "success" : "error"}
          onClose={() => setStatus("idle")}
          errorEmail={contactInfo.email}
        />
      )}
    </>
  )
}
