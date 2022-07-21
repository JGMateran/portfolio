const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './layouts/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D0E12',
        gray: {
          50: '#B0B5C0',
          100: '#A5ABB6',
          200: '#8E96A4',
          300: '#788192',
          400: '#646D7D',
          500: '#525966',
          600: '#393E47',
          700: '#202328',
          800: '#1b1e23',
          900: '#16191d'
        }
      },

      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: theme('colors.slate.800'),
              padding: '1.5rem 1.5rem 1.5rem 0'
            }
          }
        },
        dark: {
          css: {
            'h1,h2,h3,h4,h5,h6,a': {
              color: theme('colors.white')
            },
            p: {
              color: theme('colors.slate.300')
            },
            'ol,ul': {
              color: theme('colors.slate.300')
            },
            'strong,code': {
              color: theme('colors.white')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
