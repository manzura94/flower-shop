import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      maxWidth: {
        '1200': '75rem', 
      },
      minWidth: {
        '360': '22.5rem', 
      },
      spacing: {
        '3.5': '12px', 
      },
    },
  },
  plugins: [],
};
export default config;
