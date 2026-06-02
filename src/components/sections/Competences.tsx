"use client";

import { useState } from "react";
import { competences5, skills, type Competence5, type Niveau } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import {
  Search, GitFork, Compass, Lightbulb, TrendingUp,
  Wrench, Megaphone, Briefcase, Languages,
} from "lucide-react";

// ── Config badges maîtrise ────────────────────────────────────────────────────

const maitriseCfg: Record<Niveau, { label: string; color: string; symbol: string }> = {
  apprentissage: { label: "En apprentissage", color: "#444444", symbol: "○" },
  acquis:        { label: "Acquis",           color: "#FFD300", symbol: "◑" },
  maitrise:      { label: "Maîtrisé",         color: "#34d399", symbol: "●" },
};

const compIcons = [Search, GitFork, Compass, Lightbulb, TrendingUp];

const etapeKeys   = ["but1", "but2", "but3"] as const;
const etapeLabels = ["BUT 1", "BUT 2", "BUT 3"] as const;

// ── Contenu de la compétence active ──────────────────────────────────────────

function CompetenceDetail({ comp, Icon }: { comp: Competence5; Icon: React.ElementType }) {
  const maxN = comp.niveaux.length;

  return (
    <div className="rounded-2xl border border-[#b8b8b8] bg-white overflow-hidden w-full">
      <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#cccccc]">

        {/* ── Colonne 1 : Apprentissages critiques ── */}
        <div className="lg:col-span-2 p-7">
          {/* Ligne 1 : icône + badge */}
          <div className="flex items-center justify-between mb-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: comp.accent + "18", border: `1px solid ${comp.accent}35` }}
            >
              <Icon size={16} style={{ color: comp.accent }} />
            </div>
            <div
              className="flex items-baseline gap-1 px-3 py-1.5 rounded-xl flex-shrink-0"
              style={{ backgroundColor: comp.accent + "18", border: `1px solid ${comp.accent}35` }}
            >
              <span className="font-display font-extrabold text-base leading-none" style={{ color: comp.accent }}>
                N{comp.niveauAtteint}
              </span>
              <span className="font-display text-[9px] uppercase tracking-wider text-[#444444]">/{maxN}</span>
            </div>
          </div>
          {/* Ligne 2 : titre */}
          <div className="mb-6">
            <h3 className="font-display font-extrabold text-2xl text-[#111111] leading-tight">{comp.titre}</h3>
            <p className="font-display text-[10px] tracking-widest text-[#444444] uppercase mt-1">Référentiel BUT GEA GEMA</p>
          </div>

          {/* Légende inline */}
          <div className="flex flex-wrap gap-4 mb-6">
            {(["maitrise", "acquis", "apprentissage"] as Niveau[]).map((n) => (
              <span key={n} className="inline-flex items-center gap-1.5 font-display text-xs" style={{ color: maitriseCfg[n].color }}>
                <span className="font-bold">{maitriseCfg[n].symbol}</span>
                {maitriseCfg[n].label}
              </span>
            ))}
          </div>

          {/* Niveaux + ACs */}
          <div className="flex flex-col gap-6">
            {comp.niveaux.map((niv) => {
              const reached = niv.n <= comp.niveauAtteint;
              const current = niv.n === comp.niveauAtteint;
              return (
                <div key={niv.n}>
                  {/* Header niveau */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center font-display font-bold text-[11px] flex-shrink-0"
                      style={
                        current
                          ? { backgroundColor: comp.accent, color: "#0a0a0a" }
                          : reached
                          ? { backgroundColor: comp.accent + "30", color: comp.accent, border: `1px solid ${comp.accent}50` }
                          : { backgroundColor: "#cccccc", color: "#444444", border: "1px solid #2a2a2a" }
                      }
                    >
                      {niv.n}
                    </div>
                    <span
                      className="font-display font-semibold text-sm"
                      style={{ color: current ? "#111111" : reached ? "#333333" : "#aaaaaa" }}
                    >
                      {niv.titre}
                      {current && (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: comp.accent }}>
                          ← niveau atteint
                        </span>
                      )}
                    </span>
                  </div>

                  {/* ACs */}
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pl-8 min-w-0">
                    {niv.acs.map((ac) => {
                      const cfg = maitriseCfg[ac.maitrise];
                      return (
                        <div key={ac.code} className="flex items-start gap-2">
                          <span
                            className="text-[13px] leading-none mt-0.5 flex-shrink-0 font-bold"
                            style={{ color: cfg.color }}
                            title={cfg.label}
                          >
                            {cfg.symbol}
                          </span>
                          <span className="font-serif text-[13px] text-[#222222] leading-relaxed break-words min-w-0">
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

        {/* ── Colonne 2 : Progression + Preuves ── */}
        <div className="p-7 flex flex-col gap-7">

          {/* Progression */}
          <div>
            <p className="font-display text-[9px] uppercase tracking-[0.2em] text-[#444444] mb-4">
              Montée en compétence
            </p>
            <div className="flex flex-col gap-4">
              {etapeKeys.map((key, i) => (
                <div key={key} className="flex gap-3">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-2 h-2 rounded-full mt-1"
                      style={{
                        backgroundColor: i === 2 ? comp.accent : i === 1 ? comp.accent + "60" : "#b8b8b8",
                        border: `1px solid ${i === 2 ? comp.accent : i === 1 ? comp.accent + "60" : "#a0a0a0"}`,
                      }}
                    />
                    {i < 2 && <div className="w-px flex-1 bg-[#1e1e1e] my-1" style={{ minHeight: 12 }} />}
                  </div>
                  <div className="pb-1">
                    <span
                      className="font-display font-bold text-[10px] uppercase tracking-widest block mb-1"
                      style={{ color: i === 2 ? comp.accent : "#444444" }}
                    >
                      {etapeLabels[i]}
                    </span>
                    <p className="font-serif text-[13px] text-[#222222] leading-relaxed">
                      {comp.progression[key]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preuves */}
          <div>
            <p className="font-display text-[9px] uppercase tracking-[0.2em] text-[#444444] mb-4">
              Preuves concrètes
            </p>
            <div className="flex flex-col gap-3">
              {comp.preuves.map((p, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: comp.accent + "80" }} />
                  <span className="font-serif text-[13px] text-[#222222] leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Logos outils ─────────────────────────────────────────────────────────────

const toolLogos: Record<string, string> = {
  "Pack Office":  "https://cdn.simpleicons.org/microsoftoffice/D83B01",
  "Canva":        "https://cdn.simpleicons.org/canva/00C4CC",
  "Power BI":     "https://cdn.simpleicons.org/powerbi/F2C811",
  "Python":       "https://cdn.simpleicons.org/python/3776AB",
  "Logiciel 4D":  "/logos/4d-logo.png",
  "Instagram · TikTok · LinkedIn": "multi-social",
  "Instagram":    "https://cdn.simpleicons.org/instagram/E4405F",
  "TikTok":       "https://cdn.simpleicons.org/tiktok/000000",
  "LinkedIn":     "https://cdn.simpleicons.org/linkedin/0A66C2",
};

function SkillBadge({ item }: { item: string }) {
  const logo = toolLogos[item];
  return (
    <div className="flex items-center gap-2 font-display text-xs text-[#222222] py-1.5 px-2.5 rounded-md bg-[#f5f5f5] border border-[#b0b0b0]">
      {logo && logo !== "multi-social" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={item} width={16} height={16} className="flex-shrink-0 object-contain" />
      )}
      {logo === "multi-social" && (
        <div className="flex gap-1 flex-shrink-0">
          {["instagram", "tiktok", "linkedin"].map((s) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={s} src={`https://cdn.simpleicons.org/${s}`} alt={s} width={12} height={12} className="object-contain" />
          ))}
        </div>
      )}
      {item}
    </div>
  );
}

// ── Grille skills ─────────────────────────────────────────────────────────────

const skillCategories = [
  { label: "Outils & Tech",    Icon: Wrench,    items: skills.outils,     color: "#FFD300" },
  { label: "Marketing & Comm", Icon: Megaphone, items: skills.marketing,  color: "#60a5fa" },
  { label: "Management",       Icon: Briefcase, items: skills.management, color: "#a78bfa" },
  { label: "Langues",          Icon: Languages, items: skills.langues,    color: "#34d399" },
];

// ── Section principale ────────────────────────────────────────────────────────

export default function Competences() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = competences5[activeIndex];
  const ActiveIcon = compIcons[activeIndex];

  return (
    <section id="competences" className="section-padding bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <AnimatedSection className="mb-12">
          <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-[0.2em] mb-3 block">
            Référentiel BUT GEA GEMA
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[#111111] mb-4">
            Compétences
          </h2>
          <p className="font-serif italic text-[#444444] text-lg max-w-2xl">
            Les 5 compétences officielles du référentiel BUT GEA GEMA — avec chaque apprentissage critique évalué honnêtement, de BUT 1 à BUT 3.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection className="mb-6">
          <div className="flex flex-wrap gap-2">
            {competences5.map((comp, i) => {
              const Icon = compIcons[i];
              const isActive = i === activeIndex;
              return (
                <button
                  key={comp.id}
                  onClick={() => setActiveIndex(i)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-200"
                  style={
                    isActive
                      ? {
                          backgroundColor: comp.accent + "20",
                          border: `1px solid ${comp.accent}60`,
                          color: comp.accent,
                        }
                      : {
                          backgroundColor: "#ffffff",
                          border: "1px solid #272727",
                          color: "#444444",
                        }
                  }
                >
                  <Icon size={14} />
                  {comp.titre}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Contenu actif */}
        <AnimatedSection className="mb-16">
          <CompetenceDetail key={active.id} comp={active} Icon={ActiveIcon} />
        </AnimatedSection>

        {/* Divider */}
        <AnimatedSection className="mb-10">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#1e1e1e]" />
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#444444] px-1">
              Outils & Compétences transversales
            </span>
            <div className="flex-1 h-px bg-[#1e1e1e]" />
          </div>
        </AnimatedSection>

        {/* Grille skills */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
          {skillCategories.map(({ label, Icon, items, color }) => (
            <StaggerItem key={label}>
              <div className="rounded-2xl border border-[#b8b8b8] bg-white p-5 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: color + "18", border: `1px solid ${color}30` }}
                  >
                    <Icon size={13} style={{ color }} />
                  </div>
                  <span className="font-display font-bold text-sm text-[#111111]">{label}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {items.map((item) => (
                    <SkillBadge key={item} item={item} />
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
