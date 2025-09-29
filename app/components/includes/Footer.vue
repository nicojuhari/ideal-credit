<script setup>
    const { trackEvent } = useFacebookPixel()
    
    const oficii = [
        {   
            id: 1,
            title: 'Sediul principal',
            address: 'or. Căușeni, str. Mihai Eminescu',
            addressNumbers: 'nr. 17,  of. 47',
            mobile: ['+37379066566', '0790 66 5 66'],
        },
        {   
            id: 2,
            title: 'Sucursala Nr. 1',
            address: 'm. Chișinău, str. Miron Costin',
            addressNumbers: 'nr. 25,  of. 115',
            mobile: ['+37378805060', '078 80 50 60'],
        }
    ]

    const clickContact = ref(false)

    watch(clickContact, (val) => {
        if(val) {
            trackEvent('Contact');
        }
    }, { once: true })


    const list = [
        {
            name: 'Credit',
            desc: 'Operațiune prin care o persoană fizică sau juridică primește o sumă de bani cu obligația de rambursare, de obicei cu dobândă, într-un termen stabilit.'
        },
        {
            name: 'Dobândă',
            desc: 'Costul utilizării banilor împrumutați, exprimat procentual din suma principală.'
        },
        {
            name: 'DAE (Dobânda Anuală Efectivă)',
            desc: 'Indicator care reflectă costul total al creditului pentru consumator: dobânda anuală plus toate comisioanele și taxele aferente.'
        },
        {
            name: 'Contract de Credit',
            desc: 'Acord legal între creditor și debitor prin care se stabilesc suma împrumutată, dobânda, comisioanele, graficul de rambursare și alte condiții.'
        },
        {
            name: 'Creditor',
            desc: 'Entitate (instituție financiară sau persoană) care acordă împrumuturi în scop comercial sau profesional.'
        },
        {
            name: 'Debitor',
            desc: 'Persoană fizică sau juridică care are obligația de a rambursa creditul și costurile asociate.'
        },
        {
            name: 'Consumator',
            desc: 'Persoană fizică care utilizează produse sau servicii pentru necesități personale, nelegate de activitatea profesională.'
        },
        {
            name: 'Bonitatea',
            desc: 'Capacitatea consumatorului de a rambursa creditul la scadență, incluzând dobânda și costurile totale.'
        },
        {
            name: 'Valoarea Totală a Creditului',
            desc: 'Suma efectiv pusă la dispoziție de creditor conform contractului.'
        },
        {
            name: 'Costul Total al Creditului',
            desc: 'Suma pe care debitorul o plătește în total: principal + dobândă + comisioane + taxe.'
        },
        {
            name: 'Garanție (gaj, ipotecă)',
            desc: 'Bunuri sau drepturi puse în securitate de către debitor pentru garantarea rambursării creditului.'
        },
        {
            name: 'Penalitate',
            desc: 'Sumă suplimentară datorată pentru întârzierea plății ratelor sau nerespectarea clauzelor contractuale.'
        },
        {
            name: 'Perioadă de grație',
            desc: 'Interval în care o nu se achită una sau mai multe rate de credit și/sau dobândă. Se reflectă în graficul de rambursare al contractului de credit.'
        },
        {
            name: 'Cesiune',
            desc: 'Transferul drepturilor și obligațiilor rezultate din contractul de credit către o terță parte (cesionar).'
        },
        {
            name: 'BIC (Biroul Istoriilor de Credit)',
            desc: 'Instituție care colectează și stochează date despre istoricul de credit al persoanelor fizice sau juridice.'
        }
    ]



    




</script>
<template>
    <footer class="bg-black-600 border-t relative py-10">
        <div class="container flex flex-col md:flex-row justify-between md:items-center gap-8 pb-8 border-b">
            <div class="space-y-4">
                <div class="flex items-center gap-3">
                    <IconsLogo class="w-8" />
                    <div class="text-xl">Ideal Credit</div>
                </div>
                <p class="text-gray-400">Credite nebancare în Moldova<br> pentru afaceri și persoane fizice.</p>
            </div>
            <div class="flex gap-6 items-center">
                <NuxtLink to="https://www.instagram.com/idealcredit.md/" title="Pagina Ideal Credit pe Instagram" target="_blank">
                    <UIcon name="i-ph-instagram-logo" class="w-8 h-8 shrink-0" />
                </NuxtLink>
                <NuxtLink to="https://www.facebook.com/idealcredit.md" title="Pagina Ideal Credit pe Facebook" target="_blank">
                    <UIcon name="i-ph-facebook-logo" class="w-8 h-8 shrink-0" />
                </NuxtLink>
                <NuxtLink to="https://www.linkedin.com/company/idealcredit/" title="Pagina Ideal Credit pe Linkedin" target="_blank">
                    <UIcon name="i-ph-linkedin-logo" class="w-8 h-8 shrink-0" />
                </NuxtLink>
            </div>
        </div>
        <div class="container py-8 grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 border-b">
           <div v-for="oficiu in oficii" :key="oficiu.address" class="space-y-4">
                <p class="text-xl font-bold"> {{ oficiu.title }}</p>
                <p class="text-gray-300">{{ oficiu.address }}, <br>{{ oficiu.addressNumbers }}</p>
                <p class="text-gray-300">Luni - Vineri: 08:30 - 16:30</p>
                
                <UButton icon="i-ph-phone-light" :to="'tel:' + oficiu.mobile[0]" @click="clickContact = true" variant="outline">
                    {{ oficiu.mobile[1] }}
                </UButton>
            </div>
            <div class="gap-y-4 flex flex-col">
                <p class="text-xl font-bold">Linkuri</p>
                <NuxtLink to="/terms" title="Termeni și Condiții" class="inline-flex">Termeni</NuxtLink>
                <NuxtLink to="/cookies" title="Politica de Cookies" class="inline-flex">Cookies</NuxtLink>
                <NuxtLink to="/privacy" title="Politica de Confidențialitate" class="inline-flex">Confidențialitate</NuxtLink>
                <NuxtLink to="/autoritatea-de-supraveghere" rel="nofollow" title="Autoritatea de Supraveghere" class="link">Autoritatea de Supraveghere</NuxtLink>
            </div>
        </div>
        <div class="container mt-12">
            <p class="mb-6 text-xl text-center">Extras din lege</p>
            <p class="mb-4 pl-6">În Legea nr. 202/2013 privind contractele de credit pentru consumatori, au fost impuse
                limite cu privire la:</p>
            <ul class="list-outside list-disc ml-6 space-y-1.5 text-gray-400">
                <li>Rata maximală a dobânzii anuale specificate în contractul de credit să nu fie mai mare de 50%.</li>
                <li>Toate celelalte plăți aferente (comisioane, taxe, penalități, dobânzi de întârziere și orice alt tip
                    de plată), cu excepția dobânzii, să nu depășească 0,04% /zi din valoarea totală a creditului pentru
                    termenul de utilizare efectivă a creditului.</li>
                <li>Costului total al creditului (care include dobânzi, comisioane, taxe, penalități, dobânzi de
                    întârziere și orice alt tip de plată) să nu fie mai mare decât valoarea debursată conform
                    contractului (cu excepția contractelor ipotecare).</li>
            </ul>
        </div>
        <div class="container mt-12">
            <p class="mb-6 text-xl text-center">Dicționar financiar</p>
            <ul class="list-outside list-disc ml-6 space-y-2.5 text-gray-400">
                <li v-for="item in list" :key="item.name"><span class="font-bold">{{ item.name }} - </span>{{ item.desc }}</li>
                
            </ul>
        </div>
        <div class="container mt-10 px-6 text-center pt-8 gap-1 flex-wrap border-t">
            &copy; {{ new Date().getFullYear() }} Organizația de Creditare Nebancară <strong>Ideal Credit</strong> SRL
        </div>
    </footer>
</template>