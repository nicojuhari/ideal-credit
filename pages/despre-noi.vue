<script setup>
    useHead({
        title: 'Despre noi | Ideal Credit - Companie de creditare',
        titleTemplate: '%pageTitle',
        meta: [
            { name: 'description', content: 'Ideal Credit este o organizație de creditare nebancară ce oferă credite cu dobânzi avantajoase și fără comisioane pentru nevoi personale și afaceri.' },
            { name: 'keywords', content: 'ideal credit, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
        ],
    })

    import { localBusinessChisinauSchema, localBusinessCauseniSchema } from '~/utils/schema'

    useSchemaOrg([
        localBusinessChisinauSchema,
        localBusinessCauseniSchema
    ])

    const getFullYear = () => {
        return new Date().getFullYear()
    }
</script>
<template>
    <div class="my-4 md:my-6">
        <div class="container">
            <div class="card">
                <h1 class="card-title text-center">Despre noi</h1>
                <div class="text-lg space-y-4">
                    <p>Ideal Credit SRL activează din 2010.</p>
                    <p>Avem peste <span class="text-brand-500">{{ getFullYear() - 2010 }} ani </span> experiență în <NuxtLink to="/" title="Credite nebancare" class="link">credite nebancare.</NuxtLink></p>
                    <p>Am ajutat sute de persoane fizice și companii să obțină finanțare rapidă și transparentă.</p>
                    
                    <h2 class="pt-6 text-2xl">Misiunea noastră</h2>
                    <p>Să susținem creșterea economică a Moldovei prin soluții financiare simple și corecte. Ne concentrăm pe rezultate reale pentru clienți - nu pe termeni ascunși.</p>

                    <h2 class="pt-6 text-2xl">Ce ne diferențiază</h2>
                    <ul class="list-disc list-inside">
                        <li>Expertiză locală - știm exact nevoile antreprenorilor și familiilor din Moldova.</li>
                        <li>Proces rapid - decizie în 1 - 3 ore.</li>
                        <li>Documentație minimă - buletin și adeverință de venit sau certificat de înregistrare pentru firme.</li>
                        <li>Transparență totală - fără comisioane ascunse; toate costurile sunt comunicate din start.</li>
                        <li>Consultanță gratuită - te ghidăm pas cu pas, de la analiză până la semnarea contractului.</li>
                    </ul>

                    <h2 class="pt-6 text-2xl">Ce oferim (pe scurt)</h2>
                    <p>
                        <NuxtLink to="/credit-pentru-nevoi-personale" title="Credit pentru nevoi personale" class="link">Credite pentru nevoi personale</NuxtLink> - pentru electrocasnice, mașină, tratamente medicale, cheltuieli urgente sau pînă la salariu.
                    </p>
                    <p>
                        <NuxtLink to="/credit-pentru-afaceri" title="Credit pentru afaceri" class="link">Credite pentru afaceri</NuxtLink> - pentru echipamente sau tehnologie, capital de lucru sau refinanțare, modernizare sau extindere.
                    </p>
                    
                    <h2 class="pt-6 text-2xl">Angajamentul nostru</h2>
                    <p>Să oferim un serviciu prietenos și profesionist. Condiții clare. Suport real pe termen lung. Vrem ca finanțarea să devină o unealtă pentru creșterea ta - nu o povară.</p>
                    
                    <h3 class="pt-6">Alege Ideal Credit - finanțare simplă, sigură și rapidă.</h3>
                    
                    <LazyCallToAction class="py-8" />
                </div>
            </div>
        </div>
        <div class="container mt-4 md:mt-6">
            <RegulamenteList/>
        </div>
        <div class="container mt-4 md:mt-6">
            <div class="card">
                <h3 class="text-center title mb-8">Rapoarte</h3>
                <div class="flex flex-col gap-6">
                    <a href="/raport-audit-2024.pdf" target="_blank">1. Raport de Audit 2024</a>
                    <a href="/raport-audit-2023.pdf" target="_blank">2. Raport de Audit 2023</a>
                    <a href="/raport-audit-2022.pdf" target="_blank">3. Raport de Audit 2022</a>
                </div>
            </div>
        </div>

        <div class="container mt-4 md:mt-6">
            <div class="card">
                <h3 class="text-center title mb-8">Documente de constituire</h3>
                <div class="flex flex-col gap-6">
                    <a href="/ideal-credit-certificat-de-inregistrare.pdf" title="Certificat de inregistrare Ideal Credit SRL" target="_blank">Certificat de înregistrare</a>
                    <a href="/ideal-credit-extras-registrul-organizatiilor-de-creditare-nebancare-autorizate.pdf" title="Extras din Regsitrul organizațiilor de creditare nebancare autorizate" target="_blank">Extras din Registrul organizațiilor de creditare nebancară autorizate</a>
                </div>
            </div>
        </div>
    </div>
</template>