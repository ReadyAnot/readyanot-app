import { NextPageContext } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import typeDefs from '../../lib/graphql/schema'
import resolvers from '../../lib/graphql/resolvers'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: (ctx: NextPageContext): NextPageContext => ({ ...ctx }),
})

export const config = { api: { bodyParser: false } }

export default apolloServer.createHandler({ path: '/api/graphql' })
