import type { Metadata } from "next";
import { Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sécurité — Administration Guido",
};

const measures: { label: string; detail: string; status: "ok" | "attention" }[] = [
  {
    label: "Mots de passe hachés",
    detail: "bcrypt (facteur de coût 10), jamais stockés ni affichés en clair — y compris dans ce panneau admin.",
    status: "ok",
  },
  {
    label: "Protection contre les injections SQL",
    detail: "Toutes les requêtes passent par Prisma (requêtes paramétrées). Aucun SQL brut construit à partir d'une entrée utilisateur.",
    status: "ok",
  },
  {
    label: "Cookie de session sécurisé",
    detail: "httpOnly + sameSite=lax (protection CSRF) + secure activé automatiquement en production.",
    status: "ok",
  },
  {
    label: "En-têtes de sécurité HTTP",
    detail: "Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy sur toutes les pages.",
    status: "ok",
  },
  {
    label: "HTTPS forcé en production",
    detail: "Redirection automatique HTTP → HTTPS via le proxy applicatif. Le certificat TLS lui-même dépend de l'hébergeur choisi.",
    status: "ok",
  },
  {
    label: "Fichiers PDF non accessibles publiquement",
    detail: "Stockés hors du dossier public, servis uniquement via /api/download après vérification de session + achat.",
    status: "ok",
  },
  {
    label: "Téléchargements limités et personnalisés",
    detail: "2 téléchargements maximum par commande, chaque copie filigranée individuellement (nom, email, commande, ID unique).",
    status: "ok",
  },
  {
    label: "Historique et traçabilité",
    detail: "Chaque téléchargement est journalisé (date, IP, navigateur, identifiant unique) — consultable dans l'onglet Téléchargements.",
    status: "ok",
  },
  {
    label: "Pages légales RGPD",
    detail: "Mentions légales, CGU, CGV, politique de confidentialité et de remboursement publiées et à jour.",
    status: "ok",
  },
  {
    label: "Paiement en ligne",
    detail: "Pas encore branché (aucune donnée de carte bancaire n'est collectée). Accès accordé manuellement en attendant — voir l'onglet Commandes.",
    status: "attention",
  },
  {
    label: "Sauvegardes de la base de données",
    detail: "Script disponible (scripts/backup-db.ts) mais à automatiser via une tâche planifiée sur le serveur de production — pas encore fait.",
    status: "attention",
  },
];

export default function AdminSecuritePage() {
  return (
    <div>
      <h1 className="text-2xl font-black text-navy-900">Sécurité</h1>
      <p className="mt-2 text-sm text-stone-500">
        État réel des mesures de sécurité en place sur le site, à date.
      </p>

      <ul className="mt-8 space-y-3">
        {measures.map((measure) => (
          <li
            key={measure.label}
            className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-5"
          >
            <span
              className={
                measure.status === "ok"
                  ? "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700"
                  : "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-600/10 text-gold-700"
              }
            >
              {measure.status === "ok" ? <Check size={14} /> : <AlertTriangle size={14} />}
            </span>
            <div>
              <p className="font-semibold text-navy-900">{measure.label}</p>
              <p className="mt-1 text-sm text-stone-600">{measure.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
