<script setup>
    
    defineProps(['grafic', 'dobindaTotal', 'credit'])

</script>
<template>
    <div class="overflow-auto border border-gray-100 rounded text-white">
        <table class="min-w-full text-sm divide-y divide-gray-100 grafic-table overflow-y-auto">
            <thead>
                <tr class="bg-gray-50 text-brand-black">
                    <th class="px-4 py-2 font-medium text-left whitespace-nowrap">Nr.</th>
                    <th class="px-4 py-2 font-medium text-left whitespace-nowrap">Data</th>
                    <th class="px-4 py-2 font-medium text-left whitespace-nowrap">Credit</th>
                    <th class="px-4 py-2 font-medium text-left whitespace-nowrap">Dobinda</th>
                    <th class="px-4 py-2 font-medium text-left whitespace-nowrap">Total</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-100">
                <tr v-for="(rata, idx) in grafic">
                    <td class="px-4 py-2 font-medium whitespace-nowrap">{{ idx + 1 }}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ new
                        Date(rata.data_rata).toLocaleDateString('ro-RO')}}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ rata.credit_rata}}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ rata.dobinda_rata}}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ rata.dobinda_rata + rata.credit_rata }}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr class="bg-gray-50 text-brand-black">
                    <th class="px-4 py-2 font-medium text-left whitespace-nowrap"></th>
                    <th class="px-4 py-2 font-medium text-left whitespace-nowrap">Total</th>
                    <th class="px-4 py-2 font-medium text-left whitespace-nowrap">{{credit}}</th>
                    <th class="px-4 py-2 font-medium text-left whitespace-nowrap">{{dobindaTotal}}</th>
                    <th class="px-4 py-2 font-medium text-left whitespace-nowrap">{{ +credit + +dobindaTotal}}</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
<style>
    .grafic-table {
        max-height: 400px;
    }
</style>