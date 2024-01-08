// https://nuxt.com/docs/api/configuration/nuxt-config
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
});
