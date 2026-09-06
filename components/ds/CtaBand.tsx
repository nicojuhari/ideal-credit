import type { ReactNode } from "react";
import { Button } from "./Button";
import { PHONE_DISPLAY, PHONE_TEL } from "./constants";
import { SectionBand } from "./SectionBand";

type Props = {
    title: ReactNode;
    lead: ReactNode;
    buttonLabel?: ReactNode;
    href?: string;
};

/** Solid orange band. Everything on it is ink (#100E0C) — never paper text on orange. */
export function CtaBand({ title, lead, buttonLabel = "Cerere online", href = "/cerere-de-credit-online" }: Props) {
    return (
        <SectionBand spacing="bottom">
            <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-8 bg-brand px-16 py-[72px] text-bg max-ds-md:px-10 max-ds-md:py-14 max-ds-sm:px-6 max-ds-sm:py-10">
                <div>
                    <h2 className="max-w-[620px] text-h2-cta max-ds-sm:text-[34px]">{title}</h2>
                    <p className="mt-5 max-w-[460px] text-[18px] leading-[1.5] text-ink-muted">{lead}</p>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <Button variant="band" size="xl" href={href}>
                        {buttonLabel}
                    </Button>
                    <a href={PHONE_TEL} className="font-figure text-small text-ink-muted hover:text-bg">
                        sau {PHONE_DISPLAY}
                    </a>
                </div>
            </div>
        </SectionBand>
    );
}
