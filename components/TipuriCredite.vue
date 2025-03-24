<script setup>
let credits = [
    { name: 'Credit de consum', link: 'credit-de-consum', icon: 'ph:shopping-cart-simple-thin' },
    { name: 'Credit auto', link: 'credit-auto', icon: 'ph:car-profile-thin' },
    { name: 'Credit ipotecar', link: 'credit-ipotecar', icon: 'ph:house-line-thin' },
    { name: 'Credit pentru afaceri', link: 'credit-pentru-afaceri', icon: 'ph:chart-bar-thin' }
]

let classes = 'flex flex-col items-center justify-center gap-4 hover:scale-105 transition-all duration-300'
</script>
<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <nuxt-link v-for="item in credits" :key="item.name" :to="item.link" :class="classes" class="group card"
            :title="item.name">
            <Icon :name="item.icon"
                class="w-10 h-10 shrink-0 text-orange-color/70 group-hover:text-orange-color transition-all duration-300" />
            <h3 class="text-center h-10">
                {{ item.name }}
            </h3>
        </nuxt-link>
    </div>
</template>