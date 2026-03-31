/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#111111',
        'bg-card': '#141414',
        'text-primary': '#e8e8e8',
        'text-secondary': '#a0a0a0',
        'accent': '#4a9eff',
        'accent-hover': '#6bb1ff',
        'border': '#222222',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
