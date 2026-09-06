import type { ReactNode } from "react";
import { Card } from "./Card";

export type SideQuote = { text: ReactNode; meta: ReactNode };

type Props = {
    quote: ReactNode;
    name: ReactNode;
    role: ReactNode;
    /** two letters in a 40px bordered square — never a photo */
    initials: string;
    side?: SideQuote[];
};

/** Testimonials panel: 30px pull quote + attribution, side quotes behind a vertical hairline. */
export function PullQuote({ quote, name, role, initials, side = [] }: Props) {
    return (
        <Card padding="panel" hover="none" className="grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] items-center gap-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
            <div>
                <blockquote className="m-0 text-pullquote max-ds-sm:text-[24px]">{quote}</blockquote>
                <div className="mt-[30px] flex items-center gap-3.5">
                    <span aria-hidden className="flex size-10 items-center justify-center border border-line-chip font-figure text-meta text-text-2">
                        {initials}
                    </span>
                    <div>
                        <div className="text-small font-medium leading-tight">{name}</div>
                        <div className="mt-[3px] text-meta text-text-3">{role}</div>
                    </div>
                </div>
            </div>
            {side.length > 0 && (
                <div className="flex flex-col gap-6 border-l border-line pl-11 max-ds-md:border-l-0 max-ds-md:border-t max-ds-md:pl-0 max-ds-md:pt-8">
                    {side.map((q, i) => (
                        <div key={i}>
                            <div className="text-[15.5px] leading-[1.6] text-quote">{q.text}</div>
                            <div className="mt-2 text-fine text-text-3">{q.meta}</div>
                        </div>
                    ))}
                </div>
            )}
        </Card>
    );
}
