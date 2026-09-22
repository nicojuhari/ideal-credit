import type { Metadata } from "next";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import ProductHero from "@/components/product/ProductHero";
import SpecStrip from "@/components/product/SpecStrip";
import LabelGrid from "@/components/product/LabelGrid";
import EligibilityRows from "@/components/product/EligibilityRows";
import ProductDescription from "@/components/product/ProductDescription";
import DocumentRows from "@/components/product/DocumentRows";
import ProductFaq from "@/components/product/ProductFaq";
import type { FaqItem } from "@/components/product/ProductFaq";
import Calculator from "@/components/home/Calculator";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import ClosingCta from "@/components/home/ClosingCta";
import { personalLoanSchema, buildBreadcrumbSchema } from "@/lib/schema";

const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Acasă", url: "https://idealcredit.md/" },
    { name: "Credite", url: "https://idealcredit.md/credite" },
    { name: "Credit pentru nevoi personale", url: "https://idealcredit.md/credite/credit-pentru-nevoi-personale" },
]);

export const metadata: Metadata = {
    title: "Credit pentru Nevoi Personale în Moldova | Ideal Credit",
    description:
        "Credit pentru nevoi personale în Moldova - analizăm situația ta și îți spunem dacă are sens. Dobândă fixă, fără comisioane ascunse.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-pentru-nevoi-personale" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/credite/credit-pentru-nevoi-personale",
        title: "Credit pentru Nevoi Personale în Moldova | Ideal Credit",
        description:
            "Credit pentru nevoi personale în Moldova - analizăm situația ta și îți spunem dacă are sens. Dobândă fixă, fără comisioane ascunse.",
    },
};

const personalFaqItems: FaqItem[] = [
    {
        question: "Pot obține credit dacă am un istoric de credit negativ?",
        answer: "Analizăm individual. Un incident din trecut nu înseamnă refuz automat. Contează cel mai mult comportamentul din ultimele 12 luni și capacitatea actuală de rambursare - un incident vechi urmat de plăți la timp cântărește mult mai puțin decât întârzieri recente. Un fidejusor cu profil solid poate echilibra un dosar mai slab.",
    },
    {
        question: "Ce se întâmplă dacă suma cerută nu mi se potrivește?",
        answer: "Îți spunem sincer, la telefon, înainte de dosarul complet. Cu 16 ani de experiență, recunoaștem când o sumă e prea mare pentru capacitatea ta de rambursare - și recomandăm o sumă potrivită sau o altă structură, nu doar un refuz fără explicație.",
    },
    {
        question: "Cât pot împrumuta fără garanții?",
        answer: "Depinde de venitul tău și situația financiară. Comunicăm limita clară înainte de cererea formală - nu îți pierzi timpul cu un dosar complet dacă suma nu e accesibilă fără garanții.",
    },
    {
        question: "Trebuie neapărat adeverință de salariu?",
        answer: "Nu neapărat. Acceptăm orice formă de confirmare a veniturilor - adeverință de salariu, extras de card, pensie, activitate independentă sau verificare BIC (Biroul Istoriilor de Credit). Discutăm ce ai disponibil înainte de a cere documente.",
    },
    {
        question: "Pot lua un nou credit dacă am deja unul activ?",
        answer: "Da, dacă capacitatea de rambursare o permite. Analizăm toate obligațiile existente și suma totală care poate fi gestionată confortabil.",
    },
    {
        question: "Cum primesc banii după aprobare?",
        answer: "Transfer bancar sau numerar la birou - alegem împreună ce e mai convenabil pentru tine.",
    },
    {
        question: "Pot rambursa creditul mai devreme?",
        answer: "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru perioada efectiv utilizată - nicio penalitate.",
    },
    {
        question: "Am mai multe credite active - le pot consolida într-unul singur?",
        answer: "Da. Dacă plătești rate la 2 sau mai multe credite, analizăm situația și, dacă are sens financiar, le aduni într-o singură rată lunară, de obicei mai mică. Calculăm împreună înainte de orice decizie - dacă nu are sens pentru tine, îți spunem direct.",
    },
    {
        question: "Există condiții speciale pentru bugetari (medici, militari, profesori)?",
        answer: "Venitul stabil, garantat de stat, simplifică analiza dosarului. Documentele acceptate includ adeverința de salariu sau extrasul din sistemul de salarizare - condițiile exacte se stabilesc în funcție de venit și situația fiecărui solicitant.",
    },
];

const useCases = [
    { label: "Renovare acasă", href: "/credite/credit-pentru-reparatie" },
    { label: "Electrocasnice, mobilă" },
    { label: "Tratament medical" },
    { label: "Nuntă, botez, eveniment" },
    { label: "Vacanță planificată" },
    { label: "Consolidare credite", href: "#consolidare" },
];

const bugetariCategories = [
    {
        title: "Medici și personal medical",
        items: [
            "Medici, asistenți medicali, farmaciști",
            "Angajați ai spitalelor și policlinicilor de stat",
            "Personal auxiliar din sistemul de sănătate",
        ],
    },
    {
        title: "Militari și polițiști",
        items: [
            "Ofițeri și subofițeri ai Armatei Naționale",
            "Angajați ai Ministerului Afacerilor Interne",
            "Personal al Serviciului de Protecție și Pază de Stat",
        ],
    },
    {
        title: "Alți angajați bugetari",
        items: [
            "Profesori, educatori, personal didactic",
            "Funcționari publici și angajați ai administrației locale",
            "Angajați ai instituțiilor de stat și autorităților publice",
        ],
    },
];

const worthConsolidatingItems = [
    "Plătești rate la 2 sau mai multe credite și vrei să simplifici",
    "Rata actuală consumă prea mult din venitul lunar",
    "Dobânda actuală este mai mare decât ce poți obține acum",
    "Vrei să eliberezi un garant de pe un contract mai vechi",
];

export default function CreditNevoiPersonalePage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personalLoanSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <ProductHero
                category="Persoane fizice"
                position={4}
                title={
                    <>
                        Credit pentru nevoi <Accent>personale.</Accent>
                    </>
                }
                subtitle="Bani pentru orice nevoie, fără destinație impusă. Dobândă fixă, costuri clare, decizie în 2-3 ore."
                primaryCta={{ label: "Depune cererea", href: "/cerere-de-credit-online" }}
                secondaryCta={{ label: "Calculează rata", href: "#calculator" }}
            />
            <SpecStrip
                specs={[
                    { value: "10 000", label: "MDL sumă minimă" },
                    { value: "12-48", label: "luni termen" },
                    { value: "2-3 ore", label: "până la decizie", proof: true },
                    { value: "4 %", label: "dobândă fixă / lună" },
                ]}
            />

            <LabelGrid
                marker="Destinații"
                title={
                    <>
                        Când folosești un credit <Accent>personal</Accent>
                    </>
                }
                items={useCases}
            />

            <EligibilityRows
                marker="Eligibilitate"
                title={
                    <>
                        Condiții de <Accent>bază</Accent>
                    </>
                }
                items={[
                    "Vârsta de la 23 de ani",
                    "Sursă de venit stabilă (angajat, pensionar, antreprenor)",
                    "Buletin de identitate valabil",
                    "Capacitate de rambursare demonstrabilă",
                ]}
            />

            <Calculator />

            <Section
                marker="Detalii"
                title={
                    <>
                        Credit personal pentru orice nevoie, din <Accent>Moldova</Accent>
                    </>
                }
            >
                <ProductDescription
                    items={[
                        {
                            title: "Fără destinație impusă",
                            text: "Banii sunt ai tăi - renovare, tratament medical, eveniment de familie sau orice altă nevoie. Nu trebuie să justifici pentru ce îi folosești.",
                        },
                        {
                            title: "Ce cerem",
                            text: "Venit stabil și buletin de identitate valabil. Fără comisioane de analiză sau deschidere. Dobânda e fixă - știi de la început exact cât plătești lunar. La primul credit, fidejusorul (garant personal) e obligatoriu.",
                        },
                        {
                            title: "Cât durează",
                            text: "Aprobăm în 2-3 ore dacă situația ta e clară - și, dacă nu e, îți spunem înainte să completezi dosarul. Clienți cu istoric bun de plată pot obține dobândă mai mică și fără fidejusor la creditele următoare.",
                        },
                    ]}
                />
            </Section>

            <EligibilityRows
                id="consolidare"
                marker="Consolidare"
                title={
                    <>
                        Ai mai multe credite <Accent>active?</Accent>
                    </>
                }
                description="Consolidarea nu este o soluție separată, ci o opțiune discutată în cadrul consultației - merită analizat-o dacă:"
                items={worthConsolidatingItems}
            />

            <Section
                id="bugetari"
                marker="Bugetari"
                title={
                    <>
                        Condiții speciale pentru <Accent>bugetari</Accent>
                    </>
                }
            >
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    {bugetariCategories.map((cat, i) => (
                        <div key={cat.title} className="dc-cell p-8">
                            <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                            <h3 className="mt-6 text-xl tracking-[-.025em] text-dc-text">{cat.title}</h3>
                            <ul className="mt-4 flex flex-col gap-2.5">
                                {cat.items.map((item) => (
                                    <li key={item} className="text-[15px] leading-[1.5] text-dc-text-muted">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>

            <Process />

            <DocumentRows
                id="documente"
                marker="Dosar"
                title={
                    <>
                        Documente <Accent>necesare</Accent>
                    </>
                }
                items={[
                    { title: "Buletin de identitate", note: "Obligatoriu" },
                    { title: "Confirmare a veniturilor", note: "Adeverință / extras / BIC" },
                    { title: "Ultimele 3 extrase de cont bancar", note: "Recomandat" },
                    { title: "Actele fidejusorului sau ale bunului gajat", note: "Dacă e cazul" },
                ]}
                footnote="La primul credit fidejusorul este obligatoriu. Gajul imobiliar poate fi cerut suplimentar pentru sume mari sau venituri nestabile. Clienții repetați, fără întârzieri la plăți pot obține creditul fără fidejusor."
            />

            <ProductFaq
                title={
                    <>
                        Întrebări despre creditul <Accent>personal</Accent>
                    </>
                }
                items={personalFaqItems}
            />
            <WhyUs />
            <ClosingCta />
        </div>
    );
}
