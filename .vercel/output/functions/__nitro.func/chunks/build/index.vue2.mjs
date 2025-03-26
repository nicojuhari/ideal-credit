import { l as gt, k as useHead, m as useSchemaOrg, a as __nuxt_component_1 } from './server.mjs';
import { ref, withAsyncContext, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { defineWebPage } from '@unhead/schema-org/vue';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const stories = ref(null);
    const storyblokApi = gt();
    const { data } = ([__temp, __restore] = withAsyncContext(() => storyblokApi.get("cdn/stories", {
      starts_with: "blog"
    })), __temp = await __temp, __restore(), __temp);
    stories.value = data.stories;
    useHead({
      title: "Blog financiar",
      meta: [
        { name: "keywords", content: "blog financiar, credite rapide, credite pentru afaceri, împrumuturi" },
        { name: "description", content: "Descoperă lumea creditelor cu Ideal Credit! Explorăm totul în mod clar și educativ. Ia decizii financiare înțelepte pentru un viitor mai sigur!" }
      ]
    });
    useSchemaOrg([
      defineWebPage({
        "@type": "CollectionPage"
      })
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 py-10 md:py-20" }, _attrs))}><div class="container"><h1 class="subtitle text-center my-10">Blog</h1><div class="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"><!--[-->`);
      ssrRenderList(stories.value, ({ content, full_slug, published_at }) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${full_slug}`,
          key: content.id,
          title: content.title,
          class: "group cursor-pointer flex-shrink-0 bg-white text-orange-black rounded-xl overflow-hidden shadow-xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="rounded-t-xl overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", content.image.filename)}${ssrRenderAttr("alt", content.title)} class="w-full object-center object-cover border-0 group-hover:scale-125 duration-300"${_scopeId}></div><div class="p-6"${_scopeId}><div class="font-bold text-lg line-clamp-2 duration-300"${_scopeId}>${ssrInterpolate(content.title)}</div><div class="flex pt-6 text-sm"${_scopeId}>${ssrInterpolate(new Date(published_at).toLocaleDateString("ro-RO"))}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "rounded-t-xl overflow-hidden" }, [
                  createVNode("img", {
                    src: content.image.filename,
                    alt: content.title,
                    class: "w-full object-center object-cover border-0 group-hover:scale-125 duration-300"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("div", { class: "font-bold text-lg line-clamp-2 duration-300" }, toDisplayString(content.title), 1),
                  createVNode("div", { class: "flex pt-6 text-sm" }, toDisplayString(new Date(published_at).toLocaleDateString("ro-RO")), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
