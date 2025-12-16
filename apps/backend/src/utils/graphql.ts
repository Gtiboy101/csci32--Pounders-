import { UserResolver } from '@/resolvers/UserResolver'
import { ForumResolver } from '@/resolvers/ForumResolver'
import { buildSchema, registerEnumType } from 'type-graphql'
import { customAuthChecker } from '@/utils/authChecker'
import { PermissionName, RoleName } from 'csci32-database'
import type { NonEmptyArray } from 'type-graphql'
import type { FastifyInstance, FastifyReply, FastifyRequest, FastifyBaseLogger } from 'fastify'
import { PrismaClient } from 'csci32-database'
import { getBooleanEnvVar, getRequiredStringEnvVar } from '@/utils'
import type { UserService } from '@/services/UserService'
import { extractTokenFromHeader, verifyToken } from '@/utils/auth'
import mercurius from 'mercurius'
import mercuriusLogging from 'mercurius-logging'

const GRAPHQL_API_PATH = '/api/graphql'
const GRAPHQL_DEPTH_LIMIT = 7

// 1️⃣ Register the enums with TypeGraphQL
registerEnumType(PermissionName, {
  name: 'PermissionName',
  description: 'Enum representing valid permissions for authorization',
})

registerEnumType(RoleName, {
  name: 'RoleName',
  description: 'Enum representing valid roles for users',
})

const resolvers = [UserResolver, ForumResolver] as NonEmptyArray<Function>

export interface Context {
  request: FastifyRequest
  reply: FastifyReply
  userService: UserService
  prisma: PrismaClient
  log: FastifyBaseLogger
  user?: any
}

export async function registerGraphQL(fastify: FastifyInstance) {
  try {
    console.log('Building GraphQL schema...')
    console.log('Resolvers:', resolvers)

    const schema = await buildSchema({
      resolvers,
      authChecker: customAuthChecker,
      validate: false,
    })

    console.log('Schema built successfully')
    console.log('Schema types:', Object.keys(schema.getTypeMap()))

    const graphiql = getBooleanEnvVar('ENABLE_GRAPHIQL', false)
    fastify.log.info(`GraphiQL is ${graphiql ? 'enabled' : 'disabled'}`)

    const options = {
      schema,
      cache: false,
      path: GRAPHQL_API_PATH,
      graphiql,
      queryDepth: GRAPHQL_DEPTH_LIMIT,
      context: (request: FastifyRequest, reply: FastifyReply): Context => {
        // Extract user from JWT token
        let user = undefined
        try {
          const authHeader = request.headers.authorization
          const token = extractTokenFromHeader(authHeader)
          if (token) {
            const payload = verifyToken(token)
            user = {
              user_id: payload.sub,
              email: payload.email,
              name: payload.name,
              role: payload.role,
              permissions: payload.permissions,
            }
          }
        } catch (error) {
          // Token verification failed, user remains undefined
          fastify.log.debug('JWT token verification failed:', error)
        }

        return {
          request,
          reply,
          userService: fastify.userService,
          prisma: fastify.prisma,
          log: fastify.log,
          user,
        }
      },
      allowBatchedQueries: false,
    }

    await fastify.register(mercurius, options)
    await fastify.register(mercuriusLogging, {
      prependAlias: true,
      logBody: true,
      logVariables: getRequiredStringEnvVar('NODE_ENV') === 'development',
    })
  } catch (error) {
    console.error('Error building GraphQL schema:', error)
    throw error
  }
}
