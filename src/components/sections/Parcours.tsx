"use client";

import { parcours } from "@/lib/data";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2, Circle } from "lucide-react";

export default function Parcours() {
  return (
    <section id="parcours" className="section-padding bg-[#0c0c0c]">
      <div className="max-w-4xl mx-auto px-6">
        {/* En-tête */}
        <AnimatedSection className="mb-16">
          <span className="font-display text-xs font-bold text-[#FFD300] uppercase tracking-[0.2em] mb-3 block">
            Timeline
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Mon parcours
          </h2>
          <p className="font-serif italic text-[#6b6b6b] text-lg max-w-xl">
            Trois années de BUT GEA GEMA, un Erasmus+ en Bulgarie et un stage dans
            une fédération professionnelle nationale.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-[#FFD300]/60 via-[#272727] to-transparent md:left-1/2 md:-translate-x-px" />

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
                          <Circle size={18} className="text-[#0c0c0c] fill-[#0c0c0c]" />
                        </div>
                      ) : (
                        <div className="w-11 h-11 rounded-full border-2 border-[#272727] bg-[#141414] flex items-center justify-center hover:border-[#FFD300]/50 transition-colors duration-300">
                          <CheckCircle2 size={18} className="text-[#FFD300]" />
                        </div>
                      )}
                    </div>

                    {/* Carte — spacer côté opposé */}
                    <div className={`md:w-[calc(50%-3rem)] ml-6 md:ml-0 ${isRight ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}>
                      <div
                        className={`rounded-2xl border p-6 transition-all duration-300 ${
                          step.current
                            ? "border-[#FFD300]/40 bg-[#141414]"
                            : step.highlight
                            ? "border-[#FFD300]/20 bg-[#141414]"
                            : "border-[#272727] bg-[#141414] hover:border-[#272727]/80"
                        }`}
                      >
                        {/* Période */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-display text-xs font-bold text-[#FFD300] uppercase tracking-widest">
                            {step.periode}
                          </span>
                          {step.current && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-display font-bold px-2 py-0.5 rounded-full bg-[#FFD300]/15 text-[#FFD300] border border-[#FFD300]/30">
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
                        <h3 className="font-display font-bold text-lg text-white mb-1">
                          {step.label}
                        </h3>
                        <p className="font-display text-sm text-[#6b6b6b] mb-4">
                          {step.lieu}
                        </p>

                        {/* Événements */}
                        <ul className="flex flex-col gap-2">
                          {step.events.map((ev, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#9a9a9a] font-serif">
                              <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-[#FFD300]/60" />
                              {ev}
                            </li>
                          ))}
                        </ul>
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
