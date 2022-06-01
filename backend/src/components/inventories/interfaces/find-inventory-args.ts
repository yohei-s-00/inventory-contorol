import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class FindInventoryArgs {
  @Field((type) => String, { nullable: true })
  name?: string;

  @Field((type) => String, { nullable: true })
  id?: string;
}
