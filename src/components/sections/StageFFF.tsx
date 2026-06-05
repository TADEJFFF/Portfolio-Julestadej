"use client";

import { stageFFF } from "@/lib/data";
import { renderBold } from "@/lib/renderBold";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Building2, MapPin, User2, Calendar, CheckSquare, Package, Wrench, Map, ExternalLink } from "lucide-react";

export default function StageFFF() {
  return (
    <section id="stage" className="section-padding bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête */}
        <AnimatedSection className="mb-14">
          <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-[0.2em] mb-3 block">
            Stage · Avril – Juillet 2026
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[#111111] mb-4">
            UFIDF / Fédération des Fromagers de France
          </h2>
          <p className="font-serif text-[#444444] text-lg max-w-2xl">
            Développement commercial B2B et animation
            du réseau fromager d&apos;Île-de-France.
          </p>
        </AnimatedSection>

        {/* Carte info générale */}
        <AnimatedSection className="mb-10">
          <div className="rounded-2xl border border-[#FFD300]/20 bg-white p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Building2,
                  label: "Organisation",
                  value: `${stageFFF.organisationAbr} + ${stageFFF.fedeAbr}`,
                  sub: stageFFF.repartition,
                },
                {
                  icon: MapPin,
                  label: "Lieu",
                  value: stageFFF.lieu,
                  sub: "75001 Paris",
                },
                {
                  icon: User2,
                  label: "Tuteur",
                  value: stageFFF.tuteur,
                  sub: "Directeur UFIDF",
                },
                {
                  icon: Calendar,
                  label: "Période",
                  value: stageFFF.periode,
                  sub: (
                    <span className="inline-flex items-center gap-1 text-[#9A7200] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD300] animate-pulse" />
                      {stageFFF.statut}
                    </span>
                  ),
                },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon size={13} className="text-[#9A7200]/60" />
                    <span className="font-display text-[10px] uppercase tracking-widest text-[#444444]">
                      {label}
                    </span>
                  </div>
                  <div className="font-display font-bold text-sm text-[#111111]">{value}</div>
                  <div className="font-display text-xs text-[#444444]">{sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[#b0b0b0]">
              <p className="font-serif text-[#222222] leading-relaxed italic">{stageFFF.contexte}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Missions + Livrables */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Missions */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl border border-[#b8b8b8] bg-white p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#FFD300]/10 flex items-center justify-center">
                  <CheckSquare size={16} className="text-[#9A7200]" />
                </div>
                <h3 className="font-display font-bold text-[#111111]">Missions</h3>
                <span className="ml-auto font-display text-xs text-[#444444] bg-[#f0f0f0] px-2 py-1 rounded-full border border-[#b8b8b8]">
                  {stageFFF.missions.length}
                </span>
              </div>
              <StaggerContainer className="flex flex-col gap-2.5" staggerDelay={0.06}>
                {stageFFF.missions.map((mission, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-2.5 text-sm text-[#222222] font-serif hover:text-[#9A7200] transition-colors duration-200">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FFD300]/50" />
                      <span>{renderBold(mission)}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          {/* Livrables */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="rounded-2xl border border-[#b8b8b8] bg-white p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#FFD300]/10 flex items-center justify-center">
                  <Package size={16} className="text-[#9A7200]" />
                </div>
                <h3 className="font-display font-bold text-[#111111]">Livrables</h3>
                <span className="ml-auto font-display text-xs text-[#444444] bg-[#f0f0f0] px-2 py-1 rounded-full border border-[#b8b8b8]">
                  {stageFFF.livrables.length}
                </span>
              </div>
              <StaggerContainer className="flex flex-col gap-3" staggerDelay={0.06}>
                {stageFFF.livrables.map((livrable, i) => {
                  const isEnquete = livrable.includes("satisfaction");
                  return (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-3 p-3 rounded-xl border border-[#b0b0b0] bg-[#f5f5f5]/50 hover:border-[#FFD300]/20 transition-colors duration-200">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#FFD300]/10 border border-[#FFD300]/20 flex items-center justify-center font-display text-[10px] font-bold text-[#9A7200]">
                          {i + 1}
                        </span>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm text-[#222222] font-serif"><span>{renderBold(livrable)}</span></span>
                          {isEnquete && (
                            <a
                              href="/documents/enquete-satisfaction-fff.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-display text-[10px] font-bold text-[#9A7200] hover:text-[#111111] transition-colors duration-200"
                            >
                              <ExternalLink size={10} />
                              Voir
                            </a>
                          )}
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* Outils utilisés */}
        <AnimatedSection delay={0.15}>
          <div className="rounded-2xl border border-[#b8b8b8] bg-white px-6 py-5 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
              <Wrench size={14} className="text-[#9A7200]/60" />
              <span className="font-display text-xs uppercase tracking-widest text-[#444444]">
                Outils mobilisés
              </span>
            </div>
            {stageFFF.outils.map((outil) => (
              <span
                key={outil}
                className="font-display text-xs font-bold px-3 py-1.5 rounded-lg border border-[#FFD300]/20 bg-[#FFD300]/5 text-[#9A7200]"
              >
                {outil}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Cartographie interactive */}
        <AnimatedSection delay={0.2} className="mt-6">
          <a
            href="https://tadejfff.github.io/MAPIDFC/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-[#FFD300]/30 bg-white px-6 py-5 hover:border-[#FFD300]/70 hover:bg-[#FFD300]/5 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#FFD300]/10 border border-[#FFD300]/20 flex items-center justify-center flex-shrink-0">
                <Map size={20} className="text-[#9A7200]" />
              </div>
              <div>
                <div className="font-display font-bold text-[#111111] group-hover:text-[#9A7200] transition-colors duration-200">
                  Cartographie interactive des fromagers IDF
                </div>
                <div className="font-display text-xs text-[#444444] mt-1">
                  Livrable développé durant le stage · Python + Leaflet.js
                </div>
              </div>
            </div>
            <ExternalLink size={16} className="text-[#9A7200]/50 group-hover:text-[#9A7200] transition-colors duration-200 flex-shrink-0 ml-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
