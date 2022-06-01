import { Field, ID, ObjectType, GraphQLISODateTime } from "@nestjs/graphql";

@ObjectType()
export class InventoryModel {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  type: string;

  @Field((type) => Number)
  inventoryItems: number;

  @Field((type) => Number)
  requiredItems: number;

  @Field((type) => Number)
  price: number;

  @Field((type) => String)
  status: string;

  @Field((type) => String)
  orderCode: string;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  orderDates?: Date;

  @Field((type) => String, { nullable: true })
  thumbNailUrl?: string;

  @Field((type) => Date)
  createdAt!: Date;

  @Field((type) => Date)
  updatedAt?: Date | string;
}

