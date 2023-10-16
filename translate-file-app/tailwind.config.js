/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white-smoke': '#f5f5f5',
      },
    },
    container:{
      center: true,
      padding: "2.5 rem"
    }
    
  },
  plugins: [],
};
