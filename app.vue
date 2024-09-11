<template>
  <div class="flex flex-col min-h-screen">
    <IncludesHeader />
    <!-- <SeoKit /> -->
    <!-- <OgImageScreenshot alt="Ideal Credit - Credite rapide"/> -->
    <main class="flex-auto">
      <NuxtPage />
    </main>
    <IncludesFooter class="mt-auto"/>
  </div>
</template>
<script setup>

useHead({
  meta: [
    { property: 'og:image', content: 'https://idealcredit.md/ideal-credit-og.webp' },
    { property: 'og:image:alt', content: 'Credite rapide de la Ideal Credit' },
  ],
})
</script>