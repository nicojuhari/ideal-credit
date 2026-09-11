import Image from "next/image";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";

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
        text: "Mulțumesc Ideal Credit - banca m-a refuzat, dar voi m-ați ajutat în 2 zile să cumpăr mașina dorită.",
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

function TextCard({ review }: { review: TextReview }) {
    return (
        <figure className="flex flex-col gap-4 rounded-dc-card border border-dc-line bg-dc-surface p-7">
            <figcaption className="text-xs font-semibold uppercase tracking-widest text-dc-text-dim">{review.badge}</figcaption>
            <p className="text-base leading-[1.6] text-dc-text">„{review.text}”</p>
            <p className="mt-auto text-sm text-dc-text-dim">— {review.name}</p>
        </figure>
    );
}

function ImageCard({ review }: { review: ImageReview }) {
    return (
        <figure className="flex flex-col gap-4 rounded-dc-card border border-dc-line bg-dc-surface p-7">
            <figcaption className="text-xs font-semibold uppercase tracking-widest text-dc-text-dim">{review.badge}</figcaption>
            <Image
                src={review.image}
                alt="Recenzie client despre Ideal Credit"
                width={400}
                height={300}
                className="w-full h-auto rounded-dc-control"
            />
        </figure>
    );
}

export default function RecenziiClient() {
    return (
        <section className="dc-section">
            <Container>
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="flex flex-col gap-3.5 max-w-[640px]">
                        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.1] tracking-[-.025em] text-dc-text">
                            Ce spun <Accent>clienții</Accent> noștri?
                        </h2>
                    </div>
                    <p className="text-sm">
                        <span className="font-bold text-dc-text">4.9 ★</span>{" "}
                        <span className="text-dc-text-dim">· Direct, Google, Viber, Facebook</span>
                    </p>
                </div>

                <div className="mt-14 grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                    {reviews.map((review, i) => (review.kind === "text" ? <TextCard key={i} review={review} /> : <ImageCard key={i} review={review} />))}
                </div>
            </Container>
        </section>
    );
}
