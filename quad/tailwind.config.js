/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./index.html", // Path to the main HTML file to be scanned for class names or directives             
    "./src/**/*.{js,jsx,ts,tsx}", // Path to the source directory, including all JavaScript and TypeScript files
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
}