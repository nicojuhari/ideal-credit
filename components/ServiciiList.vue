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
        

    ]
</script>
<template>
    <section class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 gap-y-8">
            <div class="card"
                v-for="group in groups" 
                :key="group.name">
                <h3 class="text-2xl mb-8">
                    {{ group.title }}
                </h3>
                <ul class="space-y-3">
                    <li v-for="item in list.filter(item => item.group === group.name)" :key="item.link">
                        <NuxtLink :to="`/credite${item.link}`" :title="item.title" class="link text-lg">
                            {{ item.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>


