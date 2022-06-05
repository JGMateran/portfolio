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
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            pre: {
              padding: '1.5rem 0'
            }
          }
        },
        dark: {
          css: {
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.white')
            },
            p: {
              color: theme('colors.slate.300')
            },
            'ol,ul': {
              color: theme('colors.slate.300')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
