import Link from "next/link";
import Reveal from "../../components/Reveal";
import { COLLABS } from "../../data";

export default function Collabs() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Collaborations</div>
          <h2 className="section-title serif">
            Local businesses, <em style={{ color: "var(--saffron)", fontStyle: "italic" }}>in the spotlight</em>
          </h2>
          <p className="lede">
            A few of the features we&apos;ve done for Amravati&apos;s shops, cafés and events.
          </p>
        </Reveal>
        <div className="grid-3" style={{ marginTop: 40 }}>
          {COLLABS.map((b, i) => (
            <Reveal key={b.name} delay={(i % 3) * 0.1}>
              <div className="card">
                <div className="card-body">
                  <span className="pill">Sample</span>
                  <h3 className="serif">{b.name}</h3>
                  <p style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--saffron)", fontWeight: 600, marginBottom: 8 }}>
                    {b.category}
                  </p>
                  <p>{b.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="note-box">
            <b>Sample note:</b> every collaboration above is invented for this preview — real
            features, with the page&apos;s actual partners, will replace them on the live site.
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/contact" className="btn">Feature your business</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
