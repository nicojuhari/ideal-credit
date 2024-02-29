<script setup>

useHead({
    title: 'Credit pentru refinanțarea altor credite mai scumpe ',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'description', content: 'Oferim credit pentru refinanțarea altor credite mai scumpe, cu dobânzi avantajoase, fără comisioane ascunse și pe un termen mai lung.' },
        { name: 'keywords', content: 'refinanțare credite, credite Moldova, credite rapide, credite online, împrumuturi' }
    ],
})

const list = [
    {
        name: 'Destinația',
        description: 'pentru refinanțarea creditelor, oferite de alte instituții bancare sau nebancare'
    },
    {
        name: 'Termen',
        description: 'pînă la 60 de luni, cu posibilitatea de prelungire'
    },
     {
        name: 'Suma',
        description: 'pînă la 100%, din datoriile existente'
    }
]
</script>
<template>
    <div class="mb-6">
        <div class="bg-in-squares py-32 md:py-48">
            <div class="container cs-blur pb-4">
                <h1 class="text-center hero-title">Credit pentru Refinanțare
                    <span class="subtitle flex justify-center mt-2">a altor credite mai scumpe</span>
                </h1>
                <UiHeroSectionCTA/>
            </div>
        </div>
        <div class="container my-6 relative">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div v-for="item in list" :key="item.name" class="card flex-grow" :title="item.name">
                    <div class="mb-6 text-brand-color text-xl">{{ item.name }}</div>
                    <div> {{ item.description }}</div>
                </div>
            </div>
        </div>
        <div class="container text-lg relative">
            <div class="card light">
                <h2 class="card-title text-center">Ce este un credit pentru refinanțare?</h2>
                <p>Creditul pentru refinanțare este un tip de împrumut care înlocuiește un credit existent cu unul nou, de regulă cu condiții mai favorabile.</p>
                <p class="mb-0">
                    Scopul refinanțării:
                </p>
                <ul class="list-outside list-disc ml-6">
                    <li>Consolidarea mai multor datorii într-un singur împrumut.</li>
                    <li>Obținerea unei dobânzi mai mici și/sau un termen de rambursare mai lung.</li>
                </ul>
                <p class="mt-6 mb-0">
                    Beneficiile refinanțării:
                </p>
                <ul class="list-outside list-disc ml-6">
                    <li><strong>Reducerea cheltuielilor:</strong> Dobânzi mai mici pot însemna economii semnificative pe durata creditului.</li>
                    <li><strong>Simplificarea gestionării datoriilor:</strong> Un singur credit în loc de mai multe ușurează planificarea și plățile.</li>
                    <li><strong>Prelungirea perioadei de rambursare:</strong> Termene mai lungi pot oferi o flexibilitate sporită în gestionarea bugetului.</li>
                    <li><strong>Posibilitatea refinanțării cu istoric negativ:</strong> Persoanele cu istoric financiar problematic pot beneficia de restructurarea datoriilor prin refinanțare.</li>
                </ul>
                <p class="mt-6">Un credit pentru refinanțare este o soluție financiară eficientă pentru cei care doresc să-și reorganizeze datoriile existente sau să obțină condiții mai favorabile pentru împrumuturile lor.</p>
                <p class="mb-0 font-bold">Contactează-ne acum pentru a afla mai multe despre cum te putem ajuta să ai o situație financiară mai bună.</p>
            </div>
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container mt-4 md:mt-6">
            <CallToAction class="card light" />
        </div>
    </div>
</template>