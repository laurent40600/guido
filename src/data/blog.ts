export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "prompt"; text: string };

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
}

export const blogPosts: BlogPost[] = [
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
    coverAlt: "Une enseignante souriante prépare ses cours sur son ordinateur portable",
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
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
