<script setup>
    useHead({
        title: 'Despre Ideal Credit: Credite avantajoase și servicii personalizate',
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
                <h1 class="title text-center">Despre noi</h1>
                <div class="text-lg space-y-4">
                    <p>Partenerul tău de încredere în finanțare din Moldova.</p>
                    <p>Ideal Credit SRL activează din 2010 pe piața nebancară. În cei peste <span class="text-green-400">{{ getFullYear() - 2010 }} ani de activitate</span>, am deservit sute de clienți - persoane fizice și întreprinderi.</p>
                    <h2 class="pt-4 font-bold text-2xl">Misiunea noastră</h2>
                    <p>
                       Sprijinim dezvoltarea economică a Moldovei prin soluții financiare rapide, transparente și adaptate fiecărui client.
                    </p>
                    <h2 class="pt-4 font-bold text-2xl">Ce ne diferențiază</h2>
                    <ul class="list-disc list-inside">
                        <li>
                            <strong>Expertiză locală:</strong> Înțelegem realitățile financiare și nevoile antreprenorilor și ale familiilor din Republica Moldova.
                        </li>
                        <li>
                            <strong>Proces rapid:</strong> Cerere simplă, aprobare în 24-48 ore și contractare cu documente minime.
                        </li>
                        <li>
                            <strong>Transparență completă:</strong> Fără comisioane ascunse. Toate costurile și dobânzile sunt comunicate din start.
                        </li>
                        <li>
                            <strong>Consultanță dedicată:</strong> Echipa noastră îți stă alături pas cu pas, de la analiză până la semnarea contractului.
                        </li>
                    </ul>
                    <h2 class="pt-4 font-bold text-2xl">Produsele noastre</h2>
                    <ul class="list-disc list-inside">
                        <li><NuxtLink to="/credit-pentru-nevoi-personale" title="credit pentru nevoi personale" class="link">Credite pentru nevoi personale (credit de consum)</NuxtLink> - pentru achiziții de bunuri de uz casnic, mijloace de transport, pînă la salariu.</li>
                        <li><NuxtLink to="/credit-pentru-afaceri" title="împrumuturi pentru afaceri" class="link">Credite pentru afaceri</NuxtLink> - pentru investiții în echipamente, mijloace circulante, modernizare sau dezvoltare.</li>
                    </ul>
                    <h2 class="pt-4 font-bold text-2xl">Angajamentul nostru</h2>
                    <ul class="list-disc list-inside">
                        <li>Serviciu prietenos și profesionist</li>
                        <li>Rate avantajoase, fixe pe toată durata contractului</li>
                        <li>Flexibilitate: negociem dobânda în funcție de profilul tău financiar</li>
                    </ul>
                    <p>Alege Ideal Credit SRL pentru o finanțare simplă, sigură și rapidă.</p>
                    <LazyCallToAction class="mt-10">Solicită un credit<br> și începe-ți proiectul cu încredere!</LazyCallToAction>
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
    </div>
</template>