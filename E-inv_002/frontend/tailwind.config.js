/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#48283D',
          dark: '#3c202c',
          2: '#70515C',
        },
        rose: {
          DEFAULT: '#E8B8C0',
          2: '#D5A0AC',
          deep: '#D5A0AC',
        },
        gold: {
          DEFAULT: '#C5A36B',
          light: '#E5D3A4',
        },
        paper: '#FFF8F0',
        parchment: '#FCEBE1',
        'venue-bg': '#F8E9E9',
        muted: '#70515C',
      },
      fontFamily: {
        name: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Arial', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        cinzel: ['"Cinzel"', 'serif'],
        tamil: ['"bamnin_tamil_3"', '"Bamini"', '"Baamini"', '"Kavivanar"', '"Anek Tamil"', '"Noto Serif Tamil"', 'serif'],
      },
    },
  },
  plugins: [],
}
