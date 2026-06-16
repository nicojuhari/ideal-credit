import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export interface ServiceFeatureItem {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    desc?: string;
    link?: { href: string; label?: string } | null;
    items?: string[];
}

interface ServiceFeatureGridProps {
    heading: string;
    items: ServiceFeatureItem[];
    cols?: 2 | 3;
}

export default function ServiceFeatureGrid({ heading, items, cols = 2 }: ServiceFeatureGridProps) {
    const colClass =
        cols === 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2";

    return (
        <section className="container">
            <h2 className="title text-center">{heading}</h2>
            <div className={`grid ${colClass} gap-4`}>
                {items.map(({ icon: Icon, title, desc, link, items: subItems }) => (
                    <div
                        key={title}
                        className="flex flex-col gap-3 p-5 md:p-6 rounded-2xl border border-white/8 bg-black-600/60"
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                                <Icon size={20} />
                            </span>
                            <h3 className="text-base font-semibold text-white">{title}</h3>
                        </div>

                        {desc && <p className="text-sm leading-relaxed flex-1">{desc}</p>}

                        {subItems && subItems.length > 0 && (
                            <ul className="space-y-2 flex-1">
                                {subItems.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm">
                                        <Check className="w-3.5 h-3.5 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {link && (
                            <Link
                                href={link.href}
                                className="inline-flex items-center gap-1.5 text-sm text-brand-500 hover:text-brand-400 transition-colors font-medium mt-auto"
                            >
                                {link.label ?? "Află mai mult"} <ArrowRight size={14} />
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
