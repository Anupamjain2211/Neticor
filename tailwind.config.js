/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite"/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver':'#FSF7FA',
        'neutralDGrey':'#4D4D4D',
        'neutralPrimary':'#2980b9',
        'neutralGrey':'#FSF7FA'



      }
    },
  },
  plugins: [require('flowbite/plugin')],
}