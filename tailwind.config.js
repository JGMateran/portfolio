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
            'h1,h2,h3,h4': {
              color: theme('colors.white')
            },
            a: {
              color: theme('colors.white')
            },
            p: {
              color: theme('colors.slate.400')
            },
            code: {
              fontFamily: 'Fira Code'
            },
            pre: {
              padding: '1.5rem 0',
              backgroundColor: theme('colors.gray.800')
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
