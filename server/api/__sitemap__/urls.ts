//fetch the urls from storyblok for sitemap
// export default async function fetchStoryblokUrls() {
//     const { $storyapi } = require('@nuxtjs/storyblok')
//     const { data } = await $storyapi.get('cdn/links', {
//         version: 'draft'
//     })
//     return data.links.map(link => link.slug)
// }
//
import StoryblokClient from 'storyblok-js-client';

import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
  // fetch data directly in the correct type
    try {
        const Storyblok = new StoryblokClient({
            accessToken: 'HkdYYsU6W0SQKNL9nL1seQtt',
        });
        const links = await Storyblok.getAll('cdn/links', {
            version: 'published',
            starts_with: 'blog/',
            cv: Math.floor(Date.now() / 1e3),
        });

        return [
            // map URLS as needed
            ...links.map((p: { slug: any }) => asSitemapUrl({
            loc: p.slug,    
            }))
        ]
    } catch (error) {
        console.error(error);
        return [];
    }
    
})



// export default async (req, res) => {
//   try {
    
//     res.status(200).json(data.stories);
//   } catch (error) {
//     res.status(500).json({ error: 'Unable to fetch data from Storyblok' });
//   }
// };
