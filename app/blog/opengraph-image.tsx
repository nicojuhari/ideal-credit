import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Dincolo de Cifre - Blog Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Dincolo de Cifre.",
        accent: "Cifre.",
        subtitle: "Analize despre business, finanțe și investiții, din Moldova și din lume.",
    });
}
