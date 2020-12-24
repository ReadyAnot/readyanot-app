import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    firstName: String!
    lastName: String!
  }

  type Query {
    getUser: User
  }

  input CreateUserInput {
    username: String!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
  }

  input LoginUserInput {
    username: String!
    password: String!
  }

  type Mutation {
    createUser(input: CreateUserInput): User!
    loginUser(input: LoginUserInput): User!
    logoutUser: Boolean!
  }
`

export default typeDefs
