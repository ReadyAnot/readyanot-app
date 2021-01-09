import { AuthenticationError } from 'apollo-server-micro'
import { MyApolloContext } from '../../../pages/api/graphql'

export const requireAuth = (context: MyApolloContext): void => {
  if (!context.username) {
    throw new AuthenticationError('You will need to be logged in first')
  }
}

export const requireSameUser = (
  context: MyApolloContext,
  username: string
): void => {
  if (!context.username) {
    throw new AuthenticationError('You will need to be logged in first')
  } else if (context.username !== username) {
    throw new AuthenticationError('You can only update your own user account')
  }
}
