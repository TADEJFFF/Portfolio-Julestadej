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
              J'ai grandi à Poitiers. À 18 ans, j'ai fait le choix de tout quitter pour
              intégrer un BUT GEA à Paris, pas par hasard, mais parce que je voulais me
              confronter à quelque chose de plus grand que moi.
            </p>
            <p className="font-serif text-[#222222] text-lg leading-relaxed mb-4">
              Ces trois années ont été denses : 2 prix de l'entrepreneuriat avec Breathe&Go,
              un semestre Erasmus à Sofia en immersion totale en anglais, et aujourd'hui un
              stage au cœur du réseau fromager français. Chaque expérience a affiné ma façon
              d'analyser, de décider et d'agir.
            </p>
            <p className="font-serif text-[#444444] text-lg leading-relaxed">
              Ce portfolio ne retrace pas seulement un parcours académique. Il montre comment
              j'ai transformé chaque défi en compétence concrète.
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
              {/* Overlay jaune semi-transparent */}
              <div className="absolute inset-0 bg-[#FFD300]/20 pointer-events-none mix-blend-multiply" />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
