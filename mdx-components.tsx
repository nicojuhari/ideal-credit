import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ProseTable, ProseTbody, ProseTd, ProseTh, ProseThead, ProseTr } from "@/components/blog/ProseTable";

// Wires Next.js's App Router MDX support to every .mdx page automatically -
// see brand/blog-editorial-strategy.md. Only overrides what article prose
// actually needs (dc-legal in the layout already styles h2/p/ul/ol/strong);
// tables get the dc hairline/mono treatment, links go through next/link.

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        table: ProseTable,
        thead: ProseThead,
        tbody: ProseTbody,
        tr: ProseTr,
        th: ProseTh,
        td: ProseTd,
        a: ({ href, ...props }) => (href?.startsWith("/") ? <Link href={href} {...props} /> : <a href={href} {...props} />),
        ...components,
    };
}
