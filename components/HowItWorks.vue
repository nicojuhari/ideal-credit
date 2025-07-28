<script setup>
    import { motion } from 'motion-v'

    const list = [
        {
            title: 'Completezi cererea',
            text: 'Online în 2 minute sau prin telefon, Viber sau WhatsApp.',
            icon: 'i-ph-pencil-line-thin'
        },
        {
            title: 'Primești răspunsul',
            text: 'În cel mai scurt timp, după ce echipa noastră va analiza cererea de credit.',
            icon: 'i-ph-clock-thin' 
        },
        {
            title: 'Semnezi contractul',
            text: 'În unul din oficiile noastre și primești banii imediat.',
            icon: 'i-ph-file-text-thin'
        },
    ]
</script>
<template>
    <motion.div class="card"
    :initial="{ opacity: 0, y: 10 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :in-view-options="{ margin: '0px 0px -200px 0px' }"
    :transition="{ duration: 0.6, ease: 'easeInOut' }"
    >
        <h3 class="card-title text-center">3 pași simpli</h3>
        <div class="space-y-6">
            <div v-for="item in list" class="flex items-start gap-4">
                <UIcon :name="item.icon" class="w-8 h-8 shrink-0 text-brand-500" />
                <div>
                    <p class="font-bold">{{ item.title }}</p>
                    <p class="mt-1.5 text-gray-400">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </motion.div>
</template>