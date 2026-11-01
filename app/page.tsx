"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import ReelEmbed from "../components/ReelEmbed";
import { IMG, REELS, COLLABS, INSTAGRAM } from "../data";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);

  return (
    <section className="hero" ref={ref}>
      <div className="hero-blob" style={{ width: 420, height: 420, background: "#f6d9a0", top: -120, right: -140 }} />
      <div className="hero-blob" style={{ width: 300, height: 300, background: "#cfe3d2", bottom: -100, left: -120 }} />
      <div className="wrap hero-grid">
        <motion.div style={{ y: textY }}>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow">Amravati • Maharashtra — Community Page</div>
            <h1 className="hero-title serif">
              Aamchi <em style={{ color: "var(--saffron)", fontStyle: "italic" }}>Amravati</em>
            </h1>
            <p className="role">माझी, तुमची, आपल्या सर्वांची अमरावती ♥️</p>
            <p className="lede" style={{ marginTop: 18 }}>
              The city&apos;s own community page — sharing the best of Amravati every day:
              street food, hidden spots, festivals, local businesses and pure Vidarbha pride.
              Tag <b>@aamchi_amravati</b> to get featured.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn">Feature With Us</Link>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn ghost">Instagram</a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-img-wrap"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={IMG.hero} alt="Aamchi Amravati — the city's community page" className="hero-img" />
          <div className="hero-badge">
            <b>25K+</b>
            Amravatikars strong
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <div className="marquee" aria-hidden="true">
        <div className="marquee-inner">
          {Array.from({ length: 2 }).flatMap((_, k) => (
            ["Amravati Food", "Local Places", "Festivals", "MH27", "Tag To Feature", "Vidarbha Pride"].map((t, i) => (
              <span key={`${k}-${i}`}>{t}<i>✦</i></span>
            ))
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">By the numbers</div>
            <h2 className="section-title serif">The city, <em style={{ color: "var(--saffron)", fontStyle: "italic" }}>on one page</em></h2>
          </Reveal>
          <div className="stats">
            <Reveal delay={0}>
              <div className="stat"><b><CountUp to={25} suffix="K+" /></b><span>Followers</span></div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="stat"><b><CountUp to={900} suffix="+" /></b><span>Posts &amp; reels</span></div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="stat"><b><CountUp to={8} suffix="%" /></b><span>Avg. engagement</span></div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="note-box">
              <b>Sample note:</b> numbers are placeholders from public aggregator data — the live
              site will show the page&apos;s real stats.
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">What we share</div>
            <h2 className="section-title serif">Amravati, <em style={{ color: "var(--saffron)", fontStyle: "italic" }}>every single day</em></h2>
            <p className="lede">Three beats, one city — the page Amravatikars check before stepping out.</p>
          </Reveal>
          <div className="grid-3" style={{ marginTop: 36 }}>
            {[
              { img: IMG.food, title: "Food Trails", desc: "Misal mornings, evening chaat runs and the city's legendary sweet shops — tasted on camera." },
              { img: IMG.street, title: "Places & Streets", desc: "Ambadevi mornings, Rajkamal square evenings, Chikhaldara escapes — the city's best corners." },
              { img: IMG.festival, title: "Festivals & Events", desc: "Navratri, Ganpati, local melas — the celebrations that make Amravati, Amravati." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="card">
                  <img src={c.img} alt={c.title} className="card-img" loading="lazy" />
                  <div className="card-body">
                    <h3 className="serif">{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">Fresh off Instagram</div>
            <h2 className="section-title serif">Latest <em style={{ color: "var(--saffron)", fontStyle: "italic" }}>reels</em></h2>
            <p className="lede">Straight from the feed — tap through to watch.</p>
          </Reveal>
          <div className="reel-grid" style={{ marginTop: 36 }}>
            {REELS.slice(0, 3).map((r) => (
              <ReelEmbed key={r.code} code={r.code} label={r.label} />
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <Link href="/reels" className="btn ghost">See all reels</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">Local love</div>
            <h2 className="section-title serif">Businesses we&apos;ve <em style={{ color: "var(--saffron)", fontStyle: "italic" }}>featured</em></h2>
          </Reveal>
          <div className="grid-3" style={{ marginTop: 36 }}>
            {COLLABS.slice(0, 3).map((b, i) => (
              <Reveal key={b.name} delay={i * 0.1}>
                <div className="card">
                  <div className="card-body">
                    <span className="pill">Sample</span>
                    <h3 className="serif">{b.name}</h3>
                    <p style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--saffron)", fontWeight: 600, marginBottom: 8 }}>{b.category}</p>
                    <p>{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <Link href="/collabs" className="btn ghost">All features</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-banner">
              <h2 className="serif">Put your business in front of Amravati.</h2>
              <p>Feature reels, event promotions and monthly spotlights — made for local shops, cafés and events, delivered in the page&apos;s own voice.</p>
              <Link href="/contact" className="btn">Get featured</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
