<script setup>
    const oficii = [
        {
            title: 'Sediul',
            address: 'or. Căușeni, str. M.Eminescu, nr. 17, etajul 4, of. 47',
            mobile: '078805060',
        },
        {
            title: 'Sucursala Nr.1',
            address: 'm. Chișinău, str. Miron Costin, nr. 25, of. 115',
            mobile: '079066566',
        }
    ]
</script>
<template>
    <footer>
        <div class="w-full max-w-6xl mx-auto p-4">
            <div class="grid md:grid-cols-3 gap-4 items-center py-8">
                <div v-for="oficiu in oficii">
                    <div class="text-xl mb-2">
                        {{ oficiu.title }}
                    </div>
                    <div class="flex gap-2">
                        <div class="">Adresa:</div>
                        <div class="font-semibold">{{ oficiu.address}}</div>
                    </div>
                    <div> Mobil: {{ oficiu.mobile}}</div>
                </div>
                <div>
                    ss
                </div>
            </div>
            <div class="flex justify-center">
                &copy; {{ new Date().getFullYear() }} - Ideal Credit SRL
            </div>
        </div>
    </footer>
</template>