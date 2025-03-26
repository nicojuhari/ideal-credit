import { withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { n as useRoute, o as mt, l as gt, k as useHead, m as useSchemaOrg } from './server.mjs';
import { defineArticle } from '@unhead/schema-org/vue';
import '../nitro/nitro.mjs';
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
import '@iconify/utils';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import '@unhead/addons';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/observer';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/inputs';
import '@formkit/dev';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const story = ([__temp, __restore] = withAsyncContext(() => mt("blog/" + route.params.slug)), __temp = await __temp, __restore(), __temp);
    const htmlText = computed(() => {
      return gt().richTextResolver.render(story.value.content.content);
    });
    useHead({
      title: story == null ? void 0 : story.value.name,
      titleTemplate: "%pageTitle",
      meta: [
        { name: "keywords", content: "credite rapide, împrumuturi, articole financiare, credite pentru afaceri" },
        { name: "description", content: story == null ? void 0 : story.value.content.meta_description },
        { name: "robots", content: "index, follow" },
        { property: "og:locale", content: "ro_RO" },
        { property: "og:site_name", content: "Ideal Credit" },
        { property: "og:url", content: `https://idealcredit.md${route.fullPath}` },
        { property: "og:type", content: `blogpost` },
        { property: "og:image", content: story == null ? void 0 : story.value.content.image.filename },
        { property: "og:image:alt", content: story == null ? void 0 : story.value.name },
        { property: "og:title", content: story == null ? void 0 : story.value.name },
        { property: "og:description", content: story == null ? void 0 : story.value.content.meta_description }
      ]
    });
    useSchemaOrg([
      defineArticle({
        // name and description can usually be inferred
        "@type": "BlogPosting",
        headline: story == null ? void 0 : story.value.name,
        description: story == null ? void 0 : story.value.content.meta_description,
        image: story == null ? void 0 : story.value.content.image.filename,
        datePublished: story == null ? void 0 : story.value.created_at,
        dateModified: story == null ? void 0 : story.value.published_at
      })
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-5 md:py-10 blog-page" }, _attrs))}>`);
      if (unref(story)) {
        _push(`<div class="container sm-container card light"><h1 class="text-3xl mb-6 font-bold">${ssrInterpolate((_a = unref(story)) == null ? void 0 : _a.name)}</h1><div><img${ssrRenderAttr("src", (_c = (_b = unref(story).content) == null ? void 0 : _b.image) == null ? void 0 : _c.filename)}${ssrRenderAttr("alt", unref(story).content.image.alt | unref(story).name)} class="w-full bg-slate-100 object-center object-cover border-0 rounded aspect-video"></div><div class="mt-6"><div class="richtext text-lg">${unref(htmlText) ?? ""}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_.vue.mjs.map
