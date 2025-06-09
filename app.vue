<template>
  <UApp>
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
import '@/assets/css/main.css';
const config = useRuntimeConfig()

useHead({
  meta: [
    { property: 'og:image', content: 'https://idealcredit.md/ideal-credit-og.webp' },
    { property: 'og:image:alt', content: 'Credite nebancare pentru afaceri și nevoi personale' },
  ],
})

useSchemaOrg([
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ideal Credit",
    "url": "https://idealcredit.md/"
  },
   {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ideal Credit",
            "legalName": "Organizația de Creditare Nebancară \"Ideal Credit\" SRL",
            "url": "https://idealcredit.md/",
            "logo": "https://idealcredit.md/ideal-credit-logo.svg",
            "description": config.public.description,
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+37378805060",
                    "contactType": "customer service",
                    "email": "contact@idealcredit.md",
                    "areaServed": "MD",
                    "availableLanguage": "ro"
                },
                {
                    "@type": "ContactPoint",
                    "telephone": "+37379066566",
                    "contactType": "admin",
                    "email": "info@idealcredit.md",
                    "areaServed": "MD",
                    "availableLanguage": "ro"
                }
            ],
            "sameAs": [
                "https://www.facebook.com/idealcredit",
                "https://www.instagram.com/idealcredit",
                "https://www.linkedin.com/company/idealcredit",
                "https://www.youtube.com/@idealcredit"
            ],
            "aggregateRating": { // This is the general rating for the entire organization
                "@type": "AggregateRating",
                "ratingValue": "4.9", // Or an overall average you prefer
                "reviewCount": "23",
                // IMPORTANT: Replace "xxx-xxx" with the TOTAL number of reviews across all platforms
                // that contribute to this overall rating.
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "Ideal Credit"
                }
              }
        },
        
])

</script>
