<script setup>
const list2 = [
  {
    "question": "Ce tipuri de credite oferiți?",
    "answer": "Credite nebancare rapide pentru nevoi personale (consum) și credit pentru afaceri."
  },
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
    "question": "Pot plăti anticipat fără costuri suplimentare?",
    "answer": "Da, rambursarea anticipată este gratuită. Plătești dobânda doar pentru perioada utilizată."
  },
  {
    "question": "Pot obține credit doar cu buletinul, fără gaj?",
    "answer": "Da, dacă ai venit stabil, istoric de credit bun și ești responsabil financiar."
  },
  {
    "question": "Pot refinanța sau lua un nou credit dacă am deja unul?", 
    "answer": "Da, refinanțăm credite existente în funcție de capacitatea ta de rambursare."
  },
  {
    "question": "Ce garanții pot oferi?",
    "answer": "Garanții imobiliare (locuință, teren) sau garanții personale (fidejusiune)."
  },
  {
    "question": "Ce se întâmplă dacă întârzii o rată?",
    "answer": "Se aplică o penalizare zilnică, care este clar precizată în contract."
  },
  {
    "question": "Pot restructura creditul dacă apar probleme?",
    "answer": "Da, contactează-ne din timp ca să găsim împreună cea mai bună soluție."
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
            <div class="font-bold mb-2">{{ item.question }}</div>
            <div class="text-gray-400">{{ item.answer }}</div>
        </div>
    </div>
</template>