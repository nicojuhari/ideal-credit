<script setup>

useHead({
    title: 'Refinanțare Credite',
    meta: [
        { name: 'description', content: 'Oferim credite pentru refinanțarea altor credite mai scumpe, cu dobînzi avantajoase și fără comisioane ascunse' },
        { name: 'keywords', content: 'refinanțare credite, credite Moldova, credite rapide, credite online, împrumuturi' }
    ],
})
</script>
<template>
    <div class="mb-6">
        <div class="bg-in-squares py-20 md:py-40">
            <div class="container cs-blur pb-4">
                <h1 class="text-center hero-title">Refinanțare Credite</h1>
                <div class="text-2xl md:text-4xl text-center mt-10 md:mt-16">cu <span class="text-[60px] md:text-[90px] font-bold">0%</span> comision</div>
                <UiHeroSectionCTA/>
            </div>
        </div>
        <div class="container text-lg relative">
            <div class="card light">
                <h2 class="card-title text-center">Ce este un credit pentru refinanțare?</h2>
                <p>Dacă aveți mai multe datorii cu rate și dobânzi diferite, iar colaborarea cu mai mulți parteneri financiari vă consumă prea mult timp și resurse,
                creditul pentru refinanțare este o soluție financiară prin care îți poți consolida datoriile actuale într-un singur împrumut. 
                </p>
                <p>Prin refinanțare, îți poți reduce cheltuielile lunare, plătind o singură rată în loc de mai multe.</p>
                <p>Noi îți oferim soluții personalizate și îți putem oferi o analiză a situației tale financiare, pentru a te ajuta să iei cea mai bună decizie. </p>
                <p class="mb-0">Contactează-ne acum pentru a afla mai multe despre cum te putem ajuta să îți consolidezi datoriile și să ai o situație financiară mai bună.</p>
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