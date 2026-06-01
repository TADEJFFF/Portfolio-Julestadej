"use client";

import { useState } from "react";
import { projets } from "@/lib/data";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { Trophy, ExternalLink, Download } from "lucide-react";

const FILTERS = ["Tous", "BUT 1", "BUT 2", "BUT 3"] as const;
type Filter = (typeof FILTERS)[number];

export default function Projets() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Tous");

  const filtered =
    activeFilter === "Tous"
      ? projets
      : projets.filter((p) => p.but === activeFilter);

  return (
    <section id="projets" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête */}
        <AnimatedSection className="mb-12">
          <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-[0.2em] mb-3 block">
            BUT 1 → BUT 3
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[#111111] mb-4">
            Projets académiques
          </h2>
          <p className="font-serif italic text-[#444444] text-lg max-w-xl">
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
                    ? "bg-[#FFD300] text-[#111111] border-[#FFD300]"
                    : "border-[#b8b8b8] text-[#222222] hover:border-[#FFD300]/40 hover:text-[#111111] bg-white"
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
                    ? "border-[#FFD300]/30 bg-white hover:border-[#FFD300]/60"
                    : "border-[#b8b8b8] bg-white hover:border-[#b8b8b8]/60"
                }`}
              >
                {/* Badge BUT + featured */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-display text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#f5f5f5] border border-[#b8b8b8] text-[#444444] uppercase tracking-widest">
                    {projet.but}
                  </span>
                  {projet.featured && (
                    <span className="inline-flex items-center gap-1 font-display text-[10px] font-bold px-2 py-1 rounded-full bg-[#FFD300]/10 text-[#9A7200] border border-[#FFD300]/30">
                      <Trophy size={9} />
                      Primé
                    </span>
                  )}
                  <span className="ml-auto font-display text-[10px] text-[#444444] text-right">
                    {projet.categorie.split("·")[0]}
                  </span>
                </div>

                {/* Nom */}
                <h3 className="font-display font-bold text-lg text-[#111111] mb-2 group-hover:text-[#9A7200] transition-colors duration-200">
                  {projet.nom}
                </h3>

                {/* Catégorie */}
                <p className="font-display text-xs text-[#9A7200]/70 mb-3">{projet.categorie}</p>

                {/* Description */}
                <p className="font-serif text-sm text-[#222222] leading-relaxed mb-4 flex-1">
                  {projet.description}
                </p>

                {/* Résultats */}
                {projet.resultats.length > 0 && (
                  <div className="flex flex-col gap-1 mb-4">
                    {projet.resultats.map((r, i) => (
                      <div key={i} className="font-display text-xs text-[#e2e2e2] bg-[#f5f5f5] px-3 py-1.5 rounded-lg border border-[#b0b0b0]">
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
                      className="font-display text-[10px] font-medium px-2 py-1 rounded-md bg-[#f0f0f0] border border-[#252525] text-[#444444]"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Lien / document si disponible */}
                {projet.lien && (
                  <a
                    href={projet.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-[#9A7200] hover:text-[#111111] transition-colors duration-200 mt-auto"
                  >
                    {projet.lien.endsWith(".pdf") ? <Download size={12} /> : <ExternalLink size={12} />}
                    {projet.lien.endsWith(".pdf") ? "Télécharger" : "Voir le projet"}
                  </a>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {filtered.length === 0 && (
          <AnimatedSection className="text-center py-16 text-[#444444] font-display">
            Aucun projet pour ce filtre.
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
