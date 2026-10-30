import Link from "next/link";
import { Crumbs, FinalCta, Faqs } from "@/components/bits";
import { meta } from "@/lib/seo";
export const metadata = meta("How a Home Visit Works", "See how to request a home visit from Visiting Medics in Mumbai: contact us, confirm details, receive care at home.", "/how-it-works");
const steps = [
  ["Contact us", "Call, WhatsApp or use the enquiry form. Tell us the patient's need and your area."],
  ["We confirm the details", "We confirm the service, your location and a suitable time. Please keep prescriptions and reports ready."],
  ["Care at home", "A qualified professional visits, carries out the service and explains what was done."],
  ["Next steps", "You receive guidance on follow-up, further visits or hospital care if needed."],
];
const faqs = [
  { q: "Do I need a prescription?", a: "A prescription helps. Injections, IV medicines and many procedures are given on a doctor's advice. If you do not have one, a doctor home visit can review the patient first." },
  { q: "Can I book for a parent who lives in another area?", a: "Yes. Share their address, age, current medicines and your contact number, and we plan the visit with you." },
  { q: "What if the patient needs a hospital?", a: "We tell you plainly and help you with the next step. Home visits are for non-emergency care." },
];
export default function How() {
  return (<>
    <div className="container"><Crumbs items={[{ name: "How It Works", href: "/how-it-works" }]} />
      <h1 style={{ marginTop: "1.2rem" }}>How a Home Visit Works</h1>
      <p className="lead">From your first message to follow-up guidance, here is what to expect when you book a home visit in Mumbai.</p></div>
    <section className="section"><div className="container">
      <ol className="steps">{steps.map(([t, d]) => <li key={t}><h2 style={{ fontSize: "1.2rem", marginBottom: ".2em" }}>{t}</h2><p>{d}</p></li>)}</ol>
    </div></section>
    <section className="section alt"><div className="container prose">
      <h2>What to keep ready</h2>
      <ul><li>Old prescriptions and recent reports</li><li>A list of current medicines, including supplements</li><li>Any known allergies</li><li>The full address, a landmark and a contact number</li><li>An adult family member who knows the patient's history</li></ul>
      <h2>What happens during the visit</h2>
      <p>The professional asks about the history and symptoms, examines the patient where relevant, carries out the care and explains what was done and why. If a hospital is the better place for care, you are told plainly.</p>
      <p>Read our guide on <Link href="/how-a-doctor-home-visit-works-in-mumbai">how a doctor home visit works</Link>.</p>
      <h2>Not for emergencies</h2>
      <p>Home visits are for non-emergency care. For chest pain, trouble breathing, signs of stroke or heavy bleeding, call 108 or go to the nearest emergency department.</p>
    </div></section>
    <section className="section"><div className="container">
      <h2>Common questions</h2><Faqs items={faqs} schema={false} />
      <p style={{ marginTop: "1rem" }}>Browse <Link href="/services">our services</Link> or read the <Link href="/faq">FAQ</Link>.</p>
    </div></section><FinalCta /></>);
}
