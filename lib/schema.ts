import { FAQ_ITEMS } from "@/lib/constants";

export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
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

export const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Credite nebancare pentru afaceri și nevoi personale",
    telephone: "+37361252777",
    image: "https://idealcredit.md/ideal-credit-og.webp",
    priceRange: "10000-500000 MDL",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Ginta Latină, nr. 18, of. 5",
        addressLocality: "Chișinău",
        addressRegion: "MD",
        postalCode: "MD-2044",
        addressCountry: "MD",
    },
    areaServed: { "@type": "State", name: "Republica Moldova" },
    description:
        "Ideal Credit oferă soluții financiare rapide, transparente, cu dobânzi fixe și fără comisioane ascunse, destinate atât antreprenorilor pentru dezvoltarea afacerilor, cât și persoanelor fizice pentru nevoi personale, pe întreg teritoriul Republicii Moldova.",
};

export const localBusinessChisinauSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    name: "Ideal Credit",
    legalName: 'Organizația de Creditare Nebancară"Ideal Credit" SRL',
    url: "https://idealcredit.md/",
    priceRange: "10000-500000 MDL",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Ginta Latină, nr. 18, of. 5",
        addressLocality: "Chișinău",
        addressRegion: "MD",
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
    image: "https://idealcredit.md/ideal-credit-logo.svg",
    hasMap: "https://maps.app.goo.gl/EYxf2NnK3ScynGH79",
};

export const localBusinessCauseniSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    name: "Ideal Credit",
    legalName: 'Organizația de Creditare Nebancară"Ideal Credit" SRL',
    url: "https://idealcredit.md/",
    priceRange: "10000-500000 MDL",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Mihai Eminescu, nr. 17, of. 47",
        addressLocality: "Căușeni",
        addressRegion: "Căușeni",
        postalCode: "MD-4304",
        addressCountry: "MD",
    },
    telephone: "+37379066566",
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
    image: "https://idealcredit.md/ideal-credit-logo.svg",
    hasMap: "https://maps.app.goo.gl/T7nCkvKXGKLFKU3Z9",
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
            name: "Discutăm",
            text: "Ne suni sau ne scrii pe Viber sau WhatsApp. Ne spui de cât ai nevoie și pentru ce. Dacă nu se potrivește, îți spunem direct.",
        },
        {
            "@type": "HowToStep",
            name: "Analizăm de la distanță",
            text: "Trimiți documentele pe telefon sau pe email. Verificăm totul înainte de întâlnire. Primești răspunsul cu suma și rata exactă.",
        },
        {
            "@type": "HowToStep",
            name: "Semnezi și iei banii",
            text: "Vii la oficiu o singură dată, la semnare. Banii se eliberează în aceeași zi: numerar la oficiu sau pe card pentru persoane fizice, prin transfer bancar pentru firme.",
        },
    ],
};

export const personalLoanSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit pentru nevoi personale",
    description:
        "Credit personal pentru cheltuieli planificate: reparație, cheltuieli mari, angajați la stat. Dobândă fixă, rata scade lunar, fără comisioane ascunse.",
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
        value: 60.83,
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
    name: "Credit pentru afaceri mici",
    description: "Credit pentru SRL, ÎI și GȚ din Moldova: capital de lucru, investiții, agricultură. Fără plan de afaceri, de la 3–6 luni de activitate.",
    amount: {
        "@type": "MonetaryAmount",
        value: 150000,
        currency: "MDL",
        minValue: 20000,
        maxValue: 500000,
    },
    interestRate: {
        "@type": "QuantitativeValue",
        value: 4,
        unitText: "%",
        description: "Dobândă lunară fixă",
    },
    loanTerm: {
        "@type": "QuantitativeValue",
        value: 12,
        unitText: "Months",
        minValue: 6,
        maxValue: 60,
    },
};

export const workingCapitalSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit capital de lucru pentru afaceri",
    description: "Credit pentru capital de lucru: salarii, furnizori, stocuri. Pentru SRL, ÎI și GȚ din Moldova.",
    amount: {
        "@type": "MonetaryAmount",
        currency: "MDL",
        minValue: 20000,
        maxValue: 500000,
    },
    loanTerm: {
        "@type": "QuantitativeValue",
        unitText: "Months",
        minValue: 6,
        maxValue: 36,
    },
};

export const investitionalSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit investițional pentru afaceri",
    description: "Credit pentru investiții în afaceri din Moldova: echipamente noi sau second-hand, spațiu, vehicule comerciale.",
    amount: {
        "@type": "MonetaryAmount",
        currency: "MDL",
        minValue: 20000,
        maxValue: 500000,
    },
    loanTerm: {
        "@type": "QuantitativeValue",
        unitText: "Months",
        minValue: 12,
        maxValue: 60,
    },
};

export const agriculturalCreditSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit pentru agricultură",
    description: "Credit agricol pentru gospodării țărănești, SRL și ÎI din Moldova: tehnică, inputuri, irigații, lucrări sezoniere. Grafic de plată adaptat recoltei.",
    amount: {
        "@type": "MonetaryAmount",
        currency: "MDL",
        minValue: 20000,
        maxValue: 500000,
    },
    loanTerm: {
        "@type": "QuantitativeValue",
        unitText: "Months",
        minValue: 6,
        maxValue: 60,
    },
};

export const autoLoanSchema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name: "Credit pentru automobil",
    description: "Credit auto pentru mașină nouă sau second-hand, de la orice vânzător, fără gaj pe mașină. Pentru persoane fizice din Moldova.",
    amount: {
        "@type": "MonetaryAmount",
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
    loanTerm: {
        "@type": "QuantitativeValue",
        unitText: "Months",
        minValue: 6,
        maxValue: 60,
    },
};
