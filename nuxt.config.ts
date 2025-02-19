export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/image", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  runtimeConfig: {
    public: {
      baseURL: "https://siteapis.woga.app/",
    },
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        name: "English",
        file: "en.json",
        iso: "en-US",
        dir: "ltr",
      },
      {
        code: "ar-JO",
        name: "Arabic",
        file: "ar.json",
        iso: "ar-JO",
        dir: "rtl",
      },
    ],
    defaultLocale: "en-US",
    detectBrowserLanguage: false,
  },
});
