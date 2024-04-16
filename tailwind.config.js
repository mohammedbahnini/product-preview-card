/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'fraunces' : '"Fraunces", serif' , 
        'montserrat' : '"Montserrat", sans-serif'
      }, 
      colors : {
        'cream' : '#F2EAE2' , 
        'aurometal' : '#6C7289' , 
        'deep-aquamarine' : '#3D8168' , 
        'dark-deep-aquamarine' : '#1A4032' , 
        'gunmetal' : '#1C232B'
      }
    },
  },
  plugins: [],
}