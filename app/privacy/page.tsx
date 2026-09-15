import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
    title: "Politica de Confidențialitate - OCN Ideal Credit SRL",
    description:
        "Află cum colectăm, stocăm și protejăm datele tale personale conform legislației GDPR și normelor moldovenești. Drepturile tale ca utilizator Ideal Credit.",
    alternates: { canonical: "https://idealcredit.md/privacy" },
};

export default function PrivacyPage() {
    return (
        <LegalLayout
            title={
                <>
                    Politica de Confidențialitate
                    <br />
                    OCN Ideal Credit SRL
                </>
            }
            updated="Această Politică de Confidențialitate a fost actualizată ultima dată la 26.07.2024."
        >
            <h2>Introducere</h2>
            <p>
                OCN Ideal Credit SRL, cu sediul principal în or.Căușeni, str. Mihai Eminescu nr. 17, of. 47, Republica Moldova, se
                angajează să protejeze confidențialitatea datelor dumneavoastră personale.
            </p>

            <h2>Informațiile pe care le colectăm</h2>
            <ol>
                <li>Date de identificare: nume, prenume, data nașterii, adresă, număr de telefon, adresă de e-mail.</li>
                <li>Date financiare: venituri, cheltuieli, istoricul creditelor, situația datoriilor.</li>
                <li>Date privind tranzacțiile: istoricul împrumuturilor și plăților efectuate prin intermediul serviciilor noastre.</li>
                <li>Date tehnice: adresa IP, tipul și versiunea browserului, sistemul de operare.</li>
            </ol>

            <h2>Scopurile prelucrării datelor</h2>
            <ol>
                <li>Pentru a vă furniza serviciile noastre de creditare.</li>
                <li>Pentru a evalua eligibilitatea dumneavoastră pentru produsele noastre financiare.</li>
                <li>Pentru a preveni frauda și a gestiona riscurile.</li>
                <li>Pentru a respecta obligațiile noastre legale și de reglementare.</li>
                <li>Pentru a îmbunătăți serviciile noastre și experiența utilizatorilor.</li>
            </ol>

            <h2>Temeiul juridic pentru prelucrarea datelor</h2>
            <ol>
                <li>Executarea unui contract la care sunteți parte.</li>
                <li>Respectarea unei obligații legale.</li>
                <li>Interesele noastre legitime.</li>
                <li>Consimțământul dumneavoastră, în cazurile specificate.</li>
            </ol>

            <h2>Drepturile dumneavoastră</h2>
            <ol>
                <li>Dreptul de acces la datele dumneavoastră personale.</li>
                <li>Dreptul la rectificarea datelor inexacte.</li>
                <li>Dreptul la ștergerea datelor (&quot;dreptul de a fi uitat&quot;).</li>
                <li>Dreptul la restricționarea prelucrării.</li>
                <li>Dreptul la portabilitatea datelor.</li>
                <li>Dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automată.</li>
            </ol>
            <p>
                Pentru a vă exercita aceste drepturi, vă rugăm să ne contactați la{" "}
                <a href="mailto:info@idealcredit.md">info@idealcredit.md</a>.
            </p>

            <h2>Securitatea datelor</h2>
            <p>
                Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră personale împotriva
                accesului neautorizat, modificării, divulgării sau distrugerii.
            </p>

            <h2>Contact</h2>
            <p>
                OCN Ideal Credit SRL,
                <br />
                or.Căușeni, str. Mihai Eminescu, nr. 17, of. 47
                <br />
                email: info@idealcredit.md
                <br />
                tel: 068270101, 061252777
            </p>
        </LegalLayout>
    );
}
