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

**Constat récurrent (articles 1 à 4, dernière mise à jour 2026-07-20)** : sur
les 4 articles publiés à ce jour, aucun ne respecte encore les 4 emplacements
(titre + intro + intertitre + conclusion). Le mot-clé principal atterrit presque
toujours dans le titre et l'intro, puis le texte bascule sur un terme générique
("l'IA") pour le reste de l'article, y compris dans les intertitres et la
dernière section ("Pour aller plus loin").

- `chatgpt-preparer-ses-cours` : "ChatGPT" présent titre + intro, absent des
  intertitres et de la conclusion.
- `10-prompts-chatgpt-enseignants` : idem.
- `chatgpt-corriger-copies` : "ChatGPT" présent titre + 1 intertitre, absent de
  l'intro et de la conclusion.
- `creer-exercice-ia-5-minutes` : "créer un exercice" et "IA" présents titre +
  intro, absents des 7 intertitres ("Étape 1" à "Pour aller plus loin") et de
  la conclusion — alors que le brief de cet article affirmait qu'ils y étaient
  déjà. Vérifié par script, pas juste par lecture rapide : à corriger avant de
  supposer que la présence dans le titre suffit.

Aucune reformulation n'a été appliquée sur ces 4 articles — à valider avec
l'auteur avant toute modification de texte.

## 5. Script de vérification rapide

Pour recompter les occurrences du mot-clé sur un article donné sans tout relire
à l'œil, un script Node ponctuel (voir l'historique de session) peut extraire le
`body` d'un post par son slug et compter les occurrences du mot-clé dans le
premier bloc, les intertitres et le dernier bloc. Pas de script permanent dans
le repo pour l'instant — à écrire à nouveau si besoin recurrent.
