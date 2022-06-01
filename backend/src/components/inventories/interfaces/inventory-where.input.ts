import { Field, ID } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class InventoryWhereInput {

  @Field(() => ID, { nullable: true })
  id?: string;

  // @Field((type) => String, { nullable: true })
  // name?: string;
}
