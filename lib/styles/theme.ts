import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { Shadows } from '@material-ui/core/styles/shadows'

// Theme colors.
export const PrussianBlue = '#305F72'
export const LightPink = '#FC9999'

// Text colors.
export const PurpleTingedGrey = '#283747'
export const Cloud = '#FEFDF9'

const defaultTheme = createMuiTheme()

const theme = responsiveFontSizes(
  createMuiTheme({
    breakpoints: {
      values: {
        ...defaultTheme.breakpoints.values,
        lg: 1440,
      },
    },
    palette: {
      background: {
        default: '#FFFFFF',
      },
      primary: {
        main: '#7D9575',
        contrastText: Cloud,
      },
      secondary: {
        main: LightPink,
        contrastText: Cloud,
      },
      text: {
        primary: PurpleTingedGrey,
        secondary: 'rgba(88, 88, 88, 0.44)',
      },
    },
    typography: {
      fontFamily: "'Lato', sans-serif",
      h1: {
        fontSize: '6.25rem',
        fontWeight: 900,
      },
      h2: {
        fontSize: '4.375rem',
        fontWeight: 900,
      },
      h3: {
        fontSize: '3.125rem',
        fontWeight: 500,
      },
      h4: {
        fontSize: '2.5rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '1.5265rem',
        fontWeight: 500,
      },
      subtitle1: {
        fontSize: '1.25rem',
      },
      body1: {
        fontSize: '1rem',
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 500,
      },
      caption: {
        fontSize: '1.875rem',
        fontWeight: 300,
      },
      button: {
        textTransform: 'none',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 42,
          textTransform: 'none',
        },
        contained: {
          fontSize: '1.25rem',
          fontWeight: 500,
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          minHeight: 35,
          minWidth: 85,
        },
        text: {
          fontSize: '1.25rem',
          fontWeight: 500,
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        },
        containedSizeLarge: {
          fontSize: '1.5265rem',
          fontWeight: 600,
          minWidth: 95,
        },
        textSizeLarge: {
          fontSize: '1.5265rem',
          fontWeight: 500,
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        },
      },
      MuiToolbar: {
        gutters: {
          [defaultTheme.breakpoints.up('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      },
    },
    shadows: Array(25).fill('none') as Shadows,
  })
)

export default theme
