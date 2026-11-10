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
        subtitle: "Pentru echipamente, vehicule și renovare. De la 50.000 la 400.000 lei, pe 12–60 luni.",
    });
}
