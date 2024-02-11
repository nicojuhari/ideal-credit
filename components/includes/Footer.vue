<script setup>
    const oficii = [
        {
            title: 'Sediul',
            address: 'or. Căușeni, str. M.Eminescu',
            addressNumbers: 'nr. 17,  of. 47',
            mobile: ['+37379066566', '0790 66 5 66'],
        },
        {
            title: 'Sucursala Nr. 1',
            address: 'm. Chișinău, str. Miron Costin',
            addressNumbers: 'nr. 25,  of. 115',
            mobile: ['+37378805060', '078 80 50 60'],
        }
    ]

    const links = [
        {
            title: 'Credite de consum',
            link: '/credite-de-consum',
        },
        {
            title: 'Credit auto',
            link: '/credit-auto',
        },
        {
            title: 'Credite imobiliare',
            link: '/credite-imobiliare',
        },
        {
            title: 'Credite pentru afaceri',
            link: '/credite-pentru-afaceri',
        },
        {
            title: 'Credite pentru refinanțare',
            link: '/refinantare-credite',
        },
        {
            title: 'Blog Financiar',
            link: '/blog',
        },
    ]
</script>
<template>
    <footer class="bg-brand-bg border-t border-brand-color border-opacity-10 relative">
        <div class="container grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-6 py-8 px-2 md:px-0">
            <div class="md:col-span-2">
                <div class="h-10 text-xl flex items-center font-medium">Adresa oficiilor</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div v-for="oficiu in oficii" :key="oficiu.address">
                        <div class="font-bold mb-2">
                            {{ oficiu.title }}
                        </div>
                        <div class="flex gap-4 mb-4 items-center">
                            <div class="p-2 rounded-full bg-brand-raisin-black">
                                <Icon name="ph:map-pin-light" class="w-6 h-6 flex-shrink-0 text-brand-color text-opacity-50" />
                            </div>
                            <div>{{ oficiu.address }}<br>{{ oficiu.addressNumbers }}</div>
                        </div>
                        <a :href="'tel:' + oficiu.mobile[0]" class="flex gap-4 items-center">
                            <div class="p-2 rounded-full bg-brand-raisin-black">
                                <Icon name="ph:phone-light"  class="w-6 h-6 flex-shrink-0 text-brand-color text-opacity-50" />
                            </div>
                            <div>{{ oficiu.mobile[1] }}</div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div class="h-10 text-xl flex items-center font-medium">Linkuri</div>
                <ul class="mt-4">
                    <li class="mb-2" v-for="item in links" :key="item.link">
                        <NuxtLink :to="item.link" class="text-lg">{{ item.title }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container text-center my-4 text-brand-color">
            <NuxtLink to="/autoritatea-de-supraveghere" rel="nofollow">Autoritatea de Supraveghere și metodele de reclamații</NuxtLink>
        </div>
        <div class="container mt-6">
            <div class="divider"></div>
            <div class="flex justify-center py-6">
                &copy; {{ new Date().getFullYear() }} - Ideal Credit SRL
            </div>
        </div>
    </footer>
</template>