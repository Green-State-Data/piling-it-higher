"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const REELS = [
  "https://www.instagram.com/reel/DNdUq3hAYnv/",
  "https://www.instagram.com/reel/DKrbAoyAL5q/",
  "https://www.instagram.com/reel/DITxU7tuyCD/",
];

export default function InstagramReels() {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, []);

  return (
    <div className="mt-16 pt-16 border-t border-smoke/10">
      <p className="text-amber text-xs tracking-[0.2em] uppercase mb-8 text-center">
        Live from @theeddmusic
      </p>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
      <div className="grid sm:grid-cols-3 gap-6 items-start justify-items-center">
        {REELS.map((url) => (
          <blockquote
            key={url}
            className="instagram-media !m-0 w-full"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
          />
        ))}
      </div>
    </div>
  );
}
