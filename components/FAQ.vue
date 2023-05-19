<script setup>
 const list = [
    { 
        question: 'Pot achita creditul înainte de termen?',
        answer: 'Da, puteți achita creditul înainte de termen, și dobînda se va calcula doar pentru perioada de utilizare a creditului.'
    },
    {
        question: 'Dobînda este flotantă sau fixă ?',
        answer: 'Dobînda este fixă, și nu se modifică în timpul perioadei de creditare.'
    },
    {
        question: 'Ce se întâmplă în cazul întârzierii sau neplății ratelor?',
        answer: `În acest caz, se va aplica o penalizare zilnică în conformitate cu termenii și condițiile contractului de credit. Este important să ne contactați, pentru a putea găsi împreună soluții de evitare a penalizărilor.`
    },
    {
        question: 'Care este suma maximă pe care o pot obține?',
        answer: `Suma maximă, poate fi influențată de nivelul veniturilor și datoriilor existente, capacitatea dumneavoastră de a rambursa împrumutul, valorile bunurilor pe care le dețineți, istoricul dvs. creditar și politicile interne ale companiei noastre.`
    }
 ]
 let classes = 'bg-brand-white-smoke p-4 py-6 rounded-lg duration-300 flex flex-col gap-4'

</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div v-for="item in list" :class="classes" class="group">
                <div class="text-brand-raisin-black font-normal text-xl">{{ item.question }}</div>
                <div class="text-brand-raisin-black text-opacity-90">{{ item.answer }}</div>
            </div>
        </div>
</template>