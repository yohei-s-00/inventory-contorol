import { Field,HideField } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { ID } from "@nestjs/graphql";

@ObjectType()
export class UserModel {
  
  @Field(() => ID, {nullable:false})
  id!: number;

  @Field(() => String, {nullable:false})
  name!: string;

  /** @Validator.@IsEmail() */
  @Field(() => String, {nullable:false,description:'@Validator.@IsEmail()'})
  email!: string;

  @HideField()
  password!: string;

  @HideField()
  hashedRefreshToken!: string | null;

  @HideField()
  createdAt!: Date;

  @HideField()
  updatedAt!: Date;
}
