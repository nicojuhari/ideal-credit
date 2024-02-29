<script setup>
    const list = [
        'Cetățean al Republicii Moldova cu buletin de identitate valid',
        'Sursă de venit stabilă, confirmată și neconfirmată',
        'Posibilitatea deplină pentru deservirea creditului',
        'Gaj sau garant, în funcție de capacitatea de creditare',
    ]
</script>
<template>
    <div class="card light">
        <div class="h-24 md:h-40 mb-8">
                <img src="/conditiile-de-creditare.webp" class="h-full m-auto" alt="Condițiile de creditare" title="Condițiile de creditare"/>
            </div>
        <div class="">
            <h2 class="card-title text-center">Condițiile de creditare</h2>
            <div class="flex gap-4 flex-col">
                <div v-for="item in list" class="flex text-xl items-center">
                    <Icon name="i-ph-check-light" class="w-6 h-6 flex-shrink-0 text-green-600 text-opacity-70 mr-2"/>
                    {{ item }}
                </div>
            </div>
        </div>
        
    </div>
</template>