import { PrismaClient } from '@prisma/client'
import { NextPageContext } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { readFileSync } from 'fs'
import path from 'path'
import resolvers from '../../lib/graphql/resolvers'
import prisma from '../../lib/prisma'
import parseRequestCookies, { JwtAuthContent } from '../../lib/auth/jwt'

export type ReadyAnotUser = {
  username: string
  roles: { [key: string]: boolean }
}

export type MyApolloContext = {
  prisma: PrismaClient
  user?: ReadyAnotUser
} & NextPageContext &
  JwtAuthContent

const apolloServer = new ApolloServer({
  typeDefs: readFileSync(path.join('lib/graphql/schema.gql'), 'utf8'),
  resolvers,
  context: (ctx: NextPageContext): MyApolloContext => {
    const authContent = parseRequestCookies(ctx)
    return { ...ctx, ...authContent, prisma }
  },
})

export const config = { api: { bodyParser: false } }

export default apolloServer.createHandler({ path: '/api/graphql' })
