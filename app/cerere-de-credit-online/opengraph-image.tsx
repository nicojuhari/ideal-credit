import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Cerere de credit online - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Cerere de credit online.",
        accent: "online.",
        subtitle: "Completezi în câteva minute - și afli sincer dacă are sens, înainte de dosar.",
    });
}
