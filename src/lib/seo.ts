import type { Metadata } from "next";
import { site } from "@/config/site";
export function meta(title: string, description: string, path: string): Metadata {
  return {
    title, description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: site.name, type: "website", locale: "en_IN", images: [site.ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [site.ogImage] },
  };
}
export const nav = [
  { name: "Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Care Plans", href: "/care-plans" },
  { name: "Guides", href: "/guides" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
