"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Mail, Download } from "lucide-react";
import { personal, stats } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grille de fond */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#FFD300 1px, transparent 1px), linear-gradient(90deg, #FFD300 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Halo jaune */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FFD300]/5 blur-[120px] pointer-events-none" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge formation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#b8b8b8] bg-white text-xs font-display font-medium text-[#222222] uppercase tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFD300] animate-pulse" />
          {personal.iut} · {personal.universite}
        </motion.div>

        {/* Nom principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display font-extrabold text-[clamp(2.5rem,8vw,6.5rem)] leading-none tracking-tight mb-3"
        >
          <span className="text-[#111111]">{personal.firstName} </span>
          <span className="text-[#9A7200]">{personal.lastName}</span>
        </motion.h1>

        {/* Formation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-display text-base md:text-lg text-[#222222] font-medium mb-1"
        >
          {personal.formation}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="font-display text-sm text-[#9A7200]/80 font-medium mb-6"
        >
          {personal.parcours}
        </motion.p>

        {/* Accroche */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-serif text-[#222222] text-base md:text-lg max-w-2xl leading-relaxed mb-7"
        >
          &ldquo;{personal.accroche}&rdquo;
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="grid grid-cols-3 gap-3 mb-7 w-full max-w-2xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-2.5 px-3 rounded-xl border border-[#b8b8b8] bg-white hover:border-[#FFD300]/40 transition-colors duration-300"
            >
              <span className="font-display font-bold text-2xl md:text-3xl text-[#9A7200]">
                {stat.value}
              </span>
              <span className="font-display text-xs text-[#444444] mt-1 text-center uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-3"
        >
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 font-display font-bold px-5 py-2.5 rounded-xl bg-[#FFD300] text-[#111111] hover:bg-[#e6be00] transition-all duration-200 text-sm"
          >
            <Mail size={16} />
            {personal.email}
          </a>
          <a
            href="/cv-jules-tadej-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display font-medium px-5 py-2.5 rounded-xl border border-[#FFD300]/40 text-[#9A7200] hover:bg-[#FFD300]/10 hover:border-[#FFD300]/70 transition-all duration-200 text-sm"
          >
            <Download size={16} />
            Télécharger mon CV
          </a>
          <a
            href="/parcours"
            className="inline-flex items-center gap-2 font-display font-medium px-5 py-2.5 rounded-xl border border-[#b8b8b8] text-[#222222] hover:border-[#FFD300]/50 hover:text-[#111111] transition-all duration-200 text-sm"
          >
            Voir mon parcours
          </a>
        </motion.div>

        {/* Location + dispo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center gap-4 text-xs text-[#444444] font-display"
        >
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {personal.location}
          </span>
          <span>·</span>
          <span className="text-[#9A7200]/70">{personal.dispo}</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444444]"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
