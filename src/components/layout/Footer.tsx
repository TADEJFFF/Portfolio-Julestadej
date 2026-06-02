"use client";

import Link from "next/link";
import { Mail, MapPin, Download, Linkedin } from "lucide-react";
import { navLinks, personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#d0d0d0] bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Colonne 1 : Identité + CTAs ── */}
          <div className="flex flex-col gap-5">
            {/* Badge initiales */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#FFD300] flex items-center justify-center flex-shrink-0">
                <span className="font-display font-extrabold text-lg text-[#111111] leading-none">JT</span>
              </div>
              <div>
                <div className="font-display font-extrabold text-[#111111] leading-tight">{personal.fullName}</div>
                <div className="font-display text-xs text-[#9A7200]">BUT GEA GEMA · Parcours GEMA</div>
              </div>
            </div>

            {/* Accroche compétences */}
            <p className="font-serif text-sm text-[#555555] leading-relaxed">
              Analyser · Décider · Piloter · Entreprendre · Développer
            </p>
            <p className="font-display text-xs text-[#888888]">
              {personal.dispo}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-2">
              <a
                href="/cv-jules-tadej-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-display text-xs font-bold px-3 py-2 rounded-lg border border-[#b8b8b8] text-[#222222] hover:border-[#9A7200] hover:text-[#9A7200] transition-all duration-200"
              >
                <Download size={12} />
                CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-display text-xs font-bold px-3 py-2 rounded-lg bg-[#FFD300] text-[#111111] hover:bg-[#e6be00] transition-all duration-200"
              >
                Me contacter
              </Link>
            </div>
          </div>

          {/* ── Colonne 2 : Navigation ── */}
          <div>
            <h4 className="font-display font-bold text-sm text-[#111111] mb-4 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display text-sm text-[#555555] hover:text-[#9A7200] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Colonne 3 : Contact ── */}
          <div>
            <h4 className="font-display font-bold text-sm text-[#111111] mb-4 uppercase tracking-widest">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2.5 font-display text-sm text-[#555555] hover:text-[#9A7200] transition-colors duration-200"
              >
                <Mail size={14} className="text-[#9A7200] flex-shrink-0" />
                {personal.email}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-display text-sm text-[#555555] hover:text-[#0A66C2] transition-colors duration-200"
              >
                <Linkedin size={14} className="text-[#0A66C2] flex-shrink-0" />
                Jules TADEJ
              </a>
              <div className="flex items-center gap-2.5 font-display text-sm text-[#555555]">
                <MapPin size={14} className="text-[#9A7200] flex-shrink-0" />
                {personal.location}
              </div>
            </div>
          </div>

        </div>

        {/* ── Bas de footer ── */}
        <div className="mt-10 pt-6 border-t border-[#e0e0e0] flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-display text-xs text-[#aaaaaa]">
            © 2026 Jules TADEJ · Portfolio BUT GEA GEMA
          </p>
          <p className="font-display text-xs text-[#aaaaaa]">
            {personal.iut} · {personal.universite}
          </p>
        </div>
      </div>
    </footer>
  );
}
