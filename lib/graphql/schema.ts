import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    pingServer: Boolean!
  }
`

export default typeDefs
