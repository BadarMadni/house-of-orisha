"use client"

import { PageHero } from "@/components/ui/PageHero"
import { FadeIn } from "@/components/ui/FadeIn"
import { GoldDivider } from "@/components/ui/GoldDivider"

const opportunities = [
  {
    title: "Film & Television",
    description:
      "Licensing opportunities for screen adaptations of House of Orisha books and original stories.",
  },
  {
    title: "Publishing",
    description:
      "Translation rights, international publishing partnerships, and co-publishing opportunities.",
  },
  {
    title: "Music Licensing",
    description:
      "Original House of Orisha music for film, television, advertising, and media projects.",
  },
  {
    title: "Merchandise & Brand",
    description:
      "Clothing, collectibles, art prints, and branded merchandise partnerships.",
  },
  {
    title: "Educational",
    description:
      "Academic and educational licensing for Yoruba mythology and African history content.",
  },
  {
    title: "Events & Experiences",
    description:
      "Live events, exhibitions, and immersive cultural experience collaborations.",
  },
]

export default function LicensingPage() {
  return (
    <>
      <PageHero
        title="Partnerships"
        subtitle="Licensing & Collaborations"
        image="/images/scenes/village-celebration.png"
      />

      <section className="bg-obsidian py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <FadeIn>
            <p className="mx-auto max-w-2xl text-center leading-relaxed text-bone/50">
              House of Orisha welcomes meaningful partnerships that amplify African
              storytelling, Yoruba cultural heritage, and the creative universe across
              all media and platforms.
            </p>
          </FadeIn>

          <GoldDivider className="my-16" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opp, i) => (
              <FadeIn key={opp.title} delay={i * 0.1}>
                <div className="group border border-gold/10 p-8 transition-all duration-500 hover:border-gold/30 hover:bg-gold/[0.02]">
                  <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-bold text-bone transition-colors group-hover:text-gold">
                    {opp.title}
                  </h3>
                  <div className="my-4 h-px w-8 bg-gold/20 transition-all group-hover:w-12 group-hover:bg-gold/40" />
                  <p className="text-sm leading-relaxed text-bone/40">{opp.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16 text-center">
            <p className="text-bone/40">
              For all partnership inquiries, contact us at{" "}
              <a href="mailto:info@houseoforisha.com" className="text-gold transition-colors hover:text-gold-light">
                info@houseoforisha.com
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
