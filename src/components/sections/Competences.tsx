"use client";

import { competences5, skills, type Competence5 } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import {
  Search, GitFork, Compass, Lightbulb, TrendingUp,
  Wrench, Megaphone, Briefcase, Languages,
} from "lucide-react";

// ── Icônes par compétence ─────────────────────────────────────────────────────

const compIcons = [Search, GitFork, Compass, Lightbulb, TrendingUp];

// ── Carte compétence ──────────────────────────────────────────────────────────

const etapeKeys = ["but1", "but2", "but3"] as const;
const etapeLabels = ["BUT 1", "BUT 2", "BUT 3"] as const;

function CompetenceCard({ comp, Icon }: { comp: Competence5; Icon: React.ElementType }) {
  const maxN = comp.niveaux.length;

  return (
    <div
      className="rounded-2xl border bg-[#141414] overflow-hidden transition-colors duration-300 flex flex-col"
      style={{ borderColor: "#272727" }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-4 px-6 py-5 border-b border-[#1e1e1e]"
        style={{ background: `linear-gradient(135deg, ${comp.accent}0a 0%, transparent 60%)` }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: comp.accent + "18", border: `1px solid ${comp.accent}35` }}
        >
          <Icon size={18} style={{ color: comp.accent }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-extrabold text-xl text-white leading-tight">{comp.titre}</h3>
          <p className="font-display text-[10px] tracking-widest text-[#6b6b6b] mt-0.5 uppercase">
            Référentiel BUT GEA GEMA
          </p>
        </div>
        {/* Niveau atteint */}
        <div
          className="flex-shrink-0 text-center px-3 py-1.5 rounded-xl"
          style={{ backgroundColor: comp.accent + "18", border: `1px solid ${comp.accent}35` }}
        >
          <div className="font-display font-extrabold text-lg leading-none" style={{ color: comp.accent }}>
            N{comp.niveauAtteint}
          </div>
          <div className="font-display text-[9px] uppercase tracking-wider text-[#6b6b6b] mt-0.5">
            /{maxN}
          </div>
        </div>
      </div>

      {/* Niveaux officiels */}
      <div className="px-6 py-4 border-b border-[#1e1e1e]">
        <p className="font-display text-[9px] uppercase tracking-[0.2em] text-[#6b6b6b] mb-3">
          Niveaux du référentiel
        </p>
        <div className="flex flex-col gap-2">
          {comp.niveaux.map((niv) => {
            const reached = niv.n <= comp.niveauAtteint;
            const current = niv.n === comp.niveauAtteint;
            return (
              <div key={niv.n} className="flex items-start gap-2.5">
                {/* Indicateur */}
                <div
                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-[10px]"
                  style={
                    current
                      ? { backgroundColor: comp.accent, color: "#0a0a0a" }
                      : reached
                      ? { backgroundColor: comp.accent + "30", color: comp.accent, border: `1px solid ${comp.accent}50` }
                      : { backgroundColor: "#1e1e1e", color: "#3a3a3a", border: "1px solid #272727" }
                  }
                >
                  {niv.n}
                </div>
                <span
                  className="font-serif text-xs leading-relaxed"
                  style={{ color: current ? "#ffffff" : reached ? "#9a9a9a" : "#3a3a3a" }}
                >
                  {niv.titre}
                  {current && (
                    <span
                      className="ml-1.5 font-display text-[9px] uppercase tracking-wider font-bold"
                      style={{ color: comp.accent }}
                    >
                      ← niveau atteint
                    </span>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progression BUT1 → BUT2 → BUT3 */}
      <div className="px-6 py-4 border-b border-[#1e1e1e] bg-[#0f0f0f]">
        <p className="font-display text-[9px] uppercase tracking-[0.2em] text-[#6b6b6b] mb-3">
          Montée en compétence
        </p>
        <div className="flex flex-col gap-3">
          {etapeKeys.map((key, i) => (
            <div key={key} className="flex gap-3">
              {/* Dot + ligne */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-2 h-2 rounded-full mt-1"
                  style={{
                    backgroundColor: i === 2 ? comp.accent : i === 1 ? comp.accent + "60" : "#272727",
                    border: `1px solid ${i === 2 ? comp.accent : i === 1 ? comp.accent + "60" : "#3a3a3a"}`,
                  }}
                />
                {i < 2 && <div className="w-px flex-1 bg-[#1e1e1e] my-1" style={{ minHeight: 10 }} />}
              </div>
              <div className="pb-1">
                <span
                  className="font-display font-bold text-[10px] uppercase tracking-widest block mb-0.5"
                  style={{ color: i === 2 ? comp.accent : "#6b6b6b" }}
                >
                  {etapeLabels[i]}
                </span>
                <p className="font-serif text-[11px] text-[#6b6b6b] leading-relaxed">
                  {comp.progression[key]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preuves */}
      <div className="px-6 py-4 flex-1">
        <p className="font-display text-[9px] uppercase tracking-[0.2em] text-[#6b6b6b] mb-3">
          Preuves concrètes
        </p>
        <div className="flex flex-col gap-2">
          {comp.preuves.map((p, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: comp.accent + "80" }} />
              <span className="font-serif text-[11px] text-[#9a9a9a] leading-relaxed">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Grille skills techniques ──────────────────────────────────────────────────

const skillCategories = [
  { label: "Outils & Tech",    Icon: Wrench,    items: skills.outils,     color: "#FFD300" },
  { label: "Marketing & Comm", Icon: Megaphone, items: skills.marketing,  color: "#60a5fa" },
  { label: "Management",       Icon: Briefcase, items: skills.management, color: "#a78bfa" },
  { label: "Langues",          Icon: Languages, items: skills.langues,    color: "#34d399" },
];

// ── Section principale ────────────────────────────────────────────────────────

export default function Competences() {
  return (
    <section id="competences" className="section-padding bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <AnimatedSection className="mb-14">
          <span className="font-display text-xs font-bold text-[#FFD300] uppercase tracking-[0.2em] mb-3 block">
            Référentiel BUT GEA GEMA
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Compétences
          </h2>
          <p className="font-serif italic text-[#6b6b6b] text-lg max-w-2xl">
            Les 5 compétences officielles du référentiel BUT GEA GEMA — tracées depuis BUT 1 jusqu'au niveau atteint en BUT 3, avec les preuves concrètes à l'appui.
          </p>
        </AnimatedSection>

        {/* 5 compétences — grille 2+3 */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16" staggerDelay={0.08}>
          {competences5.map((comp, i) => (
            <StaggerItem key={comp.id}>
              <CompetenceCard comp={comp} Icon={compIcons[i]} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Divider skills */}
        <AnimatedSection className="mb-10">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#1e1e1e]" />
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b] px-1">
              Outils & Compétences transversales
            </span>
            <div className="flex-1 h-px bg-[#1e1e1e]" />
          </div>
        </AnimatedSection>

        {/* Grille skills */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
          {skillCategories.map(({ label, Icon, items, color }) => (
            <StaggerItem key={label}>
              <div className="rounded-2xl border border-[#272727] bg-[#141414] p-5 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
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
