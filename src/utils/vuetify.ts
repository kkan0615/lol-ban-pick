import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import colors from 'tailwindcss/colors'
import { useDarkOption } from '@/types/system'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const isDark = useDark(useDarkOption)

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: colors.white,
    primary: '#41B883',
    'on-primary': colors.white,
    secondary: '#34495E',
    'on-secondary': colors.white,
    error: '#F44336',
    'on-error': colors.white,
    info: '#31CCEC',
    'on-info': colors.white,
    success: '#21BA45',
    'on-success': colors.white,
    warning: '#F2C037',
    'on-warning': colors.white,
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: colors.zinc['900'],
    primary: '#41B883',
    'on-primary': colors.white,
    secondary: '#34495E',
    'on-secondary': colors.white,
    error: '#F44336',
    'on-error': colors.white,
    info: '#31CCEC',
    'on-info': colors.white,
    success: '#21BA45',
    'on-success': colors.white,
    warning: '#F2C037',
    'on-warning': colors.white,
  }
}
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: isDark.value ? 'darkTheme' : 'lightTheme',
    themes: {
      lightTheme,
      darkTheme,
    }
  },
})

export default vuetify
