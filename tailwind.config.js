/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0a192f',
        'primary-light': '#112240',
        'accent': '#00df9a',
        'text-primary': '#ccd6f6',
        'text-secondary': '#8892b0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}