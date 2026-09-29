import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Cumpără, împrumută, mori - ce fac, de fapt, miliardarii - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Ce fac, de fapt, miliardarii ca să plătească 3% impozit.",
        accent: "miliardarii",
        subtitle: "Toată lumea crede că secretul e creditul. Datele spun altceva - iar Moldova are aceeași portiță.",
    });
}
