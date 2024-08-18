/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      colors: {
        'secondary': '#F9F9F9',
        'gray': '#C3D4E9',
        'dark-gray': '#596780',
        'primary': '#3563E9',
        'red': '#ED3F3F',
      }
    },
  },
  plugins: [],
}

