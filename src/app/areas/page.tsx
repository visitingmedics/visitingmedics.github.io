import Link from "next/link";
import type { Metadata } from "next";
import { areas, zones, SITE } from "./data";
import { Crumbs, FinalCta } from "@/components/bits";

export const metadata: Metadata = {
  title: "Areas We Serve in Mumbai | Visiting Medics",
  description: "Doctor visit at home, home nursing and elderly care across South Mumbai, Central Mumbai and the Western suburbs. Choose your area to book a home visit.",
  alternates: { canonical: `${SITE}/areas` },
};

export default function AreasHub() {
  return (
    <>
      <div className="container">
        <Crumbs items={[{ name: "Areas", href: "/areas" }]} />
        <h1 style={{ marginTop: "1.2rem" }}>Home Healthcare Across Mumbai</h1>
        <p className="lead">Visiting Medics brings doctors and nurses to your home. Choose your area:</p>
      </div>
      {zones.map((z, i) => (
        <section key={z} className={i % 2 ? "section alt" : "section"} style={{ paddingBlock: "2rem" }}>
          <div className="container">
            <h2>{z}</h2>
            <ul style={{ columns: "2 280px", columnGap: "2rem", listStyle: "none", padding: 0 }}>
              {areas.filter((a) => a.zone === z).map((a) => (
                <li key={a.slug} style={{ breakInside: "avoid", padding: ".3rem 0" }}><Link href={`/areas/${a.slug}`}>Doctor Visit at Home in {a.name}</Link></li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <FinalCta />
    </>
  );
}
