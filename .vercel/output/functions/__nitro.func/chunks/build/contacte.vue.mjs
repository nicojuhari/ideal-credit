import { _ as _sfc_main$2 } from './Loading.vue.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createVNode, defineAsyncComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useFacebookPixel, k as useHead, b as _sfc_main$1 } from './server.mjs';
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

const __nuxt_component_2_lazy = defineAsyncComponent(() => import('./CallToAction.vue.mjs').then((c) => c.default || c));
const __nuxt_component_3_lazy = defineAsyncComponent(() => import('./ListaOficiilor.vue.mjs').then((c) => c.default || c));
const web3FormAccessKey = "c8f3c3c1-46ab-46bf-a139-4c4bb6265d95";
const _sfc_main = {
  __name: "contacte",
  __ssrInlineRender: true,
  setup(__props) {
    const { trackEvent } = useFacebookPixel();
    useHead({
      title: "Contactele companiei de creditare Ideal Credit din R. Moldova",
      titleTemplate: "%pageTitle",
      meta: [
        { name: "description", content: "Contacte și adresa oficiilor organizației de creditare nebancare Ideal Credit SRL, ce activează cu success pe piața financiară a Republicii Moldova din 2010." },
        { name: "keywords", content: "ideal credit, credit rapid, credite Moldova, credite Chișinău, credit online, împrumuturi" }
      ]
    });
    const formData = ref({});
    const formSend = ref(false);
    const loading = ref(false);
    const submitForm = async () => {
      loading.value = true;
      try {
        formData.value.access_key = web3FormAccessKey;
        formData.value.subject = formData.value.nume + " a trimis un mesaj ...";
        formData.value.from_name = "Website Contact Form";
        let response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(formData.value)
        });
        let data = await response.json();
        if (data.success) {
          formSend.value = true;
          formData.value = {};
          trackEvent("SubmitApplication");
          setTimeout(() => {
            formSend.value = false;
          }, 3e3);
        }
      } catch (e) {
        console.error(e);
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$1;
      const _component_UiLoading = _sfc_main$2;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_LazyCallToAction = __nuxt_component_2_lazy;
      const _component_LazyListaOficiilor = __nuxt_component_3_lazy;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container sm-container relative my-4 md:my-6" }, _attrs))}><div class="card"><h1 class="page-title">Contacte</h1><div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-2xl"><div class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-ph-phone-call",
        class: "w-8 h-8 shrink-0 text-brand-500/50"
      }, null, _parent));
      _push(`<a href="tel:+37378805060"><span class="opacity-50">(+373)</span> 78 80 50 60</a></div><div class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-ph-envelope",
        class: "w-8 h-8 shrink-0 text-brand-500/50"
      }, null, _parent));
      _push(`<a href="mailto:info@idealcredit.md">info@idealcredit.md</a></div></div></div><div class="card mt-4 md:mt-6 relative overflow-hidden"><h2 class="card-title text-center">Scrie-ne un mesaj</h2>`);
      if (loading.value) {
        _push(ssrRenderComponent(_component_UiLoading, { local: "" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (formSend.value) {
        _push(`<div class="grid place-content-center my-16 duration-700">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-ph-check",
          class: "text-brand-500 h-32 w-32 mx-auto"
        }, null, _parent));
        _push(`<div class="text-2xl mt-4">Mulțumim pentru mesaj.<br>Vă contactăm în curând!</div></div>`);
      } else {
        _push(ssrRenderComponent(_component_FormKit, {
          type: "form",
          method: "POST",
          actions: false,
          onSubmit: submitForm,
          modelValue: formData.value,
          "onUpdate:modelValue": ($event) => formData.value = $event,
          "validation-messages": {
            incomplete: "Ne pare rău, careva cîmpuri sunt goale sau greșite"
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_FormKit, {
                type: "text",
                name: "nume",
                label: "Nume",
                validation: "required|length:3,25",
                "outer-class": "mb-6",
                "validation-messages": {
                  required: "Numele este obligatoriu",
                  length: "Cel puțin 3 caractere, maximum 25"
                }
              }, null, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormKit, {
                type: "email",
                name: "email",
                label: "Email",
                validation: "email",
                "validation-messages": {
                  email: "Email-ul are format greșit"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_FormKit, {
                type: "tel",
                name: "telefon",
                label: "Telefon/Mobil",
                validation: "tel",
                "validation-messages": {
                  tel: "Telefonul are format greșit"
                }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_FormKit, {
                type: "textarea",
                name: "mesaj",
                label: "Mesaj",
                "outer-class": "mb-6",
                "input-class": "border-white/20 border"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex justify-end"${_scopeId}><button type="submit" class="btn btn-primary"${_scopeId}> Trimite </button></div>`);
            } else {
              return [
                createVNode(_component_FormKit, {
                  type: "text",
                  name: "nume",
                  label: "Nume",
                  validation: "required|length:3,25",
                  "outer-class": "mb-6",
                  "validation-messages": {
                    required: "Numele este obligatoriu",
                    length: "Cel puțin 3 caractere, maximum 25"
                  }
                }),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" }, [
                  createVNode(_component_FormKit, {
                    type: "email",
                    name: "email",
                    label: "Email",
                    validation: "email",
                    "validation-messages": {
                      email: "Email-ul are format greșit"
                    }
                  }),
                  createVNode(_component_FormKit, {
                    type: "tel",
                    name: "telefon",
                    label: "Telefon/Mobil",
                    validation: "tel",
                    "validation-messages": {
                      tel: "Telefonul are format greșit"
                    }
                  })
                ]),
                createVNode(_component_FormKit, {
                  type: "textarea",
                  name: "mesaj",
                  label: "Mesaj",
                  "outer-class": "mb-6",
                  "input-class": "border-white/20 border"
                }),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "btn btn-primary"
                  }, " Trimite ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_LazyCallToAction, { class: "mt-4 md:mt-6" }, null, _parent));
      _push(`<div id="adresa-oficiilor" class="-translate-y-14"></div><div class="card mt-4 md:mt-6"><h2 class="card-title text-center">Adresa oficiilor</h2>`);
      _push(ssrRenderComponent(_component_LazyListaOficiilor, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacte.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contacte.vue.mjs.map
