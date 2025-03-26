import { h as _export_sfc, j as _sfc_main$1 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UiButtonsCTA = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-8 items-center pt-8" }, _attrs))}><h4 class="title text-center !mb-0">Solicită un credit!</h4>`);
  _push(ssrRenderComponent(_component_UiButtonsCTA, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CallToAction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CallToAction as default };
//# sourceMappingURL=CallToAction.vue.mjs.map
