/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        herocolor:"#7A9FD0"
      }

    },
    screens:{
      'sm': '300px',
      'md': '768px',     
      'lg': '1024px',
      'xl': '1280px',  
      '2xl': '1750px',
    }
  },
  plugins: [],
}
