import { createVuetify, ThemeDefinition } from 'vuetify'
import colors from 'tailwindcss/colors'
import { useDarkOption } from '@/types/system'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const isDark = useDark(useDarkOption)

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: colors.white,
    surface: '#FFFFFF',
    primary: '#41B883',
    'primary-darken-1': '#41B883',
    secondary: '#34495E',
    'secondary-darken-1': '#9C27B0',
    error: '#F44336',
    info: '#31CCEC',
    success: '#21BA45',
    warning: '#F2C037',
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: colors.zinc['900'],
    surface: '#FFFFFF',
    primary: '#41B883',
    'primary-darken-1': '#41B883',
    secondary: '#34495E',
    'secondary-darken-1': '#9C27B0',
    error: '#F44336',
    info: '#31CCEC',
    success: '#21BA45',
    warning: '#F2C037',
  }
}
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: isDark.value ? 'darkTheme' : 'lightTheme',
    themes: {
      lightTheme,
      darkTheme,
    }
  },
})

export default vuetify
