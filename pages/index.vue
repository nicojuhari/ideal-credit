<script setup>
    useSchemaOrg([
        {
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Credite nebancare pentru afaceri și nevoi personale",
            "provider": {
                "@type": "Organization",
                "name": "Ideal Credit",
                "url": "https://idealcredit.md/"
            },
            "serviceType": "LoanOrCredit",
            "areaServed": {
                "@type": "State",
                "name": "Republica Moldova"
            },
            "description": "Oferim soluții financiare accesibile și transparente pentru antreprenori și persoane fizice, cu un istoric de 15 ani de experiență pe piața financiară din Republica Moldova.",
            "offers": [
                {
                "@type": "LoanOrCredit",
                "name": "Credit pentru dezvoltarea afacerii",
                "description": "Credite rapide, transparente, cu dobânzi fixe și fără comisioane ascunse, concepute pentru a susține dezvoltarea afacerilor în Republica Moldova.",
                "url": "https://idealcredit.md/#",
                "amount": {
                    "@type": "QuantitativeValue",
                    "value": 1000,
                    "unitText": "MDL",
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
                "repaymentSchedule": "Conform graficului de rambursare anexat la contractul de credit.",
                "feesAndCommissions": "Comision de acordare: 0 MDL. Penalitate pe zi: 0.04% din valoarea totală a creditului pentru fiecare zi de întârziere. Comision pentru prelungirea Contractului: egal cu dobânda necesară a fi achitată pentru rata amânată."
                },
                {
                "@type": "LoanOrCredit",
                "name": "Credit pentru nevoi personale",
                "description": "Credite rapide, transparente, cu dobânzi fixe și fără comisioane ascunse, adaptate nevoilor personale ale clienților din Republica Moldova.",
                "url": "https://idealcredit.md/#",
                "amount": {
                    "@type": "QuantitativeValue",
                    "value": 1000,
                    "unitText": "MDL",
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
                "repaymentSchedule": "Conform graficului de rambursare anexat la contractul de credit.",
                "feesAndCommissions": "Comision de acordare: 0 MDL. Penalitate pe zi: 0.04% din valoarea totală a creditului pentru fiecare zi de întârziere. Comision pentru prelungirea Contractului: egal cu dobânda necesară a fi achitată pentru rata amânată."
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Ideal Credit Căușeni"
            },
            "ratingValue": "5",
            "ratingCount": "13"
        },
        {
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Ideal Credit Chișinău"
            },
            "ratingValue": "4.9",
            "ratingCount": "10"
        },
        {
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
        },
        
    ])
</script>   
<template>
    <div class="py-8 md:py-16 relative">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="flex flex-col lg:col-span-8 h-full justify-center text-center lg:text-left">
                <UiRecenziiButton />
                <h1 class="font-medium text-7xl lg:text-[100px] leading-none my-10 lg:my-6">Credite<br>nebancare<span class="text-brand-500 font-extralight text-[50%] lg:text-[35%] block mt-2 lg:mt-0">pentru afaceri și nevoi personale</span></h1>
                <p class="text-gray-400 text-xl">Rapid, transparent, cu dobânzi fixe<br class="lg:hidden"> și fără comisioane ascunse.</p>
            </div>
            <div class="lg:col-span-4 gap-6 flex flex-col justify-end">
                <UiButtonsCTA toHeroSection />
            </div>
        </div>
    </div>
    <div class="container">
        <TipuriCredite />
    </div>
    <div class="container mt-4 md:mt-6">
        <CalculatorCredit />
    </div>
    <div class="container mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <LazyHowItWorks />
        <LazyCreditConditions />
    </div>
    
    <div class="container mt-4 md:mt-6">
        <LazyPaymentMethods />
    </div>
    <div class="container mt-4 md:mt-6">
        <LazyShortAboutUs />
    </div>
    <div class="container mt-4 md:mt-6">
        <RecenziiClient />
    </div>
    <div class="container my-4 md:my-6">
        <h4 class="title text-center pt-8">Întrebări frecvente</h4>
        <LazyFAQ />
    </div>
</template>