import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return site.indexable
    ? {
        rules: [
          { userAgent: "*", allow: "/" },
          ...aiBots.map((bot) => ({ userAgent: bot, allow: "/" })),
        ],
        sitemap: `${site.url}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
