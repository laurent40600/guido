import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-stone-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && <span aria-hidden="true">/</span>}
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-gold-700">
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "font-medium text-navy-900" : undefined}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={jsonLd} />
    </>
  );
}
