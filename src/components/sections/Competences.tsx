"use client";

import { competencesGEA, skills, type CompetenceGEA, type Niveau } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { BarChart3, Rocket, Users, TrendingUp, Lightbulb, Heart, Wrench, Megaphone, Briefcase, Languages } from "lucide-react";

// ── Niveau badge ──────────────────────────────────────────────────────────────

const niveauConfig: Record<Niveau, { label: string; color: string; bg: string; border: string; symbol: string }> = {
  apprentissage: { label: "En apprentissage", color: "#6b6b6b", bg: "#6b6b6b18", border: "#6b6b6b40", symbol: "○" },
  acquis:        { label: "Acquis",           color: "#FFD300", bg: "#FFD30018", border: "#FFD30040", symbol: "◑" },
  maitrise:      { label: "Maîtrisé",         color: "#34d399", bg: "#34d39918", border: "#34d39940", symbol: "●" },
};

function NiveauBadge({ niveau }: { niveau: Niveau }) {
  const cfg = niveauConfig[niveau];
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0"
      style={{ color: cfg.color, backgroundColor: cfg.bg, border: `1px solid ${cfg.border}` }}
    >
      <span className="text-[11px] leading-none">{cfg.symbol}</span>
      {cfg.label}
    </span>
  );
}

// ── Carte compétence ──────────────────────────────────────────────────────────

const etapeLabels = ["BUT 1", "BUT 2", "BUT 3"] as const;
const etapeKeys = ["but1", "but2", "but3"] as const;

function CompetenceCard({ comp, Icon }: { comp: CompetenceGEA; Icon: React.ElementType }) {
  return (
    <div className="rounded-2xl border border-[#272727] bg-[#141414] overflow-hidden hover:border-[#FFD300]/20 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-5 border-b border-[#1e1e1e]">
        <span className="font-display font-extrabold text-5xl text-[#FFD300]/12 leading-none select-none w-14 flex-shrink-0">
          {comp.numero}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-extrabold text-xl text-white leading-tight">{comp.titre}</h3>
          <p className="font-display text-[11px] tracking-wider text-[#6b6b6b] mt-0.5">{comp.tagline}</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#FFD300]/10 border border-[#FFD300]/20 flex items-center justify-center flex-shrink-0">
          <Icon size={17} className="text-[#FFD300]" />
        </div>
      </div>

      {/* Progression BUT1 → BUT2 → BUT3 */}
      <div className="px-6 py-5 border-b border-[#1e1e1e] bg-[#0f0f0f]">
        <p className="font-display text-[9px] uppercase tracking-[0.2em] text-[#6b6b6b] mb-4">
          Montée en compétence
        </p>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 relative">
          {/* Ligne connecteur */}
          <div className="hidden md:block absolute top-[10px] left-[calc(16.66%-8px)] right-[calc(16.66%-8px)] h-px bg-[#272727]" />
          {etapeKeys.map((key, i) => (
            <div key={key} className="relative flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 relative z-10"
                  style={{
                    backgroundColor: i === 2 ? "#FFD300" : i === 1 ? "#FFD30060" : "#272727",
                    border: `1px solid ${i === 2 ? "#FFD300" : i === 1 ? "#FFD30060" : "#3a3a3a"}`,
                  }}
                />
                <span
                  className="font-display font-bold text-[10px] uppercase tracking-widest"
                  style={{ color: i === 2 ? "#FFD300" : "#9a9a9a" }}
                >
                  {etapeLabels[i]}
                </span>
              </div>
              <p className="text-[11px] text-[#6b6b6b] font-serif leading-relaxed pl-3.5">
                {comp.progression[key]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sous-compétences */}
      <div className="px-6 py-5">
        <p className="font-display text-[9px] uppercase tracking-[0.2em] text-[#6b6b6b] mb-4">
          Sous-compétences
        </p>
        <div className="flex flex-col gap-5">
          {comp.sousCompetences.map((sc, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <NiveauBadge niveau={sc.niveau} />
                <span className="font-display font-semibold text-sm text-white leading-tight">{sc.titre}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pl-1">
                {sc.preuves.map((p, j) => (
                  <span
                    key={j}
                    className="text-[11px] text-[#9a9a9a] font-serif bg-[#0c0c0c] border border-[#1e1e1e] rounded-md px-2.5 py-1 leading-relaxed"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Légende niveaux ───────────────────────────────────────────────────────────

function Legende() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {(["apprentissage", "acquis", "maitrise"] as Niveau[]).map((n) => {
        const cfg = niveauConfig[n];
        return (
          <span
            key={n}
            className="inline-flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{ color: cfg.color, backgroundColor: cfg.bg, border: `1px solid ${cfg.border}` }}
          >
            <span className="text-[11px] leading-none">{cfg.symbol}</span>
            {cfg.label}
          </span>
        );
      })}
    </div>
  );
}

// ── Bloc séparateur ───────────────────────────────────────────────────────────

function BlocLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 h-px bg-[#1e1e1e]" />
      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b] px-1">{label}</span>
      <div className="flex-1 h-px bg-[#1e1e1e]" />
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

const troncIcons = [BarChart3, Rocket, Users];
const gemaIcons  = [TrendingUp, Lightbulb, Heart];

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
          <p className="font-serif italic text-[#6b6b6b] text-lg max-w-2xl mb-6">
            Trois ans de BUT GEA GEMA — du doute de BUT 1 à la présentation devant le Conseil d'Administration de la FFF. Chaque compétence, tracée étape par étape.
          </p>
          <Legende />
        </AnimatedSection>

        {/* ── Tronc Commun ── */}
        <AnimatedSection className="mb-8">
          <BlocLabel label="Tronc Commun — Gérer · Entreprendre · Manager" />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-5 mb-14" staggerDelay={0.1}>
          {competencesGEA.tronc.map((comp, i) => (
            <StaggerItem key={comp.numero}>
              <CompetenceCard comp={comp} Icon={troncIcons[i]} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── GEMA ── */}
        <AnimatedSection className="mb-8">
          <BlocLabel label="Parcours GEMA — Spécialisation" />
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-5 mb-16" staggerDelay={0.1}>
          {competencesGEA.gema.map((comp, i) => (
            <StaggerItem key={comp.numero}>
              <CompetenceCard comp={comp} Icon={gemaIcons[i]} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Compétences techniques ── */}
        <AnimatedSection className="mb-10">
          <BlocLabel label="Outils & Compétences transversales" />
        </AnimatedSection>

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
