import type { Metadata } from "next";
import { Syne, Instrument_Serif } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jules TADEJ — Portfolio BUT GEA GEMA",
  description:
    "Portfolio académique et professionnel de Jules TADEJ, étudiant en BUT GEA parcours GEMA à l'IUT de Paris – Rives de Seine. Erasmus+ Sofia, Stage UFIDF/FFF, Breathe&Go (Prix de l'entrepreneuriat).",
  keywords: [
    "Jules TADEJ",
    "BUT GEA",
    "GEMA",
    "IUT Paris",
    "Erasmus Sofia",
    "Stage FFF",
    "Marketing",
    "Entrepreneuriat",
  ],
  authors: [{ name: "Jules TADEJ" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-[#f5f5f5] text-[#e2e2e2] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
