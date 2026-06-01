"use client";

import { competences5, skills, type Competence5, type Niveau } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import {
  Search, GitFork, Compass, Lightbulb, TrendingUp,
  Wrench, Megaphone, Briefcase, Languages,
} from "lucide-react";

// ── Config badges maîtrise ────────────────────────────────────────────────────

const maitriseCfg: Record<Niveau, { label: string; color: string; symbol: string }> = {
  apprentissage: { label: "En apprentissage", color: "#4b4b4b", symbol: "○" },
  acquis:        { label: "Acquis",           color: "#FFD300", symbol: "◑" },
  maitrise:      { label: "Maîtrisé",         color: "#34d399", symbol: "●" },
};

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
      {/* ── Header ── */}
      <div
        className="px-6 py-5 border-b border-[#1e1e1e]"
        style={{ background: `linear-gradient(135deg, ${comp.accent}0a 0%, transparent 60%)` }}
      >
        <div className="flex items-center justify-between mb-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: comp.accent + "18", border: `1px solid ${comp.accent}35` }}
          >
            <Icon size={16} style={{ color: comp.accent }} />
          </div>
          <div
            className="flex items-baseline gap-1 px-3 py-1.5 rounded-xl"
            style={{ backgroundColor: comp.accent + "18", border: `1px solid ${comp.accent}35` }}
          >
            <span className="font-display font-extrabold text-base leading-none" style={{ color: comp.accent }}>
              N{comp.niveauAtteint}
            </span>
            <span className="font-display text-[9px] uppercase tracking-wider text-[#888888]">
              /{maxN}
            </span>
          </div>
        </div>
        <h3 className="font-display font-extrabold text-2xl text-white leading-tight">{comp.titre}</h3>
        <p className="font-display text-[10px] tracking-widest text-[#888888] mt-1 uppercase">
          Référentiel BUT GEA GEMA
        </p>
      </div>

      {/* ── Niveaux + ACs avec badges ── */}
      <div className="px-6 py-4 border-b border-[#1e1e1e]">
        <p className="font-display text-[9px] uppercase tracking-[0.2em] text-[#888888] mb-4">
          Apprentissages critiques
        </p>
        <div className="flex flex-col gap-4">
          {comp.niveaux.map((niv) => {
            const reached = niv.n <= comp.niveauAtteint;
            const current = niv.n === comp.niveauAtteint;
            return (
              <div key={niv.n}>
                {/* Label du niveau */}
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center font-display font-bold text-[10px] flex-shrink-0"
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
                    className="font-display font-semibold text-[11px] leading-tight"
                    style={{ color: current ? "#ffffff" : reached ? "#b0b0b0" : "#3a3a3a" }}
                  >
                    {niv.titre}
                    {current && (
                      <span className="ml-1.5 font-bold text-[9px] uppercase tracking-wider" style={{ color: comp.accent }}>
                        ← atteint
                      </span>
                    )}
                  </span>
                </div>
                {/* ACs avec badge de maîtrise */}
                <div className="flex flex-col gap-1.5 pl-7">
                  {niv.acs.map((ac) => {
                    const cfg = maitriseCfg[ac.maitrise];
                    return (
                      <div key={ac.code} className="flex items-start gap-2">
                        <span
                          className="text-[12px] leading-none mt-0.5 flex-shrink-0 font-bold"
                          style={{ color: cfg.color }}
                          title={cfg.label}
                        >
                          {cfg.symbol}
                        </span>
                        <span className="font-serif text-[11px] text-[#888888] leading-relaxed">
                          {ac.titre}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Progression BUT1 → BUT2 → BUT3 ── */}
      <div className="px-6 py-4 border-b border-[#1e1e1e] bg-[#0f0f0f]">
        <p className="font-display text-[9px] uppercase tracking-[0.2em] text-[#888888] mb-3">
          Montée en compétence
        </p>
        <div className="flex flex-col gap-3">
          {etapeKeys.map((key, i) => (
            <div key={key} className="flex gap-3">
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
                  style={{ color: i === 2 ? comp.accent : "#888888" }}
                >
                  {etapeLabels[i]}
                </span>
                <p className="font-serif text-[11px] text-[#888888] leading-relaxed">
                  {comp.progression[key]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Preuves ── */}
      <div className="px-6 py-4 flex-1">
        <p className="font-display text-[9px] uppercase tracking-[0.2em] text-[#888888] mb-3">
          Preuves concrètes
        </p>
        <div className="flex flex-col gap-2">
          {comp.preuves.map((p, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: comp.accent + "80" }} />
              <span className="font-serif text-[11px] text-[#b0b0b0] leading-relaxed">{p}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ── Légende ───────────────────────────────────────────────────────────────────

function Legende() {
  const niveaux: Niveau[] = ["maitrise", "acquis", "apprentissage"];
  return (
    <div className="flex flex-wrap items-center gap-3">
      {niveaux.map((n) => {
        const cfg = maitriseCfg[n];
        return (
          <span key={n} className="inline-flex items-center gap-1.5 font-display text-xs" style={{ color: cfg.color }}>
            <span className="text-sm font-bold">{cfg.symbol}</span>
            {cfg.label}
          </span>
        );
      })}
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
          <p className="font-serif italic text-[#888888] text-lg max-w-2xl mb-5">
            Les 5 compétences officielles du référentiel BUT GEA GEMA — avec chaque apprentissage critique évalué honnêtement, de BUT 1 à BUT 3.
          </p>
          <Legende />
        </AnimatedSection>

        {/* 5 compétences */}
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
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#888888] px-1">
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
                      className="font-display text-xs text-[#b0b0b0] py-1.5 px-2 rounded-md bg-[#0c0c0c] border border-[#1e1e1e]"
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
