/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './scripts/*.js'],
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
        bg: '#1b1b27',
        bgDark: '#11111d',
        bgDarker: '#0c0c18',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        }
      },
      animation: {
        blink: 'blink 1s infinite',
      },
    },
  },

  plugins: [
  ],
}
