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
        subtitle: "Bani pentru orice nevoie, fără destinație impusă. Dobândă fixă, decizie în 2-3 ore.",
    });
}
