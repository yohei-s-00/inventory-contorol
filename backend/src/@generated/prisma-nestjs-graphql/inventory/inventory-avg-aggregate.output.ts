import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class InventoryAvgAggregate {

    @Field(() => Float, {nullable:true})
    inventoryItems?: number;

    @Field(() => Float, {nullable:true})
    requiredItems?: number;

    @Field(() => Float, {nullable:true})
    price?: number;
}
