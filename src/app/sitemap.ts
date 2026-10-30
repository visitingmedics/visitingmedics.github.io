import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { areas as areaPages } from "@/app/areas/data";
import { posts } from "@/data/posts";
export const dynamic = "force-static";
// Update this date when page content changes. Guides use their own published dates.
const UPDATED = "2026-10-29";
export default function sitemap(): MetadataRoute.Sitemap {
  const postDates = new Map<string, string>(posts.map((x) => [`/${x.slug}`, x.date] as [string, string]));
  const paths = ["", "/about", "/services", "/service-areas", "/areas", "/how-it-works", "/faq", "/contact", "/privacy-policy", "/terms-and-conditions", "/guides", "/care-plans", "/care-standards", ...posts.map((p) => `/${p.slug}`), ...services.map((s) => `/${s.slug}`), ...areaPages.map((a) => `/areas/${a.slug}`)];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(postDates.get(p) ?? UPDATED), priority: p === "" ? 1 : p.startsWith("/areas/") ? 0.6 : 0.7 }));
}
