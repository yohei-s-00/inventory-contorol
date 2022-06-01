import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { OrderRelationFilter } from '../order/order-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class InventoryWhereInput {

    @Field(() => [InventoryWhereInput], {nullable:true})
    AND?: Array<InventoryWhereInput>;

    @Field(() => [InventoryWhereInput], {nullable:true})
    OR?: Array<InventoryWhereInput>;

    @Field(() => [InventoryWhereInput], {nullable:true})
    NOT?: Array<InventoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    inventoryItems?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    requiredItems?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    orderCode?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    orderDates?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    thumbNailUrl?: StringNullableFilter;

    @Field(() => OrderRelationFilter, {nullable:true})
    order?: OrderRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
