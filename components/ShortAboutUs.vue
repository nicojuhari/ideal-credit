<script setup>
    const experience = computed(() => {
        return new Date().getFullYear() - 2010
    })

    const list = [
        'Pe piața nebancară din Moldova din 2010.',
        'Condiții clare și costuri transparente.',
        'Mii de credite acordate cu success.',
        'Credite rapide și avantajoase.',
        'Sute de clienți mulțumiți!',
    ]
</script>



<template>
    <section class="container">
        <h2 class="title text-center"> De ce să alegi Ideal Credit?</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
                <div class="text-center mx-auto bg-black-500 border-6 border-black-400 rounded-full max-w-[300px] aspect-square flex flex-col justify-center">
                    <div class="text-brand-500 text-[160px] font-bold leading-none font-stretch-50% -mt-6">
                        {{ experience }}
                    </div>
                    <p class="text-xl">
                        ani de experiență
                    </p>
                </div>
            </div>
            <div class="flex flex-col justify-center">
                <ul class="space-y-6">
                    <li v-for="item in list" :key="item" class="flex gap-2.5 items-center">
                        <UIcon name="i-ph-check" class="w-5 h-5 shrink-0 text-green-500" />
                        <span class="text-xl text-gray-300">{{ item }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>