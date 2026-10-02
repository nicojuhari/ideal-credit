import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Firmele nebancare administrează acum peste jumătate din banii investiți în lume - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Firmele nebancare administrează acum peste jumătate din banii investiți în lume.",
        accent: "nebancare",
        subtitle: "Fonduri, asigurători, fonduri de pensii: în 2024 aveau 51% din bani, pentru prima dată de la criza din 2008.",
    });
}
