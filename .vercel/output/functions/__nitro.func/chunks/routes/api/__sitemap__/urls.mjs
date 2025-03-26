import { d as defineSitemapEventHandler, a as asSitemapUrl } from '../../../nitro/nitro.mjs';
import StoryblokClient from 'storyblok-js-client';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import '@iconify/utils';

const urls = defineSitemapEventHandler(async () => {
  try {
    const Storyblok = new StoryblokClient({
      accessToken: "HkdYYsU6W0SQKNL9nL1seQtt"
    });
    const links = await Storyblok.getAll("cdn/links", {
      version: "published",
      starts_with: "blog/",
      cv: Math.floor(Date.now() / 1e3)
    });
    return [
      // map URLS as needed
      ...links.map((p) => asSitemapUrl({
        loc: p.slug
      }))
    ];
  } catch (error) {
    console.error(error);
    return [];
  }
});

export { urls as default };
//# sourceMappingURL=urls.mjs.map
