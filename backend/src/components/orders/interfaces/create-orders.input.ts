import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field({ nullable: true })
  inventoryId: string;

  @Field({ nullable: false })
  sendAdress: string;

  @Field({ nullable: false })
  type: string;
  
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  mailContent: string;

  @Field({ nullable: false })
  sendCc: string;
}