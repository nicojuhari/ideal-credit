<template>
  <div class="flex flex-col min-h-screen">
    <IncludesHeader />
    <main class="flex-auto py-12">
      <NuxtPage />
    </main>
    <IncludesFooter class="mt-auto"/>
  </div>
</template>
<script setup>

// const nuxtApp = useNuxtApp()

// nuxtApp.hook("page:finish", () => {
//   window.scrollTo(0, 0)
// })

  //or create a plugin
  //https://github.com/nuxt/framework/discussions/1661
</script>