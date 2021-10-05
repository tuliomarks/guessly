const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    fontFamily: {
      'sans': ['Quicksand', 'Arial', 'sans-serif']
    },
    colors: {
      secondary: {
        "50": "#ff100104",
        "100": "#fffbf0",
        "200": "#fef1c8",
        "300": "#fde8a0",
        "400": "#fdde78",
        "500": "#fcd44f",
        "600": "#fbc209",
        "700": "#ba8f03",
        "800": "#785d02",
        "900": "#322701"
      },
      primary: {
        "50": "#fafbff",
        "100": "#fafbff",
        "200": "#dce4fe",
        "300": "#b9c9fe",
        "400": "#91aafd",
        "500": "#5078fc",
        "600": "#406cfc",
        "700": "#3161fb",
        "800": "#1d51fb",
        "900": "#043df6"
      },
      black: colors.black,
      white: colors.white,
      gray: {
        "50": "#104104105",
        "100": "#f7f8f7",
        "200": "#dbded8",
        "300": "#bfc4ba",
        "400": "#a3aa9c",
        "500": "#87917e",
        "600": "#6b7463",
        "700": "#51584b",
        "800": "#353a31",
        "900": "#191c17"
      },
      red: {
        "50": "#100106108",
        "100": "#fdf5f1",
        "200": "#f8d2c4",
        "300": "#f3b29b",
        "400": "#ed906e",
        "500": "#e86d40",
        "600": "#d14a19",
        "700": "#9b3713",
        "800": "#64240c",
        "900": "#2d1006"
      },
      green: {
        "50": "#11010210a",
        "100": "#f2fcf7",
        "200": "#b2f0ce",
        "300": "#73e3a5",
        "400": "#37d77f",
        "500": "#20a25a",
        "600": "#1a844a",
        "700": "#146639",
        "800": "#0e4828",
        "900": "#082b18"
      },
      yellow: colors.amber,
    },
    extend: {
      extendedSpacing: {
        // Fractional values
        '1/2'  : '50%',
        '1/3'  : '33.333333%',
        '2/3'  : '66.666667%',
        '1/4'  : '25%',
        '2/4'  : '50%',
        '3/4'  : '75%',
        '1/5'  : '20%',
        '2/5'  : '40%',
        '3/5'  : '60%',
        '4/5'  : '80%',
        '1/6'  : '16.666667%',
        '2/6'  : '33.333333%',
        '3/6'  : '50%',
        '4/6'  : '66.666667%',
        '5/6'  : '83.333333%',
        '1/12' : '8.333333%',
        '2/12' : '16.666667%',
        '3/12' : '25%',
        '4/12' : '33.333333%',
        '5/12' : '41.666667%',
        '6/12' : '50%',
        '7/12' : '58.333333%',
        '8/12' : '66.666667%',
        '9/12' : '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
      height         : theme => ({
        ...theme('extendedSpacing')
      }),
      minHeight      : theme => ({
          ...theme('extendedSpacing')
      }),
      maxHeight      : theme => ({
          ...theme('extendedSpacing'),
          none: 'none'
      }),
      width          : theme => ({
          ...theme('extendedSpacing')
      }),
      minWidth       : theme => ({
          ...theme('extendedSpacing'),
          screen: '100vw'
      }),
      maxWidth       : theme => ({
          ...theme('extendedSpacing'),
          screen: '100vw'
      }),
    }
  },
   variants: {
     extend: {},
   },
   plugins: [],
 }