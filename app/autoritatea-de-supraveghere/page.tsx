import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
    title: "Autoritatea de supraveghere a O.C.N. Ideal Credit SRL",
    description: "Autoritatea de supraveghere a O.C.N. Ideal Credit SRL este Comisia Națională a Pieței Financiare.",
    robots: { index: false, follow: false },
    alternates: { canonical: "https://idealcredit.md/autoritatea-de-supraveghere" },
};

export default function AutoritateaPage() {
    return (
        <LegalLayout title="Autoritatea de supraveghere">
            <p className="text-center text-lg text-dc-text">
                Autoritatea de supraveghere a O.C.N. Ideal Credit SRL este{" "}
                <strong>Comisia Națională a Pieței Financiare.</strong>
            </p>

            <h2>Contactele instituției</h2>
            <p>
                Adresa de contact: <strong>mun. Chișinău, bd. Ștefan cel Mare și Sfânt, nr. 77.</strong>
                <br />
                Pagina web:{" "}
                <a href="https://www.cnpf.md" target="_blank" rel="nofollow noreferrer">
                    www.cnpf.md
                </a>
                <br />
                E-mail: <strong>office@cnpf.md</strong>
            </p>

            <h2>Reclamațiile pot fi depuse</h2>
            <ul>
                <li>
                    prin e-mail (cu respectarea reglementărilor cu privire la forma electronică - cu aplicarea semnăturii electronice);
                </li>
                <li>prin intermediul oficiilor poștale;</li>
                <li>la sediul CNPF, în cutia poștală amplasată la intrare în sediul instituției;</li>
            </ul>

            <div className="mt-10 flex flex-col items-center gap-2 rounded-dc-card border border-dc-line bg-dc-surface py-8 text-center">
                <p className="text-sm text-dc-text-muted">Telefonul consumatorului*</p>
                <a href="tel:+37322859595" className="text-3xl font-bold text-dc-accent">
                    (+373 22) 85 95 95
                </a>
                <p className="mt-3 max-w-md px-6 text-xs italic text-dc-text-dim">
                    * Tariful către acest număr de apel va fi considerat apel cu tarif normal conform rețelei și tipului de abonament al
                    inițiatorului.
                </p>
            </div>
        </LegalLayout>
    );
}
