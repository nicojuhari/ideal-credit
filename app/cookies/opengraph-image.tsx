import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Politica de Cookies - OCN Ideal Credit SRL";

export default async function Image() {
    return renderOgImage({
        title: "Politica de cookies.",
        accent: "cookies.",
    });
}
