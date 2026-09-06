import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { Header, Footer } from "@/components/ds";

/**
 * v4 chrome. Archivo (UI/display) and IBM Plex Mono (figures, labels) are
 * self-hosted by next/font — fetched once at build time, served from our own
 * origin, never from the Google CDN at runtime. latin-ext is required for
 * ă â î ș ț.
 */
const archivo = Archivo({
    variable: "--font-archivo",
    weight: ["400", "500", "600"],
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

const plexMono = IBM_Plex_Mono({
    variable: "--font-plex-mono",
    weight: ["400", "500"],
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

export default function V4Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`v4 font-ui ${archivo.variable} ${plexMono.variable} flex min-h-screen flex-auto flex-col`}>
            <Header />
            <main className="flex-auto">{children}</main>
            <Footer />
        </div>
    );
}
