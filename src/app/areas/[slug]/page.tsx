import Link from "next/link";
import type { Metadata } from "next";
import { areas, getArea, nearbyOf, services, PHONE, WA, SITE } from "../data";
import { areaContent } from "../content";
import { posts } from "@/data/posts";
import Photo from "@/components/Photo";
import { Crumbs, FinalCta, JsonLd } from "@/components/bits";

type P = { params: Promise<{ slug: string }> };

const svcLink: Record<string, string> = {
  "Doctor home visit": "/doctor-home-visit-mumbai", "Home nursing": "/home-nursing-mumbai", "Elderly care": "/elderly-care-at-home-mumbai",
  "Wound dressing": "/wound-dressing-at-home-mumbai", "IV injection & cannulation": "/iv-injection-at-home-mumbai",
  "Bedridden patient care": "/bedridden-patient-care-mumbai", "Ryle's tube & Foley catheter care": "/catheter-care-at-home-mumbai",
  "Medication administration": "/home-medical-procedures-mumbai", "Diabetic care": "/home-healthcare-mumbai",
  "Palliative care": "/home-healthcare-mumbai", "Blood tests via partner lab (home sample collection)": "/blood-test-at-home-mumbai",
};
const guideSlugs = ["how-a-doctor-home-visit-works-in-mumbai", "fever-in-older-adults-home-care-or-hospital", "blood-test-at-home-mumbai-preparation-and-reports"];

export const dynamicParams = false;
export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const a = getArea(slug)!;
  return {
    title: `Doctor Visit at Home in ${a.name}, Mumbai | Visiting Medics`,
    description: `Doctor home visit, home nursing, elderly care and IV injection at home in ${a.name}, Mumbai. Call ${PHONE} or WhatsApp to book.`,
    alternates: { canonical: `${SITE}/areas/${a.slug}` },
  };
}

export default async function AreaPage({ params }: P) {
  const { slug } = await params;
  const a = getArea(slug)!;
  const near = nearbyOf(a.slug);
  const c = areaContent[a.slug];
  const faqs = [
    { q: `Do you provide doctor home visits in ${a.name}?`, a: `Yes. Visiting Medics arranges doctor home visits in ${a.name} and nearby areas such as ${near.map((n) => n.name).join(", ")}. Call ${PHONE} or message us on WhatsApp to book.` },
    { q: `Which services are available at home in ${a.name}?`, a: `${services.join(", ")}.` },
    { q: `How do I book a home visit near ${a.landmarks[0]}?`, a: `Tap Call Now or WhatsApp Us on this page, share your address in ${a.name} and the care needed, and our team will coordinate the visit.` },
    ...(c ? [
      ...c.faqs,
      { q: `Which hospitals are within reach of ${a.name} if the patient needs admission?`, a: `${c.hospitals.join("; ")}. These hospitals are listed for reference only and do not imply any partnership. The doctor will advise where to go.` },
    ] : []),
  ];
  const ld = [
    {
      "@context": "https://schema.org", "@type": "MedicalBusiness",
      name: "Visiting Medics", url: SITE, telephone: `+91${PHONE}`,
      areaServed: { "@type": "Place", name: `${a.name}, Mumbai` },
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  const guides = guideSlugs.flatMap((g) => { const p = posts.find((x) => x.slug === g); return p ? [p] : []; });

  return (
    <>
      <JsonLd data={ld} />
      <div className="container">
        <Crumbs items={[{ name: "Areas", href: "/areas" }, { name: a.name, href: `/areas/${a.slug}` }]} />
        <div className="intro with-photo">
          <div>
            <h1 style={{ marginTop: "1.2rem" }}>Doctor Visit at Home in {a.name}, Mumbai</h1>
            <p className="lead">
              Visiting Medics brings doctors and trained nursing support to your home in {a.name}, including the
              areas around {a.landmarks.join(", ")}. {a.note}
            </p>
            <div className="actions">
              <a className="btn btn-primary" href={`tel:+91${PHONE}`}>Call Now</a>
              <a className="btn btn-outline" href={WA}>WhatsApp Us</a>
            </div>
          </div>
          <Photo name="doctor-home-visit-mumbai" alt={`Doctor home visit in ${a.name}, Mumbai`} priority />
        </div>
      </div>

      {c && (
        <section className="section"><div className="container prose">
          <h2>Home healthcare in {a.name}</h2>
          <p>{c.intro}</p>
          <h2>Practical notes for visits in {a.name}</h2>
          <p>{c.access}</p>
          <h2>Hospitals within reach of {a.name}</h2>
          <ul>{c.hospitals.map((h) => <li key={h}>{h}</li>)}</ul>
          <p>These hospitals are listed for reference only and do not imply any partnership. Services and availability can change, so please confirm with the hospital before you travel. Home visits are for non-emergency care. In an emergency, go to the nearest emergency department or call 108.</p>
        </div></section>
      )}

      <section className={c ? "section alt" : "section"}><div className="container">
        <h2>Services available in {a.name}</h2>
        <ul className="chips">{services.map((s) => <li key={s}>{svcLink[s] ? <Link href={svcLink[s]}>{s}</Link> : s}</li>)}</ul>
      </div></section>

      {(a.subs.length > 0 || a.stations.length > 0) && (
        <section className="section"><div className="container prose">
          {a.subs.length > 0 && (
            <>
              <h2>Neighbourhoods we cover around {a.name}</h2>
              {a.subs.map((s) => (
                <div key={s.slug} id={s.slug}>
                  <h3>Doctor Visit at Home in {s.name}</h3>
                  <p>Visiting Medics serves {s.name} through our {a.name} service area: doctor home visits, home nursing, injections and elderly care. Call {PHONE} or WhatsApp to book.</p>
                </div>
              ))}
            </>
          )}
          {a.stations.length > 0 && (
            <>
              <h2>Near railway stations</h2>
              {a.stations.map((st) => (
                <div key={st}>
                  <h3>Doctor Visit at Home near {st} Railway Station</h3>
                  <p>Living or working close to {st} station? Our team can visit you at home for check-ups, nursing and procedures.</p>
                </div>
              ))}
            </>
          )}
        </div></section>
      )}

      <section className="section alt"><div className="container">
        <h2>Frequently asked questions</h2>
        <div className="faqs">{faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
      </div></section>

      <section className="section"><div className="container">
        <h2>Nearby areas we serve</h2>
        <ul className="chips">
          {near.map((n) => <li key={n.slug}><Link href={`/areas/${n.slug}`}>Doctor Visit at Home in {n.name}</Link></li>)}
          <li><Link href="/areas">All areas</Link></li>
        </ul>
        {guides.length > 0 && (
          <>
            <h2 style={{ marginTop: "2rem" }}>Helpful guides</h2>
            <div className="postlist">
              {guides.map((g) => <Link key={g.slug} href={`/${g.slug}`}><span><b>{g.title}</b></span></Link>)}
            </div>
          </>
        )}
      </div></section>
      <FinalCta />
    </>
  );
}
