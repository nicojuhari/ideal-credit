import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ListaOficiilor",
  __ssrInlineRender: true,
  setup(__props) {
    const list = [
      {
        id: 1,
        title: "Sucursala Nr. 1",
        address: "m.Chișinău",
        addressNumbers: "str.Miron Costin nr.25, of.115",
        mobile: ["+37378805060", "078 80 50 60"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.5126752925935!2d28.866588177004928!3d47.049792671144246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97cfa93379893%3A0x6b21737dc3080047!2sIdeal%20Credit%20Chi%C8%99in%C4%83u!5e0!3m2!1sen!2sat!4v1708098130151!5m2!1sen!2sat"
      },
      {
        id: 2,
        title: "Sediul principal",
        address: "or.Căușeni",
        addressNumbers: "str.Mihai Eminescu nr.17, of.47",
        mobile: ["+37379066566", "0790 66 5 66"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1070.8698170211678!2d29.40806812052061!3d46.641495352200025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9ace138f629b3%3A0xac0504d023064a9d!2sIdeal%20Credit%20C%C4%83u%C8%99eni!5e0!3m2!1sen!2sat!4v1708097806741!5m2!1sen!2sat"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-10" }, _attrs))}><!--[-->`);
      ssrRenderList(list, (item) => {
        _push(`<div><div class="text-lg underline underline-offset-2 mb-2">${ssrInterpolate(item.title)}</div><div>${ssrInterpolate(item.address)}</div><div>${ssrInterpolate(item.addressNumbers)}</div><div>Luni - Vineri: 08:30 - 16:30</div>`);
        if (item.id == 1) {
          _push(`<div class="text-sm italic mt-2">(este nevoie de programare prealabilă)</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<iframe${ssrRenderAttr("src", item.map)} width="100%" height="450" class="mt-4" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ListaOficiilor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ListaOficiilor.vue.mjs.map
