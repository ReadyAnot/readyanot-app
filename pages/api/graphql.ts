import { PrismaClient } from '@prisma/client'
import { NextPageContext } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import typeDefs from '../../lib/graphql/schema'
import resolvers from '../../lib/graphql/resolvers'
import prisma from '../../lib/prisma'

export type ReadyAnotUser = {
  username: string
  roles: { [key: string]: boolean }
}

export type MyApolloContext = {
  prisma: PrismaClient
  user?: ReadyAnotUser
} & NextPageContext

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: (ctx: NextPageContext): MyApolloContext => ({ ...ctx, prisma }),
})

export const config = { api: { bodyParser: false } }

export default apolloServer.createHandler({ path: '/api/graphql' })
