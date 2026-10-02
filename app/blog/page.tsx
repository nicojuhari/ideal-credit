import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ds/Container";
import { blogPosts } from "@/lib/blog-posts";

const title = "Dincolo de Cifre - Articole despre finanțe și afaceri";
const description =
    "Articole despre bani, credite și afaceri, explicate simplu, pe cifre reale. Din Moldova și din lume.";
const subtitle = "Articole despre finanțe și afaceri";
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

const longDate = new Intl.DateTimeFormat("ro-RO", { day: "numeric", month: "long", year: "numeric" });

function Arrow({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
            <path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
    );
}

function PostDate({ date }: { date: string }) {
    return (
        <time dateTime={date} className="font-dc-mono text-[13px] tabular-nums text-dc-text-muted">
            {longDate.format(new Date(date))}
        </time>
    );
}

export default function BlogPage() {
    const posts = blogPosts.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
    const [latest, ...rest] = posts;

    return (
        <div className="dc bg-dc-bg selection:bg-dc-accent selection:text-dc-on-accent">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

            <header className="dc-section dc-section--hero !pb-12 md:!pb-16">
                <Container>
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h1 className="text-[clamp(46px,8vw,96px)] font-semibold leading-[.95] tracking-[-.04em] text-dc-text">
                                Dincolo de <span className="font-dc-serif font-normal italic tracking-[-.01em] text-dc-accent">Cifre</span>
                            </h1>
                            <p className="mt-5 text-[17px] leading-[1.6] text-dc-text-muted">{subtitle}</p>
                        </div>
                        {posts.length > 0 && (
                            <p className="font-dc-mono text-[13px] tabular-nums text-dc-text-muted md:pb-2">
                                {posts.length} {posts.length === 1 ? "articol" : "articole"}
                            </p>
                        )}
                    </div>
                </Container>
            </header>

            <div className="pb-24 md:pb-32">
                <Container>
                    {posts.length === 0 && (
                        <p className="border-t border-dc-line py-16 text-[15px] text-dc-text-muted">Primul articol vine în curând.</p>
                    )}

                    {latest && (
                        <Link
                            href={`/blog/${latest.slug}`}
                            className="group grid gap-5 border-t border-dc-line py-12 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 md:py-16"
                        >
                            <div className="md:pt-3">
                                <PostDate date={latest.date} />
                            </div>
                            <div>
                                <h2 className="max-w-[26ch] text-balance text-[clamp(28px,3.6vw,44px)] font-semibold leading-[1.1] tracking-[-.03em] text-dc-text transition-colors duration-200 group-hover:text-dc-accent">
                                    {latest.title}
                                </h2>
                                <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.6] text-dc-text-muted">{latest.dek}</p>
                                <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-dc-accent">
                                    Citește articolul
                                    <Arrow className="size-[18px] transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5" />
                                </span>
                            </div>
                        </Link>
                    )}

                    {rest.length > 0 && (
                        <ul className="border-t border-dc-line">
                            {rest.map((post) => (
                                <li key={post.slug} className="border-b border-dc-line">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="group grid gap-3 py-8 md:grid-cols-[200px_minmax(0,1fr)_32px] md:gap-10 md:py-10"
                                    >
                                        <div className="md:pt-1">
                                            <PostDate date={post.date} />
                                        </div>
                                        <div>
                                            <h2 className="max-w-[52ch] text-balance text-[22px] font-semibold leading-[1.25] tracking-[-.02em] text-dc-text transition-colors duration-200 group-hover:text-dc-accent">
                                                {post.title}
                                            </h2>
                                            <p className="mt-3 max-w-[68ch] text-[15px] leading-[1.6] text-dc-text-muted">{post.dek}</p>
                                        </div>
                                        <Arrow className="hidden size-5 self-center text-dc-text-muted opacity-0 transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1 group-hover:text-dc-accent group-hover:opacity-100 group-focus-visible:opacity-100 md:block" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </Container>
            </div>
        </div>
    );
}
