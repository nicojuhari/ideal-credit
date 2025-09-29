<script setup>
import { ref } from 'vue';

const stories = ref(null);
const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get("cdn/stories", {
    starts_with: "blog",
    version: "published"
});

stories.value = data.stories;

useHead({
    title: 'Blog Financiar - Sfaturi și Strategii | Ideal Credit',
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'keywords', content: 'blog financiar, credite rapide, credite pentru afaceri, împrumuturi' },
        { name: 'description', content: 'Blog financiar cu ghiduri simple despre credite, gestionarea cash-flow-ului și planificare financiară. Informații practice pentru afaceri și persoane fizice' }
    ],
})

useSchemaOrg([
    defineWebPage({
        '@type': 'CollectionPage'
    }),
])

</script>
<template>
    <div class="container my-4 md:my-6">
        <h1 class="title text-center my-10">Blog financiar</h1>
            <BlogCards v-if="stories" :stories="stories" />
            <div v-else class="text-center text-gray-400 py-20">Se încarcă...</div>
    </div>
</template>