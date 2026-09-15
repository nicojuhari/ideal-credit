import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ButtonText } from "@/components/ds/Button";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: ({ children }) => (
            <h1 className="mb-7 mt-0 text-[clamp(34px,5vw,50px)] font-semibold leading-[1.05] tracking-[-.035em] text-dc-text">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="mb-4 mt-12 text-2xl font-semibold tracking-[-.02em] text-dc-text">{children}</h2>
        ),
        h3: ({ children }) => <h3 className="mb-3 mt-8 text-xl tracking-[-.02em] text-dc-text">{children}</h3>,
        p: ({ children }) => <p className="mb-4 text-[17px] leading-[1.6] text-dc-text-muted">{children}</p>,
        ul: ({ children }) => <ul className="mb-6 flex flex-col gap-2 pl-5 text-[17px] leading-[1.6] text-dc-text-muted">{children}</ul>,
        ol: ({ children }) => <ol className="mb-6 flex flex-col gap-2 pl-5 text-[17px] leading-[1.6] text-dc-text-muted">{children}</ol>,
        li: ({ children }) => <li className="pl-1">{children}</li>,
        strong: ({ children }) => <strong className="font-semibold text-dc-text">{children}</strong>,
        a: ({ href, children }) =>
            href?.startsWith("/") ? (
                <Link href={href} className="text-dc-accent underline underline-offset-4 transition-colors hover:text-dc-text">
                    {children}
                </Link>
            ) : (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dc-accent underline underline-offset-4 transition-colors hover:text-dc-text"
                >
                    {children}
                </a>
            ),
        table: ({ children }) => (
            <div className="my-8 overflow-x-auto border border-dc-line">
                <table className="w-full border-collapse text-[15px]">{children}</table>
            </div>
        ),
        thead: ({ children }) => <thead>{children}</thead>,
        tbody: ({ children }) => <tbody>{children}</tbody>,
        tr: ({ children }) => <tr className="border-b border-dc-line last:border-0">{children}</tr>,
        th: ({ children }) => (
            <th className="bg-dc-surface px-4 py-3 text-left text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                {children}
            </th>
        ),
        td: ({ children }) => <td className="px-4 py-3 text-dc-text-muted">{children}</td>,
        hr: () => <hr className="my-10 border-dc-line" />,
        blockquote: ({ children }) => (
            <blockquote className="my-6 border-l border-dc-accent pl-5 italic text-dc-text">{children}</blockquote>
        ),
        // Custom components available in MDX files
        ComparisonTable: ({ headers, rows, highlight }: { headers: string[]; rows: string[][]; highlight?: number[] }) => (
            <div className="my-8 overflow-x-auto border border-dc-line">
                <table className="w-full border-collapse text-[15px]">
                    <thead>
                        <tr className="border-b border-dc-line">
                            {headers.map((h, i) => (
                                <th key={i} className="bg-dc-surface px-4 py-3 text-left text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, ri) => (
                            <tr key={ri} className="border-b border-dc-line last:border-0">
                                {row.map((cell, ci) => (
                                    <td
                                        key={ci}
                                        className={`px-4 py-3 ${highlight?.includes(ri) ? "font-medium text-dc-accent" : "text-dc-text-muted"}`}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ),
        InfoBox: ({ children }: { children: React.ReactNode }) => (
            <div className="my-6 flex gap-3.5 border border-dc-line bg-dc-surface px-6 py-5 text-[15px] leading-[1.55] text-dc-text-muted">
                <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                <div>{children}</div>
            </div>
        ),
        CTALink: ({ href, children }: { href: string; children: React.ReactNode }) => (
            <div className="my-4">
                <ButtonText href={href}>{children} →</ButtonText>
            </div>
        ),
    };
}
