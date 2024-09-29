/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'mobile': '300px',
      'tablet': '768px',
      'desktop': '1500px',
      ...defaultTheme.screens,
    },
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
        '14xl' : '25rem',
        '13xl' : '21rem',
        '11xl' : '18rem',
        '15xl' : '16rem',
      },
      width: {
        '256': '30rem',
      },
      lineHeight: {
        '1rem' : '9.5rem'
      },
      backgroundImages: {
        'noise': 'url("/assets/noisy-background.jpg")'
      }
    },
  },
  plugins: [],
}

