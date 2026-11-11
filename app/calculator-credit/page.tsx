import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/ds/PageHero";
import Accent from "@/components/ds/Accent";
import SplitSection from "@/components/ds/SplitSection";
import CalculatorCreditPage from "./CalculatorCreditPage";
import { HIGH_INCOME, HOME_LTV, PERSON_MAX, PERSON_MIN, UNCONFIRMED_MAX } from "@/lib/credit-capacity";

const lei = (v: number) => Math.round(v).toLocaleString("ro-RO");

const rules = [
    {
        title: "Ce este RSDV",
        desc: "RSDV arată cât din venitul tău merge la rate. Adunăm ratele noului credit și ratele pe care le plătești deja. Apoi împărțim totalul la venitul tău net pe lună.",
    },
    {
        title: "Ratele iau cel mult 40% din venit",
        desc: "Toate ratele tale împreună pot lua cel mult 40% din venit. Restul banilor rămân pentru cheltuielile de zi cu zi. Așa cere Banca Națională.",
    },
    {
        title: "La un venit mare, limita este 55%",
        desc: `Dacă venitul tău net este de cel puțin ${lei(HIGH_INCOME)} lei pe lună, ratele pot lua până la 55% din venit. Suma este de două ori salariul mediu pe economie.`,
    },
    {
        title: "Ce venit se ia în calcul",
        desc: "Se ia în calcul venitul pe care îl confirmi cu acte. Salariul și pensia contează integral. Alte venituri, de exemplu chiria sau banii primiți de peste hotare, contează doar în parte.",
    },
    {
        title: "Venitul fără acte",
        desc: `Fără acte, toate ratele tale împreună pot fi de cel mult ${lei(UNCONFIRMED_MAX)} lei pe lună. Suma este 40% din salariul minim pe economie.`,
    },
    {
        title: "Creditul pentru casă",
        desc: `Pentru o casă sau un apartament cu ipotecă, creditul poate fi de cel mult ${HOME_LTV * 100}% din valoarea lor. Restul plătești din banii tăi.`,
    },
    {
        title: "Dobânda nu trece de suma creditului",
        desc: "Pentru persoane fizice, toată dobânda plătită nu poate fi mai mare decât suma împrumutată. De aceea termenul are o limită. Limita depinde de dobândă și de felul ratelor.",
    },
    {
        title: "Suma și termenul la Ideal Credit",
        desc: `Persoanele fizice pot lua de la ${lei(PERSON_MIN)} la ${lei(PERSON_MAX)} lei. Termenul începe de la 12 luni. Calculatorul dă o estimare. Suma exactă o stabilim după ce vedem actele și istoria ta de credit.`,
    },
];

export const metadata: Metadata = {
    title: "Calculator de credit pentru persoane fizice | Ideal Credit",
    description:
        "Află cât poți împrumuta din venitul tău, după regulile Băncii Naționale. Apoi vezi rata lunară, dobânda totală, DAE și graficul de plăți.",
    alternates: { canonical: "https://idealcredit.md/calculator-credit" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/calculator-credit",
        title: "Calculator de credit pentru persoane fizice | Ideal Credit",
        description:
            "Află cât poți împrumuta din venitul tău, după regulile Băncii Naționale. Apoi vezi rata lunară, dobânda totală, DAE și graficul de plăți.",
    },
};

export default function Page() {
    return (
        <div className="dc bg-dc-bg">
            <PageHero
                className="!pb-12 print:hidden lg:!pb-16"
                breadcrumb={[
                    { name: "Acasă", url: "https://idealcredit.md/" },
                    { name: "Calculator credit", url: "https://idealcredit.md/calculator-credit" },
                ]}
                title={
                    <>
                        Calculator de credit pentru <Accent>persoane fizice.</Accent>
                    </>
                }
                subtitle="Scrie venitul tău și vezi cât poți împrumuta, cu ce rată și ce dobândă."
            />
            <Suspense>
                <CalculatorCreditPage />
            </Suspense>
            <SplitSection
                className="print:hidden"
                sticky
                title={
                    <>
                        Cum calculăm <Accent>suma.</Accent>
                    </>
                }
                description="Urmăm regulile Băncii Naționale pentru creditele persoanelor fizice. Regulile te protejează de rate pe care nu le poți plăti."
            >
                <div className="border-t border-dc-line">
                    {rules.map((r) => (
                        <div key={r.title} className="border-b border-dc-line py-7 sm:px-5">
                            <h3 className="text-xl font-semibold tracking-[-.025em] text-dc-text">{r.title}</h3>
                            <p className="mt-1.5 max-w-[62ch] text-[17px] leading-[1.6] text-dc-text-muted">{r.desc}</p>
                        </div>
                    ))}
                </div>
            </SplitSection>
        </div>
    );
}
