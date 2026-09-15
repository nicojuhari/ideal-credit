import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Autoritatea de supraveghere - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Autoritatea de supraveghere.",
        accent: "supraveghere.",
    });
}
