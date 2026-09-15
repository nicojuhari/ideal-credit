import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Credit pentru afaceri - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        eyebrowLabel: "Persoane juridice",
        eyebrowPosition: 1,
        eyebrowTotal: 6,
        title: "Credit pentru afaceri.",
        accent: "afaceri.",
        subtitle: "Finanțăm SRL-uri, ÎI și antreprenori din toată Moldova. Aprobare în 1-2 zile lucrătoare.",
    });
}
