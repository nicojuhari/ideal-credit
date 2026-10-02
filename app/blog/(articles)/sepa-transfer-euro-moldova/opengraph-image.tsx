import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Cu SEPA, un transfer de 20 de euro costă acum 1 euro - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Un transfer în euro prin SEPA costă acum 1 euro.",
        accent: "SEPA",
        subtitle: "SEPA duce 8 din 10 transferuri în euro ale Moldovei, dar mai puțin de jumătate din bani. Cine câștigă cel mai mult?",
    });
}
