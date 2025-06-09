export const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Credite nebancare pentru afaceri și nevoi personale",
    "telephone": "+37378805060",
    "image": "https://idealcredit.md/ideal-credit-og.webp",
    "priceRange": "10000-300000 MDL",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "str. Miron Costin, nr.25, of.115",
        "addressLocality": "Chișinău",
        "addressRegion": "MD",
        "postalCode": "MD-2068",
        "addressCountry": "MD"
    },
    "areaServed": {
        "@type": "State",
        "name": "Republica Moldova"
    },
    "description": "Ideal Credit oferă soluții financiare rapide, transparente, cu dobânzi fixe și fără comisioane ascunse, destinate atât antreprenorilor pentru dezvoltarea afacerilor, cât și persoanelor fizice pentru nevoi personale, pe întreg teritoriul Republicii Moldova.",
    "offers": [
        {
            "@type": "LoanOrCredit",
            "name": "Credit pentru dezvoltarea afacerii",
            "description": "Credite rapide, transparente, cu dobânzi fixe și fără comisioane ascunse, concepute pentru a susține dezvoltarea afacerilor în Republica Moldova.",
            "url": "https://idealcredit.md/#",
            "amount": {
                "@type": "MonetaryAmount",
                "value": 1000,
                "currency": "MDL",
                "minValue": 1000,
                "maxValue": 300000
            },
            "interestRate": {
                "@type": "QuantitativeValue",
                "value": 4,
                "unitText": "%",
                "description": "Dobândă lunară fixă"
            },
            "annualPercentageRate": {
                "@type": "QuantitativeValue",
                "value": 60.83,
                "unitText": "%",
                "description": "Dobânda anuală efectivă (DAE), incluzând toate costurile aferente creditului."
            },
            "loanTerm": {
                "@type": "QuantitativeValue",
                "value": 6,
                "unitText": "Months",
                "minValue": 6,
                "maxValue": 60
            },
            "requiredCollateral": "În funcție de evaluarea riscului de credit, pot fi încheiate contracte de fidejusiune (garant) sau gaj (imobil).",
            "priceSpecification": {
                "@type": "PriceSpecification",
                "price": 0,
                "priceCurrency": "MDL",
                "description": "Comision de acordare: 0 MDL. Penalitate pe zi: 0.04% din valoarea totală a creditului pentru fiecare zi de întârziere. Comision pentru prelungirea Contractului: egal cu dobânda necesară a fi achitată pentru rata amânată."
            }
        },
        {
            "@type": "LoanOrCredit",
            "name": "Credit pentru nevoi personale",
            "description": "Credite rapide, transparente, cu dobânzi fixe și fără comisioane ascunse, adaptate nevoilor personale ale clienților din Republica Moldova.",
            "url": "https://idealcredit.md/#",
            "amount": {
                "@type": "MonetaryAmount",
                "value": 1000,
                "currency": "MDL",
                "minValue": 1000,
                "maxValue": 300000
            },
            "interestRate": {
                "@type": "QuantitativeValue",
                "value": 4,
                "unitText": "%",
                "description": "Dobândă lunară fixă"
            },
            "annualPercentageRate": {
                "@type": "QuantitativeValue",
                "value": 60.83,
                "unitText": "%",
                "description": "Dobânda anuală efectivă (DAE), incluzând toate costurile aferente creditului."
            },
            "loanTerm": {
                "@type": "QuantitativeValue",
                "value": 6,
                "unitText": "Months",
                "minValue": 6,
                "maxValue": 60
            },
            "requiredCollateral": "În funcție de evaluarea riscului de credit, pot fi încheiate contracte de fidejusiune (garant) sau gaj (imobil).",
            "priceSpecification": {
                "@type": "PriceSpecification",
                "price": 0,
                "priceCurrency": "MDL",
                "description": "Comision de acordare: 0 MDL. Penalitate pe zi: 0.04% din valoarea totală a creditului pentru fiecare zi de întârziere. Comision pentru prelungirea Contractului: egal cu dobânda necesară a fi achitată pentru rata amânată."
            }
        }
    ]
}

export const localBusinessChisinauSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ideal Credit Chișinău",
    "legalName": "Organizația de Creditare Nebancară \"Ideal Credit\" SRL",
    "url": "https://idealcredit.md/",
    "priceRange": "10000-300000 MDL",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "str. Miron Costin, nr.25, of.115",
        "addressLocality": "Chișinău",
        "addressRegion": "MD",
        "postalCode": "MD-2068",
        "addressCountry": "MD"
    },
    "telephone": "+37378805060",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:30",
            "closes": "16:30"
        }
    ],
    "areaServed": {
        "@type": "State",
        "name": "Republica Moldova"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "10"
    },
    "image": "https://idealcredit.md/ideal-credit-logo.svg",
    "hasMap": "https://maps.app.goo.gl/EYxf2NnK3ScynGH79"
}

export const localBusinessCauseniSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ideal Credit Căușeni",
    "legalName": "Organizația de Creditare Nebancară \"Ideal Credit\" SRL",
    "url": "https://idealcredit.md/",
    "priceRange": "10000-300000 MDL",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "str. Mihai Eminescu nr. 17, of. 47",
        "addressLocality": "Căușeni",
        "addressRegion": "Căușeni",
        "postalCode": "MD-4301",
        "addressCountry": "MD"
    },
    "telephone": "+37379066566",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:30",
            "closes": "16:30"
        }
    ],
    "areaServed": {
        "@type": "State",
        "name": "Republica Moldova"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "13"
    },
    "image": "https://idealcredit.md/ideal-credit-logo.svg",
    "hasMap": "https://maps.app.goo.gl/T7nCkvKXGKLFKU3Z9"
}

export const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cum să obții un credit de la Ideal Credit",
    "description": "Ghid pas cu pas pentru a solicita și obține un credit nebancar de la Ideal Credit.",
    "supply": [
        {
            "@type": "HowToSupply",
            "name": "Buletin de identitate valabil"
        },
        {
            "@type": "HowToSupply",
            "name": "Sursă de venit stabilă"
        },
        {
            "@type": "HowToSupply",
            "name": "Responsabilitate financiară"
        }
    ],
    "step": [
        {
            "@type": "HowToStep",
            "name": "Completezi cererea",
            "text": "Online, la telefon, Viber, WhatsApp sau într-unul din oficiile noastre."
        },
        {
            "@type": "HowToStep",
            "name": "Primești răspunsul",
            "text": "Echipa noastră va analiza cererea ta și îți vom comunica decizia în cel mai scurt timp."
        },
        {
            "@type": "HowToStep",
            "name": "Semnează contractul și primești banii",
            "text": "Dacă decizia este pozitivă, atunci semnezi contractul (în oficiul nostru) și primești banii."
        }
    ]
}

export const businessCreditSchema = {
    "@type": "LoanOrCredit",
    "name": "Credit pentru afaceri",
    "description": "Credite rapide, transparente, cu dobânzi fixe și fără comisioane ascunse, concepute pentru a susține dezvoltarea afacerilor în Republica Moldova.",
    "url": "https://idealcredit.md/#",
    "amount": {
        "@type": "MonetaryAmount",
        "value": 1000,
        "currency": "MDL",
        "minValue": 1000,
        "maxValue": 300000
    },
    "interestRate": {
        "@type": "QuantitativeValue",
        "value": 4,
        "unitText": "%",
        "description": "Dobândă lunară fixă"
    },
    "annualPercentageRate": {
        "@type": "QuantitativeValue",
        "value": 60.83,
        "unitText": "%",
        "description": "Dobânda anuală efectivă (DAE), incluzând toate costurile aferente creditului."
    },
    "loanTerm": {
        "@type": "QuantitativeValue",
        "value": 6,
        "unitText": "Months",
        "minValue": 6,
        "maxValue": 60
    },
    "requiredCollateral": "În funcție de evaluarea riscului de credit, pot fi încheiate contracte de fidejusiune (garant) sau gaj (imobil).",
    "priceSpecification": {
        "@type": "PriceSpecification",
        "price": 0,
        "priceCurrency": "MDL",
        "description": "Comision de acordare: 0 MDL. Penalitate pe zi: 0.04% din valoarea totală a creditului pentru fiecare zi de întârziere. Comision pentru prelungirea Contractului: egal cu dobânda necesară a fi achitată pentru rata amânată."
    }
}

export const personalLoanSchema = {
    "@type": "LoanOrCredit",
    "name": "Credit pentru nevoi personale",
    "description": "Credite rapide, transparente, cu dobânzi fixe și fără comisioane ascunse, adaptate nevoilor personale ale clienților din Republica Moldova.",
    "url": "https://idealcredit.md/#",
    "amount": {
        "@type": "MonetaryAmount",
        "value": 1000,
        "currency": "MDL",
        "minValue": 1000,
        "maxValue": 300000
    },
    "interestRate": {
        "@type": "QuantitativeValue",
        "value": 4,
        "unitText": "%",
        "description": "Dobândă lunară fixă"
    },
    "annualPercentageRate": {
        "@type": "QuantitativeValue",
        "value": 60.83,
        "unitText": "%",
        "description": "Dobânda anuală efectivă (DAE), incluzând toate costurile aferente creditului."
    },
    "loanTerm": {
        "@type": "QuantitativeValue",
        "value": 6,
        "unitText": "Months",
        "minValue": 6,
        "maxValue": 60
    },
    "requiredCollateral": "În funcție de evaluarea riscului de credit, pot fi încheiate contracte de fidejusiune (garant) sau gaj (imobil).",
    "priceSpecification": {
        "@type": "PriceSpecification",
        "price": 0,
        "priceCurrency": "MDL",
        "description": "Comision de acordare: 0 MDL. Penalitate pe zi: 0.04% din valoarea totală a creditului pentru fiecare zi de întârziere. Comision pentru prelungirea Contractului: egal cu dobânda necesară a fi achitată pentru rata amânată."
    }
} 