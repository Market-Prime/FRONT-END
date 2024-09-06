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
        seamlessbg: "#004AAD",
        shopcolor: "#002366",
        topdeal: "#333333",
        topdealbg: "#E6F7FF",
        homebgshadow: "RGBA(109,151,207,.5)",
        tryonecolor: "#0A51D0",
      },
    },
  },
  plugins: [],
};
