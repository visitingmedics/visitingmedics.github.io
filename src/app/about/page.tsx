import Link from "next/link";
import { Crumbs, FinalCta } from "@/components/bits";
import { meta } from "@/lib/seo";
export const metadata = meta("About Us", "Visiting Medics provides healthcare at home in Mumbai, bringing doctor consultation, nursing and medical procedures to patients' homes.", "/about");
export default function About() {
  return (<>
    <div className="container prose"><Crumbs items={[{ name: "About Us", href: "/about" }]} />
      <h1 style={{ marginTop: "1.2rem" }}>About Visiting Medics</h1>
      <p className="lead">Visiting Medics is a healthcare-at-home service in Mumbai. We bring doctor consultations, nursing care and medical procedures to your home, so that care does not depend on repeated trips to a clinic or hospital.</p>
      <h2>What we do</h2>
      <p>Our main service is the <Link href="/doctor-home-visit-mumbai">doctor home visit</Link>. Alongside it we provide <Link href="/home-nursing-mumbai">home nursing</Link>, <Link href="/blood-test-at-home-mumbai">blood tests at home</Link>, <Link href="/elderly-care-at-home-mumbai">elderly care</Link>, <Link href="/diabetic-care-at-home-mumbai">diabetic care</Link>, <Link href="/palliative-care-at-home-mumbai">palliative care</Link> and home procedures such as dressings, injections and catheter or tube care. See <Link href="/services">all services</Link>.</p>
      <h2>Who we help</h2>
      <p>Most of the families we speak to are looking after an older parent, a patient recovering after a hospital stay or surgery, or someone who finds travelling to a clinic difficult. We also help people who simply prefer a consultation at home.</p>
      <h2>How we work</h2>
      <ul>
        <li>We explain what we plan to do and why, and proceed only with consent.</li>
        <li>We work within our qualifications, and procedures are carried out by appropriately qualified personnel on medical advice.</li>
        <li>We tell you plainly when a hospital is the better choice.</li>
        <li>We use your information only to arrange and provide care. Read our <Link href="/privacy-policy">Privacy Policy</Link>.</li>
      </ul>
      <p>See our <Link href="/care-standards">care standards</Link> and <Link href="/how-it-works">how a home visit works</Link>.</p>
      <h2>Ask before you book</h2>
      <p>You are welcome to ask about the qualifications of the professional who will visit you before you confirm a visit.</p>
      <h2>What we are not</h2>
      <p>Home healthcare does not replace emergency care. In a medical emergency, call 108 or go to the nearest emergency department.</p>
      <h2>Where we work</h2>
      <p>We serve Mumbai, from Churchgate to Dahisar. Browse the <Link href="/areas">areas we serve</Link>, or <Link href="/contact">contact us</Link> to confirm your locality.</p></div><FinalCta /></>);
}
