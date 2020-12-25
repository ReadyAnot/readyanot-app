import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core'

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      button: {
        textTransform: 'none',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
        },
      },
    },
  })
)

theme.shadows = ([] as unknown) as Theme['shadows']

export default theme
