<script setup>
let credits = [
    { name: 'Credite de consum', link: 'credite-de-consum'},
    { name: 'Credite auto', link: 'credite-auto' },
    { name: 'Credite ipotecare', link: 'credite-ipotecare' },
    { name: 'Credite pentru afaceri', link: 'credite-pentru-afaceri' },
    { name: 'Credite pentru agricultori', link: 'credite-pentru-agricultori' },
]

// let classes = 'px-4 py-2 rounded-full bg-white bg-opacity-10 text-lg font-light'
let classes = 'p-4 text-lg font-light duration-300 hover:bg-white hover:bg-opacity-10 flex-grow text-center'
</script>
<template>
    <!-- <div class="card">
        <div class="card-title text-center">Tipuri de credite</div>
        <div class="flex gap-4 flex-wrap">
            <nuxt-link v-for="item in credits" :key="item.name" :to="item.link" :class="classes">{{ item.name }}</nuxt-link>
        </div>
    </div> -->

    <div class="flex  flex-wrap justify-between items-center">
        <nuxt-link v-for="item in credits" :key="item.name" :to="item.link" :class="classes">{{ item.name }}</nuxt-link>
    </div>
</template>