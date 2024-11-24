/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./templates/**.{html,js}", "./**.{html,js}"],
    theme: {
      colors: {
        primary: '#1d72d2', 
        title: '#323a56',
        text: '#8a90a5',
        bg: '#f8fafc',
        white: '#fff',
      },
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
        extend: {},
    },
    plugins: [],
}
