import Reveal from "../../components/Reveal";
import ReelEmbed from "../../components/ReelEmbed";
import { REELS, INSTAGRAM } from "../../data";

export default function Reels() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Reels</div>
          <h2 className="section-title serif">
            The city, <em style={{ color: "var(--saffron)", fontStyle: "italic" }}>in motion</em>
          </h2>
          <p className="lede">
            Food trails, festival nights, monsoon escapes — the reels Amravati watches first.
          </p>
        </Reveal>
        <div className="reel-grid" style={{ marginTop: 40 }}>
          {REELS.map((r) => (
            <ReelEmbed key={r.code} code={r.code} label={r.label} />
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="note-box">
            <b>Sample note:</b> these are placeholder slots. On the live site, the page&apos;s real
            reels embed here automatically —{" "}
            <a href={`${INSTAGRAM}/reels/`} target="_blank" rel="noreferrer" style={{ color: "var(--saffron-deep)", fontWeight: 600 }}>
              see them on Instagram →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
