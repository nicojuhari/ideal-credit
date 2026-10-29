import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Prima Casă n-a pornit scumpirea apartamentelor. Dar le ține prețul sus - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Prima Casă n-a pornit scumpirea apartamentelor. Dar le ține prețul sus",
        accent: "Prima Casă",
        subtitle: "În 2024, 93 din 100 de locuințe s-au cumpărat fără credit. Apoi a venit creditul fără avans, de până la 2,5 milioane de lei.",
    });
}
