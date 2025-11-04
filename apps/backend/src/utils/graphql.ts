import { UserResolver } from '@/resolvers/UserResolver'
import { buildSchema } from 'type-graphql'
import type { NonEmptyArray } from 'type-graphql'
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClient } from 'csci32-database'
import { getBooleanEnvVar, getRequiredStringEnvVar } from '@/utils'
import type { UserService } from '@/resolvers/UserService'
import mercurius from 'mercurius'
import mercuriusLogging from 'mercurius-logging'
const GRAPHQL_API_PATH = '/api/graphql'
const GRAPHQL_DEPTH_LIMIT = 7

const resolvers = [UserResolver] as NonEmptyArray<Function>

export interface Context {
  request: FastifyRequest
  reply: FastifyReply
  userService: UserService
  prisma: PrismaClient
}

export async function registerGraphQL(fastify: FastifyInstance) {
  console.log('Building GraphQL schema...')
  console.log('Resolvers:', resolvers)

  const schema = await buildSchema({
    resolvers,
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
      return { request, reply, userService: fastify.userService, prisma: fastify.prisma }
    },
    allowBatchedQueries: false,
  }
  await fastify.register(mercurius, options)
  await fastify.register(mercuriusLogging, {
    prependAlias: true,
    logBody: true,
    logVariables: getRequiredStringEnvVar('NODE_ENV') === 'development',
  })
}
