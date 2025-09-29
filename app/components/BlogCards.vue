<script setup lang="ts">
interface Story {
    content: {
        id: string | number
        image: {
            filename: string
        }
    }
    full_slug: string
    name: string
}

const props = defineProps<{
    stories: Story[]
}>()
</script>
<template>
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
</template>