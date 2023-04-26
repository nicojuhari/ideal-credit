<script setup>
useHead({
    title: 'Credite de Consum',
    meta: [
        { name: 'description', content: 'Ideal Credit oferă credite de consum persoanelor fizice pentru nevoi personale, cu dobînzi avantajoase și fără comisioane ascunse' },
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
        <div class="container relative card light text-lg">
            <div class="card-title text-center">Despre credit</div>
            <p>Dacă ai planificat achiziționarea unor bunuri, o vacantă sau au intervenit cheltuieli neprevăzute, 
                        cum ar fi facturi medicale sau reparații de locuințe, 
                        iar resursele financiare de care dispui la moment nu sunt suficiente.</p>
            <p class="mb-0">Atunci, <strong>creditul de consum</strong> poate fi o soluție bună pentru a acoperi cheltuielile curente sau pentru a finanța un proiect important.
                    </p>
            
        </div>
        <div class="container mt-4 md:mt-6">
            <CalculatorCredit />
        </div>
        <div class="container card light mt-4 md:mt-6">
             <CallToAction/>
        </div>
    </div>
</template>