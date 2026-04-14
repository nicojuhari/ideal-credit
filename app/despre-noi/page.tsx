import type { Metadata } from "next";
import Link from "next/link";
import RegulamenteList from "@/components/RegulamenteList";
import CallToAction from "@/components/CallToAction";
import { localBusinessChisinauSchema, localBusinessCauseniSchema } from "@/lib/schema";
import { yearsSinceFoundation } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Despre noi | Ideal Credit - Companie de creditare",
    description:
        "Ideal Credit - instituție financiară nebancară cu peste 16 ani în Moldova. Credite pentru persoane fizice și afaceri, dobândă fixă, fără comisioane ascunse.",
    alternates: { canonical: "https://idealcredit.md/despre-noi" },
};

export default function DespreNoiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessChisinauSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessCauseniSchema) }} />
            <div className="my-4 md:my-6">
                <div className="container">
                    <div className="card">
                        <h1 className="card-title text-center">Despre noi</h1>
                        <div className="text-lg space-y-4">
                            <p>
                                Ideal Credit este o instituție financiară nebancară cu sediul central în Căușeni și sucursală în Chișinău.
                            </p>
                            <p>
                                De peste <span className="text-brand-500">{yearsSinceFoundation} de ani</span> ajutăm oameni și afaceri din
                                Moldova să acceseze{" "}
                                <Link href="/" className="link">
                                    credite clare, corecte și rapide.
                                </Link>
                            </p>
                            <p>Suntem o organizație de creditare nebancară autorizată și supravegheată de CNPF.</p>
                            <p className="text-brand-500 font-medium italic">&quot;Credite avantajoase pentru persoane serioase&quot;</p>

                            <h2 className="pt-6 text-2xl">Ce facem</h2>
                            <p>Oferim finanțare pentru cei care au nevoie de bani - fără birocrație inutilă și fără costuri ascunse.</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <strong>Antreprenori și proprietari de afaceri</strong> - capital de lucru, utilaje, stoc sau extindere
                                </li>
                                <li>
                                    <strong>Persoane fizice</strong> - renovări, cumpărături mari, sănătate sau educație
                                </li>
                                <li>
                                    <strong>Clienți refuzați de bănci</strong> - oferim o analiză flexibilă, adaptată situației tale reale
                                </li>
                            </ul>

                            <h2 className="pt-6 text-2xl">Serviciile noastre</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-xl mb-2">
                                        <Link href="/credite/credit-pentru-nevoi-personale" className="link">
                                            Credite pentru persoane fizice
                                        </Link>
                                    </h3>
                                    <p>
                                        Finanțare pentru renovări, electrocasnice, mașini, cheltuieli medicale sau orice altă nevoie
                                        urgentă.
                                    </p>
                                    <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                                        <li>Aprobare rapidă</li>
                                        <li>Fără costuri ascunse</li>
                                        <li>Suma și rata adaptate la venitul tău</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl mb-2">
                                        <Link href="/credite/credit-pentru-afaceri-mici" className="link">
                                            Credite pentru afaceri
                                        </Link>
                                    </h3>
                                    <p>
                                        Finanțare pentru antreprenori și firme mici care vor să crească fără să aștepte proceduri bancare
                                        lungi.
                                    </p>
                                    <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                                        <li>Bani pentru stoc, utilaje sau modernizare</li>
                                        <li>Analiză rapidă a dosarului</li>
                                        <li>Soluții cu sau fără gaj, în funcție de sumă</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl mb-2">Refinanțare</h3>
                                    <p>
                                        Ai credite scumpe la alte instituții? Le putem închide și le înlocuim cu o singură rată fixă și mai
                                        mică.
                                    </p>
                                    <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                                        <li>O singură plată lunară</li>
                                        <li>Rată mai mică</li>
                                        <li>Mai mult confort financiar</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl mb-2">Consultanță financiară gratuită</h3>
                                    <p>Nu știi ce produs ți se potrivește? Venim cu o analiză gratuită a situației tale, fără obligații.</p>
                                    <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                                        <li>Analizăm capacitatea ta de plată</li>
                                        <li>Îți propunem soluția potrivită</li>
                                        <li>Fără obligații</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="pt-6 text-2xl">De ce Ideal Credit</h2>
                            <ul className="list-disc list-inside space-y-3">
                                <li>
                                    <strong>Transparență totală</strong> - îți arătăm toate costurile de la început. Nu există surprize la
                                    semnătură sau pe parcurs.
                                </li>
                                <li>
                                    <strong>Aprobare rapidă</strong> - nu pierzi săptămâni în așteptare. Analizăm dosarul tău și îți dăm un
                                    răspuns clar.
                                </li>
                                <li>
                                    <strong>Flexibilitate reală</strong> - analizăm situația ta individual, nu după un algoritm rigid. Dacă
                                    ai venituri stabile și capacitate de rambursare, găsim o soluție.
                                </li>
                                <li>
                                    <strong>{yearsSinceFoundation} ani de încredere</strong> - mii de clienți au obținut finanțare prin noi.
                                    Facem ce spunem și spunem ce facem.
                                </li>
                                <li>
                                    <strong>Acoperire națională</strong> - birouri în Căușeni și Chișinău, dar lucrăm cu clienți din toată
                                    Moldova prin platforma noastră online.
                                </li>
                            </ul>

                            <h2 className="pt-6 text-2xl">Cum funcționează procesul</h2>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>
                                    <strong>Completezi cererea</strong> - online sau la birou, în câteva minute
                                </li>
                                <li>
                                    <strong>Analizăm dosarul</strong> - rapid, fără birocrație inutilă
                                </li>
                                <li>
                                    <strong>Primești răspunsul</strong> - clar și transparent
                                </li>
                                <li>
                                    <strong>Semnezi contractul</strong> - cu toate costurile vizibile
                                </li>
                                <li>
                                    <strong>Primești banii</strong> - și îți continui planurile
                                </li>
                            </ol>

                            <h2 className="pt-6 text-2xl">Întrebări frecvente</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-semibold">Am nevoie de garant sau gaj?</p>
                                    <p>
                                        La primul credit, fidejusorul (garant personal) este obligatoriu. Gajul imobiliar poate fi cerut
                                        suplimentar pentru sume mari sau venituri nestabile.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold">Cât de repede primesc banii?</p>
                                    <p>Decizie în 2-3 ore pentru persoane fizice, 1-2 zile lucrătoare pentru afaceri.</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Cum primesc banii?</p>
                                    <p>
                                        Persoanele fizice pot ridica numerar la birou sau primi transferul la card/cont bancar. Pentru
                                        afaceri, fondurile se virează întotdeauna prin transfer bancar.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold">Pot aplica online?</p>
                                    <p>Da. Platforma noastră online îți permite să completezi cererea de oriunde din Moldova.</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Ce acte am nevoie?</p>
                                    <p>
                                        Pentru persoane fizice: buletin și un document de confirmare a veniturilor (adeverință, extras de
                                        card sau verificare BIC). Pentru firme: certificat de înregistrare și extrase bancare.{" "}
                                        <Link href="/contacte" className="link">
                                            Contactează-ne
                                        </Link>{" "}
                                        și îți spunem exact ce ai nevoie.
                                    </p>
                                </div>
                            </div>

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
