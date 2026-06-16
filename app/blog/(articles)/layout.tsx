import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="py-8 md:py-12">
            <div className="container sm-container">
                {/* Back link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors mb-8"
                >
                    ← Înapoi la blog
                </Link>

                {/* Article content */}
                <article>{children}</article>

                {/* Consultation CTA */}
                <div className="mt-12 rounded-2xl border border-brand-500/20 bg-black-600/60 p-7 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-brand-500/60 via-brand-500/20 to-transparent" />
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">Ideal Credit</p>
                    <h2 className="text-xl md:text-2xl font-medium text-white mb-2">Ai o întrebare despre situația ta concretă?</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xl">
                        Articolele explică principii generale. Situația ta poate fi diferită. Consultăm gratuit - fără angajamente, fără
                        presiuni. Dacă există o soluție potrivită pentru tine, o găsim împreună.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/cerere-de-credit-online"
                            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-black font-medium px-5 py-2.5 text-sm transition-colors"
                        >
                            Aplică online <ArrowRight size={15} />
                        </Link>
                        <Link
                            href="/contacte"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/15 hover:border-white/30 text-white hover:bg-white/5 font-medium px-5 py-2.5 text-sm transition-colors"
                        >
                            Contactează-ne
                        </Link>
                    </div>
                </div>

                {/* Bottom back link */}
                <div className="mt-8 pt-6 border-t border-white/5">
                    <Link href="/blog" className="text-sm text-gray-500 hover:text-white transition-colors">
                        ← Toate articolele
                    </Link>
                </div>
            </div>
        </div>
    );
}
