import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Calculator credit online - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Calculator credit online.",
        accent: "credit",
        subtitle: "Calculează rata lunară, costul total și graficul complet de rambursare.",
    });
}
