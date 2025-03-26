import { shallowReactive, reactive, effectScope, getCurrentScope, hasInjectionContext, getCurrentInstance, toRef, inject, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw, defineAsyncComponent, defineComponent, ref, onMounted, resolveDynamicComponent, createBlock, openBlock, mergeProps, watch, h, createTextVNode, computed, unref, toValue, markRaw, watchEffect, provide, resolveComponent, nextTick, triggerRef, onServerPrefetch, withCtx, createVNode, renderSlot, toDisplayString, useSlots, createCommentVNode, Fragment, withModifiers, renderList, useId, useSSRContext, Suspense, onErrorCaptured, createApp } from 'vue';
import { I as createHooks, J as getContext, i as createError$1, K as toRouteMatcher, L as createRouter, M as defu, N as hasProtocol, O as joinURL, P as withQuery, Q as sanitizeStatusCode, R as isScriptProtocol, S as executeAsync, T as withoutTrailingSlash, U as titleCase, C as parseURL, V as withLeadingSlash, W as withBase, x as withTrailingSlash, X as camelCase, Y as withoutBase, Z as defuFn, _ as klona, $ as stringifyQuery, a0 as parseQuery, a1 as serialize, a2 as isEqual } from '../nitro/nitro.mjs';
import { START_LOCATION, createMemoryHistory, createRouter as createRouter$1, useRoute as useRoute$1, RouterView } from 'vue-router';
import { h as headSymbol, u as useHead$1, a as useSeoMeta$1, r as resolveUnrefHeadInput } from '../routes/renderer.mjs';
import { InferSeoMetaPlugin } from '@unhead/addons';
import { SchemaOrgUnheadPlugin, defineWebSite, defineWebPage } from '@unhead/schema-org/vue';
import { stringify, parse } from 'devalue';
import { FORMKIT_VERSION, createConfig, reset, submitForm, setErrors, clearErrors, getNode, error, createNode, createMessage, warn, watchRegistry, isNode, sugar, isDOM, isComponent, isConditional, compile, createClasses, generateClassList, resetCount } from '@formkit/core';
import { has, cloneAny, extend, undefine, camel, kebab, nodeProps, only, except, oncePerTick, slugify, shallowClone, eq, token, isObject, isPojo, empty } from '@formkit/utils';
import { createObserver } from '@formkit/observer';
import * as defaultRules from '@formkit/rules';
import { createValidationPlugin } from '@formkit/validation';
import { createI18nPlugin, en as en$1 } from '@formkit/i18n';
import { runtimeProps, createSection, createLibraryPlugin, inputs } from '@formkit/inputs';
import { register } from '@formkit/dev';
import colors from 'tailwindcss/colors';
import { _api, addAPIProvider, setCustomIconsLoader, getIcon, loadIcon as loadIcon$1, Icon } from '@iconify/vue';
import { TemplateParamsPlugin } from 'unhead/plugins';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttrs, ssrRenderAttr, ssrRenderSuspense } from 'vue/server-renderer';
import { getIconCSS } from '@iconify/utils/lib/css/icon';
import { useForwardProps, Primitive, useForwardPropsEmits, ToastRoot, ToastTitle, ToastDescription, ToastAction, ToastClose, ToastProvider, ToastPortal, ToastViewport, ConfigProvider, TooltipProvider } from 'reka-ui';
import { createSharedComposable, reactivePick, reactiveOmit } from '@vueuse/core';
import { createTV } from 'tailwind-variants';

const appPageTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const appId = "nuxt-app";

function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.16.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide && typeof provide === "object") {
      for (const key in provide) {
        nuxtApp.provide(key, provide[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin.dependsOn) == null ? void 0 : _a2.filter((name) => plugins.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.push(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance || (nuxtAppInstance = getNuxtAppCtx(id).tryUse());
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}

const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value || (error2.value = nuxtError);
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};

const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});

const ROUTE_KEY_PARENTHESES_RE$1 = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE$1 = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE$1 = /:\w+/g;
const interpolatePath = (route, match) => {
  return match.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: useRuntimeConfig().nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}

const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");

const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to || (to = "/");
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}

const __nuxt_page_meta = null;

const component_45stubVA8T4QRDxnqpkZsngAQdKZubhZiaZwUDqS0DzhjlGpM = {};

var _a$6, _b, _c;
function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import('./index.vue.mjs')
  },
  {
    name: "terms",
    path: "/terms",
    component: () => import('./terms.vue.mjs')
  },
  {
    name: "cookies",
    path: "/cookies",
    component: () => import('./cookies.vue.mjs')
  },
  {
    name: "privacy",
    path: "/privacy",
    component: () => import('./privacy.vue.mjs')
  },
  {
    name: "contacte",
    path: "/contacte",
    component: () => import('./contacte.vue.mjs')
  },
  {
    name: "blog",
    path: "/blog",
    component: () => import('./index.vue2.mjs')
  },
  {
    name: "despre-noi",
    path: "/despre-noi",
    component: () => import('./despre-noi.vue.mjs')
  },
  {
    name: "blog-slug",
    path: "/blog/:slug()",
    component: () => import('./_slug_.vue.mjs')
  },
  {
    name: "credit-pentru-afaceri",
    path: "/credit-pentru-afaceri",
    component: () => import('./credit-pentru-afaceri.vue.mjs')
  },
  {
    name: "cerere-de-credit-online",
    path: "/cerere-de-credit-online",
    component: () => import('./cerere-de-credit-online.vue.mjs')
  },
  {
    name: "autoritatea-de-supraveghere",
    path: "/autoritatea-de-supraveghere",
    component: () => import('./autoritatea-de-supraveghere.vue.mjs')
  },
  {
    name: "credit-pentru-nevoi-personale",
    path: "/credit-pentru-nevoi-personale",
    component: () => import('./credit-pentru-nevoi-personale.vue.mjs')
  },
  {
    name: (_a$6 = __nuxt_page_meta) == null ? void 0 : _a$6.name,
    path: "/credit-de-consum",
    component: component_45stubVA8T4QRDxnqpkZsngAQdKZubhZiaZwUDqS0DzhjlGpM
  },
  {
    name: (_b = __nuxt_page_meta) == null ? void 0 : _b.name,
    path: "/credit-auto",
    component: component_45stubVA8T4QRDxnqpkZsngAQdKZubhZiaZwUDqS0DzhjlGpM
  },
  {
    name: (_c = __nuxt_page_meta) == null ? void 0 : _c.name,
    path: "/credit-ipotecar",
    component: component_45stubVA8T4QRDxnqpkZsngAQdKZubhZiaZwUDqS0DzhjlGpM
  }
];

const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}

const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}

const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};

const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});

function trailing_45slashes_45global({ path, query, hash }) {
  if (path === "/" || !path.endsWith("/")) return;
  const nextPath = path.replace(/\/+$/, "") || "/", nextRoute = { path: nextPath, query, hash };
  return navigateTo(nextRoute, { redirectCode: 301 });
}

const manifest_45route_45rule = defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});

const globalMiddleware = [
  validate,
  trailing_45slashes_45global,
  manifest_45route_45rule
];
const namedMiddleware = {};

const plugin$1 = defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    const history = ((_b = (_a = routerOptions).history) == null ? void 0 : _b.call(_a, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter$1({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    handleHotUpdate(router, routerOptions.routes ? routerOptions.routes : (routes2) => routes2);
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d2;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware || (nuxtApp._middleware = {
      global: [],
      named: {}
    });
    useError();
    if (!((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_d = nuxtApp.ssrContext) == null ? void 0 : _d.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2, _c2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry of toArray(componentMiddleware)) {
            middlewareEntries.add(entry);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry of middlewareEntries) {
          const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await ((_c2 = (_b2 = namedMiddleware)[entry]) == null ? void 0 : _c2.call(_b2).then((r) => r.default || r)) : entry;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}

const _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q = defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    const stack = (_b = (_a = useRequestEvent()) == null ? void 0 : _a.context) == null ? void 0 : _b.siteConfig;
    const state = useState("site-config");
    {
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = stack == null ? void 0 : stack.get({
          debug: useRuntimeConfig()["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});

function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}

const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
{
  reducers.push(["Island", (data) => data && (data == null ? void 0 : data.__nuxt_island)]);
}
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});

const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function () { return index2; }).then((r) => r["default"] || r.default || r));

const lazyGlobalComponents = [
  ["Icon", LazyIcon]
];
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});

var ye = Object.defineProperty, be = (s, e, t) => e in s ? ye(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t, g = (s, e, t) => be(s, typeof e != "symbol" ? e + "" : e, t);
class ke extends Error {
  constructor(e) {
    super(e), this.name = "AbortError";
  }
}
function ve(s, e, t) {
  if (!Number.isFinite(e))
    throw new TypeError("Expected `limit` to be a finite number");
  if (!Number.isFinite(t))
    throw new TypeError("Expected `interval` to be a finite number");
  const r = [];
  let o = [], n = 0, a = false;
  const l = async () => {
    n++;
    const h2 = r.shift();
    if (h2)
      try {
        const p = await s(...h2.args);
        h2.resolve(p);
      } catch (p) {
        h2.reject(p);
      }
    const d = setTimeout(() => {
      n--, r.length > 0 && l(), o = o.filter((p) => p !== d);
    }, t);
    o.includes(d) || o.push(d);
  }, i = (...h2) => a ? Promise.reject(
    new Error(
      "Throttled function is already aborted and not accepting new promises"
    )
  ) : new Promise((d, p) => {
    r.push({
      resolve: d,
      reject: p,
      args: h2
    }), n < e && l();
  });
  return i.abort = () => {
    a = true, o.forEach(clearTimeout), o = [], r.forEach(
      (h2) => h2.reject(() => new ke("Throttle function aborted"))
    ), r.length = 0;
  }, i;
}
class P {
  constructor() {
    g(this, "isCDNUrl", (e = "") => e.includes("/cdn/")), g(this, "getOptionsPage", (e, t = 25, r = 1) => ({
      ...e,
      per_page: t,
      page: r
    })), g(this, "delay", (e) => new Promise((t) => setTimeout(t, e))), g(this, "arrayFrom", (e = 0, t) => Array.from({ length: e }, t)), g(this, "range", (e = 0, t = e) => {
      const r = Math.abs(t - e) || 0, o = e < t ? 1 : -1;
      return this.arrayFrom(r, (n, a) => a * o + e);
    }), g(this, "asyncMap", async (e, t) => Promise.all(e.map(t))), g(this, "flatMap", (e = [], t) => e.map(t).reduce((r, o) => [...r, ...o], [])), g(this, "escapeHTML", function(e) {
      const t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, r = /[&<>"']/g, o = new RegExp(r.source);
      return e && o.test(e) ? e.replace(r, (n) => t[n]) : e;
    });
  }
  /**
   * @method stringify
   * @param  {object} params
   * @param  {string} prefix
   * @param  {boolean} isArray
   * @return {string} Stringified object
   */
  stringify(e, t, r) {
    const o = [];
    for (const n in e) {
      if (!Object.prototype.hasOwnProperty.call(e, n))
        continue;
      const a = e[n], l = r ? "" : encodeURIComponent(n);
      let i;
      typeof a == "object" ? i = this.stringify(
        a,
        t ? t + encodeURIComponent(`[${l}]`) : l,
        Array.isArray(a)
      ) : i = `${t ? t + encodeURIComponent(`[${l}]`) : l}=${encodeURIComponent(a)}`, o.push(i);
    }
    return o.join("&");
  }
  /**
   * @method getRegionURL
   * @param  {string} regionCode region code, could be eu, us, cn, ap or ca
   * @return {string} The base URL of the region
   */
  getRegionURL(e) {
    const t = "api.storyblok.com", r = "api-us.storyblok.com", o = "app.storyblokchina.cn", n = "api-ap.storyblok.com", a = "api-ca.storyblok.com";
    switch (e) {
      case "us":
        return r;
      case "cn":
        return o;
      case "ap":
        return n;
      case "ca":
        return a;
      default:
        return t;
    }
  }
}
const $e = function(s, e) {
  const t = {};
  for (const r in s) {
    const o = s[r];
    e.includes(r) && o !== null && (t[r] = o);
  }
  return t;
}, we = (s) => s === "email", Te = () => ({
  singleTag: "hr"
}), Re = () => ({
  tag: "blockquote"
}), _e = () => ({
  tag: "ul"
}), Ee = (s) => ({
  tag: [
    "pre",
    {
      tag: "code",
      attrs: s.attrs
    }
  ]
}), Se = () => ({
  singleTag: "br"
}), je = (s) => ({
  tag: `h${s.attrs.level}`
}), Ae = (s) => ({
  singleTag: [
    {
      tag: "img",
      attrs: $e(s.attrs, ["src", "alt", "title"])
    }
  ]
}), xe = () => ({
  tag: "li"
}), Ie = () => ({
  tag: "ol"
}), Ce = () => ({
  tag: "p"
}), Le = (s) => ({
  tag: [
    {
      tag: "span",
      attrs: {
        "data-type": "emoji",
        "data-name": s.attrs.name,
        emoji: s.attrs.emoji
      }
    }
  ]
}), Oe = () => ({
  tag: "b"
}), Pe = () => ({
  tag: "s"
}), Ne = () => ({
  tag: "u"
}), Me = () => ({
  tag: "strong"
}), He = () => ({
  tag: "code"
}), De = () => ({
  tag: "i"
}), Ue = (s) => {
  if (!s.attrs)
    return {
      tag: ""
    };
  const e = new P().escapeHTML, t = { ...s.attrs }, { linktype: r = "url" } = s.attrs;
  if (delete t.linktype, t.href && (t.href = e(s.attrs.href || "")), we(r) && (t.href = `mailto:${t.href}`), t.anchor && (t.href = `${t.href}#${t.anchor}`, delete t.anchor), t.custom) {
    for (const o in t.custom)
      t[o] = t.custom[o];
    delete t.custom;
  }
  return {
    tag: [
      {
        tag: "a",
        attrs: t
      }
    ]
  };
}, Be = (s) => ({
  tag: [
    {
      tag: "span",
      attrs: s.attrs
    }
  ]
}), ze = () => ({
  tag: "sub"
}), Fe = () => ({
  tag: "sup"
}), qe = (s) => ({
  tag: [
    {
      tag: "span",
      attrs: s.attrs
    }
  ]
}), Ve = (s) => {
  var e;
  return (e = s.attrs) != null && e.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `background-color:${s.attrs.color};`
        }
      }
    ]
  } : {
    tag: ""
  };
}, Ge = (s) => {
  var e;
  return (e = s.attrs) != null && e.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `color:${s.attrs.color}`
        }
      }
    ]
  } : {
    tag: ""
  };
}, Je = {
  nodes: {
    horizontal_rule: Te,
    blockquote: Re,
    bullet_list: _e,
    code_block: Ee,
    hard_break: Se,
    heading: je,
    image: Ae,
    list_item: xe,
    ordered_list: Ie,
    paragraph: Ce,
    emoji: Le
  },
  marks: {
    bold: Oe,
    strike: Pe,
    underline: Ne,
    strong: Me,
    code: He,
    italic: De,
    link: Ue,
    styled: Be,
    subscript: ze,
    superscript: Fe,
    anchor: qe,
    highlight: Ve,
    textStyle: Ge
  }
}, Ke = function(s) {
  const e = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, t = /[&<>"']/g, r = new RegExp(t.source);
  return s && r.test(s) ? s.replace(t, (o) => e[o]) : s;
};
let F = false;
class N {
  constructor(e) {
    g(this, "marks"), g(this, "nodes"), e || (e = Je), this.marks = e.marks || [], this.nodes = e.nodes || [];
  }
  addNode(e, t) {
    this.nodes[e] = t;
  }
  addMark(e, t) {
    this.marks[e] = t;
  }
  render(e, t = { optimizeImages: false }, r = true) {
    if (!F && r && (console.warn(
      "Warning ⚠️: The RichTextResolver class is deprecated and will be removed in the next major release. Please use the `@storyblok/richtext` package instead. https://github.com/storyblok/richtext/"
    ), F = true), e && e.content && Array.isArray(e.content)) {
      let o = "";
      return e.content.forEach((n) => {
        o += this.renderNode(n);
      }), t.optimizeImages ? this.optimizeImages(o, t.optimizeImages) : o;
    }
    return console.warn(
      `The render method must receive an Object with a "content" field.
      The "content" field must be an array of nodes as the type ISbRichtext.
      ISbRichtext:
        content?: ISbRichtext[]
        marks?: ISbRichtext[]
        attrs?: any
        text?: string
        type: string
        
        Example:
        {
          content: [
            {
              content: [
                {
                  text: 'Hello World',
                  type: 'text'
                }
              ],
              type: 'paragraph'
            }
          ],
          type: 'doc'
        }`
    ), "";
  }
  optimizeImages(e, t) {
    let r = 0, o = 0, n = "", a = "";
    typeof t != "boolean" && (typeof t.width == "number" && t.width > 0 && (n += `width="${t.width}" `, r = t.width), typeof t.height == "number" && t.height > 0 && (n += `height="${t.height}" `, o = t.height), (t.loading === "lazy" || t.loading === "eager") && (n += `loading="${t.loading}" `), typeof t.class == "string" && t.class.length > 0 && (n += `class="${t.class}" `), t.filters && (typeof t.filters.blur == "number" && t.filters.blur >= 0 && t.filters.blur <= 100 && (a += `:blur(${t.filters.blur})`), typeof t.filters.brightness == "number" && t.filters.brightness >= -100 && t.filters.brightness <= 100 && (a += `:brightness(${t.filters.brightness})`), t.filters.fill && (t.filters.fill.match(/[0-9A-F]{6}/gi) || t.filters.fill === "transparent") && (a += `:fill(${t.filters.fill})`), t.filters.format && ["webp", "png", "jpeg"].includes(t.filters.format) && (a += `:format(${t.filters.format})`), typeof t.filters.grayscale == "boolean" && t.filters.grayscale && (a += ":grayscale()"), typeof t.filters.quality == "number" && t.filters.quality >= 0 && t.filters.quality <= 100 && (a += `:quality(${t.filters.quality})`), t.filters.rotate && [90, 180, 270].includes(t.filters.rotate) && (a += `:rotate(${t.filters.rotate})`), a.length > 0 && (a = `/filters${a}`))), n.length > 0 && (e = e.replace(/<img/g, `<img ${n.trim()}`));
    const l = r > 0 || o > 0 || a.length > 0 ? `${r}x${o}${a}` : "";
    return e = e.replace(
      /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|bmp)/g,
      `a.storyblok.com/f/$1/$2.$3/m/${l}`
    ), typeof t != "boolean" && (t.sizes || t.srcset) && (e = e.replace(/<img.*?src=["|'](.*?)["|']/g, (i) => {
      var h2, d;
      const p = i.match(
        /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|bmp)/g
      );
      if (p && p.length > 0) {
        const b = {
          srcset: (h2 = t.srcset) == null ? void 0 : h2.map((w) => {
            if (typeof w == "number")
              return `//${p}/m/${w}x0${a} ${w}w`;
            if (typeof w == "object" && w.length === 2) {
              let E = 0, j = 0;
              return typeof w[0] == "number" && (E = w[0]), typeof w[1] == "number" && (j = w[1]), `//${p}/m/${E}x${j}${a} ${E}w`;
            }
            return "";
          }).join(", "),
          sizes: (d = t.sizes) == null ? void 0 : d.map((w) => w).join(", ")
        };
        let v = "";
        return b.srcset && (v += `srcset="${b.srcset}" `), b.sizes && (v += `sizes="${b.sizes}" `), i.replace(/<img/g, `<img ${v.trim()}`);
      }
      return i;
    })), e;
  }
  renderNode(e) {
    const t = [];
    e.marks && e.marks.forEach((o) => {
      const n = this.getMatchingMark(o);
      n && n.tag !== "" && t.push(this.renderOpeningTag(n.tag));
    });
    const r = this.getMatchingNode(e);
    return r && r.tag && t.push(this.renderOpeningTag(r.tag)), e.content ? e.content.forEach((o) => {
      t.push(this.renderNode(o));
    }) : e.text ? t.push(Ke(e.text)) : r && r.singleTag ? t.push(this.renderTag(r.singleTag, " /")) : r && r.html ? t.push(r.html) : e.type === "emoji" && t.push(this.renderEmoji(e)), r && r.tag && t.push(this.renderClosingTag(r.tag)), e.marks && e.marks.slice(0).reverse().forEach((o) => {
      const n = this.getMatchingMark(o);
      n && n.tag !== "" && t.push(this.renderClosingTag(n.tag));
    }), t.join("");
  }
  renderTag(e, t) {
    return e.constructor === String ? `<${e}${t}>` : e.map((r) => {
      if (r.constructor === String)
        return `<${r}${t}>`;
      {
        let o = `<${r.tag}`;
        if (r.attrs) {
          for (const n in r.attrs)
            if (Object.prototype.hasOwnProperty.call(r.attrs, n)) {
              const a = r.attrs[n];
              a !== null && (o += ` ${n}="${a}"`);
            }
        }
        return `${o}${t}>`;
      }
    }).join("");
  }
  renderOpeningTag(e) {
    return this.renderTag(e, "");
  }
  renderClosingTag(e) {
    return e.constructor === String ? `</${e}>` : e.slice(0).reverse().map((t) => t.constructor === String ? `</${t}>` : `</${t.tag}>`).join("");
  }
  getMatchingNode(e) {
    const t = this.nodes[e.type];
    if (typeof t == "function")
      return t(e);
  }
  getMatchingMark(e) {
    const t = this.marks[e.type];
    if (typeof t == "function")
      return t(e);
  }
  renderEmoji(e) {
    if (e.attrs.emoji)
      return e.attrs.emoji;
    const t = [
      {
        tag: "img",
        attrs: {
          src: e.attrs.fallbackImage,
          draggable: "false",
          loading: "lazy",
          align: "absmiddle"
        }
      }
    ];
    return this.renderTag(t, " /");
  }
}
class Ye {
  constructor(e) {
    g(this, "baseURL"), g(this, "timeout"), g(this, "headers"), g(this, "responseInterceptor"), g(this, "fetch"), g(this, "ejectInterceptor"), g(this, "url"), g(this, "parameters"), g(this, "fetchOptions"), this.baseURL = e.baseURL, this.headers = e.headers || new Headers(), this.timeout = e != null && e.timeout ? e.timeout * 1e3 : 0, this.responseInterceptor = e.responseInterceptor, this.fetch = (...t) => e.fetch ? e.fetch(...t) : fetch(...t), this.ejectInterceptor = false, this.url = "", this.parameters = {}, this.fetchOptions = {};
  }
  /**
   *
   * @param url string
   * @param params ISbStoriesParams
   * @returns Promise<ISbResponse | Error>
   */
  get(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("get");
  }
  post(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("post");
  }
  put(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("put");
  }
  delete(e, t) {
    return this.url = e, this.parameters = t ?? {}, this._methodHandler("delete");
  }
  async _responseHandler(e) {
    const t = [], r = {
      data: {},
      headers: {},
      status: 0,
      statusText: ""
    };
    e.status !== 204 && await e.json().then((o) => {
      r.data = o;
    });
    for (const o of e.headers.entries())
      t[o[0]] = o[1];
    return r.headers = { ...t }, r.status = e.status, r.statusText = e.statusText, r;
  }
  async _methodHandler(e) {
    let t = `${this.baseURL}${this.url}`, r = null;
    if (e === "get") {
      const i = new P();
      t = `${this.baseURL}${this.url}?${i.stringify(
        this.parameters
      )}`;
    } else
      r = JSON.stringify(this.parameters);
    const o = new URL(t), n = new AbortController(), { signal: a } = n;
    let l;
    this.timeout && (l = setTimeout(() => n.abort(), this.timeout));
    try {
      const i = await this.fetch(`${o}`, {
        method: e,
        headers: this.headers,
        body: r,
        signal: a,
        ...this.fetchOptions
      });
      this.timeout && clearTimeout(l);
      const h2 = await this._responseHandler(
        i
      );
      return this.responseInterceptor && !this.ejectInterceptor ? this._statusHandler(this.responseInterceptor(h2)) : this._statusHandler(h2);
    } catch (i) {
      return {
        message: i
      };
    }
  }
  setFetchOptions(e = {}) {
    Object.keys(e).length > 0 && "method" in e && delete e.method, this.fetchOptions = { ...e };
  }
  eject() {
    this.ejectInterceptor = true;
  }
  _statusHandler(e) {
    const t = /20[0-6]/g;
    return new Promise((r, o) => {
      if (t.test(`${e.status}`))
        return r(e);
      const n = {
        message: e.statusText,
        status: e.status,
        response: Array.isArray(e.data) ? e.data[0] : e.data.error || e.data.slug
      };
      o(n);
    });
  }
}
const q = "SB-Agent", D = {
  defaultAgentName: "SB-JS-CLIENT",
  defaultAgentVersion: "SB-Agent-Version",
  packageVersion: "6.0.0"
};
let C = {};
const S = {};
class We {
  /**
   *
   * @param config ISbConfig interface
   * @param pEndpoint string, optional
   */
  constructor(e, t) {
    g(this, "client"), g(this, "maxRetries"), g(this, "retriesDelay"), g(this, "throttle"), g(this, "accessToken"), g(this, "cache"), g(this, "helpers"), g(this, "resolveCounter"), g(this, "relations"), g(this, "links"), g(this, "richTextResolver"), g(this, "resolveNestedRelations"), g(this, "stringifiedStoriesCache");
    let r = e.endpoint || t;
    if (!r) {
      const a = new P().getRegionURL, l = e.https === false ? "http" : "https";
      e.oauthToken ? r = `${l}://${a(e.region)}/v1` : r = `${l}://${a(e.region)}/v2`;
    }
    const o = new Headers();
    o.set("Content-Type", "application/json"), o.set("Accept", "application/json"), e.headers && (e.headers.constructor.name === "Headers" ? e.headers.entries().toArray() : Object.entries(e.headers)).forEach(([a, l]) => {
      o.set(a, l);
    }), o.has(q) || (o.set(q, D.defaultAgentName), o.set(
      D.defaultAgentVersion,
      D.packageVersion
    ));
    let n = 5;
    e.oauthToken && (o.set("Authorization", e.oauthToken), n = 3), e.rateLimit && (n = e.rateLimit), e.richTextSchema ? this.richTextResolver = new N(e.richTextSchema) : this.richTextResolver = new N(), e.componentResolver && this.setComponentResolver(e.componentResolver), this.maxRetries = e.maxRetries || 10, this.retriesDelay = 300, this.throttle = ve(
      this.throttledRequest.bind(this),
      n,
      1e3
    ), this.accessToken = e.accessToken || "", this.relations = {}, this.links = {}, this.cache = e.cache || { clear: "manual" }, this.helpers = new P(), this.resolveCounter = 0, this.resolveNestedRelations = e.resolveNestedRelations || true, this.stringifiedStoriesCache = {}, this.client = new Ye({
      baseURL: r,
      timeout: e.timeout || 0,
      headers: o,
      responseInterceptor: e.responseInterceptor,
      fetch: e.fetch
    });
  }
  setComponentResolver(e) {
    this.richTextResolver.addNode("blok", (t) => {
      let r = "";
      return t.attrs.body && t.attrs.body.forEach((o) => {
        r += e(o.component, o);
      }), {
        html: r
      };
    });
  }
  parseParams(e) {
    return e.token || (e.token = this.getToken()), e.cv || (e.cv = S[e.token]), Array.isArray(e.resolve_relations) && (e.resolve_relations = e.resolve_relations.join(",")), typeof e.resolve_relations < "u" && (e.resolve_level = 2), e;
  }
  factoryParamOptions(e, t) {
    return this.helpers.isCDNUrl(e) ? this.parseParams(t) : t;
  }
  makeRequest(e, t, r, o, n) {
    const a = this.factoryParamOptions(
      e,
      this.helpers.getOptionsPage(t, r, o)
    );
    return this.cacheResponse(e, a, void 0, n);
  }
  get(e, t, r) {
    t || (t = {});
    const o = `/${e}`, n = this.factoryParamOptions(o, t);
    return this.cacheResponse(o, n, void 0, r);
  }
  async getAll(e, t, r, o) {
    const n = (t == null ? void 0 : t.per_page) || 25, a = `/${e}`.replace(/\/$/, ""), l = r ?? a.substring(a.lastIndexOf("/") + 1), i = 1, h2 = await this.makeRequest(
      a,
      t,
      n,
      i,
      o
    ), d = h2.total ? Math.ceil(h2.total / n) : 1, p = await this.helpers.asyncMap(
      this.helpers.range(i, d),
      (b) => this.makeRequest(a, t, n, b + 1, o)
    );
    return this.helpers.flatMap([h2, ...p], (b) => Object.values(b.data[l]));
  }
  post(e, t, r) {
    const o = `/${e}`;
    return Promise.resolve(
      this.throttle("post", o, t, r)
    );
  }
  put(e, t, r) {
    const o = `/${e}`;
    return Promise.resolve(
      this.throttle("put", o, t, r)
    );
  }
  delete(e, t, r) {
    t || (t = {});
    const o = `/${e}`;
    return Promise.resolve(
      this.throttle("delete", o, t, r)
    );
  }
  getStories(e, t) {
    return this._addResolveLevel(e), this.get("cdn/stories", e, t);
  }
  getStory(e, t, r) {
    return this._addResolveLevel(t), this.get(`cdn/stories/${e}`, t, r);
  }
  getToken() {
    return this.accessToken;
  }
  ejectInterceptor() {
    this.client.eject();
  }
  _addResolveLevel(e) {
    typeof e.resolve_relations < "u" && (e.resolve_level = 2);
  }
  _cleanCopy(e) {
    return JSON.parse(JSON.stringify(e));
  }
  _insertLinks(e, t, r) {
    const o = e[t];
    o && o.fieldtype === "multilink" && o.linktype === "story" && typeof o.id == "string" && this.links[r][o.id] ? o.story = this._cleanCopy(this.links[r][o.id]) : o && o.linktype === "story" && typeof o.uuid == "string" && this.links[r][o.uuid] && (o.story = this._cleanCopy(this.links[r][o.uuid]));
  }
  /**
   *
   * @param resolveId A counter number as a string
   * @param uuid The uuid of the story
   * @returns string | object
   */
  getStoryReference(e, t) {
    return this.relations[e][t] ? JSON.parse(this.stringifiedStoriesCache[t] || JSON.stringify(this.relations[e][t])) : t;
  }
  /**
   * Resolves a field's value by replacing UUIDs with their corresponding story references
   * @param jtree - The JSON tree object containing the field to resolve
   * @param treeItem - The key of the field to resolve
   * @param resolveId - The unique identifier for the current resolution context
   *
   * This method handles both single string UUIDs and arrays of UUIDs:
   * - For single strings: directly replaces the UUID with the story reference
   * - For arrays: maps through each UUID and replaces with corresponding story references
   */
  _resolveField(e, t, r) {
    const o = e[t];
    typeof o == "string" ? e[t] = this.getStoryReference(r, o) : Array.isArray(o) && (e[t] = o.map(
      (n) => this.getStoryReference(r, n)
    ).filter(Boolean));
  }
  /**
   * Inserts relations into the JSON tree by resolving references
   * @param jtree - The JSON tree object to process
   * @param treeItem - The current field being processed
   * @param fields - The relation patterns to resolve (string or array of strings)
   * @param resolveId - The unique identifier for the current resolution context
   *
   * This method handles two types of relation patterns:
   * 1. Nested relations: matches fields that end with the current field name
   *    Example: If treeItem is "event_type", it matches patterns like "*.event_type"
   *
   * 2. Direct component relations: matches exact component.field patterns
   *    Example: "event.event_type" for component "event" and field "event_type"
   *
   * The method supports both string and array formats for the fields parameter,
   * allowing flexible specification of relation patterns.
   */
  _insertRelations(e, t, r, o) {
    if (Array.isArray(r) ? r.find((a) => a.endsWith(`.${t}`)) : r.endsWith(`.${t}`)) {
      this._resolveField(e, t, o);
      return;
    }
    const n = e.component ? `${e.component}.${t}` : t;
    (Array.isArray(r) ? r.includes(n) : r === n) && this._resolveField(e, t, o);
  }
  /**
   * Recursively traverses and resolves relations in the story content tree
   * @param story - The story object containing the content to process
   * @param fields - The relation patterns to resolve
   * @param resolveId - The unique identifier for the current resolution context
   */
  iterateTree(e, t, r) {
    const o = (n, a = "") => {
      if (!(!n || n._stopResolving)) {
        if (Array.isArray(n))
          n.forEach((l, i) => o(l, `${a}[${i}]`));
        else if (typeof n == "object")
          for (const l in n) {
            const i = a ? `${a}.${l}` : l;
            (n.component && n._uid || n.type === "link") && (this._insertRelations(n, l, t, r), this._insertLinks(n, l, r)), o(n[l], i);
          }
      }
    };
    o(e.content);
  }
  async resolveLinks(e, t, r) {
    let o = [];
    if (e.link_uuids) {
      const n = e.link_uuids.length, a = [], l = 50;
      for (let i = 0; i < n; i += l) {
        const h2 = Math.min(n, i + l);
        a.push(e.link_uuids.slice(i, h2));
      }
      for (let i = 0; i < a.length; i++)
        (await this.getStories({
          per_page: l,
          language: t.language,
          version: t.version,
          starts_with: t.starts_with,
          by_uuids: a[i].join(",")
        })).data.stories.forEach(
          (h2) => {
            o.push(h2);
          }
        );
    } else
      o = e.links;
    o.forEach((n) => {
      this.links[r][n.uuid] = {
        ...n,
        _stopResolving: true
      };
    });
  }
  async resolveRelations(e, t, r) {
    let o = [];
    if (e.rel_uuids) {
      const n = e.rel_uuids.length, a = [], l = 50;
      for (let i = 0; i < n; i += l) {
        const h2 = Math.min(n, i + l);
        a.push(e.rel_uuids.slice(i, h2));
      }
      for (let i = 0; i < a.length; i++)
        (await this.getStories({
          per_page: l,
          language: t.language,
          version: t.version,
          starts_with: t.starts_with,
          by_uuids: a[i].join(","),
          excluding_fields: t.excluding_fields
        })).data.stories.forEach((h2) => {
          o.push(h2);
        });
    } else
      o = e.rels;
    o && o.length > 0 && o.forEach((n) => {
      this.relations[r][n.uuid] = {
        ...n,
        _stopResolving: true
      };
    });
  }
  /**
   *
   * @param responseData
   * @param params
   * @param resolveId
   * @description Resolves the relations and links of the stories
   * @returns Promise<void>
   *
   */
  async resolveStories(e, t, r) {
    var o, n;
    let a = [];
    if (this.links[r] = {}, this.relations[r] = {}, typeof t.resolve_relations < "u" && t.resolve_relations.length > 0 && (typeof t.resolve_relations == "string" && (a = t.resolve_relations.split(",")), await this.resolveRelations(e, t, r)), t.resolve_links && ["1", "story", "url", "link"].includes(t.resolve_links) && ((o = e.links) != null && o.length || (n = e.link_uuids) != null && n.length) && await this.resolveLinks(e, t, r), this.resolveNestedRelations)
      for (const l in this.relations[r])
        this.iterateTree(
          this.relations[r][l],
          a,
          r
        );
    e.story ? this.iterateTree(e.story, a, r) : e.stories.forEach((l) => {
      this.iterateTree(l, a, r);
    }), this.stringifiedStoriesCache = {}, delete this.links[r], delete this.relations[r];
  }
  async cacheResponse(e, t, r, o) {
    const n = this.helpers.stringify({ url: e, params: t }), a = this.cacheProvider();
    if (t.version === "published" && e !== "/cdn/spaces/me") {
      const l = await a.get(n);
      if (l)
        return Promise.resolve(l);
    }
    return new Promise(async (l, i) => {
      var h2;
      try {
        const d = await this.throttle(
          "get",
          e,
          t,
          o
        );
        if (d.status !== 200)
          return i(d);
        let p = { data: d.data, headers: d.headers };
        if ((h2 = d.headers) != null && h2["per-page"] && (p = Object.assign({}, p, {
          perPage: d.headers["per-page"] ? Number.parseInt(d.headers["per-page"]) : 0,
          total: d.headers["per-page"] ? Number.parseInt(d.headers.total) : 0
        })), p.data.story || p.data.stories) {
          const v = this.resolveCounter = ++this.resolveCounter % 1e3;
          await this.resolveStories(p.data, t, `${v}`);
        }
        t.version === "published" && e !== "/cdn/spaces/me" && await a.set(n, p);
        const b = this.cache.clear === "onpreview" && t.version === "draft" || this.cache.clear === "auto";
        return t.token && p.data.cv && (b && S[t.token] && S[t.token] !== p.data.cv && await this.flushCache(), S[t.token] = p.data.cv), l(p);
      } catch (d) {
        if (d.response && d.status === 429 && (r = typeof r > "u" ? 0 : r + 1, r < this.maxRetries))
          return console.log(
            `Hit rate limit. Retrying in ${this.retriesDelay / 1e3} seconds.`
          ), await this.helpers.delay(this.retriesDelay), this.cacheResponse(e, t, r).then(l).catch(i);
        i(d);
      }
    });
  }
  throttledRequest(e, t, r, o) {
    return this.client.setFetchOptions(o), this.client[e](t, r);
  }
  cacheVersions() {
    return S;
  }
  cacheVersion() {
    return S[this.accessToken];
  }
  setCacheVersion(e) {
    this.accessToken && (S[this.accessToken] = e);
  }
  clearCacheVersion() {
    this.accessToken && (S[this.accessToken] = 0);
  }
  cacheProvider() {
    switch (this.cache.type) {
      case "memory":
        return {
          get(e) {
            return Promise.resolve(C[e]);
          },
          getAll() {
            return Promise.resolve(C);
          },
          set(e, t) {
            return C[e] = t, Promise.resolve(void 0);
          },
          flush() {
            return C = {}, Promise.resolve(void 0);
          }
        };
      case "custom":
        if (this.cache.custom)
          return this.cache.custom;
      // eslint-disable-next-line no-fallthrough
      default:
        return {
          get() {
            return Promise.resolve();
          },
          getAll() {
            return Promise.resolve(void 0);
          },
          set() {
            return Promise.resolve(void 0);
          },
          flush() {
            return Promise.resolve(void 0);
          }
        };
    }
  }
  async flushCache() {
    return await this.cacheProvider().flush(), this.clearCacheVersion(), this;
  }
}
const dt = (s = {}) => {
  const { apiOptions: e } = s;
  if (!e || !e.accessToken) {
    console.error(
      "You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication"
    );
    return;
  }
  return { storyblokApi: new We(e) };
}, Xe = (s) => {
  if (typeof s != "object" || typeof s._editable > "u")
    return {};
  try {
    const e = JSON.parse(
      s._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
    );
    return e ? {
      "data-blok-c": JSON.stringify(e),
      "data-blok-uid": `${e.id}-${e.uid}`
    } : {};
  } catch {
    return {};
  }
};
function Qe(s, e) {
  if (!e)
    return { src: s, attrs: {} };
  let t = 0, r = 0;
  const o = {}, n = [];
  function a(i, h2, d, p, b) {
    typeof i != "number" || i <= h2 || i >= d ? console.warn(`[StoryblokRichText] - ${p.charAt(0).toUpperCase() + p.slice(1)} value must be a number between ${h2} and ${d} (inclusive)`) : b.push(`${p}(${i})`);
  }
  if (typeof e == "object") {
    if (typeof e.width == "number" && e.width > 0 ? (o.width = e.width, t = e.width) : console.warn("[StoryblokRichText] - Width value must be a number greater than 0"), e.height && typeof e.height == "number" && e.height > 0 ? (o.height = e.height, r = e.height) : console.warn("[StoryblokRichText] - Height value must be a number greater than 0"), e.loading && ["lazy", "eager"].includes(e.loading) && (o.loading = e.loading), e.class && (o.class = e.class), e.filters) {
      const { filters: i } = e || {}, { blur: h2, brightness: d, fill: p, format: b, grayscale: v, quality: w, rotate: E } = i || {};
      h2 && a(h2, 0, 100, "blur", n), w && a(w, 0, 100, "quality", n), d && a(d, 0, 100, "brightness", n), p && n.push(`fill(${p})`), v && n.push("grayscale()"), E && [0, 90, 180, 270].includes(e.filters.rotate || 0) && n.push(`rotate(${E})`), b && ["webp", "png", "jpeg"].includes(b) && n.push(`format(${b})`);
    }
    e.srcset && (o.srcset = e.srcset.map((i) => {
      if (typeof i == "number")
        return `${s}/m/${i}x0/${n.length > 0 ? `filters:${n.join(":")}` : ""} ${i}w`;
      if (Array.isArray(i) && i.length === 2) {
        const [h2, d] = i;
        return `${s}/m/${h2}x${d}/${n.length > 0 ? `filters:${n.join(":")}` : ""} ${h2}w`;
      } else {
        console.warn("[StoryblokRichText] - srcset entry must be a number or a tuple of two numbers");
        return;
      }
    }).join(", ")), e.sizes && (o.sizes = e.sizes.join(", "));
  }
  let l = `${s}/m/`;
  return t > 0 && r > 0 && (l = `${l}${t}x${r}/`), n.length > 0 && (l = `${l}filters:${n.join(":")}`), {
    src: l,
    attrs: o
  };
}
var k = /* @__PURE__ */ ((s) => (s.DOCUMENT = "doc", s.HEADING = "heading", s.PARAGRAPH = "paragraph", s.QUOTE = "blockquote", s.OL_LIST = "ordered_list", s.UL_LIST = "bullet_list", s.LIST_ITEM = "list_item", s.CODE_BLOCK = "code_block", s.HR = "horizontal_rule", s.BR = "hard_break", s.IMAGE = "image", s.EMOJI = "emoji", s.COMPONENT = "blok", s.TABLE = "table", s.TABLE_ROW = "tableRow", s.TABLE_CELL = "tableCell", s.TABLE_HEADER = "tableHeader", s))(k || {}), _ = /* @__PURE__ */ ((s) => (s.BOLD = "bold", s.STRONG = "strong", s.STRIKE = "strike", s.UNDERLINE = "underline", s.ITALIC = "italic", s.CODE = "code", s.LINK = "link", s.ANCHOR = "anchor", s.STYLED = "styled", s.SUPERSCRIPT = "superscript", s.SUBSCRIPT = "subscript", s.TEXT_STYLE = "textStyle", s.HIGHLIGHT = "highlight", s))(_ || {}), X = /* @__PURE__ */ ((s) => (s.TEXT = "text", s))(X || {}), A = /* @__PURE__ */ ((s) => (s.URL = "url", s.STORY = "story", s.ASSET = "asset", s.EMAIL = "email", s))(A || {});
const Ze = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
], et = (s = {}) => Object.keys(s).map((e) => `${e}="${s[e]}"`).join(" "), tt = (s = {}) => Object.keys(s).map((e) => `${e}: ${s[e]}`).join("; ");
function rt(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
const L = (s) => Object.fromEntries(Object.entries(s).filter(([e, t]) => t !== void 0));
function V(s, e = {}, t) {
  const r = et(e), o = r ? `${s} ${r}` : s, n = Array.isArray(t) ? t.join("") : t || "";
  if (s) {
    if (Ze.includes(s))
      return `<${o}>`;
  } else return n;
  return `<${o}>${n}</${s}>`;
}
function st(s = {}) {
  let e = 0;
  const {
    renderFn: t = V,
    textFn: r = rt,
    resolvers: o = {},
    optimizeImages: n = false,
    keyedResolvers: a = false
  } = s, l = t !== V, i = (c) => (u) => {
    const m = u.attrs || {};
    return a && (m.key = `${c}-${e}`), t(c, m, u.children || null);
  }, h2 = (c) => {
    const { src: u, alt: m, title: y, srcset: R, sizes: $ } = c.attrs || {};
    let f = u, T = {};
    if (n) {
      const { src: le, attrs: ce } = Qe(u, n);
      f = le, T = ce;
    }
    a && (T = {
      ...T,
      key: `img-${e}`
    });
    const ie = {
      src: f,
      alt: m,
      title: y,
      srcset: R,
      sizes: $,
      ...T
    };
    return t("img", L(ie));
  }, d = (c) => {
    const { level: u, ...m } = c.attrs || {}, y = {
      ...m
    };
    return a && (y.key = `h${u}-${e}`), t(`h${u}`, y, c.children);
  }, p = (c) => {
    var u, m, y, R;
    const $ = t("img", {
      src: (u = c.attrs) == null ? void 0 : u.fallbackImage,
      alt: (m = c.attrs) == null ? void 0 : m.alt,
      style: "width: 1.25em; height: 1.25em; vertical-align: text-top",
      draggable: "false",
      loading: "lazy"
    }), f = {
      "data-type": "emoji",
      "data-name": (y = c.attrs) == null ? void 0 : y.name,
      "data-emoji": (R = c.attrs) == null ? void 0 : R.emoji
    };
    return a && (f.key = `emoji-${e}`), t("span", f, $);
  }, b = (c) => t("pre", {
    ...c.attrs,
    key: `code-${e}`
  }, t("code", { key: `code-${e}` }, c.children || "")), v = (c, u = false) => ({ text: m, attrs: y }) => {
    const { class: R, id: $, ...f } = y || {}, T = u ? {
      class: R,
      id: $,
      style: tt(f) || void 0
    } : y || {};
    return a && (T.key = `${c}-${e}`), t(c, L(T), m);
  }, w = (c) => M(c), E = (c) => {
    const { marks: u, ...m } = c;
    return "text" in c ? u ? u.reduce(
      (y, R) => w({ ...R, text: y }),
      // Fix: Ensure render function returns a string
      w({ ...m, children: m.children })
      // Fix: Cast children to string
    ) : r(m.text) : "";
  }, j = (c) => {
    const { linktype: u, href: m, anchor: y, ...R } = c.attrs || {};
    let $ = "";
    switch (u) {
      case A.ASSET:
      case A.URL:
        $ = m;
        break;
      case A.EMAIL:
        $ = `mailto:${m}`;
        break;
      case A.STORY:
        $ = m, y && ($ = `${$}#${y}`);
        break;
      default:
        $ = m;
        break;
    }
    const f = { ...R };
    return $ && (f.href = $), a && (f.key = `a-${e}`), t("a", f, c.text);
  }, te = (c) => {
    var u, m;
    return console.warn("[StoryblokRichtText] - BLOK resolver is not available for vanilla usage"), t("span", {
      blok: (u = c == null ? void 0 : c.attrs) == null ? void 0 : u.body[0],
      id: (m = c.attrs) == null ? void 0 : m.id,
      key: `component-${e}`,
      style: "display: none"
    });
  }, re = (c) => {
    const u = {};
    return a && (u.key = `table-${e}`), t("table", u, c.children);
  }, se = (c) => {
    const u = {};
    return a && (u.key = `tr-${e}`), t("tr", u, c.children);
  }, oe = (c) => {
    const { colspan: u, rowspan: m, colwidth: y, backgroundColor: R, ...$ } = c.attrs || {}, f = {
      ...$
    };
    u > 1 && (f.colspan = u), m > 1 && (f.rowspan = m);
    const T = [];
    return y && T.push(`width: ${y}px;`), R && T.push(`background-color: ${R};`), T.length > 0 && (f.style = T.join(" ")), a && (f.key = `td-${e}`), t("td", L(f), c.children);
  }, ne = (c) => {
    const { colspan: u, rowspan: m, colwidth: y, backgroundColor: R, ...$ } = c.attrs || {}, f = {
      ...$
    };
    u > 1 && (f.colspan = u), m > 1 && (f.rowspan = m);
    const T = [];
    return y && T.push(`width: ${y}px;`), R && T.push(`background-color: ${R};`), T.length > 0 && (f.style = T.join(" ")), a && (f.key = `th-${e}`), t("th", L(f), c.children);
  }, ae = new Map([
    [k.DOCUMENT, i("")],
    [k.HEADING, d],
    [k.PARAGRAPH, i("p")],
    [k.UL_LIST, i("ul")],
    [k.OL_LIST, i("ol")],
    [k.LIST_ITEM, i("li")],
    [k.IMAGE, h2],
    [k.EMOJI, p],
    [k.CODE_BLOCK, b],
    [k.HR, i("hr")],
    [k.BR, i("br")],
    [k.QUOTE, i("blockquote")],
    [k.COMPONENT, te],
    [X.TEXT, E],
    [_.LINK, j],
    [_.ANCHOR, j],
    [_.STYLED, v("span", true)],
    [_.BOLD, v("strong")],
    [_.TEXT_STYLE, v("span", true)],
    [_.ITALIC, v("em")],
    [_.UNDERLINE, v("u")],
    [_.STRIKE, v("s")],
    [_.CODE, v("code")],
    [_.SUPERSCRIPT, v("sup")],
    [_.SUBSCRIPT, v("sub")],
    [_.HIGHLIGHT, v("mark")],
    [k.TABLE, re],
    [k.TABLE_ROW, se],
    [k.TABLE_CELL, oe],
    [k.TABLE_HEADER, ne],
    ...Object.entries(o).map(([c, u]) => [c, u])
  ]);
  function I(c) {
    e += 1;
    const u = ae.get(c.type);
    if (!u)
      return console.error("<Storyblok>", `No resolver found for node type ${c.type}`), "";
    if (c.type === "text")
      return u(c);
    const m = c.content ? c.content.map(M) : void 0;
    return u({
      ...c,
      children: m
      // Fix: Update the type of 'children' to Node[]
    });
  }
  function M(c) {
    return c.type === "doc" ? l ? c.content.map(I) : c.content.map(I).join("") : Array.isArray(c) ? c.map(I) : I(c);
  }
  return {
    render: M
  };
}
let U;
const ot = (s, e, t = {}) => {
  var r;
  new URL((r = (void 0).location) == null ? void 0 : r.href).searchParams.get(
    "_storyblok"
  );
}, Q = (s, e) => {
  s.addNode("blok", (t) => {
    let r = "";
    return t.attrs.body.forEach((o) => {
      r += e(o.component, o);
    }), {
      html: r
    };
  });
}, nt = (s = {}) => {
  const {
    bridge: r,
    accessToken: o,
    use: n = [],
    apiOptions: a = {},
    richText: l = {},
    bridgeUrl: i
  } = s;
  a.accessToken = a.accessToken || o;
  const h2 = { bridge: r, apiOptions: a };
  let d = {};
  n.forEach((b) => {
    d = { ...d, ...b(h2) };
  });
  return U = new N(l.schema), l.resolver && Q(U, l.resolver), d;
}, Z = /* @__PURE__ */ defineComponent({
  __name: "StoryblokComponent",
  props: {
    blok: {}
  },
  setup(s, { expose: e }) {
    const t = s, r = ref();
    e({
      value: r
    });
    const o = typeof resolveDynamicComponent(t.blok.component) != "string", n = inject("VueSDKOptions"), a = ref(t.blok.component);
    return !o && n && (n.enableFallbackComponent ? (a.value = n.customFallbackComponent ?? "FallbackComponent", typeof resolveDynamicComponent(a.value) == "string" && console.error(
      `Is the Fallback component "${a.value}" registered properly?`
    )) : console.error(
      `Component could not be found for blok "${t.blok.component}"! Is it defined in main.ts as "app.component("${t.blok.component}", ${t.blok.component});"?`
    )), (l, i) => (openBlock(), createBlock(resolveDynamicComponent(a.value), mergeProps({
      ref_key: "blokRef",
      ref: r
    }, { ...l.$props, ...l.$attrs }), null, 16));
  }
}), it = (s) => {
  var e, t;
  return h(
    Z,
    {
      blok: (e = s == null ? void 0 : s.attrs) == null ? void 0 : e.body[0],
      id: (t = s.attrs) == null ? void 0 : t.id
    },
    s.children
  );
};
function lt(s) {
  const e = {
    renderFn: h,
    textFn: createTextVNode,
    keyedResolvers: true,
    resolvers: {
      [k.COMPONENT]: it,
      ...s.resolvers
    }
  };
  return st(e);
}
const ct = /* @__PURE__ */ defineComponent({
  __name: "StoryblokRichText",
  props: {
    doc: {},
    resolvers: {}
  },
  setup(s) {
    const e = s, t = ref(), r = () => t.value;
    return watch([() => e.doc, () => e.resolvers], ([o, n]) => {
      const { render: a } = lt({
        resolvers: n ?? {}
      });
      t.value = a(o);
    }, {
      immediate: true,
      deep: true
    }), (o, n) => (openBlock(), createBlock(r));
  }
}), ht = {
  beforeMount(s, e) {
    if (e.value) {
      const t = Xe(e.value);
      Object.keys(t).length > 0 && (s.setAttribute("data-blok-c", t["data-blok-c"]), s.setAttribute("data-blok-uid", t["data-blok-uid"]), s.classList.add("storyblok__outline"));
    }
  }
}, ee = (s) => {
  console.error(`You can't use ${s} if you're not loading apiPlugin. Please provide it on StoryblokVue initialization.
    `);
};
let x = null;
const gt = () => (x || ee("useStoryblokApi"), x), mt = async (s, e = {}, t = {}) => {
  const r = ref(null);
  if (t.resolveRelations = t.resolveRelations ?? e.resolve_relations, t.resolveLinks = t.resolveLinks ?? e.resolve_links, onMounted(() => {
    r.value && r.value.id && ot(
      r.value.id,
      (o) => r.value = o,
      t
    );
  }), x) {
    const { data: o } = await x.get(
      `cdn/stories/${s}`,
      e
    );
    r.value = o.story;
  } else
    ee("useStoryblok");
  return r;
}, ft = {
  install(s, e = {}) {
    s.directive("editable", ht), s.component("StoryblokComponent", Z), s.component("StoryblokRichText", ct), e.enableFallbackComponent && !e.customFallbackComponent && s.component(
      "FallbackComponent",
      defineAsyncComponent(() => import('./FallbackComponent-Dky11gEu.mjs'))
    );
    const { storyblokApi: t } = nt(e);
    x = t || null, s.provide("VueSDKOptions", e);
  }
};

const plugin_YOxzu2Rgn246XMgfphZEXZjtzJTMGWdPuDf_KLI_O_0 = defineNuxtPlugin(({ vueApp }) => {
  let { storyblok } = useRuntimeConfig().public;
  storyblok = JSON.parse(JSON.stringify(storyblok));
  vueApp.use(ft, { ...storyblok, use: [dt] });
});

function useSiteConfig(options) {
  var _a;
  const stack = (_a = useRequestEvent()) == null ? void 0 : _a.context.siteConfig.get(defu({ resolveRefs: true }, options));
  delete stack._priority;
  return stack;
}

function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useSeoMeta$1(input, { head, ...options });
  }
}

const siteConfig_vuqmRkLAUZxQvb5pvUwT3uUdVggfjhj1m5v7Pb6IE0w = defineNuxtPlugin(() => {
  const head = injectHead();
  if (!head)
    return;
  const siteConfig = useSiteConfig();
  const input = {
    meta: [],
    templateParams: {
      site: siteConfig,
      // support legacy
      siteUrl: siteConfig.url,
      siteName: siteConfig.name
    }
  };
  if (siteConfig.separator)
    input.templateParams.separator = siteConfig.separator;
  if (siteConfig.titleSeparator)
    input.templateParams.titleSeparator = siteConfig.titleSeparator;
  if (siteConfig.description) {
    input.templateParams.siteDescription = siteConfig.description;
    input.meta.push(
      {
        name: "description",
        content: "%site.description",
        tagPriority: "low"
      }
    );
  }
  head.push(input);
});

const inferSeoMetaPlugin_KsEotgC9NJyW_guR_3z04hFN8TI2h5dgP8bzHmpMm5o = defineNuxtPlugin(() => {
  const head = injectHead();
  if (!head)
    return;
  head.use(InferSeoMetaPlugin());
});

const titles_Fth_MAhm7dgpxeTaMXibYXbcCjegjWK3QH9gKvbTRVg = defineNuxtPlugin({
  name: "nuxt-seo:fallback-titles",
  env: {
    islands: false
  },
  setup() {
    const route = useRoute();
    const err = useError();
    const title = computed(() => {
      var _a, _b, _c;
      if (err.value && [404, 500].includes((_a = err.value) == null ? void 0 : _a.statusCode)) {
        return `${err.value.statusCode} - ${err.value.message}`;
      }
      if (typeof ((_b = route.meta) == null ? void 0 : _b.title) === "string")
        return (_c = route.meta) == null ? void 0 : _c.title;
      const path = withoutTrailingSlash(route.path || "/");
      const lastSegment = path.split("/").pop();
      return lastSegment ? titleCase(lastSegment) : null;
    });
    const minimalPriority = {
      // give nuxt.config values higher priority
      tagPriority: 101
    };
    useHead({ title: () => title.value }, minimalPriority);
  }
});

function useSchemaOrgConfig() {
  const runtimeConfig = useRuntimeConfig();
  return defu(runtimeConfig["nuxt-schema-org"], {
    scriptAttributes: {}
  });
}

function useSchemaOrg(input) {
  const config = useSchemaOrgConfig();
  const script = {
    type: "application/ld+json",
    key: "schema-org-graph",
    // @ts-expect-error untyped
    nodes: input,
    tagPriority: "high",
    ...config.scriptAttributes
  };
  {
    return useHead({
      script: [script]
    });
  }
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function isPathFile(path) {
  var _a;
  const lastSegment = path.split("/").pop();
  return !!((_a = (lastSegment || path).match(/\.[0-9a-z]+$/i)) == null ? void 0 : _a[0]);
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function useNitroOrigin(e) {
  var _a;
  {
    e = e || useRequestEvent();
    return ((_a = e == null ? void 0 : e.context) == null ? void 0 : _a.siteConfigNitroOrigin) || "";
  }
}

function createSitePathResolver(options = {}) {
  const siteConfig = useSiteConfig();
  const nitroOrigin = useNitroOrigin();
  const nuxtBase = useRuntimeConfig().app.baseURL || "/";
  return (path) => {
    return computed(() => resolveSitePath(unref(path), {
      absolute: unref(options.absolute),
      withBase: unref(options.withBase),
      siteUrl: unref(options.canonical) !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    }));
  };
}
function withSiteUrl(path, options = {}) {
  const siteConfig = useSiteConfig();
  const nitroOrigin = useNitroOrigin();
  const base = useRuntimeConfig().app.baseURL || "/";
  return computed(() => {
    return resolveSitePath(unref(path), {
      absolute: true,
      siteUrl: unref(options.canonical) !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base,
      withBase: unref(options.withBase)
    });
  });
}

function initPlugin(nuxtApp) {
  const head = injectHead();
  const config = useSchemaOrgConfig();
  const route = useRoute();
  const siteConfig = useSiteConfig();
  const resolvePath = createSitePathResolver({
    absolute: false,
    withBase: true
  });
  const resolveUrl = createSitePathResolver({
    canonical: true,
    absolute: true,
    withBase: true
  });
  const schemaOrg = computed(() => {
    var _a;
    const siteConfigResolved = {};
    for (const key in siteConfig) {
      if (key.startsWith("_")) {
        continue;
      }
      siteConfigResolved[key] = toValue(siteConfig[key]);
      if (typeof siteConfigResolved[key] === "object") {
        for (const k in siteConfigResolved[key]) {
          siteConfigResolved[key][k] = toValue(siteConfigResolved[key][k]);
        }
      }
    }
    return {
      ...((_a = route.meta) == null ? void 0 : _a.schemaOrg) || {},
      ...siteConfigResolved,
      url: toValue(resolveUrl(route.path)),
      host: withTrailingSlash(siteConfigResolved.url),
      inLanguage: toValue(siteConfigResolved.currentLocale) || toValue(siteConfigResolved.defaultLocale),
      path: toValue(resolvePath(route.path))
    };
  });
  const templateParamEntry = useHead({
    templateParams: { schemaOrg: schemaOrg.value }
  });
  watch(() => siteConfig, () => {
    templateParamEntry.patch({
      templateParams: { schemaOrg: schemaOrg.value }
    });
  }, { deep: true });
  head.use(
    SchemaOrgUnheadPlugin({}, async () => {
      const meta = {};
      await nuxtApp.hooks.callHook("schema-org:meta", meta);
      return meta;
    }, {
      minify: config.minify,
      trailingSlash: siteConfig.trailingSlash
    })
  );
}
function maybeAddIdentitySchemaOrg() {
  const config = useSchemaOrgConfig();
  const siteConfig = useSiteConfig({
    resolveRefs: true
  });
  if (config.identity || siteConfig.identity) {
    const identity = config.identity || siteConfig.identity;
    let identityPayload = {
      name: () => toValue(siteConfig.name),
      url: () => toValue(siteConfig.url)
    };
    let identityType;
    if (typeof identity !== "string") {
      identityPayload = {
        ...identityPayload,
        ...identity
      };
      identityType = identity.type;
      delete identityPayload.type;
    } else {
      identityType = identity;
    }
    if (siteConfig.twitter) {
      const id = siteConfig.twitter.startsWith("@") ? siteConfig.twitter.slice(1) : siteConfig.twitter;
      identityPayload.sameAs = [
        `https://twitter.com/${id}`
      ];
    }
    identityPayload._resolver = identityPayload._resolver || camelCase(identityType);
    useSchemaOrg([identityPayload]);
  }
}

const defaults_ZjgoYqsIrjWNaJMfDhci2B0eoNnvY4CDsoscm0L1fE0 = defineNuxtPlugin({
  name: "nuxt-schema-org:defaults",
  dependsOn: [
    "nuxt-schema-org:init"
  ],
  setup() {
    var _a;
    const error = useError();
    if ((_a = error.value) == null ? void 0 : _a.error) {
      return;
    }
    const siteConfig = useSiteConfig();
    useSchemaOrg([
      defineWebSite({
        name: () => toValue(siteConfig.name) || "",
        inLanguage: () => toValue(siteConfig.currentLocale) || "",
        description: () => toValue(siteConfig.description) || ""
      }),
      defineWebPage()
    ]);
    maybeAddIdentitySchemaOrg();
  }
});

const init_Ks1wcI1vuv3K3FXG7iAYRqIWlPli19G_eByed0tsXe0 = defineNuxtPlugin({
  name: "nuxt-schema-org:init",
  setup(nuxtApp) {
    initPlugin(nuxtApp);
  }
});

const componentNames = [{ "hash": "MlnXt-4pSsc-S0S-NyO1mjaxwp9hRjHjCY9kvDedhdQ", "pascalName": "BrandedLogo", "kebabName": "branded-logo", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }, { "hash": "fpeX9mEOdoiwmgFVE7hebxqWjsIhD1kTbNd-q3hCd44", "pascalName": "Frame", "kebabName": "frame", "category": "community", "credits": "@arashsheyda <https://github.com/arashsheyda>" }, { "hash": "iEMfMtE3Z-GRD7M8UdLMA8z5kz-STiQ6hixM09D2-dU", "pascalName": "Nuxt", "kebabName": "nuxt", "category": "community", "credits": "NuxtLabs <https://nuxtlabs.com/>" }, { "hash": "OPSMK5e1Mj-B-KLuoxjOG3CTzYq1s5ld-uvugb--Fog", "pascalName": "NuxtSeo", "kebabName": "nuxt-seo", "category": "community", "credits": "Nuxt SEO <https://nuxtseo.com/>" }, { "hash": "9zhUtkB6optlrF0l5DEhgmR2EaIfGQP-Opy1PHC-ea0", "pascalName": "Pergel", "kebabName": "pergel", "category": "community", "credits": "Pergel <https://nuxtlabs.com/>" }, { "hash": "elBNvk6E8lXN8E9YywMD9ZKEiLvF8lfcfuj7SBFp5UI", "pascalName": "SimpleBlog", "kebabName": "simple-blog", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }, { "hash": "NZaFkzgYlwbuyTVFd6EHH-xQWdLAvf9XnrhiwGpu4Sg", "pascalName": "UnJs", "kebabName": "un-js", "category": "community", "credits": "UnJS <https://unjs.io/>" }, { "hash": "QXHbDpwVYCs3sUZl2lD4T9ynY6wsyAvK7oqRs1B0wsI", "pascalName": "Wave", "kebabName": "wave", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }, { "hash": "6osD1f2PCUicjON4dfrsnxhXzikrQ0yfi43nndOjEuY", "pascalName": "WithEmoji", "kebabName": "with-emoji", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }];

function isInternalRoute(path) {
  return path.startsWith("/_") || path.startsWith("@");
}
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "fonts",
    "alt",
    "props",
    "renderer",
    "html",
    "component",
    "renderer",
    "emojis",
    "_query",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "cacheMaxAgeSeconds"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = val;
  });
  return {
    ...Object.fromEntries(
      Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
    ),
    props
  };
}
function withoutQuery(path) {
  return path.split("?")[0];
}
function getExtension(path) {
  path = withoutQuery(path);
  const lastSegment = path.split("/").pop() || path;
  return lastSegment.split(".").pop() || lastSegment;
}

function generateMeta(url, resolvedOptions) {
  let urlExtension = getExtension(url) || resolvedOptions.extension;
  if (urlExtension === "jpg")
    urlExtension = "jpeg";
  const meta = [
    { property: "og:image", content: url },
    { property: "og:image:type", content: `image/${urlExtension}` },
    { name: "twitter:card", content: "summary_large_image" },
    // we don't need this but avoids issue when using useSeoMeta({ twitterImage })
    { name: "twitter:image", content: url },
    { name: "twitter:image:src", content: url }
  ];
  if (resolvedOptions.width) {
    meta.push({ property: "og:image:width", content: resolvedOptions.width });
    meta.push({ name: "twitter:image:width", content: resolvedOptions.width });
  }
  if (resolvedOptions.height) {
    meta.push({ property: "og:image:height", content: resolvedOptions.height });
    meta.push({ name: "twitter:image:height", content: resolvedOptions.height });
  }
  if (resolvedOptions.alt) {
    meta.push({ property: "og:image:alt", content: resolvedOptions.alt });
    meta.push({ name: "twitter:image:alt", content: resolvedOptions.alt });
  }
  return meta;
}
function getOgImagePath(pagePath, _options) {
  const baseURL = useRuntimeConfig().app.baseURL;
  const options = defu(_options, useOgImageRuntimeConfig().defaults);
  const path = joinURL("/", baseURL, `__og-image__/${"image"}`, pagePath, `og.${options.extension}`);
  if (Object.keys(options._query || {}).length) {
    return withQuery(path, options._query);
  }
  return path;
}
function useOgImageRuntimeConfig() {
  const c = useRuntimeConfig();
  return {
    ...c["nuxt-og-image"],
    app: {
      baseURL: c.app.baseURL
    }
  };
}

function createOgImageMeta(src, input, resolvedOptions, ssrContext) {
  const _input = separateProps(defu(input, ssrContext._ogImagePayload));
  let url = src || input.url || resolvedOptions.url;
  if (!url)
    return;
  if (input._query && Object.keys(input._query).length && url)
    url = withQuery(url, { _query: input._query });
  const meta = generateMeta(url, resolvedOptions);
  ssrContext._ogImageInstances = ssrContext._ogImageInstances || [];
  const script = [];
  if (src) {
    script.push({
      id: "nuxt-og-image-options",
      type: "application/json",
      processTemplateParams: true,
      innerHTML: () => {
        const payload = resolveUnrefHeadInput(_input);
        if (typeof payload.props.title === "undefined")
          payload.props.title = "%s";
        delete payload.url;
        if (payload._query && Object.keys(payload._query).length === 0) {
          delete payload._query;
        }
        return stringify(payload);
      },
      // we want this to be last in our head
      tagPosition: "bodyClose"
    });
  }
  const instance = useHead({
    script,
    meta
  }, {
    tagPriority: "high"
  });
  ssrContext._ogImagePayload = _input;
  ssrContext._ogImageInstances.push(instance);
}
function normaliseOptions(_options) {
  var _a;
  const options = { ...unref(_options) };
  if (!options)
    return options;
  if (options.component && componentNames) {
    const originalName = options.component;
    for (const component of componentNames) {
      if (component.pascalName.endsWith(originalName) || component.kebabName.endsWith(originalName)) {
        options.component = component.pascalName;
        break;
      }
    }
  } else if (!options.component) {
    options.component = (_a = componentNames[0]) == null ? void 0 : _a.pascalName;
  }
  return options;
}

function ogImageCanonicalUrls(nuxtApp) {
  nuxtApp.hooks.hook("app:rendered", async (ctx) => {
    const { ssrContext } = ctx;
    const e = useRequestEvent();
    const path = parseURL(e.path).pathname;
    if (isInternalRoute(path))
      return;
    ssrContext == null ? void 0 : ssrContext.head.use({
      key: "nuxt-og-image:overrides-and-canonical-urls",
      hooks: {
        "tags:resolve": async (ctx2) => {
          var _a;
          const hasPrimaryPayload = ctx2.tags.some((tag) => tag.tag === "script" && tag.props.id === "nuxt-og-image-options");
          let overrides;
          for (const tag of ctx2.tags) {
            if (tag.tag === "script" && tag.props.id === "nuxt-og-image-overrides") {
              if (hasPrimaryPayload) {
                overrides = separateProps(parse(tag.innerHTML || "{}"));
                delete ctx2.tags[ctx2.tags.indexOf(tag)];
              } else {
                tag.props.id = "nuxt-og-image-options";
                tag.innerHTML = stringify(separateProps(parse(tag.innerHTML || "{}")));
                tag._d = "script:id:nuxt-og-image-options";
              }
              break;
            }
          }
          ctx2.tags = ctx2.tags.filter(Boolean);
          for (const tag of ctx2.tags) {
            if (tag.tag === "meta" && (tag.props.property === "og:image" || ["twitter:image:src", "twitter:image"].includes(tag.props.name))) {
              if (!tag.props.content) {
                tag.props = {};
                continue;
              }
              if (!((_a = tag.props.content) == null ? void 0 : _a.startsWith("https"))) {
                await nuxtApp.runWithContext(() => {
                  tag.props.content = toValue(withSiteUrl(tag.props.content, {
                    withBase: true
                  }));
                });
              }
            } else if (overrides && tag.tag === "script" && tag.props.id === "nuxt-og-image-options") {
              tag.innerHTML = stringify(defu(overrides, parse(tag.innerHTML)));
            }
          }
        }
      }
    });
  });
}
function routeRuleOgImage(nuxtApp) {
  nuxtApp.hooks.hook("app:rendered", async (ctx) => {
    var _a, _b, _c, _d, _e, _f;
    const { ssrContext } = ctx;
    const e = useRequestEvent();
    const path = parseURL(e.path).pathname;
    if (isInternalRoute(path))
      return;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: (_b = (_a = ssrContext == null ? void 0 : ssrContext.runtimeConfig) == null ? void 0 : _a.nitro) == null ? void 0 : _b.routeRules })
    );
    let routeRules = defu({}, ..._routeRulesMatcher.matchAll(
      withoutBase(path.split("?")[0], (_c = ssrContext == null ? void 0 : ssrContext.runtimeConfig) == null ? void 0 : _c.app.baseURL)
    ).reverse()).ogImage;
    if (typeof routeRules === "undefined")
      return;
    const ogImageInstances = nuxtApp.ssrContext._ogImageInstances || [];
    if (routeRules === false) {
      ogImageInstances == null ? void 0 : ogImageInstances.forEach((e2) => {
        e2.dispose();
      });
      nuxtApp.ssrContext._ogImagePayload = void 0;
      nuxtApp.ssrContext._ogImageInstances = void 0;
      return;
    }
    const { defaults } = useOgImageRuntimeConfig();
    routeRules = normaliseOptions(defu((_f = (_e = (_d = nuxtApp.ssrContext) == null ? void 0 : _d.event.context._nitro) == null ? void 0 : _e.routeRules) == null ? void 0 : _f.ogImage, routeRules, {
      component: defaults.component
    }));
    const resolvedOptions = normaliseOptions(defu(routeRules, defaults));
    const src = getOgImagePath(ssrContext.url, resolvedOptions);
    createOgImageMeta(src, routeRules, resolvedOptions, nuxtApp.ssrContext);
  });
}

const og_image_canonical_urls_server_2uCBKzWxjEK91fSFBdBNPEWilWXRzR66cHJvjIi4FGA = defineNuxtPlugin({
  setup: ogImageCanonicalUrls
});

const route_rule_og_image_server_yrHfzNQxtCKZyHaGhWqsbaa4V0Y5WoBOo3_wqkmh41k = defineNuxtPlugin({
  setup: routeRuleOgImage
});

const robot_meta_server_bRHpso_4KN_Ec3RJzqCvbuvfZsNOeE_4TgpL8dCNuwk = defineNuxtPlugin({
  setup() {
    var _a;
    const event = useRequestEvent();
    const ctx = (_a = event == null ? void 0 : event.context) == null ? void 0 : _a.robots;
    if (!ctx)
      return;
    useHead({
      meta: [
        {
          "name": "robots",
          "content": () => ctx.rule || "",
          "data-hint": () => void 0
        }
      ]
    });
  }
});

var iconRegistry = {};
var iconRequests = {};
function createThemePlugin(theme, icons, iconLoaderUrl, iconLoader) {
  if (icons) {
    Object.assign(iconRegistry, icons);
  }
  const themePlugin = function themePlugin2(node) {
    var _a, _b;
    node.addProps(["iconLoader", "iconLoaderUrl"]);
    node.props.iconHandler = createIconHandler(
      ((_a = node.props) == null ? void 0 : _a.iconLoader) ? node.props.iconLoader : iconLoader,
      ((_b = node.props) == null ? void 0 : _b.iconLoaderUrl) ? node.props.iconLoaderUrl : iconLoaderUrl
    );
    loadIconPropIcons(node, node.props.iconHandler);
    node.on("created", () => {
      var _a2, _b2;
      if ((_a2 = node == null ? void 0 : node.context) == null ? void 0 : _a2.handlers) {
        node.context.handlers.iconClick = (sectionKey) => {
          const clickHandlerProp = `on${sectionKey.charAt(0).toUpperCase()}${sectionKey.slice(1)}IconClick`;
          const handlerFunction = node.props[clickHandlerProp];
          if (handlerFunction && typeof handlerFunction === "function") {
            return (e) => {
              return handlerFunction(node, e);
            };
          }
          return void 0;
        };
      }
      if ((_b2 = node == null ? void 0 : node.context) == null ? void 0 : _b2.fns) {
        node.context.fns.iconRole = (sectionKey) => {
          const clickHandlerProp = `on${sectionKey.charAt(0).toUpperCase()}${sectionKey.slice(1)}IconClick`;
          return typeof node.props[clickHandlerProp] === "function" ? "button" : null;
        };
      }
    });
  };
  themePlugin.iconHandler = createIconHandler(iconLoader, iconLoaderUrl);
  return themePlugin;
}
function createIconHandler(iconLoader, iconLoaderUrl) {
  return (iconName) => {
    if (typeof iconName !== "string")
      return;
    if (iconName.startsWith("<svg")) {
      return iconName;
    }
    const isDefault = iconName.startsWith("default:");
    iconName = isDefault ? iconName.split(":")[1] : iconName;
    const iconWasAlreadyLoaded = iconName in iconRegistry;
    let loadedIcon = void 0;
    if (iconWasAlreadyLoaded) {
      return iconRegistry[iconName];
    } else if (!iconRequests[iconName]) {
      loadedIcon = getIconFromStylesheet();
      loadedIcon = loadedIcon;
      if (loadedIcon instanceof Promise) {
        iconRequests[iconName] = loadedIcon.then((iconValue) => {
          if (!iconValue && typeof iconName === "string" && !isDefault) {
            return loadedIcon = typeof iconLoader === "function" ? iconLoader(iconName) : getRemoteIcon(iconName, iconLoaderUrl);
          }
          return iconValue;
        }).then((finalIcon) => {
          if (typeof iconName === "string") {
            iconRegistry[isDefault ? `default:${iconName}` : iconName] = finalIcon;
          }
          return finalIcon;
        });
      } else if (typeof loadedIcon === "string") {
        iconRegistry[isDefault ? `default:${iconName}` : iconName] = loadedIcon;
        return loadedIcon;
      }
    }
    return iconRequests[iconName];
  };
}
function getIconFromStylesheet(iconName) {
  return;
}
function getRemoteIcon(iconName, iconLoaderUrl) {
  const formkitVersion = FORMKIT_VERSION.startsWith("__") ? "latest" : FORMKIT_VERSION;
  typeof iconLoaderUrl === "function" ? iconLoaderUrl(iconName) : `https://cdn.jsdelivr.net/npm/@formkit/icons@${formkitVersion}/dist/icons/${iconName}.svg`;
  return void 0;
}
function loadIconPropIcons(node, iconHandler) {
  const iconRegex = /^[a-zA-Z-]+(?:-icon|Icon)$/;
  const iconProps = Object.keys(node.props).filter((prop) => {
    return iconRegex.test(prop);
  });
  iconProps.forEach((sectionKey) => {
    return loadPropIcon(node, iconHandler, sectionKey);
  });
}
function loadPropIcon(node, iconHandler, sectionKey) {
  const iconName = node.props[sectionKey];
  const loadedIcon = iconHandler(iconName);
  const rawIconProp = `_raw${sectionKey.charAt(0).toUpperCase()}${sectionKey.slice(1)}`;
  const clickHandlerProp = `on${sectionKey.charAt(0).toUpperCase()}${sectionKey.slice(1)}Click`;
  node.addProps([rawIconProp, clickHandlerProp]);
  node.on(`prop:${sectionKey}`, reloadIcon);
  if (loadedIcon instanceof Promise) {
    return loadedIcon.then((svg) => {
      node.props[rawIconProp] = svg;
    });
  } else {
    node.props[rawIconProp] = loadedIcon;
  }
  return;
}
function reloadIcon(event) {
  var _a;
  const node = event.origin;
  const iconName = event.payload;
  const iconHandler = (_a = node == null ? void 0 : node.props) == null ? void 0 : _a.iconHandler;
  const sectionKey = event.name.split(":")[1];
  const rawIconProp = `_raw${sectionKey.charAt(0).toUpperCase()}${sectionKey.slice(1)}`;
  if (iconHandler && typeof iconHandler === "function") {
    const loadedIcon = iconHandler(iconName);
    if (loadedIcon instanceof Promise) {
      return loadedIcon.then((svg) => {
        node.props[rawIconProp] = svg;
      });
    } else {
      node.props[rawIconProp] = loadedIcon;
    }
  }
}

var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var vueBindings, bindings_default;
var init_bindings = __esm({
  "packages/vue/src/bindings.ts"() {
    vueBindings = function vueBindings2(node) {
      node.ledger.count("blocking", (m) => m.blocking);
      const isValid = ref(!node.ledger.value("blocking"));
      node.ledger.count("errors", (m) => m.type === "error");
      const hasErrors = ref(!!node.ledger.value("errors"));
      let hasTicked = false;
      nextTick(() => {
        hasTicked = true;
      });
      const availableMessages = reactive(
        node.store.reduce((store, message3) => {
          if (message3.visible) {
            store[message3.key] = message3;
          }
          return store;
        }, {})
      );
      const validationVisibility = ref(
        node.props.validationVisibility || (node.props.type === "checkbox" ? "dirty" : "blur")
      );
      node.on("prop:validationVisibility", ({ payload }) => {
        validationVisibility.value = payload;
      });
      const hasShownErrors = ref(validationVisibility.value === "live");
      const isRequired = ref(false);
      const checkForRequired = (parsedRules) => {
        isRequired.value = (parsedRules ?? []).some(
          (rule) => rule.name === "required"
        );
      };
      checkForRequired(node.props.parsedRules);
      node.on("prop:parsedRules", ({ payload }) => checkForRequired(payload));
      const items = ref(node.children.map((child) => child.uid));
      const validationVisible = computed(() => {
        if (!context.state)
          return false;
        if (context.state.submitted)
          return true;
        if (!hasShownErrors.value && !context.state.settled) {
          return false;
        }
        switch (validationVisibility.value) {
          case "live":
            return true;
          case "blur":
            return context.state.blurred;
          case "dirty":
            return context.state.dirty;
          default:
            return false;
        }
      });
      const isInvalid = computed(() => {
        return context.state.failing && validationVisible.value;
      });
      const isComplete = computed(() => {
        return context && hasValidation.value ? isValid.value && !hasErrors.value : context.state.dirty && !empty(context.value);
      });
      const hasValidation = ref(
        Array.isArray(node.props.parsedRules) && node.props.parsedRules.length > 0
      );
      node.on("prop:parsedRules", ({ payload: rules }) => {
        hasValidation.value = Array.isArray(rules) && rules.length > 0;
      });
      const messages3 = computed(() => {
        const visibleMessages = {};
        for (const key in availableMessages) {
          const message3 = availableMessages[key];
          if (message3.type !== "validation" || validationVisible.value) {
            visibleMessages[key] = message3;
          }
        }
        return visibleMessages;
      });
      const ui = reactive(
        node.store.reduce((messages4, message3) => {
          if (message3.type === "ui" && message3.visible)
            messages4[message3.key] = message3;
          return messages4;
        }, {})
      );
      const passing = computed(() => !context.state.failing);
      const cachedClasses = reactive({});
      const classes2 = new Proxy(cachedClasses, {
        get(...args) {
          if (!node)
            return "";
          const [target, property] = args;
          let className = Reflect.get(...args);
          if (!className && typeof property === "string") {
            if (!has(target, property) && !property.startsWith("__v")) {
              const observedNode = createObserver(node);
              observedNode.watch((node2) => {
                const rootClasses = typeof node2.config.rootClasses === "function" ? node2.config.rootClasses(property, node2) : {};
                const globalConfigClasses = node2.config.classes ? createClasses(property, node2, node2.config.classes[property]) : {};
                const classesPropClasses = createClasses(
                  property,
                  node2,
                  node2.props[`_${property}Class`]
                );
                const sectionPropClasses = createClasses(
                  property,
                  node2,
                  node2.props[`${property}Class`]
                );
                className = generateClassList(
                  node2,
                  property,
                  rootClasses,
                  globalConfigClasses,
                  classesPropClasses,
                  sectionPropClasses
                );
                target[property] = className ?? "";
              });
            }
          }
          return className;
        }
      });
      node.on("prop:rootClasses", () => {
        const keys = Object.keys(cachedClasses);
        for (const key of keys) {
          delete cachedClasses[key];
        }
      });
      const describedBy = computed(() => {
        if (!node)
          return void 0;
        const describers = [];
        if (context.help) {
          describers.push(`help-${node.props.id}`);
        }
        for (const key in messages3.value) {
          describers.push(`${node.props.id}-${key}`);
        }
        return describers.length ? describers.join(" ") : void 0;
      });
      const value = ref(node.value);
      const _value = ref(node.value);
      const context = reactive({
        _value,
        attrs: node.props.attrs,
        disabled: node.props.disabled,
        describedBy,
        fns: {
          length: (obj) => Object.keys(obj).length,
          number: (value2) => Number(value2),
          string: (value2) => String(value2),
          json: (value2) => JSON.stringify(value2),
          eq
        },
        handlers: {
          blur: (e) => {
            if (!node)
              return;
            node.store.set(
              /* @__PURE__ */ createMessage({ key: "blurred", visible: false, value: true })
            );
            if (typeof node.props.attrs.onBlur === "function") {
              node.props.attrs.onBlur(e);
            }
          },
          touch: () => {
            var _a;
            const doCompare = context.dirtyBehavior === "compare";
            if (((_a = node.store.dirty) == null ? void 0 : _a.value) && !doCompare)
              return;
            const isDirty = !eq(node.props._init, node._value);
            if (!isDirty && !doCompare)
              return;
            node.store.set(
              /* @__PURE__ */ createMessage({ key: "dirty", visible: false, value: isDirty })
            );
          },
          DOMInput: (e) => {
            node.input(e.target.value);
            node.emit("dom-input-event", e);
          }
        },
        help: node.props.help,
        id: node.props.id,
        items,
        label: node.props.label,
        messages: messages3,
        didMount: false,
        node: markRaw(node),
        options: node.props.options,
        defaultMessagePlacement: true,
        slots: node.props.__slots,
        state: {
          blurred: false,
          complete: isComplete,
          dirty: false,
          empty: empty(value),
          submitted: false,
          settled: node.isSettled,
          valid: isValid,
          invalid: isInvalid,
          errors: hasErrors,
          rules: hasValidation,
          validationVisible,
          required: isRequired,
          failing: false,
          passing
        },
        type: node.props.type,
        family: node.props.family,
        ui,
        value,
        classes: classes2
      });
      node.on("created", () => {
        if (!eq(context.value, node.value)) {
          _value.value = node.value;
          value.value = node.value;
          triggerRef(value);
          triggerRef(_value);
        }
        (async () => {
          await node.settled;
          if (node)
            node.props._init = cloneAny(node.value);
        })();
      });
      node.on("mounted", () => {
        context.didMount = true;
      });
      node.on("settled", ({ payload: isSettled }) => {
        context.state.settled = isSettled;
      });
      function observeProps(observe) {
        const propNames = Array.isArray(observe) ? observe : Object.keys(observe);
        propNames.forEach((prop) => {
          prop = camel(prop);
          if (!has(context, prop)) {
            context[prop] = node.props[prop];
          }
          node.on(`prop:${prop}`, ({ payload }) => {
            context[prop] = payload;
          });
        });
      }
      const rootProps = () => {
        const props = [
          "__root",
          "help",
          "label",
          "disabled",
          "options",
          "type",
          "attrs",
          "preserve",
          "preserveErrors",
          "id",
          "dirtyBehavior"
        ];
        const iconPattern = /^[a-zA-Z-]+(?:-icon|Icon)$/;
        const matchingProps = Object.keys(node.props).filter((prop) => {
          return iconPattern.test(prop);
        });
        return props.concat(matchingProps);
      };
      observeProps(rootProps());
      function definedAs(definition3) {
        if (definition3.props)
          observeProps(definition3.props);
      }
      node.props.definition && definedAs(node.props.definition);
      node.on("added-props", ({ payload }) => observeProps(payload));
      node.on("input", ({ payload }) => {
        if (node.type !== "input" && !isRef(payload) && !isReactive(payload)) {
          _value.value = shallowClone(payload);
        } else {
          _value.value = payload;
          triggerRef(_value);
        }
      });
      node.on("commitRaw", ({ payload }) => {
        if (node.type !== "input" && !isRef(payload) && !isReactive(payload)) {
          value.value = _value.value = shallowClone(payload);
        } else {
          value.value = _value.value = payload;
          triggerRef(value);
        }
        node.emit("modelUpdated");
      });
      node.on("commit", ({ payload }) => {
        var _a;
        if ((!context.state.dirty || context.dirtyBehavior === "compare") && node.isCreated && hasTicked) {
          if (!((_a = node.store.validating) == null ? void 0 : _a.value)) {
            context.handlers.touch();
          } else {
            const receipt = node.on("message-removed", ({ payload: message3 }) => {
              if (message3.key === "validating") {
                context.handlers.touch();
                node.off(receipt);
              }
            });
          }
        }
        if (isComplete && node.type === "input" && hasErrors.value && !undefine(node.props.preserveErrors)) {
          node.store.filter(
            (message3) => {
              var _a2;
              return !(message3.type === "error" && ((_a2 = message3.meta) == null ? void 0 : _a2.autoClear) === true);
            }
          );
        }
        if (node.type === "list" && node.sync) {
          items.value = node.children.map((child) => child.uid);
        }
        context.state.empty = empty(payload);
      });
      const updateState = async (message3) => {
        if (message3.type === "ui" && message3.visible && !message3.meta.showAsMessage) {
          ui[message3.key] = message3;
        } else if (message3.visible) {
          availableMessages[message3.key] = message3;
        } else if (message3.type === "state") {
          context.state[message3.key] = !!message3.value;
        }
      };
      node.on("message-added", (e) => updateState(e.payload));
      node.on("message-updated", (e) => updateState(e.payload));
      node.on("message-removed", ({ payload: message3 }) => {
        delete ui[message3.key];
        delete availableMessages[message3.key];
        delete context.state[message3.key];
      });
      node.on("settled:blocking", () => {
        isValid.value = true;
      });
      node.on("unsettled:blocking", () => {
        isValid.value = false;
      });
      node.on("settled:errors", () => {
        hasErrors.value = false;
      });
      node.on("unsettled:errors", () => {
        hasErrors.value = true;
      });
      watch(validationVisible, (value2) => {
        if (value2) {
          hasShownErrors.value = true;
        }
      });
      node.context = context;
      node.emit("context", node, false);
      node.on("destroyed", () => {
        node.context = void 0;
        node = null;
      });
    };
    bindings_default = vueBindings;
  }
});
var defaultConfig_exports = {};
__export(defaultConfig_exports, {
  defaultConfig: () => defaultConfig
});
var defaultConfig;
var init_defaultConfig = __esm({
  "packages/vue/src/defaultConfig.ts"() {
    init_bindings();
    defaultConfig = (options = {}) => {
      register();
      const {
        rules = {},
        locales = {},
        inputs: inputs$1 = {},
        messages: messages3 = {},
        locale = void 0,
        theme = void 0,
        iconLoaderUrl = void 0,
        iconLoader = void 0,
        icons = {},
        ...nodeOptions
      } = options;
      const validation = createValidationPlugin({
        ...defaultRules,
        ...rules || {}
      });
      const i18n = createI18nPlugin(
        extend({ en: en$1, ...locales || {} }, messages3)
      );
      const library = createLibraryPlugin(inputs, inputs$1);
      const themePlugin = createThemePlugin(theme, icons, iconLoaderUrl, iconLoader);
      return extend(
        {
          plugins: [library, themePlugin, bindings_default, i18n, validation],
          ...!locale ? {} : { config: { locale } }
        },
        nodeOptions || {},
        true
      );
    };
  }
});
var ssrCompleteRegistry = /* @__PURE__ */ new Map();
function ssrComplete(app) {
  const callbacks = ssrCompleteRegistry.get(app);
  if (!callbacks)
    return;
  for (const callback of callbacks) {
    callback();
  }
  callbacks.clear();
  ssrCompleteRegistry.delete(app);
}
function onSSRComplete(app, callback) {
  var _a;
  if (!app)
    return;
  if (!ssrCompleteRegistry.has(app))
    ssrCompleteRegistry.set(app, /* @__PURE__ */ new Set());
  (_a = ssrCompleteRegistry.get(app)) == null ? void 0 : _a.add(callback);
}
var memo = {};
var memoKeys = {};
var instanceKey;
var instanceScopes = /* @__PURE__ */ new WeakMap();
var raw = "__raw__";
var isClassProp = /[a-zA-Z0-9\-][cC]lass$/;
function getRef(token3, data) {
  const value = ref(null);
  if (token3 === "get") {
    const nodeRefs = {};
    value.value = get$1.bind(null, nodeRefs);
    return value;
  }
  const path = token3.split(".");
  watchEffect(() => {
    value.value = getValue(
      isRef(data) ? data.value : data,
      path
    );
  });
  return value;
}
function getValue(set, path) {
  if (Array.isArray(set)) {
    for (const subset of set) {
      const value = subset !== false && getValue(subset, path);
      if (value !== void 0)
        return value;
    }
    return void 0;
  }
  let foundValue = void 0;
  let obj = set;
  for (const i in path) {
    const key = path[i];
    if (typeof obj !== "object" || obj === null) {
      foundValue = void 0;
      break;
    }
    const currentValue = obj[key];
    if (Number(i) === path.length - 1 && currentValue !== void 0) {
      foundValue = typeof currentValue === "function" ? currentValue.bind(obj) : currentValue;
      break;
    }
    obj = currentValue;
  }
  return foundValue;
}
function get$1(nodeRefs, id) {
  if (typeof id !== "string")
    return warn(650);
  if (!(id in nodeRefs))
    nodeRefs[id] = ref(void 0);
  if (nodeRefs[id].value === void 0) {
    nodeRefs[id].value = null;
    const root = getNode(id);
    if (root)
      nodeRefs[id].value = root.context;
    watchRegistry(id, ({ payload: node }) => {
      nodeRefs[id].value = isNode(node) ? node.context : node;
    });
  }
  return nodeRefs[id].value;
}
function parseSchema(library, schema, memoKey) {
  function parseCondition(library2, node) {
    const condition = provider(compile(node.if), { if: true });
    const children = createElements(library2, node.then);
    const alternate = node.else ? createElements(library2, node.else) : null;
    return [condition, children, alternate];
  }
  function parseConditionAttr(attr, _default) {
    var _a, _b;
    const condition = provider(compile(attr.if));
    let b = () => _default;
    let a = () => _default;
    if (typeof attr.then === "object") {
      a = parseAttrs(attr.then, void 0);
    } else if (typeof attr.then === "string" && ((_a = attr.then) == null ? void 0 : _a.startsWith("$"))) {
      a = provider(compile(attr.then));
    } else {
      a = () => attr.then;
    }
    if (has(attr, "else")) {
      if (typeof attr.else === "object") {
        b = parseAttrs(attr.else);
      } else if (typeof attr.else === "string" && ((_b = attr.else) == null ? void 0 : _b.startsWith("$"))) {
        b = provider(compile(attr.else));
      } else {
        b = () => attr.else;
      }
    }
    return () => condition() ? a() : b();
  }
  function parseAttrs(unparsedAttrs, bindExp, _default = {}) {
    const explicitAttrs = new Set(Object.keys(unparsedAttrs || {}));
    const boundAttrs = bindExp ? provider(compile(bindExp)) : () => ({});
    const setters = [
      (attrs) => {
        const bound = boundAttrs();
        for (const attr in bound) {
          if (!explicitAttrs.has(attr)) {
            attrs[attr] = bound[attr];
          }
        }
      }
    ];
    if (unparsedAttrs) {
      if (isConditional(unparsedAttrs)) {
        const condition = parseConditionAttr(
          unparsedAttrs,
          _default
        );
        return condition;
      }
      for (let attr in unparsedAttrs) {
        const value = unparsedAttrs[attr];
        let getValue2;
        const isStr = typeof value === "string";
        if (attr.startsWith(raw)) {
          attr = attr.substring(7);
          getValue2 = () => value;
        } else if (isStr && value.startsWith("$") && value.length > 1 && !(value.startsWith("$reset") && isClassProp.test(attr))) {
          getValue2 = provider(compile(value));
        } else if (typeof value === "object" && isConditional(value)) {
          getValue2 = parseConditionAttr(value, void 0);
        } else if (typeof value === "object" && isPojo(value)) {
          getValue2 = parseAttrs(value);
        } else {
          getValue2 = () => value;
        }
        setters.push((attrs) => {
          attrs[attr] = getValue2();
        });
      }
    }
    return () => {
      const attrs = Array.isArray(unparsedAttrs) ? [] : {};
      setters.forEach((setter) => setter(attrs));
      return attrs;
    };
  }
  function parseNode(library2, _node) {
    let element = null;
    let attrs = () => null;
    let condition = false;
    let children = null;
    let alternate = null;
    let iterator = null;
    let resolve = false;
    const node = sugar(_node);
    if (isDOM(node)) {
      element = node.$el;
      attrs = node.$el !== "text" ? parseAttrs(node.attrs, node.bind) : () => null;
    } else if (isComponent(node)) {
      if (typeof node.$cmp === "string") {
        if (has(library2, node.$cmp)) {
          element = library2[node.$cmp];
        } else {
          element = node.$cmp;
          resolve = true;
        }
      } else {
        element = node.$cmp;
      }
      attrs = parseAttrs(node.props, node.bind);
    } else if (isConditional(node)) {
      [condition, children, alternate] = parseCondition(library2, node);
    }
    if (!isConditional(node) && "if" in node) {
      condition = provider(compile(node.if));
    } else if (!isConditional(node) && element === null) {
      condition = () => true;
    }
    if ("children" in node && node.children) {
      if (typeof node.children === "string") {
        if (node.children.startsWith("$slots.")) {
          element = element === "text" ? "slot" : element;
          children = provider(compile(node.children));
        } else if (node.children.startsWith("$") && node.children.length > 1) {
          const value = provider(compile(node.children));
          children = () => String(value());
        } else {
          children = () => String(node.children);
        }
      } else if (Array.isArray(node.children)) {
        children = createElements(library2, node.children);
      } else {
        const [childCondition, c, a] = parseCondition(library2, node.children);
        children = (iterationData) => childCondition && childCondition() ? c && c(iterationData) : a && a(iterationData);
      }
    }
    if (isComponent(node)) {
      if (children) {
        const produceChildren = children;
        children = (iterationData) => {
          return {
            default(slotData2, key) {
              var _a, _b, _c, _d;
              const currentKey = instanceKey;
              if (key)
                instanceKey = key;
              if (slotData2)
                (_a = instanceScopes.get(instanceKey)) == null ? void 0 : _a.unshift(slotData2);
              if (iterationData)
                (_b = instanceScopes.get(instanceKey)) == null ? void 0 : _b.unshift(iterationData);
              const c = produceChildren(iterationData);
              if (slotData2)
                (_c = instanceScopes.get(instanceKey)) == null ? void 0 : _c.shift();
              if (iterationData)
                (_d = instanceScopes.get(instanceKey)) == null ? void 0 : _d.shift();
              instanceKey = currentKey;
              return c;
            }
          };
        };
        children.slot = true;
      } else {
        children = () => ({});
      }
    }
    if ("for" in node && node.for) {
      const values = node.for.length === 3 ? node.for[2] : node.for[1];
      const getValues = typeof values === "string" && values.startsWith("$") ? provider(compile(values)) : () => values;
      iterator = [
        getValues,
        node.for[0],
        node.for.length === 3 ? String(node.for[1]) : null
      ];
    }
    return [condition, element, attrs, children, alternate, iterator, resolve];
  }
  function createSlots(children, iterationData) {
    const slots = children(iterationData);
    const currentKey = instanceKey;
    return Object.keys(slots).reduce((allSlots, slotName) => {
      const slotFn = slots && slots[slotName];
      allSlots[slotName] = (data) => {
        return slotFn && slotFn(data, currentKey) || null;
      };
      return allSlots;
    }, {});
  }
  function createElement(library2, node) {
    const [condition, element, attrs, children, alternate, iterator, resolve] = parseNode(library2, node);
    let createNodes = (iterationData) => {
      if (condition && element === null && children) {
        return condition() ? children(iterationData) : alternate && alternate(iterationData);
      }
      if (element && (!condition || condition())) {
        if (element === "text" && children) {
          return createTextVNode(String(children()));
        }
        if (element === "slot" && children)
          return children(iterationData);
        const el = resolve ? resolveComponent(element) : element;
        const slots = (children == null ? void 0 : children.slot) ? createSlots(children, iterationData) : null;
        return h(
          el,
          attrs(),
          slots || (children ? children(iterationData) : [])
        );
      }
      return typeof alternate === "function" ? alternate(iterationData) : alternate;
    };
    if (iterator) {
      const repeatedNode = createNodes;
      const [getValues, valueName, keyName] = iterator;
      createNodes = () => {
        const _v = getValues();
        const values = Number.isFinite(_v) ? Array(Number(_v)).fill(0).map((_, i) => i) : _v;
        const fragment = [];
        if (typeof values !== "object")
          return null;
        const instanceScope = instanceScopes.get(instanceKey) || [];
        const isArray = Array.isArray(values);
        for (const key in values) {
          if (isArray && key in Array.prototype)
            continue;
          const iterationData = Object.defineProperty(
            {
              ...instanceScope.reduce(
                (previousIterationData, scopedData) => {
                  if (previousIterationData.__idata) {
                    return { ...previousIterationData, ...scopedData };
                  }
                  return scopedData;
                },
                {}
              ),
              [valueName]: values[key],
              ...keyName !== null ? { [keyName]: isArray ? Number(key) : key } : {}
            },
            "__idata",
            { enumerable: false, value: true }
          );
          instanceScope.unshift(iterationData);
          fragment.push(repeatedNode.bind(null, iterationData)());
          instanceScope.shift();
        }
        return fragment;
      };
    }
    return createNodes;
  }
  function createElements(library2, schema2) {
    if (Array.isArray(schema2)) {
      const els = schema2.map(createElement.bind(null, library2));
      return (iterationData) => els.map((element2) => element2(iterationData));
    }
    const element = createElement(library2, schema2);
    return (iterationData) => element(iterationData);
  }
  const providers = [];
  function provider(compiled, hints = {}) {
    const compiledFns = /* @__PURE__ */ new WeakMap();
    providers.push((callback, key) => {
      compiledFns.set(
        key,
        compiled.provide((tokens) => callback(tokens, hints))
      );
    });
    return () => compiledFns.get(instanceKey)();
  }
  function createInstance(providerCallback, key) {
    memoKey ?? (memoKey = toMemoKey(schema));
    const [render, compiledProviders] = has(memo, memoKey) ? memo[memoKey] : [createElements(library, schema), providers];
    compiledProviders.forEach((compiledProvider) => {
      compiledProvider(providerCallback, key);
    });
    return () => {
      instanceKey = key;
      return render();
    };
  }
  return createInstance;
}
function useScope(token3, defaultValue) {
  const scopedData = instanceScopes.get(instanceKey) || [];
  let scopedValue = void 0;
  if (scopedData.length) {
    scopedValue = getValue(scopedData, token3.split("."));
  }
  return scopedValue === void 0 ? defaultValue : scopedValue;
}
function slotData(data, key) {
  return new Proxy(data, {
    get(...args) {
      let data2 = void 0;
      const property = args[1];
      if (typeof property === "string") {
        const prevKey = instanceKey;
        instanceKey = key;
        data2 = useScope(property, void 0);
        instanceKey = prevKey;
      }
      return data2 !== void 0 ? data2 : Reflect.get(...args);
    }
  });
}
function createRenderFn(instanceCreator, data, instanceKey2) {
  return instanceCreator(
    (requirements, hints = {}) => {
      return requirements.reduce((tokens, token3) => {
        if (token3.startsWith("slots.")) {
          const slot = token3.substring(6);
          const hasSlot = () => data.slots && has(data.slots, slot) && typeof data.slots[slot] === "function";
          if (hints.if) {
            tokens[token3] = hasSlot;
          } else if (data.slots) {
            const scopedData = slotData(data, instanceKey2);
            tokens[token3] = () => hasSlot() ? data.slots[slot](scopedData) : null;
          }
        } else {
          const value = getRef(token3, data);
          tokens[token3] = () => useScope(token3, value.value);
        }
        return tokens;
      }, {});
    },
    instanceKey2
  );
}
function clean(schema, memoKey, instanceKey2) {
  memoKey ?? (memoKey = toMemoKey(schema));
  memoKeys[memoKey]--;
  if (memoKeys[memoKey] === 0) {
    delete memoKeys[memoKey];
    const [, providers] = memo[memoKey];
    delete memo[memoKey];
    providers.length = 0;
  }
  instanceScopes.delete(instanceKey2);
}
function toMemoKey(schema) {
  return JSON.stringify(schema, (_, value) => {
    if (typeof value === "function") {
      return value.toString();
    }
    return value;
  });
}
var FormKitSchema = /* @__PURE__ */ defineComponent({
  name: "FormKitSchema",
  props: {
    schema: {
      type: [Array, Object],
      required: true
    },
    data: {
      type: Object,
      default: () => ({})
    },
    library: {
      type: Object,
      default: () => ({})
    },
    memoKey: {
      type: String,
      required: false
    }
  },
  emits: ["mounted"],
  setup(props, context) {
    var _a;
    getCurrentInstance();
    let instanceKey2 = {};
    instanceScopes.set(instanceKey2, []);
    const library = { FormKit: markRaw(FormKit_default), ...props.library };
    let provider = parseSchema(library, props.schema, props.memoKey);
    let render;
    let data;
    watchEffect(() => {
      data = Object.assign(reactive(props.data ?? {}), {
        slots: context.slots
      });
      context.slots;
      render = createRenderFn(provider, data, instanceKey2);
    });
    function cleanUp() {
      clean(props.schema, props.memoKey, instanceKey2);
      if (data) {
        if (data.node)
          data.node.destroy();
        data.slots = null;
        data = null;
      }
      render = null;
    }
    onSSRComplete((_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app, cleanUp);
    return () => render ? render() : null;
  }
});
var FormKitSchema_default = FormKitSchema;
var parentSymbol = Symbol("FormKitParent");
var componentSymbol = Symbol("FormKitComponentCallback");
function FormKit(props, context) {
  const node = useInput(props, context);
  if (!node.props.definition)
    error(600, node);
  if (node.props.definition.component) {
    return () => {
      var _a;
      return h(
        (_a = node.props.definition) == null ? void 0 : _a.component,
        {
          context: node.context
        },
        { ...context.slots }
      );
    };
  }
  const schema = ref([]);
  let memoKey = node.props.definition.schemaMemoKey;
  const generateSchema = () => {
    var _a, _b;
    const schemaDefinition = (_b = (_a = node.props) == null ? void 0 : _a.definition) == null ? void 0 : _b.schema;
    if (!schemaDefinition)
      error(601, node);
    if (typeof schemaDefinition === "function") {
      schema.value = schemaDefinition({ ...props.sectionsSchema || {} });
      if (memoKey && props.sectionsSchema || "memoKey" in schemaDefinition && typeof schemaDefinition.memoKey === "string") {
        memoKey = (memoKey ?? (schemaDefinition == null ? void 0 : schemaDefinition.memoKey)) + JSON.stringify(props.sectionsSchema);
      }
    } else {
      schema.value = schemaDefinition;
    }
  };
  generateSchema();
  context.emit("node", node);
  const definitionLibrary = node.props.definition.library;
  const library = {
    FormKit: markRaw(formkitComponent),
    ...definitionLibrary,
    ...props.library ?? {}
  };
  function didMount() {
    node.emit("mounted");
  }
  context.expose({ node });
  return () => h(
    FormKitSchema,
    {
      schema: schema.value,
      data: node.context,
      onMounted: didMount,
      library,
      memoKey
    },
    { ...context.slots }
  );
}
var formkitComponent = /* @__PURE__ */ defineComponent(
  FormKit,
  {
    props: runtimeProps,
    inheritAttrs: false
  }
);
var FormKit_default = formkitComponent;
var rootSymbol = Symbol();
function createPlugin(app, options) {
  app.component(options.alias || "FormKit", FormKit_default).component(options.schemaAlias || "FormKitSchema", FormKitSchema_default);
  return {
    get: getNode,
    setLocale: (locale) => {
      var _a;
      if ((_a = options.config) == null ? void 0 : _a.rootConfig) {
        options.config.rootConfig.locale = locale;
      }
    },
    clearErrors,
    setErrors,
    submit: submitForm,
    reset
  };
}
var optionsSymbol = Symbol.for("FormKitOptions");
var configSymbol = Symbol.for("FormKitConfig");
var plugin = {
  install(app, _options) {
    const options = Object.assign(
      {
        alias: "FormKit",
        schemaAlias: "FormKitSchema"
      },
      typeof _options === "function" ? _options() : _options
    );
    const rootConfig = createConfig(options.config || {});
    options.config = { rootConfig };
    app.config.globalProperties.$formkit = createPlugin(app, options);
    app.provide(optionsSymbol, options);
    app.provide(configSymbol, rootConfig);
  }
};
var pseudoProps = [
  // Boolean props
  "ignore",
  "disabled",
  "preserve",
  // String props
  "help",
  "label",
  /^preserve(-e|E)rrors/,
  /^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,
  /^[a-zA-Z-]+(?:-class|Class)$/,
  "prefixIcon",
  "suffixIcon",
  /^[a-zA-Z-]+(?:-icon|Icon)$/
];
var boolProps = ["disabled", "ignore", "preserve"];
function classesToNodeProps(node, props) {
  if (props.classes) {
    Object.keys(props.classes).forEach(
      (key) => {
        if (typeof key === "string") {
          node.props[`_${key}Class`] = props.classes[key];
          if (isObject(props.classes[key]) && key === "inner")
            Object.values(props.classes[key]);
        }
      }
    );
  }
}
function onlyListeners(props) {
  if (!props)
    return {};
  const knownListeners = ["Submit", "SubmitRaw", "SubmitInvalid"].reduce(
    (listeners, listener) => {
      const name = `on${listener}`;
      if (name in props) {
        if (typeof props[name] === "function") {
          listeners[name] = props[name];
        }
      }
      return listeners;
    },
    {}
  );
  return knownListeners;
}
function useInput(props, context, options = {}) {
  const config = Object.assign({}, inject(optionsSymbol) || {}, options);
  const __root = inject(rootSymbol, ref(void 0));
  const __cmpCallback = inject(componentSymbol, () => {
  });
  const instance = getCurrentInstance();
  const listeners = onlyListeners(instance == null ? void 0 : instance.vnode.props);
  const isVModeled = ["modelValue", "model-value"].some(
    (prop) => prop in ((instance == null ? void 0 : instance.vnode.props) ?? {})
  );
  const value = props.modelValue !== void 0 ? props.modelValue : cloneAny(context.attrs.value);
  function createInitialProps() {
    const initialProps2 = {
      ...nodeProps(props),
      ...listeners,
      type: props.type ?? "text",
      __root: __root.value,
      __slots: context.slots
    };
    const attrs = except(nodeProps(context.attrs), pseudoProps);
    if (!attrs.key)
      attrs.key = token();
    initialProps2.attrs = attrs;
    const propValues = only(nodeProps(context.attrs), pseudoProps);
    for (const propName in propValues) {
      if (boolProps.includes(propName) && propValues[propName] === "") {
        propValues[propName] = true;
      }
      initialProps2[camel(propName)] = propValues[propName];
    }
    const classesProps = { props: {} };
    classesToNodeProps(classesProps, props);
    Object.assign(initialProps2, classesProps.props);
    if (typeof initialProps2.type !== "string") {
      initialProps2.definition = initialProps2.type;
      delete initialProps2.type;
    }
    return initialProps2;
  }
  const initialProps = createInitialProps();
  const parent = initialProps.ignore ? null : props.parent || inject(parentSymbol, null);
  const node = createNode(
    extend(
      config || {},
      {
        name: props.name || void 0,
        value,
        parent,
        plugins: (config.plugins || []).concat(props.plugins ?? []),
        config: props.config || {},
        props: initialProps,
        index: props.index,
        sync: !!undefine(context.attrs.sync || context.attrs.dynamic)
      },
      false,
      true
    )
  );
  __cmpCallback(node);
  if (!node.props.definition)
    error(600, node);
  const lateBoundProps = ref(
    new Set(
      Array.isArray(node.props.__propDefs) ? node.props.__propDefs : Object.keys(node.props.__propDefs ?? {})
    )
  );
  node.on(
    "added-props",
    ({ payload: lateProps }) => {
      const propNames = Array.isArray(lateProps) ? lateProps : Object.keys(lateProps ?? {});
      propNames.forEach((newProp) => lateBoundProps.value.add(newProp));
    }
  );
  const pseudoPropNames = computed(
    () => pseudoProps.concat([...lateBoundProps.value]).reduce((names, prop) => {
      if (typeof prop === "string") {
        names.push(camel(prop));
        names.push(kebab(prop));
      } else {
        names.push(prop);
      }
      return names;
    }, [])
  );
  watchEffect(() => classesToNodeProps(node, props));
  const passThrough = nodeProps(props);
  for (const prop in passThrough) {
    watch(
      () => props[prop],
      () => {
        if (props[prop] !== void 0) {
          node.props[prop] = props[prop];
        }
      }
    );
  }
  watchEffect(() => {
    node.props.__root = __root.value;
  });
  const attributeWatchers = /* @__PURE__ */ new Set();
  const possibleProps = nodeProps(context.attrs);
  watchEffect(() => {
    watchAttributes(only(possibleProps, pseudoPropNames.value));
  });
  function watchAttributes(attrProps) {
    attributeWatchers.forEach((stop) => {
      stop();
      attributeWatchers.delete(stop);
    });
    for (const prop in attrProps) {
      const camelName = camel(prop);
      attributeWatchers.add(
        watch(
          () => context.attrs[prop],
          () => {
            node.props[camelName] = context.attrs[prop];
          }
        )
      );
    }
  }
  watchEffect(() => {
    const attrs = except(nodeProps(context.attrs), pseudoPropNames.value);
    if ("multiple" in attrs)
      attrs.multiple = undefine(attrs.multiple);
    if (typeof attrs.onBlur === "function") {
      attrs.onBlur = oncePerTick(attrs.onBlur);
    }
    node.props.attrs = Object.assign({}, node.props.attrs || {}, attrs);
  });
  watchEffect(() => {
    const messages3 = (props.errors ?? []).map(
      (error3) => /* @__PURE__ */ createMessage({
        key: slugify(error3),
        type: "error",
        value: error3,
        meta: { source: "prop" }
      })
    );
    node.store.apply(
      messages3,
      (message3) => message3.type === "error" && message3.meta.source === "prop"
    );
  });
  if (node.type !== "input") {
    const sourceKey = `${node.name}-prop`;
    watchEffect(() => {
      const inputErrors = props.inputErrors ?? {};
      const keys = Object.keys(inputErrors);
      if (!keys.length)
        node.clearErrors(true, sourceKey);
      const messages3 = keys.reduce((messages4, key) => {
        let value2 = inputErrors[key];
        if (typeof value2 === "string")
          value2 = [value2];
        if (Array.isArray(value2)) {
          messages4[key] = value2.map(
            (error3) => /* @__PURE__ */ createMessage({
              key: error3,
              type: "error",
              value: error3,
              meta: { source: sourceKey }
            })
          );
        }
        return messages4;
      }, {});
      node.store.apply(
        messages3,
        (message3) => message3.type === "error" && message3.meta.source === sourceKey
      );
    });
  }
  watchEffect(() => Object.assign(node.config, props.config));
  if (node.type !== "input") {
    provide(parentSymbol, node);
  }
  let clonedValueBeforeVmodel = void 0;
  node.on("modelUpdated", () => {
    var _a;
    context.emit("inputRaw", (_a = node.context) == null ? void 0 : _a.value, node);
    if (isVModeled && node.context) {
      clonedValueBeforeVmodel = cloneAny(node.value);
      context.emit("update:modelValue", shallowClone(node.value));
    }
  });
  if (isVModeled) {
    watch(
      toRef(props, "modelValue"),
      (value2) => {
        if (!eq(clonedValueBeforeVmodel, value2)) {
          node.input(value2, false);
        }
      },
      { deep: true }
    );
    if (node.value !== value) {
      node.emit("modelUpdated");
    }
  }
  return node;
}
var messages = createSection("messages", () => ({
  $el: "ul",
  if: "$fns.length($messages)"
}));
var message = createSection("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: `$id + '-' + $message.key`,
    "data-message-type": "$message.type"
  }
}));
messages(message("$message.value"));
var summary = createSection("summary", () => ({
  $el: "div",
  attrs: {
    "aria-live": "polite"
  }
}));
var summaryInner = createSection("summaryInner", () => ({
  $el: "div",
  if: "$summaries.length && $showSummaries"
}));
var messages2 = createSection("messages", () => ({
  $el: "ul",
  if: "$summaries.length && $showSummaries"
}));
var message2 = createSection("message", () => ({
  $el: "li",
  for: ["summary", "$summaries"],
  attrs: {
    key: "$summary.key",
    "data-message-type": "$summary.type"
  }
}));
var summaryHeader = createSection("summaryHeader", () => ({
  $el: "h2",
  attrs: {
    id: "$id"
  }
}));
var messageLink = createSection("messageLink", () => ({
  $el: "a",
  attrs: {
    id: "$summary.key",
    href: '$: "#" + $summary.id',
    onClick: "$jumpLink"
  }
}));
summary(
  summaryInner(
    summaryHeader("$summaryHeader"),
    messages2(message2(messageLink("$summary.message")))
  )
);
init_defaultConfig();
init_bindings();

const formkitPlugin_Kw9Zxpc32ie3g9uaRfiavVL004WiVJNxPefwwMCJMnU = defineNuxtPlugin((nuxtApp) => {
  const config = defaultConfig;
  nuxtApp.hook("app:rendered", (renderContext) => {
    resetCount();
    ssrComplete(nuxtApp.vueApp);
  });
  nuxtApp.vueApp.use(plugin, config);
});

const cfg0 = defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      neutral: "gray",
      secondary: "green"
    },
    modal: {
      slots: {
        close: "cursor-pointer"
      }
    },
    icons: {
      close: "i-ph-x-bold"
    },
    button: {
      slots: {
        base: "!px-4 rounded-full"
      },
      defaultVariants: {
        color: "primary",
        variant: "solid",
        size: "xl"
      }
    },
    input: {
      slots: {
        root: "w-full"
      }
    },
    textarea: {
      slots: {
        root: "w-full"
      }
    }
  }
});

const inlineConfig = {
  "nuxt": {},
  "ui": {
    "colors": {
      "primary": "green",
      "secondary": "blue",
      "success": "green",
      "info": "blue",
      "warning": "yellow",
      "error": "red",
      "neutral": "slate"
    },
    "icons": {
      "arrowLeft": "i-lucide-arrow-left",
      "arrowRight": "i-lucide-arrow-right",
      "check": "i-lucide-check",
      "chevronDoubleLeft": "i-lucide-chevrons-left",
      "chevronDoubleRight": "i-lucide-chevrons-right",
      "chevronDown": "i-lucide-chevron-down",
      "chevronLeft": "i-lucide-chevron-left",
      "chevronRight": "i-lucide-chevron-right",
      "chevronUp": "i-lucide-chevron-up",
      "close": "i-lucide-x",
      "ellipsis": "i-lucide-ellipsis",
      "external": "i-lucide-arrow-up-right",
      "folder": "i-lucide-folder",
      "folderOpen": "i-lucide-folder-open",
      "loading": "i-lucide-refresh-cw",
      "minus": "i-lucide-minus",
      "plus": "i-lucide-plus",
      "search": "i-lucide-search"
    }
  },
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "cssLayer": "components",
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  }
};
const _appConfig = /* @__PURE__ */ defuFn(cfg0, inlineConfig);

function useAppConfig() {
  const nuxtApp = useNuxtApp();
  nuxtApp._appConfig || (nuxtApp._appConfig = klona(_appConfig));
  return nuxtApp._appConfig;
}

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function getColor(color, shade) {
  if (color in colors && typeof colors[color] === "object" && shade in colors[color]) {
    return colors[color][shade];
  }
  return "";
}
function generateShades(key, value) {
  return `${shades.map((shade) => `--ui-color-${key}-${shade}: var(--color-${value === "neutral" ? "old-neutral" : value}-${shade}, ${getColor(value, shade)});`).join("\n  ")}`;
}
function generateColor(key, shade) {
  return `--ui-${key}: var(--ui-color-${key}-${shade});`;
}
const colors_E7kSti5pGZ28QhUUurq6gGRU3l65WuXO_KJC3GQgzFo = defineNuxtPlugin(() => {
  const appConfig = useAppConfig();
  useNuxtApp();
  const root = computed(() => {
    const { neutral, ...colors2 } = appConfig.ui.colors;
    return `@layer base {
  :root {
  ${Object.entries(appConfig.ui.colors).map(([key, value]) => generateShades(key, value)).join("\n  ")}
  }
  :root, .light {
  ${Object.keys(colors2).map((key) => generateColor(key, 500)).join("\n  ")}
  }
  .dark {
  ${Object.keys(colors2).map((key) => generateColor(key, 400)).join("\n  ")}
  }
}`;
  });
  const headData = {
    style: [{
      innerHTML: () => root.value,
      tagPriority: -2,
      id: "nuxt-ui-colors"
    }]
  };
  useHead(headData);
});

const plugin_MeUvTuoKUi51yb_kBguab6hdcExVXeTtZtTg9TZZBB8 = defineNuxtPlugin({
  name: "@nuxt/icon",
  setup() {
    var _a, _b;
    const configs = useRuntimeConfig();
    const options = useAppConfig().icon;
    _api.setFetch($fetch.native);
    const resources = [];
    if (options.provider === "server") {
      const baseURL = ((_b = (_a = configs.app) == null ? void 0 : _a.baseURL) == null ? void 0 : _b.replace(/\/$/, "")) ?? "";
      resources.push(baseURL + (options.localApiEndpoint || "/api/_nuxt_icon"));
      if (options.fallbackToApi === true || options.fallbackToApi === "client-only") {
        resources.push(options.iconifyApiEndpoint);
      }
    } else {
      resources.push(options.iconifyApiEndpoint);
    }
    async function customIconLoader(icons, prefix) {
      try {
        const data = await $fetch(resources[0] + "/" + prefix + ".json", {
          query: {
            icons: icons.join(",")
          }
        });
        if (!data || data.prefix !== prefix || !data.icons)
          throw new Error("Invalid data" + JSON.stringify(data));
        return data;
      } catch (e) {
        console.error("Failed to load custom icons", e);
        return null;
      }
    }
    addAPIProvider("", { resources });
    for (const prefix of options.customCollections || []) {
      if (prefix)
        setCustomIconsLoader(customIconLoader, prefix);
    }
  }
  // For type portability
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
});

const prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk = defineNuxtPlugin(async () => {
  {
    return;
  }
});

const _1_absoluteImageUrls_server_2YTf8dZl0nl5nVc1xW7fV_4mFLM_syJu2DEHHvxD9lg = defineNuxtPlugin({
  enforce: "post",
  setup() {
    const head = injectHead();
    if (!head)
      return;
    const resolver = createSitePathResolver({
      withBase: true,
      absolute: true,
      canonical: true
    });
    head.use({
      key: "absoluteImageUrls",
      hooks: {
        "tags:resolve": async ({ tags }) => {
          for (const tag of tags) {
            if (tag.tag !== "meta")
              continue;
            if (tag.props.property !== "og:image:url" && tag.props.property !== "og:image" && tag.props.name !== "twitter:image")
              continue;
            if (typeof tag.props.content !== "string" || !tag.props.content.trim() || tag.props.content.startsWith("http") || tag.props.content.startsWith("//"))
              continue;
            tag.props.content = unref(resolver(tag.props.content));
          }
        }
      }
    });
  }
});

const _0_routeRules_3p7F2AZYQSP_eJRsw5nLkf3zyZXPOFcTrXNpZlBwROM = defineNuxtPlugin({
  enforce: "post",
  async setup() {
    let __temp, __restore;
    const head = injectHead();
    const routeRuleState = useState("nuxt-seo-utils:routeRules", () => null);
    {
      const event = useRequestEvent();
      const routeRules = ([__temp, __restore] = executeAsync(() => getRouteRules(event)), __temp = await __temp, __restore(), __temp);
      routeRuleState.value = {
        head: routeRules.head,
        seoMeta: routeRules.seoMeta
      };
    }
    if (routeRuleState.value) {
      const { head: headInput, seoMeta } = routeRuleState.value;
      if (headInput)
        head.push(headInput);
      if (seoMeta)
        useSeoMeta(seoMeta);
    }
  }
});

function applyDefaults(i18n) {
  const head = injectHead();
  head.use(TemplateParamsPlugin);
  const { canonicalQueryWhitelist, canonicalLowercase } = useRuntimeConfig().public["seo-utils"];
  const siteConfig = useSiteConfig();
  const route = useRoute();
  const resolveUrl = createSitePathResolver({ withBase: true, absolute: true });
  const err = useError();
  const canonicalUrl = computed(() => {
    if (err.value) {
      return false;
    }
    const { query } = route;
    let url = resolveUrl(route.path || "/").value || route.path;
    if (canonicalLowercase) {
      try {
        url = url.toLocaleLowerCase(siteConfig.currentLocale || "en");
      } catch {
        url = url.toLowerCase();
      }
    }
    const filteredQuery = Object.fromEntries(
      Object.entries(query).filter(([key]) => canonicalQueryWhitelist.includes(key)).sort(([a], [b]) => a.localeCompare(b))
      // Sort params
    );
    const href = Object.keys(filteredQuery).length ? `${url}?${stringifyQuery(filteredQuery)}` : url;
    return { rel: "canonical", href };
  });
  const minimalPriority = {
    // give nuxt.config values higher priority
    tagPriority: "low"
  };
  useHead({
    htmlAttrs: { lang: i18n.locale },
    templateParams: {
      site: () => siteConfig,
      siteName: () => siteConfig.name
    },
    titleTemplate: "%s %separator %siteName",
    link: [() => canonicalUrl.value]
  }, minimalPriority);
  const seoMeta = {
    ogType: "website",
    ogUrl: () => {
      const url = canonicalUrl.value;
      return url ? url.href : false;
    },
    ogLocale: () => {
      if (i18n.locale.value) {
        const locale = i18n.locale.value.replace("-", "_");
        if (locale.includes("_")) {
          return locale;
        }
      }
      return false;
    },
    ogSiteName: siteConfig.name
  };
  if (siteConfig.description)
    seoMeta.description = siteConfig.description;
  if (siteConfig.twitter) {
    const id = siteConfig.twitter.startsWith("@") ? siteConfig.twitter : `@${siteConfig.twitter}`;
    seoMeta.twitterCreator = id;
    seoMeta.twitterSite = id;
  }
  useSeoMeta(seoMeta, minimalPriority);
}

const defaults_0Sn7xIMAzGkdbab2otVWD8mX4GpY74A3Jy_gY_4_qYk = defineNuxtPlugin({
  name: "nuxt-seo:defaults",
  order: 999,
  env: {
    islands: false
  },
  setup() {
    const siteConfig = useSiteConfig();
    const locale = ref(siteConfig.currentLocale || siteConfig.defaultLocale);
    applyDefaults({
      locale
    });
  }
});

const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  plugin_YOxzu2Rgn246XMgfphZEXZjtzJTMGWdPuDf_KLI_O_0,
  siteConfig_vuqmRkLAUZxQvb5pvUwT3uUdVggfjhj1m5v7Pb6IE0w,
  inferSeoMetaPlugin_KsEotgC9NJyW_guR_3z04hFN8TI2h5dgP8bzHmpMm5o,
  titles_Fth_MAhm7dgpxeTaMXibYXbcCjegjWK3QH9gKvbTRVg,
  defaults_ZjgoYqsIrjWNaJMfDhci2B0eoNnvY4CDsoscm0L1fE0,
  init_Ks1wcI1vuv3K3FXG7iAYRqIWlPli19G_eByed0tsXe0,
  og_image_canonical_urls_server_2uCBKzWxjEK91fSFBdBNPEWilWXRzR66cHJvjIi4FGA,
  route_rule_og_image_server_yrHfzNQxtCKZyHaGhWqsbaa4V0Y5WoBOo3_wqkmh41k,
  robot_meta_server_bRHpso_4KN_Ec3RJzqCvbuvfZsNOeE_4TgpL8dCNuwk,
  formkitPlugin_Kw9Zxpc32ie3g9uaRfiavVL004WiVJNxPefwwMCJMnU,
  colors_E7kSti5pGZ28QhUUurq6gGRU3l65WuXO_KJC3GQgzFo,
  plugin_MeUvTuoKUi51yb_kBguab6hdcExVXeTtZtTg9TZZBB8,
  prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk,
  _1_absoluteImageUrls_server_2YTf8dZl0nl5nVc1xW7fV_4mFLM_syJu2DEHHvxD9lg,
  _0_routeRules_3p7F2AZYQSP_eJRsw5nLkf3zyZXPOFcTrXNpZlBwROM,
  defaults_0Sn7xIMAzGkdbab2otVWD8mX4GpY74A3Jy_gY_4_qYk
];

function omit(data, keys) {
  const result = { ...data };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return Number.isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}

function buildTranslator(locale) {
  return (path, option) => translate(path, option, unref(locale));
}
function translate(path, option, locale) {
  const prop = get(locale, `messages.${path}`, path);
  return prop.replace(
    /\{(\w+)\}/g,
    (_, key) => `${(option == null ? void 0 : option[key]) ?? `{${key}}`}`
  );
}
function buildLocaleContext(locale) {
  const lang = computed(() => unref(locale).name);
  const code = computed(() => unref(locale).code);
  const dir = computed(() => unref(locale).dir);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    code,
    dir,
    locale: localeRef,
    t: buildTranslator(locale)
  };
}

// @__NO_SIDE_EFFECTS__
function defineLocale(options) {
  return defu(options, { dir: "ltr" });
}

const en = defineLocale({
  name: "English",
  code: "en",
  messages: {
    inputMenu: {
      noMatch: "No matching data",
      noData: "No data",
      create: 'Create "{label}"'
    },
    calendar: {
      prevYear: "Previous year",
      nextYear: "Next year",
      prevMonth: "Previous month",
      nextMonth: "Next month"
    },
    inputNumber: {
      increment: "Increment",
      decrement: "Decrement"
    },
    commandPalette: {
      placeholder: "Type a command or search...",
      noMatch: "No matching data",
      noData: "No data",
      close: "Close"
    },
    selectMenu: {
      noMatch: "No matching data",
      noData: "No data",
      create: 'Create "{label}"',
      search: "Search..."
    },
    toast: {
      close: "Close"
    },
    carousel: {
      prev: "Prev",
      next: "Next",
      goto: "Go to slide {slide}"
    },
    modal: {
      close: "Close"
    },
    slideover: {
      close: "Close"
    },
    alert: {
      close: "Close"
    },
    table: {
      noData: "No data"
    }
  }
});

const localeContextInjectionKey = Symbol.for("nuxt-ui.locale-context");
const _useLocale = (localeOverrides) => {
  const locale = localeOverrides || toRef(inject(localeContextInjectionKey));
  return buildLocaleContext(computed(() => locale.value || en));
};
const useLocale = /* @__PURE__ */ createSharedComposable(_useLocale);

function useToast() {
  const toasts = useState("toasts", () => []);
  const running = ref(false);
  const queue = [];
  const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  async function processQueue() {
    if (running.value || queue.length === 0) {
      return;
    }
    running.value = true;
    while (queue.length > 0) {
      const toast = queue.shift();
      await nextTick();
      toasts.value = [...toasts.value, toast].slice(-5);
    }
    running.value = false;
  }
  function add(toast) {
    const body = {
      id: generateId(),
      open: true,
      ...toast
    };
    queue.push(body);
    processQueue();
    return body;
  }
  function update(id, toast) {
    const index = toasts.value.findIndex((t) => t.id === id);
    if (index !== -1) {
      toasts.value[index] = {
        ...toasts.value[index],
        ...toast
      };
    }
  }
  function remove(id) {
    const index = toasts.value.findIndex((t) => t.id === id);
    if (index !== -1) {
      toasts.value[index] = {
        ...toasts.value[index],
        open: false
      };
    }
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id);
    }, 200);
  }
  function clear() {
    toasts.value = [];
  }
  return {
    toasts,
    add,
    update,
    remove,
    clear
  };
}

async function loadIcon(name, timeout) {
  if (!name)
    return null;
  const _icon = getIcon(name);
  if (_icon)
    return _icon;
  let timeoutWarn;
  const load = loadIcon$1(name).catch(() => {
    console.warn(`[Icon] failed to load icon \`${name}\``);
    return null;
  });
  if (timeout > 0)
    await Promise.race([
      load,
      new Promise((resolve) => {
        timeoutWarn = setTimeout(() => {
          console.warn(`[Icon] loading icon \`${name}\` timed out after ${timeout}ms`);
          resolve();
        }, timeout);
      })
    ]).finally(() => clearTimeout(timeoutWarn));
  else
    await load;
  return getIcon(name);
}
function useResolvedName(getName) {
  const options = useAppConfig().icon;
  const collections = (options.collections || []).sort((a, b) => b.length - a.length);
  return computed(() => {
    var _a;
    const name = getName();
    const bare = name.startsWith(options.cssSelectorPrefix) ? name.slice(options.cssSelectorPrefix.length) : name;
    const resolved = ((_a = options.aliases) == null ? void 0 : _a[bare]) || bare;
    if (!resolved.includes(":")) {
      const collection = collections.find((c) => resolved.startsWith(c + "-"));
      return collection ? collection + ":" + resolved.slice(collection.length + 1) : resolved;
    }
    return resolved;
  });
}

const SYMBOL_SERVER_CSS = "NUXT_ICONS_SERVER_CSS";
function escapeCssSelector(selector) {
  return selector.replace(/([^\w-])/g, "\\$1");
}
const NuxtIconCss = /* @__PURE__ */ defineComponent({
  name: "NuxtIconCss",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props) {
    const nuxt = useNuxtApp();
    const options = useAppConfig().icon;
    const cssClass = computed(() => props.name ? options.cssSelectorPrefix + props.name : "");
    const selector = computed(() => "." + escapeCssSelector(cssClass.value));
    function getCSS(icon, withLayer = true) {
      let iconSelector = selector.value;
      if (options.cssWherePseudo) {
        iconSelector = `:where(${iconSelector})`;
      }
      const css = getIconCSS(icon, {
        iconSelector,
        format: "compressed",
        customise: props.customize ?? options.customize
      });
      if (options.cssLayer && withLayer) {
        return `@layer ${options.cssLayer} { ${css} }`;
      }
      return css;
    }
    onServerPrefetch(async () => {
      var _a;
      {
        const configs = useRuntimeConfig().icon || {};
        if (!((_a = configs == null ? void 0 : configs.serverKnownCssClasses) == null ? void 0 : _a.includes(cssClass.value))) {
          const icon = await loadIcon(props.name, options.fetchTimeout).catch(() => null);
          if (!icon)
            return null;
          let ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS];
          if (!ssrCSS) {
            ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS] = /* @__PURE__ */ new Map();
            nuxt.runWithContext(() => {
              useHead({
                style: [
                  () => {
                    const sep = "";
                    let css = Array.from(ssrCSS.values()).sort().join(sep);
                    if (options.cssLayer) {
                      css = `@layer ${options.cssLayer} {${sep}${css}${sep}}`;
                    }
                    return { innerHTML: css };
                  }
                ]
              }, {
                tagPriority: "low"
              });
            });
          }
          if (props.name && !ssrCSS.has(props.name)) {
            const css = getCSS(icon, false);
            ssrCSS.set(props.name, css);
          }
          return null;
        }
      }
    });
    return () => h("span", { class: ["iconify", cssClass.value] });
  }
});

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server ?? (options.server = true);
  options.default ?? (options.default = getDefault);
  options.getCachedData ?? (options.getCachedData = getDefaultCachedData);
  options.lazy ?? (options.lazy = false);
  options.immediate ?? (options.immediate = true);
  options.deep ?? (options.deep = asyncDataDefaults.deep);
  options.dedupe ?? (options.dedupe = "cancel");
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_b = nuxtApp.payload._errors)[key] ?? (_b[key] = asyncDataDefaults.errorValue);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

const NuxtIconSvg = /* @__PURE__ */ defineComponent({
  name: "NuxtIconSvg",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots }) {
    useNuxtApp();
    const options = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const storeKey = "i-" + name.value;
    if (name.value) {
      {
        useAsyncData(
          storeKey,
          () => loadIcon(name.value, options.fetchTimeout),
          { deep: false }
        );
      }
    }
    return () => h(Icon, {
      icon: name.value,
      ssr: true,
      // Iconify uses `customise`, where we expose `customize` for consistency
      customise: props.customize ?? options.customize
    }, slots);
  }
});

const __nuxt_component_0$2 = defineComponent({
  name: "NuxtIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots }) {
    const nuxtApp = useNuxtApp();
    const runtimeOptions = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const component = computed(
      () => {
        var _a;
        return ((_a = nuxtApp.vueApp) == null ? void 0 : _a.component(name.value)) || ((props.mode || runtimeOptions.mode) === "svg" ? NuxtIconSvg : NuxtIconCss);
      }
    );
    const style = computed(() => {
      const size = props.size || runtimeOptions.size;
      return size ? { fontSize: Number.isNaN(+size) ? size : size + "px" } : null;
    });
    const customize = props.customize || runtimeOptions.customize;
    return () => h(
      component.value,
      {
        ...runtimeOptions.attrs,
        name: name.value,
        class: runtimeOptions.class,
        style: style.value,
        customize
      },
      slots
    );
  }
});

const index2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$2
});

const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    mode: {},
    size: {},
    customize: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const iconProps = useForwardProps(reactivePick(props, "name", "mode", "size", "customize"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_Icon, mergeProps(unref(iconProps), _attrs), null, _parent));
    };
  }
});

const ImageComponent = "img";

const avatarGroupInjectionKey = Symbol("nuxt-ui.avatar-group");
function useAvatarGroup(props) {
  const avatarGroup = inject(avatarGroupInjectionKey, void 0);
  const size = computed(() => props.size ?? (avatarGroup == null ? void 0 : avatarGroup.value.size));
  provide(avatarGroupInjectionKey, computed(() => ({ size: size.value })));
  return {
    size
  };
}

const theme$4 = {
  "slots": {
    "root": "inline-flex items-center justify-center shrink-0 select-none overflow-hidden rounded-full align-middle bg-(--ui-bg-elevated)",
    "image": "h-full w-full rounded-[inherit] object-cover",
    "fallback": "font-medium leading-none text-(--ui-text-muted) truncate",
    "icon": "text-(--ui-text-muted) shrink-0"
  },
  "variants": {
    "size": {
      "3xs": {
        "root": "size-4 text-[8px]"
      },
      "2xs": {
        "root": "size-5 text-[10px]"
      },
      "xs": {
        "root": "size-6 text-xs"
      },
      "sm": {
        "root": "size-7 text-sm"
      },
      "md": {
        "root": "size-8 text-base"
      },
      "lg": {
        "root": "size-9 text-lg"
      },
      "xl": {
        "root": "size-10 text-xl"
      },
      "2xl": {
        "root": "size-11 text-[22px]"
      },
      "3xl": {
        "root": "size-12 text-2xl"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};

var _a$5;
const appConfigTv = _appConfig;
const tv = /* @__PURE__ */ createTV((_a$5 = appConfigTv.ui) == null ? void 0 : _a$5.tv);

var _a$4;
const appConfigAvatar = _appConfig;
const avatar = tv({ extend: tv(theme$4), ...((_a$4 = appConfigAvatar.ui) == null ? void 0 : _a$4.avatar) || {} });
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    as: { default: "span" },
    src: {},
    alt: {},
    icon: {},
    text: {},
    size: {},
    class: {},
    style: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const fallback = computed(() => props.text || (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2));
    const { size } = useAvatarGroup(props);
    const ui = computed(() => avatar({
      size: size.value
    }));
    const sizePx = computed(() => ({
      "3xs": 16,
      "2xs": 20,
      "xs": 24,
      "sm": 28,
      "md": 32,
      "lg": 36,
      "xl": 40,
      "2xl": 44,
      "3xl": 48
    })[props.size || "md"]);
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] }),
        style: props.style
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            if (_ctx.src && !error.value) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
                role: "img",
                src: _ctx.src,
                alt: _ctx.alt,
                width: sizePx.value,
                height: sizePx.value
              }, _ctx.$attrs, {
                class: ui.value.image({ class: (_a3 = props.ui) == null ? void 0 : _a3.image }),
                onError
              }), null), _parent2, _scopeId);
            } else {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                var _a4, _b2;
                if (_ctx.icon) {
                  _push2(ssrRenderComponent(_sfc_main$h, {
                    name: _ctx.icon,
                    class: ui.value.icon({ class: (_a4 = props.ui) == null ? void 0 : _a4.icon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span class="${ssrRenderClass(ui.value.fallback({ class: (_b2 = props.ui) == null ? void 0 : _b2.fallback }))}"${_scopeId}>${ssrInterpolate(fallback.value || " ")}</span>`);
                }
              }, _push2, _parent2, _scopeId);
            }
          } else {
            return [
              _ctx.src && !error.value ? (openBlock(), createBlock(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
                key: 0,
                role: "img",
                src: _ctx.src,
                alt: _ctx.alt,
                width: sizePx.value,
                height: sizePx.value
              }, _ctx.$attrs, {
                class: ui.value.image({ class: (_b = props.ui) == null ? void 0 : _b.image }),
                onError
              }), null, 16, ["src", "alt", "width", "height", "class"])) : renderSlot(_ctx.$slots, "default", { key: 1 }, () => {
                var _a4, _b2;
                return [
                  _ctx.icon ? (openBlock(), createBlock(_sfc_main$h, {
                    key: 0,
                    name: _ctx.icon,
                    class: ui.value.icon({ class: (_a4 = props.ui) == null ? void 0 : _a4.icon })
                  }, null, 8, ["name", "class"])) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: ui.value.fallback({ class: (_b2 = props.ui) == null ? void 0 : _b2.fallback })
                  }, toDisplayString(fallback.value || " "), 3))
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

function useComponentIcons(componentProps) {
  const appConfig = useAppConfig();
  const props = computed(() => toValue(componentProps));
  const isLeading = computed(() => props.value.icon && props.value.leading || props.value.icon && !props.value.trailing || props.value.loading && !props.value.trailing || !!props.value.leadingIcon);
  const isTrailing = computed(() => props.value.icon && props.value.trailing || props.value.loading && props.value.trailing || !!props.value.trailingIcon);
  const leadingIconName = computed(() => {
    if (props.value.loading) {
      return props.value.loadingIcon || appConfig.ui.icons.loading;
    }
    return props.value.leadingIcon || props.value.icon;
  });
  const trailingIconName = computed(() => {
    if (props.value.loading && !isLeading.value) {
      return props.value.loadingIcon || appConfig.ui.icons.loading;
    }
    return props.value.trailingIcon || props.value.icon;
  });
  return {
    isLeading,
    isTrailing,
    leadingIconName,
    trailingIconName
  };
}

const buttonGroupInjectionKey = Symbol("nuxt-ui.button-group");
function useButtonGroup(props) {
  const buttonGroup = inject(buttonGroupInjectionKey, void 0);
  return {
    orientation: computed(() => buttonGroup == null ? void 0 : buttonGroup.value.orientation),
    size: computed(() => (props == null ? void 0 : props.size) ?? (buttonGroup == null ? void 0 : buttonGroup.value.size))
  };
}

const formLoadingInjectionKey = Symbol("nuxt-ui.form-loading");

function pickLinkProps(link) {
  return reactivePick(link, "active", "activeClass", "ariaCurrentValue", "ariaLabel", "as", "disabled", "exact", "exactActiveClass", "exactHash", "exactQuery", "external", "href", "inactiveClass", "noPrefetch", "noRel", "prefetch", "prefetchedClass", "rel", "replace", "target", "to", "type", "title");
}

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return resolveTrailingSlashBehavior(
          href2,
          router.resolve
          /* will not be called */
        );
      }
      if (typeof to.value === "object") {
        return ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null;
      }
      return resolveTrailingSlashBehavior(
        joinURL(config.app.baseURL, to.value),
        router.resolve
        /* will not be called */
      );
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link == null ? void 0 : link.isActive) ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link == null ? void 0 : link.isExactActive) ?? computed(() => to.value === router.currentRoute.value.path),
      route: (link == null ? void 0 : link.route) ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      ref(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
    // }) as unknown as DefineComponent<NuxtLinkProps, object, object, ComputedOptions, MethodOptions, object, object, EmitsOptions, string, object, NuxtLinkProps, object, SlotsType<NuxtLinkSlots>>
  });
}
const __nuxt_component_1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}

function diff(obj1, obj2) {
  const h1 = _toHashedObject(obj1);
  const h2 = _toHashedObject(obj2);
  return _diff(h1, h2);
}
function _diff(h1, h2) {
  const diffs = [];
  const allProps = /* @__PURE__ */ new Set([
    ...Object.keys(h1.props || {}),
    ...Object.keys(h2.props || {})
  ]);
  if (h1.props && h2.props) {
    for (const prop of allProps) {
      const p1 = h1.props[prop];
      const p2 = h2.props[prop];
      if (p1 && p2) {
        diffs.push(..._diff(h1.props?.[prop], h2.props?.[prop]));
      } else if (p1 || p2) {
        diffs.push(
          new DiffEntry((p2 || p1).key, p1 ? "removed" : "added", p2, p1)
        );
      }
    }
  }
  if (allProps.size === 0 && h1.hash !== h2.hash) {
    diffs.push(new DiffEntry((h2 || h1).key, "changed", h2, h1));
  }
  return diffs;
}
function _toHashedObject(obj, key = "") {
  if (obj && typeof obj !== "object") {
    return new DiffHashedObject(key, obj, serialize(obj));
  }
  const props = {};
  const hashes = [];
  for (const _key in obj) {
    props[_key] = _toHashedObject(obj[_key], key ? `${key}.${_key}` : _key);
    hashes.push(props[_key].hash);
  }
  return new DiffHashedObject(key, obj, `{${hashes.join(":")}}`, props);
}
class DiffEntry {
  constructor(key, type, newValue, oldValue) {
    this.key = key;
    this.type = type;
    this.newValue = newValue;
    this.oldValue = oldValue;
  }
  toString() {
    return this.toJSON();
  }
  toJSON() {
    switch (this.type) {
      case "added": {
        return `Added   \`${this.key}\``;
      }
      case "removed": {
        return `Removed \`${this.key}\``;
      }
      case "changed": {
        return `Changed \`${this.key}\` from \`${this.oldValue?.toString() || "-"}\` to \`${this.newValue.toString()}\``;
      }
    }
  }
}
class DiffHashedObject {
  constructor(key, value, hash, props) {
    this.key = key;
    this.value = value;
    this.hash = hash;
    this.props = props;
  }
  toString() {
    if (this.props) {
      return `{${Object.keys(this.props).join(",")}}`;
    } else {
      return JSON.stringify(this.value);
    }
  }
  toJSON() {
    const k = this.key || ".";
    if (this.props) {
      return `${k}({${Object.keys(this.props).join(",")}})`;
    }
    return `${k}(${this.value})`;
  }
}

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "LinkBase",
  __ssrInlineRender: true,
  props: {
    as: { default: "button" },
    type: { default: "button" },
    disabled: { type: Boolean },
    onClick: {},
    href: {},
    navigate: {},
    target: {},
    rel: {},
    isExternal: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    function onClickWrapper(e) {
      if (props.disabled) {
        e.stopPropagation();
        e.preventDefault();
        return;
      }
      if (props.onClick) {
        for (const onClick of Array.isArray(props.onClick) ? props.onClick : [props.onClick]) {
          onClick(e);
        }
      }
      if (props.href && props.navigate && !props.isExternal) {
        props.navigate(e);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps(_ctx.href ? {
        "as": "a",
        "href": _ctx.disabled ? void 0 : _ctx.href,
        "aria-disabled": _ctx.disabled ? "true" : void 0,
        "role": _ctx.disabled ? "link" : void 0,
        "tabindex": _ctx.disabled ? -1 : void 0
      } : _ctx.as === "button" ? {
        as: _ctx.as,
        type: _ctx.type,
        disabled: _ctx.disabled
      } : {
        as: _ctx.as
      }, {
        rel: _ctx.rel,
        target: _ctx.target,
        onClick: onClickWrapper
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const theme$3 = {
  "base": "focus-visible:outline-(--ui-primary)",
  "variants": {
    "active": {
      "true": "text-(--ui-primary)",
      "false": [
        "text-(--ui-text-muted) hover:text-(--ui-text)",
        "transition-colors"
      ]
    },
    "disabled": {
      "true": "cursor-not-allowed opacity-75"
    }
  }
};

var _a$3;
const appConfigLink = _appConfig;
const link = tv({ extend: tv(theme$3), ...((_a$3 = appConfigLink.ui) == null ? void 0 : _a$3.link) || {} });
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Link",
  __ssrInlineRender: true,
  props: {
    as: { default: "button" },
    type: { default: "button" },
    disabled: { type: Boolean },
    active: { type: Boolean, default: void 0 },
    exact: { type: Boolean },
    exactQuery: { type: [Boolean, String] },
    exactHash: { type: Boolean },
    inactiveClass: { default: "" },
    custom: { type: Boolean },
    raw: { type: Boolean },
    class: {},
    to: {},
    href: {},
    external: { type: Boolean },
    target: {},
    rel: {},
    noRel: { type: Boolean },
    prefetchedClass: {},
    prefetch: { type: Boolean },
    prefetchOn: {},
    noPrefetch: { type: Boolean },
    activeClass: { default: "" },
    exactActiveClass: {},
    ariaCurrentValue: {},
    viewTransition: { type: Boolean },
    replace: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const nuxtLinkProps = useForwardProps(reactiveOmit(props, "as", "type", "disabled", "active", "exact", "exactQuery", "exactHash", "activeClass", "inactiveClass", "raw", "class"));
    const ui = computed(() => tv({
      extend: link,
      variants: {
        active: {
          true: props.activeClass,
          false: props.inactiveClass
        }
      }
    }));
    function isPartiallyEqual(item1, item2) {
      const diffedKeys = diff(item1, item2).reduce((filtered, q) => {
        if (q.type === "added") {
          filtered.add(q.key);
        }
        return filtered;
      }, /* @__PURE__ */ new Set());
      const item1Filtered = Object.fromEntries(Object.entries(item1).filter(([key]) => !diffedKeys.has(key)));
      const item2Filtered = Object.fromEntries(Object.entries(item2).filter(([key]) => !diffedKeys.has(key)));
      return isEqual(item1Filtered, item2Filtered);
    }
    function isLinkActive({ route: linkRoute, isActive, isExactActive }) {
      if (props.active !== void 0) {
        return props.active;
      }
      if (props.exactQuery === "partial") {
        if (!isPartiallyEqual(linkRoute.query, route.query)) return false;
      } else if (props.exactQuery === true) {
        if (!isEqual(linkRoute.query, route.query)) return false;
      }
      if (props.exactHash && linkRoute.hash !== route.hash) {
        return false;
      }
      if (props.exact && isExactActive) {
        return true;
      }
      if (!props.exact && isActive) {
        return true;
      }
      return false;
    }
    function resolveLinkClass({ route: route2, isActive, isExactActive }) {
      const active = isLinkActive({ route: route2, isActive, isExactActive });
      if (props.raw) {
        return [props.class, active ? props.activeClass : props.inactiveClass];
      }
      return ui.value({ class: props.class, active, disabled: props.disabled });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps(unref(nuxtLinkProps), { custom: "" }, _attrs), {
        default: withCtx(({ href, navigate, route: linkRoute, rel, target, isExternal, isActive, isExactActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.custom) {
              ssrRenderSlot(_ctx.$slots, "default", {
                ..._ctx.$attrs,
                as: _ctx.as,
                type: _ctx.type,
                disabled: _ctx.disabled,
                href,
                navigate,
                rel,
                target,
                isExternal,
                active: isLinkActive({ route: linkRoute, isActive, isExactActive })
              }, null, _push2, _parent2, _scopeId);
            } else {
              _push2(ssrRenderComponent(_sfc_main$f, mergeProps({
                ..._ctx.$attrs,
                as: _ctx.as,
                type: _ctx.type,
                disabled: _ctx.disabled,
                href,
                navigate,
                rel,
                target,
                isExternal
              }, {
                class: resolveLinkClass({ route: linkRoute, isActive, isExactActive })
              }), {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {
                      active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                    }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", {
                        active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            }
          } else {
            return [
              _ctx.custom ? renderSlot(_ctx.$slots, "default", mergeProps({ key: 0 }, {
                ..._ctx.$attrs,
                as: _ctx.as,
                type: _ctx.type,
                disabled: _ctx.disabled,
                href,
                navigate,
                rel,
                target,
                isExternal,
                active: isLinkActive({ route: linkRoute, isActive, isExactActive })
              })) : (openBlock(), createBlock(_sfc_main$f, mergeProps({ key: 1 }, {
                ..._ctx.$attrs,
                as: _ctx.as,
                type: _ctx.type,
                disabled: _ctx.disabled,
                href,
                navigate,
                rel,
                target,
                isExternal
              }, {
                class: resolveLinkClass({ route: linkRoute, isActive, isExactActive })
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {
                    active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                  })
                ]),
                _: 2
              }, 1040, ["class"]))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const theme$2 = {
  "slots": {
    "base": [
      "rounded-[calc(var(--ui-radius)*1.5)] font-medium inline-flex items-center focus:outline-hidden disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75",
      "transition-colors"
    ],
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": "",
      "ghost": "",
      "link": ""
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "block": {
      "true": {
        "base": "w-full justify-center",
        "trailingIcon": "ms-auto"
      }
    },
    "square": {
      "true": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "active": {
      "true": {
        "base": ""
      },
      "false": {
        "base": ""
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "text-(--ui-bg) bg-(--ui-primary) hover:bg-(--ui-primary)/75 disabled:bg-(--ui-primary) aria-disabled:bg-(--ui-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "text-(--ui-bg) bg-(--ui-secondary) hover:bg-(--ui-secondary)/75 disabled:bg-(--ui-secondary) aria-disabled:bg-(--ui-secondary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-secondary)"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "text-(--ui-bg) bg-(--ui-success) hover:bg-(--ui-success)/75 disabled:bg-(--ui-success) aria-disabled:bg-(--ui-success) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-success)"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "text-(--ui-bg) bg-(--ui-info) hover:bg-(--ui-info)/75 disabled:bg-(--ui-info) aria-disabled:bg-(--ui-info) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-info)"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "text-(--ui-bg) bg-(--ui-warning) hover:bg-(--ui-warning)/75 disabled:bg-(--ui-warning) aria-disabled:bg-(--ui-warning) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-warning)"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "text-(--ui-bg) bg-(--ui-error) hover:bg-(--ui-error)/75 disabled:bg-(--ui-error) aria-disabled:bg-(--ui-error) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-error)"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "ring ring-inset ring-(--ui-primary)/50 text-(--ui-primary) hover:bg-(--ui-primary)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-(--ui-primary)"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "ring ring-inset ring-(--ui-secondary)/50 text-(--ui-secondary) hover:bg-(--ui-secondary)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-(--ui-secondary)"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "ring ring-inset ring-(--ui-success)/50 text-(--ui-success) hover:bg-(--ui-success)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-(--ui-success)"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "ring ring-inset ring-(--ui-info)/50 text-(--ui-info) hover:bg-(--ui-info)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-(--ui-info)"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "ring ring-inset ring-(--ui-warning)/50 text-(--ui-warning) hover:bg-(--ui-warning)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-(--ui-warning)"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "ring ring-inset ring-(--ui-error)/50 text-(--ui-error) hover:bg-(--ui-error)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-(--ui-error)"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "text-(--ui-primary) bg-(--ui-primary)/10 hover:bg-(--ui-primary)/15 focus-visible:bg-(--ui-primary)/15 disabled:bg-(--ui-primary)/10 aria-disabled:bg-(--ui-primary)/10"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "text-(--ui-secondary) bg-(--ui-secondary)/10 hover:bg-(--ui-secondary)/15 focus-visible:bg-(--ui-secondary)/15 disabled:bg-(--ui-secondary)/10 aria-disabled:bg-(--ui-secondary)/10"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "text-(--ui-success) bg-(--ui-success)/10 hover:bg-(--ui-success)/15 focus-visible:bg-(--ui-success)/15 disabled:bg-(--ui-success)/10 aria-disabled:bg-(--ui-success)/10"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "text-(--ui-info) bg-(--ui-info)/10 hover:bg-(--ui-info)/15 focus-visible:bg-(--ui-info)/15 disabled:bg-(--ui-info)/10 aria-disabled:bg-(--ui-info)/10"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "text-(--ui-warning) bg-(--ui-warning)/10 hover:bg-(--ui-warning)/15 focus-visible:bg-(--ui-warning)/15 disabled:bg-(--ui-warning)/10 aria-disabled:bg-(--ui-warning)/10"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "text-(--ui-error) bg-(--ui-error)/10 hover:bg-(--ui-error)/15 focus-visible:bg-(--ui-error)/15 disabled:bg-(--ui-error)/10 aria-disabled:bg-(--ui-error)/10"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25 bg-(--ui-primary)/10 hover:bg-(--ui-primary)/15 disabled:bg-(--ui-primary)/10 aria-disabled:bg-(--ui-primary)/10 focus-visible:ring-2 focus-visible:ring-(--ui-primary)"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25 bg-(--ui-secondary)/10 hover:bg-(--ui-secondary)/15 disabled:bg-(--ui-secondary)/10 aria-disabled:bg-(--ui-secondary)/10 focus-visible:ring-2 focus-visible:ring-(--ui-secondary)"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "text-(--ui-success) ring ring-inset ring-(--ui-success)/25 bg-(--ui-success)/10 hover:bg-(--ui-success)/15 disabled:bg-(--ui-success)/10 aria-disabled:bg-(--ui-success)/10 focus-visible:ring-2 focus-visible:ring-(--ui-success)"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "text-(--ui-info) ring ring-inset ring-(--ui-info)/25 bg-(--ui-info)/10 hover:bg-(--ui-info)/15 disabled:bg-(--ui-info)/10 aria-disabled:bg-(--ui-info)/10 focus-visible:ring-2 focus-visible:ring-(--ui-info)"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25 bg-(--ui-warning)/10 hover:bg-(--ui-warning)/15 disabled:bg-(--ui-warning)/10 aria-disabled:bg-(--ui-warning)/10 focus-visible:ring-2 focus-visible:ring-(--ui-warning)"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "text-(--ui-error) ring ring-inset ring-(--ui-error)/25 bg-(--ui-error)/10 hover:bg-(--ui-error)/15 disabled:bg-(--ui-error)/10 aria-disabled:bg-(--ui-error)/10 focus-visible:ring-2 focus-visible:ring-(--ui-error)"
    },
    {
      "color": "primary",
      "variant": "ghost",
      "class": "text-(--ui-primary) hover:bg-(--ui-primary)/10 focus-visible:bg-(--ui-primary)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "secondary",
      "variant": "ghost",
      "class": "text-(--ui-secondary) hover:bg-(--ui-secondary)/10 focus-visible:bg-(--ui-secondary)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "success",
      "variant": "ghost",
      "class": "text-(--ui-success) hover:bg-(--ui-success)/10 focus-visible:bg-(--ui-success)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "info",
      "variant": "ghost",
      "class": "text-(--ui-info) hover:bg-(--ui-info)/10 focus-visible:bg-(--ui-info)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "warning",
      "variant": "ghost",
      "class": "text-(--ui-warning) hover:bg-(--ui-warning)/10 focus-visible:bg-(--ui-warning)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "error",
      "variant": "ghost",
      "class": "text-(--ui-error) hover:bg-(--ui-error)/10 focus-visible:bg-(--ui-error)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "primary",
      "variant": "link",
      "class": "text-(--ui-primary) hover:text-(--ui-primary)/75 disabled:text-(--ui-primary) aria-disabled:text-(--ui-primary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"
    },
    {
      "color": "secondary",
      "variant": "link",
      "class": "text-(--ui-secondary) hover:text-(--ui-secondary)/75 disabled:text-(--ui-secondary) aria-disabled:text-(--ui-secondary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"
    },
    {
      "color": "success",
      "variant": "link",
      "class": "text-(--ui-success) hover:text-(--ui-success)/75 disabled:text-(--ui-success) aria-disabled:text-(--ui-success) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"
    },
    {
      "color": "info",
      "variant": "link",
      "class": "text-(--ui-info) hover:text-(--ui-info)/75 disabled:text-(--ui-info) aria-disabled:text-(--ui-info) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"
    },
    {
      "color": "warning",
      "variant": "link",
      "class": "text-(--ui-warning) hover:text-(--ui-warning)/75 disabled:text-(--ui-warning) aria-disabled:text-(--ui-warning) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"
    },
    {
      "color": "error",
      "variant": "link",
      "class": "text-(--ui-error) hover:text-(--ui-error)/75 disabled:text-(--ui-error) aria-disabled:text-(--ui-error) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-(--ui-bg) bg-(--ui-bg-inverted) hover:bg-(--ui-bg-inverted)/90 disabled:bg-(--ui-bg-inverted) aria-disabled:bg-(--ui-bg-inverted) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-border-inverted)"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg) hover:bg-(--ui-bg-elevated) disabled:bg-(--ui-bg) aria-disabled:bg-(--ui-bg) focus-visible:ring-2 focus-visible:ring-(--ui-border-inverted)"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-(--ui-text) bg-(--ui-bg-elevated) hover:bg-(--ui-bg-accented)/75 focus-visible:bg-(--ui-bg-accented)/75 disabled:bg-(--ui-bg-elevated) aria-disabled:bg-(--ui-bg-elevated)"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg-elevated) hover:bg-(--ui-bg-accented)/75 disabled:bg-(--ui-bg-elevated) aria-disabled:bg-(--ui-bg-elevated) focus-visible:ring-2 focus-visible:ring-(--ui-border-inverted)"
    },
    {
      "color": "neutral",
      "variant": "ghost",
      "class": "text-(--ui-text) hover:bg-(--ui-bg-elevated) focus-visible:bg-(--ui-bg-elevated) hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent"
    },
    {
      "color": "neutral",
      "variant": "link",
      "class": "text-(--ui-text-muted) hover:text-(--ui-text) disabled:text-(--ui-text-muted) aria-disabled:text-(--ui-text-muted) focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-(--ui-border-inverted)"
    },
    {
      "size": "xs",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "sm",
      "square": true,
      "class": "p-1.5"
    },
    {
      "size": "md",
      "square": true,
      "class": "p-1.5"
    },
    {
      "size": "lg",
      "square": true,
      "class": "p-2"
    },
    {
      "size": "xl",
      "square": true,
      "class": "p-2"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};

var _a$2;
const appConfigButton = _appConfig;
const button = tv({ extend: tv(theme$2), ...((_a$2 = appConfigButton.ui) == null ? void 0 : _a$2.button) || {} });
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    label: {},
    color: {},
    activeColor: {},
    variant: {},
    activeVariant: {},
    size: {},
    square: { type: Boolean },
    block: { type: Boolean },
    loadingAuto: { type: Boolean },
    onClick: {},
    class: {},
    ui: {},
    icon: {},
    avatar: {},
    leading: { type: Boolean },
    leadingIcon: {},
    trailing: { type: Boolean },
    trailingIcon: {},
    loading: { type: Boolean },
    loadingIcon: {},
    as: {},
    type: {},
    disabled: { type: Boolean },
    active: { type: Boolean, default: void 0 },
    exact: { type: Boolean },
    exactQuery: { type: [Boolean, String] },
    exactHash: { type: Boolean },
    inactiveClass: { default: "" },
    to: {},
    href: {},
    external: { type: Boolean },
    target: {},
    rel: {},
    noRel: { type: Boolean },
    prefetchedClass: {},
    prefetch: { type: Boolean },
    prefetchOn: {},
    noPrefetch: { type: Boolean },
    activeClass: { default: "" },
    exactActiveClass: {},
    ariaCurrentValue: {},
    viewTransition: { type: Boolean },
    replace: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const linkProps = useForwardProps(pickLinkProps(props));
    const { orientation, size: buttonSize } = useButtonGroup(props);
    const loadingAutoState = ref(false);
    const formLoading = inject(formLoadingInjectionKey, void 0);
    async function onClickWrapper(event) {
      loadingAutoState.value = true;
      const callbacks = Array.isArray(props.onClick) ? props.onClick : [props.onClick];
      try {
        await Promise.all(callbacks.map((fn) => fn == null ? void 0 : fn(event)));
      } finally {
        loadingAutoState.value = false;
      }
    }
    const isLoading = computed(() => {
      return props.loading || props.loadingAuto && (loadingAutoState.value || (formLoading == null ? void 0 : formLoading.value) && props.type === "submit");
    });
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(
      computed(() => ({ ...props, loading: isLoading.value }))
    );
    const ui = computed(() => tv({
      extend: button,
      variants: {
        active: {
          true: {
            base: props.activeClass
          },
          false: {
            base: props.inactiveClass
          }
        }
      }
    })({
      color: props.color,
      variant: props.variant,
      size: buttonSize.value,
      loading: isLoading.value,
      block: props.block,
      square: props.square || !slots.default && !props.label,
      leading: isLeading.value,
      trailing: isTrailing.value,
      buttonGroup: orientation.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(_sfc_main$e, mergeProps({
        type: _ctx.type,
        disabled: _ctx.disabled || isLoading.value,
        class: ui.value.base({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.base] })
      }, unref(omit)(unref(linkProps), ["type", "disabled"]), { custom: "" }, _attrs), {
        default: withCtx(({ active, ...slotProps }, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$f, mergeProps(slotProps, {
              class: ui.value.base({
                class: [props.class, (_a3 = props.ui) == null ? void 0 : _a3.base],
                active,
                ...active && _ctx.activeVariant ? { variant: _ctx.activeVariant } : {},
                ...active && _ctx.activeColor ? { color: _ctx.activeColor } : {}
              }),
              onClick: onClickWrapper
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                    var _a4, _b2, _c;
                    if (unref(isLeading) && unref(leadingIconName)) {
                      _push3(ssrRenderComponent(_sfc_main$h, {
                        name: unref(leadingIconName),
                        class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon, active })
                      }, null, _parent3, _scopeId2));
                    } else if (!!_ctx.avatar) {
                      _push3(ssrRenderComponent(_sfc_main$g, mergeProps({
                        size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                      }, _ctx.avatar, {
                        class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar, active })
                      }), null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    var _a4;
                    if (_ctx.label) {
                      _push3(`<span class="${ssrRenderClass(ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label, active }))}"${_scopeId2}>${ssrInterpolate(_ctx.label)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
                    var _a4;
                    if (unref(isTrailing) && unref(trailingIconName)) {
                      _push3(ssrRenderComponent(_sfc_main$h, {
                        name: unref(trailingIconName),
                        class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon, active })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "leading", {}, () => {
                      var _a4, _b2, _c;
                      return [
                        unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$h, {
                          key: 0,
                          name: unref(leadingIconName),
                          class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon, active })
                        }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(_sfc_main$g, mergeProps({
                          key: 1,
                          size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                        }, _ctx.avatar, {
                          class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar, active })
                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                      ];
                    }),
                    renderSlot(_ctx.$slots, "default", {}, () => {
                      var _a4;
                      return [
                        _ctx.label ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label, active })
                        }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
                      ];
                    }),
                    renderSlot(_ctx.$slots, "trailing", {}, () => {
                      var _a4;
                      return [
                        unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$h, {
                          key: 0,
                          name: unref(trailingIconName),
                          class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon, active })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ];
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$f, mergeProps(slotProps, {
                class: ui.value.base({
                  class: [props.class, (_b = props.ui) == null ? void 0 : _b.base],
                  active,
                  ...active && _ctx.activeVariant ? { variant: _ctx.activeVariant } : {},
                  ...active && _ctx.activeColor ? { color: _ctx.activeColor } : {}
                }),
                onClick: onClickWrapper
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "leading", {}, () => {
                    var _a4, _b2, _c;
                    return [
                      unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$h, {
                        key: 0,
                        name: unref(leadingIconName),
                        class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon, active })
                      }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(_sfc_main$g, mergeProps({
                        key: 1,
                        size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                      }, _ctx.avatar, {
                        class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar, active })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ];
                  }),
                  renderSlot(_ctx.$slots, "default", {}, () => {
                    var _a4;
                    return [
                      _ctx.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label, active })
                      }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
                    ];
                  }),
                  renderSlot(_ctx.$slots, "trailing", {}, () => {
                    var _a4;
                    return [
                      unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$h, {
                        key: 0,
                        name: unref(trailingIconName),
                        class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon, active })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ];
                  })
                ]),
                _: 2
              }, 1040, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const theme$1 = {
  "slots": {
    "root": "relative group overflow-hidden bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*2)] ring ring-(--ui-border) p-4 flex gap-2.5 focus:outline-none",
    "wrapper": "w-0 flex-1 flex flex-col",
    "title": "text-sm font-medium text-(--ui-text-highlighted)",
    "description": "text-sm text-(--ui-text-muted)",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xl",
    "actions": "flex gap-1.5 shrink-0",
    "progress": "absolute inset-x-0 bottom-0 h-1 z-[-1]",
    "close": "p-0"
  },
  "variants": {
    "color": {
      "primary": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)",
        "icon": "text-(--ui-primary)",
        "progress": "bg-(--ui-primary)"
      },
      "secondary": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)",
        "icon": "text-(--ui-secondary)",
        "progress": "bg-(--ui-secondary)"
      },
      "success": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)",
        "icon": "text-(--ui-success)",
        "progress": "bg-(--ui-success)"
      },
      "info": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)",
        "icon": "text-(--ui-info)",
        "progress": "bg-(--ui-info)"
      },
      "warning": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)",
        "icon": "text-(--ui-warning)",
        "progress": "bg-(--ui-warning)"
      },
      "error": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)",
        "icon": "text-(--ui-error)",
        "progress": "bg-(--ui-error)"
      },
      "neutral": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)",
        "icon": "text-(--ui-text-highlighted)",
        "progress": "bg-(--ui-bg-inverted)"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "items-center",
        "actions": "items-center"
      },
      "vertical": {
        "root": "items-start",
        "actions": "items-start mt-2.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "defaultVariants": {
    "color": "primary"
  }
};

var _a$1;
const appConfigToast = _appConfig;
const toast = tv({ extend: tv(theme$1), ...((_a$1 = appConfigToast.ui) == null ? void 0 : _a$1.toast) || {} });
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Toast",
  __ssrInlineRender: true,
  props: {
    as: {},
    title: {},
    description: {},
    icon: {},
    avatar: {},
    color: {},
    orientation: { default: "vertical" },
    actions: {},
    close: { type: [Boolean, Object], default: true },
    closeIcon: {},
    class: {},
    ui: {},
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    type: {},
    duration: {}
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultOpen", "open", "duration", "type"), emits);
    const ui = computed(() => toast({
      color: props.color,
      orientation: props.orientation,
      title: !!props.title || !!slots.title
    }));
    const el = ref();
    const height = ref(0);
    __expose({
      height
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(ToastRoot), mergeProps({
        ref_key: "el",
        ref: el
      }, unref(rootProps), {
        "data-orientation": _ctx.orientation,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] }),
        style: { "--height": height.value }
      }, _attrs), {
        default: withCtx(({ remaining, duration }, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              var _a4, _b2, _c2;
              if (_ctx.avatar) {
                _push2(ssrRenderComponent(_sfc_main$g, mergeProps({
                  size: ((_a4 = props.ui) == null ? void 0 : _a4.avatarSize) || ui.value.avatarSize()
                }, _ctx.avatar, {
                  class: ui.value.avatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.avatar })
                }), null, _parent2, _scopeId));
              } else if (_ctx.icon) {
                _push2(ssrRenderComponent(_sfc_main$h, {
                  name: _ctx.icon,
                  class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId}>`);
            if (_ctx.title || !!slots.title) {
              _push2(ssrRenderComponent(unref(ToastTitle), {
                class: ui.value.title({ class: (_b = props.ui) == null ? void 0 : _b.title })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      if (typeof _ctx.title === "function") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.title()), null, null), _parent3, _scopeId2);
                      } else if (typeof _ctx.title === "object") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.title), null, null), _parent3, _scopeId2);
                      } else {
                        _push3(`<!--[-->${ssrInterpolate(_ctx.title)}<!--]-->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        typeof _ctx.title === "function" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.title()), { key: 0 })) : typeof _ctx.title === "object" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createTextVNode(toDisplayString(_ctx.title), 1)
                        ], 64))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.description || !!slots.description) {
              _push2(ssrRenderComponent(unref(ToastDescription), {
                class: ui.value.description({ class: (_c = props.ui) == null ? void 0 : _c.description })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                      if (typeof _ctx.description === "function") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.description()), null, null), _parent3, _scopeId2);
                      } else if (typeof _ctx.description === "object") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.description), null, null), _parent3, _scopeId2);
                      } else {
                        _push3(`<!--[-->${ssrInterpolate(_ctx.description)}<!--]-->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "description", {}, () => [
                        typeof _ctx.description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.description()), { key: 0 })) : typeof _ctx.description === "object" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createTextVNode(toDisplayString(_ctx.description), 1)
                        ], 64))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.orientation === "vertical" && ((_d = _ctx.actions) == null ? void 0 : _d.length)) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: (_e = props.ui) == null ? void 0 : _e.actions }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.actions, (action, index) => {
                  _push2(ssrRenderComponent(unref(ToastAction), {
                    key: index,
                    "alt-text": action.label || "Action",
                    "as-child": "",
                    onClick: () => {
                    }
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_sfc_main$d, mergeProps({
                          size: "xs",
                          color: _ctx.color,
                          ref_for: true
                        }, action), null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_sfc_main$d, mergeProps({
                            size: "xs",
                            color: _ctx.color,
                            ref_for: true
                          }, action), null, 16, ["color"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.orientation === "horizontal" && ((_f = _ctx.actions) == null ? void 0 : _f.length) || _ctx.close) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: (_g = props.ui) == null ? void 0 : _g.actions, orientation: "horizontal" }))}"${_scopeId}>`);
              if (_ctx.orientation === "horizontal" && ((_h = _ctx.actions) == null ? void 0 : _h.length)) {
                ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(_ctx.actions, (action, index) => {
                    _push2(ssrRenderComponent(unref(ToastAction), {
                      key: index,
                      "alt-text": action.label || "Action",
                      "as-child": "",
                      onClick: () => {
                      }
                    }, {
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_sfc_main$d, mergeProps({
                            size: "xs",
                            color: _ctx.color,
                            ref_for: true
                          }, action), null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_sfc_main$d, mergeProps({
                              size: "xs",
                              color: _ctx.color,
                              ref_for: true
                            }, action), null, 16, ["color"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.close || !!slots.close) {
                _push2(ssrRenderComponent(unref(ToastClose), { "as-child": "" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                        var _a4;
                        if (_ctx.close) {
                          _push3(ssrRenderComponent(_sfc_main$d, mergeProps({
                            icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                            size: "md",
                            color: "neutral",
                            variant: "link",
                            "aria-label": unref(t)("toast.close")
                          }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                            onClick: () => {
                            }
                          }), null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                          var _a4;
                          return [
                            _ctx.close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                              key: 0,
                              icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                              size: "md",
                              color: "neutral",
                              variant: "link",
                              "aria-label": unref(t)("toast.close")
                            }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                              class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                              onClick: withModifiers(() => {
                              }, ["stop"])
                            }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                          ];
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (remaining > 0 && duration) {
              _push2(`<div class="${ssrRenderClass(ui.value.progress({ class: (_i = props.ui) == null ? void 0 : _i.progress }))}" style="${ssrRenderStyle({ width: `${remaining / duration * 100}%` })}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a4, _b2, _c2;
                return [
                  _ctx.avatar ? (openBlock(), createBlock(_sfc_main$g, mergeProps({
                    key: 0,
                    size: ((_a4 = props.ui) == null ? void 0 : _a4.avatarSize) || ui.value.avatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.avatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.avatar })
                  }), null, 16, ["size", "class"])) : _ctx.icon ? (openBlock(), createBlock(_sfc_main$h, {
                    key: 1,
                    name: _ctx.icon,
                    class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              }),
              createVNode("div", {
                class: ui.value.wrapper({ class: (_j = props.ui) == null ? void 0 : _j.wrapper })
              }, [
                _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(ToastTitle), {
                  key: 0,
                  class: ui.value.title({ class: (_k = props.ui) == null ? void 0 : _k.title })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      typeof _ctx.title === "function" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.title()), { key: 0 })) : typeof _ctx.title === "object" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createTextVNode(toDisplayString(_ctx.title), 1)
                      ], 64))
                    ])
                  ]),
                  _: 3
                }, 8, ["class"])) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(ToastDescription), {
                  key: 1,
                  class: ui.value.description({ class: (_l = props.ui) == null ? void 0 : _l.description })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "description", {}, () => [
                      typeof _ctx.description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.description()), { key: 0 })) : typeof _ctx.description === "object" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createTextVNode(toDisplayString(_ctx.description), 1)
                      ], 64))
                    ])
                  ]),
                  _: 3
                }, 8, ["class"])) : createCommentVNode("", true),
                _ctx.orientation === "vertical" && ((_m = _ctx.actions) == null ? void 0 : _m.length) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: ui.value.actions({ class: (_n = props.ui) == null ? void 0 : _n.actions })
                }, [
                  renderSlot(_ctx.$slots, "actions", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.actions, (action, index) => {
                      return openBlock(), createBlock(unref(ToastAction), {
                        key: index,
                        "alt-text": action.label || "Action",
                        "as-child": "",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$d, mergeProps({
                            size: "xs",
                            color: _ctx.color,
                            ref_for: true
                          }, action), null, 16, ["color"])
                        ]),
                        _: 2
                      }, 1032, ["alt-text", "onClick"]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              _ctx.orientation === "horizontal" && ((_o = _ctx.actions) == null ? void 0 : _o.length) || _ctx.close ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.actions({ class: (_p = props.ui) == null ? void 0 : _p.actions, orientation: "horizontal" })
              }, [
                _ctx.orientation === "horizontal" && ((_q = _ctx.actions) == null ? void 0 : _q.length) ? renderSlot(_ctx.$slots, "actions", { key: 0 }, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.actions, (action, index) => {
                    return openBlock(), createBlock(unref(ToastAction), {
                      key: index,
                      "alt-text": action.label || "Action",
                      "as-child": "",
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$d, mergeProps({
                          size: "xs",
                          color: _ctx.color,
                          ref_for: true
                        }, action), null, 16, ["color"])
                      ]),
                      _: 2
                    }, 1032, ["alt-text", "onClick"]);
                  }), 128))
                ]) : createCommentVNode("", true),
                _ctx.close || !!slots.close ? (openBlock(), createBlock(unref(ToastClose), {
                  key: 1,
                  "as-child": ""
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                      var _a4;
                      return [
                        _ctx.close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                          key: 0,
                          icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                          size: "md",
                          color: "neutral",
                          variant: "link",
                          "aria-label": unref(t)("toast.close")
                        }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                          class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                          onClick: withModifiers(() => {
                          }, ["stop"])
                        }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                      ];
                    })
                  ]),
                  _: 3
                })) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true),
              remaining > 0 && duration ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.progress({ class: (_r = props.ui) == null ? void 0 : _r.progress }),
                style: { width: `${remaining / duration * 100}%` }
              }, null, 6)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const theme = {
  "slots": {
    "viewport": "fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-(--height) focus:outline-none",
    "base": "pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:invisible data-[state=closed]:animate-[toast-closed_200ms_ease-in-out] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_ease-in-out] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out"
  },
  "variants": {
    "position": {
      "top-left": {
        "viewport": "left-4"
      },
      "top-center": {
        "viewport": "left-1/2 transform -translate-x-1/2"
      },
      "top-right": {
        "viewport": "right-4"
      },
      "bottom-left": {
        "viewport": "left-4"
      },
      "bottom-center": {
        "viewport": "left-1/2 transform -translate-x-1/2"
      },
      "bottom-right": {
        "viewport": "right-4"
      }
    },
    "swipeDirection": {
      "up": "data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]",
      "right": "data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]",
      "down": "data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]",
      "left": "data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]"
    }
  },
  "compoundVariants": [
    {
      "position": [
        "top-left",
        "top-center",
        "top-right"
      ],
      "class": {
        "viewport": "top-4",
        "base": "top-0 data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out]"
      }
    },
    {
      "position": [
        "bottom-left",
        "bottom-center",
        "bottom-right"
      ],
      "class": {
        "viewport": "bottom-4",
        "base": "bottom-0 data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out]"
      }
    },
    {
      "swipeDirection": [
        "left",
        "right"
      ],
      "class": "data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0"
    },
    {
      "swipeDirection": [
        "up",
        "down"
      ],
      "class": "data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0"
    }
  ],
  "defaultVariants": {
    "position": "bottom-right"
  }
};

var _a;
const appConfigToaster = _appConfig;
const toaster = tv({ extend: tv(theme), ...((_a = appConfigToaster.ui) == null ? void 0 : _a.toaster) || {} });
const __default__$1 = {
  name: "Toaster"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  __ssrInlineRender: true,
  props: {
    position: {},
    expand: { type: Boolean, default: true },
    portal: { type: Boolean, default: true },
    class: {},
    ui: {},
    label: {},
    duration: { default: 5e3 },
    swipeThreshold: {}
  },
  setup(__props) {
    const props = __props;
    const providerProps = useForwardProps(reactivePick(props, "duration", "label", "swipeThreshold"));
    const { toasts, remove } = useToast();
    const swipeDirection = computed(() => {
      switch (props.position) {
        case "top-center":
          return "up";
        case "top-right":
        case "bottom-right":
          return "right";
        case "bottom-center":
          return "down";
        case "top-left":
        case "bottom-left":
          return "left";
      }
      return "right";
    });
    const ui = computed(() => toaster({
      position: props.position,
      swipeDirection: swipeDirection.value
    }));
    function onUpdateOpen(value, id) {
      if (value) {
        return;
      }
      remove(id);
    }
    const hovered = ref(false);
    const expanded = computed(() => props.expand || hovered.value);
    const refs = ref([]);
    const height = computed(() => refs.value.reduce((acc, { height: height2 }) => acc + height2 + 16, 0));
    const frontHeight = computed(() => {
      var _a2;
      return ((_a2 = refs.value[refs.value.length - 1]) == null ? void 0 : _a2.height) || 0;
    });
    function getOffset(index) {
      return refs.value.slice(index + 1).reduce((acc, { height: height2 }) => acc + height2 + 16, 0);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastProvider), mergeProps({ "swipe-direction": swipeDirection.value }, unref(providerProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<!--[-->`);
            ssrRenderList(unref(toasts), (toast, index) => {
              _push2(ssrRenderComponent(_sfc_main$c, mergeProps({
                key: toast.id,
                ref_for: true,
                ref_key: "refs",
                ref: refs
              }, unref(omit)(toast, ["id", "close"]), {
                close: toast.close,
                "data-expanded": expanded.value,
                "data-front": !expanded.value && index === unref(toasts).length - 1,
                style: {
                  "--index": index - unref(toasts).length + unref(toasts).length,
                  "--before": unref(toasts).length - 1 - index,
                  "--offset": getOffset(index),
                  "--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
                  "--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
                  "--transform": "translateY(var(--translate)) scale(var(--scale))"
                },
                class: [ui.value.base(), {
                  "cursor-pointer": !!toast.onClick
                }],
                "onUpdate:open": ($event) => onUpdateOpen($event, toast.id),
                onClick: ($event) => toast.onClick && toast.onClick(toast)
              }), null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(unref(ToastPortal), {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d, _e, _f;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ToastViewport), {
                    "data-expanded": expanded.value,
                    class: ui.value.viewport({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.viewport] }),
                    style: {
                      "--scale-factor": "0.05",
                      "--translate-factor": ((_b = _ctx.position) == null ? void 0 : _b.startsWith("top")) ? "1px" : "-1px",
                      "--gap": ((_c = _ctx.position) == null ? void 0 : _c.startsWith("top")) ? "16px" : "-16px",
                      "--front-height": `${frontHeight.value}px`,
                      "--height": `${height.value}px`
                    },
                    onMouseenter: ($event) => hovered.value = true,
                    onMouseleave: ($event) => hovered.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ToastViewport), {
                      "data-expanded": expanded.value,
                      class: ui.value.viewport({ class: [props.class, (_d = props.ui) == null ? void 0 : _d.viewport] }),
                      style: {
                        "--scale-factor": "0.05",
                        "--translate-factor": ((_e = _ctx.position) == null ? void 0 : _e.startsWith("top")) ? "1px" : "-1px",
                        "--gap": ((_f = _ctx.position) == null ? void 0 : _f.startsWith("top")) ? "16px" : "-16px",
                        "--front-height": `${frontHeight.value}px`,
                        "--height": `${height.value}px`
                      },
                      onMouseenter: ($event) => hovered.value = true,
                      onMouseleave: ($event) => hovered.value = false
                    }, null, 8, ["data-expanded", "class", "style", "onMouseenter", "onMouseleave"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(toasts), (toast, index) => {
                return openBlock(), createBlock(_sfc_main$c, mergeProps({
                  key: toast.id,
                  ref_for: true,
                  ref_key: "refs",
                  ref: refs
                }, unref(omit)(toast, ["id", "close"]), {
                  close: toast.close,
                  "data-expanded": expanded.value,
                  "data-front": !expanded.value && index === unref(toasts).length - 1,
                  style: {
                    "--index": index - unref(toasts).length + unref(toasts).length,
                    "--before": unref(toasts).length - 1 - index,
                    "--offset": getOffset(index),
                    "--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
                    "--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
                    "--transform": "translateY(var(--translate)) scale(var(--scale))"
                  },
                  class: [ui.value.base(), {
                    "cursor-pointer": !!toast.onClick
                  }],
                  "onUpdate:open": ($event) => onUpdateOpen($event, toast.id),
                  onClick: ($event) => toast.onClick && toast.onClick(toast)
                }), null, 16, ["close", "data-expanded", "data-front", "style", "class", "onUpdate:open", "onClick"]);
              }), 128)),
              createVNode(unref(ToastPortal), {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a2, _b, _c;
                  return [
                    createVNode(unref(ToastViewport), {
                      "data-expanded": expanded.value,
                      class: ui.value.viewport({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.viewport] }),
                      style: {
                        "--scale-factor": "0.05",
                        "--translate-factor": ((_b = _ctx.position) == null ? void 0 : _b.startsWith("top")) ? "1px" : "-1px",
                        "--gap": ((_c = _ctx.position) == null ? void 0 : _c.startsWith("top")) ? "16px" : "-16px",
                        "--front-height": `${frontHeight.value}px`,
                        "--height": `${height.value}px`
                      },
                      onMouseenter: ($event) => hovered.value = true,
                      onMouseleave: ($event) => hovered.value = false
                    }, null, 8, ["data-expanded", "class", "style", "onMouseenter", "onMouseleave"])
                  ];
                }),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

function _useOverlay() {
  const overlays = shallowReactive([]);
  const create = (component, _options) => {
    const { props, defaultOpen, destroyOnClose } = _options || {};
    const options = reactive({
      id: Symbol(""),
      modelValue: !!defaultOpen,
      component: markRaw(component),
      isMounted: !!defaultOpen,
      destroyOnClose: !!destroyOnClose,
      props: props || {}
    });
    overlays.push(options);
    return {
      open: (props2) => open(options.id, props2),
      close: (value) => close(options.id, value),
      patch: (props2) => patch(options.id, props2)
    };
  };
  const open = (id, props) => {
    const overlay = getOverlay(id);
    if (props) {
      patch(overlay.id, props);
    }
    overlay.modelValue = true;
    overlay.isMounted = true;
    return new Promise((resolve) => {
      overlay.resolvePromise = resolve;
    });
  };
  const close = (id, value) => {
    const overlay = getOverlay(id);
    overlay.modelValue = false;
    if (overlay.resolvePromise) {
      overlay.resolvePromise(value);
      overlay.resolvePromise = void 0;
    }
  };
  const unMount = (id) => {
    const overlay = getOverlay(id);
    overlay.isMounted = false;
    if (overlay.destroyOnClose) {
      const index = overlays.findIndex((overlay2) => overlay2.id === id);
      overlays.splice(index, 1);
    }
  };
  const patch = (id, props) => {
    const overlay = getOverlay(id);
    Object.entries(props).forEach(([key, value]) => {
      overlay.props[key] = value;
    });
  };
  const getOverlay = (id) => {
    const overlay = overlays.find((overlay2) => overlay2.id === id);
    if (!overlay) {
      throw new Error("Overlay not found");
    }
    return overlay;
  };
  return {
    overlays,
    open,
    close,
    create,
    patch,
    unMount
  };
}
const useOverlay = /* @__PURE__ */ createSharedComposable(_useOverlay);

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "OverlayProvider",
  __ssrInlineRender: true,
  setup(__props) {
    const { overlays, unMount, close } = useOverlay();
    const mountedOverlays = computed(() => overlays.filter((overlay) => overlay.isMounted));
    const onAfterLeave = (id) => {
      close(id);
      unMount(id);
    };
    const onClose = (id, value) => {
      close(id, value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(mountedOverlays.value, (overlay) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(overlay.component), mergeProps({
          key: overlay.id,
          ref_for: true
        }, overlay.props, {
          open: overlay.modelValue,
          "onUpdate:open": ($event) => overlay.modelValue = $event,
          onClose: (value) => onClose(overlay.id, value),
          "onAfter:leave": ($event) => onAfterLeave(overlay.id)
        }), null), _parent);
      });
      _push(`<!--]-->`);
    };
  }
});

const __default__ = {
  name: "App"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  props: {
    tooltip: {},
    toaster: {},
    locale: {},
    scrollBody: { type: [Boolean, Object] },
    nonce: {}
  },
  setup(__props) {
    const props = __props;
    const configProviderProps = useForwardProps(reactivePick(props, "scrollBody"));
    const tooltipProps = toRef(() => props.tooltip);
    const toasterProps = toRef(() => props.toaster);
    const locale = toRef(() => props.locale);
    provide(localeContextInjectionKey, locale);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(ssrRenderComponent(unref(ConfigProvider), mergeProps({
        "use-id": () => useId(),
        dir: (_a = locale.value) == null ? void 0 : _a.dir,
        locale: (_b = locale.value) == null ? void 0 : _b.code
      }, unref(configProviderProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipProvider), tooltipProps.value, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.toaster !== null) {
                    _push3(ssrRenderComponent(_sfc_main$b, toasterProps.value, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  }
                  _push3(ssrRenderComponent(_sfc_main$a, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    _ctx.toaster !== null ? (openBlock(), createBlock(_sfc_main$b, mergeProps({ key: 0 }, toasterProps.value), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 16)) : renderSlot(_ctx.$slots, "default", { key: 1 }),
                    createVNode(_sfc_main$a)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TooltipProvider), tooltipProps.value, {
                default: withCtx(() => [
                  _ctx.toaster !== null ? (openBlock(), createBlock(_sfc_main$b, mergeProps({ key: 0 }, toasterProps.value), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 16)) : renderSlot(_ctx.$slots, "default", { key: 1 }),
                  createVNode(_sfc_main$a)
                ]),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "Layer_2",
    "data-name": "Layer 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 600 600"
  }, _attrs))}><circle cx="300" cy="300" r="300" style="${ssrRenderStyle({ "fill": "#222" })}"></circle><circle cx="326.5" cy="96.5" r="43" style="${ssrRenderStyle({ "fill": "#fff", "stroke": "#000", "stroke-miterlimit": "10" })}"></circle><path d="M391.5,93.5c3,181-375,158-204,440C102.5,313.5,421.5,356.5,391.5,93.5Z" style="${ssrRenderStyle({ "fill": "#ff9a00" })}"></path><path d="M450.5,274.5c26,250-239,101-253,259C178.5,310.5,427.5,449.5,450.5,274.5Z" style="${ssrRenderStyle({ "fill": "#ff9a00" })}"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Logo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "1"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Phone.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);

const useFacebookPixel = () => {
  const { $fbTrack } = useNuxtApp();
  const trackEvent = (event, params = {}) => {
    if (typeof $fbTrack === "function") {
      $fbTrack(event, params);
    }
  };
  return {
    trackEvent
  };
};

const _sfc_main$6 = {
  __name: "PhoneButton",
  __ssrInlineRender: true,
  props: {
    light: {
      default: false,
      type: Boolean
    },
    hideText: {
      default: false,
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    useFacebookPixel();
    let cls = "h-10 rounded-full gap-4";
    if (props.hideText) {
      cls = "w-10 rounded-xl";
    }
    cls += " inline-flex border items-center justify-center";
    if (props.light) {
      cls += " border-brand-500 text-brand-500 px-4";
    } else {
      cls += " bg-brand-500 text-white border-brand-500";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsPhone = __nuxt_component_0;
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "tel:+37378805060",
        title: "+373 78 80 50 60",
        class: [unref(cls), "px-4"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_IconsPhone, { class: "w-5 h-5 phone" }, null, _parent));
      if (!__props.hideText) {
        _push(`<div class="tracking-widest">078 80 50 60</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/PhoneButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/BurgerMenu.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);

const phoneNumber = "+37378805060";
const _sfc_main$4 = {
  __name: "ButtonsCTA",
  __ssrInlineRender: true,
  props: {
    toHeroSection: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    useFacebookPixel();
    const viberUrl = `viber://chat?number=${encodeURIComponent(phoneNumber)}`;
    let cls = "aspect-square bg-black-400 rounded-lg w-full flex flex-col gap-4 items-center justify-center hover:scale-105 transition-all duration-300";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["grid grid-cols-2 gap-4 lg:gap-6", !props.toHeroSection ? "lg:grid-cols-4" : ""]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cerere-de-credit-online",
        title: "Cerere de credit online",
        class: ["text-gray-300", unref(cls)]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-ph-pencil-simple-line",
              class: "w-6 h-6 shrink-0"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm"${_scopeId}>Cerere online</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "i-ph-pencil-simple-line",
                class: "w-6 h-6 shrink-0"
              }),
              createVNode("span", { class: "text-sm" }, "Cerere online")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="tel:+37378805060" title="Sunați-ne la telefon" class="${ssrRenderClass([unref(cls), "text-blue-400"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-ph-phone-call",
        class: "w-6 h-6 shrink-0"
      }, null, _parent));
      _push(`<span class="text-sm">Telefon</span></a><a href="https://wa.me/+37378805060" target="_blank" title="Scrieți-ne pe WhatsApp" class="${ssrRenderClass([unref(cls), "text-[#14ac4c]"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-ph-whatsapp-logo-light",
        class: "w-7 h-7 shrink-0"
      }, null, _parent));
      _push(`<span class="text-sm">WhatsApp</span></a><a${ssrRenderAttr("href", viberUrl)} class="${ssrRenderClass([unref(cls), "text-[#7360f2]"])}" title="Scrieți-ne pe Viber"><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M7.965 6.202a.82.82 0 0 0-.537.106h-.014c-.375.22-.713.497-1.001.823c-.24.277-.37.557-.404.827c-.02.16-.006.322.041.475l.018.01c.27.793.622 1.556 1.052 2.274a13.4 13.4 0 0 0 2.03 2.775l.024.034l.038.028l.023.027l.028.024a13.6 13.6 0 0 0 2.782 2.04c1.155.629 1.856.926 2.277 1.05v.006c.123.038.235.055.348.055a1.6 1.6 0 0 0 .964-.414c.325-.288.6-.627.814-1.004v-.007c.201-.38.133-.738-.157-.981A12 12 0 0 0 14.41 13c-.448-.243-.903-.096-1.087.15l-.393.496c-.202.246-.568.212-.568.212l-.01.006c-2.731-.697-3.46-3.462-3.46-3.462s-.034-.376.219-.568l.492-.396c.236-.192.4-.646.147-1.094a12 12 0 0 0-1.347-1.88a.75.75 0 0 0-.44-.263M12.58 5a.5.5 0 0 0 0 1c1.264 0 2.314.413 3.145 1.205c.427.433.76.946.978 1.508c.219.563.319 1.164.293 1.766a.5.5 0 0 0 1 .042a5.4 5.4 0 0 0-.361-2.17a5.4 5.4 0 0 0-1.204-1.854l-.01-.01C15.39 5.502 14.085 5 12.579 5"></path><path d="M12.545 6.644a.5.5 0 0 0 0 1h.017c.912.065 1.576.369 2.041.868c.477.514.724 1.153.705 1.943a.5.5 0 0 0 1 .023c.024-1.037-.31-1.932-.972-2.646V7.83c-.677-.726-1.606-1.11-2.724-1.185l-.017-.002z"></path><path d="M12.526 8.319a.5.5 0 1 0-.052.998c.418.022.685.148.853.317c.169.17.295.443.318.87a.5.5 0 1 0 .998-.053c-.032-.6-.22-1.13-.605-1.52c-.387-.39-.914-.58-1.512-.612"></path><path d="M7.067 2.384a22.15 22.15 0 0 1 9.664 0l.339.075a5.16 5.16 0 0 1 3.872 3.763a19.7 19.7 0 0 1 0 9.7a5.16 5.16 0 0 1-3.872 3.763l-.34.075a22.2 22.2 0 0 1-6.077.499L8 22.633a.75.75 0 0 1-1.24-.435l-.439-2.622a5.16 5.16 0 0 1-3.465-3.654a19.7 19.7 0 0 1 0-9.7a5.16 5.16 0 0 1 3.872-3.763zm9.337 1.463a20.65 20.65 0 0 0-9.01 0l-.34.076A3.66 3.66 0 0 0 4.31 6.591a18.2 18.2 0 0 0 0 8.962a3.66 3.66 0 0 0 2.745 2.668l.09.02a.75.75 0 0 1 .576.608l.294 1.758l1.872-1.675a.75.75 0 0 1 .553-.19a20.7 20.7 0 0 0 5.964-.445l.339-.076a3.66 3.66 0 0 0 2.745-2.668c.746-2.94.746-6.021 0-8.962a3.66 3.66 0 0 0-2.745-2.668z"></path></svg><span class="text-sm">Viber</span></a></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ButtonsCTA.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const showMenu = ref(false);
    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
      (void 0).body.classList.toggle("menu-open");
    };
    watch(route, () => {
      showMenu.value = false;
      (void 0).body.classList.remove("menu-open");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_IconsLogo = __nuxt_component_0$1;
      const _component_UiPhoneButton = _sfc_main$6;
      const _component_IconsBurgerMenu = __nuxt_component_3;
      const _component_UIcon = _sfc_main$h;
      const _component_UiButtonsCTA = _sfc_main$4;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-black-500/70 border-b border-brand-500/5 sticky top-0 backdrop-blur-lg z-10" }, _attrs))}><div class="flex justify-between items-center gap-4 h-14 container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        title: "Ideal Credit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconsLogo, { class: "w-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconsLogo, { class: "w-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><nav class="items-center gap-6 hidden md:flex">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/despre-noi",
        title: "Despre noi"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Despre noi`);
          } else {
            return [
              createTextVNode("Despre noi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacte",
        title: "Contacte"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contacte`);
          } else {
            return [
              createTextVNode("Contacte")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiPhoneButton, { light: "" }, null, _parent));
      _push(`</nav><div class="flex md:hidden"><div class="p-2 bg-black-400 cursor-pointer rounded-full">`);
      _push(ssrRenderComponent(_component_IconsBurgerMenu, null, null, _parent));
      _push(`</div>`);
      if (showMenu.value) {
        _push(`<div class="absolute top-0 left-0 bg-black-600 mobile-dropdown shadow-md w-full flex flex-col z-50 h-[100dvh] overflow-y-auto"><div class="p-4 flex justify-end">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-ph-x-circle-thin",
          class: "cursor-pointer h-11 w-11 text-white text-opacity-80",
          onClick: toggleMenu
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/despre-noi",
          title: "Despre noi",
          class: "flex w-full font-medium text-lg p-4 border-b border-gray-300/30"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Despre noi `);
            } else {
              return [
                createTextVNode(" Despre noi ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contacte",
          title: "Contacte",
          class: "flex w-full font-medium text-lg p-4 border-b border-gray-300/30"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Contacte `);
            } else {
              return [
                createTextVNode(" Contacte ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mt-auto mb-5 space-y-4 text-center"><div class="text-lg">Solicită un credit acum!</div>`);
        _push(ssrRenderComponent(_component_UiButtonsCTA, { toMenu: "" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/includes/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();

const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          {
            vnode = h(Suspense, {
              suspensible: true
            }, {
              default: () => {
                const providerVNode = h(RouteProvider, {
                  key: key || void 0,
                  vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                  route: routeProps.route,
                  renderKey: key || void 0,
                  vnodeRef: pageRef
                });
                return providerVNode;
              }
            });
            return vnode;
          }
        }
      });
    };
  }
});
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}

const __nuxt_component_3_lazy = defineAsyncComponent(() => import('./Footer.vue.mjs').then((c) => c.default || c));
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      meta: [
        { property: "og:image", content: "https://idealcredit.md/ideal-credit-og.webp" },
        { property: "og:image:alt", content: "Credite nebancare pentru afaceri și nevoi personale" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UApp = _sfc_main$9;
      const _component_IncludesHeader = _sfc_main$3;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_LazyIncludesFooter = __nuxt_component_3_lazy;
      _push(ssrRenderComponent(_component_UApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col min-h-screen"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IncludesHeader, null, null, _parent2, _scopeId));
            _push2(`<main class="flex-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(`</main>`);
            _push2(ssrRenderComponent(_component_LazyIncludesFooter, { class: "mt-auto" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col min-h-screen" }, [
                createVNode(_component_IncludesHeader),
                createVNode("main", { class: "flex-auto" }, [
                  createVNode(_component_NuxtPage)
                ]),
                createVNode(_component_LazyIncludesFooter, { class: "mt-auto" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "404 - Această pagină nu există!",
      meta: [
        {
          name: "description",
          content: "404 - Această pagină nu există!"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen grid place-content-center" }, _attrs))}><div class="text-center"><div class="flex flex-col gap-4 justify-center items-center"><h1 class="hero-title">404</h1><p class="text-gray-500 text-4xl">Această pagină nu există!</p><div class="mt-10 text-lg"><button class="text-orange-color flex gap-4 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path></svg> Înapoi la pagina principală </button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = defineAsyncComponent(() => import('./island-renderer.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    var _a;
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      (_a = nuxt.payload).error || (_a.error = createError(error));
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

const server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: entry$1
});

export { __nuxt_component_0$1 as _, __nuxt_component_1 as a, _sfc_main$h as b, createError as c, useAppConfig as d, useLocale as e, _sfc_main$d as f, _appConfig as g, _export_sfc as h, injectHead as i, _sfc_main$4 as j, useHead as k, gt as l, useSchemaOrg as m, useRoute as n, mt as o, __nuxt_component_0$2 as p, useOgImageRuntimeConfig as q, useSiteConfig as r, server as s, tv as t, useFacebookPixel as u };
//# sourceMappingURL=server.mjs.map
