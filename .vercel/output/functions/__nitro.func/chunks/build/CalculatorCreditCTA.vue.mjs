import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { h as _export_sfc } from './server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center lg:justify-start lg:mt-1" }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" class="w-10 text-brand-500/50 -rotate-[24deg]" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M9.246 6.611c-.213 1.642 1.104 3.166 1.104 3.166s1.663-1.138 1.876-2.78c.213-1.643-1.104-3.167-1.104-3.167S9.46 4.97 9.246 6.611M7.683 12.13c.696 1.503 2.624 2.093 2.624 2.093s.8-1.847.104-3.35s-2.624-2.094-2.624-2.094s-.8 1.848-.104 3.351m.821 5.285c1.328.993 3.306.599 3.306.599s-.176-2.005-1.504-2.998S7 14.417 7 14.417s.176 2.005 1.504 2.998m3.609 4.298c1.505.698 3.359-.095 3.359-.095s-.587-1.925-2.092-2.624c-1.505-.698-3.359.096-3.359.096s.587 1.925 2.092 2.623m1.668-18.745c-1.21 1.133-1.164 3.144-1.164 3.144s2.01.176 3.22-.957s1.164-3.145 1.164-3.145s-2.01-.175-3.22.958" color="#currentColor"></path></svg><div class="text-sm text-center text-white/80">Sute de clienți<br>mulțumiți!</div><svg xmlns="http://www.w3.org/2000/svg" class="w-10 text-brand-500/50 -scale-x-100 rotate-[24deg]" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M9.246 6.611c-.213 1.642 1.104 3.166 1.104 3.166s1.663-1.138 1.876-2.78c.213-1.643-1.104-3.167-1.104-3.167S9.46 4.97 9.246 6.611M7.683 12.13c.696 1.503 2.624 2.093 2.624 2.093s.8-1.847.104-3.35s-2.624-2.094-2.624-2.094s-.8 1.848-.104 3.351m.821 5.285c1.328.993 3.306.599 3.306.599s-.176-2.005-1.504-2.998S7 14.417 7 14.417s.176 2.005 1.504 2.998m3.609 4.298c1.505.698 3.359-.095 3.359-.095s-.587-1.925-2.092-2.624c-1.505-.698-3.359.096-3.359.096s.587 1.925 2.092 2.623m1.668-18.745c-1.21 1.133-1.164 3.144-1.164 3.144s2.01.176 3.22-.957s1.164-3.145 1.164-3.145s-2.01-.175-3.22.958" color="#currentColor"></path></svg></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/RecenziiButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "#calculator-de-credit",
    title: "Calculator de Credit",
    class: "border border-gray-200 text-gray-200 hover:text-orange-color hover:border-orange-color/70 rounded-full w-full hover:scale-105 transition-all duration-300 h-10 inline-flex items-center justify-center"
  }, _attrs))}> Calculator de Credit</a>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/CalculatorCreditCTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=CalculatorCreditCTA.vue.mjs.map
