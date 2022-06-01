import { Field, ObjectType } from "@nestjs/graphql";
import { UserModel } from "@ic-components/users/interfaces/user.model";

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field()
  refresh_token: string;

  @Field(() => UserModel)
  user: UserModel;
}
