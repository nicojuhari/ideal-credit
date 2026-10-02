import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Inflația explicată simplu: de ce cresc prețurile - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Inflația explicată simplu: de ce cresc prețurile.",
        accent: "Inflația",
        subtitle: "Ce costa 45 de lei în 2015 costa 100 de lei în 2025. De ce cresc prețurile și ce face BNM.",
    });
}
