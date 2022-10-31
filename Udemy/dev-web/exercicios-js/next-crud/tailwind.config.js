/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: {
    constent: ['./src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
],
    safelist: [
      /^gb-/,
      /^to-/,
      /^from-/,
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
