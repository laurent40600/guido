# Checklist SEO — articles de blog Guido

À appliquer à chaque nouvel article publié dans `src/data/blog.ts`. Référence-toi
à ce fichier plutôt que de tout retaper : « applique la SEO-CHECKLIST-BLOG » suffit.

## 1. Texte alternatif de l'image de couverture

- `coverAlt` doit décrire la scène de façon concrète, jamais "image" ou le nom du fichier.
- Inclure si possible le sujet + l'outil/thème de l'article (ex. mentionner "ChatGPT"
  si l'article en parle), pas juste une description générique de la photo.
- Bon exemple : `"Enseignante préparant ses cours avec ChatGPT sur son ordinateur portable"`
- Mauvais exemple : `"photo-1758685848142.jpg"` ou `"image d'illustration"`

## 2. Données structurées `Article` (schema.org / JSON-LD)

Déjà géré automatiquement par `src/app/blog/[slug]/page.tsx` — **rien à faire
manuellement** pour un nouvel article : le script `<script type="application/ld+json">`
est généré à partir des champs du `BlogPost` (title, seoDescription, coverImage,
publishedAt). Vérifie juste que ces 4 champs sont bien renseignés pour le nouvel article.

Le JSON-LD inclut : `headline`, `description`, `image`, `datePublished`, `dateModified`,
`author` (Organization "Guido"), `publisher` (Organization "Guido" + logo carré
`/logo-mark-512.png`), `mainEntityOfPage`.

⚠️ Le domaine utilisé dans le JSON-LD (`siteUrl` dans `page.tsx`) est actuellement
codé en dur sur `https://guido.fr` — à mettre à jour si le nom de domaine change.

## 3. Maillage interne entre articles ("À lire aussi")

Pour chaque nouvel article, renseigner le champ `relatedPosts: string[]` avec les
slugs des 1 à 2 autres articles les plus pertinents thématiquement (pas juste
"tous les autres articles" si le blog grandit). La section "À lire aussi"
s'affiche automatiquement en bas de l'article si `relatedPosts` est non vide.

Pense aussi à ajouter le nouveau slug dans le `relatedPosts` des articles
existants qui s'y rapportent, pour que le lien soit réciproque.

Le lien vers le guide/pack payant (`cta`) reste distinct de `relatedPosts` — il
pointe vers une page produit, pas vers un autre article.

## 4. Densité naturelle du mot-clé principal

Le mot-clé principal = celui utilisé dans `seoTitle` et `seoDescription`.

Avant de publier, vérifie qu'il apparaît :
- dans le titre (`title`, H1) — presque toujours vrai par construction,
- dans le **premier paragraphe** (l'intro),
- dans **au moins un intertitre** (`heading`),
- dans la **conclusion** ("Pour aller plus loin" ou équivalent).

**Ne jamais forcer le mot-clé artificiellement** s'il ne s'intègre pas
naturellement — signale plutôt le manque et laisse l'auteur reformuler.

**Constat sur les 3 premiers articles** (audité le 2026-07-18, à corriger dans
une prochaine passe si validé) : les 3 utilisent "ChatGPT" dans leur titre mais
retombent presque systématiquement sur le terme générique "l'IA" dans le corps du
texte. Résultat : "ChatGPT" n'apparaît qu'une seule fois en dehors du titre sur
`chatgpt-preparer-ses-cours` et `10-prompts-chatgpt-enseignants` (dans l'intro
seulement, jamais dans un intertitre ni la conclusion), et une seule fois sur
`chatgpt-corriger-copies` (dans un intertitre, pas dans l'intro ni la conclusion).
Les 3 gagneraient à réintroduire "ChatGPT" à 1-2 endroits supplémentaires
(un intertitre et la conclusion) — reformulation à valider avant application.

## 5. Script de vérification rapide

Pour recompter les occurrences du mot-clé sur un article donné sans tout relire
à l'œil, un script Node ponctuel (voir l'historique de session) peut extraire le
`body` d'un post par son slug et compter les occurrences du mot-clé dans le
premier bloc, les intertitres et le dernier bloc. Pas de script permanent dans
le repo pour l'instant — à écrire à nouveau si besoin recurrent.
