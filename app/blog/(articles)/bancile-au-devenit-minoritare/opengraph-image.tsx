import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Sectorul nebancar are acum peste jumătate din activele financiare ale lumii - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Sectorul nebancar are acum peste jumătate din activele financiare ale lumii.",
        accent: "nebancar",
        subtitle: "În 2024, pentru prima dată din 2008, peste jumătate din activele financiare ale lumii stăteau în afara băncilor.",
    });
}
