import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import { ButtonPrimary, ButtonSecondary } from "@/components/ds/Button";

export default function ClosingCta() {
    return (
        <section className="dc-section">
            <Container>
                <div className="flex flex-col items-center gap-7 text-center">
                    <h2 className="max-w-[720px] text-[32px] md:text-[56px] font-bold leading-[1.05] tracking-[-.03em] text-dc-text">
                        Gata să <Accent>aplici ?</Accent>
                    </h2>
                    <p className="text-dc-text-muted">Decizie în 1-3 ore, în timpul programului de lucru.</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <ButtonPrimary href="/cerere-de-credit-online">Cerere online</ButtonPrimary>
                        <ButtonSecondary href="tel:+37361252777">0612 52 777</ButtonSecondary>
                    </div>
                </div>
            </Container>
        </section>
    );
}
