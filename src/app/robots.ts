import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/admin/",
        "/compte",
        "/compte/",
        "/panier",
        "/panier/",
        "/connexion",
        "/inscription",
        "/mot-de-passe-oublie",
        "/reinitialiser-mot-de-passe",
        "/api/",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
