<script setup>
let credits = [
    { name: 'Credite de consum', link: 'credite-de-consum', icon: 'ph:shopping-cart-simple-light' },
    { name: 'Credite auto', link: 'credite-auto', icon: 'ph:car-profile-light' },
    { name: 'Credite imobiliare', link: 'credite-imobiliare', icon: 'ph:house-line-light' },
    { name: 'Credite pentru afaceri', link: 'credite-pentru-afaceri', icon: 'ph:chart-bar-light' }
]

let classes = 'bg-brand-raisin-black px-4 py-8 text-lg rounded-lg duration-300 hover:bg-opacity-80 flex flex-col justify-center items-center gap-6 flex-grow text-center'
</script>
<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <nuxt-link v-for="item in credits" :key="item.name" :to="item.link" :class="classes" class="group" :title="item.name">
            <Icon :name="item.icon" class="text-brand-color text-opacity-50 w-10 h-10 group-hover:scale-110 group-hover:text-opacity-100 duration-500" />
            <span>{{ item.name }}</span>
        </nuxt-link>
    </div>
</template>