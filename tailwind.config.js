/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your components
    "./node_modules/@shadcn/**/*.{js,jsx,ts,tsx}", // Shadcn-specific
  ],

  compilerOptions: {
    // ...
    baseUrl: ".",
    paths: {
      "@/*": ["./src/*"],
    },
    // ...
  },

  theme: {
    extend: {
      colors: {
        herocolor: "#7A9FD0",
        aboutbg: "#001A3E",
        cartcolor: "#001A3E",
        cartbg: "#3D74BF",
        homebgshadow: "RGBA(109,151,207,.5)",
      },
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1750px",
    },
  },
  plugins: [],
};
