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