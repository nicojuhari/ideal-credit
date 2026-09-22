import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Ideal Credit - Credite pentru succes.";

export default async function Image() {
    return renderOgImage({
        title: "Credite pentru succes.",
        accent: "succes.",
        subtitle: "Îți analizăm scopul și situația financiară, ca să-ți spunem dacă creditul chiar te ajută.",
    });
}
