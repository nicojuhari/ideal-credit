import type { Metadata } from "next";
import {
    Breadcrumb,
    Button,
    Card,
    CtaBand,
    DataTile,
    EligibilityChecklist,
    EyebrowLabel,
    FaqAccordion,
    GuideCard,
    HairlineGrid,
    InsetNote,
    ListRows,
    LoanCalculator,
    PullQuote,
    Reveal,
    SectionBand,
    SectionHeading,
    StatCells,
    StepRows,
    TrustStrip,
} from "@/components/ds";
import { TokenSwatch } from "./TokenSwatch";

export const metadata: Metadata = {
    title: "Design system v4 | Ideal Credit",
    robots: { index: false, follow: false },
};

/* ── reference data ─────────────────────────────────────────────────────── */
const COLORS: Array<[string, string]> = [
    ["bg", "bg-bg"],
    ["surface", "bg-surface"],
    ["section", "bg-section"],
    ["inset", "bg-inset"],
    ["hover", "bg-hover"],
    ["text", "bg-text"],
    ["text-2", "bg-text-2"],
    ["text-3", "bg-text-3"],
    ["brand", "bg-brand"],
    ["brand-light", "bg-brand-light"],
    ["quote", "bg-quote"],
    ["verdict-low", "bg-verdict-low"],
    ["line", "bg-line"],
    ["line-strong", "bg-line-strong"],
    ["brand-border", "bg-brand-border"],
    ["row-hover", "bg-row-hover"],
];

const TYPE: Array<[string, string, string]> = [
    ["h1", "text-h1", "clamp(38, 5vw, 66) / 1.02 / -0.04em / 600"],
    ["h1-service", "text-h1-service", "clamp(38, 4.8vw, 64) / 1.02 / -0.04em / 600"],
    ["h2", "text-h2", "42 / 1.05 / -0.035em / 600"],
    ["h2-cta", "text-h2-cta", "46 / 1.04 / -0.04em / 600"],
    ["h3-product", "text-h3-product", "28 / -0.03em / 600"],
    ["h3-check", "text-h3-check", "26 / -0.025em / 600"],
    ["h3-card", "text-h3-card", "23 / -0.025em / 600"],
    ["h3-step", "text-h3-step", "24 / -0.02em / 600"],
    ["h3-row", "text-h3-row", "22 / -0.02em / 500"],
    ["h3-guide", "text-h3-guide", "21 / 1.25 / -0.02em / 500"],
    ["panel-title", "text-panel-title", "21 / -0.02em / 600"],
    ["pullquote", "text-pullquote", "30 / 1.32 / -0.025em / 500"],
    ["lead", "text-lead", "19 / 1.6"],
    ["body", "text-body", "16 / 1.6"],
    ["row-title", "text-row-title", "19 / 500 / -0.01em"],
    ["row", "text-row", "17 / 1.5"],
    ["small", "text-small", "15 / 1.6"],
    ["meta", "text-meta", "14 / 1.5"],
    ["fine", "text-fine", "13 / 1.5"],
    ["eyebrow (mono)", "font-figure text-eyebrow uppercase", "12 / 0.1em"],
    ["strip (mono)", "font-figure text-strip uppercase", "12.5 / 0.06em"],
    ["figure-xl (mono)", "font-figure text-figure-xl", "44 / -0.03em"],
    ["figure-lg (mono)", "font-figure text-figure-lg", "40 / -0.03em"],
    ["figure-md (mono)", "font-figure text-figure-md", "30 / -0.02em"],
    ["figure (mono)", "font-figure text-figure", "25"],
    ["figure-sm (mono)", "font-figure text-figure-sm", "23"],
    ["figure-xs (mono)", "font-figure text-figure-xs", "18"],
];

function Block({ id, title, note, children }: { id: string; title: string; note?: string; children: React.ReactNode }) {
    return (
        <section id={id} className="border-t border-line py-14 max-ds-sm:py-10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                <h2 className="text-h3-card">{title}</h2>
                {note && <p className="max-w-[620px] text-meta text-text-3">{note}</p>}
            </div>
            <div className="mt-8">{children}</div>
        </section>
    );
}

export default function DesignSystemPage() {
    return (
        <>
            <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Design system v4" }]} />
            <SectionBand spacing="bottom" className="pt-11">
                <EyebrowLabel variant="chip">Referință internă · v4</EyebrowLabel>
                <h1 className="mt-6 text-h2">Design system</h1>
                <p className="mt-5 max-w-[620px] text-lead text-text-2">
                    Fiecare componentă, în fiecare variantă și stare. Tokens only, colțuri drepte, două hairline-uri, mono pentru toate cifrele, Archivo
                    pentru restul. Documentație completă în <code className="font-figure text-[15px]">design-system/README.md</code>.
                </p>
                <nav aria-label="Cuprins" className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-figure text-fine text-text-3">
                    {[
                        "tokens",
                        "type",
                        "buttons",
                        "eyebrow",
                        "hairline-grid",
                        "data-tile",
                        "stat-cells",
                        "step-rows",
                        "list-rows",
                        "card",
                        "pull-quote",
                        "guide-card",
                        "faq",
                        "inset-note",
                        "calculator",
                        "checklist",
                        "trust-strip",
                        "section-band",
                        "reveal",
                        "cta-band",
                    ].map((id) => (
                        <a key={id} href={`#${id}`} className="hover:text-brand">
                            #{id}
                        </a>
                    ))}
                </nav>

                <Block id="tokens" title="Colour tokens" note="12 values. Hairlines: line (0.14) and line-strong (0.24); interaction values documented in tokens.css.">
                    <HairlineGrid columns={4} frame>
                        {COLORS.map(([name, cls]) => (
                            <TokenSwatch key={name} name={name} className={cls} />
                        ))}
                    </HairlineGrid>
                    <div className="mt-5 grid grid-cols-2 gap-5 max-ds-sm:grid-cols-1">
                        <div className="border border-line p-5">
                            <div className="font-figure text-fine text-text-3">line · standard hairline</div>
                            <div className="mt-3 border-t border-line" />
                        </div>
                        <div className="border border-line p-5">
                            <div className="font-figure text-fine text-text-3">line-strong · emphasis / interactive</div>
                            <div className="mt-3 border-t border-line-strong" />
                        </div>
                    </div>
                </Block>

                <Block id="type" title="Type scale" note="Archivo 400/500/600 for UI; IBM Plex Mono 400/500 for every figure, label and eyebrow. tabular-nums everywhere.">
                    <div className="flex flex-col gap-6">
                        {TYPE.map(([role, cls, spec]) => (
                            <div key={role} className="grid grid-cols-[minmax(0,180px)_minmax(0,1fr)] items-baseline gap-6 border-b border-line pb-5 max-ds-sm:grid-cols-1 max-ds-sm:gap-2">
                                <div className="font-figure text-fine text-text-3">
                                    {role}
                                    <br />
                                    {spec}
                                </div>
                                <div className={`${cls} overflow-hidden text-ellipsis`}>Capital pentru afacerea ta, 100.000 MDL</div>
                            </div>
                        ))}
                    </div>
                </Block>

                <Block id="buttons" title="Button" note="Variants: paper · paper-ink · outline · ink · band. Sizes: sm 44 · md 50 · calc 54 · lg 56 · xl 58. Every row wraps; every label has gap 0.32em.">
                    <div className="flex flex-col gap-6">
                        {(["sm", "md", "calc", "lg", "xl"] as const).map((size) => (
                            <div key={size} className="flex flex-wrap items-center gap-3">
                                <span className="w-12 font-figure text-fine text-text-3">{size}</span>
                                <Button variant="paper" size={size}>
                                    Solicită credit
                                </Button>
                                <Button variant="paper-ink" size={size}>
                                    Condiții pentru afaceri →
                                </Button>
                                <Button variant="outline" size={size}>
                                    Contactează-ne
                                </Button>
                                <Button variant="ink" size={size}>
                                    Vorbește cu un consultant
                                </Button>
                                <span className="inline-flex bg-brand p-2">
                                    <Button variant="band" size={size}>
                                        Cerere online
                                    </Button>
                                </span>
                            </div>
                        ))}
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="w-12 font-figure text-fine text-text-3">full</span>
                            <div className="w-full max-w-[420px]">
                                <Button variant="paper" size="calc" full>
                                    <span>Solicită</span>
                                    <span>100.000</span>
                                    <span>MDL</span>
                                </Button>
                            </div>
                            <Button variant="paper" size="md" disabled className="opacity-50">
                                disabled
                            </Button>
                        </div>
                    </div>
                </Block>

                <Block id="eyebrow" title="EyebrowLabel" note="Mono uppercase 12px. Variants text / chip; tones muted / brand / paper.">
                    <div className="flex flex-wrap items-center gap-6">
                        <EyebrowLabel>Cum funcționează</EyebrowLabel>
                        <EyebrowLabel tone="brand">Transparență</EyebrowLabel>
                        <EyebrowLabel tone="paper" tracking="tight">
                            Produse
                        </EyebrowLabel>
                        <EyebrowLabel variant="chip">OCN licențiată · din 2010</EyebrowLabel>
                    </div>
                </Block>

                <Block id="hairline-grid" title="HairlineGrid" note="gap:1px on a hairline background with filled cells — the gap is the rule. 4→2→1 and 3→1 by default.">
                    <HairlineGrid columns={4} frame>
                        {["01", "02", "03", "04"].map((n) => (
                            <div key={n} className="p-6">
                                <span className="font-figure text-eyebrow text-text-3">{n}</span>
                                <p className="mt-3 text-small text-text-2">Cell filled with bg; frame on.</p>
                            </div>
                        ))}
                    </HairlineGrid>
                    <div className="mt-5">
                        <HairlineGrid columns={3} edges>
                            {["a", "b", "c"].map((n) => (
                                <div key={n} className="py-6 text-small text-text-2">
                                    edges only · {n}
                                </div>
                            ))}
                        </HairlineGrid>
                    </div>
                </Block>

                <Block id="data-tile" title="DataTile" note="Framed 2-column tile. size md (calculator) / sm (promise card). First value may be brand.">
                    <div className="grid grid-cols-2 gap-5 max-ds-sm:grid-cols-1">
                        <DataTile
                            items={[
                                { label: "Prima rată", value: "1.233", tone: "brand" },
                                { label: "Ultima rată", value: "867" },
                                { label: "Cost total credit", value: "2.600" },
                                { label: "DAE", value: "60,1%" },
                            ]}
                        />
                        <div>
                            <DataTile
                                size="sm"
                                items={[
                                    { label: "Dobândă", value: "4% / lună" },
                                    { label: "Comisioane", value: "0 MDL", tone: "brand" },
                                ]}
                            />
                        </div>
                    </div>
                </Block>

                <Block id="stat-cells" title="StatCells" note="Static mono figures — never a count-up. xl on a section band; md in the service hero.">
                    <div className="bg-section p-6">
                        <StatCells
                            items={[
                                { value: "16", label: "ani de activitate" },
                                { value: "4.9", label: "rating Google" },
                                { value: "10", label: "produse de credit" },
                                { value: "0", label: "comisioane ascunse" },
                            ]}
                        />
                    </div>
                    <div className="mt-5 max-w-[560px]">
                        <StatCells
                            size="md"
                            cellTone="bg"
                            items={[
                                { value: "1–2", label: "zile până la decizie" },
                                { value: "3 luni", label: "activitate minimă" },
                                { value: "0", label: "plan de afaceri cerut" },
                            ]}
                        />
                    </div>
                </Block>

                <Block id="step-rows" title="StepRows" note="layout=cells (home, brand-light labels, rules meet the shell edges) and layout=rows (service, 64px brand label column).">
                    <div className="bg-section px-6">
                        <StepRows
                            layout="cells"
                            steps={[
                                { label: "Pas 01", title: "Depui cererea", body: "Online, la telefon, pe Viber/WhatsApp sau într-unul din oficii." },
                                { label: "Pas 02", title: "Primești răspunsul", body: "În câteva ore în timpul programului, cu suma și rata exactă." },
                                { label: "Pas 03", title: "Semnezi și iei banii", body: "Contractul se semnează în oficiu, banii se eliberează imediat." },
                            ]}
                        />
                    </div>
                    <div className="mt-8 max-w-[760px]">
                        <StepRows
                            layout="rows"
                            steps={[
                                { label: "Pas 01", title: "Prima discuție", body: "Ne spui de cât ai nevoie și pentru ce." },
                                { label: "Pas 02", title: "Analiza extraselor", body: "Trimiți extrasele pe 3–6 luni și actele firmei." },
                            ]}
                        />
                    </div>
                </Block>

                <Block id="list-rows" title="ListRows" note="product: link rows, 10px hover nudge, description stacks under the title ≤640. plain: single 17px lines, no hover.">
                    <div className="grid grid-cols-2 gap-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                        <ListRows
                            heading="Pentru afaceri"
                            items={[
                                { title: "Afaceri mici", description: "Capital rapid pentru SRL, ÎI și antreprenori.", href: "/credite/credit-pentru-afaceri-mici" },
                                { title: "Capital de lucru", description: "Salarii, furnizori, stoc — flux fără întreruperi.", href: "/credite/credit-capital-de-lucru" },
                            ]}
                        />
                        <ListRows
                            variant="plain"
                            heading="Condiții"
                            headingTone="muted"
                            items={[{ title: "Firmă înregistrată în Moldova (SRL, ÎI, GȚ)" }, { title: "Activitate economică de cel puțin 3–6 luni" }]}
                        />
                    </div>
                </Block>

                <Block id="card" title="Card" note="Hairline box. padding card/product/check/guide/panel · hover tint/brand/none · tone bg/surface.">
                    <div className="grid grid-cols-3 gap-5 max-ds-md:grid-cols-1">
                        <Card padding="card">
                            <EyebrowLabel tone="brand">Viteză</EyebrowLabel>
                            <h3 className="mt-[18px] text-h3-card">Răspuns înainte de prânz</h3>
                            <p className="mt-3 text-body text-text-2">hover → orange tint border</p>
                            <div className="mt-auto pt-[26px] font-figure text-figure-lg">1–3 h</div>
                        </Card>
                        <Card padding="product" hover="brand">
                            <EyebrowLabel>01 / Afaceri</EyebrowLabel>
                            <h3 className="mt-[22px] text-h3-product">Credit pentru afaceri</h3>
                            <p className="mt-3.5 text-body text-text-3">hover → solid orange border</p>
                        </Card>
                        <Card padding="card" tone="surface" hover="none">
                            <h3 className="text-panel-title">Surface tone</h3>
                            <p className="mt-3 text-body text-text-2">The calculator panel material. No hover.</p>
                        </Card>
                    </div>
                </Block>

                <Block id="pull-quote" title="PullQuote" note="64px panel: pull quote + initials square on the left, side quotes behind a vertical hairline (stacks ≤900).">
                    <PullQuote
                        quote="„Am modernizat magazinul în 3 luni. Proces simplu, dobândă fixă și oameni care explică fiecare cifră.”"
                        name="Ion C."
                        role="Proprietar de magazin, Căușeni"
                        initials="IC"
                        side={[
                            { text: "„Banca m-a refuzat, voi m-ați ajutat în 2 zile.”", meta: "Victor · credit pentru automobil" },
                            { text: "„Transparență totală, fără comisioane ascunse.”", meta: "Maria · antreprenoare" },
                        ]}
                    />
                </Block>

                <Block id="guide-card" title="GuideCard" note="Whole card is the link. Read time in mono, 'Citește →' pinned to the bottom.">
                    <div className="grid grid-cols-3 gap-5 max-ds-md:grid-cols-1">
                        <GuideCard
                            href="/blog/ocn-vs-banca-credit-afaceri-moldova"
                            readTime="9 min"
                            title="OCN sau bancă: ce să alegi pentru creditul de afacere"
                            description="Când e mai bun fiecare, de ce diferă dobânzile și cum decizi fără să greșești."
                        />
                    </div>
                </Block>

                <Block id="faq" title="FaqAccordion" note="Single-open disclosure: <button aria-expanded> per question, + → − glyph in orange when open, 8px hover nudge. defaultOpen 0; -1 = all closed.">
                    <div className="grid grid-cols-2 gap-16 max-ds-md:grid-cols-1 max-ds-md:gap-10">
                        <FaqAccordion
                            defaultOpen={0}
                            items={[
                                { question: "Dobânda este fixă sau flotantă?", answer: "Fixă pe toată durata contractului. Rata scade lunar, pentru că dobânda se calculează la soldul rămas." },
                                { question: "Pot rambursa creditul anticipat?", answer: "Da, gratuit și oricând." },
                            ]}
                        />
                        <FaqAccordion
                            defaultOpen={-1}
                            items={[
                                { question: "Toate închise (defaultOpen = -1)", answer: "Răspuns." },
                                { question: "A doua întrebare", answer: "Răspuns." },
                            ]}
                        />
                    </div>
                </Block>

                <Block id="inset-note" title="InsetNote" note="inset fill, 26/34 padding, 15px text-2, max-width 900.">
                    <InsetNote>Primul credit se acordă cu garant. Clienții cu istoric bun nu mai au nevoie de garant la creditele următoare.</InsetNote>
                </Block>

                <Block id="calculator" title="LoanCalculator" note="Native ranges with labels and aria-valuetext in MDL; declining-balance 4%/month (lib/loan-math.ts, unit-tested). Left: home props. Right: service props, sticky.">
                    <div className="grid grid-cols-2 gap-5 max-ds-md:grid-cols-1">
                        <LoanCalculator />
                        <LoanCalculator title="Simulează creditul" minAmount={20_000} defaultAmount={150_000} />
                    </div>
                </Block>

                <Block id="checklist" title="EligibilityChecklist" note="Real checkboxes. Verdict: 4 → brand 'Dosarul tău se califică' · 2–3 → brand-light 'Probabil se poate' · 0–1 → muted dot 'Hai să discutăm'.">
                    <div className="grid grid-cols-3 gap-5 max-ds-md:grid-cols-1">
                        <EligibilityChecklist defaultTicked={[true, true, true, true]} />
                        <EligibilityChecklist defaultTicked={[true, true, true, false]} />
                        <EligibilityChecklist defaultTicked={[true, false, false, false]} />
                    </div>
                </Block>

                <Block id="trust-strip" title="TrustStrip" note="One wrapping row between two hairlines, mono uppercase 12.5px.">
                    <TrustStrip items={["Achitare online banking", "VictoriaBank", "Poșta Moldovei", "Numerar în oficii", "Rambursare anticipată gratuită"]} />
                </Block>

                <Block id="section-band" title="SectionBand + SectionHeading" note="Every page section: tone bg/section · spacing bottom/both/follow/hero/none. Rhythm scales 112 → 72 → 56; shell padding 40 → 24 → 20.">
                    <div className="border border-line">
                        <SectionBand tone="section" spacing="both">
                            <SectionHeading
                                title={
                                    <>
                                        Alege direcția.
                                        <br />
                                        Restul îl clarificăm noi.
                                    </>
                                }
                                aside="Două trasee, aceleași reguli: costurile spuse din prima discuție și un răspuns în aceeași zi lucrătoare."
                            />
                        </SectionBand>
                    </div>
                </Block>

                <Block id="reveal" title="Reveal" note="One-shot fade-up, fail-safe: already-visible blocks show on mount, 900ms JS timeout, 1.2s CSS fallback, hidden state only under (scripting: enabled), disabled under reduced motion. Never carries content.">
                    <Reveal>
                        <Card padding="card" hover="none">
                            <p className="text-body text-text-2">This block was wrapped in &lt;Reveal&gt;. Reload the page to see it fade in.</p>
                        </Card>
                    </Reveal>
                </Block>

                <Block id="breadcrumb" title="Breadcrumb" note="Mono uppercase trail; the current page is text-2 and not a link.">
                    <div className="-mx-[var(--shell-x)]">
                        <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Credite", href: "/credite" }, { label: "Afaceri mici" }]} />
                    </div>
                </Block>
            </SectionBand>

            <div id="cta-band">
                <CtaBand title="Spune-ne de cât ai nevoie. Restul e treaba noastră." lead="CtaBand: solid orange, ink type, band button, mono phone line." />
            </div>
        </>
    );
}
