import type { Prisma } from 'csci32-database'
import { PrismaClient, PermissionName } from 'csci32-database'
import type { FindManyUsersFilters } from './types/FindManyUsersFilters'
import type { FindManyUsersInput } from './types/FindManyUsersInput'
import type { SignUpInput } from './types/AuthTypes'
import { SortOrder } from './types/SortOrder'
import { comparePassword, hashPassword, signToken } from '@/utils/auth'
import { BASIC_ROLE_ID } from '@/utils/constants'

export interface UserServiceProps {
  prisma: PrismaClient
}

export class UserService {
  prisma: PrismaClient

  constructor({ prisma }: UserServiceProps) {
    this.prisma = prisma
  }

  getOrderBy(params: FindManyUsersInput | undefined): Prisma.UserOrderByWithRelationInput {
    const sortColumn = params?.sortColumn
    const sortDirection = params?.sortDirection
    if (sortColumn) {
      // Type assertion: Prisma expects SortOrder-like values
      return { [sortColumn]: (sortDirection ?? SortOrder.ASC) as any }
    }
    return { name: SortOrder.ASC }
  }

  getUsersWhereClause(params?: Partial<FindManyUsersInput>): Prisma.UserWhereInput {
    const filters = params?.filters
    const where: Prisma.UserWhereInput = {}

    if (filters?.query) {
      where.OR = [
        { name: { contains: filters.query, mode: 'insensitive' } },
        { email: { contains: filters.query, mode: 'insensitive' } },
      ]
    }

    return where
  }

  async findMany(params?: FindManyUsersInput) {
    const { skip = 0, take = 15 } = params ?? {}
    const orderBy = this.getOrderBy(params)
    const where = this.getUsersWhereClause(params)

    return this.prisma.user.findMany({
      skip,
      take,
      orderBy,
      where,
    })
  }

  async getTotalUsers(filters?: FindManyUsersFilters) {
    const where = filters ? this.getUsersWhereClause({ filters }) : this.getUsersWhereClause()
    return this.prisma.user.count({ where })
  }

  async createUser(params: SignUpInput) {
    const { email, password, name } = params

    const existing = await this.prisma.user.findUnique({ where: { email } })
    if (existing) throw new Error('Email already in use')

    const passwordHash = await hashPassword(password)

    const created = await this.prisma.user.create({
      data: {
        email,
        name: name ?? null,
        passwordHash,
        role: { connect: { role_id: BASIC_ROLE_ID } },
      },
      select: {
        user_id: true,
        email: true,
        name: true,
        role: {
          select: {
            name: true,
            role_permissions: {
              select: {
                permission: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    const token = signToken({
      sub: created.user_id,
      email: created.email || email, // Use the original email if created.email is null
      name: created.name ?? undefined,
      role: created.role?.name,
      permissions: created.role?.role_permissions.map((p) => p.permission.name) ?? [],
    })

    return { user: created, token }
  }

  async authenticateUser(params: { email: string; password: string }) {
    const { email, password } = params

    const found = await this.prisma.user.findUnique({
      where: { email },
      select: {
        user_id: true,
        email: true,
        name: true,
        passwordHash: true,
        role: {
          select: {
            name: true,
            role_permissions: {
              select: {
                permission: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    if (!found || !found.passwordHash) throw new Error('Invalid email or password')

    const ok = await comparePassword(password, found.passwordHash)
    if (!ok) throw new Error('Invalid email or password')

    const token = signToken({
      sub: found.user_id,
      email: found.email || email, // Use the original email if found.email is null
      name: found.name ?? undefined,
      role: found.role?.name,
      permissions: found.role?.role_permissions.map((p) => p.permission.name) ?? [],
    })

    const { passwordHash, ...user } = found as any
    return { user, token }
  }
}
