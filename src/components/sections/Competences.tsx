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

// ── Logos outils (SVG inline + image locale) ─────────────────────────────────

const toolLogos: Record<string, React.ReactNode> = {
  "Pack Office": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="#D83B01">
      <path d="M21.53 4.306v15.363q0 .807-.472 1.433-.472.627-1.253.85l-6.888 1.974q-.136.037-.29.055-.156.019-.293.019-.396 0-.72-.105-.321-.106-.656-.292l-4.505-2.544q-.248-.137-.391-.366-.143-.23-.143-.515 0-.434.304-.738.304-.305.739-.305h5.831V4.964l-4.38 1.563q-.533.187-.856.658-.322.472-.322 1.03v8.078q0 .496-.248.912-.25.416-.683.651l-2.072 1.13q-.286.148-.571.148-.497 0-.844-.347-.348-.347-.348-.844V6.563q0-.62.33-1.19.328-.571.874-.881L11.07.285q.248-.136.534-.21.285-.075.57-.075.211 0 .38.031.166.031.364.093l6.888 1.899q.384.11.7.329.317.217.547.52.23.305.353.67.125.367.125.764zm-1.588 15.363V4.306q0-.273-.16-.478-.163-.204-.423-.28l-3.388-.93q-.397-.111-.794-.23-.397-.117-.794-.216v19.68l4.976-1.427q.26-.074.422-.28.161-.204.161-.477z"/>
    </svg>
  ),
  "Canva": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="#00C4CC">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"/>
    </svg>
  ),
  "Power BI": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="#F2C811">
      <path d="M4 18V6h2v12H4zm4-4V8h2v6H8zm4-2v-4h2v4h-2zm4-6v12h-2V6h2zm4 4v8h-2v-8h2z"/>
    </svg>
  ),
  "Python": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="#3776AB">
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.868s-.109-3.402 3.35-3.402h5.766s3.24.052 3.24-3.13V3.13S18.28 0 11.914 0zm-3.2 1.812a1.042 1.042 0 1 1 0 2.083 1.042 1.042 0 0 1 0-2.083zM24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.031v2.868s.109 3.402-3.35 3.402H9.45s-3.24-.052-3.24 3.13v5.402S5.72 24 12.086 24c6.18 0 5.8-2.656 5.8-2.656l-.007-2.752H12.065v-.826h8.121S24 18.211 24 12.031zm-8.714 10.157a1.042 1.042 0 1 1 0-2.083 1.042 1.042 0 0 1 0 2.083z"/>
    </svg>
  ),
  "Logiciel 4D": (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logos/logo-4d.png" alt="4D" style={{ width: 16, height: 16 }} className="flex-shrink-0 object-contain" />
  ),
  "Instagram · TikTok · LinkedIn": (
    <div className="flex gap-1 flex-shrink-0">
      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="#000000"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </div>
  ),
};

function SkillBadge({ item }: { item: string }) {
  const logo = toolLogos[item];
  return (
    <div className="flex items-center gap-2 font-display text-xs text-[#222222] py-1.5 px-2.5 rounded-md bg-[#f5f5f5] border border-[#b0b0b0] min-w-0">
      {logo && <span className="flex-shrink-0">{logo}</span>}
      <span className="truncate">{item}</span>
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
