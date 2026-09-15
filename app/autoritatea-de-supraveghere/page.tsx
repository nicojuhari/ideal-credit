import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import Figure from "@/components/ds/Figure";
import Note from "@/components/ds/Note";

export const metadata: Metadata = {
    title: "Autoritatea de supraveghere a O.C.N. Ideal Credit SRL",
    description: "Autoritatea de supraveghere a O.C.N. Ideal Credit SRL este Comisia Națională a Pieței Financiare.",
    alternates: { canonical: "https://idealcredit.md/autoritatea-de-supraveghere" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/autoritatea-de-supraveghere",
        title: "Autoritatea de supraveghere a O.C.N. Ideal Credit SRL",
        description: "Autoritatea de supraveghere a O.C.N. Ideal Credit SRL este Comisia Națională a Pieței Financiare.",
    },
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

            <div className="mt-10 flex flex-col items-center gap-3 border border-dc-line bg-dc-surface py-10 text-center">
                <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">Telefonul consumatorului*</p>
                <a href="tel:+37322859595">
                    <Figure size="lg">(+373 22) 85 95 95</Figure>
                </a>
                <Note className="mt-2 max-w-md px-6">
                    * Tariful către acest număr de apel va fi considerat apel cu tarif normal conform rețelei și tipului de abonament al
                    inițiatorului.
                </Note>
            </div>
        </LegalLayout>
    );
}
