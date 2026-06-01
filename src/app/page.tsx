import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import APropos from "@/components/sections/APropos";
import Parcours from "@/components/sections/Parcours";
import Erasmus from "@/components/sections/Erasmus";
import StageFFF from "@/components/sections/StageFFF";
import Projets from "@/components/sections/Projets";
import Competences from "@/components/sections/Competences";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <APropos />
        <Parcours />
        <Erasmus />
        <StageFFF />
        <Projets />
        <Competences />
        <Contact />
      </main>
      <footer className="border-t border-[#1a1a1a] py-6 text-center">
        <p className="font-display text-xs text-[#6b6b6b]">
          Portfolio Jules TADEJ · BUT GEA GEMA · IUT de Paris – Rives de Seine · 2026
        </p>
      </footer>
    </>
  );
}
