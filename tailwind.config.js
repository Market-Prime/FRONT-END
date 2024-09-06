/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        herocolor:"#7A9FD0",
        aboutbg:"#001A3E",
        cartcolor:"#001A3E",
        cartbg:"#3D74BF",
        seamlessbg:'#004AAD',
        shopcolor:'#002366',
        topdeal:'#333333',
        topdealbg:"#E6F7FF",
        homebgshadow:"RGBA(109,151,207,.5)",
        tryonecolor:'#0A51D0'
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
