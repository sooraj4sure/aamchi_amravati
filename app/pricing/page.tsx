import Link from "next/link";
import Reveal from "../../components/Reveal";
import { PRICING } from "../../data";

export default function Pricing() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Pricing</div>
          <h2 className="section-title serif">
            Get featured, <em style={{ color: "var(--saffron)", fontStyle: "italic" }}>pick your spotlight</em>
          </h2>
          <p className="lede">
            Simple, local-friendly pricing for Amravati&apos;s businesses and events.
          </p>
        </Reveal>
        <div className="grid-2" style={{ marginTop: 40 }}>
          {PRICING.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <div className={`card price-card ${p.featured ? "featured" : ""}`}>
                <span className="pill">Sample</span>
                <h3 className="serif" style={{ fontSize: 28 }}>{p.name}</h3>
                <div className="amount">{p.amount}</div>
                <div className="per">{p.per}</div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn ${p.featured ? "" : "ghost"}`}>
                  Book this
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="note-box">
            <b>Sample note:</b> all prices and packages above are placeholders — the page owner
            sets the real rates on the live site.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
