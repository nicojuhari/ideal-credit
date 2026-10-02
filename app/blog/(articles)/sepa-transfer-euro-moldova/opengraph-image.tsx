import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Cu SEPA, un transfer de 20 de euro costă acum 1 euro - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Un transfer în euro prin SEPA costă acum 1 euro.",
        accent: "SEPA",
        subtitle: "Un transfer în euro costa minim 20 de euro. Cine economisește cel mai mult și de ce plățile mari merg tot prin SWIFT?",
    });
}
