import type { Metadata } from "next";
import BlogCards from "@/components/BlogCards";

export const metadata: Metadata = {
  title: "Blog Financiar - Sfaturi și Strategii | Ideal Credit",
  description:
    "Blog financiar cu ghiduri simple despre credite, gestionarea cash-flow-ului și planificare financiară. Informații practice pentru afaceri și persoane fizice",
  alternates: { canonical: "https://idealcredit.md/blog" },
};

async function getStories() {
  try {
    const token = process.env.STORYBLOK_ACCESS_TOKEN;
    const res = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?starts_with=blog&token=${token}&version=published&per_page=100`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.stories ?? [];
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const stories = await getStories();

  return (
    <div className="container my-4 md:my-6">
      <h1 className="title text-center my-10">Blog financiar</h1>
      {stories.length > 0 ? (
        <BlogCards stories={stories} />
      ) : (
        <div className="text-center text-gray-500 py-20">Se încarcă...</div>
      )}
    </div>
  );
}
