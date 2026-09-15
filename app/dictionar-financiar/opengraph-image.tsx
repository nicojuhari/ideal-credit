import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Dicționar financiar - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Dicționar financiar.",
        accent: "financiar.",
        subtitle: "Termenii financiari și de creditare cei mai des întâlniți, explicați pe înțelesul tuturor.",
    });
}
