import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderScalarWhereInput {

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    AND?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    OR?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    NOT?: Array<OrderScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
