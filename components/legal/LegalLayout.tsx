import Link from "next/link";
import Container from "@/components/ds/Container";
import Breadcrumb from "@/components/ds/Breadcrumb";
import { cardLabel } from "@/components/ds/PageHero";
import { cn } from "@/lib/utils";

const LEGAL_PAGES = [
    { path: "/terms", label: "Termeni și condiții" },
    { path: "/privacy", label: "Politica de confidențialitate" },
    { path: "/cookies", label: "Politica de cookies" },
    { path: "/autoritatea-de-supraveghere", label: "Autoritatea de supraveghere" },
] as const;

export default function LegalLayout({
    path,
    title,
    updated,
    children,
}: {
    path: (typeof LEGAL_PAGES)[number]["path"];
    title: React.ReactNode;
    updated?: string;
    children: React.ReactNode;
}) {
    const current = LEGAL_PAGES.find((p) => p.path === path)!;

    return (
        <div className="dc bg-dc-bg">
            <section className="pb-16 pt-8 sm:pt-10 lg:pb-20">
                <Container>
                    <Breadcrumb
                        items={[
                            { name: "Acasă", url: "https://idealcredit.md/" },
                            { name: current.label, url: `https://idealcredit.md${path}` },
                        ]}
                    />
                    <p className="mt-10 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted lg:mt-14">
                        <span className="block h-2 w-2 shrink-0 bg-dc-proof" aria-hidden />
                        Document legal
                    </p>
                    <h1 className="mt-6 max-w-[22ch] text-[clamp(34px,4.4vw,60px)] font-semibold leading-[1.05] tracking-[-.035em] text-dc-text">
                        {title}
                    </h1>
                    {updated && <p className="mt-6 text-[15px] text-dc-text-muted">{updated}</p>}
                </Container>
            </section>

            <section className="border-t border-dc-line pb-24 pt-14">
                <Container>
                    <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-20">
                        <nav aria-label="Documente legale" className="order-last lg:order-first lg:sticky lg:top-28 lg:self-start">
                            <p className={cardLabel}>Documente legale</p>
                            <ul className="mt-4 border-b border-dc-line">
                                {LEGAL_PAGES.map((p) => (
                                    <li key={p.path} className="border-t border-dc-line">
                                        <Link
                                            href={p.path}
                                            aria-current={p.path === path ? "page" : undefined}
                                            className={cn(
                                                "flex items-center justify-between gap-4 py-4 text-[17px] transition-colors",
                                                p.path === path ? "text-dc-text" : "text-dc-text-muted hover:text-dc-text",
                                            )}
                                        >
                                            {p.label}
                                            {p.path === path && <span className="block h-2 w-2 bg-dc-accent" aria-hidden />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="dc-legal max-w-[68ch] min-w-0">{children}</div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
