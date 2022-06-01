import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { InventoryRelationFilter } from '../inventory/inventory-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderWhereInput {

    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => InventoryRelationFilter, {nullable:true})
    inventory?: InventoryRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    inventoryId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sendAdress?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    mailContent?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sendCc?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
