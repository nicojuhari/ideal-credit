<script setup>
    
    defineProps(['grafic', 'dobindaTotal', 'credit'])

</script>
<template>
    <div class="overflow-auto border border-gray-100 rounded">
        <table class="min-w-full text-sm divide-y divide-gray-200 grafic-table overflow-y-auto">
            <thead>
                <tr class="bg-gray-50">
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Nr.</th>
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Data</th>
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Credit</th>
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Dobinda</th>
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Total</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-100">
                <tr v-for="(rata, idx) in grafic">
                    <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{{ idx + 1 }}</td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{{ new
                        Date(rata.data_rata).toLocaleDateString('ro-RO')}}</td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{{ rata.credit_rata}}</td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{{ rata.dobinda_rata}}</td>
                    <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{{ rata.dobinda_rata + rata.credit_rata }}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr class="bg-gray-50">
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"></th>
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Total</th>
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">{{credit}}</th>
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">{{dobindaTotal}}</th>
                    <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">{{ +credit + +dobindaTotal}}</th>
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