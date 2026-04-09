"use client";

import Image from "next/image";
import { Star } from "lucide-react";

type TextReview = { kind: "text"; name: string; text: string };
type ImageReview = { kind: "image"; image: string };
type Review = TextReview | ImageReview;

const reviews: Review[] = [
  {
    kind: "text",
    name: "Alexandru, Chișinău",
    text: "Mulțumesc! Am primit creditul în 24 de ore, fără bătăi de cap. Echipa a fost foarte profesionistă.",
  },
  {
    kind: "text",
    name: "Maria, Antreprenoare",
    text: "Sunt recunoscătoare pentru transparență. Fără comisioane ascunse, dobânda a fost negociată și am putut investi în afacere.",
  },
  { kind: "image", image: "/recenzii/ideal-credit-recenzie-1.webp" },
  {
    kind: "text",
    name: "Elena",
    text: "Sunt foarte mulțumită. Am luat credit de consum cu dobândă bună și am renovat bucătăria cum îmi doream.",
  },
  { kind: "image", image: "/recenzii/ideal-credit-recenzie-2.webp" },
  {
    kind: "text",
    name: "Victor",
    text: "Mulțumesc Ideal Credit — banca m-a refuzat, dar voi m-ați ajutat în 2 zile să cumpăr mașina dorită.",
  },
  { kind: "image", image: "/recenzii/ideal-credit-recenzie-3.webp" },
  {
    kind: "text",
    name: "Ion, Proprietar magazin",
    text: "Am modernizat magazinul în 3 luni. Proces simplu, dobândă fixă și consultanță. Sunt recunoscător.",
  },
  {
    kind: "text",
    name: "Ana",
    text: "Am cumpărat utilaje în 2 zile și asta ne-a ajutat să creștem. Mulțumim pentru sprijin!",
  },
];

function GoogleBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/60">
      <svg width="10" height="10" viewBox="0 0 48 48" aria-hidden>
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C33.9 6.5 29.2 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.3-3.5z" />
        <path fill="#FF3D00" d="M6.3 14.1l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C33.9 6.5 29.2 4.5 24 4.5 16.4 4.5 9.9 8.9 6.3 14.1z" />
        <path fill="#4CAF50" d="M24 43.5c5.2 0 9.8-2 13.3-5.2l-6.1-5.2C29.2 34.8 26.7 36 24 36c-5.2 0-9.7-3.3-11.3-7.9l-6.5 5C9.7 39.1 16.3 43.5 24 43.5z" />
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.1 5.2C41.1 35.5 43.5 30.2 43.5 24c0-1.2-.1-2.3-.3-3.5z" />
      </svg>
      Google
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[320px] shrink-0 rounded-2xl border border-white/5 bg-black-600/70 p-5 hover:border-white/15 transition-colors">
      {review.kind === "image" ? (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={14} className="text-brand-500 fill-current" />
              ))}
            </div>
            <GoogleBadge />
          </div>
          <Image
            src={review.image}
            alt="Recenzie client despre Ideal Credit"
            width={300}
            height={200}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} size={14} className="text-brand-500 fill-current" />
            ))}
          </div>
          <p className="text-sm text-white/70 leading-relaxed line-clamp-4">"{review.text}"</p>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
            <span className="text-sm font-medium text-white">{review.name}</span>
            <span className="text-[10px] uppercase tracking-wider text-white/40">Client verificat</span>
          </div>
        </div>
      )}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 50,
}: {
  items: Review[];
  reverse?: boolean;
  duration?: number;
}) {
  // Duplicate enough times so track width > viewport for smooth loop
  const doubled = [...items, ...items];
  return (
    <div className="marquee py-3">
      <div
        className="marquee-track"
        data-reverse={reverse || undefined}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {doubled.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>
    </div>
  );
}

export default function RecenziiClient() {
  const rowA = reviews.filter((_, i) => i % 2 === 0);
  const rowB = reviews.filter((_, i) => i % 2 === 1);

  return (
    <div>
      <h2 className="title text-center">Ce spun clienții noștri?</h2>

      {/* Full-bleed wrapper to escape the container's max-w-5xl */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div
          className="relative"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
          }}
        >
          <MarqueeRow items={rowA} duration={55} />
          <MarqueeRow items={rowB} reverse duration={70} />
        </div>
      </div>
    </div>
  );
}
