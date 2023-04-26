/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        colors: {
            primary: "rgb(1,188,141)",
        },
        extend: {
            boxShadow: {
                dropdown: "rgba(0, 0, 0, 0.1) 0px 10px 60px",
            },
        },
    },
    plugins: [],
};
