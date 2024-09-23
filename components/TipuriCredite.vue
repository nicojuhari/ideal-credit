<script setup>
let credits = [
    { name: 'Credit de consum', link: 'credit-de-consum', icon: 'ph:shopping-cart-simple-thin' },
    { name: 'Credit auto', link: 'credit-auto', icon: 'ph:car-profile-thin' },
    { name: 'Credit ipotecar', link: 'credit-ipotecar', icon: 'ph:house-line-thin' },
    { name: 'Credit pentru afaceri', link: 'credit-pentru-afaceri', icon: 'ph:chart-bar-thin' }
]

let classes = 'flex flex-col items-center justify-center py-10 gap-4 transition-all duration-300 hover:bg-brand-black rounded-md'
</script>
<template>
    <div class="card light">
        <div class="card-title text-center">Tipuri de credite</div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <nuxt-link v-for="item in credits" :key="item.name" :to="item.link" :class="classes" class="group"
                :title="item.name">
                <Icon :name="item.icon"
                    class="w-10 h-10 shrink-0 text-brand-color/90" />
                <h3
                    class="text-center h-10 group-hover:text-white transition-all duration-300">
                    {{ item.name }}
                </h3>
            </nuxt-link>
        </div>
    </div>
</template>