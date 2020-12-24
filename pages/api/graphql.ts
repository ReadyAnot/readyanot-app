import { NextPageContext } from 'next'
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-micro'
import { parseCookies } from 'nookies'
import { Content, decodeToken } from '../../lib/graphql/auth'
import typeDefs from '../../lib/graphql/typeDefs'
import resolvers from '../../lib/graphql/resolvers'

export type Context = {
  prisma: PrismaClient
} & Content &
  Pick<NextPageContext, 'req'> &
  Pick<NextPageContext, 'res'>

const prisma = new PrismaClient()

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: (ctx: NextPageContext): Context => {
    const req = ctx.req
    const res = ctx.res

    let content: Content = { username: null }

    const cookies = parseCookies(ctx)
    if (cookies.auth !== undefined && typeof cookies.auth == 'string') {
      const token = cookies.auth
      content = decodeToken(token)
    }

    return {
      prisma,
      req,
      res,
      ...content,
    }
  },
})

export const config = { api: { bodyParser: false } }

export default apolloServer.createHandler({ path: '/api/graphql' })
