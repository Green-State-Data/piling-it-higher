import Image from "next/image";
import Nav from "@/components/Nav";

// Hero photo — swap to whichever frame looks best
const HERO_IMG = "/images/662335667_18463499263099629_9119869479812669781_n.jpg";
// About section photo
const ABOUT_IMG = "/images/657372500_18104452387914595_7865408186774661009_n.jpg";
// Strain photos
const SNOWBERRY_IMG     = "/images/489031013_17905888839135317_4257841272084582578_n.jpg";
const ZERBTANE_IMG      = "/images/603008931_17934745881135317_3418159059697480267_n.jpg";
const AMNESIA_DAZE_IMG  = "/images/662357102_18321644914252427_5143570359821317395_n.jpg";
const MINTZ_ROYALE_IMG  = "/images/656365973_18132707155469076_9027129900401988058_n.jpg";
const DIESEL_DOUGH_IMG  = "/images/661942688_17950633206135317_6195640882429252581_n.jpg";
// Gallery strip
const GALLERY = [
  "/images/621465765_18065744564635358_3330423846470940133_n.jpg",
  "/images/624843910_17986925786923672_6807344059480959037_n.jpg",
  "/images/541940505_17922596292135317_1554609443889782379_n.jpg",
  "/images/625051368_18144253129413221_5315043569530917783_n.jpg",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <StrainsSection />
        <GallerySection />
        <WhereToBuySection />
      </main>
      <SiteFooter />
    </>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src={HERO_IMG}
        alt="Pilin' It Higher greenhouse in Duxbury, Vermont"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-forest/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-amber tracking-[0.2em] text-xs uppercase mb-6">
          Duxbury, Vermont · Est. 2024
        </p>
        <h1 className="font-serif italic text-cream text-5xl sm:text-7xl leading-tight mb-6">
          Pilin&#39; It Higher Farms
        </h1>
        <p className="text-smoke/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          Perched high in the hills. Solar-powered, off-grid, living soil.
          Greenhouse grown the way it should be.
        </p>
        <a
          href="#where-to-buy"
          className="inline-block bg-amber hover:bg-amber-light text-bark font-medium px-8 py-4 rounded transition-colors text-sm tracking-wide"
        >
          Find Our Flower
        </a>
      </div>

      {/* Pull quote — bottom left */}
      <div className="absolute bottom-10 left-6 sm:left-10 max-w-xs border-l-2 border-amber/60 pl-4 hidden sm:block">
        <p className="font-serif italic text-cream/80 text-base leading-relaxed">
          &ldquo;I love growing stuff. I&apos;ve always been growing vegetables
          and cannabis anyway.&rdquo;
        </p>
        <p className="text-amber/60 text-xs mt-2 tracking-wide">— Greg Domina</p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-smoke/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="text-lg animate-bounce">↓</span>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="bg-cream py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className="text-amber text-xs tracking-[0.2em] uppercase">
            Our story
          </p>
          <h2 className="font-serif text-bark text-4xl sm:text-5xl leading-tight">
            From legacy to legal.
          </h2>
          <p className="text-bark/70 leading-relaxed">
            Greg Domina has been growing cannabis in Vermont for as long as he
            can remember. Exactly how long that is, we&apos;ll leave between
            Greg and the calendar. As bassist for jam band The Edd, he spent
            years balancing music, gardening, and the kind of quiet craft that
            doesn&apos;t need an audience.
          </p>
          <p className="text-bark/70 leading-relaxed">
            In January 2023, Greg and his wife Danielle began the Vermont
            licensing process. By spring 2024 they had their Tier 2 cultivation
            license — and four greenhouses producing cannabis the same way
            Greg always has: by hand, in living soil, powered by the sun.
          </p>
          <p className="text-bark/70 leading-relaxed">
            Rounding out the operation is Nick Donnelly — a man who brings an
            almost unfair amount of experience to what Vermont insists on calling
            a new industry. He&apos;s also fronted more than a few successful jam
            bands across this state over the years, which given the company he
            keeps, should surprise exactly no one.
          </p>
          <p className="text-bark/70 leading-relaxed">
            The name? A Disco Biscuits song. That says everything.
          </p>

          {/* Stat strip */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-bark/10">
            {[
              { stat: "4", label: "Greenhouses" },
              { stat: "3rd", label: "Harvest" },
              { stat: "Tier 2", label: "VT License" },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-serif text-moss text-2xl">{stat}</span>
                <span className="text-bark/50 text-xs tracking-wide uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="relative h-[520px] rounded-sm overflow-hidden">
          <Image
            src={ABOUT_IMG}
            alt="Greg Domina at Pilin' It Higher Farms"
            fill
            className="object-cover"
          />
          {/* Caption badge */}
          <div className="absolute bottom-4 left-4 bg-forest/85 backdrop-blur-sm px-3 py-2 rounded text-cream text-xs">
            Solar-powered · Living soil · Off-grid
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STRAINS
───────────────────────────────────────────── */
function StrainsSection() {
  const strains = [
    {
      name: "Snowberry",
      badge: "Flagship",
      img: SNOWBERRY_IMG,
      description:
        "A decade-old mother plant, bred for Vermont. Mold-resistant, climate-adapted, and unmistakable. Greg puts it simply: gloves are mighty sticky and it reeks like pine infused jet fuel. If you&apos;ve smoked it, you know why we&apos;ve kept the cut.",
      detail: "Heirloom · Vermont-adapted · Pine & fuel · 22% THC",
    },
    {
      name: "Zerbtane",
      badge: "High-THC",
      img: ZERBTANE_IMG,
      description:
        "Oregon genetics, Vermont soil. Our highest-THC offering — brought west and grown the same way everything else is here: slowly, carefully, in living soil under glass.",
      detail: "Oregon genetics · High-THC · Greenhouse grown · 21.1% THC",
    },
    {
      name: "Amnesia Daze",
      badge: "Sativa",
      img: AMNESIA_DAZE_IMG,
      description:
        "The name gives you the vibe before you open the tin. Sativa-leaning, cerebral, citrus-forward. The kind of strain that opens things up rather than closes them down.",
      detail: "Sativa-leaning · Citrus & earth · Uplifting",
    },
    {
      name: "Mintz Royale",
      badge: "Hybrid",
      img: MINTZ_ROYALE_IMG,
      description:
        "Cool and creamy up front, serious underneath. Mint and sweet earth on the nose — the &ldquo;Royale&rdquo; is not decorative.",
      detail: "Hybrid · Mint & cream · High potency",
    },
    {
      name: "Diesel Dough",
      badge: "Indica",
      img: DIESEL_DOUGH_IMG,
      description:
        "Diesel genetics meeting Vermont living soil. Fuel and sweetness, complex and pungent. Smells exactly like the name suggests — and that&apos;s a very good thing.",
      detail: "Indica-leaning · Fuel & sweet earth · Dense",
    },
  ];

  return (
    <section id="strains" className="bg-moss py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-3 mb-16">
          <p className="text-amber text-xs tracking-[0.2em] uppercase">
            What we grow
          </p>
          <h2 className="font-serif text-cream text-4xl sm:text-5xl">
            The strains
          </h2>
          <p className="text-smoke/60 max-w-md leading-relaxed">
            Small batch. Every plant touched by hand. Ask your budtender what&apos;s available.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {strains.map((s) => (
            <div
              key={s.name}
              className="bg-forest rounded overflow-hidden flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-56 shrink-0">
                <Image
                  src={s.img}
                  alt={`${s.name} cannabis strain`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
                <span className="absolute top-4 left-4 bg-amber text-bark text-xs font-medium px-2 py-1 rounded">
                  {s.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <h3 className="font-serif text-cream text-2xl">{s.name}</h3>
                <p
                  className="text-smoke/70 leading-relaxed text-sm flex-1"
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />
                <p className="text-amber/70 text-xs tracking-wide">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-smoke/40 text-sm text-center mt-12">
          Additional strains available seasonally — ask at the counter.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PHOTO GALLERY STRIP
───────────────────────────────────────────── */
function GallerySection() {
  return (
    <section className="bg-forest py-0 overflow-hidden">
      <div className="flex gap-1">
        {GALLERY.map((src, i) => (
          <div key={i} className="relative h-48 flex-1 min-w-0">
            <Image
              src={src}
              alt="Pilin' It Higher farm"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHERE TO BUY
───────────────────────────────────────────── */
function WhereToBuySection() {
  const retailers = [
    {
      name: "Hello, Hi",
      location: "46 Main St, Winooski, VT",
      status: "available" as const,
      description:
        "Vermont's first co-located medical and adult-use dispensary. Browse our products on their menu.",
      link: "https://hellohivt.com/stores/hello-hi-dispensary-rec/brands/pilin-it-higher-farms",
    },
    {
      name: "Mountain Girl Cannabis",
      location: "Rutland, VT",
      status: "available" as const,
      description:
        "Our original retail home in Rutland. Ask your budtender what's currently in stock.",
      link: null,
    },
    {
      name: "Green State Dispensary",
      location: "Burlington, VT",
      status: "coming" as const,
      description:
        "Burlington is coming soon. Stay tuned to our Instagram for the announcement.",
      link: null,
    },
  ];

  return (
    <section id="where-to-buy" className="bg-smoke py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-3 mb-16">
          <p className="text-amber text-xs tracking-[0.2em] uppercase">
            Find us
          </p>
          <h2 className="font-serif text-bark text-4xl sm:text-5xl">
            Where to buy
          </h2>
          <p className="text-bark/60 max-w-md leading-relaxed">
            Vermont adult-use cannabis. Available at licensed dispensaries.
            Must be 21+.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {retailers.map((r) => (
            <div
              key={r.name}
              className="bg-cream rounded p-8 flex flex-col gap-4 border border-bark/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-bark text-2xl">{r.name}</h3>
                  <p className="text-bark/50 text-sm mt-1">{r.location}</p>
                </div>
                <span
                  className={`shrink-0 text-xs font-medium px-2 py-1 rounded ${
                    r.status === "available"
                      ? "bg-moss/15 text-moss"
                      : "bg-bark/10 text-bark/50"
                  }`}
                >
                  {r.status === "available" ? "In stock" : "Coming soon"}
                </span>
              </div>
              <p className="text-bark/60 text-sm leading-relaxed flex-1">
                {r.description}
              </p>
              {r.link && (
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-moss hover:text-amber text-sm font-medium transition-colors"
                >
                  Shop online →
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-bark/40 text-xs text-center mt-12">
          Follow{" "}
          <a
            href="https://instagram.com/pilin_it_higher_farms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-bark/60 transition-colors"
          >
            @pilin_it_higher_farms
          </a>{" "}
          for real-time availability updates.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function SiteFooter() {
  return (
    <footer className="bg-bark text-smoke/60 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-smoke/10">
          <div className="flex flex-col gap-2">
            <span className="font-serif italic text-cream text-xl">
              Pilin&#39; It Higher Farms
            </span>
            <span className="text-smoke/40 text-sm">
              Duxbury, Vermont · Solar-powered · Living soil
            </span>
          </div>
          <div className="flex flex-col gap-1 text-sm max-w-sm">
            <p>
              Vermont Tier 2 Cannabis Cultivator licensed by the Vermont Cannabis Control Board.
            </p>
            <p className="text-smoke/40">
              All products grown at our facility in Duxbury, VT. Available at licensed Vermont dispensaries only.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 text-xs text-smoke/30">
          <p>© {new Date().getFullYear()} Pilin&#39; It Higher Farms. All rights reserved.</p>
          <p className="font-medium text-smoke/50">
            Must be 21 or older to purchase cannabis products.
          </p>
        </div>
      </div>
    </footer>
  );
}
