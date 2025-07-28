<script setup>
    import { motion } from 'motion-v'

    const listPF = [
        'Vârsta de la 23 de ani',
        'Sursă de venit stabilă',
        'Buletin de identitate valabil',
        'Responsabilitate financiară',
    ]
    const listPJ = [
        'Activitate economică validă',
        'Acte constitutive',
    ]
</script>
<template>
    <motion.div class="card"
    :initial="{ opacity: 0, y: 10 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :in-view-options="{ margin: '0px 0px -200px 0px' }"
    :transition="{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }"
    >
        <h3 class="card-title text-center">Condițiile de creditare</h3>
        <div class="space-y-6">
            <div v-for="item in listPF" class="flex text-xl items-center gap-4">
                <UIcon name="i-ph-check" class="w-5 h-5 flex-shrink-0 text-brand-500/50" />
                {{ item }}
            </div>
        </div>
        <div class="inline-flex gap-4 mt-8 items-center">
            <UIcon name="i-ph-info" class="w-6 h-6 shrink-0 text-green-600/50" />
            <span class="text-gray-400">În funcție de evaluarea riscului de credit, se va solicita garanții adiționale: fidejusiune sau gaj imobil.</span>
        </div>
    </motion.div>
</template>