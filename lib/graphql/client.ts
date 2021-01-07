import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import getEnv from '../util/env'

const hostname = getEnv('HOSTNAME')

export async function getStandaloneApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${hostname}/api/graphql`,
    }),
    cache: new InMemoryCache(),
  })
}
