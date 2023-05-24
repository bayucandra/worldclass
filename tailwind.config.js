/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx',
    './layout/**/*.tsx',
    './components/**/*.tsx',
  ],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
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
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '0.4em',
    },
  },
  variants: {
     margin: ['hover'],
     margin: ['responsive', 'hover'],
  },
  plugins: [],
}
