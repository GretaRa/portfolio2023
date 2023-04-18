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
    },
  },
  plugins: [],
}