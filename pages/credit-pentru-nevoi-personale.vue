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
    <section class="relative">
        <div class="bg-squares -mt-[1px]"></div>
        <div class="container mt-16 md:mt-24">
            <h1 class="font-semibold text-center text-6xl md:text-8xl">Credit <span class="font-extralight text-brand-500 text-[34%] md:text-[40%] block mt-2">pentru nevoi personale</span></h1>
            <UiRecenziiButton  class="my-14 md:my-16"/>
            <div class="cs-blur cs-blur--center z-[-1]"></div>
            <CalculatorCredit/>
        </div>
    </section>
    <section class="container">
        <LazyHowItWorks />
    </section>
    <section>
        <div class="container text-lg">
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
    </section>
</template>