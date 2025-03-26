import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { k as useHead } from './server.mjs';
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
  __name: "autoritatea-de-supraveghere",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Autoritatea de supraveghere a O.C.N. Ideal Credit SRL",
      titleTemplate: "%pageTitle",
      meta: [
        { name: "description", content: "Autoritatea de supraveghere a O.C.N. Ideal Credit SRL este Comisia Națională a Pieței Financiare." },
        { name: "robots", content: "noindex,nofollow" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container sm-container relative my-4 md:my-6" }, _attrs))}><div class="card"><div class="text-2xl text-center leading-relaxed mb-10">Autoritatea de supraveghere a O.C.N. Ideal Credit SRL este <strong class="text-orange-color/90">Comisia Națională a Pieței Financiare.</strong></div><div class="text-lg text-center my-6">Contactele instituției</div><div class="flex flex-col gap-4"><div>Adresa de contact: <span class="font-bold">mun. Chișinău, bd. Ștefan cel Mare și Sfânt, nr. 77.</span></div><div> Pagina web: <a class="font-bold" href="https://www.cnpf.md" target="_blank" rel="nofollow">www.cnpf.md</a></div><div>E-mail: <span class="font-bold">office@cnpf.md </span></div></div><div class="text-lg text-center my-6">Reclamațiile pot fi depuse</div><ul class="list-disc flex flex-col gap-4 my-6 list-inside"><li>prin e-mail (cu respectarea reglementărilor cu privire la forma electronică - cu aplicarea semnăturii electronice);</li><li>prin intermediul oficiilor poștale;</li><li>la sediul CNPF, în cutia poștală amplasată la intrare în sediul instituției;</li></ul><div class="my-12"><div class="flex flex-col items-center justify-center gap-4 mb-6"> Telefonul consumatorului* <a class="text-orange-color/90 font-bold text-3xl" href="tel:+37322859595">(+373 22) 85 95 95</a></div><div class="italic">* Tariful către acest număr de apel va fi considerat apel cu tarif normal conform rețelei și tipului de abonament al inițiatorului.</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/autoritatea-de-supraveghere.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=autoritatea-de-supraveghere.vue.mjs.map
