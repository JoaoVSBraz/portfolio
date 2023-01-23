/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        dark: '#00C889',
        regular: '#15E49A',
        light: '#37FFBF'
      },
      gray: {
        dark: '#202020',
        regular: '#49454C',
        light: '#868389'
      },
      white: {
        dark: '#DADADA',
        regular: '#EDEDED',
        light: '#F9F9F9'
      },
      transparent: 'transparent'
    },
    fontFamily: {
      saira: ['Saira Condensed', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
