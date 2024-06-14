<script setup>
const route = useRoute();

const story = await useStoryblok('blog/' + route.params.slug);

const htmlText = computed(() => {
    return useStoryblokApi().richTextResolver.render(story.value.content.content)
})

useHead({
    title: story?.value.name,
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'keywords', content: 'credite rapide, împrumuturi, articole financiare, credite pentru afaceri' },
        { name: 'description', content: story?.value.content.meta_description },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:locale', content: 'ro_RO' },
        { property: 'og:site_name', content: 'Ideal Credit' },
        { property: 'og:url', content: `https://idealcredit.md${route.fullPath}` },
        { property: 'og:type', content: `blogpost` },
        { property: 'og:image', content: story?.value.content.image.filename },
        { property: 'og:title', content: story?.value.name },
        { property: 'og:description', content: story?.value.content.meta_description },
    ],
})

useSchemaOrg([
    defineArticle({
        // name and description can usually be inferred
        '@type': 'BlogPosting',
        headline: story?.value.name,
        description: story?.value.content.meta_description,
        image: story?.value.content.image.filename,
        datePublished: story?.value.created_at,
        dateModified: story?.value.published_at,
    })
])

</script>

<template>
    <section class="py-5 md:py-10 blog-page">
        <div class="container sm-container card light" v-if="story">
            <h1 class="text-3xl mb-6 font-bold">{{ story?.name }}</h1>
            <div>
                <img :src="story.content?.image?.filename" :alt="story.content.image.alt | story.name"
                    class="w-full bg-slate-100 object-center object-cover border-0 rounded aspect-video" />
            </div>
            <div class="mt-6">
                <div class="richtext text-lg" v-html="htmlText">
                </div>
            </div>
        </div>
    </section>
</template>