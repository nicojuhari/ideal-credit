<script setup>
    useHead({
        title: 'Despre compania de creditare Ideal Credit SRL',
        meta: [
            { name: 'description', content: 'OCN Ideal Credit oferă credite rapide pentru nevoi personale și afaceri pe piața financiară al Republica Moldova din 2010' },
            { name: 'keywords', content: 'ideal credit, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi' }
        ],
    })
</script>
<template>
    <div class="my-4 md:my-6">
        <div class="container sm-container">
            <div class="card light">
                <div class="mb-20">
                    <h1 class="text-center text-5xl font-bold">Despre noi</h1>
                </div>
                <div class="text-lg">
                    <p>Organizația de Creditare Nebancară Ideal Credit SRL
                        activează cu success pe piața financiară nebancară al Republicii Moldova din 2010.
                    </p>
                    <p>În acest timp compania a reușit să înregistreze o dezvoltare continuă,
                        oferind clienților săi suport financiar și consultanță profesională în
                        vederea soluționării problemelor acestora.</p>

                    <p>Credem în performanța pe care oamenii sînt capabili să o atingă.
                        Acesta este motorul activității noastre, drept dovadă fiind abordarea
                        individuală a fiecarui client în parte și oferirea serviciilor simple și accesibile.</p>

                    <p>Activitatea O.C.N. Ideal Credit SRL este bazată pe o profundă analiză financiară astfel încît
                        să ne asumăm riscuri calculate dar în acelaș timp să rămînem flexibili pentru clienții noștri.
                        Aceatsa este garanția stabilității companiei și profesionalizmului colegilor noștri.</p>

                    <p>Compania Ideal Credit vă ofera credite timp de 1 oră, doar cu buletinul și fără gaj,
                        suma împrumuturilor încep de la 1000 lei pînă la 300 000 lei.</p>
                </div>
            </div>
        </div>
        <div class="container sm-container mt-4 md:mt-6">
            <RegulamenteList/>
        </div>
        <div class="container sm-container mt-4 md:mt-6">
            <CallToAction class="card light"/>
        </div>
    </div>
</template>