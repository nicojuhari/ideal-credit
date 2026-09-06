import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
    href: string;
    readTime: ReactNode;
    title: ReactNode;
    description: ReactNode;
};

/** Blog/guide teaser: mono read time, 21px title, 15px description, "Citește →" pinned to the bottom. */
export function GuideCard({ href, readTime, title, description }: Props) {
    return (
        <Link
            href={href}
            className="flex min-h-[240px] flex-col border border-line p-card-guide transition-[border-color] duration-[250ms] ease-out hover:border-brand-border max-ds-sm:min-h-0 max-ds-sm:p-6"
        >
            <span className="font-figure text-eyebrow normal-case tracking-normal text-text-3">{readTime}</span>
            <h3 className="mt-4 text-h3-guide">{title}</h3>
            <p className="mt-3 text-small text-text-3">{description}</p>
            <span className="mt-auto pt-[22px] text-small text-brand">Citește →</span>
        </Link>
    );
}
