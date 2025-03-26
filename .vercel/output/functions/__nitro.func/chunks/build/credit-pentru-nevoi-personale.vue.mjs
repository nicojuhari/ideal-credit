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
  __name: "credit-pentru-nevoi-personale",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Credit pentru nevoi personale",
      meta: [
        { name: "description", content: "Obține creditul ideal pentru nevoile tale personale, cu soluții flexibile și fără comisioane ascunse. Alege Ideal Credit pentru realizarea visurilor tale. Aplică online!" },
        { name: "keywords", content: "credit pentru nevoi personale, credit rapid, credit de consum, credite Moldova, credite Chișinău, credite online, împrumuturi" }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-6" }, _attrs))}><div class="py-8 md:py-16 relative"><div class="bg-squares -mt-[1px]"></div><div class="container grid grid-cols-1 lg:grid-cols-12 gap-8"><div class="flex flex-col lg:col-span-8 h-full justify-center text-center lg:text-left">`);
      _push(ssrRenderComponent(_component_UiRecenziiButton, null, null, _parent));
      _push(`<h1 class="font-semibold text-4xl lg:text-7xl leading-none my-10">Credit pentru<br>nevoi personale</h1><h2 class="text-gray-200 text-lg !mb-0">Credite urgente, de consum și pînă la salariu.</h2></div><div class="lg:col-span-4 gap-6 flex flex-col justify-end">`);
      _push(ssrRenderComponent(_component_UiButtonsCTA, { toHeroSection: "" }, null, _parent));
      _push(ssrRenderComponent(_component_UiCalculatorCreditCTA, null, null, _parent));
      _push(`</div></div></div><div class="container relative card text-lg"><h2 class="card-title text-center">Ce este un credit pentru nevoi personale ?</h2><p>Un credit pentru nevoi personale este o sumă de bani împrumutată de la o instituție financiară bancară sau nebancară, de către o persoană fizică pentru a finanța diverse nevoi personale.</p><p class="mb-0">Spre deosebire de un credit ipotecar, care este destinat achiziționării unei locuințe, creditul de consum poate fi utilizat pentru o gamă largă de scopuri, cum ar fi:</p><ul class="list-outside list-disc ml-6"><li>Achiziționarea de bunuri (electrocasnice, mobilă)</li><li>Finanțarea unor cheltuieli medicale</li><li>Acoperirea costurilor pentru educație</li><li>Renovarea locuinței (reparație)</li><li>Vacanțe (călătorii)</li></ul><p class="mt-6 mb-0">Beneficiile creditului pentru nevoi personale:</p><ul class="list-outside list-disc ml-6"><li>Acces rapid la o sumă de bani semnificativă</li><li>Posibilitatea de a finanța cheltuieli neprevăzute</li><li>Flexibilitate în utilizarea banilor</li><li>Rambursare în rate lunare fixe</li></ul><p class="mt-6">Creditul pentru nevoi personale poate fi un instrument util doar dacă vă permiteți rambursarea lui în condiții convenabile.</p></div><div class="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/credit-pentru-nevoi-personale.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=credit-pentru-nevoi-personale.vue.mjs.map
