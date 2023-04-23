/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'desktop':'768px',
      'tablet':{'max':'767px'},
    },
    extend: {
      backgroundImage: {
        'navBackground': "url('./images/navBackground.jpg')"
      }
    },
  },
  plugins: [],
}

