import { IResolvers } from 'apollo-server-micro'

const resolvers: IResolvers = {
  Query: {
    pingServer: () => true,
    getQuizQuestions: async () => [],
  },

  Mutation: {
    logLabelData: async () => true,
  },
}

export default resolvers
