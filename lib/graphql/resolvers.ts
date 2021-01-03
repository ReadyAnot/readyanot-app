import { IResolvers } from 'apollo-server-micro'

const resolvers: IResolvers = {
  Query: {
    pingServer: () => true,
  },
}

export default resolvers
