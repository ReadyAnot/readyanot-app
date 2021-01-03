import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    pingServer: Boolean!
    getQuizQuestions: [String!]!
  }

  type Mutation {
    logLabelData(label: String!, data: String!): Boolean!
  }
`

export default typeDefs
