export default function ArticleHeader({ title, dek }: { title: string; dek: string }) {
    return (
        <header className="mb-12">
            <h1 className="text-[clamp(30px,4.4vw,46px)] font-semibold leading-[1.08] tracking-[-.03em] text-dc-text">
                {title}
            </h1>
            <p className="mt-5 max-w-[640px] text-[16px] leading-[1.6] text-dc-text-muted">{dek}</p>
        </header>
    );
}
