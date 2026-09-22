import Link from "next/link";
import { buildBreadcrumbSchema } from "@/lib/schema";

type BreadcrumbItem = { name: string; url: string };

// Renders the visible breadcrumb trail and its BreadcrumbList schema from the same
// items array, so the two can never drift out of sync.
export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
    const schema = buildBreadcrumbSchema(items);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 font-dc-mono text-xs text-dc-text-muted">
                {items.map((item, i) => {
                    const isLast = i === items.length - 1;
                    const path = item.url.replace(/^https:\/\/idealcredit\.md/, "") || "/";
                    return (
                        <span key={item.url} className="flex items-center gap-1.5">
                            {isLast ? (
                                <span aria-current="page" className="text-dc-text">
                                    {item.name}
                                </span>
                            ) : (
                                <Link href={path} className="hover:text-dc-text">
                                    {item.name}
                                </Link>
                            )}
                            {!isLast && <span aria-hidden>/</span>}
                        </span>
                    );
                })}
            </nav>
        </>
    );
}
