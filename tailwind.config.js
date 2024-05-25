/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-1": "#0B7077",
        "theme-2": "#D2E6E4",
        "theme-3": "#232D3F",
      },

      fontFamily: {
       "raleway" : ("Raleway", "sans-serif")
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}