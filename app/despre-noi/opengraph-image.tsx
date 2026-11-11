import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Despre noi - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Dăm credite în Moldova din 2010.",
        accent: "din 2010.",
        subtitle: "Companie de creditare nebancară, cu oficii în Căușeni și Chișinău. Lucrăm cu afaceri și persoane fizice din toată Moldova.",
    });
}
