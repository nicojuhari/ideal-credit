<script setup>
useHead({
    title: 'Credit pentru nevoi personale - rapid și transparent',
    meta: [
        { name: 'description', content: 'Obține creditul ideal pentru nevoile tale personale, cu soluții flexibile și fără comisioane ascunse. Alege Ideal Credit pentru realizarea visurilor tale. Aplică online!' },
        { name: 'keywords', content: 'credit pentru nevoi personale, credit rapid, credit de consum, credite Moldova, credite Chișinău, credite online, împrumuturi' }
    ],
})



useSchemaOrg([
    personalLoanSchema
])

</script>
<template>
    <div class="mb-6">
        <div class="py-8 md:py-16 relative">
            <div class="bg-squares -mt-[1px]"></div>
            <div class="container grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div class="flex flex-col lg:col-span-8 h-full justify-center text-center lg:text-left">
                    <UiRecenziiButton />
                    <h1 class="font-medium text-5xl lg:text-7xl leading-none mt-10 mb-6">Credit pentru <br>nevoi personale</h1>
                    <h2 class="text-brand-500 text-xl">Credite nebancare rapide, transparente și fără bătăi de cap.</h2>
                </div>
                <div class="lg:col-span-4 gap-6 flex flex-col justify-end">
                    <UiButtonsCTA toHeroSection />
                </div>
            </div>
        </div>
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
            <HowItWorks />
            <LazyCreditConditions />
        </div>
        <div class="container mt-4 md:mt-6">
            <LazyCalculatorCredit />
        </div>
        <div class="container relative card text-lg mt-4 md:mt-6 ">
            <h2 class="card-title text-center">Ce este un credit pentru nevoi personale  ?</h2>
            <p>Un credit pentru nevoi personale este o sumă de bani împrumutată de la o instituție financiară bancară sau nebancară,
                de către o persoană fizică pentru a finanța diverse nevoi personale.</p>
            <p class="mb-0">Spre deosebire de un credit ipotecar, care este destinat achiziționării unei locuințe, creditul de consum poate fi utilizat
                pentru o gamă largă de scopuri, cum ar fi:</p>
            <ul class="list-outside list-disc ml-6">
                <li>Achiziționarea de bunuri (electrocasnice, mobilă)</li>
                <li>Finanțarea unor cheltuieli medicale</li>
                <li>Acoperirea costurilor pentru educație</li>
                <li>Renovarea locuinței (reparație)</li>
                <li>Vacanțe (călătorii)</li>
            </ul>
            <p class="mt-6 mb-0">Beneficiile creditului pentru nevoi personale:</p>
            <ul class="list-outside list-disc ml-6">
                <li>Acces rapid la o sumă de bani semnificativă</li>
                <li>Posibilitatea de a finanța cheltuieli neprevăzute</li>
                <li>Flexibilitate în utilizarea banilor</li>
                <li>Rambursare în rate lunare fixe</li>
            </ul>
            <p class="mt-6">Creditul pentru nevoi personale poate fi un instrument util doar dacă vă permiteți rambursarea lui în
                condiții convenabile.</p>
        </div>
       
        
        <div class="container mt-4 md:mt-6">
            <LazyCallToAction />
        </div>
    </div>
</template>