const colors = require('./src/assets/colors.jsx');    

/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./index.html", // Path to the main HTML file to be scanned for class names or directives             
    "./src/**/*.{js,jsx,ts,tsx}", // Path to the source directory, including all JavaScript and TypeScript files
  ],
  theme: {
    fontFamily: {
      title_font: ['Barlow', 'sans-serif'],
      header_font: ['Oswald', 'sans-serif'],
      text_font: ['Archivo', 'sans-serif'], 

    },
    extend: {
      colors: {
        ...colors, // Spread the imported colors object
      },

      fontSize: {
        'base': '1.375rem', //22px
        'title_size': '4.25rem', //68px
        'subtitle_size':'1.875rem', //30px
        'smalltext_size':'1rem' //16px
  
      },
    },
  },
  plugins: [],
}