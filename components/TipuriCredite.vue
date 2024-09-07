<script setup>
let credits = [
    { name: 'Credit de consum', link: 'credit-de-consum', icon: 'ph:shopping-cart-simple-light' },
    { name: 'Credit auto', link: 'credit-auto', icon: 'ph:car-profile-light' },
    { name: 'Credit ipotecar', link: 'credit-ipotecar', icon: 'ph:house-line-light' },
    { name: 'Credit pentru afaceri', link: 'credit-pentru-afaceri', icon: 'ph:chart-bar-light' }
]

let classes = 'flex flex-col items-center justify-center gap-6 text-white text-center hover:text-brand-color duration-300 transition-all px-6 rounded-lg bg-brand-black'
</script>
<template>
    <div class="card light space-y-8">
        <div class="card-title text-center">Tipuri de credite</div>
        <div class="grid grid-cols-2 gap-4">
            <nuxt-link v-for="item in credits" :key="item.name" :to="item.link" :class="classes" class="group h-36"
                :title="item.name">
                <Icon :name="item.icon"
                    class="w-6 h-6 ml-2 text-brand-color/40 group-hover:text-brand-color duration-300 transition-all" />
                <h3 class="font-normal h-10">{{ item.name }}</h3>
            </nuxt-link>
        </div>
    </div>
</template>