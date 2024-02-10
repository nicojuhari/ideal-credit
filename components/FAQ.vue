<script setup>
 const list = [
    { 
        question: 'Pot achita creditul înainte de termen?',
        answer: 'Da, puteți achita creditul înainte de termen, și dobânda se va calcula doar pentru perioada de utilizare a creditului.'
    },
    {
        question: 'Dobânda este flotantă sau fixă ?',
        answer: 'Dobânda este fixă, și nu se modifică în timpul perioadei de creditare.'
    },
    {
        question: 'Ce se întâmplă în cazul întârzierii sau neplății ratelor?',
        answer: `În acest caz, se va aplica o penalizare zilnică în conformitate cu termenii și condițiile contractului de credit. Este important să ne contactați, pentru a putea găsi împreună soluții de evitare a penalizărilor.`
    },
    {
        question: 'Care este suma maximă pe care o pot obține?',
        answer: `Suma maximă, poate fi influențată de nivelul veniturilor și datoriilor existente, capacitatea dumneavoastră de a rambursa împrumutul, valorile bunurilor pe care le dețineți, istoricul Dvs. creditar și politicile interne ale companiei noastre.`
    },
    {
        question: 'Dacă am deja un credit mai pot beneficia de unul?',
        answer: `Da, dacă veniturile Dvs. sunt suficiente pentru a achita mai multe credite paralele, iar creditele active sunt achitate fără întârzieri.`
    },
    {
        question: 'Am credite la alte organizații/bănci, le pot refinanța la Ideal Credit?',
        answer: `Da, Ideal Credit refinanțează credite de la alte organizații sau bănci în urma analizei detaliate a situației Dvs. financiare.`
    },
    {
        question: 'Ce înseamnă DAE la credit?',
        answer: `DAE, sau Dobânda Anuală Efectivă, este un indicator crucial în domeniul creditelor, reprezentând costul total al unui credit pentru consumatori, incluzând atât dobânda aferentă împrumutului cât și alte costuri asociate. Este important să luați în considerare DAE atunci când comparați diferite oferte de credite.`
    }
 ]
 let classes = 'bg-brand-white-smoke p-4 py-6 rounded-lg duration-300 flex flex-col gap-4'

</script>
<template>
    <div class="grid grid-cols-1 gap-4 md:gap-6">
            <div v-for="item in list" :class="classes" class="group">
                <div class="text-brand-raisin-black font-normal text-xl">{{ item.question }}</div>
                <div class="text-brand-raisin-black text-opacity-90">{{ item.answer }}</div>
            </div>
        </div>
</template>