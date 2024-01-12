export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            script: [
                {
                    src: "https://kit.fontawesome.com/8b6552ddec.js",
                    crossorigin: "anonymous",
                },
            ],
        },
    },
    plugins: ["~/src/plugins/apollo.ts"],
    runtimeConfig: {
        public: {
            bitQueryApiKey: process.env.NUXT_APP_BITQUERY_API_KEY,
        },
        private: {},
    },
});
