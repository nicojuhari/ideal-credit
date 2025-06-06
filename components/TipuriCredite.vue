<script setup>
let credits = [
    { name: 'Credit pentru afaceri', link: 'credit-pentru-afaceri', image: '/credit-pentru-afaceri.webp' },
    { name: 'Credit pentru nevoi personale', link: 'credit-pentru-nevoi-personale', image: '/credit-pentru-nevoi-personale.webp' },
]

let classes = 'flex flex-col md:flex-row items-center gap-8 hover:scale-105 transition-all duration-300 p-6 bg-black-400 rounded-lg'

</script>
<template>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <nuxt-link v-for="item in credits" :key="item.name" :to="item.link" :class="classes" class="group"
                :title="item.name">
                <img :src="item.image" :alt="item.name" class="h-[80px] object-cover">
                <h2 class="text-center text-lg font-medium lg:text-xl">
                    {{ item.name }}
                </h2>
            </nuxt-link>
        </div>
</template>