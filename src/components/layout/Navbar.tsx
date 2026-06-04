"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu mobile au changement de page
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#b8b8b8]"
          : "bg-white border-b border-[#e0e0e0]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display font-bold text-xl tracking-tight group">
          <span className="text-[#9A7200]">J</span>
          <span className="text-[#111111]">T</span>
          <span className="ml-2 text-xs text-[#444444] font-normal hidden sm:inline group-hover:text-[#9A7200] transition-colors duration-200">
            BUT GEA GEMA
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-display text-sm font-medium px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-[#9A7200] bg-[#FFD300]/10 font-bold"
                    : "text-[#222222] hover:text-[#111111] hover:bg-[#f0f0f0]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="font-display text-sm font-bold ml-2 px-4 py-2 rounded-md bg-[#FFD300] text-[#111111] hover:bg-[#e6be00] transition-all duration-200"
            >
              Me contacter
            </Link>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden text-[#222222] hover:text-[#111111] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-[#b8b8b8] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-sm font-medium py-3 text-left border-b border-[#eeeeee] last:border-0 transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-[#9A7200] font-bold"
                  : "text-[#222222] hover:text-[#111111]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-display text-sm font-bold mt-2 py-3 rounded-md bg-[#FFD300] text-[#111111] text-center block"
          >
            Me contacter
          </Link>
        </div>
      )}
    </header>
  );
}
