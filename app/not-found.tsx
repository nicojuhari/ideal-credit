import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import { ButtonPrimary, ButtonSecondary } from "@/components/ds/Button";

export const metadata = {
    title: "Pagina nu a fost găsită | Ideal Credit",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <div className="dc bg-dc-bg dc-section dc-section--hero">
            <Container className="flex flex-col items-center gap-8 text-center">
                <p className="font-dc-mono text-xs uppercase tracking-[.1em] text-dc-text-muted">Eroare 404</p>
                <h1 className="max-w-[700px] text-[clamp(40px,7vw,80px)] font-semibold leading-[.95] tracking-[-.04em] text-dc-text">
                    Pagina nu <Accent>există.</Accent>
                </h1>
                <p className="max-w-[480px] text-[17px] leading-[1.55] text-dc-text-muted">
                    Link-ul pe care l-ai accesat nu mai este valabil sau a fost mutat. Poți continua de la pagina principală sau de la
                    lista de credite.
                </p>
                <div className="flex flex-wrap justify-center gap-3.5">
                    <ButtonPrimary href="/">Acasă</ButtonPrimary>
                    <ButtonSecondary href="/credite">Vezi creditele</ButtonSecondary>
                </div>
            </Container>
        </div>
    );
}
