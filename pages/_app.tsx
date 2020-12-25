import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import responsiveTheme from '../lib/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
