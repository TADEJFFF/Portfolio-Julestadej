"use client";

import Link from "next/link";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ArrowRight, Route, Plane, UtensilsCrossed, FolderOpen, BarChart2 } from "lucide-react";

const cards = [
  {
    href: "/parcours",
    accent: "#9A7200",
    accentBg: "#FFD300",
    Icon: Route,
    label: "Parcours",
    titre: "Une trajectoire, pas un CV",
    texte:
      "De Poitiers à Paris, du lycée Victor Hugo au réseau fromager national. Trois années à construire, expérimenter, tomber et se relever.",
    cta: "Voir le parcours",
  },
  {
    href: "/erasmus",
    accent: "#2563eb",
    accentBg: "#3b82f6",
    Icon: Plane,
    label: "Erasmus+ · Sofia",
    titre: "Loin de tout ce que je connaissais",
    texte:
      "Sofia, Bulgarie. Quatre mois en immersion totale en anglais. 34 ECTS, 5 mentions A — et quelque chose d'indéfinissable que les notes ne mesurent pas.",
    cta: "Découvrir l'Erasmus",
  },
  {
    href: "/stage",
    accent: "#9A7200",
    accentBg: "#FFD300",
    Icon: UtensilsCrossed,
    label: "Stage FFF",
    titre: "Pas de simulation — du vrai",
    texte:
      "Prospection B2B, cartographie Python, présentation devant le Conseil d'Administration de la Fédération des Fromagers de France.",
    cta: "Voir le stage",
  },
  {
    href: "/projets",
    accent: "#16a34a",
    accentBg: "#22c55e",
    Icon: FolderOpen,
    label: "Projets",
    titre: "8 projets. Aucun fictif.",
    texte:
      "Un dispositif anti-ivresse né d'un accident, un défilé de mode organisé de A à Z, un benchmark livré à un CA national.",
    cta: "Explorer les projets",
  },
  {
    href: "/competences",
    accent: "#7c3aed",
    accentBg: "#8b5cf6",
    Icon: BarChart2,
    label: "Compétences",
    titre: "Analyser. Décider. Piloter. Entreprendre. Développer.",
    texte:
      "Les 5 compétences du référentiel BUT GEA GEMA — tracées depuis le premier cours jusqu'à aujourd'hui, avec les preuves qui vont avec.",
    cta: "Voir les compétences",
  },
];

export default function SectionCards() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <AnimatedSection className="mb-12 text-center">
          <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-[0.2em] mb-3 block">
            Explorer le portfolio
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[#111111]">
            Ce que vous allez découvrir
          </h2>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.1}
        >
          {cards.map((card) => (
            <StaggerItem key={card.href}>
              <Link href={card.href} className="group block h-full">
                <div className="h-full flex flex-col rounded-2xl border border-[#d0d0d0] bg-white overflow-hidden hover:border-[#b0b0b0] hover:-translate-y-1 transition-all duration-300">

                  {/* Barre accent colorée */}
                  <div
                    className="h-1 w-full flex-shrink-0"
                    style={{ backgroundColor: card.accentBg }}
                  />

                  <div className="flex flex-col flex-1 p-6">
                    {/* Icône + label */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: card.accentBg + "20", border: `1px solid ${card.accentBg}40` }}
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
                    <h3 className="font-display font-extrabold text-lg text-[#111111] leading-tight mb-3 group-hover:text-[#9A7200] transition-colors duration-200">
                      {card.titre}
                    </h3>

                    {/* Texte narratif */}
                    <p className="font-serif italic text-[#444444] text-sm leading-relaxed flex-1 mb-5">
                      {card.texte}
                    </p>

                    {/* CTA */}
                    <div
                      className="inline-flex items-center gap-1.5 font-display text-xs font-bold mt-auto"
                      style={{ color: card.accent }}
                    >
                      {card.cta}
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>

                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
