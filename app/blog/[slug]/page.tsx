import { notFound } from "next/navigation";

// This route is kept as a fallback - all known blog slugs are either:
// 1. Handled by individual static pages in app/blog/(articles)/
// 2. Redirected to new slugs via next.config.ts
export default function LegacyBlogPage() {
 notFound();
}
