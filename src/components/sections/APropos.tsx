"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function APropos() {
  return (
    <section id="apropos" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Texte ── */}
          <AnimatedSection>
            <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-[0.2em] mb-3 block">
              À propos
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[#111111] mb-8 leading-tight">
              La décision qui a tout changé
            </h2>
            <p className="font-serif text-[#222222] text-lg leading-relaxed mb-4">
              À 18 ans, j'ai <strong className="font-bold text-[#111111]">quitté Poitiers pour Paris</strong> et mes habitudes pour l'inconnu.
              Direction un <strong className="font-bold text-[#111111]">BUT GEA</strong>, avec une seule envie : prendre un nouveau départ et me
              confronter à de <strong className="font-bold text-[#111111]">nouveaux défis</strong>.
            </p>
            <p className="font-serif text-[#222222] text-lg leading-relaxed mb-4">
              Ces trois années ont été riches et formatrices : <strong className="font-bold text-[#111111]">2 prix de l'entrepreneuriat avec Breathe&Go</strong>,
              un <strong className="font-bold text-[#111111]">semestre Erasmus à Sofia</strong> suivi d'un stage au cœur du <strong className="font-bold text-[#111111]">réseau fromager français</strong>.
              Chacune de ces expériences a renforcé mon <strong className="font-bold text-[#111111]">sens de l'analyse</strong>,
              ma capacité à <strong className="font-bold text-[#111111]">prendre des décisions</strong> et mon aptitude à passer à l'action.
            </p>
            <p className="font-serif text-[#444444] text-lg leading-relaxed">
              Ce portfolio retrace non seulement mon <strong className="font-bold text-[#111111]">parcours académique</strong>, mais met également
              en lumière la manière dont j'ai su en faire de véritables <strong className="font-bold text-[#111111]">leviers de développement</strong>.
            </p>
          </AnimatedSection>

          {/* ── Photo ── */}
          <AnimatedSection className="flex justify-center md:justify-end">
            <div className="relative w-72 h-96 rounded-2xl overflow-hidden border border-[#b8b8b8]">
              <Image
                src="/photo-jules.jpeg"
                alt="Jules TADEJ"
                fill
                className="object-cover object-top"
                sizes="288px"
              />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
