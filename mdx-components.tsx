import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
 return {
 ...components,
 h1: ({ children }) => (
 <h1 className="text-2xl md:text-3xl font-semibold mb-6 mt-0 leading-tight text-white">{children}</h1>
 ),
 h2: ({ children }) => (
 <h2 className="text-xl md:text-2xl font-medium mt-12 mb-4 text-white">{children}</h2>
 ),
 h3: ({ children }) => (
 <h3 className="text-lg font-medium mt-8 mb-3 text-white/90">{children}</h3>
 ),
 p: ({ children }) => (
 <p className="leading-relaxed font-light mb-4">{children}</p>
 ),
 ul: ({ children }) => (
 <ul className="list-disc pl-5 space-y-2 mb-6 font-light">{children}</ul>
 ),
 ol: ({ children }) => (
 <ol className="list-decimal pl-5 space-y-2 mb-6 font-light">{children}</ol>
 ),
 li: ({ children }) => <li className="leading-relaxed">{children}</li>,
 strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
 a: ({ href, children }) =>
 href?.startsWith("/") ? (
 <Link href={href} className="text-brand-500 underline underline-offset-2 hover:text-brand-400 transition-colors">
 {children}
 </Link>
 ) : (
 <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-500 underline underline-offset-2 hover:text-brand-400 transition-colors">
 {children}
 </a>
 ),
 table: ({ children }) => (
 <div className="overflow-x-auto my-6">
 <table className="w-full border-collapse text-sm">{children}</table>
 </div>
 ),
 thead: ({ children }) => <thead>{children}</thead>,
 tbody: ({ children }) => <tbody>{children}</tbody>,
 tr: ({ children }) => <tr className="border-b border-white/8">{children}</tr>,
 th: ({ children }) => (
 <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider bg-white/3 first:rounded-tl-lg last:rounded-tr-lg">
 {children}
 </th>
 ),
 td: ({ children }) => (
 <td className="px-4 py-3 font-light">{children}</td>
 ),
 hr: () => <hr className="border-white/10 my-10" />,
 blockquote: ({ children }) => (
 <blockquote className="border-l-2 border-brand-500/60 pl-5 my-6 italic">{children}</blockquote>
 ),
 // Custom components available in MDX files
 ComparisonTable: ({
 headers,
 rows,
 highlight,
 }: {
 headers: string[];
 rows: string[][];
 highlight?: number[];
 }) => (
 <div className="overflow-x-auto my-6 rounded-xl border border-white/8">
 <table className="w-full border-collapse text-sm">
 <thead>
 <tr className="border-b border-white/8">
 {headers.map((h, i) => (
 <th key={i} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider bg-white/3">
 {h}
 </th>
 ))}
 </tr>
 </thead>
 <tbody>
 {rows.map((row, ri) => (
 <tr key={ri} className={`border-b border-white/5 last:border-0 ${highlight?.includes(ri) ?"bg-brand-500/5" :""}`}>
 {row.map((cell, ci) => (
 <td key={ci} className={`px-4 py-3 font-light ${highlight?.includes(ri) ?"text-brand-500 font-medium" :""}`}>
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
 <div className="flex gap-3 rounded-xl border border-white/10 bg-white/3 px-5 py-4 my-6 text-sm">
 <Info size={16} className="shrink-0 mt-0.5 text-brand-500" />
 <div>{children}</div>
 </div>
 ),
 CTALink: ({ href, children }: { href: string; children: React.ReactNode }) => (
 <Link
 href={href}
 className="inline-flex items-center gap-2 rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-500 hover:bg-brand-500/20 transition-colors px-5 py-2.5 text-sm font-medium my-2"
 >
 {children} <ArrowRight size={15} />
 </Link>
 ),
 };
}
