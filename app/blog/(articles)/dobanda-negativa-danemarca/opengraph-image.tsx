import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "O bancă daneză a plătit oamenii să ia credit ipotecar - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "O bancă daneză a plătit oamenii să ia credit ipotecar.",
        accent: "plătit",
        subtitle: "În 2019, Jyske Bank oferea credite cu dobândă de minus 0,5%. Aproape nimeni n-a primit bani gratis.",
    });
}
