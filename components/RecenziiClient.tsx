"use client";

import Image from "next/image";
import { Star } from "lucide-react";

type TextReview = { kind: "text"; badge: string; name: string; text: string };
type ImageReview = { kind: "image"; badge: string; image: string };
type Review = TextReview | ImageReview;

const reviews: Review[] = [
    {
        kind: "text",
        badge: "Direct",
        name: "Alexandru, Chișinău",
        text: "Mulțumesc! Am primit creditul în 24 de ore, fără bătăi de cap. Echipa a fost foarte profesionistă.",
    },
    {
        kind: "text",
        badge: "Direct",
        name: "Maria, Antreprenoare",
        text: "Sunt recunoscătoare pentru transparență. Fără comisioane ascunse, dobânda a fost negociată și am putut investi în afacere.",
    },
    { kind: "image", badge: "Google", image: "/recenzii/ideal-credit-recenzie-1.webp" },
    {
        kind: "text",
        badge: "Direct",
        name: "Elena",
        text: "Sunt foarte mulțumită. Am luat credit de consum cu dobândă bună și am renovat bucătăria cum îmi doream.",
    },
    { kind: "image", badge: "Viber", image: "/recenzii/ideal-credit-recenzie-2.webp" },
    {
        kind: "text",
        badge: "Direct",
        name: "Victor",
        text: "Mulțumesc Ideal Credit — banca m-a refuzat, dar voi m-ați ajutat în 2 zile să cumpăr mașina dorită.",
    },
    { kind: "image", badge: "Facebook", image: "/recenzii/ideal-credit-recenzie-3.webp" },
    {
        kind: "text",
        badge: "Direct",
        name: "Ion, Proprietar magazin",
        text: "Am modernizat magazinul în 3 luni. Proces simplu, dobândă fixă și consultanță. Sunt recunoscător.",
    },
    {
        kind: "text",
        badge: "Google",
        name: "Ana",
        text: "Am cumpărat utilaje în 2 zile și asta ne-a ajutat să creștem. Mulțumim pentru sprijin!",
    },
];

function GoogleBadge() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/60">
            <svg width="10" height="10" viewBox="0 0 48 48" aria-hidden>
                <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C33.9 6.5 29.2 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.3-3.5z"
                />
                <path
                    fill="#FF3D00"
                    d="M6.3 14.1l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C33.9 6.5 29.2 4.5 24 4.5 16.4 4.5 9.9 8.9 6.3 14.1z"
                />
                <path
                    fill="#4CAF50"
                    d="M24 43.5c5.2 0 9.8-2 13.3-5.2l-6.1-5.2C29.2 34.8 26.7 36 24 36c-5.2 0-9.7-3.3-11.3-7.9l-6.5 5C9.7 39.1 16.3 43.5 24 43.5z"
                />
                <path
                    fill="#1976D2"
                    d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.1 5.2C41.1 35.5 43.5 30.2 43.5 24c0-1.2-.1-2.3-.3-3.5z"
                />
            </svg>
            Google
        </span>
    );
}

function ViberBadge() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/60">
            <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden>
                <path
                    fill="#665CAC"
                    d="M17.472 3.082A9.956 9.956 0 0 0 2.929 17.65l-1.414 4.1a1 1 0 0 0 1.293 1.293l4.1-1.414A9.956 9.956 0 0 0 20.918 6.528a9.936 9.936 0 0 0-3.446-3.446zM12.001 19a7.001 7.001 0 0 1-3.95-1.306l-.282-.168-2.43.837.817-2.37-.168-.282A7.001 7.001 0 0 1 5 12c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7z"
                />
            </svg>
            Viber
        </span>
    );
}

function FacebookBadge() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/60">
            <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden>
                <path
                    fill="#1877F2"
                    d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.794 .143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
                />
            </svg>
            Facebook
        </span>
    );
}

function DirectBadge() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/60">
            Direct
        </span>
    );
}

function Stars() {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={14} className="text-brand-500/80 fill-current" />
            ))}
        </div>
    );
}

function TextCard({ review }: { review: TextReview }) {
    return (
        <div className="rounded-xl border border-white/5 bg-black-600/70 p-5 hover:border-white/15 transition-colors break-inside-avoid mb-4">
            <div className="flex items-center justify-between mb-3">
                <Stars />
                {review.badge === "Google" ? (
                    <GoogleBadge />
                ) : review.badge === "Viber" ? (
                    <ViberBadge />
                ) : review.badge === "Facebook" ? (
                    <FacebookBadge />
                ) : (
                    <DirectBadge />
                )}
            </div>
            <p className="text-sm text-white/90 leading-relaxed font-light">{review.text}</p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-sm text-white/50">{review.name}</span>
            </div>
        </div>
    );
}

function ImageCard({ review }: { review: ImageReview }) {
    return (
        <div className="rounded-xl border border-white/5 bg-black-600/70 p-3 hover:border-white/15 transition-colors break-inside-avoid mb-4">
            <div className="flex items-center justify-between mb-3 px-2 pt-1">
                <Stars />
                {review.badge === "Google" ? (
                    <GoogleBadge />
                ) : review.badge === "Viber" ? (
                    <ViberBadge />
                ) : review.badge === "Facebook" ? (
                    <FacebookBadge />
                ) : (
                    <DirectBadge />
                )}
            </div>
            <Image
                src={review.image}
                alt="Recenzie client despre Ideal Credit"
                width={400}
                height={300}
                className="rounded-lg w-full h-auto object-cover"
            />
        </div>
    );
}

export default function RecenziiClient() {
    return (
        <div>
            <h2 className="title text-center">Ce spun clienții noștri?</h2>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                {reviews.map((review, i) =>
                    review.kind === "text" ? <TextCard key={i} review={review} /> : <ImageCard key={i} review={review} />,
                )}
            </div>
        </div>
    );
}
