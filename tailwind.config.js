/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#040619",
        primary: "#ffffff",
        secondary: "#4b6bfb",
      },

      fontFamily: {
        title: "Volkhov",
        bodyContent: "Inter Tight",
      },
    },
  },
  plugins: [],
};
