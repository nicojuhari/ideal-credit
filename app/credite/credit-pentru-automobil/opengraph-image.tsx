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
        subtitle: "Pentru cumpărarea sau reparația mașinii, de la 10.000 la 300.000 lei. Decizia în 2-3 ore.",
    });
}
