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

## 0. Séries éditoriales (`series`)

Chaque article a un champ `series: BlogSeries` obligatoire (type défini en haut
de `src/data/blog.ts`). Deux séries existent à ce jour :
- **"IA pour profs"** — 6 articles, complète (`chatgpt-preparer-ses-cours`,
  `10-prompts-chatgpt-enseignants`, `chatgpt-corriger-copies`,
  `creer-exercice-ia-5-minutes`, `ia-cours-maths-bonne-mauvaise-idee`,
  `5-erreurs-ia-enseigner`).
- **"IA pour métiers"** — démarrée le 2026-07-28 avec
  `automatiser-devis-chatgpt-autoentrepreneur` (1 seul article pour l'instant).

Pour démarrer une nouvelle série : ajouter la valeur au type `BlogSeries`, puis
l'assigner au nouvel article. `/blog` affiche automatiquement un filtre par
série (`src/components/blog/BlogExplorer.tsx`, pills "Tous" + une par série) et
un badge de série sur chaque vignette + en haut de chaque page article — rien
à coder en plus, uniquement renseigner le champ.

**Règle de maillage entre séries** : ne pas lier un article d'une série à un
article d'une autre série dans `relatedPosts` (ex. ne pas lier l'article
auto-entrepreneur aux articles profs) — les séries restent des univers
thématiques distincts pour le lecteur, même si le sujet de fond ("IA") se
recoupe. Le filtre visuel sur `/blog` est le mécanisme prévu pour naviguer
entre séries, pas les liens "À lire aussi".

## 3. Maillage interne entre articles ("À lire aussi")

Pour chaque nouvel article, renseigner le champ `relatedPosts: string[]` avec les
slugs des 1 à 2 autres articles les plus pertinents thématiquement, **de la
même série** (pas juste "tous les autres articles" si le blog grandit). La
section "À lire aussi" s'affiche automatiquement en bas de l'article si
`relatedPosts` est non vide — et ne s'affiche pas du tout si le champ est
omis, ce qui est normal pour le premier article d'une nouvelle série.

Pense aussi à ajouter le nouveau slug dans le `relatedPosts` des articles
existants **de la même série** qui s'y rapportent, pour que le lien soit
réciproque.

**Cas "hub de série"** (ex. la série "IA pour profs", conclue à 6 articles avec
`5-erreurs-ia-enseigner`) : quand un article ferme explicitement une série, ses
`relatedPosts` peuvent lister tous les articles de la série plutôt que 1-2 —
et il faut alors ajouter réciproquement ce nouvel article dans le `relatedPosts`
de **chacun** des articles précédents de la série, pas juste dans un seul sens.
Pour 6 articles ça reste gérable à la main ; si une future série grandit
beaucoup plus, envisager de dériver `relatedPosts` automatiquement par tag/série
plutôt que de continuer à lister les slugs un par un.

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

**Constat par article (dernière mise à jour 2026-07-24)** : le mot-clé principal
atterrit presque toujours dans le titre et l'intro ; ce qui varie d'un article à
l'autre, c'est s'il revient ensuite dans un intertitre et dans la conclusion.

- `chatgpt-preparer-ses-cours` : "ChatGPT" présent titre + intro, absent des
  intertitres et de la conclusion.
- `10-prompts-chatgpt-enseignants` : idem.
- `chatgpt-corriger-copies` : "ChatGPT" présent titre + 1 intertitre, absent de
  l'intro et de la conclusion.
- `creer-exercice-ia-5-minutes` : "créer un exercice" et "IA" présents titre +
  intro, absents des 7 intertitres ("Étape 1" à "Pour aller plus loin") et de
  la conclusion — alors que le brief de cet article affirmait qu'ils y étaient
  déjà. Vérifié par script, pas juste par lecture rapide.
- `ia-cours-maths-bonne-mauvaise-idee` : **premier article à couvrir les 4
  emplacements naturellement**, sans aucune reformulation nécessaire — "IA" et
  "maths"/"mathématiques" présents titre + intro + au moins 1 intertitre
  ("Ce que l'IA fait très bien en maths") + conclusion ("En résumé" : "L'IA en
  cours de maths n'est ni une solution miracle..."). Réparti sur 9/15 blocs
  pour "IA" et 5/15 pour "maths". Aucune modification appliquée : c'est le
  texte d'origine qui s'y prêtait déjà bien, contrairement aux 4 précédents.

- `5-erreurs-ia-enseigner` : "erreurs" très bien réparti (normal, c'est le fil
  conducteur de l'article) — présent titre + intro + 5 des 7 intertitres
  (chaque "Erreur N") + conclusion ("Ces 5 erreurs partagent un point commun...").
  "IA" en revanche suit le même schéma que les articles 1, 2 et 4 : présent
  titre + intro, mais absent des 7 intertitres et du paragraphe "En résumé"
  (il ne réapparaît que plus loin, dans "Pour aller plus loin"). Pas modifié,
  signalé pour le même arbitrage que les articles précédents.

⚠️ Piège vécu en rédigeant l'article 5 : avant de faire cette vérification,
3 intertitres avaient été légèrement reformulés pour y glisser "IA"/"maths"
(ex. "Ce qui reste risqué ou déconseillé" → "... en maths"). C'est exactement
le genre de modification que ce point 4 interdit de faire soi-même — repéré et
annulé avant publication, intertitres restaurés au texte source exact. Retenir
ça : ne jamais retoucher un intertitre/une conclusion pour "faire remonter"
le score de mot-clé, même involontairement en committant les blocs "d'un coup".

- `automatiser-devis-chatgpt-autoentrepreneur` (1er article de la série "IA
  pour métiers") : "devis" très bien réparti — titre + intro + 2 des 7
  intertitres + conclusion ("Le vrai gain de temps" : "...chaque nouveau devis
  se prépare en quelques minutes..."), 11/17 blocs au total. "auto-entrepreneur"
  en revanche suit le schéma déjà vu ailleurs : présent titre + intro + 1
  paragraphe, absent des 7 intertitres et de la conclusion. Pas modifié, signalé.

Aucune reformulation n'a été appliquée sur les articles 1 à 4 ni 6-7 — à
valider avec l'auteur avant toute modification de texte.

## 5. Script de vérification rapide

Pour recompter les occurrences du mot-clé sur un article donné sans tout relire
à l'œil, un script Node ponctuel (voir l'historique de session) peut extraire le
`body` d'un post par son slug et compter les occurrences du mot-clé dans le
premier bloc, les intertitres et le dernier bloc. Pas de script permanent dans
le repo pour l'instant — à écrire à nouveau si besoin recurrent.
