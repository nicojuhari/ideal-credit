import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Credit pentru reparație - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        eyebrowLabel: "Persoane fizice",
        eyebrowPosition: 6,
        eyebrowTotal: 6,
        title: "Credit pentru reparație.",
        accent: "reparație.",
        subtitle: "Renovează-ți locuința acum, cu rate fixe și costuri clare.",
    });
}
