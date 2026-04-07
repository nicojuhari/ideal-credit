import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politica de Confidențialitate - OCN Ideal Credit SRL",
    description: "Politica de Confidențialitate - OCN Ideal Credit SRL",
};

export default function PrivacyPage() {
    return (
        <div className="container sm-container my-6">
            <div className="card space-y-4 text-lg">
                <h1 className="card-title text-center">
                    Politica de Confidențialitate
                    <br />
                    OCN Ideal Credit SRL
                </h1>

                <h2 className="text-xl mt-8 mb-2">Introducere</h2>
                <p>
                    OCN Ideal Credit SRL, cu sediul principal în or.Căușeni, str.Mihai Eminescu nr.17, of.47, Republica Moldova, se
                    angajează să protejeze confidențialitatea datelor dumneavoastră personale.
                </p>

                <h2 className="text-xl mt-8 mb-2">Informațiile pe care le colectăm</h2>
                <ul className="list-inside list-decimal space-y-2.5 mt-2">
                    <li>Date de identificare: nume, prenume, data nașterii, adresă, număr de telefon, adresă de e-mail.</li>
                    <li>Date financiare: venituri, cheltuieli, istoricul creditelor, situația datoriilor.</li>
                    <li>Date privind tranzacțiile: istoricul împrumuturilor și plăților efectuate prin intermediul serviciilor noastre.</li>
                    <li>Date tehnice: adresa IP, tipul și versiunea browserului, sistemul de operare.</li>
                </ul>

                <h2 className="text-xl mt-8 mb-2">Scopurile prelucrării datelor</h2>
                <ul className="list-inside list-decimal space-y-2.5 mt-2">
                    <li>Pentru a vă furniza serviciile noastre de creditare.</li>
                    <li>Pentru a evalua eligibilitatea dumneavoastră pentru produsele noastre financiare.</li>
                    <li>Pentru a preveni frauda și a gestiona riscurile.</li>
                    <li>Pentru a respecta obligațiile noastre legale și de reglementare.</li>
                    <li>Pentru a îmbunătăți serviciile noastre și experiența utilizatorilor.</li>
                </ul>

                <h2 className="text-xl mt-8 mb-2">Temeiul juridic pentru prelucrarea datelor</h2>
                <ul className="list-inside list-decimal space-y-2.5 mt-2">
                    <li>Executarea unui contract la care sunteți parte.</li>
                    <li>Respectarea unei obligații legale.</li>
                    <li>Interesele noastre legitime.</li>
                    <li>Consimțământul dumneavoastră, în cazurile specificate.</li>
                </ul>

                <h2 className="text-xl mt-8 mb-2">Drepturile dumneavoastră</h2>
                <ul className="list-inside list-decimal space-y-2.5 mt-2">
                    <li>Dreptul de acces la datele dumneavoastră personale.</li>
                    <li>Dreptul la rectificarea datelor inexacte.</li>
                    <li>Dreptul la ștergerea datelor (&quot;dreptul de a fi uitat&quot;).</li>
                    <li>Dreptul la restricționarea prelucrării.</li>
                    <li>Dreptul la portabilitatea datelor.</li>
                    <li>Dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automată.</li>
                </ul>
                <p>
                    Pentru a vă exercita aceste drepturi, vă rugăm să ne contactați la{" "}
                    <a href="mailto:info@idealcredit.md" className="link">
                        info@idealcredit.md
                    </a>
                    .
                </p>

                <h2 className="text-xl mt-8 mb-2">Securitatea datelor</h2>
                <p>
                    Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră personale împotriva
                    accesului neautorizat, modificării, divulgării sau distrugerii.
                </p>

                <h2 className="text-xl mt-8 mb-2">Contact</h2>
                <div className="mt-2">
                    OCN Ideal Credit SRL,
                    <br />
                    or.Căușeni, str.Mihai Eminescu, nr.17, of.47
                    <br />
                    email: info@idealcredit.md
                    <br />
                    tel: 079066566, 078805060
                </div>

                <p className="mt-8 text-gray-400">Această Politică de Confidențialitate a fost actualizată ultima dată la 26.07.2024.</p>
            </div>
        </div>
    );
}
