import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Cerere de credit online - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Cerere de credit online.",
        accent: "online.",
        subtitle: "Completezi cererea în 5 minute. Te sunăm și îți spunem ce acte trebuie.",
    });
}
