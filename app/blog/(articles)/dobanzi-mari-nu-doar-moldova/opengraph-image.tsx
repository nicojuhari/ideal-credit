import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Nu doar Moldova are dobânzi mari la credite - Dincolo de Cifre";

export default async function Image() {
    return renderOgImage({
        title: "Nu doar Moldova are dobânzi mari.",
        accent: "Moldova",
        subtitle: "Turcia, Egiptul și chiar statele baltice din zona euro au dobânzi mai mari sau comparabile. Piața mică decide prețul.",
    });
}
