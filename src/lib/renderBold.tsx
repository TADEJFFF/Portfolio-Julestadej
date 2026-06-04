import React from "react";

/**
 * Parse **texte** dans une chaîne et retourne des ReactNodes
 * avec les mots importants en <strong>.
 */
export function renderBold(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-[#111111]">
        {part}
      </strong>
    ) : (
      part
    )
  );
}
