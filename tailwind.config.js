/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ['tailwind.html', 'Karya.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'satu':'#363636',
        'dua':'#DC2F2F',
        'tiga':'#FF894C',
        'empat':'#F8F8F8'
      },
    },
  },
  plugins: [],
}
