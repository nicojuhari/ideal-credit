import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Nouă din zece firme mici nu iau credit de la bancă - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Nouă din zece firme mici nu iau credit de la bancă.",
        accent: "bancă",
        subtitle: "Băncile finanțează doar 6% din investițiile firmelor mici. Restul vine din altă parte.",
    });
}
