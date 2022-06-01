import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
  export class InventoryCreateInput {
    @Field((type) => String, {nullable: false})
    name: string;

    @Field((type) => String, {nullable: false})
    type: string;

    @Field((type) => Int)
    inventoryItems: number;

    @Field((type) => Int)
    requiredItems: number;

    @Field((type) => Int)
    price: number;

    @Field((type) => String)
    orderCode: string;

    @Field((type) => String)
    status: string;
  }