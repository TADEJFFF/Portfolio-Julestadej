"use client";

import { erasmusData } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GraduationCap, Globe2, BookOpen, FileText } from "lucide-react";

const gradeColor = (grade: string) => {
  if (grade === "A") return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
  if (grade === "B") return "text-sky-400 bg-sky-400/10 border-sky-400/20";
  if (grade === "C") return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
  if (grade === "D") return "text-orange-400 bg-orange-400/10 border-orange-400/20";
  return "text-[#9a9a9a] bg-[#1a1a1a] border-[#272727]";
};

export default function Erasmus() {
  return (
    <section id="erasmus" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* En-tête */}
        <AnimatedSection className="mb-14">
          <span className="font-display text-xs font-bold text-[#FFD300] uppercase tracking-[0.2em] mb-3 block">
            Erasmus+ · 2025/2026
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Sofia, Bulgarie
          </h2>
          <p className="font-serif italic text-[#6b6b6b] text-lg max-w-xl">
            Un semestre d&apos;études intégralement en anglais, au sein d&apos;une
            université internationale reconnue.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Bloc université — 2 colonnes */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-[#FFD300]/20 bg-[#141414] p-6 flex flex-col gap-6">
              {/* Badge Erasmus */}
              <div className="w-12 h-12 rounded-xl bg-[#FFD300]/10 border border-[#FFD300]/20 flex items-center justify-center">
                <GraduationCap size={24} className="text-[#FFD300]" />
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  {erasmusData.universite}
                </h3>
                <p className="font-display text-sm text-[#FFD300]/80 font-medium mb-4">
                  {erasmusData.faculte}
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { icon: Globe2, label: erasmusData.ville + ", " + erasmusData.pays },
                    { icon: BookOpen, label: erasmusData.periode },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-[#9a9a9a] font-display">
                      <Icon size={14} className="text-[#FFD300]/60 flex-shrink-0" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Résumé ECTS */}
              <div className="mt-auto grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#272727] bg-[#0c0c0c] p-4 text-center">
                  <div className="font-display font-extrabold text-3xl text-[#FFD300]">
                    {erasmusData.totalEcts}
                  </div>
                  <div className="font-display text-[10px] text-[#6b6b6b] uppercase tracking-wider mt-1">
                    Crédits ECTS
                  </div>
                </div>
                <div className="rounded-xl border border-[#272727] bg-[#0c0c0c] p-4 text-center">
                  <div className="font-display font-extrabold text-3xl text-emerald-400">5</div>
                  <div className="font-display text-[10px] text-[#6b6b6b] uppercase tracking-wider mt-1">
                    Mentions A
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#272727] bg-[#0c0c0c] px-4 py-3">
                <div className="font-display text-xs text-[#6b6b6b] uppercase tracking-wide mb-1">
                  Langue d&apos;enseignement
                </div>
                <div className="font-display font-bold text-white">
                  🇬🇧 {erasmusData.langue}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Tableau des matières — 3 colonnes */}
          <AnimatedSection direction="right" className="lg:col-span-3" delay={0.1}>
            <div className="rounded-2xl border border-[#272727] bg-[#141414] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#272727] flex items-center justify-between">
                <h4 className="font-display font-bold text-white">
                  Matières suivies
                </h4>
                <span className="font-display text-xs text-[#6b6b6b]">
                  {erasmusData.courses.length} UE · Semestre hiver 2025/2026
                </span>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1e1e1e]">
                    <th className="text-left px-6 py-3 font-display text-[10px] uppercase tracking-widest text-[#6b6b6b]">
                      Matière
                    </th>
                    <th className="text-center px-4 py-3 font-display text-[10px] uppercase tracking-widest text-[#6b6b6b]">
                      ECTS
                    </th>
                    <th className="text-center px-4 py-3 font-display text-[10px] uppercase tracking-widest text-[#6b6b6b]">
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {erasmusData.courses.map((course, i) => (
                    <tr key={i} className="border-b border-[#1a1a1a] last:border-0 hover:bg-[#1a1a1a]/50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="font-display text-sm font-medium text-white">
                          {course.name}
                        </div>
                        {course.code !== "[À COMPLÉTER]" && (
                          <div className="font-display text-[11px] text-[#6b6b6b] mt-0.5">
                            {course.code}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="font-display font-bold text-sm text-[#FFD300]">
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
              <div className="px-6 py-4 border-t border-[#272727] bg-[#0c0c0c]/50 flex items-center justify-between">
                <span className="font-display text-sm text-[#9a9a9a]">Total validé</span>
                <div className="flex items-center gap-4">
                  <a
                    href="/transcript-of-records-erasmus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-[#FFD300]/70 hover:text-[#FFD300] transition-colors duration-200"
                  >
                    <FileText size={13} />
                    Transcript of Records
                  </a>
                  <span className="font-display font-extrabold text-[#FFD300] text-lg">
                    {erasmusData.totalEcts} ECTS
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ID étudiant Sofia */}
        <AnimatedSection delay={0.2} className="mt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#272727] bg-[#141414]">
            <span className="font-display text-xs text-[#6b6b6b]">Student ID UNWE Sofia :</span>
            <span className="font-display text-xs font-bold text-white">{erasmusData.studentId}</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
