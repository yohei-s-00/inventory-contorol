import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InventorySumAggregate {

    @Field(() => Int, {nullable:true})
    inventoryItems?: number;

    @Field(() => Int, {nullable:true})
    requiredItems?: number;

    @Field(() => Int, {nullable:true})
    price?: number;
}
