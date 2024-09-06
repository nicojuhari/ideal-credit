<script setup>
let credits = [
    { name: 'Credit de consum', link: 'credit-de-consum', icon: 'ph:shopping-cart-simple-light' },
    { name: 'Credit auto', link: 'credit-auto', icon: 'ph:car-profile-light' },
    { name: 'Credit ipotecar', link: 'credit-ipotecar', icon: 'ph:house-line-light' },
    { name: 'Credit pentru afaceri', link: 'credit-pentru-afaceri', icon: 'ph:chart-bar-light' }
]

let classes = 'bg-brand-black p-4 rounded-lg duration-300 flex items-center gap-6 flex-grow text-center hover:scale-105 text-gray-400 hover:text-brand-color'
</script>
<template>
    <div class="space-y-4 w-full">
        <nuxt-link v-for="item in credits" :key="item.name" :to="item.link" :class="classes" class="group" :title="item.name">
            <Icon :name="item.icon" class="w-6 h-6 ml-2 text-gray-400 group-hover:text-brand-color transition-all duration-300" />
            <h3 class="font-normal text-gray-200 group-hover:text-white transition-all duration-300">{{ item.name }}</h3>
        </nuxt-link>
        <UiCalculatorCreditCTA />
    </div>
</template>