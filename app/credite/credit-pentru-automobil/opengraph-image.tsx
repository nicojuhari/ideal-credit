import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Credit pentru automobil - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        eyebrowLabel: "Persoane fizice",
        eyebrowPosition: 5,
        eyebrowTotal: 6,
        title: "Credit pentru automobil.",
        accent: "automobil.",
        subtitle: "Cumpără sau repară mașina fără complicații. Finanțare rapidă, dobândă fixă.",
    });
}
