import { createGrafic, calcDAE } from "ideal-credit";
import { FAQ_ITEMS, CALCULATOR_MONTHLY_RATE, SITE_DESCRIPTION, OFFICES } from "@/lib/constants";

const ORGANIZATION_ID = "https://idealcredit.md/#organization";

/** DAE for a representative sum/term, computed the same way as the on-site calculator. */
function computeDae(sum: number, termMonths: number, monthlyRate: number = CALCULATOR_MONTHLY_RATE) {
    const grafic = createGrafic({ sum, period: termMonths, interest: monthlyRate });
    return grafic.length ? Number(calcDAE(grafic, sum)) : 0;
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

// Matches the homepage FAQ UI (components/home/Faq.tsx shows FAQ_ITEMS.slice(0, 6)) -
// FAQPage schema must mirror what's actually visible on the page.
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.slice(0, 6).map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

export const creditConditionsSchema = {
    pf: {
        title: "Credit persoană fizică",
        list: ["Vârsta de la 23 de ani", "Sursă de venit stabilă", "Buletin de identitate valabil", "Responsabilitate financiară"],
    },
    pj: {
        title: "Credit persoană juridică",
        list: [
            "Activitate economică validă",
            "Actele de înființare",
            "Evidența contabilă, contracte comerciale",
            "Extras bancar - minim 3 luni",
        ],
    },
};

// Căușeni is the registered main office (lib/constants.ts OFFICES[0], "Sediul principal").
export const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Credite nebancare pentru afaceri și nevoi personale",
    telephone: OFFICES[0].mobile,
    image: "https://idealcredit.md/ideal-credit-og.webp",
    priceRange: "10000-500000 MDL",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Mihai Eminescu, nr. 17, of. 47",
        addressLocality: "Căușeni",
        addressRegion: "Raionul Căușeni",
        postalCode: "MD-4304",
        addressCountry: "MD",
    },
    areaServed: { "@type": "State", name: "Republica Moldova" },
    description:
        "Ideal Credit analizează situația fiecărui client înainte de a recomanda o finanțare - dobânzi fixe, fără comisioane ascunse, pentru antreprenori și persoane fizice din Republica Moldova.",
};

// Single source for the site-wide Organization/LocalBusiness graph, rendered once in app/layout.tsx
// on every page. Do not re-declare these entities elsewhere (e.g. per-page LocalBusiness scripts) -
// duplicate, differently-shaped nodes for the same business confuse structured-data validators.
export const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://idealcredit.md/#website",
            name: "Ideal Credit",
            url: "https://idealcredit.md/",
        },
        {
            "@type": "Organization",
            "@id": ORGANIZATION_ID,
            name: "Ideal Credit",
            legalName: 'Organizația de Creditare Nebancară "Ideal Credit" SRL',
            url: "https://idealcredit.md/",
            logo: "https://idealcredit.md/ideal-credit-logo.svg",
            description: SITE_DESCRIPTION,
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    telephone: "+37361252777",
                    contactType: "customer service",
                    email: "info@idealcredit.md",
                    areaServed: "MD",
                    availableLanguage: "ro",
                },
                {
                    "@type": "ContactPoint",
                    telephone: "+37368270101",
                    contactType: "customer service",
                    email: "info@idealcredit.md",
                    areaServed: "MD",
                    availableLanguage: "ro",
                },
            ],
            sameAs: [
                "https://www.facebook.com/idealcredit.md",
                "https://www.instagram.com/idealcredit.md",
                "https://www.linkedin.com/company/idealcredit",
            ],
        },
        {
            "@type": ["LocalBusiness", "FinancialService"],
            "@id": "https://idealcredit.md/#chisinau",
            name: "Ideal Credit Chișinău",
            parentOrganization: { "@id": ORGANIZATION_ID },
            url: "https://idealcredit.md/contacte#chisinau",
            priceRange: "10000-500000 MDL",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Ginta Latină, nr. 18, of. 5",
                addressLocality: "Chișinău",
                addressRegion: "Municipiul Chișinău",
                postalCode: "MD-2044",
                addressCountry: "MD",
            },
            telephone: "+37361252777",
            openingHoursSpecification: [
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "08:30",
                    closes: "16:30",
                },
            ],
            areaServed: { "@type": "State", name: "Republica Moldova" },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "10",
            },
            hasMap: "https://maps.app.goo.gl/RJjkrwDCnhbeY66q8",
            image: "https://idealcredit.md/ideal-credit-logo.svg",
        },
        {
            "@type": ["LocalBusiness", "FinancialService"],
            "@id": "https://idealcredit.md/#causeni",
            name: "Ideal Credit Căușeni",
            parentOrganization: { "@id": ORGANIZATION_ID },
            url: "https://idealcredit.md/contacte#causeni",
            priceRange: "10000-500000 MDL",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Mihai Eminescu, nr. 17, of. 47",
                addressLocality: "Căușeni",
                addressRegion: "Raionul Căușeni",
                postalCode: "MD-4304",
                addressCountry: "MD",
            },
            telephone: "+37368270101",
            openingHoursSpecification: [
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "08:30",
                    closes: "16:30",
                },
            ],
            areaServed: { "@type": "State", name: "Republica Moldova" },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "13",
            },
            hasMap: "https://maps.app.goo.gl/T7nCkvKXGKLFKU3Z9",
            image: "https://idealcredit.md/ideal-credit-logo.svg",
        },
    ],
};

export const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cum să obții un credit de la Ideal Credit",
    description: "Ghid pas cu pas pentru a solicita și obține un credit nebancar de la Ideal Credit.",
    supply: [
        { "@type": "HowToSupply", name: "Buletin de identitate valabil" },
        { "@type": "HowToSupply", name: "Sursă de venit stabilă" },
        { "@type": "HowToSupply", name: "Responsabilitate financiară" },
    ],
    step: [
        {
            "@type": "HowToStep",
            name: "Completezi cererea",
            text: "Online, la telefon, Viber, WhatsApp sau într-unul din oficiile noastre.",
        },
        {
            "@type": "HowToStep",
            name: "Primești răspunsul",
            text: "Echipa noastră va analiza cererea ta și îți vom comunica decizia în cel mai scurt timp.",
        },
        {
            "@type": "HowToStep",
            name: "Semnezi contractul și primești banii",
            text: "Dacă decizia este pozitivă, semnezi contractul în oficiul nostru. Banii pot fi ridicați numerar la birou sau transferați la card/cont bancar. Pentru credite de afaceri, fondurile se virează prin transfer bancar.",
        },
    ],
};

export const personalLoanSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit pentru nevoi personale",
    description:
        "Credite analizate individual, cu dobânzi fixe și fără comisioane ascunse, adaptate nevoilor personale ale clienților din Republica Moldova.",
    provider: { "@id": ORGANIZATION_ID },
    amount: {
        "@type": "MonetaryAmount",
        value: 10000,
        currency: "MDL",
        minValue: 10000,
        maxValue: 300000,
    },
    interestRate: {
        "@type": "QuantitativeValue",
        value: 4,
        unitText: "%",
        description: "Dobândă lunară fixă",
    },
    annualPercentageRate: {
        "@type": "QuantitativeValue",
        value: computeDae(10000, 6),
        unitText: "%",
        description: "Dobânda anuală efectivă (DAE), incluzând toate costurile aferente creditului.",
    },
    loanTerm: {
        "@type": "QuantitativeValue",
        value: 6,
        unitText: "Months",
        minValue: 6,
        maxValue: 60,
    },
};

export const businessCreditSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit pentru afaceri",
    description: "Credit pentru afaceri - analizăm scopul, nu doar dosarul, pentru dezvoltarea afacerilor.",
    provider: { "@id": ORGANIZATION_ID },
    amount: {
        "@type": "MonetaryAmount",
        value: 10000,
        currency: "MDL",
        minValue: 10000,
        maxValue: 300000,
    },
    interestRate: {
        "@type": "QuantitativeValue",
        value: 4,
        unitText: "%",
        description: "Dobândă lunară fixă",
    },
    annualPercentageRate: {
        "@type": "QuantitativeValue",
        value: computeDae(10000, 12),
        unitText: "%",
        description: "Dobânda anuală efectivă (DAE), incluzând toate costurile aferente creditului.",
    },
    loanTerm: {
        "@type": "QuantitativeValue",
        value: 12,
        unitText: "Months",
        minValue: 12,
        maxValue: 60,
    },
};

export const agriculturalLoanSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit pentru agricultură",
    description: "Credit agricol pentru fermieri, SRL și ÎI din Moldova - tehnică agricolă, semințe, irigații și capital sezonier.",
    provider: { "@id": ORGANIZATION_ID },
    amount: {
        "@type": "MonetaryAmount",
        value: 50000,
        currency: "MDL",
        minValue: 50000,
        maxValue: 500000,
    },
    interestRate: {
        "@type": "QuantitativeValue",
        value: 4,
        unitText: "%",
        description: "Dobândă lunară fixă",
    },
    annualPercentageRate: {
        "@type": "QuantitativeValue",
        value: computeDae(50000, 12),
        unitText: "%",
        description: "Dobânda anuală efectivă (DAE), incluzând toate costurile aferente creditului.",
    },
    loanTerm: {
        "@type": "QuantitativeValue",
        value: 12,
        unitText: "Months",
        minValue: 12,
        maxValue: 60,
    },
};

export const autoLoanSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit pentru automobil",
    description: "Credit pentru cumpărarea sau repararea unui automobil în Moldova, fără restricții pe tipul mașinii.",
    provider: { "@id": ORGANIZATION_ID },
    amount: {
        "@type": "MonetaryAmount",
        value: 10000,
        currency: "MDL",
        minValue: 10000,
        maxValue: 300000,
    },
    interestRate: {
        "@type": "QuantitativeValue",
        value: 4,
        unitText: "%",
        description: "Dobândă lunară fixă",
    },
    annualPercentageRate: {
        "@type": "QuantitativeValue",
        value: computeDae(10000, 12),
        unitText: "%",
        description: "Dobânda anuală efectivă (DAE), incluzând toate costurile aferente creditului.",
    },
    loanTerm: {
        "@type": "QuantitativeValue",
        value: 12,
        unitText: "Months",
        minValue: 12,
        maxValue: 48,
    },
};

export const repairLoanSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit pentru reparație",
    description: "Credit pentru reparația sau renovarea casei ori apartamentului, cu dobândă fixă și sume flexibile.",
    provider: { "@id": ORGANIZATION_ID },
    amount: {
        "@type": "MonetaryAmount",
        value: 10000,
        currency: "MDL",
        minValue: 10000,
        maxValue: 300000,
    },
    interestRate: {
        "@type": "QuantitativeValue",
        value: 4,
        unitText: "%",
        description: "Dobândă lunară fixă",
    },
    annualPercentageRate: {
        "@type": "QuantitativeValue",
        value: computeDae(10000, 12),
        unitText: "%",
        description: "Dobânda anuală efectivă (DAE), incluzând toate costurile aferente creditului.",
    },
    loanTerm: {
        "@type": "QuantitativeValue",
        value: 12,
        unitText: "Months",
        minValue: 12,
        maxValue: 48,
    },
};

export const investitionalSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit investițional pentru afaceri",
    description: "Credit nebancar pentru investiții în afaceri din Moldova - echipamente, extindere, modernizare.",
    provider: { "@id": ORGANIZATION_ID },
    amount: {
        "@type": "MonetaryAmount",
        value: 10000,
        currency: "MDL",
        minValue: 10000,
        maxValue: 400000,
    },
    interestRate: {
        "@type": "QuantitativeValue",
        value: 4,
        unitText: "%",
        description: "Dobândă lunară fixă",
    },
    annualPercentageRate: {
        "@type": "QuantitativeValue",
        value: computeDae(10000, 12),
        unitText: "%",
        description: "Dobânda anuală efectivă (DAE), incluzând toate costurile aferente creditului.",
    },
    loanTerm: {
        "@type": "QuantitativeValue",
        value: 12,
        unitText: "Months",
        minValue: 12,
        maxValue: 60,
    },
};
