import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Contacte - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Vorbim direct.",
        accent: "direct.",
        subtitle: "Sună, scrie pe WhatsApp sau lasă un mesaj - răspundem în aceeași zi lucrătoare.",
    });
}
