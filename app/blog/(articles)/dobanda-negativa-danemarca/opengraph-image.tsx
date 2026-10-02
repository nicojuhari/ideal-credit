import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "O bancă daneză a dat credite ipotecare cu dobândă negativă - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "O bancă daneză a dat credite ipotecare cu dobândă negativă.",
        accent: "dobândă",
        subtitle: "În 2019, Jyske Bank dădea credite cu dobândă de minus 0,5%. Totuși, oamenii tot plăteau băncii. Cum câștiga banca?",
    });
}
