<script setup>
    let reviews = [
        {
            name: 'Gheorghe',
            review: 'Au fost foarte rapizi și mi-au aprobat creditul în doar câteva zile. Mulțumesc, Ideal Credit!'
        },
        {
            name: 'Maria',
            review: 'Am găsit la Ideal Credit exact creditul de care aveam nevoie. Recomand!'
        },
        {
            name: 'Vasile',
            review: 'Mi-au explicat totul foarte clar, fără niciun fel de termeni financiari complicați.'
        },
        {
            name: 'Ion',
            review: 'Dacă ai nevoie de un credit în Moldova, îți recomand cu încredere Ideal Credit. Eu am fost foarte mulțumit de experiență'
        },
    ]

    let timer = null;
    let sliderIndex = ref(0);

    // onMounted(() => {
    //     timer = setInterval(() => {
    //         sliderIndex.value = (sliderIndex.value + 1) % reviews.length;
    //     }, 3600);
    // });

    // onUnmounted(() => {
    //     clearInterval(timer)
    // });
</script>
<template>
    <div class="md:max-w-[410px] md:h-14 bg-brand-black px-6 py-4 rounded-lg inline-flex flex-col items-center md:flex-row gap-4">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-xl mr-1">4.9</span>
            <Icon name="i-ph-star-fill" class="w-5 h-5 text-brand-color" />
            <Icon name="i-ph-star-fill" class="w-5 h-5 text-brand-color" />
            <Icon name="i-ph-star-fill" class="w-5 h-5 text-brand-color" />
            <Icon name="i-ph-star-fill" class="w-5 h-5 text-brand-color" />
            <Icon name="i-ph-star-fill" class="w-5 h-5 text-brand-color" />
        </div>
        <div class="text-gray-200 text-sm">Sute de clienți mulțumiți!</div>
    </div>
</template>


