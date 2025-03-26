import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as _sfc_main$1 } from './server.mjs';
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

const _sfc_main = {
  __name: "CreditConditions",
  __ssrInlineRender: true,
  setup(__props) {
    const list = [
      "Vârsta de la 23 de ani",
      "Sursă de venit stabilă",
      "Buletin de identitate valabil",
      "Responsabilitate financiară"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><h2 class="card-title text-center">Condițiile de creditare</h2><div class="space-y-6"><!--[-->`);
      ssrRenderList(list, (item) => {
        _push(`<div class="flex text-xl items-center gap-4">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-ph-check",
          class: "w-5 h-5 flex-shrink-0 text-brand-500/50"
        }, null, _parent));
        _push(` ${ssrInterpolate(item)}</div>`);
      });
      _push(`<!--]--></div><div class="inline-flex gap-4 mt-8 items-center text-sm text-white/80">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-ph-info",
        class: "w-6 h-6 shrink-0 text-brand-500/50"
      }, null, _parent));
      _push(`<span>În funcție de evaluarea riscului de credit, se poate solicita garanții adiționale: fidejusiune sau gaj imobil.</span></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreditConditions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CreditConditions.vue.mjs.map
