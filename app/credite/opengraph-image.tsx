import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Soluții de credit pentru fiecare situație - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Credite pentru fiecare situație.",
        accent: "fiecare situație.",
        subtitle: "Finanțare pentru afaceri și persoane fizice. Dobândă fixă, costuri clare, decizie rapidă.",
    });
}
