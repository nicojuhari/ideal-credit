import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "„Cumpără, împrumută, mori”: miliardarii aproape nu se împrumută - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Cumpără, împrumută, mori: miliardarii aproape nu se împrumută.",
        accent: "miliardarii",
        subtitle: "Cei mai bogați 25 de americani au plătit impozit de 3,4% din cât s-au îmbogățit. Secretul lor nu e creditul, ci că nu vând acțiunile.",
    });
}
