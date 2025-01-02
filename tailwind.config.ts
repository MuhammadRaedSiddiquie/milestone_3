import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '976px',
        l: '1024px',
        xx: '1280px',
        xl: '1440px',
        xxl: '1920px'
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryCol: '#252B42',
        primaryHov: '#181c2b',
        secondaryCol: '#737373',
        secondaryHov: '#333333',
        blueCol: '#23A6F0',
        blueHov: '#1e8cca'
      },
    },
  },
  plugins: [],
};
export default config;
