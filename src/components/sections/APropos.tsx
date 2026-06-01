"use client";

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
              confronter à quelque chose de plus grand que moi. Pas par hasard — par envie
              de me dépasser.
            </p>
            <p className="font-serif text-[#6b6b6b] text-lg leading-relaxed">
              Ce portfolio retrace ces trois années de BUT GEA GEMA. Trois ans où chaque
              projet, chaque stage, chaque défi a construit la version de moi qui écrit ces
              lignes aujourd'hui.
            </p>
          </AnimatedSection>

          {/* ── Photo placeholder ── */}
          <AnimatedSection className="flex justify-center md:justify-end">
            <div className="relative w-72 h-96 rounded-2xl border-2 border-dashed border-[#272727] bg-[#141414] flex flex-col items-center justify-center gap-3 overflow-hidden">
              {/* Coin décoratif accent */}
              <div
                className="absolute top-0 left-0 w-16 h-16 rounded-br-3xl opacity-20"
                style={{ backgroundColor: "#FFD300" }}
              />
              <div
                className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl opacity-20"
                style={{ backgroundColor: "#FFD300" }}
              />
              {/* Icône placeholder */}
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#3a3a3a] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3a3a3a" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="font-display text-xs text-[#3a3a3a] uppercase tracking-widest text-center px-6">
                Ta photo ici
              </span>
              <span className="font-serif text-[10px] text-[#272727] text-center px-8">
                Format portrait recommandé
              </span>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
