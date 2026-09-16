import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ds/Container";
import { blogPosts } from "@/lib/blog-posts";
import { formatDateRo } from "@/lib/utils";

const title = "Dincolo de Cifre - bani, afaceri și economie | Ideal Credit";
const description =
    "Analize despre business, finanțe și investiții, din Moldova și din lume - cifre reale, nu explicații de manual.";

const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Dincolo de Cifre",
    description,
    url: "https://idealcredit.md/blog",
    publisher: { "@type": "Organization", name: "Ideal Credit", url: "https://idealcredit.md" },
    inLanguage: "ro-MD",
};

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://idealcredit.md/blog" },
    openGraph: {
        type: "website",
        locale: "ro_MD",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/blog",
        title,
        description,
    },
};

export default function BlogPage() {
    return (
        <div className="dc bg-dc-bg">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
            <div className="dc-section dc-section--hero !pb-16">
                <Container>
                    <div className="mx-auto max-w-[760px] text-center">
                        <h1 className="text-[clamp(34px,5vw,56px)] font-semibold leading-[1.05] tracking-[-.035em] text-dc-text">
                            Dincolo de <span className="font-dc-serif italic font-normal text-dc-accent">Cifre</span>
                        </h1>
                    </div>
                </Container>
            </div>

            <div className="pb-24">
                <Container>
                    <div className="mx-auto max-w-[760px] divide-y divide-dc-line border-t border-dc-line">
                        {blogPosts.length === 0 && (
                            <p className="py-14 text-center text-sm text-dc-text-muted">Primul articol vine în curând.</p>
                        )}
                        {blogPosts
                            .slice()
                            .sort((a, b) => (a.date < b.date ? 1 : -1))
                            .map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block py-9">
                                    <p className="font-dc-mono text-[13px] text-dc-text-muted">
                                        <time dateTime={post.date}>{formatDateRo(post.date)}</time>
                                    </p>
                                    <h2 className="mt-3 text-[22px] font-semibold leading-[1.25] tracking-[-.02em] text-dc-text group-hover:text-dc-accent">
                                        {post.title}
                                    </h2>
                                    <p className="mt-2 max-w-[620px] text-[15px] leading-[1.6] text-dc-text-muted">{post.dek}</p>
                                </Link>
                            ))}
                    </div>
                </Container>
            </div>
        </div>
    );
}
