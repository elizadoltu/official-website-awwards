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
        'font-color' : 'var(--font-color)',
        'bg-color' : 'var(--background-color)'
      },
      fontSize: {
        '12xl' : '20rem',
        '10xl' : '12rem',
        '14xl' : '25rem'
      },
      width: {
        '256': '30rem',
      },
      lineHeight: {
        '1rem' : '9.5rem'
      }
    },
  },
  plugins: [],
}

