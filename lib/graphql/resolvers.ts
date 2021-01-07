import { IResolvers } from 'apollo-server-micro'
import { GraphQLDateTime } from 'graphql-iso-date'
import { MyApolloContext } from '../../pages/api/graphql'
import { LogInput } from './generated/graphql'

const resolvers: IResolvers = {
  DateTime: GraphQLDateTime,

  Query: {
    getAllLogs: async (_, __, context: MyApolloContext) => {
      return await context.prisma.log.findMany()
    },

    getQuizQuestions: async (_, __, context: MyApolloContext) => {
      return await context.prisma.quizQuestions.findMany({
        orderBy: { id: 'asc' },
      })
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

export default resolvers
