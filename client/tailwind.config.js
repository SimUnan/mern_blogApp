/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif']
      },
      colors: {
        bg_color: 'rgb(var(--bg_color))',
        txt_color: 'rgb(var(--text_color))',
        txt_desc_color: 'rgb(var(--desc_color))',
        primaryColor: "rgb(var(--primary_color))",
        secondaryColor: "rgb(var(--secondary_color))"
      },
    },
  },
  plugins: [],
}