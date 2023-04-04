/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx',
    './layout/**/*.tsx',
    './components/**/*.tsx',
  ],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Raleway", "sans-serif"]
    },
    colors: {
      'white': '#ffffff',
      'bg-dark': '#004e6d',
      'bg-light': '#005b7f',
      'warning': '#565584',
      'danger': '#e34035',
      'btn-hover': '#00aeef',
      'light-gray': '#f8f8f8',
      'dark-gray': '#333333',
      'star': '#ffce08',
    },
  },
  variants: {
     margin: ['hover'],
     margin: ['responsive', 'hover'],
  },
  plugins: [],
}
