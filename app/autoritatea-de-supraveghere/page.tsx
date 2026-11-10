import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import Figure from "@/components/ds/Figure";
import Note from "@/components/ds/Note";

export const metadata: Metadata = {
    title: "Autoritatea de supraveghere | Ideal Credit",
    description:
        "Activitatea OCN Ideal Credit SRL o supraveghează Banca Națională a Moldovei și CNPF. Contactele lor și cum depui o reclamație.",
    alternates: { canonical: "https://idealcredit.md/autoritatea-de-supraveghere" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/autoritatea-de-supraveghere",
        title: "Autoritatea de supraveghere | Ideal Credit",
        description:
            "Activitatea OCN Ideal Credit SRL o supraveghează Banca Națională a Moldovei și CNPF. Contactele lor și cum depui o reclamație.",
    },
};

export default function AutoritateaPage() {
    return (
        <LegalLayout path="/autoritatea-de-supraveghere" title="Autoritatea de supraveghere">
            <p className="text-lg text-dc-text">
                Activitatea OCN Ideal Credit SRL este supravegheată de <strong>Banca Națională a Moldovei (BNM)</strong> și de{" "}
                <strong>Comisia Națională a Pieței Financiare (CNPF)</strong>. O reclamație o poți depune la oricare dintre ele.
            </p>
            <p>
                Înainte de asta, te rugăm să ne scrii la info@idealcredit.md sau la oricare oficiu. Răspundem în cel mult 15 zile.
            </p>

            <h2>Banca Națională a Moldovei (BNM)</h2>
            <p>
                Adresa: <strong>MD-2005, mun. Chișinău, bd. Grigore Vieru 1.</strong>
                <br />
                Pagina web:{" "}
                <a href="https://www.bnm.md" target="_blank" rel="nofollow noreferrer">
                    www.bnm.md
                </a>
                <br />
                E-mail: <strong>official@bnm.md</strong>
                <br />
                Telefon: <strong>(+373 22) 822 370</strong>, luni–vineri, 8:00–17:00
            </p>
            <p>Petiția la BNM o depui:</p>
            <ul>
                <li>pe e-mail, la official@bnm.md, în format PDF cu semnătură electronică calificată;</li>
                <li>prin poștă, la adresa de mai sus;</li>
                <li>la sediul BNM.</li>
            </ul>
            <p>
                Detalii:{" "}
                <a href="https://www.bnm.md/ro/content/informatii-privind-depunerea-petitiilor" target="_blank" rel="nofollow noreferrer">
                    cum depui o petiție la BNM
                </a>
                .
            </p>

            <h2>Comisia Națională a Pieței Financiare (CNPF)</h2>

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

            <p>Reclamația la CNPF o depui:</p>
            <ul>
                <li>pe e-mail, cu semnătură electronică;</li>
                <li>prin poștă;</li>
                <li>la sediul CNPF, în cutia poștală de la intrare.</li>
            </ul>

            <div className="mt-10 flex flex-col gap-3 border border-dc-line bg-dc-surface p-6 sm:p-9">
                <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">Telefonul consumatorului CNPF*</p>
                <a href="tel:+37322859595">
                    <Figure size="lg">(+373 22) 85 95 95</Figure>
                </a>
                <Note className="mt-2 max-w-md">
                    * Tariful către acest număr de apel va fi considerat apel cu tarif normal conform rețelei și tipului de abonament al
                    inițiatorului.
                </Note>
            </div>
        </LegalLayout>
    );
}
