/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {

      fontFamily:{
        inter:['Inter', 'sans-serif']
      },
      colors:{
        SoftOrange:'hsl(35, 77%, 62%)',
        SoftRed: 'hsl(5, 85%, 63%)',
        OffWhite: 'hsl(36, 100%, 99%)',
        GrayishBlue: 'hsl(233, 8%, 79%)',
        arkGrayishBlue: 'hsl(236, 13%, 42%)',
        VerydarkBlue: 'hsl(240, 100%, 5%)'

      }
    },
  },
  plugins: [],
}

