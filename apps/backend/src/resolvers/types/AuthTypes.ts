import { ObjectType, Field, InputType } from 'type-graphql'

@InputType()
export class SignUpInput {
  @Field(() => String)
  email!: string

  @Field(() => String)
  password!: string

  @Field(() => String, { nullable: true })
  name?: string
}

@InputType()
export class SignInInput {
  @Field(() => String)
  email!: string

  @Field(() => String)
  password!: string
}

@ObjectType()
export class AuthPayload {
  @Field(() => String)
  token!: string

  @Field(() => String)
  user_id!: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String)
  email!: string
}
