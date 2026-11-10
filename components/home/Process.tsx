import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import { sectionTitle } from "@/components/ds/SplitSection";
import { cn } from "@/lib/utils";

type Step = { meta: string; title: string; body: string };

const steps: Step[] = [
    { meta: "15 minute", title: "Discutăm la telefon", body: "Ne suni sau lași numărul. Vorbim despre ce vrei să faci cu banii." },
    { meta: "De acasă", title: "Trimiți actele", body: "Le trimiți pe e-mail, WhatsApp sau Viber. Nu trebuie să vii la oficiu." },
    {
        meta: "După ce avem actele",
        title: "Primești decizia",
        body: "Pentru afaceri, decizia vine în 1–2 zile lucrătoare. Pentru persoane fizice, în 2–3 ore.",
    },
    {
        meta: "O singură vizită",
        title: "Semnezi la oficiu",
        body: "Contractul îl semnezi la oficiul din Căușeni sau din Chișinău. Companiile primesc banii pe cont. Persoanele fizice îi pot primi și în numerar.",
    },
];

// Shared by the home page and every credit page.
export default function Process() {
    return (
        <section className="dc-section">
            <Container>
                <h2 className={cn(sectionTitle, "max-w-[16ch]")}>
                    De la primul telefon până la <Accent>bani în cont.</Accent>
                </h2>

                <ol className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:mt-20 lg:grid-cols-4 lg:gap-x-8">
                    {steps.map((s, i) => (
                        <li
                            key={s.title}
                            className={cn(
                                "border-l-2 pl-5 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-7",
                                i === 0 ? "border-dc-accent" : "border-[#3a3a3a]",
                            )}
                        >
                            <p className="flex items-baseline gap-3">
                                <span className="font-dc-mono text-sm text-dc-accent">{String(i + 1).padStart(2, "0")}</span>
                                <span className="text-sm font-medium text-dc-text-muted">{s.meta}</span>
                            </p>
                            <h3 className="mt-3 text-[22px] font-semibold leading-tight tracking-[-.02em] text-dc-text">{s.title}</h3>
                            <p className="mt-3 text-[17px] leading-[1.6] text-[#c4c4c4]">{s.body}</p>
                        </li>
                    ))}
                </ol>

                <p className="mt-12 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-dc-line pt-6 text-[17px] lg:mt-20">
                    <span className="font-semibold text-dc-text">Ratele le plătești cum îți este comod:</span>
                    <span className="text-[#c4c4c4]">prin transfer bancar, din aplicația de pe telefon, la poștă sau la oficiile noastre.</span>
                </p>
            </Container>
        </section>
    );
}
