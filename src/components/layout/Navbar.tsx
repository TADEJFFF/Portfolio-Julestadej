"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0c0c]/95 backdrop-blur-md border-b border-[#1e1e1e]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLink("#hero");
          }}
          className="font-display font-bold text-xl tracking-tight group"
        >
          <span className="text-[#FFD300]">J</span>
          <span className="text-white">T</span>
          <span className="ml-2 text-xs text-[#6b6b6b] font-normal hidden sm:inline group-hover:text-[#FFD300] transition-colors duration-200">
            BUT GEA GEMA
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href)}
                className="font-display text-sm font-medium px-4 py-2 rounded-md text-[#9a9a9a] hover:text-white hover:bg-[#1a1a1a] transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleLink("#contact")}
              className="font-display text-sm font-bold ml-2 px-4 py-2 rounded-md bg-[#FFD300] text-[#0c0c0c] hover:bg-[#e6be00] transition-all duration-200 cursor-pointer"
            >
              Me contacter
            </button>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden text-[#9a9a9a] hover:text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0c0c0c]/98 backdrop-blur-md border-b border-[#1e1e1e] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="font-display text-sm font-medium py-3 text-left text-[#9a9a9a] hover:text-white border-b border-[#1a1a1a] last:border-0 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink("#contact")}
            className="font-display text-sm font-bold mt-2 py-3 rounded-md bg-[#FFD300] text-[#0c0c0c] text-center"
          >
            Me contacter
          </button>
        </div>
      )}
    </header>
  );
}
