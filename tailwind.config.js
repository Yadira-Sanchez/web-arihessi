/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ari: {
                    rose: '#F472B6',
                    lavender: '#A78BFA',
                    mint: '#4ADE80',
                    slate: '#1E293B',
                    offwhite: '#F8FAFC',
                },
            },
        },
    },
    plugins: [],
}
