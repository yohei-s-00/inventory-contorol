import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutInventoryInput } from './order-update-without-inventory.input';
import { OrderCreateWithoutInventoryInput } from './order-create-without-inventory.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutInventoryInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutInventoryInput, {nullable:false})
    update!: OrderUpdateWithoutInventoryInput;

    @Field(() => OrderCreateWithoutInventoryInput, {nullable:false})
    create!: OrderCreateWithoutInventoryInput;
}
