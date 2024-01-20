/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1080px',
      xl: '1440px'
    },
    extend: {
      colors: {
        red: '#f7768e',
        green: '#9ece6a',
        yellow: '#e0af68',
        blue: '#7aa2f7',
        magenta: '#c58af9',
        cyan: '#7dcfff',
        teal: '#1abc9c',
        lightGray: '#a9b1d6',
        white: '#c0caf5',
        bg: '#343545',
        bgDark: '#242431',
        bgDarker: '#1b1b27',
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar'),
  ],
}
