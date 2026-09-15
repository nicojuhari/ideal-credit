import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Ideal Credit - Credite pentru succes.";

export default async function Image() {
    return renderOgImage({
        title: "Credite pentru succes.",
        accent: "succes.",
        subtitle: "Finanțăm afaceri și persoane fizice din Moldova, rapid și transparent.",
    });
}
