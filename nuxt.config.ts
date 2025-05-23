// https://nuxt.com/docs/api/configuration/nuxt-config
import config from './config'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', 'nuxt-swiper'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
  },
  runtimeConfig: {
    public: config,
  },
})
