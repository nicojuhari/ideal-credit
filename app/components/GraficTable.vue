<script setup>
    
    defineProps(['grafic', 'dobindaTotal', 'credit'])

</script>
<template>
    <div class="overflow-auto border border-orange-black-light">
        <table class="table-fixed min-w-full text-sm divide-y divide-orange-black-light  grafic-table overflow-y-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2 font-bold text-left whitespace-nowrap w-28">Nr.</th>
                    <th class="px-4 py-2 font-bold text-left whitespace-nowrap">Data</th>
                    <th class="px-4 py-2 font-bold text-left whitespace-nowrap">Credit</th>
                    <th class="px-4 py-2 font-bold text-left whitespace-nowrap">Dobânda</th>
                    <th class="px-4 py-2 font-bold text-left whitespace-nowrap">Total</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-orange-black-light">
                <tr v-for="(rata, idx) in grafic">
                    <td class="px-4 py-2 font-bold whitespace-nowrap">{{ idx + 1 }}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ new
                        Date(rata.data_rata).toLocaleDateString('ro-RO')}}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ rata.credit_rata}}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ rata.dobinda_rata}}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ rata.dobinda_rata + rata.credit_rata }}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th class="px-4 py-2 font-bold text-left whitespace-nowrap"></th>
                    <th class="px-4 py-2 font-bold text-left whitespace-nowrap">Total</th>
                    <th class="px-4 py-2 font-bold text-left whitespace-nowrap">{{credit}}</th>
                    <th class="px-4 py-2 font-bold text-left whitespace-nowrap">{{dobindaTotal}}</th>
                    <th class="px-4 py-2 font-bold text-left whitespace-nowrap">{{ +credit + +dobindaTotal}}</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>