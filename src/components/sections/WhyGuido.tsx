import { Crosshair, ListChecks, MessageSquareOff } from "lucide-react";

const pillars = [
  {
    icon: Crosshair,
    title: "Hyper-ciblé",
    description:
      "Chaque guide traite une seule situation précise, pas un sujet large survolé en surface. Si vous cherchez la réponse à votre problème exact, c'est là qu'elle est.",
  },
  {
    icon: ListChecks,
    title: "Actionnable",
    description:
      "Des étapes concrètes, des checklists et des exemples chiffrés — pas de théorie qui vous laisse aussi perdu qu'avant de commencer.",
  },
  {
    icon: MessageSquareOff,
    title: "Sans blabla",
    description:
      "Pas de remplissage pour justifier un prix. Chaque page a une raison d'être. Vous lisez, vous appliquez, c'est fini.",
  },
];

export default function WhyGuido() {
  return (
    <section className="border-y border-stone-200 bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-black text-navy-900 md:text-4xl">
            Pourquoi des guides ultra-spécifiques ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            Les gros sites généralistes ne peuvent pas se permettre d&apos;aller
            aussi loin sur un sujet de niche. Nous, si.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-600/10 text-gold-700">
                <pillar.icon size={26} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
