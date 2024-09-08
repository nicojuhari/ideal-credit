<script setup>
const list = [
    {
        title: 'Sucursala Nr. 1',
        address: 'm. Chișinău',
        addressNumbers: 'str. Miron Costin nr. 25,  of. 115',
        mobile: ['+37378805060', '078 80 50 60'],
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.5126752925935!2d28.866588177004928!3d47.049792671144246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97cfa93379893%3A0x6b21737dc3080047!2sIdeal%20Credit%20Chi%C8%99in%C4%83u!5e0!3m2!1sen!2sat!4v1708098130151!5m2!1sen!2sat'
    },
    {
        title: 'Sediul principal',
        address: 'or. Căușeni',
        addressNumbers: 'str. M.Eminescu nr. 17,  of. 47',
        mobile: ['+37379066566', '0790 66 5 66'],
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1070.8698170211678!2d29.40806812052061!3d46.641495352200025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9ace138f629b3%3A0xac0504d023064a9d!2sIdeal%20Credit%20C%C4%83u%C8%99eni!5e0!3m2!1sen!2sat!4v1708097806741!5m2!1sen!2sat'
    },
]
</script>
<template>
    <div class="grid grid-cols-1 gap-10">
        <div v-for="item in list">
            <div class="text-lg">{{ item.address }}</div>
            <div class="text-lg">{{ item.addressNumbers }}</div>
            <div class="text-sm italic">( {{ item.title }} )</div>
            <iframe :src="item.map" width="100%" height="450" class="mt-4" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>