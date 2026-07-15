export interface GuideOffer {
  id: string;
  label: string;
  price: string;
  originalPrice?: string;
  launchPromo?: { price: string; expiresAt: string };
  description: string;
  includes: string[];
  // Absent pour une offre "bundle" : il n'y a pas un seul fichier à servir,
  // voir `Guide.bundleOf` sur le guide parent pour la liste des accès réels
  // accordés à l'achat.
  pdfFile?: string;
  featured?: boolean;
}

// Avis client affiché sur la page produit et agrégé dans le Product Schema
// (aggregateRating) une fois au moins un avis présent. Ajoutés manuellement.
export interface GuideReview {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  date: string;
}

export interface Guide {
  slug: string;
  title: string;
  tagline: string;
  pitch: string;
  // Balises SEO dédiées (title 55-60 car., meta description 150-160 car.).
  // Si absentes, generateMetadata retombe sur `${title} — Guido` / `pitch`.
  seoTitle?: string;
  seoDescription?: string;
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
  promptPreview?: { title: string; text: string }[];
  crossSell?: string[];
  // Catégories additionnelles où ce guide doit aussi apparaître, en plus de
  // sa `category` principale (ex. un bundle "Packs" listé aussi sous "Prompts").
  crossListCategories?: string[];
  // Pour un guide bundle : les (guideSlug, offerId) réels à créditer à
  // l'acheteur. L'achat du bundle ne crée pas de Purchase sur son propre
  // slug — il crédite directement les guides existants listés ici, pour
  // réutiliser tel quel le système de téléchargement/filigrane/limite.
  bundleOf?: { guideSlug: string; offerId: string }[];
  reviews?: GuideReview[];
}

export const guides: Guide[] = [
  {
    slug: "fiscal-auto-entrepreneur-2026",
    title: "Guide fiscal pour les auto-entrepreneurs en 2026",
    tagline: "Tout ce qui change en 2026, expliqué simplement, sans jargon",
    pitch:
      "Seuils de chiffre d'affaires, taux de cotisations, versement libératoire, nouvelles obligations déclaratives : la réglementation de la micro-entreprise évolue chaque année, et il est facile de rater une échéance ou de payer plus que nécessaire. Ce guide fait le point sur tout ce qui s'applique en 2026, avec des exemples chiffrés concrets.",
    seoTitle: "Fiscalité auto-entrepreneur 2026 : le guide complet — Guido",
    seoDescription: "Seuils, cotisations, versement libératoire : tout ce qui change pour les auto-entrepreneurs en 2026, expliqué simplement avec des exemples chiffrés concrets.",
    price: "14,90€",
    format: "PDF · 52 pages",
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
    crossSell: ["ia-autoentrepreneurs", "micro-entreprise-2026"],
  },
  {
    slug: "ia-autoentrepreneurs",
    title: "L'IA pour les auto-entrepreneurs : automatiser devis, relances et compta",
    tagline: "Gagner des heures chaque semaine, sans compétences techniques",
    pitch:
      "Générer un devis en 5 minutes, relancer un client sans se fâcher avec lui, catégoriser ses dépenses en quelques clics : ChatGPT et Claude peuvent déjà faire une bonne partie de ces tâches administratives à votre place. Ce guide vous montre exactement quoi taper, dans quel outil, et surtout où s'arrête l'IA — avec des scripts, des prompts et des outils réels, prix à l'appui.",
    seoTitle: "IA pour auto-entrepreneurs : devis, relances, compta — Guido",
    seoDescription: "ChatGPT pour auto-entrepreneurs : générer un devis en 5 min, relancer un client, catégoriser ses dépenses. Prompts et outils concrets, prix à l'appui.",
    price: "19,90€",
    format: "PDF · 56 pages",
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
    crossSell: ["fiscal-auto-entrepreneur-2026", "prompts-images-ia"],
  },
  {
    slug: "ia-profs",
    title: "L'IA pour les profs : créer ses cours, corrections et exercices en deux fois moins de temps",
    tagline: "Récupérer tes soirées et tes week-ends, sans perdre en qualité pédagogique",
    pitch:
      "Générer une séquence pédagogique complète à partir d'un objectif, créer des exercices variés et des grilles de correction automatiquement, obtenir un premier passage de correction assisté sans jamais déléguer la notation finale : ce guide montre exactement quoi taper, dans ChatGPT ou Claude, pour chaque étape de ta préparation de cours — avec les limites RGPD et pédagogiques à connaître avant de t'y mettre.",
    seoTitle: "ChatGPT pour profs : cours, corrections, exercices — Guido",
    seoDescription: "IA pour préparer ses cours 2x plus vite : séquences, exercices et corrections avec ChatGPT. Prompts prêts à l'emploi, limites RGPD et pédagogiques incluses.",
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
    crossSell: ["ia-ses", "ia-techno", "pack-prompts-profs-complet", "prompts-images-ia", "prompts-maths", "prompts-francais", "prompts-histgeo"],
  },
  {
    slug: "ia-immobilier",
    title: "L'IA pour les agents immobiliers : rédiger ses annonces et répondre aux prospects deux fois plus vite",
    tagline: "Récupérer des heures chaque semaine, sans rien perdre du contact humain qui fait vendre",
    pitch:
      "Générer une annonce complète à partir de quelques infos brutes, répondre plus vite aux demandes de visite, qualifier un prospect avant de perdre du temps sur une visite peu sérieuse : ce guide montre exactement quoi taper, dans ChatGPT ou Claude, pour chaque étape de ta semaine — avec les limites à connaître (obligations légales d'affichage, contact humain) avant de t'y mettre.",
    seoTitle: "IA pour agents immobiliers : annonces et prospects — Guido",
    seoDescription: "ChatGPT pour l'immobilier : rédiger une annonce complète en 5 minutes, répondre 2 fois plus vite aux prospects, qualifier une visite. Prompts prêts à l'emploi.",
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
    crossSell: ["prompts-images-ia"],
  },
  {
    slug: "ia-ses",
    title: "L'IA pour les profs de SES : préparer, illustrer et corriger plus vite",
    tagline: "Un seul guide, tout intégré : cours, exercices, correction et 35 prompts prêts à l'emploi",
    pitch:
      "Construire une étude de cas à partir de données réelles, générer des EC1, EC2, EC3 et des sujets de dissertation calibrés au programme, corriger plus vite sans jamais déléguer la notation : ce guide couvre tout le cycle de préparation en SES, avec une bibliothèque de 35 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Spécifique au programme de Sciences économiques et sociales, aucune compétence technique requise.",
    seoTitle: "ChatGPT pour profs de SES : cours et correction — Guido",
    seoDescription: "IA pour préparer ses cours de SES : études de cas, sujets EC1/EC2/EC3, correction assistée sans jamais déléguer la notation. 35 prompts ChatGPT intégrés.",
    price: "18€",
    format: "PDF · 59 pages",
    audience: "Professeurs de SES (lycée), sans compétences techniques, qui veulent gagner du temps sur la préparation, les exercices et la correction",
    category: "IA",
    cover: "/covers/ia-ses.png",
    bestseller: false,
    highlights: [
      "Générer une séquence complète ou une étude de cas sur une notion économique ou sociologique, en quelques minutes",
      "Créer des questions EC1, EC2, EC3 et des sujets de dissertation calibrés au programme",
      "Un premier passage de correction assisté par IA, avec ce qu'elle ne doit JAMAIS faire (notation finale, biais, RGPD élèves)",
      "35 prompts prêts à l'emploi intégrés au guide, classés par usage — aucun pack séparé à acheter",
      "Un plan de mise en place sur 3 semaines, checklist et erreurs propres à la discipline (données périmées, perte de rigueur méthodologique)",
      "Aucune compétence technique requise, avec les offres gratuites de ChatGPT et Claude",
    ],
    faq: [
      {
        question: "Ce guide contient-il vraiment les prompts, ou faut-il acheter un pack séparé ?",
        answer:
          "Les 35 prompts sont intégrés directement dans ce guide (partie 5), au format 2 en 1. Il n'existe pas de pack de prompts SES vendu séparément — tout est inclus dans cet unique achat.",
      },
      {
        question: "Faut-il des compétences techniques pour l'utiliser ?",
        answer:
          "Non. Si tu sais copier-coller un texte dans une page web, tu sais utiliser tout ce que ce guide contient. Un compte gratuit sur ChatGPT ou Claude suffit pour commencer.",
      },
      {
        question: "Les données chiffrées générées par l'IA sont-elles fiables ?",
        answer:
          "Non, jamais sans vérification. Le guide insiste sur ce point à plusieurs reprises : tout chiffre généré doit être recoupé avec une source officielle (INSEE, Eurostat) avant toute utilisation en classe.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Séquence de cours en 4 séances",
        text: "Crée une séquence de cours en 4 séances sur [notion, ex : le marché du travail] pour des élèves de [niveau], avec pour chaque séance : l'objectif, le support et l'activité principale.",
      },
      {
        title: "Sujet EC3 avec dossier documentaire",
        text: "Voici un dossier de 2-3 documents sur [notion] : [coller les documents]. Rédige un sujet de type EC3 (raisonnement appuyé sur un dossier documentaire), avec la consigne complète.",
      },
      {
        title: "Grille de relecture avant notation",
        text: "Voici une copie anonymisée : [coller le texte]. Indique si la consigne est traitée, si le plan est identifiable, et quelles notions du programme sont mobilisées, correctement ou non — sans attribuer de note.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Guide complet",
        price: "18€",
        originalPrice: "27€",
        description: "Le guide entier (4 parties) + la bibliothèque de 35 prompts intégrée",
        includes: [
          "Partie 1 — Préparer ses cours et séquences",
          "Partie 2 — Créer exercices et études de cas",
          "Partie 3 — Corriger plus vite",
          "Partie 4 — Mettre en place ton système",
          "Partie 5 — Bibliothèque de 35 prompts SES",
          "PDF · 59 pages",
        ],
        pdfFile: "guido-ia-ses",
      },
    ],
    crossSell: ["ia-profs", "ia-techno", "pack-prompts-profs-complet", "prompts-images-ia"],
  },
  {
    slug: "ia-techno",
    title: "L'IA pour les profs de technologie : préparer, concevoir et corriger plus vite",
    tagline: "Un seul guide, tout intégré : séquences, projets, évaluation, différenciation et 34 prompts prêts à l'emploi",
    pitch:
      "Structurer une séquence et un cahier des charges de projet en quelques minutes, concevoir des activités techniques variées (programmation par blocs, modélisation 3D, analyse d'objets), évaluer par compétences en valorisant la démarche autant que le résultat, et différencier tes projets pour une classe hétérogène : ce guide couvre tout le cycle de préparation en technologie, avec une bibliothèque de 34 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Spécifique au programme de technologie au collège, aucune compétence technique en IA requise.",
    seoTitle: "ChatGPT pour profs de technologie : séquences pro — Guido",
    seoDescription: "IA pour préparer ses cours de technologie : séquences, cahiers des charges, évaluation par compétences. 34 prompts ChatGPT enseignants prêts à l'emploi.",
    price: "18€",
    format: "PDF · 37 pages",
    audience: "Professeurs de technologie (collège), sans compétences techniques particulières en IA, qui veulent gagner du temps sur la préparation, les activités et l'évaluation",
    category: "IA",
    cover: "/covers/ia-techno.png",
    bestseller: false,
    highlights: [
      "Structurer une séquence complète et concevoir un cahier des charges de projet bien calibré, en quelques minutes",
      "Concevoir des activités techniques variées : programmation par blocs, modélisation 3D/CAO, analyse d'objets techniques",
      "Évaluer par compétences (analyser, concevoir, réaliser, communiquer) en valorisant la démarche autant que le résultat final",
      "Différencier un même projet pour gérer l'hétérogénéité technique de la classe, sans dénaturer l'objectif pédagogique",
      "Un plan de mise en place progressif sur 3 semaines, adapté à chaque niveau du collège (6e, 5e-4e, 3e)",
      "34 prompts prêts à l'emploi intégrés au guide, classés par usage — aucun pack séparé à acheter",
    ],
    faq: [
      {
        question: "Ce guide contient-il vraiment les prompts, ou faut-il acheter un pack séparé ?",
        answer:
          "Les 34 prompts sont intégrés directement dans ce guide (partie 7), au format 2 en 1. Il n'existe pas de pack de prompts technologie vendu séparément — tout est inclus dans cet unique achat.",
      },
      {
        question: "Faut-il des compétences techniques en IA pour l'utiliser ?",
        answer:
          "Non. Si tu sais utiliser une boîte mail et un smartphone, tu as tout ce qu'il faut. Les prompts de ce guide sont prêts à copier-coller, à adapter simplement à ton niveau et ton matériel.",
      },
      {
        question: "Ce guide garantit-il la faisabilité et la sécurité des projets proposés par l'IA ?",
        answer:
          "Non, et le guide insiste sur ce point à plusieurs reprises : toute proposition technique générée par l'IA doit être vérifiée par toi, sur la faisabilité matérielle et les consignes de sécurité de ton établissement, avant sa mise en œuvre.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Structurer une séquence en 4 séances",
        text: "Crée une séquence de cours en 4 séances sur [notion, ex : la programmation par blocs / les objets techniques] pour des élèves de [niveau], avec pour chaque séance : l'objectif, le support et les prérequis nécessaires.",
      },
      {
        title: "Cahier des charges simplifié",
        text: "Crée un cahier des charges simplifié pour un mini-projet technologique sur [thème], adapté à des élèves de [niveau], avec les contraintes essentielles à respecter.",
      },
      {
        title: "Grille d'évaluation par compétences",
        text: "Rédige une grille d'évaluation par compétences pour ce projet technologique sur [thème] (analyser, concevoir, réaliser, communiquer), avec les critères de réussite pour chaque compétence.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Guide complet",
        price: "18€",
        originalPrice: "27€",
        description: "Le guide entier (7 parties) + la bibliothèque de 34 prompts intégrée",
        includes: [
          "Partie 1 — Préparer ses séquences et projets plus vite",
          "Partie 2 — Concevoir des activités techniques variées",
          "Partie 3 — Évaluer par compétences et corriger plus vite",
          "Partie 4 — Différencier et gérer l'hétérogénéité",
          "Partie 5 — Mettre en place son système",
          "Partie 6 — Adapter sa pratique selon le niveau",
          "Partie 7 — Bibliothèque de 34 prompts",
          "PDF · 37 pages",
        ],
        pdfFile: "guido-ia-techno",
      },
    ],
    crossSell: ["ia-profs", "ia-ses", "pack-prompts-profs-complet", "prompts-images-ia"],
  },
  {
    slug: "redaction-professionnelle-ia",
    title: "Rédaction professionnelle avec l'IA : emails, comptes-rendus et communication écrite",
    tagline: "Un seul guide, tout intégré : emails, comptes-rendus, ton et 27 prompts prêts à l'emploi",
    pitch:
      "Rédiger des emails professionnels efficaces, structurer des comptes-rendus de réunion actionnables, adapter son ton selon le destinataire, rédiger des documents plus longs et gérer les situations délicates à l'écrit sans perdre de temps ni se tromper de ton : ce guide couvre toute la communication écrite professionnelle, avec une bibliothèque de 27 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Aucune compétence technique requise.",
    seoTitle: "Rédaction professionnelle avec l'IA : emails, comptes-rendus et communication écrite | Guido",
    seoDescription: "Rédige des emails, comptes-rendus et documents professionnels efficaces avec l'IA. Guide complet + 27 prompts prêts à l'emploi.",
    price: "18€",
    format: "PDF · 39 pages",
    audience: "Tout professionnel qui écrit régulièrement au travail (cadre, manager, indépendant, assistant, commercial, RH), sans compétences techniques requises",
    category: "IA",
    cover: "/covers/redaction-professionnelle-ia.png",
    bestseller: false,
    highlights: [
      "Rédiger des emails professionnels efficaces : structure, objet, relances, refus polis",
      "Structurer des comptes-rendus de réunion clairs et actionnables à partir de notes brutes",
      "Adapter son ton selon le destinataire : hiérarchie, client externe, collègue proche",
      "Rédiger des documents plus longs (rapports, notes de synthèse) sans stress",
      "Gérer les situations délicates à l'écrit : mauvaise nouvelle, désaccord, excuses, conflit naissant",
      "27 prompts prêts à l'emploi intégrés au guide, classés en 5 catégories — aucun pack séparé à acheter",
    ],
    faq: [
      {
        question: "Ce guide contient-il vraiment les prompts, ou faut-il acheter un pack séparé ?",
        answer:
          "Les 27 prompts sont intégrés directement dans ce guide (partie 9), au format 2 en 1. Il n'existe pas de pack de prompts séparé — tout est inclus dans cet unique achat.",
      },
      {
        question: "Est-ce que mes collègues remarqueront que j'utilise l'IA pour écrire ?",
        answer:
          "Pas si tu retouches systématiquement le texte généré avec ta propre voix et tes formulations habituelles. C'est justement l'absence de cette retouche qui rend un texte reconnaissable comme généré, avec des tournures trop lisses ou génériques.",
      },
      {
        question: "Puis-je utiliser l'IA pour des communications très confidentielles ?",
        answer:
          "Évite de coller des informations sensibles (données personnelles identifiables, informations stratégiques confidentielles) dans un outil d'IA grand public. Pour ce type de communication, rédige toi-même ou utilise un outil interne sécurisé si ton entreprise en dispose.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Rédiger un email professionnel",
        text: "Rédige un email professionnel pour [décrire l'objectif, ex : demander un délai supplémentaire], adressé à [destinataire], sur un ton [formel/cordial].",
      },
      {
        title: "Transformer des notes en compte-rendu",
        text: "Transforme ces notes de réunion en compte-rendu structuré, avec les décisions prises et les actions à suivre : [coller les notes].",
      },
      {
        title: "Adapter le ton d'un message",
        text: "Réécris ce message pour qu'il s'adresse à [supérieur hiérarchique/client/collègue proche], en ajustant le niveau de formalité : [coller le message].",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Guide complet",
        price: "18€",
        originalPrice: "27€",
        description: "Le guide entier (11 parties) + la bibliothèque de 27 prompts intégrée",
        includes: [
          "Résumé exécutif et Introduction",
          "Partie 1 — Rédiger des emails professionnels efficaces",
          "Partie 2 — Structurer des comptes-rendus de réunion",
          "Partie 3 — Adapter son ton selon le destinataire",
          "Partie 4 — Rédiger des documents plus longs",
          "Partie 5 — Gérer les situations délicates à l'écrit",
          "Partie 6 (et 7, 7 bis, 8) — Optimiser dans la durée, adapter selon sa fonction, checklist, mise en place",
          "Partie 9 — Bibliothèque de 27 prompts",
          "PDF · 39 pages",
        ],
        pdfFile: "guido-redaction-pro",
      },
    ],
    crossSell: ["ia-autoentrepreneurs", "marketing-contenu"],
  },
  {
    slug: "marketing-contenu",
    title: "L'IA pour créer du contenu qui marche : stratégie et posts réseaux sociaux",
    tagline: "Un seul guide, tout intégré : stratégie, posts, calendrier et 43 prompts prêts à l'emploi",
    pitch:
      "Définir une stratégie de contenu claire, créer des posts qui captent l'attention sur chaque plateforme, construire un calendrier éditorial tenable, écrire des textes qui convertissent sans sonner robotiques, et analyser tes résultats pour ajuster dans la durée : ce guide couvre tout le cycle de création de contenu, avec une bibliothèque de 43 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Aucune compétence technique requise.",
    seoTitle: "Stratégie de contenu pour réseaux sociaux avec l'IA — Guido",
    seoDescription: "Créer une stratégie de contenu qui marche avec l'IA : posts qui captent l'attention, calendrier éditorial, copywriting. 43 prompts ChatGPT intégrés au guide.",
    price: "18€",
    format: "PDF · 39 pages",
    audience: "Entrepreneurs, freelances et créateurs de contenu, sans compétences techniques, qui veulent une vraie stratégie plutôt que poster au hasard",
    category: "IA",
    cover: "/covers/marketing-contenu.png",
    bestseller: false,
    highlights: [
      "Définir son audience précisément et construire 3 à 5 piliers de contenu cohérents, plutôt que de publier sans fil conducteur",
      "Créer des posts qui captent l'attention : structure, accroche, formats à fort engagement (carrousel, vidéo courte, storytelling)",
      "Construire un calendrier éditorial tenable avec le batch content et le repurposing, sans épuisement créatif",
      "Écrire pour convaincre sans sonner robotique : bénéfices plutôt que caractéristiques, retouche systématique du texte généré par IA",
      "Analyser les bons indicateurs selon ton objectif (notoriété, engagement, conversion) et ajuster ta stratégie avec un bilan mensuel",
      "43 prompts prêts à l'emploi intégrés au guide, classés par usage — aucun pack séparé à acheter",
    ],
    faq: [
      {
        question: "Ce guide contient-il vraiment les prompts, ou faut-il acheter un pack séparé ?",
        answer:
          "Les 43 prompts sont intégrés directement dans ce guide (partie 8), au format 2 en 1. Il n'existe pas de pack de prompts séparé — tout est inclus dans cet unique achat.",
      },
      {
        question: "Faut-il des compétences techniques ou de design pour l'utiliser ?",
        answer:
          "Non. Si tu sais utiliser une IA comme ChatGPT ou Claude et une application de réseau social, tu as tout ce qu'il faut. Le guide reste volontairement centré sur la méthode plutôt que sur des outils spécifiques à maîtriser.",
      },
      {
        question: "L'IA peut-elle remplacer entièrement ma création de contenu ?",
        answer:
          "Non, et ce n'est pas souhaitable. L'IA excelle pour structurer, accélérer et varier le contenu, mais le contenu qui fonctionne le mieux dans la durée garde une vraie voix personnelle. Le guide insiste sur la retouche systématique de tout texte généré avant publication.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Définir ses piliers de contenu",
        text: "Je propose [décrire ton activité/produit] à [décrire ton audience cible]. Aide-moi à définir 4 piliers de contenu cohérents avec mon activité et utiles pour mon audience.",
      },
      {
        title: "Rédiger des accroches percutantes",
        text: "Rédige 5 accroches différentes pour un post sur [sujet du post], destinées à arrêter le défilement sur [plateforme].",
      },
      {
        title: "Humaniser un texte généré par IA",
        text: "Voici un post que je trouve trop \"robotique\" ou générique : [coller le post]. Réécris-le avec plus de personnalité et de ton naturel.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Guide complet",
        price: "18€",
        originalPrice: "27€",
        description: "Le guide entier (7 parties) + la bibliothèque de 43 prompts intégrée",
        includes: [
          "Partie 1 — Définir sa stratégie de contenu",
          "Partie 2 — Créer des posts qui captent l'attention",
          "Partie 3 — Construire un calendrier éditorial tenable",
          "Partie 4 — Copywriting et appels à l'action",
          "Partie 5 — Analyser ses résultats et ajuster",
          "Partie 6 — Adapter sa stratégie selon son activité, gérer sa communauté",
          "Partie 7 — Bibliothèque de 43 prompts, classés par usage",
          "PDF · 39 pages",
        ],
        pdfFile: "guido-marketing-contenu",
      },
    ],
    crossSell: ["algorithmes", "prompts-images-ia"],
  },
  {
    slug: "algorithmes",
    title: "Comprendre les algorithmes des réseaux sociaux : TikTok, Instagram, LinkedIn et les autres",
    tagline: "Un seul guide, tout intégré : principes communs, spécificités par plateforme et 30 prompts prêts à l'emploi",
    pitch:
      "Comprendre les principes communs à tous les algorithmes de recommandation, les spécificités de TikTok et Instagram en détail, les bases de LinkedIn et Facebook, et surtout les erreurs qui nuisent silencieusement à ta portée sans que tu t'en rendes toujours compte : ce guide couvre tout, avec une bibliothèque de 30 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Aucune compétence technique requise.",
    seoTitle: "Algorithme Instagram et TikTok : comment ça marche — Guido",
    seoDescription: "Comprendre l'algorithme Instagram, TikTok et LinkedIn : les signaux qui comptent, les erreurs qui nuisent à ta portée. Guide complet + 30 prompts intégrés.",
    price: "18€",
    format: "PDF · 41 pages",
    audience: "Entrepreneurs, freelances et créateurs de contenu, sans compétences techniques, qui veulent comprendre pourquoi certains posts marchent et d'autres non",
    category: "IA",
    cover: "/covers/algorithmes.png",
    bestseller: false,
    highlights: [
      "Les principes communs à tous les algorithmes : graphe d'intérêt, signaux qui comptent vraiment, originalité, cohérence thématique",
      "TikTok et Instagram en détail : For You Page, taux de complétion, systèmes de classement multiples, pénalité du contenu recyclé",
      "LinkedIn, Facebook et le principe transversal du temps d'attention, le signal le plus fiable et le plus difficile à manipuler",
      "Les erreurs qui nuisent silencieusement à ta portée : republication excessive, engagement artificiel, spam de hashtags, inactivité",
      "Adapter sa lecture des algorithmes selon son activité (contenu éducatif, e-commerce, service, local)",
      "30 prompts prêts à l'emploi intégrés au guide, classés par usage — aucun pack séparé à acheter",
    ],
    faq: [
      {
        question: "Ce guide contient-il vraiment les prompts, ou faut-il acheter un pack séparé ?",
        answer:
          "Les 30 prompts sont intégrés directement dans ce guide (partie 8), au format 2 en 1. Il n'existe pas de pack de prompts séparé — tout est inclus dans cet unique achat.",
      },
      {
        question: "Ce guide révèle-t-il le fonctionnement exact et secret des algorithmes ?",
        answer:
          "Non, et aucune ressource sérieuse ne le peut : les plateformes ne publient pas le détail complet de leurs algorithmes. Ce guide rassemble ce qui est raisonnablement établi à partir de déclarations officielles, d'analyses de créateurs et d'observateurs spécialisés, en distinguant le confirmé de l'observation empirique.",
      },
      {
        question: "Ce guide sera-t-il encore valable dans un an ?",
        answer:
          "Les principes fondamentaux (signaux d'engagement profond, originalité, cohérence thématique, temps d'attention) sont stables depuis plusieurs années malgré les évolutions techniques. Les détails plus précis peuvent évoluer plus vite, comme le guide le précise dès l'introduction.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Auditer sa performance actuelle",
        text: "Voici les statistiques de mes 10 derniers posts sur [plateforme] : [coller les stats]. Aide-moi à identifier lesquels ont le mieux performé sur les signaux qui comptent vraiment (sauvegardes, partages, temps de visionnage) plutôt que sur les likes.",
      },
      {
        title: "Structurer un hook TikTok percutant",
        text: "Aide-moi à écrire les 3 premières secondes du script de cette vidéo pour maximiser les chances que les gens ne scrollent pas : [décrire le sujet de la vidéo].",
      },
      {
        title: "Diagnostiquer une baisse de portée",
        text: "Ma portée a chuté depuis [période]. Voici ce qui a changé dans mes habitudes de publication récemment : [décrire les changements]. Aide-moi à identifier une cause probable.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Guide complet",
        price: "18€",
        originalPrice: "27€",
        description: "Le guide entier (8 parties) + la bibliothèque de 30 prompts intégrée",
        includes: [
          "Résumé exécutif et Partie 1 — Les principes communs à tous les algorithmes",
          "Partie 2 — TikTok en détail",
          "Partie 3 — Instagram en détail",
          "Partie 4 — LinkedIn, Facebook et les autres plateformes",
          "Partie 5 — Les erreurs qui nuisent silencieusement à ta portée",
          "Partie 6 et 7 — Adapter sa stratégie et sa lecture selon son activité",
          "Partie 8 — Bibliothèque de 30 prompts, classés par usage",
          "PDF · 41 pages",
        ],
        pdfFile: "guido-algorithmes",
      },
    ],
    crossSell: ["marketing-contenu", "prompts-images-ia"],
  },
  {
    slug: "ia-eleves",
    title: "L'IA pour réussir ses cours : comprendre, s'entraîner et réviser efficacement",
    tagline: "Progresser avec l'IA, sans jamais se faire aider à sa place",
    pitch:
      "Comprendre un cours difficile, s'entraîner avant un contrôle, réviser sans stress et structurer un devoir sans se le faire rédiger : ce guide couvre toutes les matières, avec une bibliothèque de 24 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Pensé pour progresser vraiment, pas pour tricher — un devoir rendu doit toujours rester ton travail.",
    seoTitle: "ChatGPT pour réviser ses cours et progresser vite — Guido",
    seoDescription: "Utiliser l'IA pour comprendre un cours, s'entraîner avant un contrôle et réviser sans stress, sans jamais se faire aider à sa place. 24 prompts inclus.",
    price: "15€",
    format: "PDF · 40 pages",
    audience: "Élèves de collège et de lycée, et leurs parents",
    category: "IA",
    cover: "/covers/ia-eleves.png",
    bestseller: false,
    highlights: [
      "Faire reformuler une notion mal comprise et obtenir des exemples concrets, matière par matière",
      "Générer des exercices, des quiz d'auto-évaluation et se faire interroger à l'oral avant un contrôle",
      "Créer des fiches de révision synthétiques et un vrai planning jour par jour",
      "Structurer un devoir (consigne, plan) sans jamais se faire rédiger le contenu à la place",
      "24 prompts prêts à l'emploi intégrés au guide, toutes matières confondues — aucun pack séparé à acheter",
      "Pensé pour progresser, pas pour tricher : ce que l'IA doit faire pour toi, et ce qu'elle ne doit jamais faire",
    ],
    faq: [
      {
        question: "Ce guide aide-t-il à tricher aux devoirs ?",
        answer:
          "Non, c'est explicitement l'inverse. Le guide explique pourquoi faire rédiger un devoir noté par l'IA ne sert à rien pour progresser, et se concentre sur les usages qui aident vraiment à comprendre, s'entraîner et réviser.",
      },
      {
        question: "Ce guide contient-il vraiment les prompts, ou faut-il acheter un pack séparé ?",
        answer:
          "Les 24 prompts sont intégrés directement dans ce guide (partie 5), au format 2 en 1. Il n'existe pas de pack de prompts séparé — tout est inclus dans cet unique achat.",
      },
      {
        question: "Ce guide couvre-t-il toutes les matières ?",
        answer:
          "Oui. Les méthodes et les prompts sont conçus pour s'adapter à n'importe quelle matière : il suffit de remplacer les champs [entre crochets] par ta notion, ton chapitre ou ta matière avant de coller le prompt dans ChatGPT ou Claude.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Comprendre une notion mal maîtrisée",
        text: "Explique-moi [notion] comme si j'avais 12 ans, avec un exemple concret de la vie de tous les jours.",
      },
      {
        title: "Créer un quiz d'auto-évaluation",
        text: "Crée un quiz de 10 questions sur [chapitre] pour que je vérifie si je suis prêt pour le contrôle, avec les réponses cachées jusqu'à ce que je les demande.",
      },
      {
        title: "Se faire aider à construire un plan",
        text: "Aide-moi à construire le plan de ce devoir (juste le plan, pas le contenu rédigé) sur le sujet suivant : [sujet du devoir].",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Guide complet",
        price: "15€",
        originalPrice: "22€",
        description: "Le guide entier (4 parties) + la bibliothèque de 24 prompts intégrée",
        includes: [
          "Partie 1 — Comprendre un cours plus vite",
          "Partie 2 — S'entraîner efficacement",
          "Partie 3 — Réviser sans stress",
          "Partie 4 — Structurer ses devoirs sans se faire aider à sa place",
          "Partie 5 — Bibliothèque de 24 prompts, toutes matières",
          "PDF · 40 pages",
        ],
        pdfFile: "guido-ia-eleves",
      },
    ],
  },
  {
    slug: "carriere-personnalite",
    title: "Carrière et développement personnel : bilan de compétences et tests de personnalité",
    tagline: "Mieux te connaître pour faire des choix de carrière alignés",
    pitch:
      "Faire ton bilan de compétences avec l'IA, mieux comprendre ta personnalité au travail (MBTI, DISC, auto-réflexion guidée), croiser les deux pour identifier des pistes de carrière alignées, gérer le syndrome de l'imposteur et négocier ton salaire à partir de réalisations concrètes : ce guide couvre toute la démarche, avec une bibliothèque de 58 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Aucune compétence technique requise.",
    seoTitle: "Bilan de compétences et tests de personnalité IA — Guido",
    seoDescription: "Faire ton bilan de compétences avec l'IA, comprendre ta personnalité au travail (MBTI, DISC) et identifier des pistes de carrière alignées. 58 prompts.",
    price: "18€",
    format: "PDF · 53 pages",
    audience: "Salariés qui stagnent ou se questionnent sur leur carrière, personnes en reconversion, jeunes diplômés hésitant entre plusieurs voies, et toute personne curieuse de mieux se comprendre professionnellement",
    category: "Développement personnel",
    cover: "/covers/carriere-personnalite.png",
    bestseller: false,
    highlights: [
      "Identifier tes compétences transférables et valoriser un parcours atypique, même après une longue période sur le même poste",
      "Mieux te connaître avec une auto-réflexion guidée par IA sur le MBTI, le DISC et les Big Five — pas un test figé, une vraie conversation",
      "Croiser compétences et personnalité pour identifier plusieurs pistes de carrière réalistes, avec deux études de cas complètes",
      "Gérer le syndrome de l'imposteur en confrontant le ressenti à des faits concrets, pas à du positivisme abstrait",
      "Un plan d'action sur 30 jours, adapté à ta situation (jeune diplômé, reconversion, retour d'interruption, fin de carrière)",
      "58 prompts prêts à l'emploi intégrés au guide, classés par usage — aucun pack séparé à acheter",
    ],
    faq: [
      {
        question: "Ce guide contient-il vraiment les prompts, ou faut-il acheter un pack séparé ?",
        answer:
          "Les 58 prompts sont intégrés directement dans ce guide (partie 13), au format 2 en 1. Il n'existe pas de pack de prompts séparé — tout est inclus dans cet unique achat.",
      },
      {
        question: "Ce guide remplace-t-il un bilan de compétences certifié ou un accompagnement professionnel ?",
        answer:
          "Non. Ce guide te donne une méthode concrète pour commencer cette réflexion par toi-même, mais il ne remplace pas un bilan de compétences certifié (finançable via le CPF), un conseiller en évolution professionnelle ou un accompagnement psychologique si tu en ressens le besoin.",
      },
      {
        question: "Dois-je prendre les résultats des tests de personnalité au sérieux ?",
        answer:
          "Prends-les comme une base de réflexion, pas comme une vérité scientifique. Le MBTI et le DISC sont des outils de réflexion personnelle populaires, pas des diagnostics validés cliniquement — le guide insiste sur ce point avant chaque exercice.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Faire émerger ses compétences transférables",
        text: "Voici mon parcours professionnel : [décris tes postes, missions, formations]. Identifie mes compétences transférables qui pourraient s'appliquer à d'autres métiers ou secteurs.",
      },
      {
        title: "Auto-réflexion guidée sur sa personnalité",
        text: "Mène une analyse de ma personnalité au travail en me posant des questions une par une (pas toutes en même temps), sur ma façon de travailler, de décider, de gérer le stress et de collaborer avec les autres. À la fin, propose-moi une synthèse de mon profil.",
      },
      {
        title: "Préparer une négociation salariale factuelle",
        text: "Voici une liste de mes réalisations chiffrées ou concrètes sur les 12 derniers mois : [liste tes réalisations]. Aide-moi à en tirer un argumentaire de négociation salariale factuel, sans ton agressif ni excès de modestie.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Guide complet",
        price: "18€",
        originalPrice: "27€",
        description: "Le guide entier (6 parties) + la bibliothèque de 58 prompts intégrée",
        includes: [
          "Partie 1 — Faire son bilan de compétences avec l'IA",
          "Partie 2 — Mieux se connaître avec les tests de personnalité",
          "Partie 3 — Faire des choix de carrière alignés, gérer le syndrome de l'imposteur",
          "Partie 4 — Passer à l'action, adapter la démarche à ta situation",
          "Partie 5 — Négocier son salaire et sa valeur",
          "Partie 6 — Bibliothèque de 58 prompts, classés par usage",
          "PDF · 53 pages",
        ],
        pdfFile: "guido-carriere-personnalite",
      },
    ],
    crossSell: ["freelance-40ans", "confiance-soi"],
  },
  {
    slug: "confiance-soi",
    title: "Retrouver confiance en soi : identifier ses schémas de pensée limitants et avancer concrètement",
    tagline: "Reconstruire sa confiance par un travail concret, pas par la seule volonté",
    pitch:
      "Identifier tes schémas de pensée limitants (tout ou rien, généralisation, filtre négatif...), reconstruire ta confiance après un échec ou une rupture, développer l'affirmation de soi au quotidien et sortir du piège de la comparaison sociale : ce guide couvre tout le travail, avec une bibliothèque de 51 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Aucune compétence technique requise.",
    seoTitle: "Retrouver confiance en soi : une méthode concrète — Guido",
    seoDescription: "Identifier tes schémas de pensée limitants, reconstruire ta confiance après un échec et sortir du piège de la comparaison sociale. 51 prompts intégrés.",
    price: "16€",
    format: "PDF · 40 pages",
    audience: "Toute personne qui traverse une période de doute sur elle-même, suite à un événement identifiable (licenciement, rupture, échec) ou à une érosion plus progressive de la confiance",
    category: "Développement personnel",
    cover: "/covers/confiance-soi.png",
    bestseller: false,
    highlights: [
      "Identifier tes schémas de pensée limitants les plus fréquents (tout ou rien, généralisation, filtre négatif, prédiction catastrophique)",
      "Reconstruire ta confiance après un échec ou une rupture en séparant les faits de l'interprétation, avec une base factuelle de réussites passées",
      "Développer l'affirmation de soi au quotidien : dire non, poser ses limites, s'affirmer progressivement sans agressivité",
      "Sortir du piège de la comparaison sociale et du perfectionnisme, en te recentrant sur tes propres critères de réussite",
      "Un plan progressif pour passer à l'action, adapté aux contextes spécifiques (travail, couple, famille, amis)",
      "51 prompts prêts à l'emploi intégrés au guide, classés par usage — aucun pack séparé à acheter",
    ],
    faq: [
      {
        question: "Ce guide contient-il vraiment les prompts, ou faut-il acheter un pack séparé ?",
        answer:
          "Les 51 prompts sont intégrés directement dans ce guide (partie 7), au format 2 en 1. Il n'existe pas de pack de prompts séparé — tout est inclus dans cet unique achat.",
      },
      {
        question: "Ce genre de travail peut-il remplacer une thérapie ?",
        answer:
          "Non, et ce n'est pas son objectif. Ce guide propose des outils de réflexion et d'action pour un manque de confiance ponctuel ou lié à un événement identifiable. En cas de souffrance profonde et durable, un accompagnement par un professionnel de santé est la démarche appropriée, en complément ou à la place de ce guide.",
      },
      {
        question: "Que faire si je ressens une détresse psychologique importante ?",
        answer:
          "Le 3114 est le numéro national de prévention du suicide, gratuit, confidentiel et disponible 24h/24 et 7j/7 en France. Ce guide couvre le travail sur la confiance en soi, pas la prise en charge d'une détresse psychologique sévère.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Identifier un schéma de pensée limitant",
        text: "Voici une pensée qui me revient souvent : [décrire la pensée, ex : \"je vais échouer de toute façon\"]. Aide-moi à identifier quel type de schéma de pensée limitant ça représente, et pose-moi des questions pour l'examiner.",
      },
      {
        title: "Reconstruire une base factuelle de confiance",
        text: "Aide-moi à identifier 5 réussites passées, même petites, qui contredisent l'idée que je ne suis \"pas capable\" en ce moment.",
      },
      {
        title: "Préparer un refus assertif",
        text: "Aide-moi à formuler poliment mais fermement un refus à cette demande : [décrire la demande], sans culpabiliser après coup.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Guide complet",
        price: "16€",
        originalPrice: "24€",
        description: "Le guide entier (6 parties) + la bibliothèque de 51 prompts intégrée",
        includes: [
          "Partie 1 — Comprendre ses schémas de pensée limitants",
          "Partie 2 — Reconstruire sa confiance après un échec ou une rupture",
          "Partie 3 — Développer l'affirmation de soi au quotidien",
          "Partie 4 — Sortir du piège de la comparaison et du perfectionnisme",
          "Partie 5 — Passer à l'action, s'affirmer dans des contextes spécifiques",
          "Partie 6 — Bibliothèque de 51 prompts, classés par usage",
          "PDF · 40 pages",
        ],
        pdfFile: "guido-confiance-soi",
      },
    ],
    crossSell: ["carriere-personnalite", "procrastination"],
  },
  {
    slug: "freelance-40ans",
    title: "Devenir freelance après 40 ans : le guide pour sécuriser sa transition sans tout perdre",
    tagline: "Ton expérience est un vrai atout — encore faut-il sécuriser le saut correctement",
    pitch:
      "Calculer ton matelas de sécurité réel, connaître les dispositifs qui réduisent le risque (ARE, ACRE, portage salarial), transformer 15-20 ans de salariat en offre freelance claire, et décrocher tes 3 premiers clients en 90 jours grâce à ton réseau : ce guide te donne une méthode concrète pour sécuriser ta transition, sans minimiser les risques financiers réels d'une reconversion à cet âge.",
    seoTitle: "Devenir freelance après 40 ans en toute sécurité — Guido",
    seoDescription: "Reconversion professionnelle après 40 ans : calculer son matelas de sécurité, connaître l'ARE, l'ACRE, le portage salarial, décrocher ses 3 premiers clients.",
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
    crossSell: ["carriere-personnalite", "micro-entreprise-2026", "tresorerie-freelance"],
  },
  {
    slug: "micro-entreprise-2026",
    title: "Créer sa micro-entreprise en 2026 : ce qui change et ce qu'il faut savoir",
    tagline: "Un seul guide, tout intégré : immatriculation, TVA, facturation et 31 prompts prêts à l'emploi",
    pitch:
      "S'immatriculer sur le Guichet unique, comprendre la franchise en base de TVA et la facturation conforme, mettre en place une routine administrative simple et sécuriser sa relation client avec de vraies CGV : ce guide couvre tout le cycle de création d'une micro-entreprise, avec une bibliothèque de 31 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Les démarches d'immatriculation, de TVA et de facturation sont expliquées simplement — vérifie toujours les chiffres officiels à jour sur les sites gouvernementaux avant de t'engager.",
    seoTitle: "Créer sa micro-entreprise en 2026 : le guide complet | Guido",
    seoDescription: "Guide complet + 31 prompts intégrés pour créer sa micro-entreprise en 2026 : immatriculation, TVA, facturation. Vérifie toujours les chiffres officiels à jour.",
    price: "18€",
    format: "PDF · 52 pages",
    audience: "Futurs et nouveaux micro-entrepreneurs en France, sans compétences techniques ou juridiques, qui veulent créer leur structure sereinement et sans erreur",
    category: "Finance",
    cover: "/covers/micro-entreprise-2026.png",
    bestseller: false,
    highlights: [
      "S'immatriculer étape par étape sur le Guichet unique : documents à préparer, délais, SIRET, aides (ACRE, cumul ARE/ARCE)",
      "Comprendre la franchise en base de TVA, les mentions obligatoires de facturation et la réforme de la facturation électronique",
      "Mettre en place une routine administrative simple : livre des recettes, déclaration URSSAF, bons outils, compte dédié",
      "Adapter la démarche selon ton activité (produits numériques, conseil, stock, artisanat) et éviter les erreurs les plus coûteuses",
      "Comprendre sa protection sociale, sa fiscalité personnelle, et sécuriser sa relation client avec de vraies CGV",
      "31 prompts prêts à l'emploi intégrés au guide, classés en 7 catégories — aucun pack séparé à acheter",
    ],
    faq: [
      {
        question: "Ce guide contient-il vraiment les prompts, ou faut-il acheter un pack séparé ?",
        answer:
          "Les 31 prompts sont intégrés directement dans ce guide (partie 7), au format 2 en 1. Il n'existe pas de pack de prompts séparé — tout est inclus dans cet unique achat.",
      },
      {
        question: "Puis-je créer ma micro-entreprise si je suis déjà salarié ?",
        answer:
          "Oui, le cumul est autorisé, sous réserve de vérifier l'absence de clause de non-concurrence ou d'exclusivité dans ton contrat de travail, et de veiller à ce que ton activité indépendante ne concurrence pas directement ton employeur.",
      },
      {
        question: "Ce guide remplace-t-il un expert-comptable ?",
        answer:
          "Non. Il te donne une méthode et des repères généraux pour créer et gérer ta micro-entreprise sereinement, mais les seuils, taux de cotisations et montants précis évoluent chaque année : vérifie toujours les chiffres exacts sur les sites officiels, et fais appel à un expert-comptable pour toute décision fiscale ou juridique structurante.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Choisir son statut",
        text: "Voici mon projet d'activité : [décrire ton activité]. Est-ce que la micro-entreprise est adaptée, ou devrais-je envisager un autre statut dès le départ ?",
      },
      {
        title: "Modèle de facture conforme",
        text: "Aide-moi à créer un modèle de facture conforme aux mentions obligatoires pour mon activité de [décrire ton activité], en régime de franchise en base de TVA.",
      },
      {
        title: "CGV simples et claires",
        text: "Aide-moi à rédiger des CGV simples et claires pour mon activité de [décrire ton activité], couvrant les modalités de paiement, de livraison/accès, et de rétractation.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Guide complet",
        price: "18€",
        originalPrice: "27€",
        description: "Le guide entier (15 parties) + la bibliothèque de 31 prompts intégrée",
        includes: [
          "Résumé exécutif et Introduction",
          "Partie 1 — Choisir le bon statut",
          "Partie 2 — S'immatriculer étape par étape",
          "Partie 3 — Comprendre la TVA et la facturation",
          "Partie 4 (et 4 bis) — Obligations déclaratives et bons outils",
          "Partie 5 (bis à septies) — Ce qui évolue, cas particuliers, erreurs à éviter, protection sociale, fiscalité, évolution de l'activité, relation client",
          "Partie 6 — Mettre en place son système",
          "Partie 7 — Bibliothèque de 31 prompts",
          "PDF · 52 pages",
        ],
        pdfFile: "guido-micro-entreprise-2026",
      },
    ],
    crossSell: ["fiscal-auto-entrepreneur-2026", "freelance-40ans", "tresorerie-freelance"],
  },
  {
    slug: "tresorerie-freelance",
    title: "Gérer sa trésorerie quand les revenus sont irréguliers : guide pour freelances et auto-entrepreneurs",
    tagline: "Un seul guide, tout intégré : matelas de sécurité, salaire fixe et 36 prompts prêts à l'emploi",
    pitch:
      "Construire un matelas de sécurité réaliste, se verser un salaire fixe mensuel même quand les encaissements varient, provisionner automatiquement cotisations et impôts, anticiper les creux d'activité et accélérer ses encaissements : ce guide couvre toute la méthode pour reprendre le contrôle de sa trésorerie, avec une bibliothèque de 36 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Une méthode et des outils concrets, qui ne remplacent pas les conseils d'un expert-comptable pour une situation complexe.",
    seoTitle: "Gérer sa trésorerie freelance aux revenus irréguliers | Guido",
    seoDescription: "Guide complet + 36 prompts intégrés pour gérer sa trésorerie de freelance : matelas de sécurité, salaire fixe mensuel, provisionner et anticiper les creux d'activité.",
    price: "18€",
    format: "PDF · 39 pages",
    audience: "Freelances et auto-entrepreneurs aux revenus irréguliers ou saisonniers, sans compétences en gestion financière, qui veulent sortir du stress de trésorerie permanent",
    category: "Finance",
    cover: "/covers/tresorerie-freelance.png",
    bestseller: false,
    highlights: [
      "Comprendre pourquoi les revenus irréguliers déstabilisent la trésorerie, au-delà du seul niveau de chiffre d'affaires",
      "Construire un matelas de sécurité réaliste, calculé à partir de tes charges fixes incompressibles",
      "Se verser un salaire fixe mensuel et provisionner automatiquement cotisations et impôts à chaque encaissement",
      "Anticiper et lisser les creux d'activité avec un prévisionnel de trésorerie simple à tenir à jour chaque semaine",
      "Accélérer tes encaissements : acomptes, délais de paiement, relances progressives et gestion des impayés",
      "36 prompts prêts à l'emploi intégrés au guide, classés en 6 catégories — aucun pack séparé à acheter",
    ],
    faq: [
      {
        question: "Ce guide contient-il vraiment les prompts, ou faut-il acheter un pack séparé ?",
        answer:
          "Les 36 prompts sont intégrés directement dans ce guide (partie 7), au format 2 en 1. Il n'existe pas de pack de prompts séparé — tout est inclus dans cet unique achat.",
      },
      {
        question: "Ce guide remplace-t-il un expert-comptable ?",
        answer:
          "Non. Il te donne une méthode et des outils concrets pour piloter ta trésorerie au quotidien, mais ne remplace pas les conseils d'un expert-comptable pour une situation fiscale ou financière complexe, ni un conseiller bancaire pour une décision de financement structurante.",
      },
      {
        question: "Faut-il un compte bancaire professionnel séparé pour appliquer cette méthode ?",
        answer:
          "Ce n'est obligatoire qu'à partir d'un certain seuil de chiffre d'affaires en micro-entreprise, mais fortement recommandé dès le départ : mélanger dépenses personnelles et professionnelles sur un même compte rend le suivi de trésorerie beaucoup plus confus.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Diagnostiquer sa régularité",
        text: "Voici mes encaissements réels des 12 derniers mois : [liste les montants mois par mois]. Aide-moi à identifier mes mois les plus faibles et les plus forts, et les schémas récurrents.",
      },
      {
        title: "Calculer son salaire fixe mensuel",
        text: "Aide-moi à calculer un salaire mensuel fixe réaliste à partir de mon chiffre d'affaires annuel encaissé de [montant] et de mes charges professionnelles annuelles de [montant].",
      },
      {
        title: "Structurer une relance de paiement",
        text: "Rédige une première relance amicale à envoyer à un client dont la facture est en retard de [nombre] jours, sur un ton factuel et non accusateur.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Guide complet",
        price: "18€",
        originalPrice: "27€",
        description: "Le guide entier (6 parties) + la bibliothèque de 36 prompts intégrée",
        includes: [
          "Résumé exécutif et Introduction",
          "Partie 1 — Comprendre pourquoi les revenus irréguliers déstabilisent la trésorerie",
          "Partie 2 — Construire un matelas de sécurité réaliste",
          "Partie 3 — Se verser un salaire fixe et provisionner automatiquement",
          "Partie 4 — Anticiper et lisser les creux d'activité",
          "Partie 5 — Accélérer les encaissements et réduire les délais de paiement",
          "Partie 6 — S'équiper et mettre en place sa routine de pilotage",
          "Partie 7 — Bibliothèque de 36 prompts",
          "PDF · 39 pages",
        ],
        pdfFile: "guido-tresorerie-freelance",
      },
    ],
    crossSell: ["micro-entreprise-2026", "freelance-40ans"],
  },
  {
    slug: "sommeil-ecrans",
    title: "Sommeil et écrans : le guide pour les travailleurs à domicile qui n'arrivent plus à décrocher",
    tagline: "Retrouver un vrai sommeil, sans culpabiliser et sans t'imposer l'impossible",
    pitch:
      "Sans trajet retour pour décompresser, la journée de travail déborde souvent sur la soirée, et les écrans repoussent mécaniquement l'heure du coucher. Ce guide t'aide à comprendre ce qui perturbe vraiment ton endormissement, à reprendre le contrôle de tes soirées et à construire un rituel de sommeil réaliste — avec un plan progressif sur 21 jours, sans pression ni solution extrême.",
    seoTitle: "Sommeil et écrans : comment retrouver le sommeil — Guido",
    seoDescription: "Télétravail et troubles du sommeil : comprendre ce qui perturbe ton endormissement et construire un rituel de coucher réaliste. Plan progressif sur 21 jours.",
    price: "Dès 19€",
    format: "PDF · 47 à 60 pages",
    audience: "Télétravailleurs et travailleurs à domicile dont le sommeil souffre de l'absence de frontière entre travail et repos",
    category: "Santé et bien-être",
    cover: "/covers/sommeil-ecrans-v2.png",
    bestseller: false,
    highlights: [
      "Comprendre pourquoi les écrans le soir perturbent l'endormissement, sans jargon médical",
      "Créer une vraie coupure entre la journée de travail et la soirée, avec un rituel de fermeture concret",
      "Construire une routine pré-sommeil réaliste, adaptée à une vraie vie (pas à un idéal inatteignable)",
      "Un plan progressif sur 21 jours, une checklist et les erreurs les plus fréquentes à éviter",
      "Des cas particuliers concrets : horaires atypiques, petit espace, enfants à la maison, colocation",
      "En option, le Pack Sommeil : 30 prompts prêts à l'emploi classés par usage + un guide pas à pas pour recréer un template Canva de tracker de sommeil hebdomadaire",
    ],
    faq: [
      {
        question: "Ce guide remplace-t-il un avis médical ?",
        answer:
          "Non, en aucun cas. Ce guide couvre l'hygiène de sommeil (habitudes et environnement), pas le diagnostic ou le traitement de troubles du sommeil. En cas d'insomnie persistante ou de fatigue anormale, consulte un professionnel de santé.",
      },
      {
        question: "Quelle est la différence entre les deux offres ?",
        answer:
          "Le Guide seul couvre la compréhension du problème, la reprise de contrôle des écrans le soir et la construction d'un rituel (Parties 1 à 4). Guide + Pack Sommeil ajoute en bonus 30 prompts prêts à l'emploi classés par usage et un guide pas à pas pour recréer un template Canva de tracker de sommeil.",
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
        description: "Comprendre, reprendre le contrôle des écrans et construire un rituel du soir",
        includes: [
          "Partie 1 — Comprendre ce qui se passe vraiment",
          "Partie 2 — Reprendre le contrôle des écrans le soir",
          "Partie 3 — Construire un vrai rituel du soir",
          "Partie 4 — Tenir dans la durée",
          "PDF · 47 pages",
        ],
        pdfFile: "guido-sommeil-ecrans",
      },
      {
        id: "pack",
        label: "Guide + Pack Sommeil",
        price: "27€",
        description: "Tout le guide, plus le Pack Sommeil en bonus",
        includes: [
          "Tout le contenu du Guide seul (Parties 1 à 4)",
          "Bonus — 30 prompts prêts à l'emploi classés par usage",
          "Bonus — Le template Canva de tracker de sommeil hebdomadaire, pas à pas",
          "PDF · 60 pages",
        ],
        pdfFile: "guido-sommeil-ecrans-pack",
        featured: true,
      },
    ],
    crossSell: ["menopause-energie", "procrastination"],
  },
  {
    slug: "menopause-energie",
    title: "Ménopause : comprendre les symptômes et retrouver de l'énergie",
    tagline: "Comprendre ce qui se passe dans ton corps, et reprendre la main sur ton quotidien",
    pitch:
      "Bouffées de chaleur, fatigue, sommeil perturbé, brouillard mental : ces symptômes touchent tôt ou tard toutes les femmes, mais restent rarement expliqués clairement. Ce guide t'aide à comprendre ce qui se passe réellement dans ton corps, à retrouver de l'énergie au quotidien et à te faire entendre dans ton parcours de soin — avec un plan progressif sur 21 jours, sans jamais se substituer à un avis médical.",
    seoTitle: "Ménopause : symptômes, fatigue et regain d'énergie — Guido",
    seoDescription: "Bouffées de chaleur, fatigue, brouillard mental : comprendre les symptômes de la ménopause et retrouver de l'énergie au quotidien. Plan progressif sur 21 jours.",
    price: "Dès 19€",
    format: "PDF · 31 à 44 pages",
    audience: "Femmes en périménopause, ménopause ou post-ménopause qui veulent comprendre leurs symptômes et retrouver de l'énergie au quotidien",
    category: "Santé et bien-être",
    cover: "/covers/menopause-energie.png",
    bestseller: false,
    highlights: [
      "Comprendre les trois phases de la ménopause et pourquoi les symptômes surviennent, sans jargon médical",
      "Démêler le vrai du faux sur les idées reçues les plus courantes autour de la ménopause",
      "Des pistes concrètes sur l'alimentation, l'activité physique, le sommeil et la fatigue mentale",
      "Savoir quand consulter, comment préparer un rendez-vous et te faire entendre si tes symptômes sont minimisés",
      "Un plan progressif sur 21 jours, une checklist et les erreurs les plus fréquentes à éviter",
      "En option, le Pack Énergie : 30 prompts prêts à l'emploi classés par usage + un guide pas à pas pour recréer un template Canva de tracker de symptômes hebdomadaire",
    ],
    faq: [
      {
        question: "Ce guide remplace-t-il un avis médical ?",
        answer:
          "Non, en aucun cas. Ce guide t'aide à comprendre tes symptômes et à organiser ton quotidien, mais ne constitue ni un diagnostic ni une recommandation de traitement. Toute décision doit être prise avec un médecin ou un gynécologue.",
      },
      {
        question: "Quelle est la différence entre les deux offres ?",
        answer:
          "Le Guide seul couvre la compréhension des symptômes, les pistes pour retrouver de l'énergie et naviguer le parcours de soin (Parties 1 à 4). Guide + Pack Énergie ajoute en bonus 30 prompts prêts à l'emploi classés par usage et un guide pas à pas pour recréer un template Canva de tracker de symptômes.",
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
        description: "Comprendre tes symptômes, retrouver de l'énergie et naviguer ton parcours de soin",
        includes: [
          "Partie 1 — Comprendre ce qui se passe dans le corps",
          "Partie 2 — Retrouver de l'énergie au quotidien",
          "Partie 3 — Naviguer le parcours de soin",
          "Partie 4 — Vivre cette étape sereinement",
          "PDF · 31 pages",
        ],
        pdfFile: "guido-menopause-energie",
      },
      {
        id: "pack",
        label: "Guide + Pack Énergie",
        price: "27€",
        description: "Tout le guide, plus le Pack Énergie en bonus",
        includes: [
          "Tout le contenu du Guide seul (Parties 1 à 4)",
          "Bonus — 30 prompts prêts à l'emploi classés par usage",
          "Bonus — Le template Canva de tracker de symptômes hebdomadaire, pas à pas",
          "PDF · 44 pages",
        ],
        pdfFile: "guido-menopause-energie-pack",
        featured: true,
      },
    ],
    crossSell: ["sommeil-ecrans"],
  },
  {
    slug: "procrastination",
    title: "Sortir de la procrastination : retrouver sa motivation et reprendre le contrôle de son temps",
    tagline: "Comprendre ton fonctionnement, avancer sans culpabiliser, et reprendre la main sur ton temps",
    pitch:
      "Repousser une tâche importante n'est pas un manque de volonté, mais un mécanisme réel : peur de l'échec, perfectionnisme, tâches floues ou trop grosses. Ce guide t'aide à comprendre pourquoi tu procrastines vraiment, à reprendre le contrôle de ton temps avec des méthodes concrètes et à retrouver une motivation qui tient dans la durée — avec un plan progressif sur 21 jours, sans culpabilisation ni promesse de transformation instantanée.",
    seoTitle: "Sortir de la procrastination : méthode en 21 jours — Guido",
    seoDescription: "Comprendre pourquoi tu procrastines vraiment (peur de l'échec, perfectionnisme) et reprendre le contrôle de ton temps avec un plan progressif sur 21 jours.",
    price: "Dès 19€",
    format: "PDF · 48 à 59 pages",
    audience: "Adultes qui procrastinent sur des tâches importantes, pro ou perso, et se sentent bloqués dans un cercle vicieux de culpabilité",
    category: "Santé et bien-être",
    cover: "/covers/procrastination.png",
    bestseller: false,
    highlights: [
      "Comprendre les vraies causes de la procrastination : peur de l'échec, perfectionnisme, tâches floues ou trop grosses",
      "Identifier ton propre profil de procrastinateur parmi plusieurs mécanismes possibles, pas une seule cause",
      "Des méthodes concrètes pour reprendre le contrôle de ton temps : Pomodoro, règle des 2 minutes, découpage des tâches",
      "Construire des systèmes et des habitudes durables plutôt que de compter sur un pic de motivation",
      "Un plan progressif sur 21 jours, une checklist et les erreurs les plus fréquentes à éviter",
      "En option, le Pack Motivation : 30 prompts prêts à l'emploi classés par usage + un guide pas à pas pour recréer un template Canva de planning hebdomadaire anti-procrastination",
    ],
    faq: [
      {
        question: "Ce guide remplace-t-il un accompagnement psychologique ?",
        answer:
          "Non. Ce guide t'aide à comprendre ton fonctionnement et à agir concrètement au quotidien, mais ne constitue pas un accompagnement thérapeutique. En cas de souffrance importante, un professionnel de santé reste le bon interlocuteur.",
      },
      {
        question: "Quelle est la différence entre les deux offres ?",
        answer:
          "Le Guide seul couvre la compréhension de la procrastination, les méthodes pour reprendre le contrôle de son temps et la construction d'une motivation durable (Parties 1 à 4). Guide + Pack Motivation ajoute en bonus 30 prompts prêts à l'emploi classés par usage et un guide pas à pas pour recréer un template Canva de planning hebdomadaire.",
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
        description: "Comprendre ta procrastination, reprendre le contrôle de ton temps et retrouver ta motivation",
        includes: [
          "Partie 1 — Comprendre pourquoi on procrastine",
          "Partie 2 — Reprendre le contrôle de son temps",
          "Partie 3 — Retrouver sa motivation durablement",
          "Partie 4 — Tenir dans la durée",
          "PDF · 48 pages",
        ],
        pdfFile: "guido-procrastination",
      },
      {
        id: "pack",
        label: "Guide + Pack Motivation",
        price: "27€",
        description: "Tout le guide, plus le Pack Motivation en bonus",
        includes: [
          "Tout le contenu du Guide seul (Parties 1 à 4)",
          "Bonus — 30 prompts prêts à l'emploi classés par usage",
          "Bonus — Le template Canva de planning hebdomadaire anti-procrastination, pas à pas",
          "PDF · 59 pages",
        ],
        pdfFile: "guido-procrastination-pack",
        featured: true,
      },
    ],
    crossSell: ["confiance-soi", "sommeil-ecrans"],
  },
  {
    slug: "prompts-images-ia",
    title: "60 prompts pour générer des images professionnelles avec l'IA",
    tagline: "Compatible Midjourney, DALL-E et Stable Diffusion",
    pitch:
      "60 prompts prêts à copier-coller, classés en 6 catégories (portraits, produits, réseaux sociaux, présentations, décors, logos), pour générer des visuels professionnels sans compétence technique ni artistique. Chaque prompt est accompagné des réglages suggérés pour Midjourney, DALL-E et Stable Diffusion, avec un glossaire des paramètres techniques et une note sur les droits d'usage commercial de tes images.",
    seoTitle: "60 prompts pour générer des images pro avec l'IA — Guido",
    seoDescription: "60 prompts IA prêts à copier-coller pour Midjourney, DALL-E et Stable Diffusion : portraits, produits, réseaux sociaux, logos. Sans photographe ni graphiste.",
    price: "12€",
    format: "PDF · 27 pages",
    audience: "Entrepreneurs, freelances et créateurs de contenu qui veulent des visuels professionnels sans payer un photographe ou un graphiste",
    category: "Prompts",
    cover: "/covers/prompts-images-ia.png",
    bestseller: false,
    highlights: [
      "60 prompts prêts à copier-coller, classés en 6 catégories selon ton besoin",
      "Compatible avec les principaux outils IA : Midjourney, DALL-E et Stable Diffusion",
      "Aucune compétence technique ou artistique requise pour les utiliser",
      "Un glossaire des paramètres techniques pour affiner tes résultats (aspect ratio, seed, negative prompt...)",
      "Une note claire sur les droits d'usage commercial de tes images générées, par outil",
      "Des champs [entre crochets] à personnaliser en quelques secondes pour chaque prompt",
    ],
    faq: [
      {
        question: "Ce pack fonctionne-t-il si je n'ai jamais utilisé d'IA générative d'images ?",
        answer:
          "Oui. Aucune compétence technique n'est nécessaire : copie le prompt, remplace les champs entre crochets, colle-le dans ton outil. Le guide t'explique aussi comment lire un prompt et les réglages de base à connaître.",
      },
      {
        question: "Les prompts sont-ils en français ou en anglais ?",
        answer:
          "Les prompts sont rédigés directement en anglais, la langue qui donne les meilleurs résultats sur ces outils, mais tout le reste du guide (explications, glossaire, notes) est en français.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Portrait corporate classique",
        text: "Professional corporate headshot of [subject], neutral grey studio background, soft even lighting, confident friendly expression, business attire, sharp focus, high-resolution photography, shot on 85mm lens",
      },
      {
        title: "Photo produit sur fond blanc studio",
        text: "Professional product photo of [product], pure white studio background, soft even lighting, subtle shadow beneath the product, centered composition, high-resolution commercial photography",
      },
      {
        title: "Visuel carrousel Instagram minimaliste",
        text: "Minimalist Instagram carousel background illustration about [topic], soft [brand color] tones, clean geometric shapes, generous negative space for text overlay, modern flat design style",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Pack complet",
        price: "12€",
        originalPrice: "18€",
        description: "60 prompts prêts à l'emploi, le glossaire technique et la note sur les droits d'usage commercial",
        includes: [
          "60 prompts classés en 6 catégories",
          "Réglages suggérés pour Midjourney, DALL-E et Stable Diffusion",
          "Glossaire des paramètres techniques",
          "Note sur les droits d'usage commercial",
          "PDF · 27 pages",
        ],
        pdfFile: "guido-prompts-images-ia",
      },
    ],
    crossSell: ["marketing-contenu", "algorithmes"],
  },
  {
    slug: "prompts-maths",
    title: "36 prompts IA pour profs de mathématiques",
    tagline: "Préparer, différencier et corriger plus vite",
    pitch:
      "36 prompts prêts à copier-coller dans ChatGPT ou Claude, classés en 6 catégories (préparer ses séquences, générer des exercices, créer des évaluations, différencier pour chaque élève, vulgariser les notions, communiquer avec les familles), pour gagner du temps sans sacrifier la qualité pédagogique. Chaque prompt contient des champs [entre crochets] à remplacer par ta notion, ton niveau ou ton chapitre avant de l'utiliser.",
    seoTitle: "36 prompts ChatGPT pour les profs de mathématiques — Guido",
    seoDescription: "36 prompts ChatGPT prêts à l'emploi pour les professeurs de mathématiques : préparer ses séquences, différencier et corriger plus vite. 6 catégories au total.",
    price: "12€",
    format: "PDF · 15 pages",
    audience: "Professeurs de mathématiques du collège et du lycée qui veulent gagner du temps sur la préparation, la différenciation et la correction",
    category: "Prompts",
    cover: "/covers/prompts-maths.png",
    bestseller: false,
    highlights: [
      "36 prompts prêts à copier-coller, classés en 6 catégories selon ton besoin",
      "Préparer une séquence de cours complète ou une progression annuelle en quelques minutes",
      "Générer des exercices, QCM et évaluations déjà corrigés, avec barème détaillé",
      "Différencier un même contenu pour les élèves en difficulté comme pour les plus avancés",
      "Vulgariser une notion abstraite avec une analogie, un schéma ou une anecdote historique",
      "Des messages prêts pour les parents, les bulletins et les réunions parents-profs",
    ],
    faq: [
      {
        question: "Faut-il payer un abonnement pour utiliser ce pack ?",
        answer:
          "Non. Les offres gratuites de ChatGPT et Claude suffisent pour la plupart des usages décrits. Un abonnement payant devient utile seulement si tu dépasses régulièrement les limites d'usage gratuites.",
      },
      {
        question: "Dois-je vérifier les exercices générés par l'IA ?",
        answer:
          "Oui, systématiquement. L'IA peut se tromper sur un calcul ou une valeur numérique — relis toujours les exercices et corrections générés avant de les distribuer à tes élèves.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Séquence de cours en 4 séances",
        text: "Crée une séquence de cours en 4 séances sur [notion, ex : le théorème de Pythagore] pour des élèves de [niveau], avec pour chaque séance : l'objectif, la durée, le déroulé et les prérequis nécessaires.",
      },
      {
        title: "Série d'exercices progressifs",
        text: "Crée 8 exercices progressifs (du plus facile au plus difficile) sur [notion, ex : les fractions] pour des élèves de [niveau], avec correction détaillée pour chaque exercice.",
      },
      {
        title: "Exercice à deux niveaux",
        text: "Transforme cet exercice en deux versions : une version simplifiée avec plus d'étapes intermédiaires pour les élèves en difficulté, et une version approfondie avec une question bonus pour les élèves avancés.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Pack complet",
        price: "12€",
        originalPrice: "18€",
        description: "36 prompts prêts à l'emploi, classés en 6 catégories",
        includes: [
          "36 prompts classés en 6 catégories",
          "Préparation, exercices, évaluations, différenciation",
          "Vulgarisation des notions et communication avec les familles",
          "PDF · 15 pages",
        ],
        pdfFile: "guido-prompts-maths",
      },
    ],
    crossSell: ["ia-profs", "pack-prompts-profs-complet"],
  },
  {
    slug: "prompts-francais",
    title: "32 prompts IA pour profs de français",
    tagline: "Préparer, analyser et corriger plus vite",
    pitch:
      "32 prompts prêts à copier-coller dans ChatGPT ou Claude, classés en 6 catégories (préparer ses séquences, analyser des textes, travailler l'écriture, préparer l'oral, vocabulaire et grammaire, corriger et communiquer), pour gagner du temps sans sacrifier la qualité pédagogique. Chaque prompt contient des champs [entre crochets] à remplacer par ton œuvre, ton niveau ou ton thème avant de l'utiliser.",
    seoTitle: "32 prompts ChatGPT pour les professeurs de français — Guido",
    seoDescription: "32 prompts ChatGPT enseignants pour le français : préparer ses séquences, analyser des textes, travailler l'écriture et corriger plus vite. 6 catégories.",
    price: "12€",
    format: "PDF · 14 pages",
    audience: "Professeurs de français du collège et du lycée qui veulent gagner du temps sur la préparation, l'analyse de textes et la correction",
    category: "Prompts",
    cover: "/covers/prompts-francais.png",
    bestseller: false,
    highlights: [
      "32 prompts prêts à copier-coller, classés en 6 catégories selon ton besoin",
      "Préparer une séquence sur une œuvre ou une progression annuelle en quelques minutes",
      "Générer grilles d'analyse, explications linéaires et mises en réseau de textes",
      "Des sujets de rédaction, exemples modèles et grilles d'auto-évaluation pour l'écrit",
      "Préparer l'oral : grilles d'évaluation, questions de relance, accompagnement du stress",
      "Des messages prêts pour les bulletins et la communication avec les familles",
    ],
    faq: [
      {
        question: "Faut-il payer un abonnement pour utiliser ce pack ?",
        answer:
          "Non. Les offres gratuites de ChatGPT et Claude suffisent pour la plupart des usages décrits. Un abonnement payant devient utile seulement si tu dépasses régulièrement les limites d'usage gratuites.",
      },
      {
        question: "Dois-je vérifier le contenu généré par l'IA ?",
        answer:
          "Oui, systématiquement. L'IA peut se tromper sur une citation ou une référence précise d'une œuvre — relis toujours le contenu généré avant de le distribuer à tes élèves.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Séquence de cours en 5 séances",
        text: "Crée une séquence de cours en 5 séances sur [œuvre/thème, ex : L'Étranger de Camus] pour des élèves de [niveau], avec pour chaque séance : l'objectif, le support étudié et une problématique à traiter.",
      },
      {
        title: "Grille d'analyse de texte",
        text: "Crée une grille d'analyse de texte avec des questions de compréhension progressives pour cet extrait : [coller le texte], adaptée à des élèves de [niveau].",
      },
      {
        title: "Sujets de rédaction avec critères",
        text: "Propose 3 sujets de rédaction sur le thème de [thème], adaptés à des élèves de [niveau], avec pour chacun les critères d'évaluation attendus.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Pack complet",
        price: "12€",
        originalPrice: "18€",
        description: "32 prompts prêts à l'emploi, classés en 6 catégories",
        includes: [
          "32 prompts classés en 6 catégories",
          "Séquences, analyse de textes, écriture, oral",
          "Vocabulaire, grammaire et communication avec les familles",
          "PDF · 14 pages",
        ],
        pdfFile: "guido-prompts-francais",
      },
    ],
    crossSell: ["ia-profs", "pack-prompts-profs-complet"],
  },
  {
    slug: "prompts-histgeo",
    title: "31 prompts IA pour profs d'histoire-géographie",
    tagline: "Préparer, analyser et corriger plus vite",
    pitch:
      "31 prompts prêts à copier-coller dans ChatGPT ou Claude, classés en 6 catégories (préparer ses séquences, analyser cartes et documents, créer des évaluations, différencier pour chaque élève, supports de cours et frises, corriger et communiquer), pour gagner du temps sans sacrifier la qualité pédagogique. Chaque prompt contient des champs [entre crochets] à remplacer par ton chapitre, ton niveau ou ta période avant de l'utiliser.",
    seoTitle: "31 prompts ChatGPT pour profs d'histoire-géographie — Guido",
    seoDescription: "31 prompts ChatGPT enseignants pour l'histoire-géographie : analyser cartes et documents, créer des évaluations, corriger plus vite. Classés en 6 catégories.",
    price: "12€",
    format: "PDF · 14 pages",
    audience: "Professeurs d'histoire-géographie du collège et du lycée qui veulent gagner du temps sur la préparation, l'analyse de documents et la correction",
    category: "Prompts",
    cover: "/covers/prompts-histgeo.png",
    bestseller: false,
    highlights: [
      "31 prompts prêts à copier-coller, classés en 6 catégories selon ton besoin",
      "Préparer une séquence de cours ou une progression annuelle en quelques minutes",
      "Générer des exercices d'analyse de cartes, documents et sources historiques",
      "Créer des évaluations et corrigés types, avec grille par compétences",
      "Différencier un même contenu pour les élèves en difficulté comme pour les plus avancés",
      "Des frises chronologiques, traces écrites et messages prêts pour les familles",
    ],
    faq: [
      {
        question: "Faut-il payer un abonnement pour utiliser ce pack ?",
        answer:
          "Non. Les offres gratuites de ChatGPT et Claude suffisent pour la plupart des usages décrits. Un abonnement payant devient utile seulement si tu dépasses régulièrement les limites d'usage gratuites.",
      },
      {
        question: "Dois-je vérifier le contenu généré par l'IA ?",
        answer:
          "Oui, systématiquement. L'IA peut se tromper sur une date, un chiffre ou un fait précis — vérifie toujours les dates, chiffres et faits générés avant de les distribuer à tes élèves.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Séquence de cours en 4 séances",
        text: "Crée une séquence de cours en 4 séances sur [notion, ex : la Révolution française] pour des élèves de [niveau], avec pour chaque séance : l'objectif, le support principal et une problématique à traiter.",
      },
      {
        title: "Exercice d'analyse de document",
        text: "Crée un exercice d'analyse de document (carte, texte, image) sur [sujet], avec 5 questions progressives et la correction, adapté à des élèves de [niveau].",
      },
      {
        title: "Frise chronologique simplifiée",
        text: "Rédige une frise chronologique simplifiée avec les 6 dates essentielles à retenir sur [période], pour les élèves qui ont besoin de repères visuels clairs.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Pack complet",
        price: "12€",
        originalPrice: "18€",
        description: "31 prompts prêts à l'emploi, classés en 6 catégories",
        includes: [
          "31 prompts classés en 6 catégories",
          "Séquences, analyse de cartes et documents, évaluations, différenciation",
          "Frises chronologiques et communication avec les familles",
          "PDF · 14 pages",
        ],
        pdfFile: "guido-prompts-histgeo",
      },
    ],
    crossSell: ["ia-profs", "pack-prompts-profs-complet"],
  },
  {
    slug: "prompts-sciences",
    title: "32 prompts IA pour profs de sciences",
    tagline: "Préparer, expérimenter et corriger plus vite",
    pitch:
      "32 prompts prêts à copier-coller dans ChatGPT ou Claude, classés en 6 catégories (préparer ses séquences, concevoir expériences et TP, générer des exercices, créer des évaluations, vulgariser les notions, corriger et communiquer), pour gagner du temps sans sacrifier la qualité pédagogique. Compatible SVT et physique-chimie. Chaque prompt contient des champs [entre crochets] à remplacer par ta notion, ton niveau ou ton chapitre avant de l'utiliser.",
    seoTitle: "32 prompts ChatGPT pour les professeurs de sciences — Guido",
    seoDescription: "32 prompts ChatGPT enseignants pour la SVT et la physique-chimie : préparer ses séquences, concevoir des TP, créer des évaluations. Classés en 6 catégories.",
    price: "12€",
    format: "PDF · 14 pages",
    audience: "Professeurs de SVT et de physique-chimie du collège et du lycée qui veulent gagner du temps sur la préparation, les expériences et la correction",
    category: "Prompts",
    cover: "/covers/prompts-sciences.png",
    bestseller: false,
    highlights: [
      "32 prompts prêts à copier-coller, classés en 6 catégories selon ton besoin",
      "Préparer une séquence de cours ou une progression annuelle en quelques minutes",
      "Concevoir des protocoles d'expérience et des fiches de TP sûrs et prêts à distribuer",
      "Générer des exercices, QCM et évaluations déjà corrigés, avec barème détaillé",
      "Vulgariser une notion abstraite avec une analogie, un schéma ou une anecdote scientifique",
      "Des messages prêts pour les parents, les bulletins et les questions de sécurité en TP",
    ],
    faq: [
      {
        question: "Faut-il payer un abonnement pour utiliser ce pack ?",
        answer:
          "Non. Les offres gratuites de ChatGPT et Claude suffisent pour la plupart des usages décrits. Un abonnement payant devient utile seulement si tu dépasses régulièrement les limites d'usage gratuites.",
      },
      {
        question: "Dois-je vérifier les protocoles et exercices générés par l'IA ?",
        answer:
          "Oui, systématiquement. L'IA peut se tromper sur un protocole expérimental ou une valeur numérique — vérifie toujours la sécurité et la faisabilité avec le matériel réel de ton labo avant de distribuer un contenu à tes élèves.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Séquence de cours en 4 séances",
        text: "Crée une séquence de cours en 4 séances sur [notion, ex : la photosynthèse / les réactions chimiques] pour des élèves de [niveau], avec pour chaque séance : l'objectif, le support et les prérequis nécessaires.",
      },
      {
        title: "Protocole d'expérience sécurisé",
        text: "Propose un protocole d'expérience simple et réalisable en classe pour illustrer [notion], avec la liste du matériel, les étapes et les consignes de sécurité.",
      },
      {
        title: "QCM de révision",
        text: "Génère un QCM de 10 questions sur [chapitre] avec 4 propositions par question et une explication courte pour chaque réponse.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Pack complet",
        price: "12€",
        originalPrice: "18€",
        description: "32 prompts prêts à l'emploi, classés en 6 catégories",
        includes: [
          "32 prompts classés en 6 catégories",
          "Séquences, expériences et TP, exercices, évaluations",
          "Vulgarisation des notions et communication avec les familles",
          "PDF · 14 pages",
        ],
        pdfFile: "guido-prompts-sciences",
      },
    ],
    crossSell: ["ia-profs", "pack-prompts-profs-complet"],
  },
  {
    slug: "prompts-langues",
    title: "30 prompts IA pour profs de langues vivantes",
    tagline: "Anglais, espagnol, allemand... préparer, faire pratiquer et corriger plus vite",
    pitch:
      "30 prompts prêts à copier-coller dans ChatGPT ou Claude, classés en 6 catégories (préparer ses séquences, compréhension écrite et orale, grammaire et vocabulaire, expression orale, créer des évaluations, corriger et communiquer), pour gagner du temps sans sacrifier la qualité pédagogique. Compatible avec toutes les langues vivantes (anglais, espagnol, allemand, italien...). Chaque prompt contient des champs [entre crochets] à remplacer par ta langue, ton thème ou ton niveau avant de l'utiliser.",
    seoTitle: "30 prompts ChatGPT pour profs de langues vivantes — Guido",
    seoDescription: "30 prompts ChatGPT enseignants pour les langues vivantes : préparer, faire pratiquer à l'oral et corriger plus vite. Anglais, espagnol, allemand, italien...",
    price: "12€",
    format: "PDF · 13 pages",
    audience: "Professeurs de langues vivantes du collège et du lycée qui veulent gagner du temps sur la préparation, la pratique orale et la correction",
    category: "Prompts",
    cover: "/covers/prompts-langues.png",
    bestseller: false,
    highlights: [
      "30 prompts prêts à copier-coller, classés en 6 catégories selon ton besoin",
      "Préparer une séquence de cours ou une progression annuelle en quelques minutes",
      "Générer dialogues, textes et questionnaires de compréhension calibrés au niveau CECRL",
      "Des fiches de vocabulaire, exercices de grammaire et jeux de rôle prêts à l'emploi",
      "Préparer l'oral : grilles d'évaluation, questions de relance, accompagnement du stress",
      "Des messages prêts pour les bulletins et la communication avec les familles",
    ],
    faq: [
      {
        question: "Faut-il payer un abonnement pour utiliser ce pack ?",
        answer:
          "Non. Les offres gratuites de ChatGPT et Claude suffisent pour la plupart des usages décrits. Un abonnement payant devient utile seulement si tu dépasses régulièrement les limites d'usage gratuites.",
      },
      {
        question: "Dois-je vérifier le contenu généré par l'IA ?",
        answer:
          "Oui, systématiquement. L'IA peut produire des tournures peu naturelles selon la langue cible — relis toujours les textes et dialogues générés avant de les distribuer à tes élèves.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Séquence de cours en 4 séances",
        text: "Crée une séquence de cours en 4 séances sur [thème, ex : les vacances] en [langue] pour un niveau [A1/A2/B1...], avec pour chaque séance : l'objectif communicatif, le support et l'activité principale.",
      },
      {
        title: "Dialogue avec questions de compréhension",
        text: "Crée un dialogue de niveau [A1/A2/B1...] en [langue] sur le thème de [thème du quotidien], avec traduction et 5 questions de compréhension.",
      },
      {
        title: "Jeu de rôle du quotidien",
        text: "Crée un jeu de rôle en [langue] sur une situation du quotidien (ex : [situation, commander au restaurant, demander son chemin]), adapté à un niveau [niveau], avec les rôles et le vocabulaire utile.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Pack complet",
        price: "12€",
        originalPrice: "18€",
        description: "30 prompts prêts à l'emploi, classés en 6 catégories",
        includes: [
          "30 prompts classés en 6 catégories",
          "Séquences, compréhension, grammaire/vocabulaire, expression orale",
          "Évaluations et communication avec les familles",
          "PDF · 13 pages",
        ],
        pdfFile: "guido-prompts-langues",
      },
    ],
    crossSell: ["ia-profs", "pack-prompts-profs-complet"],
  },
  {
    slug: "pack-prompts-profs-complet",
    title: "Le Pack Prompts Profs Complet : 161 prompts pour toutes les matières",
    tagline: "Maths, français, histoire-géo, sciences, langues — les 5 packs en un seul achat",
    pitch:
      "Les 5 bibliothèques de prompts Guido réunies en un seul pack : 36 prompts pour les maths, 32 pour le français, 31 pour l'histoire-géographie, 32 pour les sciences (SVT et physique-chimie) et 30 pour les langues vivantes, soit 161 prompts prêts à copier-coller dans ChatGPT ou Claude, quelle que soit la matière enseignée. Ce pack ne contient que les 5 bibliothèques de prompts — il ne comprend pas le guide « L'IA pour les profs », qui reste disponible séparément.",
    seoTitle: "161 prompts ChatGPT pour profs, toutes matières — Guido",
    seoDescription: "Le pack complet : maths, français, histoire-géo, sciences et langues vivantes réunis. 161 prompts ChatGPT enseignants prêts à l'emploi, à prix réduit.",
    price: "34€",
    format: "5 PDF · 161 prompts au total",
    audience: "Professeurs de toutes matières, équipes pédagogiques et CDI qui veulent équiper toute une équipe avec les 5 packs de prompts Guido",
    category: "Packs",
    crossListCategories: ["Prompts"],
    cover: "/covers/pack-prompts-profs-complet.png",
    bestseller: false,
    highlights: [
      "Les 5 packs de prompts par matière réunis : maths, français, histoire-géo, sciences, langues vivantes",
      "161 prompts au total, classés par usage dans chaque matière (séquences, exercices, évaluations, correction...)",
      "5 fichiers PDF distincts et téléchargeables séparément — aucun contenu recréé ou dupliqué par rapport aux packs déjà en ligne",
      "34€ au lieu de 60€ en achetant les 5 packs séparément (12€ x 5)",
      "Adapté à un achat pour toute une équipe pédagogique ou un CDI, avec mise à disposition possible pour plusieurs enseignants",
      "Ne contient pas le guide « L'IA pour les profs » (préparation de cours, exercices, correction), vendu séparément",
    ],
    faq: [
      {
        question: "Ce pack contient-il le guide « L'IA pour les profs » ?",
        answer:
          "Non. Ce pack ne regroupe que les 5 bibliothèques de prompts par matière (maths, français, histoire-géo, sciences, langues). Le guide « L'IA pour les profs », qui couvre la préparation de cours, les exercices et la correction, reste un produit séparé.",
      },
      {
        question: "Peut-on l'acheter pour toute une équipe ou un CDI ?",
        answer:
          "Oui. Ce pack est pensé aussi bien pour un enseignant seul que pour un achat groupé par une équipe pédagogique ou un CDI, avec une mise à disposition possible pour plusieurs enseignants de l'établissement. Contacte-nous pour organiser un achat groupé.",
      },
      {
        question: "Je reçois combien de fichiers, et sous quelle forme ?",
        answer:
          "L'achat donne accès aux 5 PDF existants (un par matière), chacun téléchargeable séparément depuis ton compte, exactement comme si tu avais acheté les 5 packs un par un — sans fichier recréé ou fusionné.",
      },
      {
        question: "Faut-il payer un abonnement pour utiliser ces prompts ?",
        answer:
          "Non. Les offres gratuites de ChatGPT et Claude suffisent pour la plupart des usages décrits dans les 5 packs. Un abonnement payant devient utile seulement si tu dépasses régulièrement les limites d'usage gratuites.",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Maths — Série d'exercices progressifs",
        text: "Crée 8 exercices progressifs (du plus facile au plus difficile) sur [notion, ex : les fractions] pour des élèves de [niveau], avec correction détaillée pour chaque exercice.",
      },
      {
        title: "Sciences — Protocole d'expérience sécurisé",
        text: "Propose un protocole d'expérience simple et réalisable en classe pour illustrer [notion], avec la liste du matériel, les étapes et les consignes de sécurité.",
      },
      {
        title: "Langues — Jeu de rôle du quotidien",
        text: "Crée un jeu de rôle en [langue] sur une situation du quotidien (ex : [situation, commander au restaurant, demander son chemin]), adapté à un niveau [niveau], avec les rôles et le vocabulaire utile.",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Pack complet 5 matières",
        price: "34€",
        originalPrice: "60€",
        launchPromo: { price: "26€", expiresAt: "2026-07-27T23:59:59" },
        description: "Les 5 bibliothèques de prompts, en un seul achat",
        includes: [
          "36 prompts IA pour profs de mathématiques — PDF · 15 pages",
          "32 prompts IA pour profs de français — PDF · 14 pages",
          "31 prompts IA pour profs d'histoire-géographie — PDF · 14 pages",
          "32 prompts IA pour profs de sciences — PDF · 14 pages",
          "30 prompts IA pour profs de langues vivantes — PDF · 13 pages",
          "161 prompts au total, dans 5 fichiers PDF téléchargeables séparément",
        ],
      },
    ],
    crossSell: ["ia-profs"],
    bundleOf: [
      { guideSlug: "prompts-maths", offerId: "unique" },
      { guideSlug: "prompts-francais", offerId: "unique" },
      { guideSlug: "prompts-histgeo", offerId: "unique" },
      { guideSlug: "prompts-sciences", offerId: "unique" },
      { guideSlug: "prompts-langues", offerId: "unique" },
    ],
  },
  {
    slug: "pack-marketing-algorithmes",
    title: "Le Pack Marketing & Algorithmes : stratégie de contenu et algorithmes des réseaux sociaux",
    tagline: "Les deux guides IA marketing réunis en un seul achat",
    pitch:
      "Le pack réunit deux guides complets et complémentaires : « L'IA pour créer du contenu qui marche » (stratégie de contenu, posts qui captent l'attention, calendrier éditorial, copywriting) et « Comprendre les algorithmes des réseaux sociaux » (principes communs, spécificités TikTok/Instagram/LinkedIn, erreurs qui nuisent à ta portée). À eux deux, 73 prompts prêts à l'emploi intégrés directement dans les guides — aucun pack de prompts séparé à acheter.",
    seoTitle: "Stratégie de contenu et algorithmes réseaux sociaux — Guido",
    seoDescription: "Le pack qui réunit stratégie de contenu et algorithmes Instagram, TikTok, LinkedIn : 2 guides complets, 73 prompts ChatGPT intégrés, à prix réduit sur les deux.",
    price: "25€",
    format: "2 PDF · 73 prompts au total",
    audience: "Entrepreneurs, freelances et créateurs de contenu, sans compétences techniques, qui veulent à la fois une stratégie de contenu solide et comprendre pourquoi certains posts marchent et d'autres non",
    category: "Packs",
    crossListCategories: ["IA"],
    cover: "/covers/pack-marketing-algorithmes.png",
    bestseller: false,
    highlights: [
      "Le guide complet « L'IA pour créer du contenu qui marche » : stratégie, posts, calendrier éditorial, copywriting, analyse des résultats (43 prompts intégrés)",
      "Le guide complet « Comprendre les algorithmes des réseaux sociaux » : principes communs, TikTok, Instagram, LinkedIn, erreurs à éviter (30 prompts intégrés)",
      "73 prompts au total, intégrés directement dans les deux guides — aucun pack de prompts séparé à acheter",
      "25€ au lieu de 36€ en achetant les deux guides séparément (18€ + 18€)",
      "Deux fichiers PDF distincts et téléchargeables séparément — aucun contenu recréé ou dupliqué par rapport aux guides déjà en ligne",
      "Une vision complète : créer le bon contenu ET comprendre comment il est distribué",
    ],
    faq: [
      {
        question: "Est-ce que j'obtiens les deux guides complets, prompts inclus ?",
        answer:
          "Oui. Le pack donne accès aux deux guides complets tels que vendus séparément, chacun avec sa bibliothèque de prompts intégrée (43 pour le guide marketing, 30 pour le guide algorithmes) — soit 73 prompts au total, sans rien de recréé ou de résumé.",
      },
      {
        question: "Je reçois combien de fichiers, et sous quelle forme ?",
        answer:
          "L'achat donne accès aux 2 PDF existants, chacun téléchargeable séparément depuis ton compte, exactement comme si tu avais acheté les deux guides un par un.",
      },
      {
        question: "Le prix de lancement à 21€ est-il permanent ?",
        answer:
          "Non, c'est une offre de lancement limitée dans le temps. Passé ce délai, le pack reste à 25€, toujours moins cher que les deux guides achetés séparément (36€).",
      },
    ],
    available: true,
    promptPreview: [
      {
        title: "Définir ses piliers de contenu",
        text: "Je propose [décrire ton activité/produit] à [décrire ton audience cible]. Aide-moi à définir 4 piliers de contenu cohérents avec mon activité et utiles pour mon audience.",
      },
      {
        title: "Structurer un hook TikTok percutant",
        text: "Aide-moi à écrire les 3 premières secondes du script de cette vidéo pour maximiser les chances que les gens ne scrollent pas : [décrire le sujet de la vidéo].",
      },
    ],
    offers: [
      {
        id: "unique",
        label: "Pack complet 2 guides",
        price: "25€",
        originalPrice: "36€",
        launchPromo: { price: "21€", expiresAt: "2026-07-28T23:59:59" },
        description: "Les deux guides complets, avec leurs prompts intégrés, en un seul achat",
        includes: [
          "L'IA pour créer du contenu qui marche — 43 prompts intégrés, PDF · 39 pages",
          "Comprendre les algorithmes des réseaux sociaux — 30 prompts intégrés, PDF · 41 pages",
          "73 prompts au total, dans 2 fichiers PDF téléchargeables séparément",
        ],
      },
    ],
    crossSell: ["prompts-images-ia"],
    bundleOf: [
      { guideSlug: "marketing-contenu", offerId: "unique" },
      { guideSlug: "algorithmes", offerId: "unique" },
    ],
  },
  {
    slug: "pack-lancement-independant",
    title: "Le Pack Lancement Indépendant : sécuriser sa transition, créer sa structure et gérer sa trésorerie",
    tagline: "Les 3 guides essentiels pour se lancer en freelance sereinement, réunis en un seul achat",
    pitch:
      "Le pack réunit trois guides complets et complémentaires : « Devenir freelance après 40 ans » (sécuriser sa transition financière, valoriser son expérience, trouver ses premiers clients), « Créer sa micro-entreprise en 2026 » (immatriculation, TVA, facturation) et « Gérer sa trésorerie quand les revenus sont irréguliers » (matelas de sécurité, salaire fixe, lisser les creux d'activité). Trois étapes du même parcours — se décider, se structurer, tenir dans la durée — réunies en un seul achat, même si elles appartiennent à deux sections différentes du site (Reconversion et Finance).",
    seoTitle: "Pack Lancement Indépendant : 3 guides réunis | Guido",
    seoDescription: "Le pack qui réunit sécuriser sa transition freelance, créer sa micro-entreprise et gérer sa trésorerie : 3 guides complets, 67 prompts intégrés, à prix réduit.",
    price: "35€",
    format: "3 PDF · 3 guides complets",
    audience: "Futurs et nouveaux freelances et auto-entrepreneurs qui veulent aborder les 3 étapes clés du lancement (sécuriser sa transition, se structurer, gérer sa trésorerie) sans acheter les 3 guides séparément",
    category: "Packs",
    crossListCategories: ["Reconversion", "Finance"],
    cover: "/covers/pack-lancement-independant.png",
    bestseller: false,
    highlights: [
      "Le guide complet « Devenir freelance après 40 ans » : sécuriser sa transition, valoriser son expérience, trouver ses premiers clients",
      "Le guide complet « Créer sa micro-entreprise en 2026 » : immatriculation, TVA, facturation, 31 prompts intégrés",
      "Le guide complet « Gérer sa trésorerie quand les revenus sont irréguliers » : matelas de sécurité, salaire fixe, 36 prompts intégrés",
      "67 prompts au total, intégrés directement dans les deux guides Finance — aucun pack de prompts séparé à acheter",
      "35€ au lieu de 55€ en achetant les 3 guides séparément (19€ + 18€ + 18€)",
      "Trois fichiers PDF distincts et téléchargeables séparément — aucun contenu recréé ou dupliqué par rapport aux guides déjà en ligne",
    ],
    faq: [
      {
        question: "Est-ce que j'obtiens les 3 guides complets, prompts inclus ?",
        answer:
          "Oui. Le pack donne accès aux 3 guides complets tels que vendus séparément : le guide freelance après 40 ans (offre « Guide seul »), et les deux guides Finance avec leurs bibliothèques de prompts intégrées (31 pour la micro-entreprise, 36 pour la trésorerie) — soit 67 prompts au total, sans rien de recréé ou de résumé.",
      },
      {
        question: "Pourquoi ce pack mélange-t-il des guides de sections différentes (Reconversion et Finance) ?",
        answer:
          "Parce que ce sont les 3 étapes du même parcours pour qui se lance en indépendant : décider et sécuriser sa transition, créer sa structure, puis tenir financièrement dans la durée. Les regrouper malgré leurs sections différentes, c'est justement la valeur de ce pack.",
      },
      {
        question: "Je reçois combien de fichiers, et sous quelle forme ?",
        answer:
          "L'achat donne accès aux 3 PDF existants, chacun téléchargeable séparément depuis ton compte, exactement comme si tu avais acheté les 3 guides un par un.",
      },
      {
        question: "Le prix de lancement à 29€ est-il permanent ?",
        answer:
          "Non, c'est une offre de lancement limitée dans le temps. Passé ce délai, le pack reste à 35€, toujours moins cher que les 3 guides achetés séparément (55€).",
      },
    ],
    available: true,
    offers: [
      {
        id: "unique",
        label: "Pack complet 3 guides",
        price: "35€",
        originalPrice: "55€",
        launchPromo: { price: "29€", expiresAt: "2026-07-29T23:59:59" },
        description: "Les 3 guides complets, avec leurs prompts intégrés, en un seul achat",
        includes: [
          "Devenir freelance après 40 ans (Guide seul) — PDF · 49 pages",
          "Créer sa micro-entreprise en 2026 — 31 prompts intégrés, PDF · 52 pages",
          "Gérer sa trésorerie quand les revenus sont irréguliers — 36 prompts intégrés, PDF · 39 pages",
          "67 prompts au total, dans 3 fichiers PDF téléchargeables séparément",
        ],
      },
    ],
    crossSell: ["carriere-personnalite"],
    bundleOf: [
      { guideSlug: "freelance-40ans", offerId: "seul" },
      { guideSlug: "micro-entreprise-2026", offerId: "unique" },
      { guideSlug: "tresorerie-freelance", offerId: "unique" },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);

// Bundles (guides avec `bundleOf`) qui incluent ce guide, pour afficher un
// bandeau "économise en prenant le pack" sur la page d'un guide individuel.
export const findBundlesContaining = (guideSlug: string) =>
  guides.filter((guide) =>
    guide.bundleOf?.some((item) => item.guideSlug === guideSlug),
  );
