<script setup>
let credits = [
    { name: 'Credit pentru dezvoltarea afacerii', link: 'credit-pentru-afaceri', image: '/credit-pentru-afaceri.webp' },
    { name: 'Credit pentru nevoi personale', link: 'credit-de-consum', image: '/credit-pentru-nevoi-personale.webp' },
]

let classes = 'flex flex-col items-center justify-center gap-8 hover:scale-105 transition-all duration-300'

let benefits = [
    'Rapid',
    'Transparent',
    'Dobânzi fixe',
    'Fără comisioane ascunse'
]
</script>
<template>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="card grid place-items-center">
                <UIcon name="i-ph-thumbs-up-light" class="text-brand-500 w-14 h-14 mb-8" />
                <UiBenefitsList :items="benefits"/>
            </div>
            <nuxt-link v-for="item in credits" :key="item.name" :to="item.link" :class="classes" class="group card"
                :title="item.name">
                <img :src="item.image" :alt="item.name" class="h-[200px] object-cover">
                <h3 class="text-center text-2xl font-semibold lg:h-16">
                    {{ item.name }}
                </h3>
            </nuxt-link>
        </div>
</template>