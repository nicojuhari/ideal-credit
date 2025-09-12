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
    title: 'Blog - Finanțe personale și business în Moldova | Ideal Credit',
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
            <div class="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <NuxtLink v-for="{ content, full_slug, name } in stories" :to="`/${full_slug}`" :key="content.id" :title="name"
                    class="group cursor-pointer flex-shrink-0 bg-black-500 border rounded-xl overflow-hidden shadow-xl">
                    <div class="rounded-t-xl overflow-hidden">
                            <img :src="content.image.filename" :alt="name" 
                                class="w-full object-center object-cover border-0 group-hover:scale-125 duration-300" />
                            </div>
                        <div class="p-6">
                            <div class="font-bold line-clamp-2 duration-300 ">
                                {{ name }}
                            </div>
                        </div>
                </NuxtLink>
            </div>
    </div>
</template>