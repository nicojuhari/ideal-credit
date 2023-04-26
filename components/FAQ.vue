<script setup>
 const list = [
    { 
        question: 'Pot achita creditul înainte de termen?',
        answer: 'Da, puteți achita creditul înainte de termen, și dobînda se va calcula doar pentru perioada de utilizare a creditului.'
    },
    {
        question: 'Pot achita creditul înainte de termen?',
        answer: 'Da, puteți achita creditul înainte de termen, și dobînda se va calcula doar pentru perioada de utilizare a creditului.'
    },
    {
        question: 'Pot achita creditul înainte de termen?',
        answer: 'Da, puteți achita creditul înainte de termen, și dobînda se va calcula doar pentru perioada de utilizare a creditului.'
    },
    {
        question: 'Pot achita creditul înainte de termen?',
        answer: 'Da, puteți achita creditul înainte de termen, și dobînda se va calcula doar pentru perioada de utilizare a creditului.'
    }
 ]
 let classes = 'bg-brand-white-smoke p-4 py-6 rounded-lg duration-300 flex flex-col gap-4 md:gap-6'

</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div v-for="item in list" :class="classes" class="group">
                <div class="text-brand-raisin-black font-normal text-2xl">{{ item.question }}</div>
                <div class="text-brand-raisin-black text-opacity-90">{{ item.answer }}</div>
            </div>
        </div>
</template>