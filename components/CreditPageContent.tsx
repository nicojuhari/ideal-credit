import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Info from "@/components/ui/Info";

export interface RelatedLink {
    href: string;
    label: string;
    desc: string;
}

interface EligibilitySectionProps {
    title?: string;
    items: string[];
}

export function EligibilitySection({ title = "Condiții", items }: EligibilitySectionProps) {
    return (
        <section className="container">
            <h2 className="title text-center">{title}</h2>
            <div className="card max-w-2xl mx-auto flex flex-col gap-4">
                <ul className="space-y-2.5">
                    {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm">
                            <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

interface DescriptionSectionProps {
    title: string;
    paragraphs: string[];
}

export function DescriptionSection({ title, paragraphs }: DescriptionSectionProps) {
    return (
        <section className="container">
            <h2 className="title text-center">{title}</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
                {paragraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed">
                        {p}
                    </p>
                ))}
            </div>
        </section>
    );
}

interface DocumentsSectionProps {
    title?: string;
    documents: string[];
    note?: string;
    relatedLinks?: RelatedLink[];
}

export function DocumentsSection({ title = "Documente necesare", documents, note, relatedLinks }: DocumentsSectionProps) {
    return (
        <section className="container" id="documente">
            <h2 className="title text-center">{title}</h2>
            <div className="card max-w-2xl mx-auto flex flex-col gap-4">
                <ul className="space-y-2.5">
                    {documents.map((doc) => (
                        <li key={doc} className="flex items-start gap-2.5 text-sm">
                            <Check className="w-4 h-4 shrink-0 text-brand-500 mt-0.5" strokeWidth={3} />
                            {doc}
                        </li>
                    ))}
                </ul>
            </div>

            {note && <Info className="mt-6 max-w-2xl mx-auto">{note}</Info>}

            {relatedLinks && relatedLinks.length > 0 && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="group flex flex-col gap-1.5 p-4 rounded-xl border border-white/8 bg-black-600/50 hover:border-white/15 hover:bg-black-600 transition-colors"
                        >
                            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 group-hover:text-brand-400">
                                {l.label} <ArrowRight size={13} />
                            </span>
                            <span className="text-xs leading-snug">{l.desc}</span>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}
