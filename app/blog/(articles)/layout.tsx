import Link from "next/link";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import { ButtonPrimary, ButtonSecondary } from "@/components/ds/Button";

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dc bg-dc-bg dc-section dc-section--hero">
            <Container>
                <div className="mx-auto max-w-[720px]">
                    <Link
                        href="/blog"
                        className="text-[15px] text-dc-text-muted underline underline-offset-4 transition-colors duration-[120ms] hover:text-white"
                    >
                        ← Înapoi la blog
                    </Link>

                    <article className="dc-legal mt-10">{children}</article>

                    <div className="mt-14 border border-dc-line p-8">
                        <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">Ideal Credit</p>
                        <h2 className="mt-4 text-2xl tracking-[-.02em] text-dc-text">
                            Ai o întrebare despre situația ta <Accent>concretă?</Accent>
                        </h2>
                        <p className="mt-3 max-w-xl text-[17px] leading-[1.6] text-dc-text-muted">
                            Articolele explică principii generale. Situația ta poate fi diferită. Consultăm gratuit - fără angajamente,
                            fără presiuni. Dacă există o soluție potrivită pentru tine, o găsim împreună.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3.5">
                            <ButtonPrimary href="/cerere-de-credit-online">Aplică online</ButtonPrimary>
                            <ButtonSecondary href="/contacte">Contactează-ne</ButtonSecondary>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-dc-line pt-6">
                        <Link
                            href="/blog"
                            className="text-[15px] text-dc-text-muted underline underline-offset-4 transition-colors duration-[120ms] hover:text-white"
                        >
                            ← Toate articolele
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
