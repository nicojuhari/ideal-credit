import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";

const InterFont = Inter({ variable: "--font-sans", subsets: ["latin"] });

const siteDescription =
    "Oferim credite nebancare în Moldova pentru afaceri și persoane fizice. Dobândă fixă, condiții avantajoase, fără comisioane ascunse. Aplică online!";

export const metadata: Metadata = {
    metadataBase: new URL("https://idealcredit.md"),
    title: {
        default: "Credite Nebancare în Moldova | Ideal Credit",
        template: "%s | Ideal Credit",
    },
    description: siteDescription,
    keywords: "credite nebancare, credit md, credit pentru afaceri, credit pentru nevoi personale, credit Chișinău Moldova",
    openGraph: {
        locale: "ro_MD",
        type: "website",
        siteName: "Ideal Credit",
        images: [
            {
                url: "/ideal-credit-og.webp",
                alt: "Credite nebancare pentru afaceri și nevoi personale",
            },
        ],
    },
    other: {
        "google-site-verification": "xSvHXCUVs_GmLMJ17te-PeWngkTtzV-pDoMRviDCcV0",
    },
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            name: "Ideal Credit",
            url: "https://idealcredit.md/",
            alternateName: "Ideal Credit",
        },
        {
            "@type": "Organization",
            name: "Ideal Credit",
            legalName: 'Organizația de Creditare Nebancară "Ideal Credit" SRL',
            url: "https://idealcredit.md/",
            logo: "https://idealcredit.md/ideal-credit-logo.svg",
            description: siteDescription,
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    telephone: "+37378805060",
                    contactType: "customer service",
                    email: "contact@idealcredit.md",
                    areaServed: "MD",
                    availableLanguage: "ro",
                },
                {
                    "@type": "ContactPoint",
                    telephone: "+37379066566",
                    contactType: "admin",
                    email: "info@idealcredit.md",
                    areaServed: "MD",
                    availableLanguage: "ro",
                },
            ],
            sameAs: [
                "https://www.facebook.com/idealcredit",
                "https://www.instagram.com/idealcredit",
                "https://www.linkedin.com/company/idealcredit",
                "https://www.youtube.com/@idealcredit",
            ],
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "23",
                itemReviewed: { "@type": "Organization", name: "Ideal Credit" },
            },
        },
    ],
};

const FB_PIXEL_ID = "2254113158275780";
const HOTJAR_ID = 1797461;
const GA_ID = "G-YXDZGPPXPH";
const IS_PROD = process.env.NODE_ENV === "production";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ro-MD">
            <head>
                {/* Ahrefs analytics */}
                <Script src="https://analytics.ahrefs.com/analytics.js" data-key="ECFm73uMp/FvsZWP8axloQ" strategy="afterInteractive" />

                {/* Facebook Pixel */}
                {IS_PROD && (
                    <Script id="fb-pixel" strategy="afterInteractive">
                        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${FB_PIXEL_ID}');fbq('track','PageView');`}
                    </Script>
                )}

                {/* Google Analytics */}
                {IS_PROD && (
                    <>
                        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
                        <Script id="ga-init" strategy="afterInteractive">
                            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
                        </Script>
                    </>
                )}

                {/* Hotjar */}
                {IS_PROD && (
                    <Script id="hotjar" strategy="afterInteractive">
                        {`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
                    </Script>
                )}

                {/* JSON-LD */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
                <meta name="apple-mobile-web-app-title" content="Ideal Credit" />
            </head>
            <body className={`${InterFont.variable} flex flex-col min-h-screen`}>
                <Header />
                <main className="flex-auto">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
