import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Credit pentru agricultură - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        eyebrowLabel: "Persoane juridice",
        eyebrowPosition: 3,
        eyebrowTotal: 6,
        title: "Credit pentru agricultură.",
        accent: "agricultură.",
        subtitle: "Finanțare pentru fermieri, SRL-uri și gospodării individuale. Grafic adaptat sezonalității.",
    });
}
