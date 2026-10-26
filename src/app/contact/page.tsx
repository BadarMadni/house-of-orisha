"use client"

import { PageHero } from "@/components/ui/PageHero"
import { FadeIn } from "@/components/ui/FadeIn"
import { GoldDivider } from "@/components/ui/GoldDivider"
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
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Get in Touch"
        image="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/characters/yoruba-chiefs.png"
      />

      <section className="bg-obsidian py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2">
            <FadeIn direction="up">
              <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-bone">
                Reach the House
              </h2>
              <GoldDivider className="my-6" width="60px" />

              <div className="space-y-6 text-bone/60">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/50">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="mt-1 block text-bone transition-colors hover:text-gold"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/50">Phone</p>
                  <p className="mt-1 text-bone">{contactInfo.phone}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/50">Location</p>
                  <p className="mt-1 text-bone">{contactInfo.location}</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/50">
                  Inquiry Categories
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <span
                      key={cat}
                      className="border border-gold/10 px-3 py-1 text-xs text-bone/40"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mb-1 block text-[10px] tracking-[0.2em] uppercase text-gold/50">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gold/15 bg-transparent px-4 py-3 text-sm text-bone placeholder:text-bone/20 focus:border-gold/40 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[10px] tracking-[0.2em] uppercase text-gold/50">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gold/15 bg-transparent px-4 py-3 text-sm text-bone placeholder:text-bone/20 focus:border-gold/40 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[10px] tracking-[0.2em] uppercase text-gold/50">
                    Category
                  </label>
                  <select className="w-full border border-gold/15 bg-obsidian px-4 py-3 text-sm text-bone/60 focus:border-gold/40 focus:outline-none">
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-[10px] tracking-[0.2em] uppercase text-gold/50">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-gold/15 bg-transparent px-4 py-3 text-sm text-bone placeholder:text-bone/20 focus:border-gold/40 focus:outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-gold bg-gold py-3 font-[family-name:var(--font-cinzel)] text-xs tracking-[0.2em] uppercase text-obsidian transition-all hover:bg-gold-light"
                >
                  Send Message
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
