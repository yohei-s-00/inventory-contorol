import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class InventorySumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    inventoryItems?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requiredItems?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}
