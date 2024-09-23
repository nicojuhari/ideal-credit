<script setup>
    const list = [
        {
            title: 'Solicită rapid',
            text: 'Depune cererea: online, la telefon, Viber, WhatsApp sau într-unul din oficiile noastre.',
            icon: 'i-ph-pencil-line-thin'
        },
        {
            title: 'Analiza cererii',
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
        <div class="card-title text-center">Obține creditul în 3 pași simpli</div>
        <div class="grid grid-cols-1 md:grid-cols-3 pt-4 gap-10">
            <div v-for="item in list" class="space-y-4 flex flex-col items-center">
                <Icon :name="item.icon" class="w-10 h-10 shrink-0 text-brand-color" />
                <div class="text-xl font-normal text-center">{{ item.title }}</div>
                <p>{{ item.text }}</p> 
            </div>
        </div>
    </div>
</template>