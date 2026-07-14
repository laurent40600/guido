export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "prompt"; text: string; label?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  coverImage: string;
  coverAlt: string;
  publishedAt: string;
  body: BlogBlock[];
  // Lien vers le guide payant en fin d'article.
  cta: {
    text: string;
    linkLabel: string;
    href: string;
  };
  // Slugs d'autres articles à suggérer dans "À lire aussi".
  relatedPosts?: string[];
}

const rawBlogPosts: BlogPost[] = [
  {
    slug: "chatgpt-preparer-ses-cours",
    title: "Comment utiliser ChatGPT pour préparer ses cours : guide complet",
    excerpt:
      "Entre les programmes à respecter, les niveaux hétérogènes et le temps qui manque toujours, ChatGPT peut réellement alléger la préparation de tes cours — à condition de savoir comment l'utiliser.",
    seoTitle:
      "Comment utiliser ChatGPT pour préparer ses cours : guide complet | Guido",
    seoDescription:
      "Découvre comment utiliser ChatGPT pour préparer tes cours, créer des exercices différenciés et gagner du temps, sans jamais déléguer la notation finale.",
    coverImage:
      "https://images.unsplash.com/photo-1758685848142-06e158cf64bc?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Enseignante préparant ses cours avec ChatGPT sur son ordinateur portable",
    publishedAt: "2026-07-14",
    body: [
      {
        type: "paragraph",
        text: "Entre les programmes à respecter, les niveaux hétérogènes et le temps qui manque toujours, préparer ses cours reste l'une des tâches les plus chronophages du métier d'enseignant. ChatGPT (ou Claude) peut réellement alléger cette charge, à condition de savoir comment l'utiliser correctement. Voici un guide concret, sans jargon technique.",
      },
      { type: "heading", text: "Pourquoi utiliser l'IA pour préparer ses cours" },
      {
        type: "paragraph",
        text: "Un professeur passe en moyenne plusieurs heures par semaine à préparer des séquences, des exercices et des évaluations. L'IA ne remplace pas ton expertise pédagogique, mais elle peut prendre en charge la partie la plus chronophage : structurer une première version, que tu ajustes ensuite avec ta connaissance précise de ta classe.",
      },
      {
        type: "paragraph",
        text: "Ce n'est pas une question de « tricher » ou de se reposer sur la machine : c'est la même logique qu'utiliser un manuel scolaire ou une ressource partagée entre collègues, sauf que cette ressource est générée sur mesure, en quelques secondes, pour ton besoin exact.",
      },
      { type: "heading", text: "Générer une séquence de cours complète" },
      {
        type: "paragraph",
        text: "Plutôt que de partir d'une page blanche, tu peux demander à l'IA de structurer les grandes lignes d'une séquence : objectifs, découpage en séances, supports nécessaires. Un exemple de prompt simple :",
      },
      {
        type: "prompt",
        text: "Crée une séquence de cours en 4 séances sur [notion], pour des élèves de [niveau], avec pour chaque séance : l'objectif, le support et les prérequis nécessaires.",
      },
      {
        type: "paragraph",
        text: "Le résultat n'est jamais parfait du premier coup, mais il te donne une architecture solide à partir de laquelle travailler, plutôt que de tout construire depuis zéro.",
      },
      { type: "heading", text: "Créer des exercices adaptés à ta classe" },
      {
        type: "paragraph",
        text: "L'IA excelle particulièrement pour générer des exercices variés et différenciés : une version simplifiée pour les élèves en difficulté, une version approfondie pour les plus avancés, à partir d'un seul exercice de départ. C'est un gain de temps réel sur la différenciation, souvent citée comme l'une des tâches les plus difficiles à mettre en œuvre concrètement en classe.",
      },
      {
        type: "heading",
        text: "Accélérer la correction (sans jamais déléguer la notation)",
      },
      {
        type: "paragraph",
        text: "L'IA peut t'aider à préparer une grille de correction détaillée avant de corriger, ou à rédiger un premier commentaire sur une copie que tu affines ensuite. Ce qu'elle ne doit jamais faire : attribuer la note finale à ta place. La responsabilité de l'évaluation reste entièrement la tienne.",
      },
      { type: "heading", text: "Les limites à connaître" },
      {
        type: "paragraph",
        text: "L'IA peut se tromper, notamment sur des données chiffrées, des dates précises ou des calculs. Relis toujours ce qui est généré avant de le distribuer à tes élèves. Et attention aux données personnelles : évite de coller des informations identifiables sur tes élèves dans un outil d'IA grand public.",
      },
      { type: "heading", text: "Pour aller plus loin" },
      {
        type: "paragraph",
        text: "Si tu veux gagner du temps sans avoir à réinventer tes prompts à chaque fois, on a construit un guide complet avec une méthode pas à pas et une bibliothèque de prompts prêts à copier-coller pour chaque étape de ta préparation.",
      },
    ],
    cta: {
      text: "Envie d'une méthode complète et d'une bibliothèque de prompts prêts à copier-coller pour chaque étape de ta préparation ?",
      linkLabel:
        "L'IA pour les profs : créer ses cours, corrections et exercices en deux fois moins de temps",
      href: "/guides/ia-profs",
    },
    relatedPosts: ["10-prompts-chatgpt-enseignants", "chatgpt-corriger-copies"],
  },
  {
    slug: "10-prompts-chatgpt-enseignants",
    title: "10 prompts ChatGPT indispensables pour les enseignants",
    excerpt:
      "Tu utilises déjà ChatGPT ou Claude, mais le résultat te déçoit souvent ? Le problème vient rarement de l'outil, mais du prompt. Voici 10 prompts prêts à copier-coller, quelle que soit ta matière.",
    seoTitle: "10 prompts ChatGPT indispensables pour les enseignants | Guido",
    seoDescription:
      "10 prompts ChatGPT prêts à copier-coller pour préparer des cours, créer des exercices et corriger plus vite, quelle que soit ta matière.",
    coverImage:
      "https://images.unsplash.com/photo-1761322572550-967ea8c0bfd9?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Cahier et stylo sur un bureau, pour noter des prompts ChatGPT destinés aux enseignants",
    publishedAt: "2026-07-16",
    body: [
      {
        type: "paragraph",
        text: "Tu utilises déjà ChatGPT ou Claude, mais tu tapes souvent des demandes vagues et le résultat te déçoit ? Le problème vient rarement de l'outil : il vient du prompt. Voici 10 prompts prêts à copier-coller, utilisables quelle que soit ta matière, à adapter simplement avec tes propres crochets [comme ceci].",
      },
      { type: "heading", text: "1. Structurer une séquence de cours" },
      {
        type: "prompt",
        label: "Prompt 1",
        text: "Crée une séquence de cours en 4 séances sur [notion], pour des élèves de [niveau], avec pour chaque séance : l'objectif, le support et les prérequis nécessaires.",
      },
      {
        type: "paragraph",
        text: "Parfait pour démarrer un nouveau chapitre sans repartir d'une page blanche.",
      },
      { type: "heading", text: "2. Générer des exercices progressifs" },
      {
        type: "prompt",
        label: "Prompt 2",
        text: "Crée 8 exercices progressifs sur [notion], du plus facile au plus difficile, pour des élèves de [niveau], avec correction détaillée pour chaque exercice.",
      },
      {
        type: "paragraph",
        text: "Un classique qui fait gagner un temps réel sur la création de séries d'entraînement.",
      },
      { type: "heading", text: "3. Différencier un exercice existant" },
      {
        type: "prompt",
        label: "Prompt 3",
        text: "Transforme cet exercice en deux versions : une simplifiée pour les élèves en difficulté, une approfondie pour les élèves avancés. Exercice : [coller l'exercice].",
      },
      {
        type: "paragraph",
        text: "La différenciation, souvent citée comme la tâche la plus difficile à mettre en œuvre concrètement, devient ici une simple question de quelques secondes.",
      },
      { type: "heading", text: "4. Créer un QCM de révision" },
      {
        type: "prompt",
        label: "Prompt 4",
        text: "Génère un QCM de 10 questions sur [chapitre] avec 4 propositions par question, une seule bonne réponse, et une explication courte pour chaque réponse.",
      },
      {
        type: "paragraph",
        text: "Idéal pour une révision rapide ou une évaluation formative.",
      },
      { type: "heading", text: "5. Reformuler une notion mal comprise" },
      {
        type: "prompt",
        label: "Prompt 5",
        text: "Explique la notion de [notion] à un élève qui n'a manifestement pas compris, avec une reformulation plus simple et un exemple très concret du quotidien.",
      },
      {
        type: "paragraph",
        text: "Utile quand l'explication du cours n'a pas suffi pour toute la classe.",
      },
      { type: "heading", text: "6. Rédiger une trace écrite" },
      {
        type: "prompt",
        label: "Prompt 6",
        text: "Rédige la trace écrite (le résumé de cours) à copier par les élèves sur la notion de [notion], en langage simple et avec un exemple.",
      },
      {
        type: "paragraph",
        text: "Un résumé propre et court, prêt à distribuer ou à copier au tableau.",
      },
      { type: "heading", text: "7. Créer une évaluation complète" },
      {
        type: "prompt",
        label: "Prompt 7",
        text: "Crée une évaluation de fin de chapitre sur [chapitre] pour des élèves de [niveau], avec 4 exercices de difficulté croissante et le barème détaillé.",
      },
      {
        type: "paragraph",
        text: "Un contrôle complet à relire et ajuster, plutôt qu'à construire de zéro.",
      },
      { type: "heading", text: "8. Générer un corrigé avec barème" },
      {
        type: "prompt",
        label: "Prompt 8",
        text: "Rédige un corrigé type d'évaluation avec le barème détaillé point par point pour cet exercice : [coller l'exercice], en indiquant les points accordés même pour une méthode juste avec un résultat faux.",
      },
      {
        type: "paragraph",
        text: "Ça harmonise ta notation et ça accélère nettement la correction.",
      },
      { type: "heading", text: "9. Préparer une réponse aux parents" },
      {
        type: "prompt",
        label: "Prompt 9",
        text: "Rédige un message pour les parents expliquant simplement ce que la classe va aborder ce trimestre, avec 2-3 conseils pour aider leur enfant à la maison.",
      },
      {
        type: "paragraph",
        text: "Un message clair, sans y passer une soirée.",
      },
      { type: "heading", text: "10. Rédiger une appréciation de bulletin" },
      {
        type: "prompt",
        label: "Prompt 10",
        text: "Rédige une appréciation de bulletin pour un élève avec le profil suivant : [décrire le profil], en restant constructif et personnalisé.",
      },
      {
        type: "paragraph",
        text: "Un vrai gain de temps en période de bulletins, sans perdre en personnalisation.",
      },
      { type: "heading", text: "Une précision importante" },
      {
        type: "paragraph",
        text: "Relis toujours ce que génère l'IA avant de le distribuer à tes élèves : elle peut se tromper sur un calcul, une date ou une donnée précise. Et évite de coller des informations identifiables sur tes élèves dans un outil grand public.",
      },
      { type: "heading", text: "Pour aller plus loin" },
      {
        type: "paragraph",
        text: "Ces 10 prompts fonctionnent pour toutes les matières, mais chaque discipline a ses propres besoins spécifiques (analyse de texte en français, protocoles en sciences, cartes en histoire-géo...). On a préparé des packs de 30 à 36 prompts dédiés à chaque matière, prêts à l'emploi.",
      },
    ],
    cta: {
      text: "Chaque discipline a ses propres besoins : découvre les packs de 30 à 36 prompts dédiés à ta matière, prêts à l'emploi.",
      linkLabel: "Découvrir les packs de prompts par matière",
      href: "/prompts",
    },
    relatedPosts: [
      "chatgpt-preparer-ses-cours",
      "chatgpt-corriger-copies",
      "creer-exercice-ia-5-minutes",
    ],
  },
  {
    slug: "chatgpt-corriger-copies",
    title: "ChatGPT peut-il corriger des copies ? Ce qu'il faut savoir",
    excerpt:
      "La correction reste l'une des tâches les plus lourdes du métier d'enseignant. Voici une réponse honnête sur ce que ChatGPT peut vraiment faire, et ce qu'il ne doit jamais faire.",
    seoTitle: "ChatGPT peut-il corriger des copies ? Ce qu'il faut savoir | Guido",
    seoDescription:
      "Découvre ce que ChatGPT peut vraiment faire pour la correction de copies : préparer un barème, un premier commentaire, sans jamais déléguer la notation finale.",
    coverImage:
      "https://images.unsplash.com/photo-1550592704-6c76defa9985?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Enseignant corrigeant une copie au stylo rouge sur son bureau",
    publishedAt: "2026-07-18",
    body: [
      {
        type: "paragraph",
        text: "La correction reste l'une des tâches les plus lourdes du métier d'enseignant, surtout en période de bulletins ou d'évaluations groupées. Beaucoup de professeurs se demandent si l'IA peut vraiment aider sur ce terrain-là, et jusqu'où il est raisonnable d'aller. Voici une réponse honnête.",
      },
      { type: "heading", text: "Ce que ChatGPT peut faire concrètement" },
      {
        type: "paragraph",
        text: "L'IA est efficace pour préparer les outils de correction en amont : générer un barème détaillé, lister les critères attendus, ou repérer les erreurs les plus fréquentes probables sur un type d'exercice donné. Elle peut aussi t'aider à rédiger un premier commentaire personnalisé sur une copie, que tu ajustes ensuite, plutôt que d'écrire chaque appréciation entièrement de zéro.",
      },
      {
        type: "paragraph",
        text: "Sur des tâches très cadrées (un QCM, un calcul avec une réponse unique), l'IA peut aussi faire un premier tri rapide, à condition de vérifier ensuite les résultats.",
      },
      { type: "heading", text: "Ce qu'elle ne doit jamais faire" },
      {
        type: "paragraph",
        text: "Attribuer la note finale d'un élève à sa place. La notation engage ton jugement professionnel, ta connaissance de l'élève et du contexte de la classe — des éléments qu'une IA ne possède pas et ne peut pas évaluer correctement. Une copie identique peut mériter une appréciation différente selon la progression de l'élève, une information que seul toi détiens.",
      },
      { type: "heading", text: "Le problème de la confidentialité" },
      {
        type: "paragraph",
        text: "Attention à ne jamais coller de copies contenant des informations identifiables sur tes élèves (nom complet, établissement, éléments personnels) dans un outil d'IA grand public. Anonymise toujours le contenu avant de le soumettre, ou reformule la question en termes génériques plutôt que de coller la copie telle quelle.",
      },
      { type: "heading", text: "Le risque de l'erreur silencieuse" },
      {
        type: "paragraph",
        text: "L'IA peut se tromper, y compris sur des éléments qui semblent factuels : un calcul, une date, une règle de grammaire. Une erreur de correction générée par IA et non relue peut se répercuter directement sur la note d'un élève. La relecture n'est pas une option, c'est une étape obligatoire.",
      },
      { type: "heading", text: "Un vrai gain de temps, à condition de bien s'organiser" },
      {
        type: "paragraph",
        text: "Le vrai levier n'est pas de déléguer la correction, mais d'accélérer sa préparation : un barème clair préparé à l'avance avec l'aide de l'IA fait gagner un temps considérable au moment de corriger 30 copies, bien plus qu'une tentative de faire corriger directement par l'outil.",
      },
      { type: "heading", text: "Pour aller plus loin" },
      {
        type: "paragraph",
        text: "On a détaillé une méthode complète pour utiliser l'IA sur la correction sans jamais déléguer la notation finale, avec des prompts prêts à l'emploi pour préparer barèmes et appréciations.",
      },
    ],
    cta: {
      text: "Envie d'une méthode complète pour accélérer ta correction sans jamais déléguer la notation, avec des prompts prêts à l'emploi ?",
      linkLabel:
        "L'IA pour les profs : créer ses cours, corrections et exercices en deux fois moins de temps",
      href: "/guides/ia-profs",
    },
    relatedPosts: ["chatgpt-preparer-ses-cours", "10-prompts-chatgpt-enseignants"],
  },
  {
    slug: "creer-exercice-ia-5-minutes",
    title: "Comment créer un exercice avec l'IA en 5 minutes",
    excerpt:
      "Créer un exercice de A à Z prend facilement 15 à 20 minutes en partant de zéro. Avec l'IA, la même tâche peut se faire en 5 minutes — à condition de savoir précisément quoi demander.",
    seoTitle: "Comment créer un exercice avec l'IA en 5 minutes | Guido",
    seoDescription:
      "La méthode en 5 étapes pour créer un exercice complet avec corrigé grâce à l'IA, en 5 minutes au lieu de 20.",
    coverImage:
      "https://images.unsplash.com/photo-1681164315747-ce3114015a55?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Enseignant créant un exercice différencié avec l'aide de l'IA",
    publishedAt: "2026-07-20",
    body: [
      {
        type: "paragraph",
        text: "Créer un exercice de A à Z (énoncé, mise en forme, correction) prend facilement 15 à 20 minutes quand on part de zéro. Avec l'IA, cette même tâche peut se faire en 5 minutes, à condition de savoir précisément quoi demander. Voici la méthode, étape par étape.",
      },
      { type: "heading", text: "Étape 1 : préciser le contexte exact" },
      {
        type: "paragraph",
        text: "Le résultat dépend directement de la précision de ta demande. Au lieu de « crée un exercice de maths », précise la notion, le niveau de classe, et le nombre d'exercices souhaité. Plus le contexte est précis, moins tu auras à retravailler le résultat après coup.",
      },
      {
        type: "prompt",
        label: "Exemple",
        text: "Crée 5 exercices progressifs sur les fractions pour des élèves de 5e, du plus facile au plus difficile.",
      },
      { type: "heading", text: "Étape 2 : demander la correction en même temps" },
      {
        type: "paragraph",
        text: "Ne sépare pas la demande d'exercice de celle de la correction : demande les deux dans le même prompt. Ça t'évite un aller-retour supplémentaire et garantit une cohérence entre l'énoncé et le corrigé.",
      },
      {
        type: "prompt",
        label: "Exemple",
        text: "...avec correction détaillée pour chaque exercice.",
      },
      { type: "heading", text: "Étape 3 : demander une difficulté progressive" },
      {
        type: "paragraph",
        text: "Un exercice unique convient rarement à toute une classe hétérogène. Demander directement plusieurs niveaux de difficulté dans le même prompt (du plus facile au plus difficile) permet d'obtenir en une seule génération de quoi différencier immédiatement, sans repasser par une deuxième demande.",
      },
      { type: "heading", text: "Étape 4 : relire avant de distribuer" },
      {
        type: "paragraph",
        text: "Cette étape n'est pas optionnelle. L'IA peut se tromper sur un calcul, une date ou une formulation ambiguë. Une relecture rapide de 2-3 minutes suffit généralement à repérer les erreurs éventuelles, pour un gain de temps net qui reste très largement positif par rapport à une création manuelle complète.",
      },
      {
        type: "heading",
        text: "Étape 5 : garder les meilleurs résultats pour les réutiliser",
      },
      {
        type: "paragraph",
        text: "Un exercice généré et validé une fois peut resservir l'année suivante, ou être légèrement modifié (changer les valeurs numériques, le contexte de l'énoncé) pour une nouvelle classe. Garder une bibliothèque personnelle de tes meilleures générations évite de repartir de zéro à chaque fois.",
      },
      { type: "heading", text: "Un exemple concret, du prompt au résultat" },
      {
        type: "paragraph",
        text: "Voici à quoi ressemble une demande complète en une seule fois :",
      },
      {
        type: "prompt",
        label: "Exemple",
        text: "Crée 6 exercices progressifs sur la conjugaison du passé composé, pour des élèves de 5e, du plus facile au plus difficile, avec correction détaillée pour chaque exercice.",
      },
      {
        type: "paragraph",
        text: "En une génération, tu obtiens une série complète, prête à relire et à distribuer — largement plus rapide qu'une création manuelle intégrale.",
      },
      { type: "heading", text: "Pour aller plus loin" },
      {
        type: "paragraph",
        text: "Cette méthode fonctionne pour toutes les matières, mais chaque discipline a ses propres formulations qui donnent de meilleurs résultats. On a préparé des packs de prompts dédiés à chaque matière, déjà calibrés et prêts à copier-coller.",
      },
    ],
    cta: {
      text: "Chaque discipline a ses propres formulations qui donnent de meilleurs résultats : découvre les packs de prompts déjà calibrés pour ta matière.",
      linkLabel: "Découvrir les packs de prompts par matière",
      href: "/prompts",
    },
    relatedPosts: ["10-prompts-chatgpt-enseignants"],
  },
];

export const blogPosts: BlogPost[] = [...rawBlogPosts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
