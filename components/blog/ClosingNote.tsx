import Link from "next/link";

// The entire promotional surface an article is allowed (see
// brand/blog-editorial-strategy.md, "5-10% soft-promotion rule"): a short
// closing note plus one link. Deliberately boxed off from the body so the
// rule stays visible, not just documented.

export default function ClosingNote({
    href,
    linkText = "Discută cu noi despre situația ta →",
    children,
}: {
    href: string;
    linkText?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="not-prose mt-14 border-t border-dc-line pt-8 [&_p]:text-[15px] [&_p]:leading-[1.7] [&_p]:text-dc-text-muted">
            {children}
            <Link
                href={href}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-dc-accent underline underline-offset-[3px]"
            >
                {linkText}
            </Link>
        </div>
    );
}
