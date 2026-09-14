import Container from "@/components/ds/Container";

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
            <Container className="max-w-[760px] py-16 md:py-24">
                <h1 className="text-center text-[32px] md:text-[44px] font-bold leading-[1.15] tracking-[-.02em] text-dc-text">
                    {title}
                </h1>
                <div className="dc-legal mt-12">{children}</div>
                {updated && <p className="mt-12 text-sm text-dc-text-dim">{updated}</p>}
            </Container>
        </div>
    );
}
