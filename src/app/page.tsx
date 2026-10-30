import Image from "next/image";
import Link from "next/link";
import { site, popularAreas } from "@/config/site";
import ServiceIcon from "@/components/ServiceIcon";
import CoverageMap from "@/components/CoverageMap";
import { services, generalFaqs } from "@/data/services";
import { CtaButtons, Faqs, FinalCta } from "@/components/bits";
import Photo from "@/components/Photo";
import { photo } from "@/lib/images";
import { meta } from "@/lib/seo";
import { Reviews, GuidesTeaser } from "@/components/Pages";

export const metadata = {
  ...meta("Visiting Medics | Doctor Home Visit & Home Healthcare Mumbai",
    "Doctor home visit, home nursing, blood tests at home, elderly care and IV injection across Mumbai. Call or WhatsApp Visiting Medics to book a home visit.", "/"),
  title: { absolute: "Visiting Medics | Doctor Home Visit & Home Healthcare Mumbai" },
};
const why = [
  ["Care where you are", "Consultation, nursing and procedures at home, so travel is not part of the treatment.", "/doctor-home-visit-mumbai"],
  ["A clear process", "You tell us the need; we confirm service, area and timing with you.", "/how-it-works"],
  ["Qualified personnel", "Procedures are done by appropriately qualified personnel, on medical advice.", "/about"],
  ["Honest about limits", "We say plainly when a hospital is the right place.", "/faq"],
];
const who = [
  ["Older adults", "/elderly-care-at-home-mumbai"], ["Patients recovering after a hospital stay", "/home-healthcare-mumbai"],
  ["Bedridden patients", "/bedridden-patient-care-mumbai"], ["People needing regular nursing, dressings or injections", "/home-nursing-mumbai"],
  ["Families who prefer blood tests and consultation at home", "/blood-test-at-home-mumbai"],
];
const quick = [
  ["Doctor home visit", "/doctor-home-visit-mumbai"], ["Blood test at home", "/blood-test-at-home-mumbai"], ["Elderly care at home", "/elderly-care-at-home-mumbai"],
  ["IV injection at home", "/iv-injection-at-home-mumbai"], ["Home nursing", "/home-nursing-mumbai"],
];
const steps = ["Call, WhatsApp or send an enquiry.", "We confirm your area, the care needed and a suitable time.", "A qualified professional visits you at home.", "You receive clear guidance on next steps."];

export default function Home() {
  const heroSrc = photo("hero");
  return (
    <>
      <section>
        <div className="heroimg">
          {heroSrc ? <Image src={heroSrc} alt={site.heroAlt} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
            : <div className="banner"><p>HEALTHCARE AT HOME</p><Image src="/brand-mark.png" alt="" width={420} height={433} aria-hidden="true" /></div>}
        </div>
        <div className="container overlap">
          <div className="card herotext">
            <h1>Doctor Home Visits &amp;<br />Healthcare at Home, Mumbai</h1>
            <p className="lead">Doctor home visits, home nursing, blood tests and medical procedures for patients across Mumbai.</p>
            <CtaButtons />
          </div>
          <div className="card herolinks">
            <h2>Care at your door</h2>
            <ul>{quick.map(([t, h]) => <li key={h}><Link href={h}>{t}</Link></li>)}</ul>
            <Link href="/services">View all services</Link>
          </div>
        </div>
      </section>

      <section className="section"><div className="container">
        <h2>Home healthcare in Mumbai, done properly</h2>
        <p className="lead">Visiting Medics helps patients and families receive medical and nursing care at home, from a first doctor consultation to ongoing support during recovery.</p>
        <div className="plain">{why.map(([t, d, h]) => <Link key={t} href={h}><h3>{t}</h3><p>{d}</p></Link>)}</div>
      </div></section>

      <section className="section alt"><div className="container">
        <h2>Our home healthcare services</h2>
        <div className="grid g3">{services.map((s) => (
          <Link className="card media" key={s.slug} href={`/${s.slug}`}>
            <Photo name={s.slug} alt={`${s.name}: care at home in Mumbai`} ratio="16 / 10" sizes="(min-width: 768px) 360px, 100vw" small />
            <ServiceIcon slug={s.slug} /><h3>{s.name}</h3><p>{s.blurb}</p>
          </Link>))}</div>
      </div></section>

      <section className="section"><div className="container">
        <h2>Who we care for</h2>
        <div className="plain">{who.map(([t, h]) => <Link key={t} href={h}><h3>{t}</h3></Link>)}</div>
      </div></section>

      <GuidesTeaser />

      <section className="section alt"><div className="container two">
        <div>
          <h2>How it works</h2>
          <ol className="steps">{steps.map((s) => <li key={s}>{s}</li>)}</ol>
          <Link href="/how-it-works">See the full process</Link>
        </div>
        <div>
          <h2>Serving Mumbai</h2>
          <CoverageMap />
          <ul className="chips" style={{ marginTop: "1rem" }}>
            {popularAreas.map((a) => <li key={a.slug}><Link href={`/areas/${a.slug}`}>{a.name}</Link></li>)}
            <li><Link href="/areas">All areas</Link></li>
          </ul>
        </div>
      </div></section>

      <section className="section"><div className="container">
        <h2>Safety and professional care</h2>
        <p>Medical procedures are carried out by qualified personnel, on medical advice, with attention to hygiene and consent.</p>
        
      </div></section>

      <Reviews />

      <section className="section alt"><div className="container">
        <h2>Frequently asked questions</h2>
        <Faqs items={generalFaqs.slice(0, 5)} schema={false} />
        <Link href="/faq">All FAQs</Link>
      </div></section>
      <FinalCta />
    </>
  );
}
