<script setup>
    useHead({
        title: 'Despre noi',
        meta: [
            { name: 'description', content: 'Ideal Credit este o organizație de creditare nebancară ce oferă credite cu dobânzi avantajoase și fără comisioane ascunse pentru nevoi personale și afaceri.' },
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
                   
                    <p>Suntem o companie de finanțare și suntem aici pentru a vă ajuta să vă îndepliniți obiectivele financiare.</p>
                    <p><strong>Organizația de Creditare Nebancară Ideal Credit SRL</strong>
                            activează cu success pe piața financiară nebancară al Republicii Moldova din <b>2010</b></p>
                    <p>În acest timp compania a reușit să înregistreze o dezvoltare continuă,
                        oferind clienților săi suport financiar și consultanță profesională în
                        vederea soluționării problemelor acestora.</p>
                    <p>Oferta noastră de împrumuturi este variată și flexibilă, astfel încât să putem satisface nevoile diferite ale clienților noștri.</p>
                    <p>Indiferent dacă aveți nevoie de un împrumut pentru achiziționarea unei proprietăți, pentru a vă consolida 
                        datoriile sau pentru a finanța un proiect personal, suntem pregătiți să vă oferim soluții personalizate, adaptate nevoilor și posibilităților dumneavoastră financiare.</p>
                    <p>În plus, vă oferim transparență și flexibilitate în ceea ce privește costurile împrumutului, astfel încât să puteți lua o decizie informată și să știți exact cât veți plăti în fiecare lună.</p>
                    <p>Suntem dedicați să vă oferim servicii de calitate și să vă ajutăm să vă atingeți obiectivele financiare.</p>
                    

                    <p>Credem în performanța pe care oamenii sînt capabili să o atingă.
                        Acesta este motorul activității noastre, drept dovadă fiind abordarea
                        individuală a fiecarui client în parte și oferirea serviciilor simple și accesibile.</p>
                    
                    <p>Nu ezitați să ne contactați pentru a afla mai multe despre opțiunile de împrumut disponibile sau pentru a discuta despre nevoile dumneavoastră financiare specifice.</p>
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
                    <a href="/raport_audit_2022.pdf">1. Raport de Audit 2022</a>
                </div>
            </div>
        </div>
        <div class="container sm-container mt-4 md:mt-6">
            <CallToAction class="card light"/>
        </div>
    </div>
</template>