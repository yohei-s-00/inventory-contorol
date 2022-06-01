import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InventoryOrderByWithRelationInput } from '../inventory/inventory-order-by-with-relation.input';

@InputType()
export class OrderOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => InventoryOrderByWithRelationInput, {nullable:true})
    inventory?: InventoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    inventoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sendAdress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mailContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sendCc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
