/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Cairo: ["Cairo", "sans-serif"]
            },
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "1400px",
                },
            },
            colors: {
                background: "#F7F6F6",
                foreground: "#032326",
                border: "#B7AECA",
                primary: {
                    DEFAULT: "#302CA2",
                    foreground: "#FFFFFF"
                },
                secondary: {
                    DEFAULT: "#23104E",
                    foreground: "#FFFFFF",
                    background: "#00000033"
                },
                accent: {
                    DEFAULT: "#26A37C",
                    foreground: "#FFFFFF"
                }
            }
        },
    },
    plugins: [],
}
