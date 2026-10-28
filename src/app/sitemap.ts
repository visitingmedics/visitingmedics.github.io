import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { areas as areaPages } from "@/app/areas/data";
import { posts } from "@/data/posts";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/service-areas", "/areas", "/how-it-works", "/faq", "/contact", "/privacy-policy", "/terms-and-conditions", "/guides", "/care-plans", "/care-standards", ...posts.map((p) => `/${p.slug}`), ...services.map((s) => `/${s.slug}`), ...areaPages.map((a) => `/areas/${a.slug}`)];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), priority: p === "" ? 1 : p.startsWith("/areas/") ? 0.6 : 0.7 }));
}
