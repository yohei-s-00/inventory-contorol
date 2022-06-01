import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutInventoryInput } from './order-update-without-inventory.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutInventoryInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutInventoryInput, {nullable:false})
    data!: OrderUpdateWithoutInventoryInput;
}
