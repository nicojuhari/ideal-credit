import type { Metadata } from "next";
import Link from "next/link";
import RegulamenteList from "@/components/RegulamenteList";
import CallToAction from "@/components/CallToAction";
import { localBusinessChisinauSchema, localBusinessCauseniSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Despre noi | Ideal Credit - Companie de creditare",
  description:
    "Ideal Credit este o organizație de creditare nebancară ce oferă credite cu dobânzi avantajoase și fără comisioane pentru nevoi personale și afaceri.",
  alternates: { canonical: "https://idealcredit.md/despre-noi" },
};

export default function DespreNoiPage() {
  const experience = new Date().getFullYear() - 2010;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessChisinauSchema, localBusinessCauseniSchema]),
        }}
      />
      <div className="my-4 md:my-6">
        <div className="container">
          <div className="card">
            <h1 className="card-title text-center">Despre noi</h1>
            <div className="text-lg space-y-4">
              <p>Ideal Credit SRL activează din 2010.</p>
              <p>
                Avem peste{" "}
                <span className="text-brand-500">{experience} ani </span>
                experiență în{" "}
                <Link href="/" title="Credite nebancare" className="link">
                  credite nebancare.
                </Link>
              </p>
              <p>Am ajutat sute de persoane fizice și companii să obțină finanțare rapidă și transparentă.</p>

              <h2 className="pt-6 text-2xl">Misiunea noastră</h2>
              <p>Să susținem creșterea economică a Moldovei prin soluții financiare simple și corecte. Ne concentrăm pe rezultate reale pentru clienți - nu pe termeni ascunși.</p>

              <h2 className="pt-6 text-2xl">Ce ne diferențiază</h2>
              <ul className="list-disc list-inside">
                <li>Expertiză locală - știm exact nevoile antreprenorilor și familiilor din Moldova.</li>
                <li>Proces rapid - decizie în 1 - 3 ore.</li>
                <li>Documentație minimă - buletin și adeverință de venit sau certificat de înregistrare pentru firme.</li>
                <li>Transparență totală - fără comisioane ascunse; toate costurile sunt comunicate din start.</li>
                <li>Consultanță gratuită - te ghidăm pas cu pas, de la analiză până la semnarea contractului.</li>
              </ul>

              <h2 className="pt-6 text-2xl">Ce oferim (pe scurt)</h2>
              <p>
                <Link href="/credite/credit-pentru-nevoi-personale" title="Credit pentru nevoi personale" className="link">
                  Credite pentru nevoi personale
                </Link>{" "}
                - pentru electrocasnice, mașină, tratamente medicale, cheltuieli urgente sau pînă la salariu.
              </p>
              <p>
                <Link href="/credite/credit-pentru-afaceri-mici" title="Credit pentru afaceri mici" className="link">
                  Credite pentru afaceri
                </Link>{" "}
                - pentru echipamente sau tehnologie, capital de lucru sau refinanțare, modernizare sau extindere.
              </p>

              <h2 className="pt-6 text-2xl">Angajamentul nostru</h2>
              <p>Să oferim un serviciu prietenos și profesionist. Condiții clare. Suport real pe termen lung.</p>

              <h3 className="pt-6">Alege Ideal Credit - finanțare simplă, sigură și rapidă.</h3>

              <CallToAction className="py-8" />
            </div>
          </div>
        </div>

        <div className="container mt-4 md:mt-6">
          <RegulamenteList />
        </div>

        <div className="container mt-4 md:mt-6">
          <div className="card">
            <h3 className="text-center title mb-8">Rapoarte</h3>
            <div className="flex flex-col gap-6">
              <a href="/raport-audit-2024.pdf" target="_blank" rel="noopener noreferrer" className="link">
                1. Raport de Audit 2024
              </a>
              <a href="/raport-audit-2023.pdf" target="_blank" rel="noopener noreferrer" className="link">
                2. Raport de Audit 2023
              </a>
              <a href="/raport-audit-2022.pdf" target="_blank" rel="noopener noreferrer" className="link">
                3. Raport de Audit 2022
              </a>
            </div>
          </div>
        </div>

        <div className="container mt-4 md:mt-6">
          <div className="card">
            <h3 className="text-center title mb-8">Documente de constituire</h3>
            <div className="flex flex-col gap-6">
              <a
                href="/ideal-credit-certificat-de-inregistrare.pdf"
                title="Certificat de inregistrare Ideal Credit SRL"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Certificat de înregistrare
              </a>
              <a
                href="/ideal-credit-extras-registrul-organizatiilor-de-creditare-nebancare-autorizate.pdf"
                title="Extras din Registrul organizațiilor de creditare nebancare autorizate"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Extras din Registrul organizațiilor de creditare nebancară autorizate
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
