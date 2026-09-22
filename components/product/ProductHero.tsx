import Container from "@/components/ds/Container";
import Breadcrumb from "@/components/ds/Breadcrumb";
import { ButtonPrimary, ButtonSecondary } from "@/components/ds/Button";

type Cta = { label: string; href: string };

export default function ProductHero({
    breadcrumb,
    category,
    position,
    total = 6,
    title,
    subtitle,
    primaryCta,
    secondaryCta,
}: {
    breadcrumb?: { name: string; url: string }[];
    category: string;
    position: number;
    total?: number;
    title: React.ReactNode;
    subtitle: string;
    primaryCta: Cta;
    secondaryCta: Cta;
}) {
    return (
        <div className="dc-section dc-section--hero">
            <Container>
                {breadcrumb && <Breadcrumb items={breadcrumb} />}
                <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                    <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                    {category} · <span className="font-dc-mono">{String(position).padStart(2, "0")}</span> din {total} soluții
                </p>
                <h1 className="mt-7 max-w-[1000px] text-[clamp(52px,9vw,124px)] font-semibold leading-[.92] tracking-[-.048em] text-dc-text">
                    {title}
                </h1>
                <p className="mt-7 max-w-[620px] text-[19px] leading-[1.55] text-dc-text-muted">{subtitle}</p>
                <div className="mt-8 flex flex-wrap gap-3.5">
                    <ButtonPrimary href={primaryCta.href}>{primaryCta.label}</ButtonPrimary>
                    <ButtonSecondary href={secondaryCta.href}>{secondaryCta.label}</ButtonSecondary>
                </div>
            </Container>
        </div>
    );
}
