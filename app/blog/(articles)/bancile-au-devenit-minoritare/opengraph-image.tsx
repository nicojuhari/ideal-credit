import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Băncile au devenit minoritare în finanțele lumii - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Băncile au devenit minoritare în finanțele lumii.",
        accent: "minoritare",
        subtitle: "În 2024, pentru prima dată din 2008, peste jumătate din activele financiare ale lumii stăteau în afara băncilor.",
    });
}
