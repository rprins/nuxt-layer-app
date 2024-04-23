// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  extends: [
    ['github:rprins/nuxt-layer-base', { install: true }]
  ],
})
