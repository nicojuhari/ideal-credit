<script setup>

    const list = [
        {
            title: 'Cerere',
            text: 'Depune cererea de credit online, prin telefon sau WhatsApp.',
            icon: 'i-ph-pencil-line-thin'
        },
        {
            title: 'Răspuns',
            text: 'Echipa noastră va analiza cererea și va răspunde în cel mai scurt timp.',
            icon: 'i-ph-clock-thin'
        },
        {
            title: 'Contract',
            text: 'În unul din oficiile noastre, semnezi contractul și primești banii imediat.',
            icon: 'i-ph-file-text-thin'
        },
    ]
</script>
<template>
    <div>
        <UiBadgeForSection class="mb-6">3 pași simpli</UiBadgeForSection>
        <h2 class="card-title text-center">Cum primești creditul?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div v-for="(item, index) in list" :key="index" class="card group">
                <div class="text-blue-500 group-hover:scale-105 transition-all duration-300">
                    <span class="font-bold text-8xl">{{ index + 1 }}</span>
                    <p class="text-2xl font-bold mt-2">{{ item.title }}</p>
                </div>
                <p class="mt-24">{{ item.text }}</p>
        </div>
        </div>
    </div>
</template>