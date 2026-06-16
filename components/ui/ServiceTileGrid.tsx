import Link from "next/link";

export interface ServiceTileItem {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    label: string;
    href?: string | null;
}

interface ServiceTileGridProps {
    heading: string;
    items: ServiceTileItem[];
}

export default function ServiceTileGrid({ heading, items }: ServiceTileGridProps) {
    return (
        <section className="container">
            <h2 className="title text-center">{heading}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {items.map(({ icon: Icon, label, href }) => {
                    const inner = (
                        <>
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                                <Icon size={22} />
                            </span>
                            <span className="text-sm font-medium text-white text-center leading-snug">{label}</span>
                        </>
                    );
                    const base = "flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/8 bg-black-600/60";
                    return href ? (
                        <Link
                            key={label}
                            href={href}
                            className={`${base} hover:border-white/15 hover:bg-black-600 transition-colors`}
                        >
                            {inner}
                        </Link>
                    ) : (
                        <div key={label} className={base}>
                            {inner}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
