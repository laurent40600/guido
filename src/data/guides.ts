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
    crossSell: ["prompts-images-ia"],
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
    crossSell: ["ia-ses", "prompts-images-ia", "prompts-maths", "prompts-francais", "prompts-histgeo"],
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
    crossSell: ["prompts-images-ia"],
  },
  {
    slug: "ia-ses",
    title: "L'IA pour les profs de SES : préparer, illustrer et corriger plus vite",
    tagline: "Un seul guide, tout intégré : cours, exercices, correction et 35 prompts prêts à l'emploi",
    pitch:
      "Construire une étude de cas à partir de données réelles, générer des EC1, EC2, EC3 et des sujets de dissertation calibrés au programme, corriger plus vite sans jamais déléguer la notation : ce guide couvre tout le cycle de préparation en SES, avec une bibliothèque de 35 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Spécifique au programme de Sciences économiques et sociales, aucune compétence technique requise.",
    price: "18€",
    format: "PDF · 60 pages",
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
          "PDF · 60 pages",
        ],
        pdfFile: "guido-ia-ses",
      },
    ],
    crossSell: ["ia-profs", "pack-prompts-profs-complet", "prompts-images-ia"],
  },
  {
    slug: "ia-eleves",
    title: "L'IA pour réussir ses cours : comprendre, s'entraîner et réviser efficacement",
    tagline: "Progresser avec l'IA, sans jamais se faire aider à sa place",
    pitch:
      "Comprendre un cours difficile, s'entraîner avant un contrôle, réviser sans stress et structurer un devoir sans se le faire rédiger : ce guide couvre toutes les matières, avec une bibliothèque de 24 prompts intégrée directement dedans (format 2 en 1, pas de pack séparé à acheter). Pensé pour progresser vraiment, pas pour tricher — un devoir rendu doit toujours rester ton travail.",
    price: "15€",
    format: "PDF · 41 pages",
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
          "PDF · 41 pages",
        ],
        pdfFile: "guido-ia-eleves",
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
  {
    slug: "sommeil-ecrans",
    title: "Sommeil et écrans : le guide pour les travailleurs à domicile qui n'arrivent plus à décrocher",
    tagline: "Retrouver un vrai sommeil, sans culpabiliser et sans t'imposer l'impossible",
    pitch:
      "Sans trajet retour pour décompresser, la journée de travail déborde souvent sur la soirée, et les écrans repoussent mécaniquement l'heure du coucher. Ce guide t'aide à comprendre ce qui perturbe vraiment ton endormissement, à reprendre le contrôle de tes soirées et à construire un rituel de sommeil réaliste — avec un plan progressif sur 21 jours, sans pression ni solution extrême.",
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
  },
  {
    slug: "menopause-energie",
    title: "Ménopause : comprendre les symptômes et retrouver de l'énergie",
    tagline: "Comprendre ce qui se passe dans ton corps, et reprendre la main sur ton quotidien",
    pitch:
      "Bouffées de chaleur, fatigue, sommeil perturbé, brouillard mental : ces symptômes touchent tôt ou tard toutes les femmes, mais restent rarement expliqués clairement. Ce guide t'aide à comprendre ce qui se passe réellement dans ton corps, à retrouver de l'énergie au quotidien et à te faire entendre dans ton parcours de soin — avec un plan progressif sur 21 jours, sans jamais se substituer à un avis médical.",
    price: "Dès 19€",
    format: "PDF · 32 à 45 pages",
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
          "PDF · 32 pages",
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
          "PDF · 45 pages",
        ],
        pdfFile: "guido-menopause-energie-pack",
        featured: true,
      },
    ],
  },
  {
    slug: "procrastination",
    title: "Sortir de la procrastination : retrouver sa motivation et reprendre le contrôle de son temps",
    tagline: "Comprendre ton fonctionnement, avancer sans culpabiliser, et reprendre la main sur ton temps",
    pitch:
      "Repousser une tâche importante n'est pas un manque de volonté, mais un mécanisme réel : peur de l'échec, perfectionnisme, tâches floues ou trop grosses. Ce guide t'aide à comprendre pourquoi tu procrastines vraiment, à reprendre le contrôle de ton temps avec des méthodes concrètes et à retrouver une motivation qui tient dans la durée — avec un plan progressif sur 21 jours, sans culpabilisation ni promesse de transformation instantanée.",
    price: "Dès 19€",
    format: "PDF · 49 à 60 pages",
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
          "PDF · 49 pages",
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
          "PDF · 60 pages",
        ],
        pdfFile: "guido-procrastination-pack",
        featured: true,
      },
    ],
  },
  {
    slug: "prompts-images-ia",
    title: "60 prompts pour générer des images professionnelles avec l'IA",
    tagline: "Compatible Midjourney, DALL-E et Stable Diffusion",
    pitch:
      "60 prompts prêts à copier-coller, classés en 6 catégories (portraits, produits, réseaux sociaux, présentations, décors, logos), pour générer des visuels professionnels sans compétence technique ni artistique. Chaque prompt est accompagné des réglages suggérés pour Midjourney, DALL-E et Stable Diffusion, avec un glossaire des paramètres techniques et une note sur les droits d'usage commercial de tes images.",
    price: "12€",
    format: "PDF · 28 pages",
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
          "PDF · 28 pages",
        ],
        pdfFile: "guido-prompts-images-ia",
      },
    ],
  },
  {
    slug: "prompts-maths",
    title: "36 prompts IA pour profs de mathématiques",
    tagline: "Préparer, différencier et corriger plus vite",
    pitch:
      "36 prompts prêts à copier-coller dans ChatGPT ou Claude, classés en 6 catégories (préparer ses séquences, générer des exercices, créer des évaluations, différencier pour chaque élève, vulgariser les notions, communiquer avec les familles), pour gagner du temps sans sacrifier la qualité pédagogique. Chaque prompt contient des champs [entre crochets] à remplacer par ta notion, ton niveau ou ton chapitre avant de l'utiliser.",
    price: "12€",
    format: "PDF · 16 pages",
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
          "PDF · 16 pages",
        ],
        pdfFile: "guido-prompts-maths",
      },
    ],
  },
  {
    slug: "prompts-francais",
    title: "32 prompts IA pour profs de français",
    tagline: "Préparer, analyser et corriger plus vite",
    pitch:
      "32 prompts prêts à copier-coller dans ChatGPT ou Claude, classés en 6 catégories (préparer ses séquences, analyser des textes, travailler l'écriture, préparer l'oral, vocabulaire et grammaire, corriger et communiquer), pour gagner du temps sans sacrifier la qualité pédagogique. Chaque prompt contient des champs [entre crochets] à remplacer par ton œuvre, ton niveau ou ton thème avant de l'utiliser.",
    price: "12€",
    format: "PDF · 15 pages",
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
          "PDF · 15 pages",
        ],
        pdfFile: "guido-prompts-francais",
      },
    ],
  },
  {
    slug: "prompts-histgeo",
    title: "31 prompts IA pour profs d'histoire-géographie",
    tagline: "Préparer, analyser et corriger plus vite",
    pitch:
      "31 prompts prêts à copier-coller dans ChatGPT ou Claude, classés en 6 catégories (préparer ses séquences, analyser cartes et documents, créer des évaluations, différencier pour chaque élève, supports de cours et frises, corriger et communiquer), pour gagner du temps sans sacrifier la qualité pédagogique. Chaque prompt contient des champs [entre crochets] à remplacer par ton chapitre, ton niveau ou ta période avant de l'utiliser.",
    price: "12€",
    format: "PDF · 15 pages",
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
          "PDF · 15 pages",
        ],
        pdfFile: "guido-prompts-histgeo",
      },
    ],
  },
  {
    slug: "prompts-sciences",
    title: "32 prompts IA pour profs de sciences",
    tagline: "Préparer, expérimenter et corriger plus vite",
    pitch:
      "32 prompts prêts à copier-coller dans ChatGPT ou Claude, classés en 6 catégories (préparer ses séquences, concevoir expériences et TP, générer des exercices, créer des évaluations, vulgariser les notions, corriger et communiquer), pour gagner du temps sans sacrifier la qualité pédagogique. Compatible SVT et physique-chimie. Chaque prompt contient des champs [entre crochets] à remplacer par ta notion, ton niveau ou ton chapitre avant de l'utiliser.",
    price: "12€",
    format: "PDF · 15 pages",
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
          "PDF · 15 pages",
        ],
        pdfFile: "guido-prompts-sciences",
      },
    ],
  },
  {
    slug: "prompts-langues",
    title: "30 prompts IA pour profs de langues vivantes",
    tagline: "Anglais, espagnol, allemand... préparer, faire pratiquer et corriger plus vite",
    pitch:
      "30 prompts prêts à copier-coller dans ChatGPT ou Claude, classés en 6 catégories (préparer ses séquences, compréhension écrite et orale, grammaire et vocabulaire, expression orale, créer des évaluations, corriger et communiquer), pour gagner du temps sans sacrifier la qualité pédagogique. Compatible avec toutes les langues vivantes (anglais, espagnol, allemand, italien...). Chaque prompt contient des champs [entre crochets] à remplacer par ta langue, ton thème ou ton niveau avant de l'utiliser.",
    price: "12€",
    format: "PDF · 14 pages",
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
          "PDF · 14 pages",
        ],
        pdfFile: "guido-prompts-langues",
      },
    ],
  },
  {
    slug: "pack-prompts-profs-complet",
    title: "Le Pack Prompts Profs Complet : 161 prompts pour toutes les matières",
    tagline: "Maths, français, histoire-géo, sciences, langues — les 5 packs en un seul achat",
    pitch:
      "Les 5 bibliothèques de prompts Guido réunies en un seul pack : 36 prompts pour les maths, 32 pour le français, 31 pour l'histoire-géographie, 32 pour les sciences (SVT et physique-chimie) et 30 pour les langues vivantes, soit 161 prompts prêts à copier-coller dans ChatGPT ou Claude, quelle que soit la matière enseignée. Ce pack ne contient que les 5 bibliothèques de prompts — il ne comprend pas le guide « L'IA pour les profs », qui reste disponible séparément.",
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
          "36 prompts IA pour profs de mathématiques — PDF · 16 pages",
          "32 prompts IA pour profs de français — PDF · 15 pages",
          "31 prompts IA pour profs d'histoire-géographie — PDF · 15 pages",
          "32 prompts IA pour profs de sciences — PDF · 15 pages",
          "30 prompts IA pour profs de langues vivantes — PDF · 14 pages",
          "161 prompts au total, dans 5 fichiers PDF téléchargeables séparément",
        ],
      },
    ],
    bundleOf: [
      { guideSlug: "prompts-maths", offerId: "unique" },
      { guideSlug: "prompts-francais", offerId: "unique" },
      { guideSlug: "prompts-histgeo", offerId: "unique" },
      { guideSlug: "prompts-sciences", offerId: "unique" },
      { guideSlug: "prompts-langues", offerId: "unique" },
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
