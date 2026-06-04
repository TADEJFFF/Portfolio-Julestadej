"use client";

import { useState, useRef } from "react";
import { personal } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Mail, MapPin, Clock, Phone, Send } from "lucide-react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);
    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Erreur inconnue.");
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* En-tête */}
        <AnimatedSection className="mb-12 text-center">
          <span className="font-display text-xs font-bold text-[#9A7200] uppercase tracking-[0.2em] mb-3 block">
            Disponible dès juillet 2026
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[#111111] mb-4">
            Me contacter
          </h2>
          <p className="font-serif text-[#444444] text-lg max-w-lg mx-auto">
            Diplômé BUT GEA GEMA en juillet 2026, ouvert aux opportunités en freelance.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">

          {/* ── Coordonnées ── */}
          <AnimatedSection direction="left">
            <h3 className="font-display font-bold text-lg text-[#111111] mb-5">Coordonnées</h3>
            <div className="flex flex-col gap-3">

              {/* Email */}
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#b8b8b8] bg-white hover:border-[#9A7200]/50 hover:bg-[#f9f9f9] transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FFD300]/10 border border-[#FFD300]/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#9A7200]" />
                </div>
                <div>
                  <div className="font-display text-[10px] text-[#888888] uppercase tracking-widest">Email</div>
                  <div className="font-display font-bold text-sm text-[#111111] group-hover:text-[#9A7200] transition-colors">
                    {personal.email}
                  </div>
                </div>
              </a>

              {/* Téléphone */}
              <a
                href={`tel:+33783742784`}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#b8b8b8] bg-white hover:border-[#9A7200]/50 hover:bg-[#f9f9f9] transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FFD300]/10 border border-[#FFD300]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#9A7200]" />
                </div>
                <div>
                  <div className="font-display text-[10px] text-[#888888] uppercase tracking-widest">Téléphone</div>
                  <div className="font-display font-bold text-sm text-[#111111] group-hover:text-[#9A7200] transition-colors">
                    {personal.phone}
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#b8b8b8] bg-white hover:border-[#0A66C2]/40 hover:bg-[#f9f9f9] transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-4 h-4">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-display text-[10px] text-[#888888] uppercase tracking-widest">LinkedIn</div>
                  <div className="font-display font-bold text-sm text-[#111111] group-hover:text-[#0A66C2] transition-colors">
                    Jules TADEJ
                  </div>
                </div>
              </a>

              {/* Localisation */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-[#b8b8b8] bg-white">
                <div className="w-10 h-10 rounded-lg bg-[#FFD300]/10 border border-[#FFD300]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#9A7200]" />
                </div>
                <div>
                  <div className="font-display text-[10px] text-[#888888] uppercase tracking-widest">Localisation</div>
                  <div className="font-display font-bold text-sm text-[#111111]">{personal.location}</div>
                </div>
              </div>

              {/* Disponibilité */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-[#FFD300]/30 bg-[#FFD300]/5">
                <div className="w-10 h-10 rounded-lg bg-[#FFD300]/15 border border-[#FFD300]/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-[#9A7200]" />
                </div>
                <div>
                  <div className="font-display text-[10px] text-[#9A7200]/70 uppercase tracking-widest">Disponibilité</div>
                  <div className="font-display font-bold text-sm text-[#9A7200]">{personal.dispo}</div>
                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* ── Formulaire ── */}
          <AnimatedSection direction="right" delay={0.1}>
            <h3 className="font-display font-bold text-lg text-[#111111] mb-5">Envoyez-moi un message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div>
                <label className="font-display text-xs font-bold text-[#444444] uppercase tracking-wider mb-1.5 block">
                  Nom
                </label>
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  required
                  className="w-full font-display text-sm text-[#111111] bg-white border border-[#c0c0c0] rounded-xl px-4 py-3 outline-none focus:border-[#9A7200] focus:ring-2 focus:ring-[#FFD300]/20 transition-all duration-200 placeholder:text-[#aaaaaa]"
                />
              </div>

              <div>
                <label className="font-display text-xs font-bold text-[#444444] uppercase tracking-wider mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  required
                  className="w-full font-display text-sm text-[#111111] bg-white border border-[#c0c0c0] rounded-xl px-4 py-3 outline-none focus:border-[#9A7200] focus:ring-2 focus:ring-[#FFD300]/20 transition-all duration-200 placeholder:text-[#aaaaaa]"
                />
              </div>

              <div>
                <label className="font-display text-xs font-bold text-[#444444] uppercase tracking-wider mb-1.5 block">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Décrivez brièvement votre projet ou votre demande..."
                  required
                  rows={5}
                  className="w-full font-display text-sm text-[#111111] bg-white border border-[#c0c0c0] rounded-xl px-4 py-3 outline-none focus:border-[#9A7200] focus:ring-2 focus:ring-[#FFD300]/20 transition-all duration-200 placeholder:text-[#aaaaaa] resize-none"
                />
              </div>

              {/* Feedback */}
              {status === "success" && (
                <div className="text-sm font-display text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                  ✓ Message envoyé ! Je te répondrai rapidement.
                </div>
              )}
              {status === "error" && (
                <div className="text-sm font-display text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  ✗ {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 font-display font-bold text-sm px-6 py-3.5 rounded-xl bg-[#FFD300] text-[#111111] hover:bg-[#e6be00] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Send size={15} />
                {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
              </button>

            </form>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
