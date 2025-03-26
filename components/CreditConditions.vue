<script setup>
    const list = [
        'Vârsta de la 23 de ani',
        'Sursă de venit stabilă',
        'Buletin de identitate valabil',
        'Responsabilitate financiară',
    ]
</script>
<template>
    <div class="card">
        <h2 class="card-title text-center">Condițiile de creditare</h2>
        <div class="space-y-6">
            <div v-for="item in list" class="flex text-xl items-center gap-4">
                <UIcon name="i-ph-check" class="w-5 h-5 flex-shrink-0 text-brand-500/50" />
                {{ item }}
            </div>
        </div>
        <div class="inline-flex gap-4 mt-8 items-center">
            <UIcon name="i-ph-info" class="w-6 h-6 shrink-0 text-green-600/50" />
            <span class="text-gray-500 text-sm">În funcție de evaluarea riscului de credit, se poate solicita garanții adiționale: fidejusiune sau gaj imobil.</span>
        </div>
    </div>
</template>