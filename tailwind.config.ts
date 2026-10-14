import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'Inter', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'Arial Narrow', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#f97316',
          'orange-dark': '#ea580c',
        },
        kraft: {
          50: '#FBF7EF',
          100: '#F2E8D5',
          200: '#E4D3AE',
          400: '#C9A66B',
          600: '#8A6A3F',
          800: '#4A3423',
          950: '#241A12',
        },
        ink: '#1F1B16',
        aus: {
          green: '#00843D',
          gold: '#FFCD00',
          blue: '#012169',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'scroll': 'scroll 30s linear infinite',
        'marquee': 'marquee 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config