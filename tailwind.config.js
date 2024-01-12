/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2174ea",
        secondary : '#101d2d',
        'gray-custom' : '#94a3b8',
        'gray-blue' : '#93c5fd' ,
        'white-custom' : 'rgba(255 , 255 , 255 , 0.8)'
      },
      fontFamily : {
        Inter : 'Inter' ,
        Playfair : 'Playfair'
      }
    },
  },
  plugins: [],
};
