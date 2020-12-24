import { AuthenticationError, IResolvers } from 'apollo-server-micro'
import { destroyCookie, setCookie } from 'nookies'
import { Context } from '../../pages/api/graphql'
import {
  AUTH_COOKIE,
  checkPassword,
  Content,
  createToken,
  hashPassword,
} from './auth'
import { CreateUserInput, LoginUserInput } from './types'

const requireAuth = (context: Context): void => {
  if (!context.username) {
    throw new AuthenticationError('You will need to be logged in first')
  }
}

const resolvers: IResolvers = {
  Query: {
    getUser: async (_, __, context: Context) => {
      requireAuth(context)
      const username = context.username
      if (username != null) {
        const user = await context.prisma.user.findUnique({
          where: { username },
        })
        return user
      }
      return null
    },
  },

  Mutation: {
    createUser: async (_, args, context: Context) => {
      requireAuth(context)
      const input = args.input as CreateUserInput
      input.password = hashPassword(input.password)
      const user = await context.prisma.user.create({ data: { ...input } })
      return user
    },

    loginUser: async (_, args, context: Context) => {
      const input = args.input as LoginUserInput
      const user = await context.prisma.user.findUnique({
        where: { username: input.username },
      })
      const isValidPassword = checkPassword(input.password, user.password)
      if (isValidPassword) {
        const content: Content = { username: user.username }
        const token = createToken(content)
        setCookie(context, AUTH_COOKIE, token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
          httpOnly: true,
        })
        return user
      }
      throw new AuthenticationError('Username or password is invalid')
    },

    logoutUser: async (_, __, context: Context) => {
      if (context.username) {
        destroyCookie(context, AUTH_COOKIE, { path: '/' })
      }
      return true
    },
  },
}

export default resolvers
