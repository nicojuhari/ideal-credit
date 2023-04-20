<script setup>
    let list = [
        'Dobînzi fixe și avantajoase',
        'Fără comisioane ascunse',
        'Rambursare anticipată fără penalități',
        'Reduceri pentru clienții cu istorie creditară pozitivă',
    ]
</script>
<template>
    <div class="card light grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6">
        <div>
             <h2 class="card-title text-center">Avantaje</h2>
             <div class="flex gap-4 flex-col">
                <div v-for="item in list" class="flex items-center text-xl">
                    <Icon name="ph:dot-outline-light" class="w-8 h-8 flex-shrink-0 text-brand-color"/>
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="-order-1 md:order-1 flex h-full">
            <img src="/light.png" class="h-44 md:h-64 m-auto"/>
            <!-- <img src="/agre.svg" class="h-44 md:h-60 m-auto"/> -->
        </div>
        <div class="fls ex gap-4 md:gap-6 flex-col items-center place-content-center text-center justify-center hidden">
            <div class="text-brand-color flex items-baseline">
                <!-- <div class="text-[260px] leading-none">0</div> -->
                <Icon name="ph:number-zero-bold" class="w-44 h-44"/>
                <Icon name="ph:percent-bold" class="w-12 h-12 -translate-y-4 -ml-10" />
            </div>
            <div class="text-2xl font-bold">Comision de acordare</div>
        </div>
    </div>
</template>