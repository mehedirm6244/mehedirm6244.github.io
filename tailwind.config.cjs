/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte}'
  ],
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
        gray: '#a9b1d6',
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
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.25', variable: '--opsz 12' }],
        sm: ['0.875rem', { lineHeight: '1.5', variable: '--opsz 14' }],
        base: ['1rem', { lineHeight: '1.5', variable: '--opsz 16' }],
        lg: ['1.125rem', { lineHeight: '1.5', variable: '--opsz 18' }],
        xl: ['1.25rem', { lineHeight: '1.75', variable: '--opsz 20' }],
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
        'default': 'url("/cursors/default.svg"), default',
        'pointer': 'url("/cursors/pointer.svg"), pointer',
        'text': 'url("/cursors/text.svg"), text',
      },
    },
  },

  plugins: [
  ],
}
