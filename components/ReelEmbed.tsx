"use client";

import Reveal from "./Reveal";
import { INSTAGRAM } from "../data";

/**
 * Real reels embed via Instagram's oEmbed iframe. Placeholder slots
 * (code starting with "sample-") render a clearly-marked card instead
 * of a broken embed, linking to the page's reels tab.
 */
export default function ReelEmbed({ code, label }: { code: string; label: string }) {
  const isSample = code.startsWith("sample-");

  return (
    <Reveal>
      <div className="reel-card">
        {isSample ? (
          <div className="reel-placeholder">
            <span className="reel-glyph">🎬</span>
            <span className="pill">Sample</span>
            <p>Reel slot — the page&apos;s real reel will appear here on the live site.</p>
          </div>
        ) : (
          <iframe
            src={`https://www.instagram.com/reel/${code}/embed`}
            title={label}
            loading="lazy"
            allowTransparency={true}
            scrolling="no"
          />
        )}
        <div className="reel-meta">
          <b className="serif">{label}</b>
          <a
            href={isSample ? `${INSTAGRAM}/reels/` : `https://www.instagram.com/reel/${code}/`}
            target="_blank"
            rel="noreferrer"
          >
            View on Instagram →
          </a>
        </div>
      </div>
    </Reveal>
  );
}
