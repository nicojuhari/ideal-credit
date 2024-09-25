<script setup>
    const list = [
        {
            title: 'Solicită rapid',
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
    <div class="card light">
        <h2 class="card-title text-center">Cum să obții un credit?</h2>
        <div class="space-y-6">
            <div v-for="item in list" class="flex items-start gap-4">
                <Icon :name="item.icon" class="w-8 h-8 shrink-0 text-brand-green" />
                <div>
                    <div class="text-xl font-medium">{{ item.title }}</div>
                    <div class="mt-1.5">{{ item.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>