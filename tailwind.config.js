/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'peach': {
          100: '#fcd19c',
          200: '#f3c081',
          300: '#ee9c38',
        },
      },
      borderRadius: {
        customHero: '54% 46% 31% 69% / 48% 49% 51% 52%',
        customHeroHover: '69% 31% 56% 44% / 37% 56% 44% 63% '
      },
    },
  },
  plugins: [],
}