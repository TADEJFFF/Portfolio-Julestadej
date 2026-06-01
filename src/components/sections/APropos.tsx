"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function APropos() {
  return (
    <section id="apropos" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Texte ── */}
          <AnimatedSection>
            <span className="font-display text-xs font-bold text-[#FFD300] uppercase tracking-[0.2em] mb-3 block">
              À propos
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-8 leading-tight">
              La décision qui a tout changé
            </h2>
            <p className="font-serif text-[#9a9a9a] text-lg leading-relaxed mb-4">
              J'ai grandi à Poitiers. Pendant longtemps, c'était mon monde. Puis à 18 ans,
              j'ai pris une décision : quitter ce que je connaissais, monter à Paris, et me
              confronter à quelque chose de plus grand que moi. Pas par hasard. Par envie
              de me dépasser.
            </p>
            <p className="font-serif text-[#6b6b6b] text-lg leading-relaxed">
              Ce portfolio retrace ces trois années de BUT GEA GEMA. Trois ans où chaque
              projet, chaque stage, chaque défi a construit la version de moi qui écrit ces
              lignes aujourd'hui.
            </p>
          </AnimatedSection>

          {/* ── Photo ── */}
          <AnimatedSection className="flex justify-center md:justify-end">
            <div className="relative w-72 h-96 rounded-2xl overflow-hidden border border-[#272727]">
              <Image
                src="/photo-jules.jpeg"
                alt="Jules TADEJ"
                fill
                className="object-cover object-top"
                sizes="288px"
              />
              {/* Coins décoratifs */}
              <div
                className="absolute top-0 left-0 w-12 h-12 rounded-br-2xl opacity-30 pointer-events-none"
                style={{ backgroundColor: "#FFD300" }}
              />
              <div
                className="absolute bottom-0 right-0 w-12 h-12 rounded-tl-2xl opacity-30 pointer-events-none"
                style={{ backgroundColor: "#FFD300" }}
              />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
