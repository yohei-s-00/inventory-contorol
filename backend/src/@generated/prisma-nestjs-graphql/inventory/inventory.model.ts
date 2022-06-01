import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Order } from '../order/order.model';

@ObjectType()
export class Inventory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Int, {nullable:false})
    inventoryItems!: number;

    @Field(() => Int, {nullable:false})
    requiredItems!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:false})
    orderCode!: string;

    @Field(() => Date, {nullable:true})
    orderDates!: Date | null;

    @Field(() => String, {nullable:true})
    thumbNailUrl!: string | null;

    @Field(() => Order, {nullable:true})
    order?: Order | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
