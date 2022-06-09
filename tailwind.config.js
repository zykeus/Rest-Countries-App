/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'md-lg': '976px',
      'lg': '1280px',
      'xl': '1440px',
      '2xl': '1920px'
    },
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-darkish-blue': 'hsl(207, 26%, 17%)',
        'very-dark-blue': 'hsl(200, 15%, 8%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
      },
      fontSize: {
        'homepage': '0.875rem',
        'detail-page': '1rem'
      },
      fontFamily: {
        'nunito': ["'Nunito Sans', sans-serif"]
      },
      fontWeight: {
        'light': 300,
        'medium': 600,
        'extra-bold': 800
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
