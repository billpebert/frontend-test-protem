/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '50px',
        xl: '100px',
      },
      center: true,
    },
    colors: {
      primary: '#024D94',
      secondary: '#F8D171',
      grey: '#555555',
      black: '#000',
      white: '#fff',
      transparent: 'transparent'
    },
    fontFamily: {
      nunito: 'Nunito Sans, sans-serif',
      open: 'Open Sans, sans-serif'
    },
  },
  plugins: [],
}