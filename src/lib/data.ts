// ─── DONNÉES PERSONNELLES DE JULES TADEJ ────────────────────────────────────
// Générées depuis PORTFOLIO_CONTENU — ne pas modifier manuellement les données
// extraites des documents officiels.

export const personal = {
  firstName: "Jules",
  lastName: "TADEJ",
  fullName: "Jules TADEJ",
  email: "tadejjules@gmail.com",
  phone: "+33 7 83 74 27 84",
  location: "Vitry-sur-Seine (94), France",
  linkedin: "https://www.linkedin.com/in/jules-tadej-107612295",
  formation: "BUT Gestion des Entreprises et des Administrations",
  parcours: "GEMA — Management, Entrepreneuriat et Management d'Activités",
  iut: "IUT de Paris – Rives de Seine",
  universite: "Université Paris Cité",
  yearGrad: "2026",
  dispo: "Disponible à partir du 10 juillet 2026",
  accroche:
    "Étudiant en 3ᵉ année de BUT GEA GEMA, j'ai construit mon profil à travers l'entrepreneuriat primé, un Erasmus+ à Sofia et un stage au cœur du réseau fromager de France.",
};

export const stats = [
  { value: "3 ans", label: "BUT GEA GEMA" },
  { value: "34 ECTS", label: "Erasmus Sofia" },
  { value: "4", label: "Expériences pro" },
  { value: "6+", label: "Projets académiques" },
];

export const navLinks = [
  { label: "Parcours", href: "#parcours" },
  { label: "Erasmus", href: "#erasmus" },
  { label: "Stage FFF", href: "#stage" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];

// ─── TIMELINE PARCOURS ──────────────────────────────────────────────────────

export const parcours = [
  {
    periode: "2023 — 2024",
    label: "BUT 1 · S1 – S2",
    lieu: "IUT de Paris – Rives de Seine",
    events: [
      "Fondements GEA : comptabilité, économie, management",
      "Stage Radio FG — mars/avril 2024",
      "60 crédits ECTS validés",
    ],
    highlight: false,
    current: false,
  },
  {
    periode: "2024 — 2025",
    label: "BUT 2 · S3 – S4 · Parcours GEMA",
    lieu: "IUT de Paris – Rives de Seine",
    events: [
      "Spécialisation GEMA : entrepreneuriat, marketing, management",
      "Breathe&Go → Prix de l'entrepreneuriat + 1ᵉʳ Prix de l'innovation",
      "Projet marketing Caroll",
      "Fashion DAY : organisation et animation du défilé de mode (SAE Événementiel)",
      "Stage Caroll — Assistant Marketing Opérationnel (Janv.–Fév. 2025)",
    ],
    highlight: false,
    current: false,
  },
  {
    periode: "Oct. 2025 — Janv. 2026",
    label: "Erasmus+ · Semestre 5",
    lieu: "Sofia University St. Kliment Ohridski — Bulgarie",
    events: [
      "Cours intégralement en anglais (FEBA)",
      "34 ECTS validés · 5 mentions A sur 6 matières",
      "FEBA Social Room : site web pour financer la salle sociale de la faculté",
      "Immersion totale en environnement international",
    ],
    highlight: true,
    current: false,
  },
  {
    periode: "Fév. — Juil. 2026",
    label: "BUT 3 · S6 · Stage + SAEs",
    lieu: "IUT de Paris – Rives de Seine + UFIDF/FFF (Paris)",
    events: [
      "Stage UFIDF/FFF : prospection B2B, cartographie, animation réseau",
      "SAE Clariane : plan de communication corporate",
      "SAE UltraTonic : management de l'innovation (expansion USA)",
      "Développement outil de géocodage Python/Leaflet.js",
    ],
    highlight: false,
    current: true,
  },
];

// ─── ERASMUS ─────────────────────────────────────────────────────────────────

export const erasmusData = {
  universite: "Sofia University St. Kliment Ohridski",
  faculte: "Faculty of Economics and Business Administration",
  faculteAbr: "FEBA",
  ville: "Sofia",
  pays: "Bulgarie",
  periode: "Semestre d'hiver 2025/2026",
  langue: "Anglais",
  totalEcts: 34,
  studentId: "4EB9002666",
  courses: [
    {
      name: "Digital Business and Innovations",
      code: "EF R028",
      ects: 5,
      gradeLocal: 6,
      gradeECTS: "A",
    },
    {
      name: "Fundamentals of Management",
      code: "[À COMPLÉTER]",
      ects: 6,
      gradeLocal: 6,
      gradeECTS: "A",
    },
    {
      name: "Information Technologies and Systems",
      code: "[À COMPLÉTER]",
      ects: 6,
      gradeLocal: 6,
      gradeECTS: "A",
    },
    {
      name: "Marketing & Digital Marketing",
      code: "[À COMPLÉTER]",
      ects: 5,
      gradeLocal: 6,
      gradeECTS: "A",
    },
    {
      name: "Money, Banking and Financial Markets",
      code: "[À COMPLÉTER]",
      ects: 5,
      gradeLocal: 6,
      gradeECTS: "A",
    },
    {
      name: "Principles of Personal Finance",
      code: "[À COMPLÉTER]",
      ects: 7,
      gradeLocal: 3,
      gradeECTS: "D",
    },
  ],
};

// ─── STAGE FFF ───────────────────────────────────────────────────────────────

export const stageFFF = {
  organisation: "Union des Fromagers de l'Île-de-France",
  organisationAbr: "UFIDF",
  fede: "Fédération des Fromagers de France",
  fedeAbr: "FFF",
  repartition: "80 % UFIDF · 20 % FFF",
  lieu: "Paris — Châtelet",
  tuteur: "David Bazergue",
  periode: "1ᵉʳ avril – 10 juillet 2026",
  statut: "Stage en cours",
  contexte:
    "Stage de fin de BUT GEA GEMA visant à renforcer le développement commercial et la structuration du réseau des crémiers-fromagers en Île-de-France, et à soutenir les actions fédérales de la FFF au niveau national.",
  missions: [
    "Prospection et qualification B2B des crèmeries-fromageries IDF",
    "Prises de contact ciblées (email, LinkedIn, visites terrain)",
    "Recensement et cartographie des boutiques et marchés parisiens",
    "Actualisation et enrichissement de la base de données adhérents",
    "Benchmark des organisations professionnelles CGAD IDF",
    "Analyse des services aux adhérents UFIDF",
    "Présentation au Conseil d'Administration UFIDF (9 avril 2026)",
    "Animation des boucles WhatsApp membres et événements FFF",
    "Organisation du concours MAF (Meilleur Apprenti de France)",
    "Aide à l'organisation du Salon du Fromage",
    "Mise en place d'une enquête de satisfaction adhérents",
  ],
  livrables: [
    "Liste qualifiée des entreprises de crèmerie-fromagerie en IDF",
    "Tableau comparatif benchmark CGAD (synthèse + recommandations)",
    "Présentation au CA UFIDF — 9 avril 2026",
    "Calendrier et rapports de visites terrain",
    "Cartographie interactive membres (Python + Leaflet.js)",
    "Rapport de stage SAE601 — Jules TADEJ",
    "Synthèse globale et restitution finale (10 juillet 2026)",
  ],
  outils: ["Python", "Leaflet.js", "Excel · Power Query", "Logiciel 4D", "WhatsApp Business"],
};

// ─── PROJETS ─────────────────────────────────────────────────────────────────

export const projets = [
  {
    id: "breathe-go",
    but: "BUT 2",
    nom: "Breathe&Go",
    categorie: "Entrepreneuriat · SAE S3/S4",
    description:
      "Dispositif bloque-volant intelligent avec éthylotest intégré pour prévenir la conduite en état d'ivresse. Né d'un vécu personnel (2 accidents en 2023). Business plan complet, stratégie marketing Instagram/TikTok, livret investisseur.",
    resultats: ["🏆 Prix de l'entrepreneuriat 2ᵉ année", "🥇 1ᵉʳ Prix de l'innovation"],
    lien: "",
    competences: ["Entrepreneuriat", "Business Plan", "Marketing digital", "Pitch", "Réseaux sociaux"],
    featured: true,
  },
  {
    id: "caroll",
    but: "BUT 2",
    nom: "Stage Caroll",
    categorie: "Stage · Marketing opérationnel",
    description:
      "2 mois (janv.–fév. 2025) chez Caroll à Paris. Assistant Marketing Opérationnel : benchmarks web/physiques/newsletters, gestion hotline marketing, analyse des soldes et comportement client (Power BI, ClientFit). Mapping concurrentiel.",
    resultats: ["Mapping concurrentiel livré", "Analyse comportement client soldes"],
    lien: "",
    competences: ["Marketing opérationnel", "Power BI", "Analyse de données", "Benchmark"],
    featured: false,
  },
  {
    id: "radio-fg",
    but: "BUT 1",
    nom: "Stage Radio FG",
    categorie: "Stage · Marketing digital",
    description:
      "1 mois (mars-avril 2024) chez Radio FG, 51 rue de Rivoli, Paris. Mission : développer la marque FG DanceOne sur Instagram et TikTok pour les 18-25 ans. Veille concurrentielle sur 30+ radios et médias nationaux et internationaux.",
    resultats: ["Stratégie réseaux sociaux remise au PDG", "Veille sur 30+ médias"],
    lien: "",
    competences: ["Community management", "Stratégie réseaux sociaux", "Veille concurrentielle"],
    featured: false,
  },
  {
    id: "clariane",
    but: "BUT 3",
    nom: "Plan de comm — Clariane",
    categorie: "SAE S6 · Communication corporate",
    description:
      "Plan de communication corporate pour Clariane (groupe médico-social, ex-Korian). Rôle : Communication interne RH. Axe stratégique : transformer les collaborateurs en ambassadeurs (employee advocacy). Audit e-réputation Glassdoor/Trustpilot.",
    resultats: ["Plan de communication 6 pages livré", "Audit e-réputation complet"],
    lien: "",
    competences: ["Communication corporate", "E-réputation", "Employee advocacy", "Plan de comm"],
    featured: false,
  },
  {
    id: "stage-fff",
    but: "BUT 3",
    nom: "Stage UFIDF / FFF",
    categorie: "Stage · Développement commercial",
    description:
      "Stage de fin de BUT GEA GEMA au sein de l'Union des Fromagers de l'Île-de-France (80 %) et de la Fédération des Fromagers de France (20 %). Prospection B2B des crèmeries-fromageries, cartographie interactive, animation réseau adhérents, soutien au Salon du Fromage et au concours MAF.",
    resultats: [
      "Cartographie interactive Python + Leaflet.js",
      "Présentation au CA UFIDF — 9 avril 2026",
      "Benchmark CGAD livré avec recommandations",
    ],
    lien: "",
    competences: ["Prospection B2B", "Cartographie Python/Leaflet.js", "Gestion de réseau", "Animation événementielle"],
    featured: false,
  },
  {
    id: "feba-social-room",
    but: "BUT 3",
    nom: "FEBA Social Room",
    categorie: "Projet Erasmus · Entrepreneuriat social",
    description:
      "Projet réalisé intégralement en anglais à Sofia University (2025/2026) : création d'un site web pour promouvoir et financer une salle sociale au sein de la Faculty of Economics and Business Administration (FEBA). Campagne de dons, témoignages étudiants, appel à la communauté alumni.",
    resultats: [
      "Site Google Sites publié en ligne",
      "Campagne de dons & témoignages étudiants",
    ],
    lien: "https://sites.google.com/view/social-room-feba/home",
    competences: ["Entrepreneuriat social", "Communication digitale", "Anglais académique", "Gestion de projet"],
    featured: false,
  },
  {
    id: "defile-mode",
    but: "BUT 2",
    nom: "Fashion DAY",
    categorie: "Événementiel · SAE Tronc commun BUT2",
    description:
      "Organisation et animation du Fashion DAY, défilé de mode réalisé dans le cadre de la SAE Événementiel en tronc commun (BUT2). Triple casquette : coordination logistique de l'événement, création de contenu pour les réseaux sociaux (avant/pendant/après), et animation de la soirée en tant que speaker/présentateur.",
    resultats: [
      "Événement organisé et animé de A à Z",
      "Contenu réseaux sociaux produit et diffusé",
    ],
    lien: "",
    competences: ["Organisation événementielle", "Community management", "Prise de parole en public", "Communication digitale"],
    featured: false,
  },
  {
    id: "ultratonic",
    but: "BUT 3",
    nom: "Innovation — UltraTonic USA",
    categorie: "SAE S6 · Management de l'innovation",
    description:
      "Note de synthèse sur la stratégie d'expansion internationale d'UltraTonic (fitness B2B connecté) vers Boston et Philadelphie. Accompagnement du changement, mapping Mitchell parties prenantes, communication interne.",
    resultats: ["Note de synthèse réalisée", "Analyse parties prenantes Mitchell"],
    lien: "",
    competences: ["Management de l'innovation", "Stratégie internationale", "Accompagnement du changement"],
    featured: false,
  },
];

// ─── COMPÉTENCES BUT GEA ─────────────────────────────────────────────────────

export const competencesBUT = [
  {
    numero: "01",
    titre: "Gérer",
    description:
      "Analyser la situation d'une organisation, définir et déployer des stratégies de gestion, mobiliser les ressources humaines et financières.",
    preuves: [
      "Benchmark UFIDF : analyse des organisations professionnelles CGAD",
      "Business Plan Breathe&Go : modèle financier et prévisionnel complet",
      "Soutenance comptabilité et proposition de valeur BUT1/BUT2",
    ],
  },
  {
    numero: "02",
    titre: "Entreprendre",
    description:
      "Identifier des opportunités, concevoir, déployer et piloter une activité en mobilisant des compétences d'entrepreneuriat et d'innovation.",
    preuves: [
      "Breathe&Go : Prix de l'entrepreneuriat + 1ᵉʳ Prix de l'innovation (BUT2)",
      "FEBA Social Room (Sofia) : site web et campagne de dons, conçu en anglais",
      "Fashion DAY : organisation et animation d'un défilé de A à Z (BUT2)",
    ],
  },
  {
    numero: "03",
    titre: "Manager",
    description:
      "Fédérer des équipes, conduire le changement organisationnel, communiquer et coordonner dans des environnements complexes et multiculturels.",
    preuves: [
      "UltraTonic : accompagnement du changement, mapping Mitchell",
      "Clariane : employee advocacy, communication interne RH",
      "Présentation CA UFIDF devant les administrateurs (9 avril 2026)",
    ],
  },
];

export const skills = {
  outils: ["Pack Office", "Canva", "Power BI", "ClientFit", "Logiciel 4D", "Python", "HTML / JS"],
  marketing: [
    "Marketing digital",
    "Community management",
    "Instagram · TikTok · LinkedIn",
    "Plan de communication",
    "E-réputation",
    "Veille concurrentielle",
  ],
  management: [
    "Gestion de projet",
    "Entrepreneuriat",
    "Management de l'innovation",
    "Accompagnement du changement",
    "Organisation événementielle",
  ],
  langues: ["Français — Langue maternelle", "Anglais — C1", "Espagnol — A2"],
};
