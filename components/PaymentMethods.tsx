import Link from "next/link";
import Section from "@/components/ds/Section";
import Card from "@/components/ds/Card";
import Accent from "@/components/ds/Accent";

type Method = { label: string; title: string; description: React.ReactNode };

const methods: Method[] = [
    {
        label: "Recomandat",
        title: "Online Banking",
        description: "Transfer bancar/de pe card pe contul IBAN al Ideal Credit.",
    },
    {
        label: "Oficiu",
        title: "În numerar",
        description: (
            <>
                În unul din{" "}
                <Link href="/contacte#adresa-oficiilor" className="underline underline-offset-[3px] hover:text-white">
                    oficiile companiei
                </Link>{" "}
                Ideal Credit.
            </>
        ),
    },
    {
        label: "Bancă",
        title: "VictoriaBank",
        description: "La orice filială a băncii VictoriaBank din țară.",
    },
    {
        label: "Poștă",
        title: "Oficiu poștal",
        description: "La orice oficiu poștal din Republica Moldova.",
    },
];

export default function PaymentMethods() {
    return (
        <Section
            title={
                <>
                    Metode de <Accent>achitare</Accent> a creditului
                </>
            }
        >
            <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                {methods.map((method) => (
                    <Card key={method.title} className="gap-3 p-7">
                        <p className="text-xs font-semibold uppercase tracking-widest text-dc-text-dim">{method.label}</p>
                        <h3 className="text-[19px] font-bold text-dc-text">{method.title}</h3>
                        <p className="text-sm text-dc-text-muted leading-relaxed">{method.description}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
