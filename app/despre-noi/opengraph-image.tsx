import { renderOgImage, ogSize, ogContentType } from "@/lib/og";
import { yearsSinceFoundation } from "@/lib/utils";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Despre noi - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        title: "Despre noi.",
        accent: "noi.",
        subtitle: `Organizație de creditare nebancară din Căușeni și Chișinău. De ${yearsSinceFoundation} ani finanțăm oameni și afaceri din toată Moldova.`,
    });
}
