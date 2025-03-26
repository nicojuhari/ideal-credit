import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './CalculatorCreditCTA.vue.mjs';
import { k as useHead, j as _sfc_main$1 } from './server.mjs';
import _sfc_main$2 from './HowItWorks.vue.mjs';
import { mergeProps, defineAsyncComponent, useSSRContext } from 'vue';
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

const __nuxt_component_4_lazy = defineAsyncComponent(() => import('./CreditConditions.vue.mjs').then((c) => c.default || c));
const __nuxt_component_5_lazy = defineAsyncComponent(() => import('./CalculatorCredit.vue.mjs').then((c) => c.default || c));
const __nuxt_component_6_lazy = defineAsyncComponent(() => import('./CallToAction.vue.mjs').then((c) => c.default || c));
const _sfc_main = {
  __name: "credit-pentru-afaceri",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Credit pentru dezvoltarea afacerii tale",
      meta: [
        { name: "description", content: "Investește în afacerea ta cu soluții de credit flexibile și avantajoase. Acordăm credite rapide, fără comisioane ascunse și cu dobânzi competitive. Aplică online!" },
        { name: "keywords", content: "credit pentru afaceri, business credit, credit rapid, credite Moldova, credit online, împrumuturi" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiRecenziiButton = __nuxt_component_0;
      const _component_UiButtonsCTA = _sfc_main$1;
      const _component_UiCalculatorCreditCTA = __nuxt_component_2;
      const _component_HowItWorks = _sfc_main$2;
      const _component_LazyCreditConditions = __nuxt_component_4_lazy;
      const _component_LazyCalculatorCredit = __nuxt_component_5_lazy;
      const _component_LazyCallToAction = __nuxt_component_6_lazy;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-6" }, _attrs))}><div class="py-8 md:py-16 relative"><div class="bg-squares -mt-[1px]"></div><div class="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"><div class="flex flex-col lg:col-span-8 h-full justify-center text-center lg:text-left">`);
      _push(ssrRenderComponent(_component_UiRecenziiButton, null, null, _parent));
      _push(`<h1 class="font-semibold text-4xl lg:text-7xl leading-none my-10">Credit pentru<br>dezvoltarea afacerii</h1><h2 class="text-gray-200 text-lg !mb-0">Credite flexibile și avantajoase pentru creșterea afacerii tale.</h2></div><div class="lg:col-span-4 gap-6 flex flex-col justify-end">`);
      _push(ssrRenderComponent(_component_UiButtonsCTA, { toHeroSection: "" }, null, _parent));
      _push(ssrRenderComponent(_component_UiCalculatorCreditCTA, null, null, _parent));
      _push(`</div></div></div><div class="container relative card text-lg"><h2 class="card-title text-center">Ce este un credit pentru afaceri?</h2><div>Un credit pentru afaceri este un împrumut financiar acordat către o companie sau un antreprenor pentru a finanța diverse nevoi legate de activitatea economică.</div><p class="mt-6 mb-0">Scopul creditelor pentru afaceri:</p><ul class="list-outside list-disc ml-6 mb-6"><li><span class="font-bold">Startup-uri:</span> Finanțarea cheltuielilor inițiale pentru lansarea unei noi afaceri.</li><li><span class="font-bold">Dezvoltare:</span> Investiții în extinderea afacerii existente, modernizare, marketing, tehnologie sau angajarea de personal suplimentar.</li><li><span class="font-bold">Capital de lucru:</span> Acoperirea cheltuielilor curente ale afacerii (salarii, furnizori, utilități) în perioadele cu fluxul de numerar fluctuant.</li><li><span class="font-bold underline"><span>Refinanțarea datoriilor:</span></span> Consolidarea și restructurarea datoriilor existente spre condiții mai avantajoase.</li></ul><p class="mt-6 mb-0">Beneficiile creditelor pentru afaceri:</p><ul class="list-outside list-disc ml-6 mb-6"><li><span class="font-bold">Accelerarea creșterii:</span> Posibilitatea de a investi în dezvoltarea afacerii fără a utiliza exclusiv fonduri proprii..</li><li><span class="font-bold">Îmbunătățirea fluxului de numerar:</span> Acoperirea cheltuielilor curente și gestionarea mai eficientă a capitalului de lucru.</li><li><span class="font-bold">Flexibilitate financiară:</span> Finanțarea unor proiecte sau nevoi neprevăzute care apar în desfășurarea activității.</li><li><span class="font-bold">Posibilitatea de a profita de oportunități:</span> Achiziționarea de echipamente noi, extinderea pe noi piețe etc.</li></ul><p>Un credit pentru afaceri poate fi un instrument valoros pentru dezvoltarea și succesul companiei tale, însă decizia de a lua un împrumut trebuie luată responsabil, evaluând atent riscurile și beneficiile. </p><p>Noi, oferim rate dobânzi avantajoase și perioade de rambursare flexibile, astfel încât să nu pui presiune pe fluxul de numerar al companiei tale.</p><p>Contactează-ne acum pentru a afla mai multe despre cum te putem ajuta să îți duci afacerea la nivelul următor.</p></div><div class="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">`);
      _push(ssrRenderComponent(_component_HowItWorks, null, null, _parent));
      _push(ssrRenderComponent(_component_LazyCreditConditions, null, null, _parent));
      _push(`</div><div class="container mt-4 md:mt-6">`);
      _push(ssrRenderComponent(_component_LazyCalculatorCredit, null, null, _parent));
      _push(`</div><div class="container mt-4 md:mt-6">`);
      _push(ssrRenderComponent(_component_LazyCallToAction, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/credit-pentru-afaceri.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=credit-pentru-afaceri.vue.mjs.map
