/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary-color": "#102F5D;",
        "secondary-color": "#164EA1;",
      },
    },
  },
  plugins: [],
}

