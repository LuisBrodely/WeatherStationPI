/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bistre: {
          50: '#69433A',
          100: '#402923'
        },
        jasper: {
          50: '#D8876F',
          100: '#C95B38'
        },
        beaver: {
          50: '#BFAA9C',
          100: '#A78A77'
        },
        pearl: {
          50: '#F9F6F0',
          100: '#E6D8BD'
        },
        night: {
          100: '#101010',
          50: '#1F1F1F'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
