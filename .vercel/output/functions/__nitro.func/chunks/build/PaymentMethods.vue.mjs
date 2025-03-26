import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { b as _sfc_main$1 } from './server.mjs';
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
import '@unhead/schema-org/vue';
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

const _imports_0 = publicAssetsURL("/ideal-credit-metode-de-achitare.webp");

const _sfc_main = {
  __name: "PaymentMethods",
  __ssrInlineRender: true,
  setup(__props) {
    const list = [
      {
        title: "Ideal Credit",
        description: 'În unul din <a href="/contacte#adresa-oficiilor" class="underline">oficiile companiei</a>'
      },
      {
        title: "Victoriabank",
        description: "La orice filială a băncii Victoriabank"
      },
      {
        title: "VB24 Web",
        description: "Achitarea creditului online prin aplicația mobilă sau web a băncii Victoriabank"
      },
      {
        title: "Online Banking",
        description: "Transfer bancar sau de pe card pe contul IBAN al companiei Ideal Credit"
      },
      {
        title: "Poșta Moldovei",
        description: "Achitarea creditului la orice oficiu poștal din Republica Moldova"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6 card" }, _attrs))}><h2 class="card-title text-center">Metode de achitare a creditului</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><ul class="list-disc list-inside space-y-8 md:space-y-6"><!--[-->`);
      ssrRenderList(list, (item) => {
        _push(`<li class="flex gap-2 items-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-ph-dot-fill",
          class: "w-5 h-5 text-brand-500/50 shrink-0"
        }, null, _parent));
        _push(`<div><span class="text-xl font-medium">${ssrInterpolate(item.title)}:</span> <span class="text-white/80">${item.description ?? ""}</span></div></li>`);
      });
      _push(`<!--]--></ul><img${ssrRenderAttr("src", _imports_0)} alt="Metode de achitare" class="w-full sm:w-[60%] mx-auto -order-1 lg:order-2 -scale-x-100"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaymentMethods.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PaymentMethods.vue.mjs.map
