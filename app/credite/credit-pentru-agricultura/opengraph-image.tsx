import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Credit pentru agricultură - Ideal Credit";

export default async function Image() {
    return renderOgImage({
        eyebrowLabel: "Persoane juridice",
        eyebrowPosition: 3,
        eyebrowTotal: 6,
        title: "Credit pentru agricultură, după sezonul tău.",
        accent: "după sezonul tău.",
        subtitle: "Pentru fermieri, gospodării țărănești, SRL și ÎI. Rate potrivite cu sezonul. Decizie în 1-2 zile lucrătoare.",
    });
}
