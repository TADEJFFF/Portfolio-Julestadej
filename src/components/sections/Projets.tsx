"use client";

import { useState } from "react";
import Image from "next/image";
import { projets } from "@/lib/data";
import { renderBold } from "@/lib/renderBold";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { Trophy, ExternalLink, Download } from "lucide-react";

const FILTERS = ["Tous", "BUT 1", "BUT 2", "BUT 3"] as const;
type Filter = (typeof FILTERS)[number];

// Icône Instagram SVG inline
function InstagramIcon({ size = 12 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

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
          <p className="font-serif text-[#444444] text-lg max-w-xl">
            Stages, SAEs et projets collectifs, de l&apos;entrepreneuriat à la
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
                {/* Header : logo + badges */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Logo rond */}
                  {projet.logo && (
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#e0e0e0] bg-white flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={projet.logo}
                        alt={projet.nom}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-display text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#f5f5f5] border border-[#b8b8b8] text-[#444444] uppercase tracking-widest">
                      {projet.but}
                    </span>
                    {projet.featured && (
                      <span className="inline-flex items-center gap-1 font-display text-[10px] font-bold px-2 py-1 rounded-full bg-[#FFD300]/10 text-[#9A7200] border border-[#FFD300]/30">
                        <Trophy size={9} />
                        Primé
                      </span>
                    )}
                  </div>
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
                  {renderBold(projet.description)}
                </p>

                {/* Résultats */}
                {projet.resultats.length > 0 && (
                  <div className="flex flex-col gap-1 mb-4">
                    {projet.resultats.map((r, i) => (
                      <div key={i} className="font-display text-xs text-[#222222] bg-[#f0f0f0] px-3 py-1.5 rounded-lg border border-[#b8b8b8]">
                        {r}
                      </div>
                    ))}
                  </div>
                )}

                {/* Compétences */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {projet.competences.map((c) => (
                    <span
                      key={c}
                      className="font-display text-[10px] font-medium px-2 py-1 rounded-md bg-[#f0f0f0] border border-[#d0d0d0] text-[#444444]"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex items-center gap-3 mt-auto flex-wrap">
                  {projet.lien && (
                    <a
                      href={projet.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-[#9A7200] hover:text-[#111111] transition-colors duration-200"
                    >
                      {projet.lien.endsWith(".pdf") ? <Download size={12} /> : <ExternalLink size={12} />}
                      {projet.id === "caroll" ? "Benchmark S10" : projet.lien.endsWith(".pdf") ? "Télécharger" : "Voir le projet"}
                    </a>
                  )}
                  {"liensExtra" in projet && (projet as { liensExtra?: { label: string; url: string }[] }).liensExtra?.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-[#9A7200] hover:text-[#111111] transition-colors duration-200"
                    >
                      <Download size={12} />
                      {l.label}
                    </a>
                  ))}
                  {"affiche" in projet && projet.affiche && (
                    <a
                      href={(projet as { affiche: string }).affiche}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-[#9A7200] hover:text-[#111111] transition-colors duration-200"
                    >
                      <ExternalLink size={12} />
                      Affiche
                    </a>
                  )}
                  {projet.instagram && (
                    <a
                      href={projet.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-[#E4405F] hover:text-[#c13584] transition-colors duration-200"
                    >
                      <InstagramIcon size={12} />
                      Instagram
                    </a>
                  )}
                </div>
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
