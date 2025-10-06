<script setup lang="ts">

    const groups = [
        {
            name: 'business',
            title: 'Afaceri'
        },
        {
            name: 'personal',
            title: 'Personale'
        },
        {
            name: 'professional',
            title: 'Profesii'
        },
        {
            name: 'scop',
            title: 'Scopuri speciale'
        }

    ]
    const list = [
        {
            title: 'Credit pentru afaceri',
            link: '/credit-pentru-afaceri',
            group: 'business'
        },
        {
            title: 'Credit pentru nevoi personale',
            link: '/credit-pentru-nevoi-personale',
            group: 'personal'

        },
        {
            title: 'Credit pînă la salariu',
            link: '/credit-pina-la-salariu',
            group: 'personal',
        },
        {
            title: 'Credit pentru afaceri mici',
            link: '/credit-pentru-afaceri-mici',
            group: 'business'
        },
        {
            title: 'Credit pentru militari',
            link: '/credit-pentru-militari',
            group: 'professional'
        },
        {
            title: 'Credit pentru medici',
            link: '/credit-pentru-medici',
            group: 'professional'
        },
        {
            title: 'Credit pentru polițiști',
            link: '/credit-pentru-politisti',
            group: 'professional'
        },
        {
            title: 'Credit pentru reparație',
            link: '/credit-pentru-reparatie',
            group: 'scop'
        },
        {
            title: 'Credit pentru automobil',
            link: '',
            group: 'scop'
        },

    ]
</script>
<template>
    <section class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 lg:gap-8">
            <div class="card"
                v-for="group in groups" 
                :key="group.name">
                <h3 class="text-2xl md:text-3xl mb-8">
                    {{ group.title }}
                </h3>
                <ul class="space-y-6">
                    <li v-for="item in list.filter(item => item.group === group.name)" :key="item.link">
                        <NuxtLink v-if="item.link" :to="`/credite${item.link}`" :title="item.title" class="link text-lg md:text-xl">
                            {{ item.title }}
                        </NuxtLink>
                        <span v-else class="text-lg md:text-xl">
                            {{ item.title }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>


