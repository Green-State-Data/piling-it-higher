"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#strains", label: "Strains" },
  { href: "/music", label: "Music" },
  { href: "/#where-to-buy", label: "Where to Buy" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-forest/95 backdrop-blur-sm shadow-sm"
          : "bg-gradient-to-b from-forest/70 to-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-serif italic text-cream text-lg tracking-tight"
        >
          Pilin&#39; It Higher
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-smoke/80 hover:text-cream text-sm tracking-wide transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#where-to-buy"
            className="bg-amber hover:bg-amber-light text-bark text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Find Our Flower
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cream p-1 text-2xl leading-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-forest px-6 pb-6 flex flex-col gap-1 border-t border-smoke/10">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-smoke/80 hover:text-cream py-3 text-base transition-colors border-b border-smoke/10 last:border-0"
            >
              {label}
            </a>
          ))}
          <a
            href="#where-to-buy"
            onClick={closeMenu}
            className="mt-3 bg-amber hover:bg-amber-light text-bark text-sm font-medium px-4 py-3 rounded text-center transition-colors"
          >
            Find Our Flower
          </a>
        </div>
      )}
    </header>
  );
}
