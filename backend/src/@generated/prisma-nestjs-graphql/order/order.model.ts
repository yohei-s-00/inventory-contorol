import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Inventory } from '../inventory/inventory.model';

@ObjectType()
export class Order {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Inventory, {nullable:false})
    inventory?: Inventory;

    @Field(() => String, {nullable:false})
    inventoryId!: string;

    @Field(() => String, {nullable:false})
    sendAdress!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    mailContent!: string;

    @Field(() => String, {nullable:false})
    sendCc!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
