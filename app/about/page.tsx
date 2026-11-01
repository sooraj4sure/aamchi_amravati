import Link from "next/link";
import Reveal from "../../components/Reveal";
import { IMG } from "../../data";

export default function About() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "center", gap: 44 }}>
            <Reveal>
              <img src={IMG.about} alt="Streets of Amravati" className="about-img" />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="eyebrow">About the page</div>
              <h2 className="section-title serif">
                One page, <em style={{ color: "var(--saffron)", fontStyle: "italic" }}>the whole city</em>
              </h2>
              <p className="lede">
                <b>@aamchi_amravati</b> is Amravati&apos;s community page — run by locals, for locals.
                We spend our days out in the city: tasting the misal, walking the markets, covering
                the festivals, and finding the spots even Amravatikars haven&apos;t seen.
              </p>
              <p className="lede" style={{ marginTop: 16 }}>
                The page runs on one simple idea — <b>tag @aamchi_amravati to get featured</b>.
                Every day, the best of the city&apos;s photos and reels get shared with 25,000+
                followers who call Amravati home.
              </p>
              <div className="chips">
                {["City Pride", "Local Food", "Festivals", "Hidden Spots", "Marathi Culture", "MH27"].map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">How featuring works</div>
            <h2 className="section-title serif">Your business, <em style={{ color: "var(--saffron)", fontStyle: "italic" }}>in front of the city</em></h2>
            <p className="lede">
              Local shops, cafés, events and services — if it&apos;s in Amravati, it belongs here.
              We shoot on location, edit in the page&apos;s voice, and post to an audience that
              actually walks past your door.
            </p>
          </Reveal>
          <div className="grid-3" style={{ marginTop: 36 }}>
            {[
              { img: IMG.market, title: "1. You reach out", desc: "Tell us about your shop, café or event — what makes it worth the city's attention." },
              { img: IMG.people, title: "2. We shoot it", desc: "We visit, taste, film and photograph — real on-location content, no stock, no fakery." },
              { img: IMG.night, title: "3. The city sees it", desc: "Your feature goes live to 25K+ Amravatikars — with your location tagged and link in stories." },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="card">
                  <img src={s.img} alt={s.title} className="card-img" loading="lazy" />
                  <div className="card-body">
                    <h3 className="serif">{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/pricing" className="btn">See feature pricing</Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="note-box">
              <b>Sample note:</b> the process, photos and numbers on this page are placeholders —
              the live site will carry the page&apos;s real story and stats.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <Reveal>
            <p className="quote">
              “माझी, तुमची, आपल्या सर्वांची अमरावती — this page is the city talking to itself.”
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
