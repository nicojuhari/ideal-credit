import { h as _export_sfc, k as useHead, a as __nuxt_component_1$1 } from './server.mjs';
import { mergeProps, useSSRContext, withCtx, createTextVNode, defineAsyncComponent } from 'vue';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><h3 class="text-center title mb-8">Regulamente interne</h3><div class="flex flex-col gap-6"><a href="/regulament_cadrul_de_administrare.pdf">1. Regulament privind cadrul de administrare</a><a href="/regulament_prestarea_serviciilor.pdf">2. Regulament privind prestarea serviciilor în cardul OCN Ideal Credit SRL</a><a href="/regulament_solutionarea_pretentiilor.pdf">3. Regulament privind mecanismele de soluționare a pretențiilor clienților în cardul OCN Ideal Credit SRL</a></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RegulamenteList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);

const __nuxt_component_2_lazy = defineAsyncComponent(() => import('./CallToAction.vue.mjs').then((c) => c.default || c));
const _sfc_main = {
  __name: "despre-noi",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Despre Ideal Credit: Credite avantajoase și servicii personalizate",
      titleTemplate: "%pageTitle",
      meta: [
        { name: "description", content: "Ideal Credit este o organizație de creditare nebancară ce oferă credite cu dobânzi avantajoase și fără comisioane pentru nevoi personale și afaceri." },
        { name: "keywords", content: "ideal credit, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_RegulamenteList = __nuxt_component_1;
      const _component_LazyCallToAction = __nuxt_component_2_lazy;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-4 md:my-6" }, _attrs))}><div class="container sm-container"><div class="card light"><h1 class="page-title">Despre noi</h1><div class="text-lg"><p>Partenerul dumneavoastră de încredere în finanțare din Moldova.</p><p><strong>Ideal Credit SRL</strong> este o organizație de creditare nebancară de top, care activează cu succes pe piața financiară a Republicii Moldova din 2010. În cei peste 13 ani de activitate, ne-am consolidat poziția ca un partener de încredere pentru mii de clienți, oferind soluții financiare inovatoare și accesibile.</p><h2 class="mb-2">Misiunea noastră</h2><p> Ne dedicăm să sprijinim creșterea economică a Moldovei prin oferirea de acces la finanțare pentru persoane fizice și întreprinderi mici și mijlocii. Credem în potențialul fiecărui client și ne străduim să oferim servicii personalizate care să răspundă nevoilor lor unice. </p><h2 class="mb-2">Ce ne diferențiază</h2><ul class="list-disc list-inside"><li><strong>Expertiză locală:</strong> Înțelegem în profunzime piața financiară din Moldova și provocările cu care se confruntă clienții noștri. </li><li><strong>Produse diverse:</strong> Oferim o gamă largă de împrumuturi, de la credite de consum până la finanțări pentru afaceri și agricultură. </li><li><strong>Proces simplificat:</strong> Aplicare rapidă și aprobare accelerată, cu documentație minimă. </li><li><strong>Transparență totală:</strong> Fără comisioane ascunse, cu toate costurile prezentate clar de la început. </li><li><strong>Consultanță profesională:</strong> Echipa noastră de experți vă ghidează în alegerea celei mai potrivite soluții financiare. </li></ul><h2 class="mb-2 mt-6">Produsele noastre principale</h2><ul class="list-disc list-inside"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/credit-pentru-nevoi-personale",
        title: "credit pentru nevoi personale"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Credite pentru nevoi personale`);
          } else {
            return [
              createTextVNode("Credite pentru nevoi personale")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/credit-pentru-afaceri",
        title: "împrumuturi pentru afaceri"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Împrumuturi pentru afaceri`);
          } else {
            return [
              createTextVNode("Împrumuturi pentru afaceri")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>Credite agricole</li><li>Finanțare pentru echipamente și utilaje</li><li>Credite pentru procurarea unui autoturism</li><li>Credite pentru îmbunătățirea locuinței</li></ul><h2 class="mt-6 mb-2">Angajamentul nostru față de clienți</h2><p>La Ideal Credit, punem clientul în centrul tuturor activităților noastre. Ne străduim constant să îmbunătățim serviciile, să simplificăm procesele și să oferim rate competitive. Suntem mândri să fim un pilon de sprijin pentru dezvoltarea economică și socială a Moldovei. </p><h2 class="mt-6 mb-2">Responsabilitate socială</h2><p> Ne implicăm activ în comunitatea locală prin diverse programe de educație financiară și susținere a antreprenoriatului. Credem că o Moldovă prosperă se construiește prin efortul comun al tuturor actorilor economici. </p><p> Alegeți Ideal Credit SRL pentru o experiență financiară transparentă, eficientă și adaptată nevoilor dumneavoastră. Suntem aici pentru a transforma visurile în realitate și pentru a sprijini creșterea afacerii dumneavoastră. </p><p> Contactați-ne astăzi pentru a descoperi cum vă putem ajuta să vă atingeți obiectivele financiare! </p></div></div></div><div class="container sm-container mt-4 md:mt-6">`);
      _push(ssrRenderComponent(_component_RegulamenteList, null, null, _parent));
      _push(`</div><div class="container sm-container mt-4 md:mt-6"><div class="card"><h3 class="text-center title mb-8">Rapoarte</h3><div class="flex flex-col gap-6"><a href="/raport_audit_2023.pdf">1. Raport de Audit 2023</a><a href="/raport_audit_2022.pdf">2. Raport de Audit 2022</a></div></div></div><div class="container sm-container mt-4 md:mt-6">`);
      _push(ssrRenderComponent(_component_LazyCallToAction, { class: "card light" }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/despre-noi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=despre-noi.vue.mjs.map
