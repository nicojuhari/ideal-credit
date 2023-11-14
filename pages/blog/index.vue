<script setup>
import { ref } from 'vue';

const stories = ref(null);
const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get("cdn/stories", {
    starts_with: "blog",
});

stories.value = data.stories;

useHead({
    title: 'Blog - Create a Restaurant Menu Online | 1FoodMenu',
    meta: [
        { name: 'keywords', content: 'create restaurant menu online, digital food menu, menu design, restaurant website, create food menu' },
        { name: 'description', content: 'Articles on how to use our web tool to create a restaurant menu online for free. In 4 easy steps you can create a great digital food menu for your restaurant, bar or cafe.' }
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
            <h1 class="subtitle text-center my-10">Blog</h1>
            <div class="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <NuxtLink v-for="{ content, full_slug, published_at } in stories" :to="`/${full_slug}`" :key="content.id" :title="content.title"
                    class="group cursor-pointer flex-shrink-0 bg-white text-brand-black rounded-xl overflow-hidden shadow-xl">
                    <div class="rounded-t-xl overflow-hidden">
                            <img :src="content.image.filename" :alt="content.title" 
                                class="w-full object-center object-cover border-0 group-hover:scale-125 duration-300" />
                            </div>
                        <div class="p-6">
                            <div class="font-semibold text-lg line-clamp-2  duration-300 ">
                                {{ content.title }}
                            </div>
                            <div class="flex pt-6 text-sm">
                                {{ new Date(published_at).toLocaleDateString('ro-RO') }}
                            </div>
                        </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>