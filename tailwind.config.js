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
    textColor:{
      'carbon':'#A9A9A9',
    },
    backgroundColor: {
      'neutral':'EFEFEF'
    },
    extend: {
      backgroundImage: {
        'navBackground': "url('./images/navBackground.jpg')"
      }
    },
  },
  plugins: [],
}

