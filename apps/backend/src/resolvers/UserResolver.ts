import 'reflect-metadata'
import {
  Resolver,
  Query,
  Field,
  ObjectType,
  Ctx,
  ID,
  FieldResolver,
  Root,
  Arg,
  Authorized,
  Mutation,
} from 'type-graphql'
import type { Context } from '../utils/graphql'
import { Role } from './types/Role'
import { FindManyUsersInput } from './types/FindManyUsersInput'
import { FindManyUsersFilters } from './types/FindManyUsersFilters'
import { SignUpInput, SignInInput, AuthPayload } from './types/AuthTypes'
import { PermissionName } from 'csci32-database'

@ObjectType()
class User {
  @Field(() => ID)
  user_id!: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  email?: string

  // Internal field used by the resolver (not exposed to clients)
  role_id?: string
}

@Resolver(() => User)
export class UserResolver {
  @Authorized([PermissionName.UserRead])
  @Query(() => [User])
  findManyUsers(
    @Ctx() { userService }: Context,
    @Arg('params', () => FindManyUsersInput, { nullable: true }) params?: FindManyUsersInput,
  ) {
    return userService.findMany(params ?? {})
  }

  @Authorized([PermissionName.UserRead])
  @Query(() => Number)
  totalUsers(
    @Ctx() { userService }: Context,
    @Arg('params', () => FindManyUsersInput, { nullable: true }) params?: FindManyUsersInput,
  ) {
    return userService.getTotalUsers(params?.filters ?? undefined)
  }

  @FieldResolver(() => Role, { nullable: true })
  async role(@Root() user: User, @Ctx() ctx: Context) {
    if (!user.role_id) {
      return null
    }

    return ctx.prisma.role.findUnique({
      where: { role_id: user.role_id },
    })
  }

  @Mutation(() => AuthPayload)
  async signUp(@Ctx() { userService }: Context, @Arg('input', () => SignUpInput) input: SignUpInput) {
    const result = await userService.createUser(input)
    return {
      token: result.token,
      user_id: result.user.user_id,
      name: result.user.name,
      email: result.user.email || input.email,
    }
  }

  @Mutation(() => AuthPayload)
  async signIn(@Ctx() { userService }: Context, @Arg('input', () => SignInInput) input: SignInInput) {
    const result = await userService.authenticateUser(input)
    return {
      token: result.token,
      user_id: result.user.user_id,
      name: result.user.name,
      email: result.user.email || input.email,
    }
  }
}
