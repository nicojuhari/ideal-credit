<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const story = await useStoryblok('blog/' + route.params.slug);

const htmlText = computed(() => {
    return useStoryblokApi().richTextResolver.render(story.value.content.content)
})

function truncateString(str, num) {
    str = str.replace(/<[^>]*>?/gm, '');
    str = str.replace(/\./gm, '. ');
    if (str.length > num) {
        return str.slice(0, num) + " ...";
    } else {
        return str;
    }
}

useHead({
    title: story?.value.content.title,
    titleTemplate: '%pageTitle',
    meta: [
        { name: 'keywords', content: 'credite rapide, împrumuturi, articole financiare, credite pentru afaceri' },
        { name: 'description', content: truncateString(htmlText.value, 150) },
        { property: 'og:url', content: `https://idealcredit.md${route.fullPath}` },
        { property: 'og:type', content: `blogpost` },
        { property: 'og:image', content: `${story?.value.content.image.filename}` },
        { property: 'og:title', content: `${story?.value.content.title}` },
        { property: 'og:description', content: truncateString(htmlText.value, 150) },
    ],
})

useSchemaOrg([
    defineArticle({
        // name and description can usually be inferred
        '@type': 'BlogPosting',
        headline: story?.value.content.title,
        description: truncateString(htmlText.value, 150),
        image: story?.value.content.image.filename,
        datePublished: story?.value.created_at,
        dateModified: story?.value.published_at,
    })
])

</script>

<template>
    <section class="py-5 md:py-10 blog-page">
        <div class="container sm-container card light" v-if="story">
            <h1 class="text-3xl mb-6 font-extrabold">{{ story?.content?.title }}</h1>
            <div>
                <img :src="story.content?.image?.filename" :alt="story.content.title"
                    class="w-full bg-slate-100 object-center object-cover border-0 rounded aspect-video" />
            </div>
            <div class="mt-6">
                <div class="richtext text-lg" v-html="htmlText">
                </div>
            </div>
        </div>
    </section>
</template>