import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, type BlogPost } from "@/lib/blog-posts";
import { ArrowRight, Clock, Briefcase, User, BookOpen } from "lucide-react";

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

const categoryIcon: Record<BlogPost["category"], React.ComponentType<{ size?: number; className?: string }>> = {
    afaceri: Briefcase,
    personal: User,
    ghid: BookOpen,
};

function PostCard({ post }: { post: BlogPost }) {
    const Icon = categoryIcon[post.category];
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-4 rounded-2xl border border-white/5 bg-black-600/60 p-6 hover:border-white/15 hover:bg-black-600 transition-colors duration-200"
        >
            <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs">
                    <Icon size={11} />
                    {categoryLabel[post.category]}
                </span>
                <span className="inline-flex items-center gap-1 text-xs">
                    <Clock size={11} />
                    {post.readMinutes} min
                </span>
            </div>
            <h2 className="text-base font-medium text-white leading-snug group-hover:text-brand-500 transition-colors line-clamp-2">
                {post.title}
            </h2>
            <p className="text-sm leading-relaxed line-clamp-3 flex-1">{post.description}</p>
            <span className="inline-flex items-center gap-1 text-xs text-brand-500 font-medium">
                Citește <ArrowRight size={13} />
            </span>
        </Link>
    );
}

export default function BlogPage() {
    return (
        <div className="container my-8 md:my-12">
            <div className="text-center mb-12">
                <h1 className="title mb-3">Ghiduri practice</h1>
                <p className=" max-w-xl mx-auto text-sm leading-relaxed">
                    Articole scrise pentru antreprenori și persoane fizice care evaluează un credit nebancar - nu educație financiară
                    generală, ci răspunsuri la întrebările pe care le ai înainte să aplici.
                </p>
            </div>

            {blogPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {blogPosts.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </div>
            ) : (
                <p className="text-center py-20">Articolele se publică în curând.</p>
            )}
        </div>
    );
}
