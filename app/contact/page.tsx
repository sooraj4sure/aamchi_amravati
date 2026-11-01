"use client";

import { useState } from "react";
import Reveal from "../../components/Reveal";
import { EMAIL, INSTAGRAM } from "../../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [ptype, setPtype] = useState("Business feature reel");
  const [message, setMessage] = useState("");

  const send = () => {
    const subject = encodeURIComponent(`Feature enquiry from ${name || "a business"} (${business || "Amravati"})`);
    const body = encodeURIComponent(
      `Hi,\n\nMy name is ${name || "—"} and I'm with ${business || "—"}.\n\nI'm interested in: ${ptype}\n\n${message || ""}\n\nThanks!`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="contact-hero">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Contact</div>
            <h2 className="section-title serif">
              Get your business <em style={{ color: "var(--saffron)", fontStyle: "italic" }}>featured</em>
            </h2>
            <p className="lede" style={{ margin: "0 auto" }}>
              Run a shop, café or event in Amravati? Tell us about it — feature enquiries
              get a personal reply, usually within a day.
            </p>
            <a className="mail-btn" href={`mailto:${EMAIL}`}>
              ✉&nbsp; {EMAIL}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="form">
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 6 }}>Quick enquiry</h3>
            <p style={{ color: "var(--muted)", fontSize: 14.5 }}>
              Fill this in — it opens your email app with everything addressed to the page.
            </p>
            <label htmlFor="c-name">Your name</label>
            <input id="c-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Rahul Deshmukh" />
            <label htmlFor="c-brand">Business / event</label>
            <input id="c-brand" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="e.g. Varhad Misal House" />
            <label htmlFor="c-type">I&apos;m interested in</label>
            <select id="c-type" value={ptype} onChange={(e) => setPtype(e.target.value)}>
              <option>Business feature reel</option>
              <option>Reel + story combo</option>
              <option>Event promotion</option>
              <option>Monthly spotlight</option>
              <option>Something else</option>
            </select>
            <label htmlFor="c-msg">Message</label>
            <textarea id="c-msg" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your business, location and timelines…" />
            <button className="btn" onClick={send} style={{ marginTop: 26, width: "100%", justifyContent: "center" }}>
              Send enquiry →
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="social-row">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
            <a href={`mailto:${EMAIL}`}>Email</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
