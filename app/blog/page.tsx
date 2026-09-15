import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import { blogPosts, type BlogPost } from "@/lib/blog-posts";

export const metadata: Metadata = {
    title: "Blog - Ghiduri practice despre credite | Ideal Credit",
    description:
        "Ghiduri practice pentru antreprenori și persoane fizice care evaluează un credit nebancar în Moldova. Informații clare, fără generalități.",
    alternates: { canonical: "https://idealcredit.md/blog" },
};

const categoryLabel: Record<BlogPost["category"], string> = {
    afaceri: "Afaceri",
    personal: "Personal",
    ghid: "Ghid",
};

export default function BlogPage() {
    return (
        <div className="dc bg-dc-bg">
            <div className="dc-section dc-section--hero">
                <Container>
                    <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                        <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                        Blog · <span className="font-dc-mono">{String(blogPosts.length).padStart(2, "0")}</span> articole
                    </p>
                    <h1 className="mt-7 max-w-[1000px] text-[clamp(52px,9vw,124px)] font-semibold leading-[.92] tracking-[-.048em] text-dc-text">
                        Ghiduri <Accent>practice.</Accent>
                    </h1>
                    <p className="mt-7 max-w-[620px] text-[19px] leading-[1.55] text-dc-text-muted">
                        Articole scrise pentru antreprenori și persoane fizice care evaluează un credit nebancar - nu educație financiară
                        generală, ci răspunsuri la întrebările pe care le ai înainte să aplici.
                    </p>
                </Container>
            </div>

            <div className="pb-24">
                <Container>
                    {blogPosts.length > 0 ? (
                        <div className="border-t border-dc-line">
                            {blogPosts.map((post, i) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="grid items-baseline gap-7 border-b border-dc-line px-2 py-7 transition-colors duration-[120ms] hover:bg-dc-surface md:px-8"
                                    style={{ gridTemplateColumns: "44px minmax(0,1.6fr) minmax(0,.7fr) auto" }}
                                >
                                    <span className="font-dc-mono text-xs text-dc-text-muted">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-xl font-semibold tracking-[-.025em] text-dc-text">{post.title}</span>
                                    <span className="text-xs uppercase tracking-[.1em] text-dc-text-muted">
                                        {categoryLabel[post.category]}
                                    </span>
                                    <span className="font-dc-mono text-xs text-dc-text-muted">
                                        {new Date(post.date).toLocaleDateString("ro-RO", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="py-20 text-center text-[17px] text-dc-text-muted">Articolele se publică în curând.</p>
                    )}
                </Container>
            </div>
        </div>
    );
}
