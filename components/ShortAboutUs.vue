<script setup>
    const experience = computed(() => {
        return new Date().getFullYear() - 2010
    })
</script>
<template>
    <div>
        <h3 class="card-title text-center">De ce să alegi<br class="lg:hidden"> Ideal Credit?</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="flex flex-col items-center text-center">
                <div class="text-brand-500 text-[216px] font-bold leading-none">{{ experience }}</div>
                <p class="text-lg">ani de experiență<br class="hidden lg:block"> pe piața financiară din Republica Moldova.</p>
            </div>
            <div class="text-lg space-y-4">
                <p>Scopul nostru la Ideal Credit SRL este de a oferi soluții financiare accesibile și transparente pentru antreprenori și persoane fizice.</p>
                <p>Am ajutat sute de clienți să-și atingă obiectivele personale și profesionale, cu milioane de lei în credite acordate.</p>
                <p>Alege Ideal Credit pentru un proces simplu și fără surprize!</p>
            </div>
        </div>
    </div>
</template>