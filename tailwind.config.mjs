/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e8f1f4',
          100: '#d1e3e9',
          200: '#a3c7d3',
          300: '#75abbd',
          400: '#478fa7',
          500: '#205b73',
          600: '#1a495c',
          700: '#133745',
          800: '#0d252e',
          900: '#061217',
        },
      },
    },
  },
  plugins: [],
}
