<script setup>
    const list = [
        {
            title: 'Solicită',
            text: 'Depune cererea: online, la telefon, Viber, WhatsApp sau într-unul din oficiile noastre.',
            icon: 'i-ph-pencil-line-thin'
        },
        {
            title: 'Primești răspunsul',
            text: 'Echipa noastră va analiza cererea ta și îți vom comunica decizia în cel mai scurt timp.',
            icon: 'i-ph-clock-clockwise-thin'
        },
        {
            title: 'Semnează contractul',
            text: 'Dacă decizia este pozitivă, atunci semnezi contractul (în oficiul nostru) și primești banii.',
            icon: 'i-ph-file-text-thin'
        },
    ]
</script>
<template>
    <div class="card">
        <h3 class="card-title text-center">Cum să obții un credit?</h3>
        <div class="space-y-6">
            <div v-for="item in list" class="flex items-start gap-4">
                <UIcon :name="item.icon" class="w-8 h-8 shrink-0 text-brand-500/50" />
                <div>
                    <p class="text-xl font-medium !mb-0">{{ item.title }}</p>
                    <p class="mt-1.5 text-gray-300 !mb-0">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>