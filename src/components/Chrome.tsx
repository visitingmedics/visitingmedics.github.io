import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site, telLink, waLink } from "@/config/site";
import { services } from "@/data/services";
import { nav } from "@/lib/seo";
import AreasAccordion from "@/app/areas/AreasAccordion";
import MenuClose from "@/components/MenuClose";

const Logo = () => (
  <Link href="/" aria-label={`${site.name} home`}>
    <Image src={site.logo.src} alt={`${site.name} logo`} width={site.logo.width} height={site.logo.height} priority sizes="210px" className="logo" />
  </Link>
);

const paths: Record<string, ReactNode> = {
  call: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  whatsapp: <g stroke="#25D366"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" /><path d="M9 9.5c.5 2.5 2.5 4.5 5 5l1.2-1.2-1.8-1-.9.7a4 4 0 0 1-1.8-1.8l.7-.9-1-1.8z" /></g>,
  instagram: <><defs><linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FFDC80"/><stop offset="35%" stopColor="#F77737"/><stop offset="65%" stopColor="#E1306C"/><stop offset="100%" stopColor="#833AB4"/></linearGradient></defs><g stroke="url(#instagram-gradient)"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="#E1306C" /></g></>,
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#1877F2" stroke="none" />,
  google: <><path d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.23c1.89-1.74 2.99-4.3 2.99-7.35z" fill="#4285F4" stroke="none"/><path d="M12 22c2.7 0 4.96-.9 6.61-2.42l-3.23-2.51c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.75-5.59-4.1H3.08v2.59A10 10 0 0 0 12 22z" fill="#34A853" stroke="none"/><path d="M6.41 13.93a6 6 0 0 1 0-3.86V7.48H3.08a10 10 0 0 0 0 9.04z" fill="#FBBC05" stroke="none"/><path d="M12 5.97c1.47 0 2.79.5 3.82 1.5l2.86-2.86A9.56 9.56 0 0 0 12 2a10 10 0 0 0-8.92 5.48l3.33 2.59c.79-2.35 2.99-4.1 5.59-4.1z" fill="#EA4335" stroke="none"/></>,
  linkedin: <g fill="#0A66C2" stroke="none"><rect x="3" y="9" width="4" height="12" /><circle cx="5" cy="4.5" r="2" /><path d="M10 9h3.6v1.8c.7-1.2 2-2.1 3.9-2.1 3.3 0 3.5 2.4 3.5 5.2V21h-4v-6c0-1.4-.3-2.5-1.7-2.5S14 13.7 14 15v6h-4z" /></g>,
};

function Ico({ name, href, label, external }: { name: string; href: string; label: string; external?: boolean }) {
  return (
    <a className="ico" href={href} aria-label={label} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={name === "call" ? "currentColor" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
    </a>
  );
}

export function Header() {
  return (
    <>
      <MenuClose />
      <div className="topbar"><div className="container">
        <span>Doctor home visits and healthcare at home across Mumbai</span>
        <span><a href={telLink}>Call {site.phone}</a><a href={waLink()}>WhatsApp</a></span>
      </div></div>
      <header className="header">
        <div className="container bar">
          <Logo />
          <nav aria-label="Main" className="nav">{nav.map((n) => <Link key={n.href} href={n.href}>{n.name}</Link>)}</nav>
          <Link className="btn btn-primary hide-m" href="/contact">Book a Home Visit</Link>
          <details className="menu">
            <summary aria-label="Menu"><span className="burger" aria-hidden="true"><i /><i /><i /></span></summary>
            <nav aria-label="Mobile">{nav.map((n) => <Link key={n.href} href={n.href}>{n.name}</Link>)}</nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container fgrid">
        <div>
          <Logo />
          <p className="tag">{site.tagline.toUpperCase()}</p>
          <p>Doctor home visits, nursing, blood tests and home medical procedures across Mumbai.</p>
          <div className="icons">
            <Ico name="call" href={telLink} label="Call Visiting Medics" />
            <Ico name="whatsapp" href={waLink()} label="WhatsApp Visiting Medics" external />
            {site.socials.Instagram && <Ico name="instagram" href={site.socials.Instagram} label="Visiting Medics on Instagram" external />}
            {site.socials.Facebook && <Ico name="facebook" href={site.socials.Facebook} label="Visiting Medics on Facebook" external />}
            {site.socials.LinkedIn && <Ico name="linkedin" href={site.socials.LinkedIn} label="Visiting Medics on LinkedIn" external />}
            {site.maps && <Ico name="google" href={site.maps} label="Visiting Medics on Google Business Profile" external />}
          </div>
        </div>
        <div><h2>Services</h2><ul className="cols">{services.map((s) => <li key={s.slug}><Link href={`/${s.slug}`}>{s.name}</Link></li>)}</ul></div>
        <div><h2>Company</h2><ul className="co">
          <li><Link href="/about">About Us</Link></li><li><Link href="/how-it-works">How It Works</Link></li><li><Link href="/care-plans">Care Plans</Link></li><li><Link href="/care-standards">Care Standards</Link></li>
          <li><Link href="/guides">Guides</Link></li><li><Link href="/service-areas">Service Areas</Link></li><li><Link href="/faq">FAQ</Link></li><li><Link href="/contact">Contact</Link></li>
        </ul></div>
      </div>
      <div className="container copy">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span><Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/terms-and-conditions">Terms &amp; Conditions</Link></span>
      </div>
      <AreasAccordion />
    </footer>
  );
}

export const StickyCta = () => (
  <div className="sticky" role="group" aria-label="Quick contact">
    <a className="btn btn-outline" href={telLink}>Call</a>
    <a className="btn btn-primary" href={waLink("Hello Visiting Medics, I would like to request a home visit.")}>WhatsApp</a>
  </div>
);
