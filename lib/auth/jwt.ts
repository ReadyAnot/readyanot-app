import { User } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextPageContext } from 'next'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { MyApolloContext } from '../../pages/api/graphql'

const JWT_SECRET = process.env.JWT_SECRET || 'jwt-secret'
const JWT_ALGO = 'HS256'
const JWT_EXPIRY = '7d'

export const AUTH_COOKIE = 'auth'

export type JwtAuthContent = {
  username?: string
  isAdmin?: boolean
}

// Raw functions

export const createToken = (content: JwtAuthContent): string => {
  return jwt.sign(content, JWT_SECRET, {
    algorithm: JWT_ALGO,
    expiresIn: JWT_EXPIRY,
  })
}

export const isContent = (content: any): boolean => {
  return (
    typeof content === 'object' &&
    (content as JwtAuthContent).username !== undefined
  )
}

export const decodeToken = (token: string): JwtAuthContent => {
  const content = jwt.verify(token, JWT_SECRET)
  if (isContent(content)) return content as JwtAuthContent
}

const SALT_ROUNDS = 10

export const hashPassword = (text: string): string => {
  const hash = bcrypt.hashSync(text, SALT_ROUNDS)
  return hash
}

export const checkPassword = (text: string, hash: string) => {
  return bcrypt.compareSync(text, hash)
}

// Extracted functions

const cookieMaxAge = 30 * 24 * 60 * 60

export const setAuthCookie = (user: User, context: MyApolloContext) => {
  const content: JwtAuthContent = {
    username: user.username,
    isAdmin: user.isAdmin,
  }
  const token = createToken(content)
  setCookie(context, AUTH_COOKIE, token, {
    maxAge: cookieMaxAge,
    path: '/',
    httpOnly: true,
  })
  return true
}

export const destroyAuthCookie = (context: MyApolloContext) => {
  destroyCookie(context, AUTH_COOKIE, { path: '/' })
  return true
}

const parseRequestCookies = (context: NextPageContext): JwtAuthContent => {
  const cookies = parseCookies(context)
  if (cookies.auth !== undefined && typeof cookies.auth == 'string') {
    const token = cookies[AUTH_COOKIE]
    const authContent = decodeToken(token)
    return authContent
  }
}

export default parseRequestCookies
