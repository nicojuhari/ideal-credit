import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Credit pentru nevoi personale - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        eyebrowLabel: "Persoane fizice",
        eyebrowPosition: 4,
        eyebrowTotal: 6,
        title: "Credit pentru nevoi personale.",
        accent: "personale.",
        subtitle: "De la 10.000 la 300.000 lei, fără comisioane. Decizie în 2-3 ore.",
    });
}
