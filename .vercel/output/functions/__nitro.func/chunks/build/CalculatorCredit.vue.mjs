import { ref, mergeProps, useSSRContext, watchEffect, watch, computed, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { createGrafic, calcDAE } from 'ideal-credit';
import { u as useFacebookPixel, b as _sfc_main$3 } from './server.mjs';
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

const _sfc_main$2 = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    modalTitle: {
      default: "",
      type: String
    },
    large: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    (void 0).body.classList.add("modal-open");
    const toClose = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal fixed z-20 flex items-end justify-center top-0 left-0 w-full h-screen p-4" }, _attrs))}><div class="modal-backdrop fixed min-h-screen w-full top-0 left-0 bg-black-600/50"></div><div class="${ssrRenderClass([[{ "to-close": toClose.value == true }, { "max-w-sm": !__props.large }, { "max-w-2xl": __props.large }], "modal-container bg-gray-200 text-black rounded-lg z-10 m-auto w-full flex flex-col flex-1 max-h-full pb-4"])}"><div class="modal-header flex justify-between items-center p-4"><div class="text-lg font-bold">${ssrInterpolate(__props.modalTitle)}</div><div class="modal-close cursor-pointer hover:bg-opacity-10 transition-all p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div></div>`);
      if (_ctx.$slots.modalMessage) {
        _push(`<div class="py-2 text-bold italic">`);
        ssrRenderSlot(_ctx.$slots, "modalMessage", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="modal-content overflow-y-auto px-4 h-full flex-1"><div class="overflow-y-hidden">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      ssrRenderSlot(_ctx.$slots, "modalFooter", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Modal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "GraficTable",
  __ssrInlineRender: true,
  props: ["grafic", "dobindaTotal", "credit"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-auto border border-orange-black-light" }, _attrs))}><table class="table-fixed min-w-full text-sm divide-y divide-orange-black-light grafic-table overflow-y-auto"><thead><tr><th class="px-4 py-2 font-bold text-left whitespace-nowrap w-28">Nr.</th><th class="px-4 py-2 font-bold text-left whitespace-nowrap">Data</th><th class="px-4 py-2 font-bold text-left whitespace-nowrap">Credit</th><th class="px-4 py-2 font-bold text-left whitespace-nowrap">Dobânda</th><th class="px-4 py-2 font-bold text-left whitespace-nowrap">Total</th></tr></thead><tbody class="divide-y divide-orange-black-light"><!--[-->`);
      ssrRenderList(__props.grafic, (rata, idx) => {
        _push(`<tr><td class="px-4 py-2 font-bold whitespace-nowrap">${ssrInterpolate(idx + 1)}</td><td class="px-4 py-2 whitespace-nowrap">${ssrInterpolate(new Date(rata.data_rata).toLocaleDateString("ro-RO"))}</td><td class="px-4 py-2 whitespace-nowrap">${ssrInterpolate(rata.credit_rata)}</td><td class="px-4 py-2 whitespace-nowrap">${ssrInterpolate(rata.dobinda_rata)}</td><td class="px-4 py-2 whitespace-nowrap">${ssrInterpolate(rata.dobinda_rata + rata.credit_rata)}</td></tr>`);
      });
      _push(`<!--]--></tbody><tfoot><tr><th class="px-4 py-2 font-bold text-left whitespace-nowrap"></th><th class="px-4 py-2 font-bold text-left whitespace-nowrap">Total</th><th class="px-4 py-2 font-bold text-left whitespace-nowrap">${ssrInterpolate(__props.credit)}</th><th class="px-4 py-2 font-bold text-left whitespace-nowrap">${ssrInterpolate(__props.dobindaTotal)}</th><th class="px-4 py-2 font-bold text-left whitespace-nowrap">${ssrInterpolate(+__props.credit + +__props.dobindaTotal)}</th></tr></tfoot></table></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GraficTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "CalculatorCredit",
  __ssrInlineRender: true,
  setup(__props) {
    const { trackEvent } = useFacebookPixel();
    const creditSuma = ref(1e4);
    const creditTermen = ref(12);
    const graficCalculat = ref(null);
    const dae = ref(0);
    const dobindaTotal = ref(0);
    const showModal = ref(false);
    const preContractRef = ref(null);
    const tarife = {
      comision: 0,
      dobinda: [4, 3.5, 3]
    };
    watchEffect(() => {
      if (creditTermen.value < 6) creditTermen.value = 6;
      if (creditTermen.value > 60) creditTermen.value = 60;
      if (creditSuma.value < 1e3) creditSuma.value = 1e3;
      if (creditSuma.value > 3e5) creditSuma.value = 3e5;
      graficCalculat.value = createGrafic({
        sum: creditSuma.value,
        period: creditTermen.value,
        interest: 4
      });
      if (graficCalculat.value.length == 0) return;
      dae.value = calcDAE(graficCalculat.value, creditSuma.value);
      dobindaTotal.value = graficCalculat.value.reduce((acc, rata) => rata.dobinda_rata + acc, 0);
    });
    watch(
      [creditSuma, creditTermen],
      () => {
        trackEvent("CustomizeProduct");
      },
      { once: true }
    );
    const creditComision = computed(() => {
      return tarife.comision * +creditSuma.value / 100;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_UIcon = _sfc_main$3;
      const _component_uiModal = _sfc_main$2;
      const _component_GraficTable = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card relative" }, _attrs))}><div id="calculator-de-credit" class="invisible absolute -z-10 -top-20 md:-top-24"></div><h2 class="card-title text-center">Calculator de credit</h2><div class="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2"><div><div class="mt-6"><div class="flex gap-4 justify-between items-center mb-1"><div>Suma</div><label for="credit-amount-input"><input id="credit-amount-input" type="number"${ssrRenderAttr("value", creditSuma.value)} class="input-calculator"></label></div><label for="credit-amount-range"><input id="credit-amout-range" type="range"${ssrRenderAttr("value", creditSuma.value)} min="1000" max="300000" step="100" class="mb-4 w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer border-0 !p-0"></label><div class="flex gap-6 justify-between text-white text-opacity-80 text-sm"><div>1000 lei</div><div>300 000 lei</div></div></div><div class="mt-10"><div class="flex gap-4 justify-between items-center mb-1"><div>Termen</div><label for="credit-period-input"><input id="credit-period-input" type="number"${ssrRenderAttr("value", creditTermen.value)} class="input-calculator"></label></div><label for="credit-period-range"><input id="credit-period-range" type="range"${ssrRenderAttr("value", creditTermen.value)} min="6" max="60" step="1" class="mb-4 w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer border-0 !p-0"></label><div class="flex gap-6 justify-between text-white/80 text-sm"><div>6 luni</div><div>60 luni</div></div></div></div><div class="flex flex-col"><div class="grid place-content-center mt-2 text-orange-gray-dark"><div class="w-48 h-48 grid place-content-center gap-4 border-4 rounded-full text-center border-white/20"><div>Prima rată</div><div class="text-brand-500 title !my-0">${ssrInterpolate(((_b = (_a = graficCalculat.value) == null ? void 0 : _a[0]) == null ? void 0 : _b.credit_rata) + ((_d = (_c = graficCalculat.value) == null ? void 0 : _c[0]) == null ? void 0 : _d.dobinda_rata) || 0)}</div><div>MDL</div></div></div><div class="flex justify-center mt-8"><button class="btn btn-primary">Vezi preContractul</button></div></div></div><div class="text-center mt-12 mb-8">Costurile creditului</div><div class="grid gap-3 md:gap-10 grid-cols-1 md:grid-cols-2"><div><div class="flex gap-6 justify-between"><div>Comision de acordare</div><div>0 MDL</div></div><div class="flex gap-6 justify-between mt-3"><div>Penalitate pe zi</div><div>0.04 %</div></div><div class="flex gap-6 justify-between mt-3"><div>Dobânda lunară</div><div>${ssrInterpolate(tarife.dobinda[0])} %</div></div></div><div><div class="flex gap-6 justify-between"><div>Dobânda anuală medie</div><div>${ssrInterpolate(tarife.dobinda[0] * 12)} %</div></div><div class="flex gap-6 justify-between mt-3"><div>DAE<span class="text-sm"> (Dobânda anuală efectivă)</span></div><div>${ssrInterpolate(dae.value)} %</div></div><div class="flex gap-6 justify-between mt-3"><div>Costul total al creditului</div><div>${ssrInterpolate(dobindaTotal.value + creditComision.value)} MDL</div></div></div></div><div class="mt-8 flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-ph-info",
        class: "text-brand-500/50 text-2xl shrink-0"
      }, null, _parent));
      _push(`<span class="text-sm text-white/80">Consumatorul este responsabil pentru rambursarea creditului.</span></div>`);
      if (showModal.value) {
        _push(ssrRenderComponent(_component_uiModal, {
          large: "",
          onClose: ($event) => showModal.value = false,
          modalTitle: "Informația preContractuală"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<div${_scopeId}>${((_a2 = preContractRef.value) == null ? void 0 : _a2.innerHTML) ?? ""}</div>`);
            } else {
              return [
                createVNode("div", {
                  innerHTML: (_b2 = preContractRef.value) == null ? void 0 : _b2.innerHTML
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hidden"><div><h4 class="text-center my-6 text-lg font-medium">Graficul de Rambursare conform preContractului de mai jos</h4>`);
      _push(ssrRenderComponent(_component_GraficTable, {
        grafic: graficCalculat.value,
        dobindaTotal: dobindaTotal.value,
        credit: creditSuma.value
      }, null, _parent));
      _push(`<h4 class="text-center my-6 text-lg font-medium">Informaţii standard privind creditul pentru consumatori</h4><table class="table-fixsed w-full border-collapse pre-contract-table border" id="preContractTable"><tbody><tr><td colspan="2" class="table-subheader">1. Denumirea și datele de contact al Organizației</td></tr><tr><td>Creditor</td><td>Organizația de Creditare Nebancară &quot;Ideal Credit&quot; SRL</td></tr><tr><td>Adresa</td><td>m.Chișinău, str.Miron Costin, nr.25, of.115 (sucursala nr.1)<br><br>sau<br><br>or.Căușeni, str.Mihai Eminescu nr.17, of.47 (sediul principal)</td></tr><tr><td>Nr. Telefon</td><td>079066566, 078805060</td></tr><tr><td>Adresa de Email</td><td>info@idealcredit.md</td></tr><tr><td>Pagina web</td><td>www.idealcredit.md</td></tr><tr><td colspan="2" class="table-subheader">2. Descrierea principalelor caracteristici ale produsului de creditare</td></tr><tr><td>Tipul de credit </td><td>Credit nebancar</td></tr><tr><td> Valoarea totală a creditului<br><i class="text-sm">Înseamnă plafonul sau sumele totale puse la dispoziţie în temeiul contractului de credit</i></td><td>${ssrInterpolate(creditSuma.value)} MDL</td></tr><tr><td> Condiţiile care reglementează tragerea creditului<br><i class="text-sm">Înseamnă modul şi momentul de obţinere a banilor</i></td><td>Mijloacele bănești se vor elibera exclusiv din casieria Organizației</td></tr><tr><td>Durata Contractului de credit</td><td>${ssrInterpolate(creditTermen.value)} luni</td></tr><tr><td>Ratele şi ordinea în care acestea vor fi achitate </td><td> Conform graficului anexat la prezenta informație, acceptat și semnat de către client<br><i>* Găsiți graficul mai sus!</i></td></tr><tr><td colspan="2" class="table-subheader">3. Costurile creditului</td></tr><tr><td>Dobînda lunară</td><td>4% lunar</td></tr><tr><td>Rata dobînzii aferente creditului</td><td>48% (dobîndă fixă)</td></tr><tr><td>Dobînda anuală efectivă (DAE)</td><td>${ssrInterpolate(dae.value)} %</td></tr><tr><td><i class="text-sm">Dacă este cazul:</i><br> Pentru obţinerea creditului, este obligatoriu să se încheie: </td><td>În funcție de evaluarea riscului de credit, pot fi încheiate contracte de fidejusiune (garant) sau gaj (imobil)</td></tr><tr><td colspan="2" class="table-subheader">4. Costuri aferente</td></tr><tr><td>Comision pentru eliberarea creditului</td><td>0.00 % din suma eliberată</td></tr><tr><td>Comision pentru prelungirea Contractului</td><td>Comisionul pentru prelungirea termenului Contractului este egal cu dobînda necesar a fi achitată pentru rata care a fost amînată. (La solicitarea clientului) </td></tr><tr><td>Costuri în caz de întîrziere la plată </td><td>Se va calcula o penalitate în mărime de 0.04% maxim, pentru fiecare zi de întîrziere din valoarea totală a creditului</td></tr><tr><td colspan="2">În conformitate cu prevederile art. 15, alin. 7), lit. a) din Legea nr. 202 din 12.07.2013 privind contractele de credit pentru consumatori, orice alte plăți aferente creditului acordat (comisioane, taxe, penalități, dobînzii de întîrziere și orice alt tip de plată), cu excepția dobînzii, se vor încasa conform regulii ca acestea să nu depășească cumulativ 0,04% din valoarea totală a creditului pe o zi de credit înmulțit la numărul de zile pentru care este contractat creditul.</td></tr><tr><td colspan="2" class="table-subheader">5. Alte aspecte juridice importante</td></tr><tr><td>Dreptul de revocare</td><td>Clientul are dreptul la revocarea Contractului timp de 14 zile de la data semnării lui cu, condiția că, creditul nu a fost eliberat din casierie. Organizația are dreptul la revocarea Contractului dacă clientul încalcă condițiile acestuia. </td></tr><tr><td>Rambursare anticipată</td><td>Clientul are dreptul să ramburseze anticipat creditul. Pentru aceasta, Organizația nu percepe careva taxe neprecăzute în Contract. </td></tr><tr><td>Consultarea unei baze de date</td><td>În cazul în care cererea de solicitare a creditului va fi respinsă, iar temei pentru respingere a constituit informația vizualizată într-o bază de date, Organizația va informa clientul referitor la baza de date accesată </td></tr><tr><td>Dreptul la un proiect de Contract de credit</td><td>Clientul are dreptul, la cerere, să obţină gratuit un exemplar al proiectului de Contract de credit. </td></tr></tbody></table><div class="my-6">Îmi exprim acordul ca, Contractul de credit să fie încheiat în mai puțin de 15 zile calendaristice de la data semnării prezentei informații preContractuale.</div><div class="text-right mt-12">Semnătura: ________________</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CalculatorCredit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CalculatorCredit.vue.mjs.map
