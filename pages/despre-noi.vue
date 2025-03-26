<script setup>
    useHead({
        title: 'Despre Ideal Credit: Credite avantajoase și servicii personalizate',
        titleTemplate: '%pageTitle',
        meta: [
            { name: 'description', content: 'Ideal Credit este o organizație de creditare nebancară ce oferă credite cu dobânzi avantajoase și fără comisioane pentru nevoi personale și afaceri.' },
            { name: 'keywords', content: 'ideal credit, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
        ],
    })
</script>
<template>
    <div class="my-4 md:my-6">
        <div class="container sm-container">
            <div class="card light">
                <h1 class="page-title">Despre noi</h1>
                <div class="text-lg">
                    <p>Partenerul dumneavoastră de încredere în finanțare din Moldova.</p>
                    <p><strong>Ideal Credit SRL</strong> este o organizație de creditare nebancară de top, care activează cu succes pe piața financiară a Republicii Moldova din 2010. În cei peste 13 ani de activitate, ne-am consolidat poziția ca un partener de încredere pentru mii de clienți, oferind soluții financiare inovatoare și accesibile.</p>
                    <h2 class="mb-2">Misiunea noastră</h2>
                    <p>
                        Ne dedicăm să sprijinim creșterea economică a Moldovei prin oferirea de acces la finanțare pentru persoane fizice și întreprinderi mici și mijlocii. Credem în potențialul fiecărui client și ne străduim să oferim servicii personalizate care să răspundă nevoilor lor unice.
                    </p>
                    <h2 class="mb-2">Ce ne diferențiază</h2>
                    <ul class="list-disc list-inside">
                        <li>
                            <strong>Expertiză locală:</strong> Înțelegem în profunzime piața financiară din Moldova și provocările cu care se confruntă clienții noștri.
                        </li>
                        <li>
                            <strong>Produse diverse:</strong> Oferim o gamă largă de împrumuturi, de la credite de consum până la finanțări pentru afaceri și agricultură.
                        </li>
                        <li>
                            <strong>Proces simplificat:</strong> Aplicare rapidă și aprobare accelerată, cu documentație minimă.
                        </li>
                        <li>
                            <strong>Transparență totală:</strong> Fără comisioane ascunse, cu toate costurile prezentate clar de la început.
                        </li>
                        <li>
                            <strong>Consultanță profesională:</strong> Echipa noastră de experți vă ghidează în alegerea celei mai potrivite soluții financiare.
                        </li>
                    </ul>
                    <h2 class="mb-2 mt-6">Produsele noastre principale</h2>
                    <ul class="list-disc list-inside">
                        <li><NuxtLink to="/credit-pentru-nevoi-personale" title="credit pentru nevoi personale">Credite pentru nevoi personale</NuxtLink></li>
                        <li><NuxtLink to="/credit-pentru-afaceri" title="împrumuturi pentru afaceri">Împrumuturi pentru afaceri</NuxtLink></li>
                        <li>Credite agricole</li>
                        <li>Finanțare pentru echipamente și utilaje</li>
                        <li>Credite pentru procurarea unui autoturism</li>
                        <li>Credite pentru îmbunătățirea locuinței</li>
                    </ul>
                    <h2 class="mt-6 mb-2">Angajamentul nostru față de clienți</h2>
                    <p>La Ideal Credit, punem clientul în centrul tuturor activităților noastre. Ne străduim constant să îmbunătățim serviciile, 
                        să simplificăm procesele și să oferim rate competitive. 
                        Suntem mândri să fim un pilon de sprijin pentru dezvoltarea economică și socială a Moldovei.
                    </p>
                    <h2 class="mt-6 mb-2">Responsabilitate socială</h2>
                    <p>
                        Ne implicăm activ în comunitatea locală prin diverse programe de educație financiară și susținere a antreprenoriatului. Credem că o Moldovă prosperă se construiește prin efortul comun al tuturor actorilor economici.
                    </p>
                    <p>
                        Alegeți Ideal Credit SRL pentru o experiență financiară transparentă, eficientă și adaptată nevoilor dumneavoastră. Suntem aici pentru a transforma visurile în realitate și pentru a sprijini creșterea afacerii dumneavoastră.
                    </p>
                    <p>
                        Contactați-ne astăzi pentru a descoperi cum vă putem ajuta să vă atingeți obiectivele financiare!
                    </p>
                </div>
            </div>
        </div>
        <div class="container sm-container mt-4 md:mt-6">
            <RegulamenteList/>
        </div>
        <div class="container sm-container mt-4 md:mt-6">
            <div class="card">
                <h3 class="text-center title mb-8">Rapoarte</h3>
                <div class="flex flex-col gap-6">
                    <a href="/raport_audit_2023.pdf">1. Raport de Audit 2023</a>
                    <a href="/raport_audit_2022.pdf">2. Raport de Audit 2022</a>
                </div>
            </div>
        </div>
        <div class="container sm-container mt-4 md:mt-6">
            <LazyCallToAction class="card light"/>
        </div>
    </div>
</template>