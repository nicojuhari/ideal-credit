<script setup>
useHead({
    title: 'Credite de Consum',
    meta: [
        { name: 'description', content: 'Ideal Credit oferă credite de consum persoanelor fizice pentru nevoi personale, cu dobânzi avantajoase și fără comisioane ascunse' },
        { name: 'keywords', content: 'credite de consum, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
    ],
})

</script>
<template>
    <div class="mb-6">
        <div class="bg-in-squares py-20 md:py-40">
            <div class="container cs-blur pb-4">
                <h1 class="text-center hero-title">Credite de consum</h1>
                <UiHeroSectionCTA/>
            </div>
        </div>
        <div class="container relative card light text-lg mt-4 md:mt-6">
                <h2 class="card-title text-center">Ce este un credit de consum ?</h2>
                <p>Un credit de consum este un produs financiar destinat persoanelor fizice, care le oferă posibilitatea de a obține fonduri într-un timp scurt și flexibil.</p>
                <p>Acest tip de credit este destinat satisfacerii nevoilor personale diverse, cum ar fi achiziționarea de electrocasnice, mobilă, reparații casnice, călătorii sau chiar <NuxtLink to="/refinantare-credite"><strong>refinanțarea datoriilor existente.</strong></NuxtLink></p>
                <p>Avantajele unui credit de consum constau în accesul rapid la fonduri, formalități minime și posibilitatea de a rambursa împrumutul în rate lunare convenabile, adaptate capacității financiare a beneficiarului.</p>
            </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
             <CallToAction/>
        </div>
    </div>
</template>