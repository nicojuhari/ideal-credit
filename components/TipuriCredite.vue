<script setup>
let credits = [
    { name: 'Credit de consum', link: 'credit-de-consum', icon: 'ph:shopping-cart-simple-light' },
    { name: 'Credit auto', link: 'credit-auto', icon: 'ph:car-profile-light' },
    { name: 'Credit ipotecar', link: 'credit-ipotecar', icon: 'ph:house-line-light' },
    { name: 'Credit pentru afaceri', link: 'credit-pentru-afaceri', icon: 'ph:chart-bar-light' }
]

let classes = 'flex items-center h-14 gap-4 px-4 bg-gray-600 bg-opacity-10 hover:bg-opacity-0 border-opacity-0 hover:border-brand-color border rounded-lg transition-all duration-300'
</script>
<template>
    <div class="card light">
        <div class="card-title text-center">Tipuri de credite</div>
        <div class="space-y-4">
            <nuxt-link v-for="(item, idx) in credits" :key="item.name" :to="item.link" :class="classes" class="group"
                :title="item.name">
                <Icon :name="item.icon"
                    class="w-6 h-6 shrink-0 text-gray-600 group-hover:text-brand-color transition-all duration-300" />
                <h3
                    class="font-medium text-lg text-brand-black group-hover:text-brand-color transition-all duration-300">
                    {{ item.name }}
                </h3>
            </nuxt-link>
        </div>
    </div>
</template>