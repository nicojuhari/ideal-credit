<script setup>
    const oficii = [
        {
            title: 'Sediul',
            address: 'or. Căușeni, str. M.Eminescu, nr. 17, etajul 4, of. 47',
            mobile: '078 80 50 60,  (0243) 93 222',
        },
        {
            title: 'Sucursala Nr.1',
            address: 'm. Chișinău, str. Miron Costin, nr. 25, of. 115',
            mobile: '0790 66 5 66',
        }
    ]
</script>
<template>
    <footer class="bg-brand-black text-white border-t border-brand-color border-opacity-20">
        <div class="container">
            <div class="grid md:grid-cols-2 gap-4 gap-y-8 items-center py-8">
                <div v-for="oficiu in oficii">
                    <div class="text-xl mb-4 subtitle">
                        {{ oficiu.title }}
                    </div>
                    <div class="flex gap-2 mb-2">
                        <div class="">Adresa:</div>
                        <div class="font-light">{{ oficiu.address}}</div>
                    </div>
                    <div> Tel: {{ oficiu.mobile}}</div>
                </div>
            </div>
            <div class="flex justify-center p-4">
                &copy; {{ new Date().getFullYear() }} - Ideal Credit SRL
            </div>
        </div>
    </footer>
</template>