"use client";

const REELS = [
  { id: "DNdUq3hAYnv" },
  { id: "DKrbAoyAL5q" },
  { id: "DITxU7tuyCD" },
];

export default function InstagramReels() {
  return (
    <div className="mt-16 pt-16 border-t border-smoke/10">
      <p className="text-amber text-xs tracking-[0.2em] uppercase mb-8 text-center">
        Live from @theeddmusic
      </p>
      <div className="grid sm:grid-cols-3 gap-6">
        {REELS.map(({ id }) => (
          <div key={id} className="aspect-[9/16] w-full">
            <iframe
              src={`https://www.instagram.com/reel/${id}/embed/`}
              className="w-full h-full border-0 rounded"
              allowFullScreen
              loading="lazy"
              title="The Edd on Instagram"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
