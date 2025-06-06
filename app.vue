<template>
  <UApp :locale="ro">
    <div class="flex flex-col min-h-screen">
      <IncludesHeader />
      <main class="flex-auto">
        <NuxtPage />
      </main>
      <LazyIncludesFooter class="mt-auto"/>
    </div>
  </UApp>
</template>
<script setup>  
import { ro } from '@nuxt/ui/locale'

useHead({
  meta: [
    { property: 'og:image', content: 'https://idealcredit.md/ideal-credit-og.webp' },
    { property: 'og:image:alt', content: 'Credite nebancare pentru afaceri și nevoi personale' },
  ],
})

import '@/assets/css/main.css';

</script>
