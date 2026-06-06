import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Music | Pilin' It Higher Farms",
  description:
    "The Edd — jamtronic space rock out of Vermont, and the sound behind Pilin' It Higher Farms.",
};

// Event poster — Dawn of the Edd, sponsored by Pilin' It Higher
const DAWN_OF_EDD = "/images/624843910_17986925786923672_6807344059480959037_n.jpg";

export default function MusicPage() {
  return (
    <>
      <Nav />
      <main className="bg-forest min-h-screen">
        <PageHero />
        <TheEddSection />
      </main>
      <PageFooter />
    </>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function PageHero() {
  return (
    <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center">
      <p className="text-amber text-xs tracking-[0.2em] uppercase mb-6">
        Pilin&#39; It Higher Farms
      </p>
      <h1 className="font-serif italic text-cream text-5xl sm:text-7xl leading-tight mb-8">
        The Sound
      </h1>
      <p className="text-smoke/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
        This farm didn&apos;t come from a business plan. It came from a bass
        line and decades of growing things in Vermont. The music and the soil
        have always been the same story.
      </p>
    </section>
  );
}

/* ─────────────────────────────────────────────
   THE EDD
───────────────────────────────────────────── */
function TheEddSection() {
  return (
    <section className="border-t border-smoke/10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-amber text-xs tracking-[0.2em] uppercase">
              Greg&apos;s band
            </p>
            <h2 className="font-serif text-cream text-4xl sm:text-5xl leading-tight">
              The Edd
            </h2>
            <p className="text-smoke/70 leading-relaxed">
              The East Dover Delinquents — jamtronic space rock out of Vermont
              since 2009. Greg holds down the low end. The four-piece has built
              a devoted following across New England through relentless touring,
              extended improvisation, and the kind of live shows that make
              people rearrange their schedules.
            </p>
            <p className="text-smoke/70 leading-relaxed">
              The same instincts that make a great jam — patience, listening,
              knowing when to push and when to hold back — turn out to be pretty
              good growing instincts too.
            </p>

            {/* Members */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { name: "Greg Domina", role: "Bass · Vocals" },
                { name: "Dominic Metcalfe", role: "Drums" },
                { name: "Win Haas", role: "Guitar" },
                { name: "John Nummy", role: "Keys" },
              ].map((m) => (
                <div key={m.name} className="flex flex-col gap-0.5">
                  <span className="text-cream text-sm font-medium">{m.name}</span>
                  <span className="text-smoke/40 text-xs">{m.role}</span>
                </div>
              ))}
            </div>

            <a
              href="https://theedd.bandcamp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber hover:text-amber-light text-sm font-medium transition-colors w-fit"
            >
              Listen on Bandcamp →
            </a>
          </div>

          {/* Event poster */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded overflow-hidden">
              <Image
                src={DAWN_OF_EDD}
                alt="Dawn of the Edd — Halloween show at Stone Church, Brattleboro VT. Sponsored by Pilin' It Higher Farms."
                width={600}
                height={600}
                className="w-full object-cover"
              />
            </div>
            <p className="text-smoke/40 text-xs text-center">
              Dawn of the Edd · Stone Church · Brattleboro, VT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function PageFooter() {
  return (
    <footer className="bg-bark text-smoke/60 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-smoke/30">
        <p>© {new Date().getFullYear()} Pilin&#39; It Higher Farms. All rights reserved.</p>
        <p className="font-medium text-smoke/50">
          Must be 21 or older to purchase cannabis products.
        </p>
      </div>
    </footer>
  );
}
