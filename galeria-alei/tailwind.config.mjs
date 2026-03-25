// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'neue-roman': ['NeueRoman'],
        'neue-roman-it': ['NeueRomanIt'],
        'neue-bold': ['NeueBold'],
        'neue-bold-it':['NeueBoldIt'],
      },
    },
  },
  plugins: [],
}