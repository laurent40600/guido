export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "prompt"; text: string; label?: string };

// Série éditoriale à laquelle l'article appartient, utilisée pour les filtres
// et badges sur /blog. Ajouter une nouvelle valeur ici pour démarrer une
// nouvelle série (ex. "IA pour métiers", "Bien-être"...).
export type BlogSeries = "IA pour profs" | "IA pour métiers";

export interface BlogPost {
  slug: string;
  series: BlogSeries;
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
  // Convention : ne lier qu'à l'intérieur de la même série.
  relatedPosts?: string[];
}

const rawBlogPosts: BlogPost[] = [
  {
    slug: "chatgpt-preparer-ses-cours",
    series: "IA pour profs",
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
    relatedPosts: [
      "10-prompts-chatgpt-enseignants",
      "chatgpt-corriger-copies",
      "5-erreurs-ia-enseigner",
    ],
  },
  {
    slug: "10-prompts-chatgpt-enseignants",
    series: "IA pour profs",
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
      "ia-cours-maths-bonne-mauvaise-idee",
      "5-erreurs-ia-enseigner",
    ],
  },
  {
    slug: "chatgpt-corriger-copies",
    series: "IA pour profs",
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
    relatedPosts: [
      "chatgpt-preparer-ses-cours",
      "10-prompts-chatgpt-enseignants",
      "5-erreurs-ia-enseigner",
    ],
  },
  {
    slug: "creer-exercice-ia-5-minutes",
    series: "IA pour profs",
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
    relatedPosts: ["10-prompts-chatgpt-enseignants", "5-erreurs-ia-enseigner"],
  },
  {
    slug: "ia-cours-maths-bonne-mauvaise-idee",
    series: "IA pour profs",
    title: "L'IA en cours de maths : bonne ou mauvaise idée ?",
    excerpt:
      "Utiliser l'IA dans une matière où la rigueur du calcul compte autant, est-ce vraiment une bonne idée ? La réponse est plus nuancée qu'un simple oui ou non.",
    seoTitle: "L'IA en cours de maths : bonne ou mauvaise idée ? | Guido",
    seoDescription:
      "L'IA en mathématiques : ce qu'elle fait bien, ses vrais risques (erreurs de calcul silencieuses), et comment l'utiliser sereinement en classe.",
    coverImage:
      "https://images.unsplash.com/photo-1758685734312-5134968399a8?auto=format&fit=crop&w=1600&q=80",
    coverAlt:
      "Tableau de mathématiques avec équations, illustrant l'usage de l'IA en cours de maths",
    publishedAt: "2026-07-22",
    body: [
      {
        type: "paragraph",
        text: "C'est une question qui revient souvent chez les professeurs de mathématiques : utiliser l'IA dans une matière où la rigueur du calcul et de la méthode compte autant, est-ce vraiment une bonne idée ? La réponse est plus nuancée qu'un simple oui ou non.",
      },
      { type: "heading", text: "Le vrai risque : les erreurs de calcul silencieuses" },
      {
        type: "paragraph",
        text: "Contrairement à une matière littéraire où une approximation reste souvent lisible, une erreur de calcul en mathématiques peut passer complètement inaperçue si elle n'est pas vérifiée. Une IA peut se tromper sur une valeur numérique, une simplification, ou une étape de résolution, tout en présentant le résultat avec la même assurance qu'une réponse juste. La relecture n'est donc pas une précaution facultative en maths : c'est une étape incontournable avant toute distribution aux élèves.",
      },
      { type: "heading", text: "Ce que l'IA fait très bien en maths" },
      {
        type: "paragraph",
        text: "Générer des séries d'exercices progressifs sur une même notion, avec des valeurs numériques différentes à chaque fois, est une tâche où l'IA excelle et fait gagner un temps réel. De même pour la différenciation : transformer un exercice standard en version simplifiée ou approfondie se fait en quelques secondes plutôt qu'en réécrivant tout à la main.",
      },
      {
        type: "paragraph",
        text: "L'IA est aussi utile pour reformuler une notion abstraite avec un exemple concret différent de celui du cours, quand l'explication initiale n'a pas suffi pour une partie de la classe.",
      },
      { type: "heading", text: "Ce qui reste risqué ou déconseillé" },
      {
        type: "paragraph",
        text: "Demander à l'IA de résoudre directement un problème complexe sans vérification, pour ensuite le distribuer tel quel comme corrigé officiel, est risqué : une erreur de méthode peut se glisser sans que ce soit visible au premier coup d'œil, surtout sur des calculs à plusieurs étapes.",
      },
      {
        type: "paragraph",
        text: "Il est également déconseillé de laisser les élèves eux-mêmes utiliser l'IA pour obtenir directement la réponse à un exercice noté : ça ne les fait pas progresser sur la compétence de calcul et de raisonnement visée par l'exercice.",
      },
      { type: "heading", text: "Une méthode simple pour l'utiliser sereinement" },
      {
        type: "paragraph",
        text: "Toujours vérifier manuellement les valeurs numériques et la méthode de résolution avant de distribuer un exercice généré. Demander systématiquement la correction en même temps que l'exercice, pour repérer plus facilement une incohérence entre l'énoncé et le corrigé proposé. Et privilégier l'IA pour les tâches de structuration (créer plusieurs versions, varier les contextes) plutôt que pour la résolution de problèmes complexes sans supervision.",
      },
      { type: "heading", text: "En résumé" },
      {
        type: "paragraph",
        text: "L'IA en cours de maths n'est ni une solution miracle ni un danger à éviter à tout prix : c'est un outil qui accélère la préparation, à condition de garder un contrôle rigoureux sur l'exactitude des calculs, exactement comme on vérifierait n'importe quelle ressource externe avant de l'utiliser en classe.",
      },
      { type: "heading", text: "Pour aller plus loin" },
      {
        type: "paragraph",
        text: "On a préparé un pack de 36 prompts spécifiquement pensés pour les professeurs de mathématiques (séquences, exercices, évaluations, différenciation), avec les précautions à connaître pour chaque usage.",
      },
    ],
    cta: {
      text: "36 prompts spécifiquement pensés pour les professeurs de mathématiques, avec les précautions à connaître pour chaque usage.",
      linkLabel: "Découvrir le pack de prompts pour profs de maths",
      href: "/guides/prompts-maths",
    },
    relatedPosts: ["10-prompts-chatgpt-enseignants", "5-erreurs-ia-enseigner"],
  },
  {
    slug: "5-erreurs-ia-enseigner",
    series: "IA pour profs",
    title: "5 erreurs à éviter quand on utilise l'IA pour enseigner",
    excerpt:
      "L'IA peut faire gagner un temps réel dans la préparation de cours, mais mal utilisée, elle peut aussi créer plus de problèmes qu'elle n'en résout. Voici les 5 erreurs les plus fréquentes.",
    seoTitle: "5 erreurs à éviter quand on utilise l'IA pour enseigner | Guido",
    seoDescription:
      "Les 5 erreurs les plus fréquentes des enseignants qui utilisent l'IA, et comment les éviter simplement pour gagner du temps sans risque.",
    coverImage:
      "https://images.unsplash.com/photo-1758685848226-eedca8f6bce7?auto=format&fit=crop&w=1600&q=80",
    coverAlt:
      "Enseignant vérifiant attentivement un contenu généré par IA avant de l'utiliser en classe",
    publishedAt: "2026-07-24",
    body: [
      {
        type: "paragraph",
        text: "L'IA peut faire gagner un temps réel dans la préparation de cours, mais mal utilisée, elle peut aussi créer plus de problèmes qu'elle n'en résout. Voici les 5 erreurs les plus fréquentes, et comment les éviter simplement.",
      },
      { type: "heading", text: "Erreur 1 : ne pas relire avant de distribuer" },
      {
        type: "paragraph",
        text: "C'est l'erreur la plus fréquente et la plus risquée. Un contenu généré par IA peut contenir une erreur factuelle, un calcul faux, ou une formulation ambiguë, sans que ça saute aux yeux au premier coup d'œil. Distribuer un exercice ou une évaluation sans relecture préalable expose à des erreurs qui retombent directement sur les élèves.",
      },
      {
        type: "paragraph",
        text: "Comment l'éviter : prévois systématiquement 2-3 minutes de relecture après chaque génération, avant toute distribution en classe.",
      },
      { type: "heading", text: "Erreur 2 : coller des données personnelles sur les élèves" },
      {
        type: "paragraph",
        text: "Copier une copie d'élève avec son nom complet, ou décrire une situation personnelle identifiable dans un outil d'IA grand public, pose un vrai problème de confidentialité. Ces outils ne sont pas conçus comme des environnements sécurisés pour des données scolaires nominatives.",
      },
      {
        type: "paragraph",
        text: "Comment l'éviter : anonymise systématiquement (prénom générique, ou reformulation du profil sans détail identifiable) avant de coller quoi que ce soit lié à un élève précis.",
      },
      { type: "heading", text: "Erreur 3 : déléguer la notation finale" },
      {
        type: "paragraph",
        text: "Utiliser l'IA pour préparer un barème ou structurer une grille de correction est utile. Lui laisser attribuer directement la note finale d'un élève ne l'est pas : la notation engage un jugement professionnel et une connaissance du contexte que l'outil ne possède pas.",
      },
      {
        type: "paragraph",
        text: "Comment l'éviter : garde toujours la décision finale de notation entre tes mains, en utilisant l'IA uniquement comme support de préparation.",
      },
      { type: "heading", text: "Erreur 4 : des prompts trop vagues" },
      {
        type: "paragraph",
        text: "Demander « crée un exercice de français » donne un résultat générique, peu exploitable tel quel. Le niveau de précision du prompt détermine directement la qualité du résultat.",
      },
      {
        type: "paragraph",
        text: "Comment l'éviter : précise systématiquement le niveau, la notion exacte, et le format attendu dans chaque demande.",
      },
      { type: "heading", text: "Erreur 5 : vouloir tout changer d'un coup" },
      {
        type: "paragraph",
        text: "Beaucoup de professeurs, enthousiasmés par les gains de temps possibles, essaient de tout intégrer en une seule semaine (préparation, exercices, évaluations, corrections) et finissent par abandonner par surcharge, faute d'avoir pris le temps de construire une vraie habitude progressive.",
      },
      {
        type: "paragraph",
        text: "Comment l'éviter : intègre l'IA progressivement, une tâche à la fois (par exemple la préparation de séquences d'abord, puis les exercices, puis les évaluations), plutôt que de tout bouleverser en même temps.",
      },
      { type: "heading", text: "En résumé" },
      {
        type: "paragraph",
        text: "Ces 5 erreurs partagent un point commun : elles viennent presque toutes d'un manque de méthode plutôt que d'un problème avec l'outil lui-même. Une utilisation structurée, avec une relecture systématique et une intégration progressive, évite l'essentiel des risques tout en gardant les vrais bénéfices de gain de temps.",
      },
      { type: "heading", text: "Pour aller plus loin" },
      {
        type: "paragraph",
        text: "On a construit une méthode complète, avec un planning de mise en place progressif et les précautions à connaître à chaque étape, pour utiliser l'IA sereinement dans sa pratique d'enseignant.",
      },
    ],
    cta: {
      text: "Envie d'une méthode complète, avec un planning de mise en place progressif et les précautions à connaître à chaque étape ?",
      linkLabel:
        "L'IA pour les profs : créer ses cours, corrections et exercices en deux fois moins de temps",
      href: "/guides/ia-profs",
    },
    relatedPosts: [
      "chatgpt-preparer-ses-cours",
      "10-prompts-chatgpt-enseignants",
      "chatgpt-corriger-copies",
      "creer-exercice-ia-5-minutes",
      "ia-cours-maths-bonne-mauvaise-idee",
    ],
  },
  {
    slug: "automatiser-devis-chatgpt-autoentrepreneur",
    series: "IA pour métiers",
    title: "Comment automatiser ses devis avec ChatGPT quand on est auto-entrepreneur",
    excerpt:
      "Rédiger un devis prend du temps : reformuler la prestation, calculer le montant, adapter le ton selon le client. Voici comment l'IA peut t'aider à automatiser une bonne partie de ce travail.",
    seoTitle: "Comment automatiser ses devis avec ChatGPT en auto-entreprise | Guido",
    seoDescription:
      "La méthode pour créer un template de devis réutilisable avec ChatGPT et gagner un temps réel sur ton administratif d'auto-entrepreneur.",
    coverImage:
      "https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Auto-entrepreneur rédigeant un devis avec l'aide de ChatGPT",
    publishedAt: "2026-07-28",
    body: [
      {
        type: "paragraph",
        text: "Rédiger un devis prend du temps : reformuler la prestation, calculer le montant, adapter le ton selon le client. Pour un auto-entrepreneur qui jongle déjà entre son métier et son administratif, c'est une tâche qui s'accumule vite. Voici comment l'IA peut t'aider à automatiser une bonne partie de ce travail, sans perdre en professionnalisme.",
      },
      { type: "heading", text: "Pourquoi les devis prennent autant de temps" },
      {
        type: "paragraph",
        text: "Un devis n'est jamais qu'un simple montant : il faut décrire précisément la prestation, poser les conditions (délais, modalités de paiement), et adapter le ton selon qu'on s'adresse à un particulier ou une entreprise. C'est cette part rédactionnelle, plus que le calcul lui-même, qui prend le plus de temps.",
      },
      { type: "heading", text: "Créer un template de devis réutilisable" },
      {
        type: "paragraph",
        text: "Plutôt que de rédiger chaque devis de zéro, demande à l'IA de t'aider à construire un template de base pour ton activité, avec les sections essentielles (description de la prestation, montant, conditions, délai de validité). Une fois ce template validé, tu n'as plus qu'à en modifier les détails à chaque nouveau client, ce qui divise largement le temps de rédaction.",
      },
      {
        type: "prompt",
        label: "Exemple",
        text: "Aide-moi à créer un template de devis pour mon activité de [ton métier], avec une description de prestation type, une section conditions de paiement, et un ton professionnel mais chaleureux.",
      },
      { type: "heading", text: "Adapter le ton selon le client" },
      {
        type: "paragraph",
        text: "Un devis pour un particulier et un devis pour une entreprise n'ont pas forcément le même registre. L'IA peut ajuster rapidement le ton d'un même devis type : plus direct et simple pour un particulier, plus formel et structuré pour une entreprise.",
      },
      { type: "heading", text: "Personnaliser sans tout réécrire" },
      {
        type: "paragraph",
        text: "Une fois ton template en place, tu peux demander à l'IA de l'adapter à une mission précise en lui donnant juste les éléments qui changent (nature de la prestation, montant, délai), plutôt que de repartir du texte complet à chaque fois.",
      },
      {
        type: "prompt",
        label: "Exemple",
        text: "Adapte ce devis type à cette nouvelle mission : [décrire la mission, le montant, le délai], en gardant la structure et le ton habituels.",
      },
      { type: "heading", text: "Ce qu'il faut vérifier toi-même" },
      {
        type: "paragraph",
        text: "L'IA peut t'aider sur la rédaction, mais elle ne connaît pas tes obligations légales précises (mentions obligatoires selon ton statut, TVA le cas échéant, conditions générales de vente propres à ton activité). Vérifie toujours qu'un devis généré respecte les mentions légales requises pour ton statut d'auto-entrepreneur avant de l'envoyer.",
      },
      { type: "heading", text: "Le vrai gain de temps" },
      {
        type: "paragraph",
        text: "Ce n'est pas la première utilisation qui fait gagner du temps (il faut construire le template), mais toutes celles qui suivent : une fois le template validé, chaque nouveau devis se prépare en quelques minutes plutôt qu'en une demi-heure de rédaction complète.",
      },
      { type: "heading", text: "Pour aller plus loin" },
      {
        type: "paragraph",
        text: "On a détaillé une méthode complète pour automatiser devis, relances clients et préparation de compta avec l'IA, avec des prompts et templates prêts à l'emploi.",
      },
    ],
    cta: {
      text: "Envie d'une méthode complète pour automatiser devis, relances clients et préparation de compta, avec des prompts et templates prêts à l'emploi ?",
      linkLabel:
        "L'IA pour les auto-entrepreneurs : automatiser devis, relances et compta",
      href: "/guides/ia-autoentrepreneurs",
    },
  },
];

export const blogPosts: BlogPost[] = [...rawBlogPosts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
