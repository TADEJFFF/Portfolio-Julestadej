// ─── DONNÉES PERSONNELLES DE JULES TADEJ ────────────────────────────────────
// Générées depuis PORTFOLIO_CONTENU, ne pas modifier manuellement les données
// extraites des documents officiels.

export const personal = {
  firstName: "Jules",
  lastName: "TADEJ",
  fullName: "Jules TADEJ",
  email: "tadejjules@gmail.com",
  phone: "07 83 74 27 84",
  location: "Vitry-sur-Seine (94), France",
  linkedin: "https://www.linkedin.com/in/jules-tadej-107612295",
  formation: "BUT Gestion des Entreprises et des Administrations",
  parcours: "GEMA, Management, Entrepreneuriat et Management d'Activités",
  iut: "IUT de Paris – Rives de Seine",
  universite: "Université Paris Cité",
  yearGrad: "2026",
  dispo: "Disponible à partir du 10 juillet 2026",
  accroche:
    "Étudiant en 3ᵉ année de BUT GEA GEMA, j'ai construit mon profil à travers l'entrepreneuriat primé, un Erasmus+ à Sofia et un stage au cœur du réseau fromager de France.",
};

export const stats = [
  { value: "3 ans", label: "BUT GEA GEMA" },
  { value: "4", label: "Expériences pro" },
  { value: "6+", label: "Projets académiques" },
];

export const navLinks = [
  { label: "À propos", href: "/apropos" },
  { label: "Parcours", href: "/parcours" },
  { label: "Erasmus", href: "/erasmus" },
  { label: "Stage FFF", href: "/stage" },
  { label: "Projets", href: "/projets" },
  { label: "Compétences", href: "/competences" },
  { label: "Contact", href: "/contact" },
];

// ─── TIMELINE PARCOURS ──────────────────────────────────────────────────────

export const parcours = [
  {
    periode: "2020, 2023",
    label: "Baccalauréat STMG · Option Mercatique",
    lieu: "Lycée Victor Hugo, Poitiers (86)",
    events: [
      "**Baccalauréat STMG** mention Assez Bien",
      "Stage, Concession **Citroën/DS Stellantis**, Poitiers",
      "Stage, **Radio FG**, Paris",
      "Décision : quitter Poitiers pour intégrer un **BUT GEA à Paris**",
    ],
    releves: [
      { label: "Diplôme Bac STMG", url: "/diplome-bac-stmg-2023.pdf" },
    ],
    highlight: false,
    current: false,
  },
  {
    periode: "2023, 2024",
    label: "BUT 1 · S1 – S2",
    lieu: "IUT de Paris – Rives de Seine",
    events: [
      "Fondements GEA : **comptabilité, économie, management**",
      "**Stage Radio FG**, mars/avril 2024",
      "**60 crédits ECTS** validés",
    ],
    releves: [
      { label: "Relevé S1", url: "/releves/semestre-1.pdf" },
      { label: "Relevé S2", url: "/releves/semestre-2.pdf" },
    ],
    highlight: false,
    current: false,
  },
  {
    periode: "2024, 2025",
    label: "BUT 2 · S3 – S4 · Parcours GEMA",
    lieu: "IUT de Paris – Rives de Seine",
    events: [
      "Spécialisation GEMA : **entrepreneuriat, marketing, management**",
      "**Breathe&Go** → **Prix de l'entrepreneuriat** + 1ᵉʳ Prix de l'innovation",
      "**Fashion DAY** : organisation et animation du défilé de mode",
      "**Stage Caroll**, Assistant Marketing Opérationnel (Janv.–Fév. 2025)",
    ],
    releves: [
      { label: "Relevé S3", url: "/releves/semestre-3.pdf" },
      { label: "Relevé S4", url: "/releves/semestre-4.pdf" },
    ],
    highlight: false,
    current: false,
  },
  {
    periode: "Oct. 2025, Janv. 2026",
    label: "Erasmus+ · Semestre 5",
    lieu: "Sofia University St. Kliment Ohridski, Bulgarie",
    events: [
      "Cours **intégralement en anglais** (FEBA)",
      "**34 ECTS validés** · 5 mentions A sur 6 matières",
      "**FEBA Social Room** : site web pour financer la salle sociale de la faculté",
      "Immersion totale en **environnement international**",
    ],
    releves: [
      { label: "Transcript of Records", url: "/transcript-of-records-erasmus.pdf" },
    ],
    highlight: true,
    current: false,
  },
  {
    periode: "Fév., Juil. 2026",
    label: "BUT 3 · S6 · Stage + SAEs",
    lieu: "IUT de Paris – Rives de Seine + UFIDF/FFF (Paris)",
    events: [
      "**Stage UFIDF/FFF** : prospection B2B, cartographie, animation réseau",
      "SAE Clariane : **plan de communication corporate**",
      "SAE UltraTonic : **management de l'innovation** (expansion USA)",
    ],
    releves: [],
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
  lieu: "Paris, Châtelet",
  tuteur: "David Bazergue",
  periode: "1ᵉʳ avril – 10 juillet 2026",
  statut: "Stage en cours",
  contexte:
    "Stage de fin de BUT GEA GEMA visant à renforcer le développement commercial et la structuration du réseau des crémiers-fromagers en Île-de-France, et à soutenir les actions fédérales de la FFF au niveau national.",
  missions: [
    "**Prospection et qualification B2B** des crèmeries-fromageries IDF",
    "Prises de contact ciblées (email, phoning, **visites terrain**)",
    "**Recensement et cartographie** des boutiques et marchés parisiens",
    "Actualisation et enrichissement de la **base de données adhérents**",
    "**Benchmark** des organisations professionnelles CGAD IDF",
    "Analyse des services aux adhérents UFIDF",
    "**Présentation au Conseil d'Administration FFF** (18 mai 2026)",
    "Animation des **boucles WhatsApp** membres et événements FFF",
    "Organisation du **concours MAF** (Meilleur Apprenti de France)",
    "Aide à l'organisation du **Salon du Fromage**",
    "Mise en place d'une **enquête de satisfaction** adhérents",
  ],
  livrables: [
    "**Liste qualifiée** des entreprises de crèmerie-fromagerie en France",
    "Tableau comparatif benchmark CGAD (synthèse + **recommandations**)",
    "**Présentation au CA FFF**, 18 mai 2026",
    "Calendrier et rapports de **visites terrain**",
    "**Cartographie interactive membres** (Python + Leaflet.js)",
    "Synthèse globale et **restitution finale** (10 juillet 2026)",
    "**Enquête de satisfaction** adhérents UFIDF/FFF 2026",
  ],
  outils: ["Python", "Leaflet.js", "Excel · Power Query", "Logiciel 4D", "WhatsApp Business"],
};

// ─── PROJETS ─────────────────────────────────────────────────────────────────

export const projets = [
  {
    id: "breathe-go",
    but: "BUT 2",
    nom: "Breathe&Go",
    categorie: "SAE BUT 2 · Entrepreneuriat",
    logo: "/logos/logo-breathego.png",
    description:
      "**Dispositif bloque-volant intelligent** avec éthylotest intégré pour prévenir la conduite en état d'ivresse. Né d'un **vécu personnel** (2 accidents en 2023). **Business plan complet**, stratégie marketing Instagram/TikTok, livret investisseur.",
    resultats: ["🏆 Prix de l'entrepreneuriat 2ᵉ année", "🥇 1ᵉʳ Prix de l'innovation"],
    lien: "/documents/livret-investisseur-breathego.pdf",
    instagram: "https://www.instagram.com/breatheandgo_project/",
    competences: ["Entrepreneuriat", "Business Plan", "Marketing digital", "Pitch", "Réseaux sociaux"],
    featured: true,
  },
  {
    id: "caroll",
    but: "BUT 2",
    nom: "Stage Caroll",
    categorie: "Stage · Marketing opérationnel",
    logo: "/logos/logo-caroll.png",
    description:
      "2 mois (janv.–fév. 2025) chez **Caroll** à Paris. **Assistant Marketing Opérationnel** : benchmarks web/physiques/newsletters, gestion hotline marketing, **analyse des soldes** et comportement client (Power BI, ClientFit). **Mapping concurrentiel**.",
    resultats: ["Mapping concurrentiel livré", "Analyse comportement client soldes"],
    lien: "/documents/benchmark-caroll.pdf",
    liensExtra: [
      { label: "Analyse Soldes AH24", url: "/documents/analyse-soldes-caroll.pptx" },
    ],
    instagram: "",
    competences: ["Marketing opérationnel", "Power BI", "Analyse de données", "Benchmark"],
    featured: false,
  },
  {
    id: "radio-fg",
    but: "BUT 1",
    nom: "Stage Radio FG",
    categorie: "Stage · Marketing digital",
    logo: "/logos/logo-radiofg.png",
    description:
      "1 mois (mars-avril 2024) chez **Radio FG**, 51 rue de Rivoli, Paris. Mission : développer la marque **FG DanceOne** sur Instagram et TikTok pour les **18-25 ans**. **Veille concurrentielle** sur 30+ radios et médias nationaux et internationaux.",
    resultats: ["Stratégie réseaux sociaux remise au PDG", "Veille sur 30+ médias"],
    lien: "",
    instagram: "",
    competences: ["Community management", "Stratégie réseaux sociaux", "Veille concurrentielle"],
    featured: false,
  },
  {
    id: "clariane",
    but: "BUT 3",
    nom: "Plan de comm, Clariane",
    categorie: "SAE S6 · Communication corporate",
    logo: "/logos/logo-clariane.png",
    description:
      "Plan de communication corporate pour **Clariane** (groupe médico-social, ex-Korian). Rôle : **Communication interne RH**. Axe stratégique : transformer les collaborateurs en **ambassadeurs** (employee advocacy). **Audit e-réputation** Glassdoor/Trustpilot.",
    resultats: ["Plan de communication 6 pages livré", "Audit e-réputation complet"],
    lien: "/documents/plan-comm-clariane.pdf",
    instagram: "",
    competences: ["Communication corporate", "E-réputation", "Employee advocacy", "Plan de comm"],
    featured: false,
  },
  {
    id: "stage-fff",
    but: "BUT 3",
    nom: "Stage UFIDF / FFF",
    categorie: "Stage · Développement commercial",
    logo: "/logos/logo-fff-new.png",
    description:
      "Stage de fin de BUT GEA GEMA au sein de l'**UFIDF** (80 %) et de la **FFF** (20 %). **Prospection B2B** des crèmeries-fromageries, **cartographie interactive**, animation réseau adhérents, soutien au **Salon du Fromage** et au **concours MAF**.",
    resultats: [
      "Cartographie interactive Python + Leaflet.js",
      "Présentation au CA FFF, 18 mai 2026",
      "Benchmark CGAD livré avec recommandations",
    ],
    lien: "https://tadejfff.github.io/MAPIDFC/",
    instagram: "",
    competences: ["Prospection B2B", "Cartographie Python/Leaflet.js", "Gestion de réseau", "Animation événementielle"],
    featured: false,
  },
  {
    id: "feba-social-room",
    but: "BUT 3",
    nom: "FEBA Social Room",
    categorie: "Projet Erasmus · Entrepreneuriat social",
    logo: "/logos/logo-feba.png",
    description:
      "Projet réalisé **intégralement en anglais** à Sofia University (2025/2026) : création d'un **site web** pour promouvoir et financer une salle sociale au sein de la **FEBA**. **Campagne de dons**, témoignages étudiants, appel à la communauté alumni.",
    resultats: [
      "Site Google Sites publié en ligne",
      "Campagne de dons & témoignages étudiants",
    ],
    lien: "https://sites.google.com/view/social-room-feba/home",
    instagram: "",
    competences: ["Entrepreneuriat social", "Communication digitale", "Anglais académique", "Gestion de projet"],
    featured: false,
  },
  {
    id: "defile-mode",
    but: "BUT 2",
    nom: "Fashion DAY",
    categorie: "SAE BUT 2 · Événementiel",
    logo: "/logos/logo-fashionday.png",
    description:
      "Organisation et animation du **Fashion DAY**, défilé de mode en tronc commun (BUT2). **Triple casquette** : coordination logistique de l'événement, **création de contenu** pour les réseaux sociaux (avant/pendant/après), et animation de la soirée en tant que **speaker/présentateur**.",
    resultats: [
      "Événement organisé et animé de A à Z",
      "Contenu réseaux sociaux produit et diffusé",
    ],
    lien: "",
    affiche: "/documents/affiche-fashionday.png",
    instagram: "https://www.instagram.com/fashionday_iut/",
    competences: ["Organisation événementielle", "Community management", "Prise de parole en public", "Communication digitale"],
    featured: false,
  },
  {
    id: "ultratonic",
    but: "BUT 3",
    nom: "Innovation, UltraTonic USA",
    categorie: "SAE S6 · Management de l'innovation",
    logo: "/logos/logo-ultratonic.png",
    description:
      "Note de synthèse sur la **stratégie d'expansion internationale** d'UltraTonic (fitness B2B connecté) vers **Boston et Philadelphie**. **Accompagnement du changement**, mapping Mitchell parties prenantes, communication interne.",
    resultats: ["Note de synthèse réalisée", "Analyse parties prenantes Mitchell"],
    lien: "/documents/note-synthese-ultratonic.pdf",
    instagram: "",
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
      "Présentation CA FFF (18 mai 2026)",
    ],
  },
];

// ─── RÉFÉRENTIEL BUT GEA GEMA, 5 COMPÉTENCES OFFICIELLES ──────────────────

export type Niveau = "apprentissage" | "acquis" | "maitrise";

export interface AC {
  code: string;
  titre: string;
  maitrise: Niveau;
}

export interface NiveauRef {
  n: number;
  titre: string;
  acs: AC[];
}

export interface Competence5 {
  id: string;
  titre: string;
  accent: string;
  niveaux: NiveauRef[];
  niveauAtteint: number;
  progression: { but1: string; but2: string; but3: string };
  preuves: string[];
}

export const competences5: Competence5[] = [
  {
    id: "analyser",
    titre: "Analyser",
    accent: "#ef4444",
    niveauAtteint: 3,
    niveaux: [
      {
        n: 1,
        titre: "Identifier les processus de l'organisation",
        acs: [
          { code: "AC11.01", titre: "Identifier les différents types d'enjeux", maitrise: "maitrise" },
          { code: "AC11.02", titre: "Qualifier les différents types d'organisations", maitrise: "maitrise" },
          { code: "AC11.03", titre: "Identifier les parties prenantes et leurs relations au sein d'un processus", maitrise: "maitrise" },
        ],
      },
      {
        n: 2,
        titre: "Évaluer les processus de l'organisation",
        acs: [
          { code: "AC21.01", titre: "Analyser les différents types d'enjeux", maitrise: "maitrise" },
          { code: "AC21.02", titre: "Analyser les dimensions identitaires (juridiques, managériales…) de l'organisation", maitrise: "acquis" },
          { code: "AC21.03", titre: "Évaluer le niveau de performance des processus", maitrise: "acquis" },
        ],
      },
      {
        n: 3,
        titre: "Conseiller pour l'amélioration des processus de l'organisation",
        acs: [
          { code: "AC31.01", titre: "Intégrer l'impact des enjeux sur l'organisation", maitrise: "acquis" },
          { code: "AC31.02", titre: "Conseiller un type d'organisation", maitrise: "acquis" },
          { code: "AC31.03", titre: "Proposer des améliorations des processus", maitrise: "maitrise" },
        ],
      },
    ],
    progression: {
      but1: "Premiers outils d'analyse : **cartographie des processus**, comptabilité, économie.",
      but2: "Évaluation des processus en **stage Caroll**, benchmarks web, physique et newsletters. **Analyse comportement client** (Power BI, ClientFit).",
      but3: "**Benchmark CGAD** livré avec recommandations stratégiques au **CA FFF** (mai 2026). Amélioration des processus d'adhésion UFIDF.",
    },
    preuves: [
      "**Benchmark CGAD/UFIDF**, recommandations remises au CA FFF (2026)",
      "**Analyse concurrentielle Caroll**, Power BI + ClientFit",
      "**Enquête satisfaction adhérents** UFIDF pilotée de A à Z",
    ],
  },
  {
    id: "decider",
    titre: "Décider",
    accent: "#f97316",
    niveauAtteint: 3,
    niveaux: [
      {
        n: 1,
        titre: "Identifier les éléments d'aide à la prise de décision",
        acs: [
          { code: "AC12.01", titre: "Identifier les composantes du système d'information de gestion", maitrise: "acquis" },
          { code: "AC12.02", titre: "Rechercher, collecter et traiter les données brutes afin de produire une information structurée", maitrise: "maitrise" },
          { code: "AC12.03", titre: "Identifier les contraintes qui s'imposent à l'organisation", maitrise: "maitrise" },
          { code: "AC12.04", titre: "Identifier les risques", maitrise: "acquis" },
        ],
      },
      {
        n: 2,
        titre: "Évaluer les éléments d'aide à la prise de décision",
        acs: [
          { code: "AC22.01", titre: "Analyser les enjeux du système d'information et leur impact sur le fonctionnement de l'organisation", maitrise: "acquis" },
          { code: "AC22.02", titre: "Exploiter un ERP/PGI et ses fonctionnalités de base", maitrise: "acquis" },
          { code: "AC22.03", titre: "Traiter les données pertinentes pour répondre à une problématique", maitrise: "maitrise" },
          { code: "AC22.04", titre: "Analyser les contraintes et leur impact sur le fonctionnement et la performance de l'organisation", maitrise: "acquis" },
          { code: "AC22.05", titre: "Évaluer les risques", maitrise: "acquis" },
        ],
      },
      {
        n: 3,
        titre: "Concourir à la prise de décision",
        acs: [
          { code: "AC32.01", titre: "Collaborer au processus d'amélioration continue du système d'information", maitrise: "apprentissage" },
          { code: "AC32.02", titre: "Exploiter les données pour accompagner la prise de décision", maitrise: "acquis" },
          { code: "AC32.03", titre: "Participer à la prise de décision en fonction des contraintes identifiées", maitrise: "maitrise" },
          { code: "AC32.04", titre: "Élaborer des mesures préventives de minimalisation des risques", maitrise: "acquis" },
        ],
      },
    ],
    progression: {
      but1: "Identification des outils d'aide à la décision. **Stage Radio FG** : premières **recommandations stratégiques** remises seul au PDG.",
      but2: "Évaluation des décisions marketing chez **Caroll**. **Business Plan Breathe&Go** : arbitrages stratégiques et choix d'investissement.",
      but3: "**Présentation au CA FFF, 18 mai 2026**, avec recommandations concrètes devant les élus nationaux.",
    },
    preuves: [
      "**Présentation CA FFF**, 18 mai 2026 (élus nationaux)",
      "**Business Plan Breathe&Go**, arbitrages financiers & stratégiques",
      "**Stratégie réseaux sociaux** remise au PDG de Radio FG (BUT 1)",
    ],
  },
  {
    id: "piloter",
    titre: "Piloter",
    accent: "#eab308",
    niveauAtteint: 3,
    niveaux: [
      {
        n: 1,
        titre: "Identifier les relations entre les parties prenantes",
        acs: [
          { code: "AC13.01", titre: "Identifier ses qualités individuelles", maitrise: "maitrise" },
          { code: "AC13.02", titre: "Identifier les relations inter-personnelles et collectives", maitrise: "maitrise" },
          { code: "AC13.03", titre: "Travailler en équipe avec méthodes", maitrise: "maitrise" },
          { code: "AC13.04", titre: "Utiliser de façon pertinente les techniques de communication", maitrise: "maitrise" },
        ],
      },
      {
        n: 2,
        titre: "Coordonner les relations entre les parties prenantes",
        acs: [
          { code: "AC23.01", titre: "Mobiliser ses qualités individuelles au service de l'intelligence collective", maitrise: "maitrise" },
          { code: "AC23.02", titre: "Analyser les relations inter-personnelles et collectives dans la stratégie de l'organisation", maitrise: "acquis" },
          { code: "AC23.03", titre: "Utiliser les outils d'organisation et méthodes dédiés au travail collaboratif", maitrise: "acquis" },
          { code: "AC23.04", titre: "Combiner les méthodes de communication en lien avec la stratégie", maitrise: "maitrise" },
        ],
      },
      {
        n: 3,
        titre: "Améliorer les relations entre les parties prenantes",
        acs: [
          { code: "AC33.01", titre: "Animer une équipe", maitrise: "maitrise" },
          { code: "AC33.02", titre: "Mener un projet collaboratif", maitrise: "maitrise" },
          { code: "AC33.03", titre: "Participer à l'amélioration de la politique de communication en lien avec la stratégie", maitrise: "acquis" },
        ],
      },
    ],
    progression: {
      but1: "**Cartographie des parties prenantes** en SAE, identification des acteurs clés.",
      but2: "**Fashion DAY** : coordination équipe + **speaker/présentateur** devant public. Coordination pluripartenariale **Breathe&Go**.",
      but3: "**Animation réseau adhérents FFF**. SAE UltraTonic : **mapping Mitchell**. Erasmus : coordination en contexte international.",
    },
    preuves: [
      "**Animation réseau adhérents FFF**, boucles WhatsApp + événements",
      "**Mapping parties prenantes Mitchell**, SAE UltraTonic USA",
      "**Fashion DAY** : coordination équipe + animation en public (BUT 2)",
      "**Clariane** : plan de communication interne RH, employee advocacy",
    ],
  },
  {
    id: "entreprendre",
    titre: "Entreprendre",
    accent: "#22c55e",
    niveauAtteint: 2,
    niveaux: [
      {
        n: 1,
        titre: "Modéliser la proposition de valeur",
        acs: [
          { code: "AC24.01", titre: "S'adapter aux évolutions induites par le contexte d'incertitude", maitrise: "maitrise" },
          { code: "AC24.02", titre: "Évaluer le potentiel d'un marché à partir d'une collecte d'informations pertinentes", maitrise: "maitrise" },
          { code: "AC24.03", titre: "Modéliser les composantes d'un business model d'une entité existante", maitrise: "maitrise" },
          { code: "AC24.04", titre: "Apprécier la cohérence d'un business model et de son business plan", maitrise: "maitrise" },
        ],
      },
      {
        n: 2,
        titre: "Sécuriser la proposition de valeur",
        acs: [
          { code: "AC34.01", titre: "Tester la viabilité financière d'un business model", maitrise: "acquis" },
          { code: "AC34.02", titre: "Apprécier les risques financiers, fiscaux et juridiques de l'entité ou de l'entrepreneur", maitrise: "acquis" },
          { code: "AC34.03", titre: "Préconiser les mesures de protection contre les risques", maitrise: "apprentissage" },
          { code: "AC34.04", titre: "Persuader une partie prenante de la viabilité du business plan", maitrise: "maitrise" },
          { code: "AC34.05", titre: "Confronter son projet à son expérience de terrain", maitrise: "maitrise" },
        ],
      },
    ],
    progression: {
      but1: "Curiosité entrepreneuriale activée. Premiers projets collectifs mais pas encore de **création propre**.",
      but2: "**Breathe&Go** : de l'idée (vécu personnel) à la **proposition de valeur complète**. **2 prix remportés**.",
      but3: "**SAE UltraTonic** (expansion USA), **FEBA Social Room** (Sofia, en anglais). Prospection B2B FFF pour pérenniser le réseau adhérents.",
    },
    preuves: [
      "**Breathe&Go**, Prix de l'entrepreneuriat + 1ᵉʳ Prix de l'innovation (BUT 2)",
      "**FEBA Social Room**, projet entrepreneurial mené en anglais à Sofia",
      "**Note de synthèse UltraTonic**, expansion Boston & Philadelphie",
    ],
  },
  {
    id: "developper",
    titre: "Développer",
    accent: "#3b82f6",
    niveauAtteint: 2,
    niveaux: [
      {
        n: 1,
        titre: "Développer la chaîne de valeur",
        acs: [
          { code: "AC25.01", titre: "Promouvoir un projet, un événement ou une organisation par des actions de communication adaptées", maitrise: "maitrise" },
          { code: "AC25.02", titre: "Identifier la variété et la complexité des processus de production et de supply chain", maitrise: "acquis" },
          { code: "AC25.03", titre: "Utiliser les techniques de négociation avec les partenaires commerciaux", maitrise: "acquis" },
          { code: "AC25.04", titre: "Évaluer les axes d'une démarche de marketing opérationnel y compris digitale", maitrise: "maitrise" },
          { code: "AC25.05", titre: "Évaluer le risque de trésorerie", maitrise: "apprentissage" },
          { code: "AC25.06", titre: "Contribuer à la gestion opérationnelle des ressources humaines", maitrise: "apprentissage" },
        ],
      },
      {
        n: 2,
        titre: "Optimiser la chaîne de valeur",
        acs: [
          { code: "AC35.01", titre: "Concevoir une stratégie de communication en utilisant les outils adaptés y compris digitaux", maitrise: "maitrise" },
          { code: "AC35.02", titre: "Mettre en œuvre des processus de production et de supply chain adaptés à la situation de l'entité", maitrise: "apprentissage" },
          { code: "AC35.03", titre: "Concevoir une démarche de marketing opérationnel adaptée à l'entité", maitrise: "maitrise" },
          { code: "AC35.04", titre: "Prévenir les risques de défaillance avec les outils adaptés", maitrise: "acquis" },
          { code: "AC35.05", titre: "Déterminer les axes principaux d'une politique de ressources humaines dans l'entité", maitrise: "acquis" },
        ],
      },
    ],
    progression: {
      but1: "Compréhension des **mécanismes de création de valeur** en cours théoriques.",
      but2: "**Stage Caroll** : développement de la chaîne de valeur marketing, **benchmark**, analyse concurrentielle, optimisation des actions commerciales.",
      but3: "Optimisation de la **chaîne de valeur adhérents UFIDF**, **prospection B2B**, **cartographie Python/Leaflet.js**, enrichissement base de données.",
    },
    preuves: [
      "**Cartographie interactive membres UFIDF**, Python + Leaflet.js",
      "**Stage Caroll**, mapping concurrentiel + optimisation marketing opérationnel",
      "**Prospection B2B** 100+ crèmeries-fromageries IDF (UFIDF/FFF)",
    ],
  },
];

export const skills = {
  outils: ["Pack Office", "Canva", "Power BI", "ClientFit", "Logiciel 4D", "Python"],
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
  langues: ["Français, Langue maternelle", "Anglais, C1", "Espagnol, A2"],
};
