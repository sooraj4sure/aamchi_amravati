import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-name serif">
              Aamchi<em>.</em>
            </div>
            <p style={{ color: "#d8cdb8", fontSize: 14.5, lineHeight: 1.7, maxWidth: "34ch" }}>
              माझी, तुमची, आपल्या सर्वांची अमरावती — the city&apos;s own community page, sharing
              the best of Amravati every day.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/about">About</Link>
            <Link href="/reels">Reels</Link>
            <Link href="/collabs">Collabs</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="mailto:connect@evenlynstudio.in">connect@evenlynstudio.in</a>
            <a href="https://www.instagram.com/aamchi_amravati" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} Aamchi Amravati. All rights reserved.</span>
          <span>Sample preview by Evenlyn Studio</span>
        </div>
      </div>
    </footer>
  );
}
