import { site } from "@/config/site";

export default function SchemaMarkup() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${site.url}/#business`,
    name: "Visiting Medics",
    alternateName: "Visiting Medics - Healthcare at home",
    slogan: "Healthcare at Home",
    url: site.url,
    telephone: "+918080882201",
    description:
      "Visiting Medics provides doctor home visits, home nursing, elderly care, wound dressing, IV injections, bedridden patient care and diabetic and palliative care at home across Mumbai and the Western line.",
    areaServed: [
      "Mumbai", "Churchgate", "Colaba", "Fort", "Malabar Hill", "Pali Hill",
      "Bandra", "Santa Cruz", "Vile Parle", "Juhu", "Andheri", "Lokhandwala",
      "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar",
    ].map((n) => ({ "@type": "Place", name: n })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home healthcare services",
      itemListElement: [
        "Doctor home visit", "Home nursing", "Elderly care at home",
        "Wound dressing at home", "IV injection and cannulation at home",
        "Bedridden patient care", "Ryle's tube and Foley catheter care",
        "Medication administration", "Diabetic care at home",
        "Palliative care at home", "Home blood test sample collection",
      ].map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
    sameAs: [
      "https://www.instagram.com/visitingmedics",
      "https://www.linkedin.com/company/visitingmedics",
      "https://maps.app.goo.gl/idCwDTqWT5q8v1gZ7",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
