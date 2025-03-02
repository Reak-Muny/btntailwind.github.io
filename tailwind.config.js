/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html","*.form","html/*.html"],
  theme: {
    extend: {
      fontFamily:{
        myfont:[
          "Sigmar","serif"
        ]
      },
      textColor:{
        primary:[
          "RGB(138 180 148)"
        ]
      },
      width:{
        'width25': '25%',
        'width80': '80%',
        'width50': '50%',
      },

    },
  },
  plugins: [],
}


