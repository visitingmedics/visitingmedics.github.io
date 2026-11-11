import { generalFaqs } from "@/data/services";
import { extraFaqs } from "@/data/moreFaqs";
import { Crumbs, Faqs, FinalCta } from "@/components/bits";
import { meta } from "@/lib/seo";
export const metadata = meta("Home Doctor and Home Care FAQs, Mumbai", "Answers to common questions about doctor home visits, home nursing, blood tests and home healthcare with Visiting Medics in Mumbai.", "/faq");
export default function Faq() {
  return (<>
    <div className="container"><Crumbs items={[{ name: "FAQ", href: "/faq" }]} />
      <h1 style={{ marginTop: "1.2rem" }}>Frequently Asked Questions</h1></div>
    <section className="section"><div className="container"><Faqs items={[...generalFaqs, ...extraFaqs]} /></div></section><FinalCta /></>);
}
