import Link from "next/link";
import { Check } from "lucide-react";
import Card from "@/components/ds/Card";

export interface FeatureCardItem {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    desc?: string;
    items?: string[];
    link?: { href: string; label?: string } | null;
}

export default function FeatureCards({ items, cols = 2 }: { items: FeatureCardItem[]; cols?: 2 | 3 }) {
    return (
        <div
            className="grid gap-5"
            style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${cols === 3 ? 260 : 300}px, 1fr))` }}
        >
            {items.map(({ icon: Icon, title, desc, items: subItems, link }) => (
                <Card key={title} className="gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-dc-control bg-dc-accent/10 text-dc-accent">
                        <Icon size={20} />
                    </span>
                    <div>
                        <h3 className="text-[17px] font-bold text-dc-text">{title}</h3>
                        {desc && <p className="mt-1.5 text-sm leading-relaxed text-dc-text-muted">{desc}</p>}
                    </div>

                    {subItems && subItems.length > 0 && (
                        <ul className="flex flex-col gap-2.5">
                            {subItems.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-dc-text-muted">
                                    <Check size={15} className="mt-0.5 shrink-0 text-dc-accent" strokeWidth={2.5} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}

                    {link && (
                        <Link href={link.href} className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-dc-text hover:text-white">
                            {link.label ?? "Află mai mult"} →
                        </Link>
                    )}
                </Card>
            ))}
        </div>
    );
}
