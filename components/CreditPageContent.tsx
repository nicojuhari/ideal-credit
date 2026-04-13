import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import Info from "@/components/ui/Info";

export interface RelatedLink {
    href: string;
    label: string;
    desc: string;
}

export interface CreditPageContentProps {
    eligibilityTitle?: string;
    eligibleIf: string[];
    documents: string[];
    note?: string;
    description: {
        title: string;
        paragraphs: string[];
    };
    relatedLinks?: RelatedLink[];
}

export default function CreditPageContent({
    eligibilityTitle = "Condiții și documente",
    eligibleIf,
    documents,
    note,
    description,
}: CreditPageContentProps) {
    return (
        <>
            {/* Eligibility + documents */}
            <section className="container">
                <h2 className="title text-center">{eligibilityTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Left: conditions */}
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white">Condiții</h3>
                        <ul className="space-y-2.5">
                            {eligibleIf.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                    <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right: documents */}
                    <div className="card flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white">Documente necesare</h3>
                        <ul className="space-y-2.5">
                            {documents.map((doc) => (
                                <li key={doc} className="flex items-start gap-2.5 text-sm text-gray-500">
                                    <Check className="w-4 h-4 shrink-0 text-brand-500 mt-0.5" strokeWidth={3} />
                                    {doc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {note && <Info className="mt-6">{note}</Info>}
            </section>

            {/* Prose description - plain text, good for SEO */}
            <section className="container">
                <h2 className="title text-center">{description.title}</h2>
                <div className="space-y-4">
                    {description.paragraphs.map((p, i) => (
                        <p key={i} className="text-gray-500 leading-relaxed">
                            {p}
                        </p>
                    ))}
                </div>
            </section>
        </>
    );
}
