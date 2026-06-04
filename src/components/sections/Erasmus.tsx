"use client";

import Image from "next/image";
import { erasmusData } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GraduationCap, Globe2, BookOpen, FileText } from "lucide-react";

const gradeColor = (grade: string) => {
  if (grade === "A") return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
  if (grade === "B") return "text-sky-400 bg-sky-400/10 border-sky-400/20";
  if (grade === "C") return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
  if (grade === "D") return "text-orange-400 bg-orange-400/10 border-orange-400/20";
  return "text-[#222222] bg-[#f0f0f0] border-[#b8b8b8]";
};

export default function Erasmus() {
  return (
    <section id="erasmus" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* En-tête */}
        <AnimatedSection className="mb-14">
          <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-[0.2em] mb-3 block">
            Erasmus+ · 2025/2026
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[#111111] mb-4">
            Sofia, Bulgarie
          </h2>
          <p className="font-serif text-[#444444] text-lg max-w-xl">
            Un semestre d&apos;études intégralement en anglais, au sein d&apos;une
            université internationale reconnue.
          </p>
        </AnimatedSection>

        {/* Paragraphe expérience + photo */}
        <AnimatedSection delay={0.05} className="mb-10">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-center rounded-2xl border border-[#b8b8b8] bg-[#f9f9f9] p-8">
            {/* Texte */}
            <div>
              <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-[0.2em] mb-4 block">
                Vivre l'expérience
              </span>
              <p className="font-serif text-[#222222] text-base leading-relaxed mb-4">
                Partir à <strong className="font-bold text-[#111111]">Sofia</strong> pour un semestre entier en <strong className="font-bold text-[#111111]">immersion totale en anglais</strong>, c'était un défi
                que je m'étais fixé pour me pousser <strong className="font-bold text-[#111111]">hors de ma zone de confort</strong>, et nourrir cette envie
                profonde d'explorer de nouveaux horizons, de découvrir d'autres façons de penser et de
                travailler.
              </p>
              <p className="font-serif text-[#222222] text-base leading-relaxed mb-4">
                Loin de Paris, dans une <strong className="font-bold text-[#111111]">université internationale de 20 000 étudiants</strong>, j'ai dû m'adapter
                rapidement : suivre des cours de <strong className="font-bold text-[#111111]">management, marketing et finance en anglais</strong>, collaborer
                avec des étudiants d'une dizaine de nationalités différentes, et mener un projet de bout
                en bout dans une langue qui n'est pas la mienne. Cette immersion ne s'est pas arrêtée aux
                études, j'ai partagé mon quotidien en <strong className="font-bold text-[#111111]">colocation avec un étudiant bulgare</strong> de Sofia, ce qui
                m'a permis de m'imprégner de la <strong className="font-bold text-[#111111]">culture locale</strong> bien au-delà du cadre universitaire.
              </p>
              <p className="font-serif text-[#222222] text-base leading-relaxed">
                Ce semestre m'a appris autant sur moi-même que sur les matières étudiées. J'en suis
                revenu avec <strong className="font-bold text-[#111111]">34 ECTS, 5 mentions A</strong>, et surtout une <strong className="font-bold text-[#111111]">confiance en moi</strong> que je n'avais pas
                avant, et la certitude que cette soif de découverte ne s'arrêtera pas là.
              </p>
            </div>
            {/* Photo Sofia */}
            <div className="flex justify-center">
              <div className="relative w-full h-[26rem] rounded-2xl overflow-hidden border border-[#b8b8b8]">
                <Image
                  src="/photo-sofia.png"
                  alt="Erasmus Sofia — Jules TADEJ"
                  fill
                  className="object-cover object-center"
                  sizes="384px"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Bloc université — 2 colonnes */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-[#FFD300]/20 bg-white p-6 flex flex-col gap-6">
              {/* Badge Erasmus */}
              <div className="w-12 h-12 rounded-xl bg-[#FFD300]/10 border border-[#FFD300]/20 flex items-center justify-center">
                <GraduationCap size={24} className="text-[#9A7200]" />
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-[#111111] mb-1">
                  {erasmusData.universite}
                </h3>
                <p className="font-display text-sm text-[#9A7200]/80 font-medium mb-4">
                  {erasmusData.faculte}
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { icon: Globe2, label: erasmusData.ville + ", " + erasmusData.pays },
                    { icon: BookOpen, label: erasmusData.periode },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-[#222222] font-display">
                      <Icon size={14} className="text-[#9A7200]/60 flex-shrink-0" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Résumé ECTS */}
              <div className="mt-auto grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#b8b8b8] bg-[#f5f5f5] p-4 text-center">
                  <div className="font-display font-extrabold text-3xl text-[#9A7200]">
                    {erasmusData.totalEcts}
                  </div>
                  <div className="font-display text-[10px] text-[#444444] uppercase tracking-wider mt-1">
                    Crédits ECTS
                  </div>
                </div>
                <div className="rounded-xl border border-[#b8b8b8] bg-[#f5f5f5] p-4 text-center">
                  <div className="font-display font-extrabold text-3xl text-emerald-400">5</div>
                  <div className="font-display text-[10px] text-[#444444] uppercase tracking-wider mt-1">
                    Mentions A
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#b8b8b8] bg-[#f5f5f5] px-4 py-3">
                <div className="font-display text-xs text-[#444444] uppercase tracking-wide mb-1">
                  Langue d&apos;enseignement
                </div>
                <div className="font-display font-bold text-[#111111]">
                  {erasmusData.langue}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Tableau des matières — 3 colonnes */}
          <AnimatedSection direction="right" className="lg:col-span-3" delay={0.1}>
            <div className="rounded-2xl border border-[#b8b8b8] bg-white overflow-hidden">
              <div className="px-6 py-4 border-b border-[#b8b8b8] flex items-center justify-between">
                <h4 className="font-display font-bold text-[#111111]">
                  Matières suivies
                </h4>
                <span className="font-display text-xs text-[#444444]">
                  {erasmusData.courses.length} UE · Semestre hiver 2025/2026
                </span>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#b0b0b0]">
                    <th className="text-left px-6 py-3 font-display text-[10px] uppercase tracking-widest text-[#444444]">
                      Matière
                    </th>
                    <th className="text-center px-4 py-3 font-display text-[10px] uppercase tracking-widest text-[#444444]">
                      ECTS
                    </th>
                    <th className="text-center px-4 py-3 font-display text-[10px] uppercase tracking-widest text-[#444444]">
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {erasmusData.courses.map((course, i) => (
                    <tr key={i} className="border-b border-[#1a1a1a] last:border-0 hover:bg-[#f0f0f0]/50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="font-display text-sm font-medium text-[#111111]">
                          {course.name}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="font-display font-bold text-sm text-[#9A7200]">
                          {course.ects}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className={`inline-block font-display font-bold text-xs px-2.5 py-1 rounded-md border ${gradeColor(course.gradeECTS)}`}>
                          {course.gradeECTS} ({course.gradeLocal}/6)
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total + lien Transcript */}
              <div className="px-6 py-4 border-t border-[#b8b8b8] bg-[#f5f5f5]/50 flex items-center justify-between">
                <span className="font-display text-sm text-[#222222]">Total validé</span>
                <div className="flex items-center gap-4">
                  <a
                    href="/transcript-of-records-erasmus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-[#9A7200]/70 hover:text-[#9A7200] transition-colors duration-200"
                  >
                    <FileText size={13} />
                    Transcript of Records
                  </a>
                  <span className="font-display font-extrabold text-[#9A7200] text-lg">
                    {erasmusData.totalEcts} ECTS
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ID étudiant Sofia */}
        <AnimatedSection delay={0.2} className="mt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#b8b8b8] bg-white">
            <span className="font-display text-xs text-[#444444]">Student ID UNWE Sofia :</span>
            <span className="font-display text-xs font-bold text-[#111111]">{erasmusData.studentId}</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
