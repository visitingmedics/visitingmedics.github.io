import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { Header, Footer, StickyCta } from "@/components/Chrome";
import { JsonLd } from "@/components/bits";
import { services } from "@/data/services";
import { areas as areaPages } from "@/app/areas/data";

const sans = Figtree({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Doctor Home Visit & Home Nursing in Mumbai`, template: `%s | ${site.name}` },
  description: "Doctor home visits, home nursing, elderly care, blood tests and procedures at home across Mumbai, from Churchgate to Dahisar.",
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
  robots: site.indexable ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } } : { index: false, follow: false },
  openGraph: { siteName: site.name, type: "website", locale: "en_IN", images: [site.ogImage] },
};
export const viewport: Viewport = { themeColor: "#0a4f8f", width: "device-width", initialScale: 1 };

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: site.url },
    {
      "@type": "MedicalBusiness", "@id": `${site.url}/#business`, name: site.name, url: site.url,
      logo: `${site.url}${site.logo.src}`, description: "Doctor home visits, home nursing and healthcare at home in Mumbai.",
      areaServed: [{ "@type": "City", name: "Mumbai" }, ...areaPages.map((a) => ({ "@type": "Place", name: `${a.name}, Mumbai` }))],
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
      ...(site.contactConfigured ? { telephone: site.phone, contactPoint: { "@type": "ContactPoint", telephone: site.phone, contactType: "customer service", areaServed: "IN", availableLanguage: ["English", "Hindi"] } } : {}),
      ...(site.email ? { email: site.email } : {}),
      ...(site.maps ? { hasMap: site.maps } : {}),
      image: `${site.url}${site.ogImage}`,
      sameAs: [...Object.values(site.socials), site.maps].filter(Boolean),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Home healthcare services",
        itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/${s.slug}` } })) },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={sans.variable}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
        <JsonLd data={graph} />
      </body>
    </html>
  );
}
