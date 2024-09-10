/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist' : ['Urbanist', 'sans-serif'],
        'clash-grotesk' : ['Clash Grotesk Bold'] 
      },
      backgroundColor: {
        'bg-color' : 'var(--background-color)'
      },
      colors: {
        'font-color' : 'var(--font-color)'
      },
      fontSize: {
        '12xl' : '20rem'
      }
    },
  },
  plugins: [],
}

