import Link from "next/link";
import { Check, Lightbulb, ArrowRight } from "lucide-react";
import Card from "@/components/ds/Card";

export interface RelatedLink {
    href: string;
    label: string;
    desc: string;
}

export default function DocumentsBlock({
    documents,
    note,
    relatedLinks,
}: {
    documents: string[];
    note?: string;
    relatedLinks?: RelatedLink[];
}) {
    return (
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
            <Card className="gap-4">
                <ul className="flex flex-col gap-3">
                    {documents.map((doc) => (
                        <li key={doc} className="flex items-start gap-3 text-[15px] text-dc-text-muted">
                            <Check size={18} className="mt-0.5 shrink-0 text-dc-accent" strokeWidth={2.5} />
                            {doc}
                        </li>
                    ))}
                </ul>
            </Card>

            {note && (
                <div className="flex items-start gap-3 rounded-dc-control border border-dc-line bg-dc-surface px-4 py-3.5 text-sm text-dc-text-muted">
                    <Lightbulb size={17} className="mt-0.5 shrink-0 text-dc-accent" />
                    {note}
                </div>
            )}

            {relatedLinks && relatedLinks.length > 0 && (
                <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                    {relatedLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="group flex flex-col gap-1 rounded-dc-control border border-dc-line p-4 transition-colors hover:border-dc-line-hover hover:bg-white/[.03]"
                        >
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-dc-text group-hover:text-white">
                                {l.label} <ArrowRight size={13} />
                            </span>
                            <span className="text-xs leading-snug text-dc-text-dim">{l.desc}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
