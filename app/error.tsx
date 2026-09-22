"use client";

import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import { ButtonPrimary, ButtonSecondary } from "@/components/ds/Button";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <div className="dc bg-dc-bg dc-section dc-section--hero">
            <Container className="flex flex-col items-center gap-8 text-center">
                <p className="font-dc-mono text-xs uppercase tracking-[.1em] text-dc-text-muted">A apărut o eroare</p>
                <h1 className="max-w-[700px] text-[clamp(40px,7vw,80px)] font-semibold leading-[.95] tracking-[-.04em] text-dc-text">
                    Ceva nu a <Accent>mers bine.</Accent>
                </h1>
                <p className="max-w-[480px] text-[17px] leading-[1.55] text-dc-text-muted">
                    Pagina nu a putut fi încărcată. Poți încerca din nou sau reveni la pagina principală.
                </p>
                <div className="flex flex-wrap justify-center gap-3.5">
                    <ButtonPrimary onClick={reset}>Încearcă din nou</ButtonPrimary>
                    <ButtonSecondary href="/">Acasă</ButtonSecondary>
                </div>
            </Container>
        </div>
    );
}
