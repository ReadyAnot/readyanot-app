import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import Head from 'next/head'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../lib/styles/theme'

export default function MyApp({ Component, pageProps }: AppPropsType) {
  const client = new ApolloClient({
    defaultOptions: {
      watchQuery: { errorPolicy: 'all' },
      query: { errorPolicy: 'all' },
      mutate: { errorPolicy: 'all' },
    },
    cache: new InMemoryCache(),
    uri: '/api/graphql',
  })

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </React.Fragment>
  )
}
