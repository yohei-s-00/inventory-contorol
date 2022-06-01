import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class GetOrderArgs {

  @Field({ nullable: true })
  inventoryId?: string;

  @Field({ defaultValue: 'desc' })
  sortAs?: 'asc' | 'desc';

}