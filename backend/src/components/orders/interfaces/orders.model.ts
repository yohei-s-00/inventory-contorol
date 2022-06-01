import { Field, ID, ObjectType, GraphQLISODateTime } from "@nestjs/graphql";

@ObjectType()
export class OrderModel {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  inventoryId: string;

  @Field((type) => String)
  sendAdress: string;

  @Field((type) => String)
  type: string;
  
  @Field((type) => String)
  title: string;

  @Field((type) => String)
  mailContent: string;

  @Field((type) => String)
  sendCc: string;
}
