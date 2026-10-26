"use client"

import Image from "next/image"
import { PageHero } from "@/components/ui/PageHero"
import { FadeIn } from "@/components/ui/FadeIn"
import { GoldDivider } from "@/components/ui/GoldDivider"

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="The Author"
        subtitle="About Oriyomi Ismail"
        image="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/author/houston-sunset.png"
      />

      <section className="bg-obsidian py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[1fr_1.5fr] items-start">
            <FadeIn direction="up">
              <div className="relative mx-auto w-full max-w-sm overflow-hidden gold-glow">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="https://pub-af61dd960fbb4f08be7eaa4526d2b2ac.r2.dev/images/author/oriyomi-ismail.png"
                    alt="Oriyomi Ismail"
                    fill
                    className="object-cover object-top"
                    sizes="400px"
                    priority
                  />
                </div>
                <div className="absolute inset-0 border border-gold/10" />
              </div>
            </FadeIn>

            <FadeIn direction="up">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold/50">
                Houston, Texas, USA
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-cinzel)] text-3xl font-bold text-bone md:text-4xl">
                Oriyomi Ismail
              </h2>
              <GoldDivider className="my-6" width="60px" />

              <div className="space-y-4 leading-relaxed text-bone/60">
                <p>
                  Oriyomi Ismail writes with clarity, discipline, and lived truth.
                  His work focuses on identity, growth, and the standards that define
                  how we live, choose, and relate to others.
                </p>
                <p>
                  Through the House of Orisha, he has created a universe rooted in
                  Yoruba mythology, African history, and cultural memory — bringing
                  ancient stories into modern storytelling across books, music, film,
                  and television.
                </p>
                <p>
                  His published works span contemporary mythological fantasy, epic
                  historical fiction, corporate crime thrillers, and personal
                  development — each carrying a commitment to powerful narratives
                  that explore power, responsibility, identity, and consequence.
                </p>
                <p>
                  Award-winning screenwriter with recognition at the World Class Film
                  Awards, Rohip International Film Festival, and the Indie Gathering
                  International Film Festival.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { number: "10+", label: "Published Works" },
                  { number: "3", label: "Film Awards" },
                  { number: "7+", label: "Original Songs" },
                ].map((stat) => (
                  <div key={stat.label} className="border border-gold/10 p-4 text-center">
                    <p className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-gold">
                      {stat.number}
                    </p>
                    <p className="mt-1 text-[10px] tracking-wider text-bone/40">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
