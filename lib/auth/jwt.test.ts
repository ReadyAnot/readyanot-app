import jwt from 'jsonwebtoken'
import {
  createToken,
  decodeToken,
  JwtAuthContent,
  JWT_ALGO,
  JWT_EXPIRY,
  JWT_SECRET,
} from './jwt'

let exampleAuthContent: JwtAuthContent
let exampleValidToken: string
let exampleInvalidToken: string
let exampleBadToken: string

beforeEach(() => {
  exampleAuthContent = { username: 'kylerwsm', isAdmin: false }
  exampleValidToken = createToken(exampleAuthContent)
  exampleInvalidToken = jwt.sign({ invalid: 'field' }, JWT_SECRET, {
    algorithm: JWT_ALGO,
    expiresIn: JWT_EXPIRY,
  })
  exampleBadToken = 'invalid-token'
})

test('createToken creates valid tokens', () => {
  expect(() => createToken(exampleAuthContent)).not.toThrow(Error)
})

test('decodeToken can decode valid tokens', () => {
  const authContent = decodeToken(exampleValidToken)
  expect(authContent).toMatchObject(exampleAuthContent)
})

test('decodeToken can handle invalid token gracefully', () => {
  expect(() => decodeToken(exampleInvalidToken)).not.toThrow(Error)
  expect(decodeToken(exampleInvalidToken)).toMatchObject({})
})

test('decodeToken can handle bad tokens gracefully', () => {
  expect(() => decodeToken(exampleBadToken)).not.toThrow(Error)
  expect(decodeToken(exampleBadToken)).toMatchObject({})
})
