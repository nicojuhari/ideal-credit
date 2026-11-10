import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Soluții de credit pentru fiecare situație - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Credite pentru afaceri și nevoi personale.",
        accent: "nevoi personale.",
        subtitle: "Dobândă fixă și fără comisioane. Alege creditul după ce vrei să faci cu banii.",
    });
}
