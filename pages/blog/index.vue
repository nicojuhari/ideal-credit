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
    title: 'Blog financiar',
    meta: [
        { name: 'keywords', content: 'blog financiar, credite rapide, credite pentru afaceri, împrumuturi' },
        { name: 'description', content: 'Descoperă lumea creditelor cu Ideal Credit! Explorăm totul în mod clar și educativ. Ia decizii financiare înțelepte pentru un viitor mai sigur!' }
    ],
})

useSchemaOrg([
    defineWebPage({
        '@type': 'CollectionPage'
    }),
])

</script>
<template>
    <section class="px-4 py-10 md:py-20">
        <div class="container">
            <h1 class="title text-center my-10">Blog financiar</h1>
            <div class="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <NuxtLink v-for="{ content, full_slug, name } in stories" :to="`/${full_slug}`" :key="content.id" :title="name"
                    class="group cursor-pointer flex-shrink-0 bg-black-100 rounded-xl overflow-hidden shadow-xl">
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
    </section>
</template>