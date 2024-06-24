/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './blogs/*.html', './scripts/*.js', './scripts/components/*.js'],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1080px',
      xl: '1440px'
    },
    extend: {
      colors: {
        // Modified version of the TokyoNight color palette
        red: '#f7768e',
        green: '#9ece6a',
        yellow: '#e0af68',
        blue: '#7aa2f7',
        magenta: '#c58af9',
        orange: '#ff9e64',
        cyan: '#7dcfff',
        teal: '#41a6b5',
        lightGray: '#a9b1d6',
        white: '#c0caf5',
        bg: {
          100: '#252536',
          200: '#212138',
          300: '#19192b',
          400: '#151524',
          500: '#11111d',
          600: '#0c0c16',
          700: '#09090f',
        },
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
      cursor: {
        'default': 'url("../assets/cursor/cursor.svg"), default',
        'pointer': 'url("../assets/cursor/pointer.svg"), pointer',
        'wait': 'url("../assets/cursor/wait.svg"), wait',
        'not-allowed': 'url("../assets/cursor/disabled.svg"), not-allowed',
      },
    },
  },

  plugins: [
  ],
}
