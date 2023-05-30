/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}"
  ],
  theme: {
    screens: {
      'md': '577px',
      'lg': '768px'
    },
    extend: {},
  },
  plugins: [],
}
