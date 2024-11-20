/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
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
  			herocolor: '#7A9FD0',
  			aboutbg: '#001A3E',
  			cartcolor: '#001A3E',
  			cartbg: '#3D74BF',
  			seamlessbg: '#004AAD',
  			shopcolor: '#002366',
  			topdeal: '#333333',
  			topdealbg: '#E6F7FF',
  			homebgshadow: 'RGBA(109,151,207,.5)',
  			tryonecolor: '#0A51D0',
  			productcolor: '#3D56FA',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			sm: '300px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1750px'
  		},
  		widths: {
  			extralarge2xl: '15.5%',
  			large: '30%',
  			medium: '50%'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
