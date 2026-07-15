import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { blogPosts } from "@/data/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/guides`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/prompts`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/packs`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/a-propos`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/mentions-legales`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${SITE_URL}/cgu`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${SITE_URL}/cgv`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${SITE_URL}/politique-de-confidentialite`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${SITE_URL}/politique-de-remboursement`, changeFrequency: "yearly", priority: 0.1 },
  ];

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${SITE_URL}/guides/${guide.slug}`,
    changeFrequency: "weekly",
    priority: guide.bestseller ? 0.9 : 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...guidePages, ...blogPages];
}
