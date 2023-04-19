<script setup>
    let list = [
        'Dobînzi fixe și avantajoase',
        'Fără comisioane ascunse',
        'Rambursare anticipată fără penalități',
        'Reduceri pentru clienții cu istorie creditară pozitivă',
    ]
</script>
<template>
    <div class="card light grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div>
             <h2 class="card-title text-center md:mb-0">Avantaje</h2>
             <div class="flex gap-4 flex-col">
                <div v-for="item in list" class="flex items-center gap-2 text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 flex-shrink-0 text-brand-color" viewBox="0 0 24 24"><path fill="currentColor" d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"/></svg>
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="flex gap-4 md:gap-6 flex-col items-center place-content-center text-center justify-center">
            <div class="text-brand-color flex items-baseline">
                <!-- <div class="text-[260px] leading-none">0</div> -->
                <Icon name="ph:number-zero-bold" class="w-44 h-44"/>
                <Icon name="ph:percent-bold" class="w-12 h-12 -translate-y-4 -ml-10" />
            </div>
            <div class="text-2xl font-bold">Comision de acordare</div>
        </div>
    </div>
</template>