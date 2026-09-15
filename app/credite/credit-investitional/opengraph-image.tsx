import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Credit investițional - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        eyebrowLabel: "Persoane juridice",
        eyebrowPosition: 2,
        eyebrowTotal: 6,
        title: "Credit investițional.",
        accent: "investițional.",
        subtitle: "Echipamente, extindere spațiu sau modernizare. Termen până la 60 luni, rată fixă.",
    });
}
