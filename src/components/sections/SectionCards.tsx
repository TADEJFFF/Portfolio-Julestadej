"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Route, Plane, UtensilsCrossed, FolderOpen, BarChart2 } from "lucide-react";

const cards = [
  {
    href: "/parcours",
    accent: "#9A7200",
    accentBg: "#FFD300",
    Icon: Route,
    label: "Parcours",
    titre: "Une trajectoire, pas un CV",
    texte: "De Poitiers à Paris, du lycée Victor Hugo au réseau fromager national. Trois années à construire, expérimenter, tomber et se relever.",
    cta: "Voir le parcours",
  },
  {
    href: "/erasmus",
    accent: "#2563eb",
    accentBg: "#3b82f6",
    Icon: Plane,
    label: "Erasmus+ · Sofia",
    titre: "Loin de tout ce que je connaissais",
    texte: "Sofia, Bulgarie. Quatre mois en immersion totale en anglais. 34 ECTS, 5 mentions A — et quelque chose d'indéfinissable que les notes ne mesurent pas.",
    cta: "Découvrir l'Erasmus",
  },
  {
    href: "/stage",
    accent: "#9A7200",
    accentBg: "#FFD300",
    Icon: UtensilsCrossed,
    label: "Stage FFF",
    titre: "Pas de simulation — du vrai",
    texte: "Prospection B2B, cartographie Python, présentation devant le Conseil d'Administration de la Fédération des Fromagers de France.",
    cta: "Voir le stage",
  },
  {
    href: "/projets",
    accent: "#16a34a",
    accentBg: "#22c55e",
    Icon: FolderOpen,
    label: "Projets",
    titre: "8 projets. Aucun fictif.",
    texte: "Un dispositif anti-ivresse né d'un accident, un défilé de mode organisé de A à Z, un benchmark livré à un CA national.",
    cta: "Explorer les projets",
  },
  {
    href: "/competences",
    accent: "#7c3aed",
    accentBg: "#8b5cf6",
    Icon: BarChart2,
    label: "Compétences",
    titre: "Analyser. Décider. Piloter. Entreprendre. Développer.",
    texte: "Les 5 compétences du référentiel BUT GEA GEMA — tracées depuis le premier cours jusqu'à aujourd'hui, avec les preuves qui vont avec.",
    cta: "Voir les compétences",
  },
];

// Dupliquer pour boucle infinie
const doubled = [...cards, ...cards];

export default function SectionCards() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-[#f5f5f5] py-20 overflow-hidden">

      {/* En-tête */}
      <AnimatedSection className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-[0.2em] mb-3 block">
          Explorer le portfolio
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[#111111]">
          Ce que vous allez découvrir
        </h2>
      </AnimatedSection>

      {/* Piste du carousel */}
      <div
        className="flex gap-5 pl-6"
        style={{
          width: "max-content",
          animation: "scroll-carousel 40s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {doubled.map((card, i) => (
          <Link
            key={i}
            href={card.href}
            className="group flex-shrink-0 w-80"
            tabIndex={i >= cards.length ? -1 : 0}
            aria-hidden={i >= cards.length}
          >
            <div className="h-full flex flex-col rounded-2xl border border-[#d0d0d0] bg-white overflow-hidden hover:border-[#b0b0b0] hover:-translate-y-1 transition-all duration-300 shadow-sm">

              {/* Barre accent */}
              <div className="h-1 w-full flex-shrink-0" style={{ backgroundColor: card.accentBg }} />

              <div className="flex flex-col flex-1 p-6">
                {/* Icône + label */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: card.accentBg + "20", border: `1px solid ${card.accentBg}50` }}
                  >
                    <card.Icon size={15} style={{ color: card.accent }} />
                  </div>
                  <span
                    className="font-display text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: card.accent }}
                  >
                    {card.label}
                  </span>
                </div>

                {/* Titre */}
                <h3 className="font-display font-extrabold text-base text-[#111111] leading-snug mb-3 group-hover:text-[#9A7200] transition-colors duration-200">
                  {card.titre}
                </h3>

                {/* Texte */}
                <p className="text-[#555555] text-sm leading-relaxed flex-1 mb-5" style={{ fontFamily: "var(--font-inter)" }}>
                  {card.texte}
                </p>

                {/* CTA */}
                <div
                  className="inline-flex items-center gap-1.5 font-display text-xs font-bold"
                  style={{ color: card.accent }}
                >
                  {card.cta}
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
