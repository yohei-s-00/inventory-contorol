import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InventoryMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => Int, {nullable:true})
    inventoryItems?: number;

    @Field(() => Int, {nullable:true})
    requiredItems?: number;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    orderCode?: string;

    @Field(() => Date, {nullable:true})
    orderDates?: Date | string;

    @Field(() => String, {nullable:true})
    thumbNailUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
