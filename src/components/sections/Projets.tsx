"use client";

import { useState } from "react";
import { projets } from "@/lib/data";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { Trophy, ExternalLink } from "lucide-react";

const FILTERS = ["Tous", "BUT 1", "BUT 2", "BUT 3"] as const;
type Filter = (typeof FILTERS)[number];

export default function Projets() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Tous");

  const filtered =
    activeFilter === "Tous"
      ? projets
      : projets.filter((p) => p.but === activeFilter);

  return (
    <section id="projets" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête */}
        <AnimatedSection className="mb-12">
          <span className="font-display text-xs font-bold text-[#FFD300] uppercase tracking-[0.2em] mb-3 block">
            BUT 1 → BUT 3
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Projets académiques
          </h2>
          <p className="font-serif italic text-[#6b6b6b] text-lg max-w-xl">
            Stages, SAEs et projets collectifs — de l&apos;entrepreneuriat à la
            communication corporate.
          </p>
        </AnimatedSection>

        {/* Filtres */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-display text-sm font-medium px-5 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                  activeFilter === f
                    ? "bg-[#FFD300] text-[#0c0c0c] border-[#FFD300]"
                    : "border-[#272727] text-[#9a9a9a] hover:border-[#FFD300]/40 hover:text-white bg-[#141414]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grille de projets */}
        <StaggerContainer
          key={activeFilter}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}
        >
          {filtered.map((projet) => (
            <StaggerItem key={projet.id}>
              <div
                className={`group relative h-full flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  projet.featured
                    ? "border-[#FFD300]/30 bg-[#141414] hover:border-[#FFD300]/60"
                    : "border-[#272727] bg-[#141414] hover:border-[#272727]/60"
                }`}
              >
                {/* Badge BUT + featured */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-display text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0c0c0c] border border-[#272727] text-[#6b6b6b] uppercase tracking-widest">
                    {projet.but}
                  </span>
                  {projet.featured && (
                    <span className="inline-flex items-center gap-1 font-display text-[10px] font-bold px-2 py-1 rounded-full bg-[#FFD300]/10 text-[#FFD300] border border-[#FFD300]/30">
                      <Trophy size={9} />
                      Primé
                    </span>
                  )}
                  <span className="ml-auto font-display text-[10px] text-[#6b6b6b] text-right">
                    {projet.categorie.split("·")[0]}
                  </span>
                </div>

                {/* Nom */}
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#FFD300] transition-colors duration-200">
                  {projet.nom}
                </h3>

                {/* Catégorie */}
                <p className="font-display text-xs text-[#FFD300]/70 mb-3">{projet.categorie}</p>

                {/* Description */}
                <p className="font-serif text-sm text-[#9a9a9a] leading-relaxed mb-4 flex-1">
                  {projet.description}
                </p>

                {/* Résultats */}
                {projet.resultats.length > 0 && (
                  <div className="flex flex-col gap-1 mb-4">
                    {projet.resultats.map((r, i) => (
                      <div key={i} className="font-display text-xs text-[#e2e2e2] bg-[#0c0c0c] px-3 py-1.5 rounded-lg border border-[#1e1e1e]">
                        {r}
                      </div>
                    ))}
                  </div>
                )}

                {/* Compétences */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {projet.competences.map((c) => (
                    <span
                      key={c}
                      className="font-display text-[10px] font-medium px-2 py-1 rounded-md bg-[#1a1a1a] border border-[#252525] text-[#6b6b6b]"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Lien externe si disponible */}
                {projet.lien && (
                  <a
                    href={projet.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-[#FFD300] hover:text-white transition-colors duration-200 mt-auto"
                  >
                    <ExternalLink size={12} />
                    Voir le projet
                  </a>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {filtered.length === 0 && (
          <AnimatedSection className="text-center py-16 text-[#6b6b6b] font-display">
            Aucun projet pour ce filtre.
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
