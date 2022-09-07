// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  important: true,
  prefix: 'tw-',
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'background': {
          main: {
            light: colors.white,
            DEFAULT: colors.white,
            dark: colors.zinc['900'],
          },
          'text': {
            light: colors.black,
            DEFAULT: colors.black,
            dark: colors.white,
          }
        },
        'primary': {
          main: {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '100': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '200': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '300': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '400': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '500': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '600': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '700': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '800': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          '900': {
            light: '#41B883',
            DEFAULT: '#41B883',
            dark: '#41B883',
          },
          'text': {
            light: colors.white,
            DEFAULT: colors.white,
            dark: colors.white,
          }
        }, // primary ends
        'secondary': {
          main: {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '100': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '200': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '300': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '400': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '500': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '600': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '700': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '800': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          '900': {
            light: '#34495E',
            DEFAULT: '#34495E',
            dark: '#34495E',
          },
          'text': {
            light: colors.white,
            DEFAULT: colors.white,
            dark: colors.white,
          }
        }, // secondary ends
        'accent': {
          main: {
            light: '#9C27B0',
            DEFAULT: '#9C27B0',
            dark: '#9C27B0',
          },
          '100': {
            light: '#9C27B0',
            DEFAULT: '#9C27B0',
            dark: '#9C27B0',
          },
          '200': {
            light: '#9C27B0',
            DEFAULT: '#9C27B0',
            dark: '#9C27B0',
          },
          '300': {
            light: '#9C27B0',
            DEFAULT: '#9C27B0',
            dark: '#9C27B0',
          },
          '400': {
            light: '#9C27B0',
            DEFAULT: '#9C27B0',
            dark: '#9C27B0',
          },
          '500': {
            light: '#9C27B0',
            DEFAULT: '#9C27B0',
            dark: '#9C27B0',
          },
          '600': {
            light: '#9C27B0',
            DEFAULT: '#9C27B0',
            dark: '#9C27B0',
          },
          '700': {
            light: '#9C27B0',
            DEFAULT: '#9C27B0',
            dark: '#9C27B0',
          },
          '800': {
            light: '#9C27B0',
            DEFAULT: '#9C27B0',
            dark: '#9C27B0',
          },
          '900': {
            light: '#9C27B0',
            DEFAULT: '#9C27B0',
            dark: '#9C27B0',
          },
          'text': {
            light: colors.white,
            DEFAULT: colors.white,
            dark: colors.white,
          }
        }, // accent ends
        'positive': {
          main: {
            light: '#21BA45',
            DEFAULT: '#21BA45',
            dark: '#21BA45',
          },
          '100': {
            light: '#21BA45',
            DEFAULT: '#21BA45',
            dark: '#21BA45',
          },
          '200': {
            light: '#21BA45',
            DEFAULT: '#21BA45',
            dark: '#21BA45',
          },
          '300': {
            light: '#21BA45',
            DEFAULT: '#21BA45',
            dark: '#21BA45',
          },
          '400': {
            light: '#21BA45',
            DEFAULT: '#21BA45',
            dark: '#21BA45',
          },
          '500': {
            light: '#21BA45',
            DEFAULT: '#21BA45',
            dark: '#21BA45',
          },
          '600': {
            light: '#21BA45',
            DEFAULT: '#21BA45',
            dark: '#21BA45',
          },
          '700': {
            light: '#21BA45',
            DEFAULT: '#21BA45',
            dark: '#21BA45',
          },
          '800': {
            light: '#21BA45',
            DEFAULT: '#21BA45',
            dark: '#21BA45',
          },
          '900': {
            light: '#21BA45',
            DEFAULT: '#21BA45',
            dark: '#21BA45',
          },
          'text': {
            light: colors.white,
            DEFAULT: colors.white,
            dark: colors.white,
          }
        }, // positive ends
        'negative': {
          main: {
            light: '#F44336',
            DEFAULT: '#F44336',
            dark: '#F44336',
          },
          '100': {
            light: '#FFCDD2',
            DEFAULT: '#FFCDD2',
            dark: '#FFCDD2',
          },
          '200': {
            light: '#EF9A9A',
            DEFAULT: '#EF9A9A',
            dark: '#EF9A9A',
          },
          '300': {
            light: '#E57373',
            DEFAULT: '#E57373',
            dark: '#E57373',
          },
          '400': {
            light: '#EF5350',
            DEFAULT: '#EF5350',
            dark: '#EF5350',
          },
          '500': {
            light: '#F44336',
            DEFAULT: '#F44336',
            dark: '#F44336',
          },
          '600': {
            light: '#E53935',
            DEFAULT: '#E53935',
            dark: '#E53935',
          },
          '700': {
            light: '#D32F2F',
            DEFAULT: '#D32F2F',
            dark: '#D32F2F',
          },
          '800': {
            light: '#C62828',
            DEFAULT: '#C62828',
            dark: '#C62828',
          },
          '900': {
            light: '#B71C1C',
            DEFAULT: '#B71C1C',
            dark: '#B71C1C',
          },
          'text': {
            light: colors.white,
            DEFAULT: colors.white,
            dark: colors.white,
          }
        }, // negative ends
        'info': {
          main: {
            light: '#31CCEC',
            DEFAULT: '#31CCEC',
            dark: '#31CCEC',
          },
          '100': {
            light: '#31CCEC',
            DEFAULT: '#31CCEC',
            dark: '#31CCEC',
          },
          '200': {
            light: '#31CCEC',
            DEFAULT: '#31CCEC',
            dark: '#31CCEC',
          },
          '300': {
            light: '#31CCEC',
            DEFAULT: '#31CCEC',
            dark: '#31CCEC',
          },
          '400': {
            light: '#31CCEC',
            DEFAULT: '#31CCEC',
            dark: '#31CCEC',
          },
          '500': {
            light: '#31CCEC',
            DEFAULT: '#31CCEC',
            dark: '#31CCEC',
          },
          '600': {
            light: '#31CCEC',
            DEFAULT: '#31CCEC',
            dark: '#31CCEC',
          },
          '700': {
            light: '#31CCEC',
            DEFAULT: '#31CCEC',
            dark: '#31CCEC',
          },
          '800': {
            light: '#31CCEC',
            DEFAULT: '#31CCEC',
            dark: '#31CCEC',
          },
          '900': {
            light: '#31CCEC',
            DEFAULT: '#31CCEC',
            dark: '#31CCEC',
          },
          'text': {
            light: colors.white,
            DEFAULT: colors.white,
            dark: colors.white,
          }
        }, // info ends
        'warning': {
          main: {
            light: '#F2C037',
            DEFAULT: '#F2C037',
            dark: '#F2C037',
          },
          '100': {
            light: '#F2C037',
            DEFAULT: '#F2C037',
            dark: '#F2C037',
          },
          '200': {
            light: '#F2C037',
            DEFAULT: '#F2C037',
            dark: '#F2C037',
          },
          '300': {
            light: '#F2C037',
            DEFAULT: '#F2C037',
            dark: '#F2C037',
          },
          '400': {
            light: '#F2C037',
            DEFAULT: '#F2C037',
            dark: '#F2C037',
          },
          '500': {
            light: '#F2C037',
            DEFAULT: '#F2C037',
            dark: '#F2C037',
          },
          '600': {
            light: '#F2C037',
            DEFAULT: '#F2C037',
            dark: '#F2C037',
          },
          '700': {
            light: '#F2C037',
            DEFAULT: '#F2C037',
            dark: '#F2C037',
          },
          '800': {
            light: '#F2C037',
            DEFAULT: '#F2C037',
            dark: '#F2C037',
          },
          '900': {
            light: '#F2C037',
            DEFAULT: '#F2C037',
            dark: '#F2C037',
          },
          'text': {
            light: colors.white,
            DEFAULT: colors.white,
            dark: colors.white,
          }
        }, // info ends
      }, // colors end
      maxWidth: {
        'content': '980px',
      }, // maxWidth ends
    },
  },
  plugins: [],
}
