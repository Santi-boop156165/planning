/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#3c1470', 
      },
keyframes: {
  fadeIn: {
    '0%': { opacity: '0.5' },
    '100%': { opacity: '1' },
  },
  'flip-x': { 
    '0%': {
      transform: 'scaleX(1)'
    },
    '50%': {
      transform: 'scaleX(-1)'
    },
    '100%': {
      transform: 'scaleX(1)'
    }
  }
},
animation: {
  fadeIn: 'fadeIn 0.5s ease-out',  
  'flip-x': 'flip-x 0.9s ease-out'  
},
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'start': '#3c1470', 
        'middle': '#4b2f71', 
        'end': '#817893', 
      }),
    },
  },
  plugins: [],
}