import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import getEnv from '../util/env'

export async function getStandaloneApolloClient() {
  const hostname = getEnv('HOSTNAME')
  return new ApolloClient({
    link: new HttpLink({
      uri: `${hostname}/api/graphql`,
    }),
    cache: new InMemoryCache(),
  })
}
