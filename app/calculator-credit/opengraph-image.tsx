import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Calculator de credit pentru persoane fizice - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Calculator de credit pentru persoane fizice.",
        accent: "persoane fizice.",
        subtitle: "Află cât poți împrumuta din venitul tău și vezi graficul de plăți.",
    });
}
