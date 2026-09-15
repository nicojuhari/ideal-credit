import Container from "@/components/ds/Container";
import Note from "@/components/ds/Note";

export default function LegalLayout({
    title,
    updated,
    children,
}: {
    title: React.ReactNode;
    updated?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="dc bg-dc-bg">
            <div className="dc-section dc-section--hero !pb-16">
                <Container>
                    <div className="mx-auto max-w-[760px] text-center">
                        <p className="flex items-center justify-center gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                            <span className="block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                            Document legal
                        </p>
                        <h1 className="mt-5 text-[clamp(34px,5vw,56px)] font-semibold leading-[1.05] tracking-[-.035em] text-dc-text">
                            {title}
                        </h1>
                        {updated && <Note className="mt-5">{updated}</Note>}
                    </div>
                </Container>
            </div>
            <div className="pb-24">
                <Container>
                    <div className="mx-auto max-w-[760px] border-t border-dc-line pt-14">
                        <div className="dc-legal">{children}</div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
