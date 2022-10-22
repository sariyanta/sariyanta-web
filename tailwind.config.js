/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'worksans' : ['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}