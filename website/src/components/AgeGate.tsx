"use client";

import { useState, useEffect } from "react";

export default function AgeGate() {
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    setVerified(localStorage.getItem("pih-age-verified") === "true");
  }, []);

  // null = hydrating (render nothing to avoid flash), true = already verified
  if (verified !== false) return null;

  const confirm = () => {
    localStorage.setItem("pih-age-verified", "true");
    setVerified(true);
  };

  const deny = () => {
    window.location.href = "https://google.com";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-forest/95 backdrop-blur-sm px-6">
      <div className="flex flex-col items-center gap-8 max-w-sm w-full text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="font-serif italic text-amber text-4xl tracking-tight">
            Pilin&#39; It Higher
          </span>
          <span className="text-smoke/60 text-xs tracking-widest uppercase">
            Farms · Duxbury, Vermont
          </span>
        </div>

        <div className="w-10 h-px bg-amber/40" />

        <div className="flex flex-col gap-2">
          <p className="text-cream text-xl font-serif">Are you 21 or older?</p>
          <p className="text-smoke/50 text-sm">
            You must be of legal age to enter this site.
          </p>
        </div>

        <div className="flex gap-4 w-full">
          <button
            onClick={confirm}
            className="flex-1 py-3 px-6 bg-amber hover:bg-amber-light text-bark font-medium rounded transition-colors"
          >
            Yes, I&apos;m 21+
          </button>
          <button
            onClick={deny}
            className="flex-1 py-3 px-6 border border-smoke/30 text-smoke/60 hover:border-smoke/50 hover:text-smoke/80 rounded transition-colors"
          >
            No
          </button>
        </div>

        <p className="text-smoke/30 text-xs leading-relaxed">
          By entering, you confirm you are 21 or older and are accessing this
          site in compliance with local laws.
        </p>
      </div>
    </div>
  );
}
