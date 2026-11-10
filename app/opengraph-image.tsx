import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Ideal Credit - Credite nebancare în Moldova";

export default async function Image() {
    return renderOgImage({
        title: "Credite nebancare în Moldova.",
        accent: "în Moldova.",
        subtitle: "Pentru afaceri și nevoi personale, de la 10.000 la 500.000 lei. Fără comisioane.",
    });
}
