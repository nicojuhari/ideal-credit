import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ShortAboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    const experience = computed(() => {
      return (/* @__PURE__ */ new Date()).getFullYear() - 2010;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><h2 class="card-title text-center">De ce să alegi<br class="lg:hidden"> Ideal Credit?</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="flex flex-col items-center text-center"><div class="text-brand-500 text-[216px] font-bold leading-none">${ssrInterpolate(unref(experience))}</div><p class="text-lg">ani de experiență<br class="hidden lg:block"> pe piața financiară din Republica Moldova.</p></div><div class="text-lg flex flex-col"><p>Scopul nostru la Ideal Credit SRL este de a oferi soluții financiare accesibile și transparente pentru antreprenori și persoane fizice.</p><p>Am ajutat sute de clienți să-și atingă obiectivele personale și profesionale, cu milioane de lei în credite acordate.</p><p><strong>Credite nebancare</strong> — rapid și flexibil, fără comisioane ascunse. Alege să ai o experiență plăcută, fără surprize!</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShortAboutUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ShortAboutUs.vue.mjs.map
