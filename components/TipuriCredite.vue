<script setup>
let credits = [
    { name: 'Credit pentru dezvoltarea afacerii', link: 'credit-pentru-afaceri', image: '/credit-pentru-afaceri.webp' },
    { name: 'Credit pentru nevoi personale', link: 'credit-pentru-nevoi-personale', image: '/credit-pentru-nevoi-personale.webp' },
]

let classes = 'flex flex-col items-center justify-center gap-8 hover:scale-105 transition-all duration-300'

</script>
<template>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <nuxt-link v-for="item in credits" :key="item.name" :to="item.link" :class="classes" class="group card"
                :title="item.name">
                <img :src="item.image" :alt="item.name" class="h-[180px] object-cover">
                <h3 class="text-center text-xl">
                    {{ item.name }}
                </h3>
            </nuxt-link>
        </div>
</template>