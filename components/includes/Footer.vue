<script setup>
    const oficii = [
        {
            title: 'Sediul',
            address: 'or. Căușeni, str. M.Eminescu',
            addressNumbers: 'nr. 17, et. 4, of. 47',
            mobile: '078 80 50 60,  (0243) 93 222',
        },
        {
            title: 'Sucursala Nr. 1',
            address: 'm. Chișinău, str. Miron Costin',
            addressNumbers: 'nr. 25, of. 115',
            mobile: '0790 66 5 66',
        }
    ]
</script>
<template>
    <footer class="bg-brand-bg border-t border-brand-color border-opacity-10">
        <div class="container grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-6 p-6 md:p-8">
            <div>
                <NuxtLink to="/" class="flex gap-3 items-center" title="Ideal Credit">
                    <IconsLogo class="w-10" />
                    <h2 class="text-lg">Ideal Credit</h2>
                </NuxtLink>
               
                <div class="mt-4 text-sm md:pr-4">Credite rapide pentru nevoi personale și afaceri, cu dobînzi fixe și avantajoase, fără comisioane ascunse.</div>
            </div>
            <div class="col-span-2 ">
                <!-- <div class="mb-8 text-2xl">Adresa oficiilor</div> -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div v-for="(oficiu, idx) in oficii" class="border-brand-white-smoke border-opacity-10">
                        <div class="text-lg mb-2">
                            {{ oficiu.title }}
                        </div>
                        <div class="flex gap-4 mb-4 items-center">
                            <div class="p-2 rounded-full bg-brand-color bg-opacity-10">
                                <Icon name="ph:map-pin-light" class="w-6 h-6 flex-shrink-0 text-brand-color" />
                            </div>
                            <div>{{ oficiu.address }}<br>{{ oficiu.addressNumbers }}</div>
                        </div>
                        <div class="flex gap-4 items-center">
                            <div class="p-2 rounded-full bg-brand-color bg-opacity-10">
                                <Icon name="ph:phone-light" class="w-6 h-6 flex-shrink-0 text-brand-color" />
                            </div>
                            <div>{{ oficiu.mobile }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-6">
            <div class="divider"></div>
            <div class="flex justify-center py-6">
                &copy; {{ new Date().getFullYear() }} - Ideal Credit SRL
            </div>
        </div>
    </footer>
</template>