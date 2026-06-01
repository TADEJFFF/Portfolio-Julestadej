"use client";

import { personal } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection className="mb-10">
          <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-[0.2em] mb-3 block">
            Disponible dès juillet 2026
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[#111111] mb-4">
            Me contacter
          </h2>
          <p className="font-serif italic text-[#555555] text-lg max-w-lg mx-auto">
            Diplômé BUT GEA GEMA en juillet 2026, ouvert aux opportunités en freelance.
          </p>
        </AnimatedSection>

        {/* Email principal — gros CTA */}
        <AnimatedSection delay={0.1} className="mb-8">
          <a
            href={`mailto:${personal.email}`}
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-[#FFD300]/30 bg-white hover:bg-[#FFD300]/10 hover:border-[#FFD300]/60 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFD300] flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-[#111111]" />
            </div>
            <div className="text-left">
              <div className="font-display text-xs text-[#555555] uppercase tracking-widest mb-0.5">
                Email
              </div>
              <div className="font-display font-bold text-[#111111] group-hover:text-[#9A7200] transition-colors duration-200">
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
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#d8d8d8] bg-white hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/5 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#0A66C2] flex-shrink-0">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="text-left">
                <div className="font-display text-[10px] text-[#555555] uppercase tracking-widest">LinkedIn</div>
                <div className="font-display text-sm text-[#111111] font-medium">Jules TADEJ</div>
              </div>
            </a>

            {/* Localisation */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#d8d8d8] bg-white">
              <MapPin size={16} className="text-[#555555]" />
              <div className="text-left">
                <div className="font-display text-[10px] text-[#555555] uppercase tracking-widest">Localisation</div>
                <div className="font-display text-sm text-[#111111]">{personal.location}</div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#FFD300]/20 bg-[#FFD300]/5">
              <Clock size={16} className="text-[#9A7200]" />
              <div className="text-left">
                <div className="font-display text-[10px] text-[#9A7200]/60 uppercase tracking-widest">Disponibilité</div>
                <div className="font-display text-sm text-[#9A7200] font-bold">{personal.dispo}</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Séparateur */}
        <AnimatedSection delay={0.3}>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-[#1e1e1e]" />
            <span className="font-display text-xs text-[#555555]">Jules TADEJ · 2026</span>
            <div className="flex-1 h-px bg-[#1e1e1e]" />
          </div>
          <p className="font-display text-xs text-[#555555] leading-relaxed">
            {personal.iut} · {personal.universite}
            <br />
            {personal.formation} — {personal.parcours}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
