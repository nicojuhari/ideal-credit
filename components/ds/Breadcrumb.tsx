import Link from "next/link";
import { Fragment } from "react";

export type Crumb = { label: string; href?: string };

/** Mono uppercase trail: Acasă / Credite / Afaceri mici. The current page is text-2, not a link. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
    return (
        <nav aria-label="Navigare" className="ds-shell pt-8 font-figure text-eyebrow tracking-[0.08em] uppercase text-text-3 max-ds-sm:pt-5">
            <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 p-0">
                {items.map((c, i) => (
                    <Fragment key={i}>
                        {i > 0 && <li aria-hidden>/</li>}
                        <li>
                            {c.href ? (
                                <Link href={c.href} className="hover:text-brand">
                                    {c.label}
                                </Link>
                            ) : (
                                <span aria-current="page" className="text-text-2">
                                    {c.label}
                                </span>
                            )}
                        </li>
                    </Fragment>
                ))}
            </ol>
        </nav>
    );
}
