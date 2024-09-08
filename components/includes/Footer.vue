<script setup>
    const oficii = [
        {
            title: 'Sediul principal',
            address: 'or. Căușeni, str. M.Eminescu',
            addressNumbers: 'nr. 17,  of. 47',
            mobile: ['+37379066566', '0790 66 5 66'],
        },
        {
            title: 'Sucursala Nr. 1',
            address: 'm. Chișinău, str. Miron Costin',
            addressNumbers: 'nr. 25,  of. 115',
            mobile: ['+37378805060', '078 80 50 60'],
        }
    ]

    const links = [
        {
            title: 'Blog financiar >>',
            link: '/blog',
        },
    ]
</script>
<template>
    <footer class="bg-brand-bg border-t border-brand-color border-opacity-10 relative">
        <div class="container grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-6 py-8 px-2 md:px-0">
            <div class="space-y-6">
                <div class="flex items-center gap-3">
                    <IconsLogo class="h-10 " />
                    <div class="text-xl">Ideal Credit</div>
                </div>
                <p class="mt-4">Credite pentru nevoi personale și afaceri în Republica Moldova.</p>
                <div>
                    <NuxtLink to="/blog" class="btn btn-secondary btn-outline w-full md:w-auto">Blog</NuxtLink>
                </div>
            </div>
            <div class="md:col-span-2">
                <div class="h-10 text-xl flex items-center">Adresa oficiilor</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div v-for="oficiu in oficii" :key="oficiu.address">
                        <div class="text-gray-400 mb-2">
                            {{ oficiu.title }}
                        </div>
                        <div class="flex gap-4 mb-4 items-center">
                            <div class="h-10 w-10 flex items-center justify-center rounded-full bg-brand-raisin-black">
                                <Icon name="ph:map-pin-light"
                                    class="w-6 h-6 flex-shrink-0 text-brand-color text-opacity-50" />
                            </div>
                            <div>{{ oficiu.address }}<br>{{ oficiu.addressNumbers }}</div>
                        </div>
                        <a :href="'tel:' + oficiu.mobile[0]" class="flex gap-4 items-center">
                            <div class="h-10 w-10 flex items-center justify-center rounded-full bg-brand-raisin-black">
                                <Icon name="ph:phone-light"
                                    class="w-6 h-6 flex-shrink-0 text-brand-color text-opacity-50" />
                            </div>
                            <div>{{ oficiu.mobile[1] }}</div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <div class="container mb-4 mt-10">
            <p class="mb-1 text-xl font-medium text-center">Din lege</p>
            <p class="mb-1">În Legea nr. 202/2013 privind contractele de credit pentru consumatori, au fost impuse
                limite cu privire la:</p>
            <ul class="list-outside list-disc ml-6 space-y-1.5">
                <li>Rata maximală a dobânzii anuale specificate în contractul de credit să nu fie mai mare de 50%.</li>
                <li>Toate celelalte plăți aferente (comisioane, taxe, penalități, dobânzi de întârziere și orice alt tip
                    de plată), cu excepția dobânzii, să nu depășească 0,04% /zi din valoarea totală a creditului pentru
                    termenul de utilizare efectivă a creditului.</li>
                <li>Costului total al creditului (care include dobânzi, comisioane, taxe, penalități, dobânzi de
                    întârziere și orice alt tip de plată) să nu fie mai mare decât valoarea debursată conform
                    contractului (cu excepția contractelor ipotecare).</li>
            </ul>
        </div>
        <div class="container pb-6 mt-10">
            <p class="mb-1 text-xl font-medium text-center">Dicționar financiar</p>
            <ul class="list-outside list-disc ml-6 space-y-1.5">
                <li><span class="font-bold">Credit - </span> este o operațiune financiară prin care o persoană fizică
                    sau juridică primește o sumă de bani de la o altă entitate, cu obligația de a o rambursa, de obicei
                    cu dobândă, într-o perioadă determinată.</li>
                <li><span class="font-bold">Dobânda - </span> este prețul plătit pentru folosirea banilor împrumutați,
                    calculată ca un procentaj din suma principală.</li>
                <li><span class="font-bold">Contract de Credit - </span> reprezintă un acord legal între un creditor
                    (instituție financiară) și un debitor (persoana care împrumută) prin care creditorul pune la
                    dispoziția debitorului o sumă de bani, iar debitorul se obligă să o ramburseze în rate, împreună cu
                    dobânda și alte costuri stabilite, într-o anumită perioadă de timp.</li>
                <li><span class="font-bold">Creditor - </span>este o persoană fizică sau juridică care oferă o sumă de
                    bani sau bunuri unei alte persoane (debitor), cu obligația rambursării acestora.</li>
                <li><span class="font-bold">Debitor - </span> este o persoana fizică sau juridică care are o obligație
                    financiară către o altă parte(creditor), și care trebuie să ramburseze o sumă de bani, o creanță sau
                    o prestație.</li>
                <li><span class="font-bold">Costul total al creditului - </span> reprezintă suma totală platită de
                    debitor pentru a împrumuta o sumă de bani, incluzând dobanda, comisioanele și alte taxe asociate.
                </li>
                <li><span class="font-bold">Penalitate - </span> este o sancțiune financiară aplicată debitorului care
                    întârzie la plata ratelor lunare sau nerespectă alte clauze din contractul de credit.</li>
                <li><span class="font-bold">Cesiune - </span>reprezintă transferul drepturilor și obligațiilor de
                    împrumut către o altă entitate (cesionar).</li>
            </ul>
        </div>

        <div class="container my-6 text-center">
            <NuxtLink to="/autoritatea-de-supraveghere" rel="nofollow" title="Autoritatea de Supraveghere"
                class="text-brand-color text-sm underline">Autoritatea de Supraveghere și metodele de reclamații
            </NuxtLink>
        </div>
        <div class="container mt-6">
            <div class="divider"></div>
            <div class="text-center py-6 gap-1 flex-wrap">
                &copy; {{ new Date().getFullYear() }} - Organizația de Creditare Nebancară <strong
                    class="font-medium">"Ideal
                    Credit"</strong> SRL
            </div>
        </div>
    </footer>
</template>