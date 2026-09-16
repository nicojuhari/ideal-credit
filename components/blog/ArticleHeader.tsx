import { formatDateRo } from "@/lib/utils";

export default function ArticleHeader({ title, dek, date }: { title: string; dek: string; date: string }) {
    return (
        <header className="mb-12">
            <h1 className="text-[clamp(30px,4.4vw,46px)] font-semibold leading-[1.08] tracking-[-.03em] text-dc-text">
                {title}
            </h1>
            <p className="mt-5 max-w-[640px] text-[15px] leading-[1.6] text-dc-text-muted">{dek}</p>
            <p className="mt-6 border-t border-dc-line pt-5 font-dc-mono text-[13px] text-dc-text-muted">
                <time dateTime={date}>{formatDateRo(date)}</time>
            </p>
        </header>
    );
}
