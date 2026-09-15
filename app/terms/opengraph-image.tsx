import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Termeni și Condiții - OCN Ideal Credit SRL";

export default async function Image() {
    return renderOgImage({
        title: "Termeni și condiții.",
        accent: "condiții.",
    });
}
