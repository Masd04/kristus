module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        green: "#165B33",
        red: "#BB2528",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        },

        fontFamily: {
          monserrat: ['Montserrat', 'sans-serif'],
          cormorant: ['Cormorant', 'serif'],

          
        },
      
    keyframes: {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
    }
    },
    screens: {
      xr: "430px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};