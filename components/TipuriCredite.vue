<script setup>
let credits = [
    { name: 'Credit pentru dezvoltarea afacerii', link: 'credit-pentru-afaceri', image: '/credit-pentru-afaceri.webp' },
    { name: 'Credit pentru nevoi personale', link: 'credit-pentru-nevoi-personale', image: '/credit-pentru-nevoi-personale.webp' },
]

let classes = 'flex flex-col items-center justify-center gap-8 hover:scale-105 transition-all duration-300'

const items = [
  '/recenzii/ideal-credit-recenzie-1.webp',
  '/recenzii/ideal-credit-recenzie-2.webp',
  '/recenzii/ideal-credit-recenzie-3.webp',
]
</script>
<template>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div class="card flex flex-col items-center justify-center gap-8">
                <div class="h-[180px] flex flex-col gap-8 items-center justify-end">
                    <div class="flex items-center justify-center gap-2">
                        <UIcon name="i-ph-star-fill" class="text-brand-500 text-2xl shrink-0" v-for="i in 5" :key="i" />
                    </div>
                    <UCarousel v-slot="{ item }" :items="items" loop :autoplay="{ delay: 3000 }" class="w-full mx-auto">
                        <img :src="item" class="rounded-lg" alt="Recenzie client despre Ideal Credit">
                    </UCarousel>
                </div>
                <h3 class="text-center text-xl lg:h-16">Ce spun clienții noștri</h3>
            </div>
            <nuxt-link v-for="item in credits" :key="item.name" :to="item.link" :class="classes" class="group card"
                :title="item.name">
                <img :src="item.image" :alt="item.name" class="h-[180px] object-cover">
                <h3 class="text-center text-xl lg:h-16">
                    {{ item.name }}
                </h3>
            </nuxt-link>
        </div>
</template>