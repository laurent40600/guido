export interface GuideOffer {
  id: string;
  label: string;
  price: string;
  originalPrice?: string;
  launchPromo?: { price: string; expiresAt: string };
  description: string;
  includes: string[];
  pdfFile: string;
  featured?: boolean;
}

export interface Guide {
  slug: string;
  title: string;
  tagline: string;
  pitch: string;
  price: string;
  format: string;
  audience: string;
  category: string;
  highlights: string[];
  faq: { question: string; answer: string }[];
  available: boolean;
  cover?: string;
  bestseller?: boolean;
  offers?: GuideOffer[];
}

export const guides: Guide[] = [
  {
    slug: "fiscal-auto-entrepreneur-2026",
    title: "Guide fiscal pour les auto-entrepreneurs en 2026",
    tagline: "Tout ce qui change en 2026, expliqué simplement, sans jargon",
    pitch:
      "Seuils de chiffre d'affaires, taux de cotisations, versement libératoire, nouvelles obligations déclaratives : la réglementation de la micro-entreprise évolue chaque année, et il est facile de rater une échéance ou de payer plus que nécessaire. Ce guide fait le point sur tout ce qui s'applique en 2026, avec des exemples chiffrés concrets.",
    price: "14,90€",
    format: "PDF · 53 pages",
    audience: "Auto-entrepreneurs en activité ou en cours de création en France",
    category: "Entrepreneuriat",
    cover: "/covers/fiscal-auto-entrepreneur-2026.png",
    bestseller: true,
    highlights: [
      "Créer sa micro-entreprise étape par étape via le guichet unique (délais, coûts, pièces à fournir)",
      "Les nouveaux seuils de chiffre d'affaires 2026, avec un exemple chiffré pour chacune des 3 catégories",
      "Cotisations sociales : calcul détaillé séparé pour la vente, les services BIC et les professions libérales BNC",
      "Versement libératoire : simulation comparative complète par catégorie et par tranche d'imposition",
      "Bien facturer : mentions obligatoires, nouveautés de septembre 2026 et pénalités de retard",
      "Trois études de cas complètes, une par catégorie, sur une année entière du lancement au bilan",
      "Le calendrier des déclarations mois par mois, l'Urssaf sans mauvaise surprise, et les erreurs les plus coûteuses à éviter",
    ],
    faq: [
      {
        question: "Le guide remplace-t-il un comptable ?",
        answer:
          "Non. Il vous donne une vision claire et à jour pour piloter votre activité et poser les bonnes questions, mais ne remplace pas un accompagnement personnalisé pour les situations complexes.",
      },
      {
        question: "Il couvre quelles activités ?",
        answer:
          "Les trois catégories de micro-entreprise : vente de marchandises, prestations de services (BIC), et professions libérales (BNC).",
      },
    ],
    available: true,
  },
  {
    slug: "ia-autoentrepreneurs",
    title: "L'IA pour les auto-entrepreneurs : automatiser devis, relances et compta",
    tagline: "Gagner des heures chaque semaine, sans compétences techniques",
    pitch:
      "Générer un devis en 5 minutes, relancer un client sans se fâcher avec lui, catégoriser ses dépenses en quelques clics : ChatGPT et Claude peuvent déjà faire une bonne partie de ces tâches administratives à votre place. Ce guide vous montre exactement quoi taper, dans quel outil, et surtout où s'arrête l'IA — avec des scripts, des prompts et des outils réels, prix à l'appui.",
    price: "19,90€",
    format: "PDF · 55 pages",
    audience: "Auto-entrepreneurs sans compétences techniques qui veulent gagner du temps sur l'administratif",
    category: "IA",
    cover: "/covers/ia-autoentrepreneurs.png",
    bestseller: true,
    highlights: [
      "Créer un devis complet et conforme avec l'IA en 5 minutes, template et proposition commerciale inclus",
      "Relancer un impayé sans se fâcher : scripts J+7/J+15/J+30, et la différence clé entre client pro et particulier",
      "Catégoriser ses dépenses et préparer sa déclaration Urssaf plus vite, avec les limites légales à connaître",
      "Deux études de cas complètes suivies sur plusieurs mois, avec de vrais chiffres",
      "20 prompts prêts à copier-coller pour chaque situation concrète",
      "Un plan de mise en place sur 3 semaines, checklist et erreurs à éviter",
    ],
    faq: [
      {
        question: "Faut-il payer un abonnement pour utiliser ce guide ?",
        answer:
          "Non. Les offres gratuites de ChatGPT et Claude suffisent pour la plupart des usages décrits. Un abonnement payant devient utile seulement si vous dépassez régulièrement les limites d'usage gratuites.",
      },
      {
        question: "L'IA peut-elle se tromper dans mes devis ou ma compta ?",
        answer:
          "Oui, c'est pourquoi ce guide insiste sur la vérification systématique des montants avant tout envoi ou déclaration officielle. L'IA accélère la rédaction, pas la responsabilité.",
      },
    ],
    available: true,
  },
  {
    slug: "ia-profs",
    title: "L'IA pour les profs : créer ses cours, corrections et exercices en deux fois moins de temps",
    tagline: "Récupérer tes soirées et tes week-ends, sans perdre en qualité pédagogique",
    pitch:
      "Générer une séquence pédagogique complète à partir d'un objectif, créer des exercices variés et des grilles de correction automatiquement, obtenir un premier passage de correction assisté sans jamais déléguer la notation finale : ce guide montre exactement quoi taper, dans ChatGPT ou Claude, pour chaque étape de ta préparation de cours — avec les limites RGPD et pédagogiques à connaître avant de t'y mettre.",
    price: "Dès 19€",
    format: "PDF · 53 à 65 pages",
    audience: "Enseignants du premier et du second degré qui veulent gagner du temps sans sacrifier la qualité pédagogique",
    category: "IA",
    cover: "/covers/ia-profs.png",
    bestseller: true,
    highlights: [
      "Générer une séquence pédagogique complète à partir d'un simple objectif, et l'adapter à plusieurs niveaux",
      "Créer des exercices progressifs, des QCM et des grilles de correction automatiquement",
      "Un premier passage de correction assisté par IA, avec ce qu'elle ne doit JAMAIS faire (notation finale, biais, RGPD élèves)",
      "Des cas particuliers concrets : remplaçant, professeur des écoles, lycée professionnel, REP/REP+, dispositifs d'inclusion",
      "Un plan de mise en place sur 3 semaines, checklist et erreurs à éviter",
      "En option, le Pack Prof : 30 prompts prêts à l'emploi classés par matière + un guide pas à pas pour recréer un template Canva de fiche de cours",
    ],
    faq: [
      {
        question: "Quelle est la différence entre les deux offres ?",
        answer:
          "Le Guide seul couvre la préparation de cours, les exercices/évaluations et la correction (Parties 1 à 4). Guide + Pack Prof ajoute en bonus 30 prompts prêts à l'emploi classés par matière et un guide pas à pas pour recréer un template Canva de fiche de cours.",
      },
      {
        question: "Faut-il payer un abonnement pour utiliser ce guide ?",
        answer:
          "Non. Les offres gratuites de ChatGPT et Claude suffisent pour la plupart des usages décrits. Un abonnement payant devient utile seulement si tu dépasses régulièrement les limites d'usage gratuites.",
      },
    ],
    available: true,
    offers: [
      {
        id: "seul",
        label: "Guide seul",
        price: "19€",
        originalPrice: "29€",
        launchPromo: { price: "14,90€", expiresAt: "2026-07-26T23:59:59" },
        description: "Préparer, créer des exercices et corriger plus vite",
        includes: [
          "Partie 1 — Préparer ses cours plus vite",
          "Partie 2 — Créer exercices et évaluations",
          "Partie 3 — Corriger plus vite (et ce que l'IA ne doit jamais faire)",
          "Partie 4 — Mettre en place ton système",
          "PDF · 53 pages",
        ],
        pdfFile: "ia-profs",
      },
      {
        id: "pack",
        label: "Guide + Pack Prof",
        price: "27€",
        description: "Tout le guide, plus le Pack Prof en bonus",
        includes: [
          "Tout le contenu du Guide seul (Parties 1 à 4)",
          "Bonus — 30 prompts prêts à l'emploi classés par matière",
          "Bonus — Le template Canva de fiche de cours, pas à pas",
          "PDF · 65 pages",
        ],
        pdfFile: "ia-profs-pack",
        featured: true,
      },
    ],
  },
  {
    slug: "ia-immobilier",
    title: "L'IA pour les agents immobiliers : rédiger ses annonces et répondre aux prospects deux fois plus vite",
    tagline: "Récupérer des heures chaque semaine, sans rien perdre du contact humain qui fait vendre",
    pitch:
      "Générer une annonce complète à partir de quelques infos brutes, répondre plus vite aux demandes de visite, qualifier un prospect avant de perdre du temps sur une visite peu sérieuse : ce guide montre exactement quoi taper, dans ChatGPT ou Claude, pour chaque étape de ta semaine — avec les limites à connaître (obligations légales d'affichage, contact humain) avant de t'y mettre.",
    price: "Dès 19€",
    format: "PDF · 49 à 61 pages",
    audience: "Agents immobiliers en France, sans compétences techniques, qui veulent gagner du temps sur la rédaction et le suivi des prospects",
    category: "IA",
    cover: "/covers/ia-immobilier.png",
    bestseller: true,
    highlights: [
      "Générer une annonce complète à partir de quelques infos brutes, et l'adapter selon le type de bien",
      "Scripts de réponse aux demandes de visite, relances après visite, et qualification rapide des prospects sérieux",
      "Posts Instagram/Facebook, réponses aux avis Google et newsletter mensuelle automatisée",
      "Des cas particuliers concrets : VEFA, location saisonnière, réseau de mandataires, biens de luxe, gestion locative",
      "Un plan de mise en place sur 3 semaines, checklist et erreurs à éviter (obligations légales d'affichage jamais déléguées à l'IA)",
      "En option, le Pack Agent : 30 prompts prêts à l'emploi classés par usage + un guide pas à pas pour recréer un template Canva de fiche bien immobilier",
    ],
    faq: [
      {
        question: "Quelle est la différence entre les deux offres ?",
        answer:
          "Le Guide seul couvre la rédaction d'annonces, le suivi des prospects et la communication (Parties 1 à 4). Guide + Pack Agent ajoute en bonus 30 prompts prêts à l'emploi classés par usage et un guide pas à pas pour recréer un template Canva de fiche bien immobilier.",
      },
      {
        question: "Faut-il payer un abonnement pour utiliser ce guide ?",
        answer:
          "Non. Les offres gratuites de ChatGPT et Claude suffisent pour la plupart des usages décrits. Un abonnement payant devient utile seulement si tu dépasses régulièrement les limites d'usage gratuites.",
      },
    ],
    available: true,
    offers: [
      {
        id: "seul",
        label: "Guide seul",
        price: "19€",
        originalPrice: "29€",
        launchPromo: { price: "14,90€", expiresAt: "2026-07-26T23:59:59" },
        description: "Rédiger, répondre aux prospects et communiquer plus vite",
        includes: [
          "Partie 1 — Rédiger des annonces qui vendent",
          "Partie 2 — Répondre aux prospects plus vite",
          "Partie 3 — Communication et réseaux sociaux",
          "Partie 4 — Mettre en place ton système",
          "PDF · 49 pages",
        ],
        pdfFile: "guido-ia-immobilier",
      },
      {
        id: "pack",
        label: "Guide + Pack Agent",
        price: "27€",
        description: "Tout le guide, plus le Pack Agent en bonus",
        includes: [
          "Tout le contenu du Guide seul (Parties 1 à 4)",
          "Bonus — 30 prompts prêts à l'emploi classés par usage",
          "Bonus — Le template Canva de fiche bien immobilier, pas à pas",
          "PDF · 61 pages",
        ],
        pdfFile: "guido-ia-immobilier-pack",
        featured: true,
      },
    ],
  },
  {
    slug: "freelance-40ans",
    title: "Devenir freelance après 40 ans : le guide pour sécuriser sa transition sans tout perdre",
    tagline: "Ton expérience est un vrai atout — encore faut-il sécuriser le saut correctement",
    pitch:
      "Calculer ton matelas de sécurité réel, connaître les dispositifs qui réduisent le risque (ARE, ACRE, portage salarial), transformer 15-20 ans de salariat en offre freelance claire, et décrocher tes 3 premiers clients en 90 jours grâce à ton réseau : ce guide te donne une méthode concrète pour sécuriser ta transition, sans minimiser les risques financiers réels d'une reconversion à cet âge.",
    price: "Dès 19€",
    format: "PDF · 49 à 60 pages",
    audience: "Salariés de 40 ans et plus qui envisagent de devenir freelance, avec des responsabilités financières (crédit, famille) qui rendent le saut plus risqué qu'à 25 ans",
    category: "Reconversion",
    cover: "/covers/freelance-40ans.png",
    bestseller: true,
    highlights: [
      "Calculer son matelas de sécurité réel et connaître les dispositifs à activer (ARE, ACRE, portage salarial, rupture conventionnelle vs démission)",
      "Transformer 15-20 ans de salariat en offre freelance claire, trouver son positionnement et fixer ses tarifs sans se sous-vendre",
      "Activer son réseau et utiliser LinkedIn pour un profil quadra/quinqua, avec une méthode pour décrocher ses 3 premiers clients en 90 jours",
      "Des cas particuliers concrets : conjoint sans revenu stable, cumul emploi-création, reconversion complète, profession réglementée",
      "Un plan de mise en place sur 3 à 6 mois, checklist et erreurs à éviter (démissionner trop vite, sous-estimer les charges, négliger la protection sociale)",
      "En option, le Pack Transition : 30 prompts prêts à l'emploi classés par usage + un guide pas à pas pour recréer un template Canva de one-pager freelance",
    ],
    faq: [
      {
        question: "Quelle est la différence entre les deux offres ?",
        answer:
          "Le Guide seul couvre la sécurisation financière, la valorisation de l'expérience et la prospection des premiers clients (Parties 1 à 4). Guide + Pack Transition ajoute en bonus 30 prompts prêts à l'emploi classés par usage et un guide pas à pas pour recréer un template Canva de one-pager freelance.",
      },
      {
        question: "Faut-il payer un abonnement pour utiliser ce guide ?",
        answer:
          "Non. Les offres gratuites de ChatGPT et Claude suffisent pour la plupart des usages décrits. Un abonnement payant devient utile seulement si tu dépasses régulièrement les limites d'usage gratuites.",
      },
    ],
    available: true,
    offers: [
      {
        id: "seul",
        label: "Guide seul",
        price: "19€",
        originalPrice: "29€",
        launchPromo: { price: "14,90€", expiresAt: "2026-07-26T23:59:59" },
        description: "Sécuriser sa transition, se valoriser et trouver ses premiers clients",
        includes: [
          "Partie 1 — Sécuriser sa transition financièrement",
          "Partie 2 — Valoriser son expérience",
          "Partie 3 — Trouver ses premiers clients",
          "Partie 4 — Mettre en place ton système",
          "PDF · 49 pages",
        ],
        pdfFile: "guido-freelance-40ans",
      },
      {
        id: "pack",
        label: "Guide + Pack Transition",
        price: "27€",
        description: "Tout le guide, plus le Pack Transition en bonus",
        includes: [
          "Tout le contenu du Guide seul (Parties 1 à 4)",
          "Bonus — 30 prompts prêts à l'emploi classés par usage",
          "Bonus — Le template Canva one-pager freelance, pas à pas",
          "PDF · 60 pages",
        ],
        pdfFile: "guido-freelance-40ans-pack",
        featured: true,
      },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
