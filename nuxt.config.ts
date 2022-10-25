export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    
    modules: [
        '@nuxtjs/color-mode',
    ],

    css: [
        '@/assets/css/pretest.css',
    ],

    head: {
        link: [
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Poppins"
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Raleway"
            },
        ],
    },
})
