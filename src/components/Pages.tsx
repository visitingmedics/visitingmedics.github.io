import Link from "next/link";
import { site, telLink, waLink, popularAreas } from "@/config/site";
import { Crumbs, CtaButtons, Emergency, Faqs, FinalCta, JsonLd, Chevron } from "@/components/bits";
import ContactForm from "@/components/ContactForm";
import { posts, fmtDate, type Post } from "@/data/posts";
import { getService, type Faq } from "@/data/services";
import Photo from "@/components/Photo";
import { photo } from "@/lib/images";
import { reviews } from "@/data/reviews";

const msg = "Hello Visiting Medics, I would like to know more about a care plan.";

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
// Renders text with [label](/path) inline links.
export function Rich({ t }: { t: string }) {
  const parts = t.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  return (
    <>
      {parts.map((s, i) => {
        const m = s.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
        return m ? <Link key={i} href={m[2]}>{m[1]}</Link> : s;
      })}
    </>
  );
}
const imgName = (p: Post) => (photo(`blog-${p.slug}`) ? `blog-${p.slug}` : p.image);


export function Reviews() {
  if (reviews.length === 0) return null;
  return (
    <section className="section">
      <div className="container">
        <h2>What families say</h2>
        <div className="rv">
          {reviews.map((r) => (
            <figure key={r.text}>
              <blockquote><p>“{r.text}”</p></blockquote>
              <figcaption>{r.name}{r.area ? `, ${r.area}` : ""}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function PostRows({ list, thumbs = false, desc = true }: { list: Post[]; thumbs?: boolean; desc?: boolean }) {
  return (
    <div className={thumbs ? "postlist withthumb" : "postlist"}>
      {list.map((p) => (
        <Link key={p.slug} href={`/${p.slug}`}>
          {thumbs && <span className="thumb"><Photo name={imgName(p)} alt={p.alt} ratio="3 / 2" sizes="(min-width: 768px) 200px, 40vw" small /></span>}
          <span><b>{p.title}</b>{desc && <em>{p.desc}</em>}</span>
          <Chevron />
        </Link>
      ))}
    </div>
  );
}

export function GuidesTeaser() {
  return (
    <section className="section">
      <div className="container">
        <h2>Health guides for families</h2>
        <PostRows list={posts.slice(0, 3)} desc={false} />
        <p style={{ marginTop: "1.4rem" }}><Link className="btn btn-outline" href="/guides">All guides</Link></p>
      </div>
    </section>
  );
}

export function GuidesIndex() {
  return (
    <>
      <div className="container">
        <Crumbs items={[{ name: "Guides", href: "/guides" }]} />
        <h1 style={{ marginTop: "1.2rem" }}>Health guides for families caring at home</h1>
        <p className="lead">Practical, plain-language guides from Visiting Medics for families in Mumbai. They are general information and do not replace advice from your own doctor.</p>
      </div>
      <section className="section"><div className="container"><PostRows list={posts} thumbs /></div></section>
      <FinalCta />
    </>
  );
}

export function PostView({ post }: { post: Post }) {
  const related = post.related.flatMap((r) => { const s = getService(r); return s ? [s] : []; });
  const more = posts.filter((p) => p.slug !== post.slug && p.related.some((r) => post.related.includes(r))).slice(0, 3);
  return (
    <>
      <div className="container">
        <Crumbs items={[{ name: "Guides", href: "/guides" }, { name: post.seoTitle, href: `/${post.slug}` }]} />
        <h1 className="ptitle">{post.title}</h1>
        <p className="meta">{post.tag}. Updated {fmtDate(post.date)}. By the Visiting Medics care team.</p>
      </div>
      <article className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="container"><div className="article">
          <figure className="fig">
            <Photo name={imgName(post)} alt={post.alt} ratio="16 / 9" sizes="(min-width: 768px) 720px, 100vw" priority />
            <figcaption>Illustrative image</figcaption>
          </figure>
          <p className="lead"><Rich t={post.intro} /></p>
          <div className="keys">
            <h2>Key points</h2>
            <ul>{post.takeaways.map((k) => <li key={k}>{k}</li>)}</ul>
          </div>
          {post.blocks.map((b) => (
            <section key={b.h}>
              <h2 id={slugify(b.h)}>{b.h}</h2>
              {b.p?.map((x) => <p key={x}><Rich t={x} /></p>)}
              {b.ul && <ul>{b.ul.map((x) => <li key={x}><Rich t={x} /></li>)}</ul>}
            </section>
          ))}
          <h2 id="faq">Frequently asked questions</h2>
          <div className="faqs">
            {post.faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p><Rich t={f.a} /></p></details>)}
          </div>
          <Emergency />
          <p className="meta">This guide is general information. It does not replace advice from your own doctor.</p>
        </div></div>
      </article>
      <section className="section alt">
        <div className="container">
          <h2>How we can help at home</h2>
          <div className="more">
            {related.map((s) => <Link key={s.slug} href={`/${s.slug}`}><b>{s.name}</b><span>{s.blurb}</span></Link>)}
          </div>
          {more.length > 0 && (<><h3 style={{ marginTop: "2rem" }}>More guides</h3><PostRows list={more} desc={false} /></>)}
        </div>
      </section>
      <FinalCta />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.desc,
        datePublished: post.date, dateModified: post.date, mainEntityOfPage: `${site.url}/${post.slug}`,
        author: { "@type": "Organization", name: site.name }, publisher: { "@id": `${site.url}/#business` },
        image: `${site.url}${photo(imgName(post)) ?? site.ogImage}` }} />
    </>
  );
}

const planFaqs: Faq[] = [
  { q: "Do you have fixed packages?", a: "We plan around the patient’s needs and confirm the details with you before anything starts. Tell us what is needed and we will suggest a sensible schedule." },
  { q: "Can the plan change?", a: "Yes. Needs often change during recovery, so we review the plan with you and adjust the visits." },
  { q: "Which services can a plan include?", a: "Doctor visits, nursing visits, dressings, injections, tube and catheter care, and blood tests at home, as the patient needs." },
  { q: "What if the patient needs a hospital?", a: "We tell you plainly and help you with the next step. Home care is not a substitute for emergency or hospital-level care." },
];

export function CarePlans() {
  const uses = [
    ["Recovering after a hospital stay", "/home-healthcare-mumbai"],
    ["Parents who live alone or need regular check-ups", "/elderly-care-at-home-mumbai"],
    ["Long-term bedridden care", "/bedridden-patient-care-mumbai"],
    ["Daily dressings, injections or tube care", "/home-nursing-mumbai"],
  ];
  const steps = [
    ["Tell us the situation", "The patient’s condition, what the hospital advised and where you live."],
    ["We suggest a plan", "For example, a nurse for a set number of days, a doctor review at intervals, or both."],
    ["Care begins", "Visits happen at the agreed times, and you can reach one number for changes."],
    ["We review together", "As the patient improves or needs change, we adjust or end the plan."],
  ];
  return (
    <>
      <div className="container">
        <Crumbs items={[{ name: "Care Plans", href: "/care-plans" }]} />
        <h1 style={{ marginTop: "1.2rem" }}>Care plans for ongoing care at home</h1>
        <p className="lead">When one visit is not enough, we plan regular care around the patient, so you are not arranging every visit separately.</p>
        <div className="actions" style={{ marginTop: "1.2rem" }}>
          <a className="btn btn-primary" href={waLink(msg)}>Ask about a care plan</a>
          <a className="btn btn-outline" href={telLink}>Call {site.phone}</a>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <h2>Who a care plan is for</h2>
          <div className="sit" style={{ marginTop: "1.4rem" }}>
            {uses.map(([t, h]) => <Link key={t} href={h}><span>{t}</span><Chevron /></Link>)}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>How a plan works</h2>
          <ol className="flow">{steps.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}</ol>
        </div>
      </section>
      <section className="section">
        <div className="container hand">
          <div>
            <h2>Tell us what is needed</h2>
            <p className="lead">Share the details and we will come back with a plan that fits. Your message opens in WhatsApp, ready to send.</p>
            <p>Prefer to talk? Call <a href={telLink}>{site.phone}</a>.</p>
          </div>
          <div className="formbox"><ContactForm /></div>
        </div>
      </section>
      <section className="section alt">
        <div className="container"><h2>Questions about plans</h2><Faqs items={planFaqs} /></div>
      </section>
      <FinalCta />
    </>
  );
}

export function CareStandards() {
  const items: [string, string][] = [
    ["Qualified personnel, honest scope", "Procedures are carried out by appropriately qualified personnel, on medical advice. We work within our qualifications, and you are welcome to ask about the professional who will visit before you confirm."],
    ["Consent first", "We explain what we plan to do and why, and proceed only with the patient’s or family’s consent."],
    ["Hygiene", "We pay careful attention to hygiene during every visit, and keep the home environment clean and safe while we work."],
    ["Privacy", "Patient information is used only to arrange and deliver care. Read our Privacy Policy for details."],
    ["Honest advice about hospitals", "If a hospital is the better place for care, we tell you plainly and help you with the next step. We do not suggest a home visit when it is not the right choice."],
    ["Not for emergencies", "Home healthcare does not replace emergency care. In an emergency, call 108 or go to the nearest emergency department."],
  ];
  return (
    <>
      <div className="container">
        <Crumbs items={[{ name: "Care Standards", href: "/care-standards" }]} />
        <h1 style={{ marginTop: "1.2rem" }}>How we work: our care standards</h1>
        <p className="lead">What you can expect every time Visiting Medics comes to your home.</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="more">
            {items.map(([t, d]) => <div key={t} className="std"><h3>{t}</h3><p>{d}</p></div>)}
          </div>
          <p style={{ marginTop: "1.6rem" }}>Read our <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>, or see <Link href="/how-it-works">how a visit works</Link>.</p>
        </div>
      </section>
      <section className="section alt">
        <div className="container"><h2>Areas we visit</h2>
          <div className="ar">{popularAreas.map((a) => <Link key={a.slug} href={`/areas/${a.slug}`}>{a.name}</Link>)}</div></div>
      </section>
      <FinalCta />
    </>
  );
}
