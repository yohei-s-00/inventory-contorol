import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrderOrderByWithRelationInput } from '../order/order-order-by-with-relation.input';

@InputType()
export class InventoryOrderByWithRelationInput {

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

    @Field(() => OrderOrderByWithRelationInput, {nullable:true})
    order?: OrderOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
