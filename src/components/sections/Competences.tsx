"use client";

import { competencesBUT, skills } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { BarChart3, Rocket, Users, Wrench, Megaphone, Briefcase, Languages } from "lucide-react";

const skillIcons = [BarChart3, Rocket, Users];

const skillCategories = [
  { label: "Outils & Tech", icon: Wrench, items: skills.outils, color: "#FFD300" },
  { label: "Marketing & Comm", icon: Megaphone, items: skills.marketing, color: "#60a5fa" },
  { label: "Management", icon: Briefcase, items: skills.management, color: "#a78bfa" },
  { label: "Langues", icon: Languages, items: skills.langues, color: "#34d399" },
];

export default function Competences() {
  return (
    <section id="competences" className="section-padding bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête */}
        <AnimatedSection className="mb-14">
          <span className="font-display text-xs font-bold text-[#FFD300] uppercase tracking-[0.2em] mb-3 block">
            Référentiel BUT GEA
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Compétences
          </h2>
          <p className="font-serif italic text-[#6b6b6b] text-lg max-w-xl">
            Les trois compétences du référentiel BUT GEA, illustrées par des
            preuves concrètes issues de mon parcours.
          </p>
        </AnimatedSection>

        {/* 3 compétences BUT GEA */}
        <StaggerContainer className="grid md:grid-cols-3 gap-5 mb-16" staggerDelay={0.12}>
          {competencesBUT.map((comp, i) => {
            const Icon = skillIcons[i];
            return (
              <StaggerItem key={comp.numero}>
                <div className="group h-full rounded-2xl border border-[#272727] bg-[#141414] p-6 hover:border-[#FFD300]/30 transition-all duration-300">
                  {/* Numéro + icône */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display font-extrabold text-5xl text-[#FFD300]/15 leading-none">
                      {comp.numero}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FFD300]/10 border border-[#FFD300]/20 flex items-center justify-center group-hover:bg-[#FFD300]/15 transition-colors duration-300">
                      <Icon size={18} className="text-[#FFD300]" />
                    </div>
                  </div>

                  {/* Titre */}
                  <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                    {comp.titre}
                  </h3>

                  {/* Description */}
                  <p className="font-serif text-sm text-[#6b6b6b] leading-relaxed mb-5 italic">
                    {comp.description}
                  </p>

                  {/* Preuves */}
                  <div className="flex flex-col gap-2">
                    <span className="font-display text-[10px] uppercase tracking-widest text-[#6b6b6b] mb-1">
                      Preuves concrètes
                    </span>
                    {comp.preuves.map((preuve, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-2 text-xs text-[#9a9a9a] font-serif"
                      >
                        <span className="mt-1 flex-shrink-0 w-1 h-1 rounded-full bg-[#FFD300]/60" />
                        {preuve}
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Divider */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#1e1e1e]" />
            <span className="font-display text-xs uppercase tracking-widest text-[#6b6b6b]">
              Compétences techniques
            </span>
            <div className="flex-1 h-px bg-[#1e1e1e]" />
          </div>
        </AnimatedSection>

        {/* Grille skills */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
          {skillCategories.map(({ label, icon: Icon, items, color }) => (
            <StaggerItem key={label}>
              <div className="rounded-2xl border border-[#272727] bg-[#141414] p-5 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: color + "18", border: `1px solid ${color}30` }}
                  >
                    <Icon size={13} style={{ color }} />
                  </div>
                  <span className="font-display font-bold text-sm text-white">{label}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="font-display text-xs text-[#9a9a9a] py-1.5 px-2 rounded-md bg-[#0c0c0c] border border-[#1e1e1e]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
