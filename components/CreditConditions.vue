<script setup>
    const list = [
        'Cetățean al Republicii Moldova cu buletin de identitate valid',
        'Sursă de venit stabilă, confirmată și neconfirmată',
        'Posibilitatea deplină pentru deservirea creditului',
        'Gaj sau garant, în funcție de capacitatea de creditare',
    ]
</script>
<template>
    <div class="card light space-y-8">
        <div class="card-title text-center">Condițiile de creditare</div>
        <div class="space-y-4">
            <div v-for="item in list" class="flex text-xl items-center gap-4">
                <Icon name="i-ph-check" class="w-5 h-5 flex-shrink-0 text-green-500" />
                {{ item }}
            </div>
        </div>
    </div>
</template>