import Link from "next/link";
import Container from "@/components/ds/Container";

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dc bg-dc-bg">
            <div className="dc-section dc-section--hero !pb-0">
                <Container>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[.08em] text-dc-text-muted hover:text-dc-text"
                    >
                        ← Toate articolele
                    </Link>
                </Container>
            </div>
            <div className="pb-24">
                <Container>
                    <article className="dc-legal dc-article mx-auto max-w-[720px] pt-10">{children}</article>
                </Container>
            </div>
        </div>
    );
}
