<script setup>
const list2 = [
  {
    "question": "Care este suma maximă pe care o pot obține?",
    "answer": "Evaluăm individual: în funcție de venituri, cheltuieli, istoric de credit și garanții propuse."
  },
  {
    "question": "Dobânda este fixă sau flotantă?",
    "answer": "Dobânda este fixă pe toată durata contractului și negociabilă la aplicare."
  },
  {
    "question": "Există comisioane ascunse?",
    "answer": "Nu. Toate costurile sunt afișate transparent înainte de semnarea contractului."
  },
  {
    "question": "Pot plăti creditul anticipat? Are costuri?",
    "answer": "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru perioada utilizată."
  },
  {
    "question": "Pot obține credit doar cu buletinul, fără gaj?",
    "answer": "Da, în anumite cazuri. Dacă ai venit stabil și istoric de plată bun, poți obține credit fără garanții. Pentru sume mai mari, cerem garanții sau fidejusiune."
  },
  {
    "question": "Pot refinanța sau lua un nou credit dacă am deja unul?", 
    "answer": "Da. Evaluăm refinanțarea sau un nou credit în funcție de capacitatea ta de rambursare și istoricul curent."
  },
  {
    "question": "Ce tipuri de garanții acceptați?",
    "answer": "Acceptăm garanții imobiliare (locuință, teren) sau garanții personale (fidejusiune). Alternativele depind de mărimea finanțării și de analiza noastră."
  },
  {
    "question": "Ce se întâmplă dacă întârzii o rată?",
    "answer": "Se aplică o penalizare zilnică, care este clar precizată în contract."
  },
  {
    "question": "Pot restructura creditul dacă apar probleme?",
    "answer": "Da, contactează-ne din timp ca să găsim împreună cea mai bună soluție."
  },
  {
    "question": "Cât timp durează aprobarea?",
    "answer": "În general, răspundem în 1-3 ore pentru cererile complete. Timpul poate varia în funcție de complexitate și documentație."
  }
]

 useSchemaOrg([
    {
        '@type': 'FAQPage',
        mainEntity: list2.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    }
 ])
</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div v-for="item in list2" class="card">
            <div class="text-xl mb-4">{{ item.question }}</div>
            <div class="text-gray-400">{{ item.answer }}</div>
        </div>
    </div>
</template>