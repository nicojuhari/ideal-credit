export const creditConditionsSchema = {
  pf: {
    title: "Credit persoană fizică",
    list: [
      "Vârsta de la 23 de ani",
      "Sursă de venit stabilă",
      "Buletin de identitate valabil",
      "Responsabilitate financiară",
    ],
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
  telephone: "+37378805060",
  image: "https://idealcredit.md/ideal-credit-og.webp",
  priceRange: "10000-300000 MDL",
  address: {
    "@type": "PostalAddress",
    streetAddress: "str. Miron Costin, nr.25, of.115",
    addressLocality: "Chișinău",
    addressRegion: "MD",
    postalCode: "MD-2068",
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
  legalName: 'Organizația de Creditare Nebancară "Ideal Credit" SRL',
  url: "https://idealcredit.md/",
  priceRange: "10000-300000 MDL",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Miron Costin, 25, of.115",
    addressLocality: "Chișinău",
    addressRegion: "MD",
    postalCode: "MD-2068",
    addressCountry: "MD",
  },
  telephone: "+37378805060",
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
  legalName: 'Organizația de Creditare Nebancară "Ideal Credit" SRL',
  url: "https://idealcredit.md/",
  priceRange: "10000-300000 MDL",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mihai Eminescu, 17, of. 47",
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
  description:
    "Ghid pas cu pas pentru a solicita și obține un credit nebancar de la Ideal Credit.",
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
    "Credite rapide, transparente, cu dobânzi fixe și fără comisioane ascunse, adaptate nevoilor personale ale clienților din Republica Moldova.",
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
    description:
      "Dobânda anuală efectivă (DAE), incluzând toate costurile aferente creditului.",
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
  description:
    "Credit pentru afaceri mici - bani rapizi pentru dezvoltarea afacerilor.",
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
  loanTerm: {
    "@type": "QuantitativeValue",
    value: 12,
    unitText: "Months",
    minValue: 12,
    maxValue: 60,
  },
};

export const workingCapitalSchema = {
  "@context": "https://schema.org",
  "@type": "LoanOrCredit",
  name: "Credit capital de lucru pentru afaceri",
  description:
    "Credit nebancar pentru capital de lucru - salarii, furnizori, stocuri. Disponibil pentru SRL și ÎI din Moldova.",
  amount: {
    "@type": "MonetaryAmount",
    currency: "MDL",
    minValue: 10000,
    maxValue: 400000,
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
  description:
    "Credit nebancar pentru investiții în afaceri din Moldova - echipamente, extindere, modernizare.",
  amount: {
    "@type": "MonetaryAmount",
    currency: "MDL",
    minValue: 10000,
    maxValue: 400000,
  },
  loanTerm: {
    "@type": "QuantitativeValue",
    unitText: "Months",
    minValue: 12,
    maxValue: 60,
  },
};

export const refinantareSchema = {
  "@context": "https://schema.org",
  "@type": "LoanOrCredit",
  name: "Refinanțare credit în Moldova",
  description:
    "Refinanțare credite nebancare și bancare pentru persoane fizice și juridice din Moldova.",
  amount: {
    "@type": "MonetaryAmount",
    currency: "MDL",
    minValue: 10000,
    maxValue: 400000,
  },
  loanTerm: {
    "@type": "QuantitativeValue",
    unitText: "Months",
    minValue: 6,
    maxValue: 60,
  },
};
