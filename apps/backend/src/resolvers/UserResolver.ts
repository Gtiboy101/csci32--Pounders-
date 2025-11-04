import 'reflect-metadata'
import { Resolver, Query, Field, ObjectType, Ctx, ID, FieldResolver, Root } from 'type-graphql'
import type { Context } from '../utils/graphql'
import { Role } from './types/Role'

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
  @Query(() => [User])
  findManyUsers(@Ctx() { userService }: Context) {
    return userService.findMany()
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
}
