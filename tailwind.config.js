/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blood: {
          DEFAULT: '#8a0303',
          dark: '#5c0202',
          light: '#b30404'
        }
      },
      fontFamily: {
        body: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
