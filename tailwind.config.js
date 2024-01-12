/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            screens: {
                xm: "400px",
                xxm: "375px",
                xx: "200px",
            },
        },
    },
    plugins: [],
};
