import _ from 'lodash'
import { AuthenticationError, IResolvers } from 'apollo-server-micro'
import { GraphQLDateTime } from 'graphql-iso-date'
import { MyApolloContext } from '../../../pages/api/graphql'
import {
  CreateUserInput,
  LogInput,
  UpdateUserInput,
} from '../generated/graphql'
import { requireAuth, requireSameUser } from './validators'
import {
  checkPassword,
  destroyAuthCookie,
  hashPassword,
  setAuthCookie,
} from '../../auth/jwt'

const baseResolver: IResolvers = {
  DateTime: GraphQLDateTime,
}

const logResolvers: IResolvers = {
  Query: {
    getAllLogs: async (_, __, context: MyApolloContext) => {
      requireAuth(context)
      return await context.prisma.log.findMany()
    },
  },

  Mutation: {
    createLog: async (_, args, context: MyApolloContext) => {
      const logInput = args.input as LogInput
      await context.prisma.log.create({ data: { ...logInput } })
      return true
    },
  },
}

const userResolvers: IResolvers = {
  Query: {
    getUser: async (_, __, context: MyApolloContext) => {
      requireAuth(context)
      const username = context.username
      const user = await context.prisma.user.findUnique({
        where: { username },
      })
      return user
    },
  },

  Mutation: {
    createUser: async (_, args, context: MyApolloContext) => {
      const input = args.input as CreateUserInput
      input.password = hashPassword(input.password)
      const user = await context.prisma.user.create({ data: { ...input } })
      setAuthCookie(user, context)
      return user
    },

    updateUser: async (_, args, context: MyApolloContext) => {
      const input = args.input as UpdateUserInput
      requireSameUser(context, input.username)
      if (input.password) input.password = hashPassword(input.password)
      const user = await context.prisma.user.update({
        where: { username: input.username },
        data: { ...input },
      })
      return user
    },

    loginUser: async (_, args, context: MyApolloContext) => {
      const username = args.username as string
      const password = args.password as string
      const user = await context.prisma.user.findUnique({ where: { username } })
      const isValidPassword = checkPassword(password, user.password)
      if (isValidPassword) {
        setAuthCookie(user, context)
        return user
      }
      throw new AuthenticationError('Username or password is invalid')
    },

    logoutUser: async (_, __, context: MyApolloContext) => {
      return destroyAuthCookie(context)
    },
  },
}

const resolvers = _.merge(baseResolver, logResolvers, userResolvers)

export default resolvers
