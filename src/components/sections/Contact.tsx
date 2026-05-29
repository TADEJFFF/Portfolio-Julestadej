"use client";

import { personal } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Mail, Link2, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection className="mb-10">
          <span className="font-display text-xs font-bold text-[#FFD300] uppercase tracking-[0.2em] mb-3 block">
            Disponible dès juillet 2026
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Me contacter
          </h2>
          <p className="font-serif italic text-[#6b6b6b] text-lg max-w-lg mx-auto">
            Étudiant en fin de BUT GEA GEMA, ouvert aux opportunités à partir
            du 10 juillet 2026.
          </p>
        </AnimatedSection>

        {/* Email principal — gros CTA */}
        <AnimatedSection delay={0.1} className="mb-8">
          <a
            href={`mailto:${personal.email}`}
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-[#FFD300]/30 bg-[#141414] hover:bg-[#FFD300]/10 hover:border-[#FFD300]/60 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFD300] flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-[#0c0c0c]" />
            </div>
            <div className="text-left">
              <div className="font-display text-xs text-[#6b6b6b] uppercase tracking-widest mb-0.5">
                Email
              </div>
              <div className="font-display font-bold text-white group-hover:text-[#FFD300] transition-colors duration-200">
                {personal.email}
              </div>
            </div>
          </a>
        </AnimatedSection>

        {/* Autres contacts */}
        <AnimatedSection delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#272727] bg-[#141414] hover:border-[#FFD300]/40 hover:bg-[#FFD300]/5 transition-all duration-200"
            >
              <Link2 size={16} className="text-[#FFD300]/70" />
              <div className="text-left">
                <div className="font-display text-[10px] text-[#6b6b6b] uppercase tracking-widest">LinkedIn</div>
                <div className="font-display text-sm text-white font-medium">jules-tadej-107612295</div>
              </div>
            </a>

            {/* Localisation */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#272727] bg-[#141414]">
              <MapPin size={16} className="text-[#6b6b6b]" />
              <div className="text-left">
                <div className="font-display text-[10px] text-[#6b6b6b] uppercase tracking-widest">Localisation</div>
                <div className="font-display text-sm text-white">{personal.location}</div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#FFD300]/20 bg-[#FFD300]/5">
              <Clock size={16} className="text-[#FFD300]" />
              <div className="text-left">
                <div className="font-display text-[10px] text-[#FFD300]/60 uppercase tracking-widest">Disponibilité</div>
                <div className="font-display text-sm text-[#FFD300] font-bold">{personal.dispo}</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Séparateur */}
        <AnimatedSection delay={0.3}>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-[#1e1e1e]" />
            <span className="font-display text-xs text-[#6b6b6b]">Jules TADEJ · 2026</span>
            <div className="flex-1 h-px bg-[#1e1e1e]" />
          </div>
          <p className="font-display text-xs text-[#6b6b6b] leading-relaxed">
            {personal.iut} · {personal.universite}
            <br />
            {personal.formation} — {personal.parcours}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
