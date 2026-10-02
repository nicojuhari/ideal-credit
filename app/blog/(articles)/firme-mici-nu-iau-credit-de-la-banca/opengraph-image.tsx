import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Firmele mici din Moldova primesc de la bancă doar 6% din banii pentru investiții - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Firmele mici din Moldova primesc de la bancă doar 6% din banii pentru investiții.",
        accent: "bancă",
        subtitle: "9 lei din 10 investiți sunt bani proprii. De unde mai iau bani firmele mici când banca le refuză?",
    });
}
