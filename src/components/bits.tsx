import Link from "next/link";
import { site, telLink, waLink } from "@/config/site";
import type { Faq } from "@/data/services";

export const JsonLd = ({ data }: { data: object }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);

export const Chevron = () => (
  <svg className="chev" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
);

export function Crumbs({ items }: { items: { name: string; href: string }[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="crumbs">
        <ol>
          {all.map((c, i) => (
            <li key={c.href}>{i < all.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}</li>
          ))}
        </ol>
      </nav>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${site.url}${c.href}` })) }} />
    </>
  );
}

export function Faqs({ items, schema = true }: { items: Faq[]; schema?: boolean }) {
  return (
    <div className="faqs">
      {items.map((f) => (
        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
      {schema && <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />}
    </div>
  );
}

export function CtaButtons() {
  return (
    <div className="actions">
      <a className="btn btn-primary" href={waLink("Hello Visiting Medics, I would like to request a home visit.")}>WhatsApp Us</a>
      <a className="btn btn-outline" href={telLink}>Call Now</a>
      <Link className="btn btn-quiet" href="/contact">Book a Home Visit</Link>
    </div>
  );
}

export const Emergency = () => (
  <p className="note" role="note">
    <strong>Not for emergencies.</strong> Home healthcare does not replace emergency hospital care. In a medical emergency, contact emergency services or go to the nearest emergency department.
  </p>
);

export const FinalCta = () => (
  <section className="section cta on-dark">
    <div className="container">
      <h2>Need care at home in Mumbai?</h2>
      <p className="lead">Message us your area and what is needed. We confirm the visit with you.</p>
      <CtaButtons />
    </div>
  </section>
);
