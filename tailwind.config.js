module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      // fontSize: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
