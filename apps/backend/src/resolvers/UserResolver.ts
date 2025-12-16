import 'reflect-metadata'
import { Resolver, Query, Field, ObjectType, Ctx, ID, Arg, Mutation, Authorized } from 'type-graphql'
import type { Context } from '@/utils/graphql'
import { AuthPayload, SignUpInput, SignInInput } from './types/AuthTypes'
import { PermissionName } from 'csci32-database'

@ObjectType()
export class User {
  @Field(() => ID)
  user_id!: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  email?: string
}

@Resolver()
export class UserResolver {
  @Authorized(PermissionName.UserRead)
  @Query(() => [User])
  findManyUsers(@Ctx() { userService }: Context) {
    return userService.findMany()
  }

  @Mutation(() => AuthPayload)
  async signUp(@Arg('input', () => SignUpInput) input: SignUpInput, @Ctx() { userService }: Context) {
    if (!input.email || !input.password) throw new Error('email and password are required')
    const { user, token } = await userService.createUser(input)
    return {
      token,
      user_id: user.user_id,
      name: user.name,
      email: user.email,
    }
  }

  @Mutation(() => AuthPayload)
  async signIn(@Arg('input', () => SignInInput) input: SignInInput, @Ctx() { userService }: Context) {
    if (!input.email || !input.password) throw new Error('email and password are required')
    const { user, token } = await userService.authenticateUser(input)
    return {
      token,
      user_id: user.user_id,
      name: user.name,
      email: user.email,
    }
  }
}
