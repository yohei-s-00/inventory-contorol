import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutInventoryInput } from './order-create-without-inventory.input';

@InputType()
export class OrderCreateOrConnectWithoutInventoryInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutInventoryInput, {nullable:false})
    create!: OrderCreateWithoutInventoryInput;
}
