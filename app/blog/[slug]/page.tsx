import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { richTextResolver } from "@storyblok/richtext";
import { notFound } from "next/navigation";

const TOKEN = process.env.STORYBLOK_ACCESS_TOKEN;

async function getStory(slug: string) {
    try {
        const res = await fetch(`https://api.storyblok.com/v2/cdn/stories/blog/${slug}?token=${TOKEN}&version=published`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.story ?? null;
    } catch {
        return null;
    }
}

export async function generateStaticParams() {
    try {
        const res = await fetch(`https://api.storyblok.com/v2/cdn/stories?starts_with=blog&token=${TOKEN}&version=published&per_page=100`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) return [];
        const data = await res.json();
        return (data.stories ?? []).map((s: { slug: string }) => ({ slug: s.slug }));
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const story = await getStory(slug);
    if (!story) return {};
    return {
        title: story.name,
        description: story.content?.meta_description,
        openGraph: {
            title: story.name,
            description: story.content?.meta_description,
            images: story.content?.image?.filename ? [story.content.image.filename] : [],
            type: "article",
        },
        alternates: { canonical: `https://idealcredit.md/blog/${slug}` },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const story = await getStory(slug);
    if (!story) notFound();

    const { render } = richTextResolver();
    const htmlText = story.content?.content ? String(render(story.content.content)) : "";

    return (
        <div className="py-4 md:py-8 blog-page">
            <div className="container sm-container">
                <h1 className="text-2xl md:text-3xl mb-4 font-bold">{story.name}</h1>
                {story.content?.image?.filename && (
                    <div className="relative w-full aspect-video rounded overflow-hidden">
                        <Image
                            src={story.content.image.filename}
                            alt={story.content.image.alt || story.name}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                )}
                <div className="mt-6">
                    <div className="richtext text-lg" dangerouslySetInnerHTML={{ __html: htmlText }} />
                </div>
                <div className="mt-6 space-y-2 border-t pt-6">
                    <p>
                        Vă mulțumim că ați citit articolul <span className="font-bold">&quot;{story.name}&quot;</span>.
                    </p>
                    <p>
                        Vedeți și{" "}
                        <Link href="/blog" title="Blog financiar" className="link">
                            alte articole
                        </Link>{" "}
                        pentru mai multe informații.
                    </p>
                </div>
            </div>
        </div>
    );
}
