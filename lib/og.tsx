import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png";

const COLOR = {
    bg: "#0b0b0b",
    line: "#212121",
    text: "#f7f7f7",
    muted: "#aaaaaa",
    accent: "#ff9a00",
    proof: "#86a873",
};

const Logo = () => (
    <svg viewBox="0 0 600 600" width="40" height="40" style={{ display: "flex" }}>
        <circle cx="300" cy="300" r="300" fill="#222" />
        <circle cx="326.5" cy="96.5" r="43" fill="#fff" stroke="#000" />
        <path d="M391.5,93.5c3,181-375,158-204,440C102.5,313.5,421.5,356.5,391.5,93.5Z" fill="#ff9a00" />
        <path d="M450.5,274.5c26,250-239,101-253,259C178.5,310.5,427.5,449.5,450.5,274.5Z" fill="#ff9a00" />
    </svg>
);

async function loadFont(family: string, text: string, weight: number, italic = false) {
    const axis = italic ? `ital,wght@1,${weight}` : `wght@${weight}`;
    const cssUrl = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:${axis}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(cssUrl)).text();
    const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
    if (!match) throw new Error(`OG font fetch failed for ${family} ${weight}${italic ? " italic" : ""}`);
    const res = await fetch(match[1]);
    return res.arrayBuffer();
}

export type OgImageProps = {
    /** Category label shown above the headline, e.g. "Persoane juridice" - omit for pages with no ProductHero eyebrow */
    eyebrowLabel?: string;
    eyebrowPosition?: number;
    eyebrowTotal?: number;
    /** Full headline text, plain */
    title: string;
    /** Substring of `title` rendered as the site's one italic accent word */
    accent: string;
    subtitle?: string;
};

export async function renderOgImage({ eyebrowLabel, eyebrowPosition, eyebrowTotal, title, accent, subtitle }: OgImageProps) {
    const idx = title.indexOf(accent);
    const hasAccent = idx >= 0;
    const before = hasAccent ? title.slice(0, idx) : title;
    const after = hasAccent ? title.slice(idx + accent.length) : "";
    const posLabel = eyebrowPosition ? String(eyebrowPosition).padStart(2, "0") : "";

    const allText = [eyebrowLabel, posLabel, eyebrowTotal ? `din ${eyebrowTotal} soluții` : "", title, subtitle, "Ideal Credit idealcredit.md"]
        .filter(Boolean)
        .join(" ");

    const [archivo600, archivo500, archivo400, plexMono500, serifItalic400] = await Promise.all([
        loadFont("Archivo", allText, 600),
        loadFont("Archivo", allText, 500),
        loadFont("Archivo", allText, 400),
        loadFont("IBM+Plex+Mono", allText, 500),
        loadFont("Instrument+Serif", allText, 400, true),
    ]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: COLOR.bg,
                    border: `1px solid ${COLOR.line}`,
                    fontFamily: "Archivo",
                }}
            >
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 84px" }}>
                    {eyebrowLabel && (
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 30 }}>
                            <div style={{ width: 10, height: 10, backgroundColor: COLOR.proof }} />
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontSize: 21,
                                    fontWeight: 500,
                                    letterSpacing: 2,
                                    textTransform: "uppercase",
                                    color: COLOR.muted,
                                }}
                            >
                                <span>{eyebrowLabel}</span>
                                <span>·</span>
                                <span style={{ fontFamily: "IBM Plex Mono", fontWeight: 500 }}>{posLabel}</span>
                                <span>din {eyebrowTotal} soluții</span>
                            </div>
                        </div>
                    )}
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            columnGap: 16,
                            fontSize: 72,
                            fontWeight: 600,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.04,
                            color: COLOR.text,
                            maxWidth: 1000,
                        }}
                    >
                        <span>{before.trim()}</span>
                        {hasAccent && (
                            <span style={{ fontFamily: "Instrument Serif", fontStyle: "italic", fontWeight: 400, color: COLOR.accent }}>
                                {accent.trim()}
                            </span>
                        )}
                        {after.trim() && <span>{after.trim()}</span>}
                    </div>
                    {subtitle && (
                        <div style={{ display: "flex", marginTop: 26, fontSize: 26, fontWeight: 400, lineHeight: 1.5, color: COLOR.muted, maxWidth: 760 }}>
                            {subtitle}
                        </div>
                    )}
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "34px 84px",
                        borderTop: `1px solid ${COLOR.line}`,
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <Logo />
                        <span style={{ fontSize: 22, fontWeight: 600, color: COLOR.text }}>Ideal Credit</span>
                    </div>
                    <span style={{ fontFamily: "IBM Plex Mono", fontWeight: 500, fontSize: 19, letterSpacing: 1, color: COLOR.muted }}>
                        idealcredit.md
                    </span>
                </div>
            </div>
        ),
        {
            ...ogSize,
            fonts: [
                { name: "Archivo", data: archivo600, weight: 600, style: "normal" },
                { name: "Archivo", data: archivo500, weight: 500, style: "normal" },
                { name: "Archivo", data: archivo400, weight: 400, style: "normal" },
                { name: "IBM Plex Mono", data: plexMono500, weight: 500, style: "normal" },
                { name: "Instrument Serif", data: serifItalic400, weight: 400, style: "italic" },
            ],
        },
    );
}
