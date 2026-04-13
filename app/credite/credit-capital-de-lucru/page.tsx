import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import ServiceHero from "@/components/ServiceHero";
import HowItWorks from "@/components/HowItWorks";
import Info from "@/components/ui/Info";
import { Check, X, Clock, Package, Users, Trophy, ArrowRight } from "lucide-react";
import { workingCapitalSchema } from "@/lib/schema";
import type { FaqItem } from "@/components/FAQ";
import WhyBento from "@/components/WhyBento";

const FAQ = dynamic(() => import("@/components/FAQ"));

export const metadata: Metadata = {
    title: "Credit Capital de Lucru pentru Afaceri | Ideal Credit Moldova",
    description:
        "Credit capital de lucru pentru SRL și ÎI din Moldova. Acoperiți salarii, furnizori și stocuri - până la 400.000 lei, decizie în 1-2 zile lucrătoare.",
    alternates: { canonical: "https://idealcredit.md/credite/credit-capital-de-lucru" },
};

const workingCapitalFaqItems: FaqItem[] = [
    {
        question: "Pot folosi creditul pentru plata salariilor?",
        answer: "Da. Capital de lucru înseamnă exact asta - orice cheltuială operațională curentă: salarii, furnizori, chirie, utilități, stocuri.",
    },
    {
        question: "Ce termen de rambursare este recomandat pentru capital de lucru?",
        answer: "6-24 luni în general. Adaptăm termenul la ciclul tău de încasări - dacă clienții tăi plătesc la 60 de zile, structurăm creditul în consecință.",
    },
    {
        question: "Pot reînnoi creditul după rambursare?",
        answer: "Da. Clienții cu istoric bun de plată primesc prioritate la o nouă finanțare, adesea cu condiții mai bune.",
    },
    {
        question: "Ce documente sunt necesare pentru capital de lucru?",
        answer: "Actele de înregistrare ale firmei (SRL/ÎI), extrase bancare pentru ultimele 3 luni și evidența contabilă de bază. Nu cerem plan de afaceri.",
    },
    {
        question: "Pot obține capital de lucru dacă firma are 6 luni de activitate?",
        answer: "Da, evaluăm individual. Contează rulajul lunar și stabilitatea fluxului de numerar, nu doar vechimea firmei.",
    },
    {
        question: "Cât de repede intră banii după aprobare?",
        answer: "Fondurile sunt disponibile în aceeași zi sau ziua lucrătoare următoare după semnarea contractului.",
    },
];

const workingCapitalFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: workingCapitalFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const scenarios = [
    {
        icon: Clock,
        title: "Creante blocate",
        desc: "Ai livrat marfa, clientul plătește în 60 de zile. Furnizorii cer bani azi. Continuăm producția fără să aștepți.",
    },
    {
        icon: Package,
        title: "Sezon aglomerat",
        desc: "Urmează sezonul de vârf, ai nevoie de stoc dublu, dar banii sunt blocați în creanțe. Pregătești depozitul la timp.",
    },
    {
        icon: Users,
        title: "Angajari noi",
        desc: "Ai angajați noi dar primii clienți plătesc abia luna viitoare. Acoperi salariile fără presiune pe flux.",
    },
    {
        icon: Trophy,
        title: "Contract mare",
        desc: "Ai câștigat un contract important dar ai nevoie de resurse să-l onorezi. Capitalizezi oportunitatea fără să o ratezi.",
    },
];

const comparisonRows = [
    { label: "Viteză aprobare", ifn: "1-2 zile lucrătoare", bank: "1-5 zile lucrătoare" },
    { label: "Documente", ifn: "Extrase 3 luni", bank: "Documentație extinsă" },
    { label: "Flexibilitate sumă", ifn: "Negociabilă", bank: "Limitată la plafon" },
    { label: "Disponibil după refuz bancar", ifn: "Da", bank: "Nu" },
    { label: "Costuri", ifn: "Transparente, fixe", bank: "Comisioane multiple" },
];

export default function CreditCapitalDeLucruPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([workingCapitalSchema, workingCapitalFaqSchema]),
                }}
            />
            {/* Hero */}
            <ServiceHero
                title={
                    <>
                        Credit capital
                        <br />
                        de lucru
                    </>
                }
                subtitle="Menții activitatea firmei când încasările întârzie. Fără birocrație, fără așteptări săptămâni întregi."
            />

            {/* 1. Când ai nevoie de capital de lucru */}
            <section className="container">
                <h2 className="title text-center">Când ai nevoie de capital de lucru</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {scenarios.map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-black-600/50">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 mt-0.5">
                                <Icon size={20} />
                            </span>
                            <div>
                                <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. Eligibilitate */}
            <section className="container">
                <h2 className="title text-center">Condiții de eligibilitate</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white">Eligibil dacă</h3>
                        <ul className="space-y-2.5">
                            {[
                                "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)",
                                "Activitate economică de cel puțin 3-6 luni",
                                "Extrase bancare care arată rulaj activ",
                                "Ai nevoie de lichiditate rapidă pentru operațiuni",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                    <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white">Nu este necesar</h3>
                        <ul className="space-y-2.5">
                            {[
                                "Plan de afaceri detaliat",
                                "Activitate de 2+ ani",
                                "Garanție imobiliară obligatorie",
                                "Profit demonstrat pe ultimul an fiscal",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                    <X className="w-4 h-4 shrink-0 text-red-400/80 mt-0.5" strokeWidth={2.5} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Info className="mt-6">
                    În funcție de suma solicitată și evaluarea riscului, pot fi necesare garanții suplimentare: fidejusiune sau gaj imobil.
                </Info>
            </section>

            {/* 3. HowItWorks */}
            <section className="container">
                <HowItWorks />
            </section>

            {/* 4. Comparatie IFN vs. descoperit de cont */}
            <section className="container">
                <h2 className="title text-center">Credit IFN vs. descoperit de cont bancar</h2>
                <div className="overflow-x-auto rounded-xl border border-white/5">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/5 bg-black-600/80">
                                <th className="text-left px-5 py-3.5 text-gray-500 font-medium w-1/3"></th>
                                <th className="px-5 py-3.5 text-brand-500 font-semibold text-center">Ideal Credit (IFN)</th>
                                <th className="px-5 py-3.5 text-gray-500 font-medium text-center">Descoperit cont bancar</th>
                            </tr>
                        </thead>
                        <tbody className="bg-black-600/40">
                            {comparisonRows.map((row, i) => (
                                <tr key={row.label} className={i < comparisonRows.length - 1 ? "border-b border-white/5" : ""}>
                                    <td className="px-5 py-4 text-gray-500">{row.label}</td>
                                    <td className="px-5 py-4 text-green-400 text-center font-medium">{row.ifn}</td>
                                    <td className="px-5 py-4 text-gray-500 text-center">{row.bank}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 5. FAQ */}
            <section className="container">
                <h2 className="title text-center">Întrebări frecvente</h2>
                <FAQ items={workingCapitalFaqItems} />
            </section>

            {/* 6. CTA */}
            <section className="container">
                <div className="rounded-2xl border border-white/5 bg-black-600/50 p-8 md:p-10 text-center flex flex-col items-center gap-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Gata să aplici?</h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
                            Cerere online în 5 minute. Decizie în 1-2 zile lucrătoare. Banii în cont rapid după aprobare.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/cerere-de-credit-online"
                            className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-brand-gradient text-black font-semibold text-sm shadow-glow-sm hover:brightness-110 transition-all"
                        >
                            Cerere online <ArrowRight size={15} />
                        </Link>
                        <Link
                            href="/credite/credit-pentru-afaceri-mici"
                            className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/15 text-white hover:bg-white/5 transition-all text-sm"
                        >
                            Toate creditele pentru afaceri
                        </Link>
                    </div>
                </div>
            </section>

            <WhyBento />
        </>
    );
}
