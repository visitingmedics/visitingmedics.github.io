import Image from "next/image";
import Link from "next/link";
import { site, popularAreas, telLink, waLink } from "@/config/site";
import { services, getService, generalFaqs, type Faq } from "@/data/services";
import { Faqs, FinalCta, Chevron } from "@/components/bits";
import Photo from "@/components/Photo";
import ServiceIcon from "@/components/ServiceIcon";
import ContactForm from "@/components/ContactForm";
import { Reviews, GuidesTeaser } from "@/components/Pages";
import { photo } from "@/lib/images";
import { meta } from "@/lib/seo";

const title = "Doctor Home Visit & Home Nursing in Mumbai | Visiting Medics";
export const metadata = {
  ...meta(title, "Doctor home visits, home nursing, elderly care, blood tests and procedures at home across Mumbai, Churchgate to Dahisar. Call or WhatsApp +91 80808 82201.", "/"),
  title: { absolute: title },
};

const facts = [
  ["Mumbai-wide", "Churchgate to Dahisar"],
  ["Reach us any time", "Call or WhatsApp, day or night"],
  ["Doctor and nurse", "Care at your own home"],
  ["Honest advice", "We tell you if a hospital is needed"],
];
const lead = ["home-nursing-mumbai", "doctor-home-visit-mumbai", "elderly-care-at-home-mumbai"];
const situations = [
  ["My parent is home from hospital and needs care", "/home-healthcare-mumbai"],
  ["My parents live alone and need regular check-ups", "/elderly-care-at-home-mumbai"],
  ["Someone in my family is bedridden", "/bedridden-patient-care-mumbai"],
  ["We need daily dressings or injections", "/wound-dressing-at-home-mumbai"],
  ["I need a blood test without going out", "/blood-test-at-home-mumbai"],
];
const steps = [
  ["Call or WhatsApp", "Tell us the problem and your area."],
  ["We confirm", "Your area, the care needed and a suitable time."],
  ["We visit your home", "A qualified professional comes to you."],
  ["Clear next steps", "What to watch for and when to call again."],
];
const emergencyFaq: Faq = {
  q: "Can a home visit handle an emergency?",
  a: "No. Home visits are for non-emergency care. For chest pain, trouble breathing, signs of stroke, heavy bleeding or loss of consciousness, go to the nearest hospital or call 108.",
};

export default function Home() {
  const heroSrc = photo("hero");
  const features = lead.flatMap((slug) => { const s = getService(slug); return s ? [s] : []; });
  const more = services.filter((s) => !lead.includes(s.slug));
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          {heroSrc && <Image src={heroSrc} alt={site.heroAlt} fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "62% 40%" }} />}
        </div>
        <div className="container hero-in">
          <h1>Doctor and nurse at home in Mumbai</h1>
          <p className="lead">For your parents, your patient, your family. Home visits, nursing and procedures from Churchgate to Dahisar.</p>
          <div className="actions on-dark">
            <a className="btn btn-primary" href={waLink("Hello Visiting Medics, I would like to request a home visit.")}>WhatsApp Us</a>
            <a className="btn btn-outline" href={telLink}>Call {site.phone}</a>
          </div>
        </div>
      </section>

      <div className="container facts">
        {facts.map(([a, b]) => <div key={a}><b>{a}</b><span>{b}</span></div>)}
      </div>

      <section className="section">
        <div className="container split">
          <h2>Care that comes to you, not the other way round.</h2>
          <p>Travelling to a clinic is hard for a parent who finds stairs difficult, and tiring for someone recovering from surgery. A doctor or nurse comes to your home, does what is needed, and tells you honestly what happens next.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>What we do at home</h2>
          {features.map((s, i) => (
            <div key={s.slug} className={i % 2 ? "feature rev" : "feature"}>
              <Photo name={s.slug} alt={`${s.name}: care at home in Mumbai`} ratio="3 / 2" sizes="(min-width: 768px) 520px, 100vw" small />
              <div>
                <h3>{s.name}</h3>
                <p>{s.blurb}</p>
                <ul>{s.includes.slice(0, 3).map((x) => <li key={x}>{x}</li>)}</ul>
                <Link className="btn btn-outline" href={`/${s.slug}`}>About {s.name.toLowerCase()}</Link>
              </div>
            </div>
          ))}
          <h3 style={{ marginTop: "2.4rem" }}>More care at home</h3>
          <div className="more">
            {more.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`}><b><ServiceIcon slug={s.slug} />{s.name}</b><span>{s.blurb}</span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Where are you right now?</h2>
          <div className="sit" style={{ marginTop: "1.6rem" }}>
            {situations.map(([t, h]) => <Link key={t} href={h}><span>{t}</span><Chevron /></Link>)}
          </div>
        </div>
      </section>

      <section className="section band on-dark">
        <div className="container">
          <h2>Honest care. No pressure.</h2>
          <div>
            <p className="lead">If a visit is not needed, we say so. If a hospital is the right place, we tell you plainly and help you with the next step.</p>
            <div className="actions"><Link className="btn btn-outline" href="/faq">Read the FAQ</Link></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How a visit works</h2>
          <ol className="flow">
            {steps.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}
          </ol>
        </div>
      </section>

      <Reviews />

      <section className="section alt">
        <div className="container hand">
          <div>
            <h2>One number, from first message to follow-up</h2>
            <p className="lead">Message or call {site.phone}. We confirm your area, the care needed and a suitable time, then guide you on next steps after the visit.</p>
            <div className="actions">
              <a className="btn btn-primary" href={waLink("Hello Visiting Medics, I would like to request a home visit.")}>WhatsApp Us</a>
              <a className="btn btn-outline" href={telLink}>Call Now</a>
            </div>
          </div>
          <div className="formbox">
            <h3>Prefer to type the details?</h3>
            <p>Fill this in and WhatsApp opens with your message ready to send.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Mumbai, from Churchgate to Dahisar</h2>
          <div className="ar">
            {popularAreas.map((a) => <Link key={a.slug} href={`/areas/${a.slug}`}>{a.name}</Link>)}
          </div>
          <Link className="btn btn-outline" href="/areas">See all areas</Link>
        </div>
      </section>

      <GuidesTeaser />

      <section className="section alt">
        <div className="container">
          <h2>Questions families ask</h2>
          <Faqs items={[...generalFaqs.slice(0, 4), emergencyFaq]} schema={false} />
          <p style={{ marginTop: "1.2rem" }}><Link href="/faq">All questions and answers</Link></p>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
