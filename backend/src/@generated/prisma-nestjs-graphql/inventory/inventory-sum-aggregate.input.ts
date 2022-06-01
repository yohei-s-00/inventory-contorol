import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class InventorySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    inventoryItems?: true;

    @Field(() => Boolean, {nullable:true})
    requiredItems?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;
}
