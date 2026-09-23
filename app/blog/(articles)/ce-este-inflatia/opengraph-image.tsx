import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Inflația explicată pe înțelesul tuturor - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Inflația explicată pe înțelesul tuturor.",
        accent: "Inflația",
        subtitle: "Ce costa 45 de lei acum zece ani, azi costă 100. De ce - și cum se oprește.",
    });
}
