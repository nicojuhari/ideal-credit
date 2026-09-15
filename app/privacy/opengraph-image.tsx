import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Politica de Confidențialitate - OCN Ideal Credit SRL";

export default async function Image() {
    return renderOgImage({
        title: "Politica de confidențialitate.",
        accent: "confidențialitate.",
    });
}
