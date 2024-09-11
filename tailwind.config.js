/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors:{
        'custom-white': '#F3F8FF',
        'custom-pink': '#E26EE5',
        'custom-light-blue': '#7E30E1',
        'custom-dark-blue': '#49108B'
      }
    },
  },
  plugins: [],
}

