/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#0a0a0a",
                darkAccent: "#1a1a1a",
                primary: "#ffffff",
                accent: "#a855f7", // Purple accent
            },
            fontFamily: {
                sans: ['Inter', 'measure', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
