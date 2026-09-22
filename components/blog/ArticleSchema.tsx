import { ARTICLE_AUTHOR } from "@/lib/constants";

export default function ArticleSchema({
    headline,
    description,
    datePublished,
    url,
}: {
    headline: string;
    description: string;
    datePublished: string;
    url: string;
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        datePublished,
        dateModified: datePublished,
        inLanguage: "ro-MD",
        isAccessibleForFree: true,
        author: {
            "@type": "Person",
            name: ARTICLE_AUTHOR.name,
            jobTitle: ARTICLE_AUTHOR.jobTitle,
            description: ARTICLE_AUTHOR.description,
            worksFor: { "@type": "Organization", "@id": "https://idealcredit.md/#organization" },
        },
        publisher: {
            "@type": "Organization",
            name: "Ideal Credit",
            logo: { "@type": "ImageObject", url: "https://idealcredit.md/ideal-credit-logo.svg" },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
