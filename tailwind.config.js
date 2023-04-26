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
   
   fontFamily: {
      'navigation': ['Roboto Slab','Open Sans', 'Roboto','Sans'],
      'about': ['Roboto Slab'],
   } ,
  plugins: [],
}
}


