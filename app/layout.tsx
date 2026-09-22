import type { Metadata } from "next";
import { Inter, Archivo, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";
import { organizationSchema } from "@/lib/schema";
import { SITE_DESCRIPTION } from "@/lib/constants";

const InterFont = Inter({ variable: "--font-sans", subsets: ["latin"] });
const ArchivoFont = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const IBMPlexMonoFont = IBM_Plex_Mono({ variable: "--font-ibm-plex-mono", subsets: ["latin"], weight: ["400", "500"] });
const InstrumentSerifFont = Instrument_Serif({ variable: "--font-instrument-serif", subsets: ["latin"], weight: "400", style: "italic" });

export const metadata: Metadata = {
    metadataBase: new URL("https://idealcredit.md"),
    title: {
        default: "Credite Nebancare în Moldova | Ideal Credit",
        template: "%s",
    },
    description: SITE_DESCRIPTION,
    keywords: "credite nebancare, credit md, credit pentru afaceri, credit pentru nevoi personale, credit Chișinău Moldova",
    openGraph: {
        locale: "ro_MD",
        type: "website",
        siteName: "Ideal Credit",
        url: "https://idealcredit.md/",
    },
    twitter: {
        card: "summary_large_image",
    },
    other: {
        "google-site-verification": "xSvHXCUVs_GmLMJ17te-PeWngkTtzV-pDoMRviDCcV0",
    },
};

const FB_PIXEL_ID = "2254113158275780";
const HOTJAR_ID = 1797461;
const IS_PROD = process.env.NODE_ENV === "production";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ro-MD">
            <head>
                {/* Ahrefs analytics */}
                <Script src="https://analytics.ahrefs.com/analytics.js" data-key="ECFm73uMp/FvsZWP8axloQ" strategy="afterInteractive" />

                {/* Facebook Pixel */}
                {IS_PROD && (
                    <Script id="fb-pixel" strategy="lazyOnload">
                        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${FB_PIXEL_ID}');fbq('track','PageView');`}
                    </Script>
                )}

                {/* Hotjar */}
                {IS_PROD && (
                    <Script id="hotjar" strategy="lazyOnload">
                        {`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
                    </Script>
                )}

                {/* JSON-LD */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
                <meta name="apple-mobile-web-app-title" content="Ideal Credit" />
            </head>
            <body
                className={`${InterFont.variable} ${ArchivoFont.variable} ${IBMPlexMonoFont.variable} ${InstrumentSerifFont.variable} flex flex-col min-h-screen overflow-x-hidden`}
            >
                <Header />
                <main className="flex-auto">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
