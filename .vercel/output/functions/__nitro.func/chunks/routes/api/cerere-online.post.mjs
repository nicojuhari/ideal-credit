import { b as defineEventHandler, r as readBody, u as useRuntimeConfig } from '../../nitro/nitro.mjs';
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
import 'vue';
import '@iconify/utils';

const cerereOnline_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  let apiURL = config.icm_api_url;
  if (apiURL && body && config.secret_key) {
    try {
      await $fetch(apiURL + "/cerere_online", {
        method: "POST",
        headers: {
          "x-api-secret-key": config.secret_key
        },
        body
      });
      return { success: true };
    } catch (err) {
      console.log(err);
      return {
        success: false,
        error: err instanceof Error ? err.message : "An unknown error occurred"
      };
    }
  }
  return { success: false, error: "Invalid API URL or request body" };
});

export { cerereOnline_post as default };
//# sourceMappingURL=cerere-online.post.mjs.map
