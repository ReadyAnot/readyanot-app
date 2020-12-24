import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET || 'jwt-secret'
const JWT_ALGO = 'HS256'
const JWT_EXPIRY = '7d'

export const AUTH_COOKIE = 'auth'

export type Content = {
  username: string | null
}

export const createToken = (content: Content): string => {
  return jwt.sign(content, JWT_SECRET, {
    algorithm: JWT_ALGO,
    expiresIn: JWT_EXPIRY,
  })
}

export const isContent = (content: any): boolean => {
  return (
    typeof content === 'object' && (content as Content).username !== undefined
  )
}

export const decodeToken = (token: string): Content | null => {
  const content = jwt.verify(token, JWT_SECRET)
  return isContent(content) ? (content as Content) : null
}

const SALT_ROUNDS = 10

export const hashPassword = (text: string): string => {
  const hash = bcrypt.hashSync(text, SALT_ROUNDS)
  return hash
}

export const checkPassword = (text: string, hash: string) => {
  return bcrypt.compareSync(text, hash)
}
