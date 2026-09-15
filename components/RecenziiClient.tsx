import { Star } from "lucide-react";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import Figure from "@/components/ds/Figure";

const reviews = [
    {
        category: "Nevoi personale",
        name: "Alexandru, Chișinău",
        text: "Am primit creditul în 24 de ore, fără bătăi de cap. Echipa a fost foarte profesionistă.",
    },
    {
        category: "Afaceri mici",
        name: "Maria, antreprenoare",
        text: "Sunt recunoscătoare pentru transparență. Fără comisioane ascunse, dobânda a fost negociată și am putut investi în afacere.",
    },
    {
        category: "Investițional",
        name: "Ion, proprietar magazin",
        text: "Am modernizat magazinul în 3 luni. Proces simplu, dobândă fixă și consultanță. Sunt recunoscător.",
    },
];

export default function RecenziiClient() {
    return (
        <div className="dc-section">
            <Container>
                <figure className="max-w-[900px]">
                    <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                        <span className="mt-[1px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                        Recenzii ·{" "}
                        <span className="inline-flex items-center gap-1.5 text-dc-proof">
                            <Star size={12} strokeWidth={2.5} className="shrink-0 fill-dc-proof" aria-hidden />
                            <Figure size="ordinal" proof>
                                4,9 / 5
                            </Figure>
                        </span>
                    </p>
                    <p className="mt-7 text-balance text-[clamp(34px,4vw,50px)] font-semibold leading-[1.16] tracking-[-.03em] text-dc-text">
                        „Banca m-a refuzat, dar voi m-ați ajutat <Accent>în 2 zile</Accent> să cumpăr mașina dorită.”
                    </p>
                    <figcaption className="mt-6 text-xs tracking-[.06em] text-dc-text-muted">— VICTOR</figcaption>
                </figure>

                <div className="mt-14 grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    {reviews.map((review) => (
                        <figure key={review.name} className="dc-cell flex flex-col gap-[18px] p-8">
                            <figcaption className="text-xs uppercase tracking-[.1em] text-dc-text-muted">{review.category}</figcaption>
                            <p className="text-[17px] leading-[1.6] text-dc-text">„{review.text}”</p>
                            <p className="mt-auto text-xs text-dc-text-muted">— {review.name}</p>
                        </figure>
                    ))}
                </div>
            </Container>
        </div>
    );
}
