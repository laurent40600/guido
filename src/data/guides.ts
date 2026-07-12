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
  promptPreview?: { title: string; text: string }[];
  crossSell?: string[];
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
    crossSell: ["prompts-images-ia", "prompts-maths", "prompts-francais", "prompts-histgeo"],
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
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
