import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { InventoryUpdateInput } from "./inventory-update.input";
import { InventoryWhereInput } from "./inventory-where.input";

@ArgsType()
export class UpdateOneUserArgs {
  @Field(() => InventoryUpdateInput, { nullable: false })
  data!: InventoryUpdateInput;

  @Field(() => InventoryWhereInput, { nullable: false })
  where!: InventoryWhereInput;
}
