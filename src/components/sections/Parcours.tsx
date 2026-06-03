"use client";

import { parcours } from "@/lib/data";
import { renderBold } from "@/lib/renderBold";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2, Circle, FileText } from "lucide-react";

export default function Parcours() {
  return (
    <section id="parcours" className="section-padding bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6">
        {/* En-tête */}
        <AnimatedSection className="mb-16">
          <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-[0.2em] mb-3 block">
            Timeline
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[#111111] mb-4">
            Mon parcours
          </h2>
          <p className="font-serif italic text-[#444444] text-lg max-w-xl">
            Trois années de BUT GEA GEMA, un Erasmus+ en Bulgarie et un stage dans
            une fédération professionnelle nationale.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-[#9A7200]/80 via-[#9A7200]/20 to-transparent md:left-1/2 md:-translate-x-px" />

          <StaggerContainer className="flex flex-col gap-12" staggerDelay={0.15}>
            {parcours.map((step, i) => {
              const isRight = i % 2 !== 0;
              return (
                <StaggerItem key={i}>
                  <div
                    className={`relative flex items-start gap-8 md:gap-0 ${
                      isRight ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    {/* Dot central */}
                    <div className="relative z-10 flex-shrink-0 ml-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-4">
                      {step.current ? (
                        <div className="w-11 h-11 rounded-full bg-[#FFD300] flex items-center justify-center ring-4 ring-[#FFD300]/20">
                          <Circle size={18} className="text-[#111111] fill-[#111111]" />
                        </div>
                      ) : (
                        <div className="w-11 h-11 rounded-full border-2 border-[#b8b8b8] bg-white flex items-center justify-center hover:border-[#FFD300]/50 transition-colors duration-300">
                          <CheckCircle2 size={18} className="text-[#9A7200]" />
                        </div>
                      )}
                    </div>

                    {/* Carte — spacer côté opposé */}
                    <div className={`md:w-[calc(50%-3rem)] ml-6 md:ml-0 ${isRight ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}>
                      <div
                        className={`rounded-2xl border p-6 transition-all duration-300 ${
                          step.current
                            ? "border-[#FFD300]/40 bg-white"
                            : step.highlight
                            ? "border-[#FFD300]/20 bg-white"
                            : "border-[#b8b8b8] bg-white hover:border-[#b8b8b8]/80"
                        }`}
                      >
                        {/* Période */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-widest">
                            {step.periode}
                          </span>
                          {step.current && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-display font-bold px-2 py-0.5 rounded-full bg-[#FFD300]/15 text-[#9A7200] border border-[#FFD300]/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD300] animate-pulse" />
                              En cours
                            </span>
                          )}
                          {step.highlight && !step.current && (
                            <span className="text-[10px] font-display font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                              Erasmus+
                            </span>
                          )}
                        </div>

                        {/* Label */}
                        <h3 className="font-display font-bold text-lg text-[#111111] mb-1">
                          {step.label}
                        </h3>
                        <p className="font-display text-sm text-[#444444] mb-4">
                          {step.lieu}
                        </p>

                        {/* Événements */}
                        <ul className="flex flex-col gap-2">
                          {step.events.map((ev, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#222222] font-serif">
                              <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-[#FFD300]/60" />
                              <span>{renderBold(ev)}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Relevés de notes */}
                        {step.releves && step.releves.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-[#b0b0b0] flex flex-wrap gap-2">
                            {step.releves.map((releve) => (
                              <a
                                key={releve.url}
                                href={releve.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 font-display text-[10px] font-medium px-2.5 py-1.5 rounded-lg border border-[#b8b8b8] bg-[#f5f5f5] text-[#444444] hover:text-[#9A7200] hover:border-[#FFD300]/30 transition-all duration-200"
                              >
                                <FileText size={10} />
                                {releve.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
