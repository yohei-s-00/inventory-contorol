import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InventoryCountOrderByAggregateInput } from './inventory-count-order-by-aggregate.input';
import { InventoryAvgOrderByAggregateInput } from './inventory-avg-order-by-aggregate.input';
import { InventoryMaxOrderByAggregateInput } from './inventory-max-order-by-aggregate.input';
import { InventoryMinOrderByAggregateInput } from './inventory-min-order-by-aggregate.input';
import { InventorySumOrderByAggregateInput } from './inventory-sum-order-by-aggregate.input';

@InputType()
export class InventoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inventoryItems?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requiredItems?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderDates?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumbNailUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => InventoryCountOrderByAggregateInput, {nullable:true})
    _count?: InventoryCountOrderByAggregateInput;

    @Field(() => InventoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InventoryAvgOrderByAggregateInput;

    @Field(() => InventoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InventoryMaxOrderByAggregateInput;

    @Field(() => InventoryMinOrderByAggregateInput, {nullable:true})
    _min?: InventoryMinOrderByAggregateInput;

    @Field(() => InventorySumOrderByAggregateInput, {nullable:true})
    _sum?: InventorySumOrderByAggregateInput;
}
