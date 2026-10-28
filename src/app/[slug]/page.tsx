import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService, type Service } from "@/data/services";
import { posts, getPost } from "@/data/posts";
import { site, popularAreas } from "@/config/site";
import { meta } from "@/lib/seo";
import Photo from "@/components/Photo";
import { photo } from "@/lib/images";
import { Crumbs, CtaButtons, Emergency, Faqs, FinalCta, JsonLd } from "@/components/bits";
import { GuidesIndex, PostView, CarePlans, CareStandards } from "@/components/Pages";

const special: Record<string, { title: string; desc: string }> = {
  guides: { title: "Health Guides for Home Care in Mumbai", desc: "Plain-language guides on home nursing, elderly care, bedsores, catheter and feeding-tube care, wound dressing and more, from Visiting Medics in Mumbai." },
  "care-plans": { title: "Care Plans for Ongoing Care at Home in Mumbai", desc: "Plan regular doctor and nursing visits at home in Mumbai after a hospital stay, for elderly parents or long-term patients. Call or WhatsApp Visiting Medics." },
  "care-standards": { title: "Our Care Standards: How We Work", desc: "Qualified personnel, consent, hygiene, privacy and honest advice. What to expect from every Visiting Medics home visit in Mumbai." },
};

export const dynamicParams = false;
export const generateStaticParams = () => [
  ...services.map((s) => ({ slug: s.slug })),
  ...posts.map((p) => ({ slug: p.slug })),
  ...Object.keys(special).map((slug) => ({ slug })),
];
type P = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (s) return meta(s.title, s.desc, `/${s.slug}`);
  const p = getPost(slug);
  if (p) {
    const m = meta(p.seoTitle, p.desc, `/${p.slug}`);
    const img = photo(`blog-${p.slug}`) ?? photo(p.image);
    return img ? { ...m, openGraph: { ...(m.openGraph ?? {}), images: [img] }, twitter: { ...(m.twitter ?? {}), images: [img] } } : m;
  }
  const sp = special[slug];
  return sp ? meta(sp.title, sp.desc, `/${slug}`) : {};
}

function ServiceView({ s }: { s: Service }) {
  const has = photo(s.slug) !== null;
  const related = s.related.flatMap((r) => { const x = getService(r); return x ? [x] : []; });
  const guides = posts.filter((p) => p.related.includes(s.slug)).slice(0, 3);
  return (
    <>
      <div className="container">
        <Crumbs items={[{ name: "Services", href: "/services" }, { name: s.name, href: `/${s.slug}` }]} />
        <div className={has ? "intro with-photo" : "intro"}>
          <div>
            <h1 style={{ marginTop: "1.2rem" }}>{s.h1}</h1>
            <p className="lead">{s.intro}</p>
            <CtaButtons />
          </div>
          <Photo name={s.slug} alt={`${s.name}: care at home in Mumbai`} priority />
        </div>
      </div>
      <section className="section"><div className="container prose two">
        <div><h2>About {s.name} in Mumbai</h2><p>{s.what}</p><h2>Who may need {s.name.toLowerCase()}</h2><ul>{s.who.map((w) => <li key={w}>{w}</li>)}</ul></div>
        <div><h2>What the home visit includes</h2><ul>{s.includes.map((w) => <li key={w}>{w}</li>)}</ul></div>
      </div></section>
      <section className="section alt"><div className="container">
        <h2>How it works</h2>
        <ol className="steps">{s.how.map((h) => <li key={h}>{h}</li>)}</ol>
        <h2 style={{ marginTop: "2rem" }}>Safety</h2><p>{s.safety}</p>
        <Emergency />
      </div></section>
      <section className="section"><div className="container">
        <h2>Serving Mumbai</h2>
        <p>{s.name} is available across Mumbai. Choose your area, or <Link href="/service-areas">see all service areas</Link>.</p>
        <ul className="chips">{popularAreas.map((a) => <li key={a.slug}><Link href={`/areas/${a.slug}`}>{a.name}</Link></li>)}</ul>
        <h2 style={{ marginTop: "2.2rem" }}>Questions</h2><Faqs items={s.faqs} />
        {guides.length > 0 && (<>
          <h2 style={{ marginTop: "2.2rem" }}>Helpful guides</h2>
          <div className="postlist">{guides.map((g) => <Link key={g.slug} href={`/${g.slug}`}><span><b>{g.title}</b><em>{g.desc}</em></span></Link>)}</div>
        </>)}
        <h2 style={{ marginTop: "2.2rem" }}>Related services</h2>
        <div className="grid g3">{related.map((r) => <Link key={r.slug} className="card" href={`/${r.slug}`}><h3>{r.name}</h3><p>{r.blurb}</p></Link>)}</div>
      </div></section>
      <FinalCta />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.name, serviceType: s.name, description: s.desc,
        provider: { "@id": `${site.url}/#business` }, areaServed: { "@type": "City", name: "Mumbai" }, url: `${site.url}/${s.slug}` }} />
    </>
  );
}

export default async function SlugPage({ params }: P) {
  const { slug } = await params;
  const s = getService(slug);
  if (s) return <ServiceView s={s} />;
  const p = getPost(slug);
  if (p) return <PostView post={p} />;
  if (slug === "guides") return <GuidesIndex />;
  if (slug === "care-plans") return <CarePlans />;
  if (slug === "care-standards") return <CareStandards />;
  notFound();
}
