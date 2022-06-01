import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutInventoryInput } from './order-update-without-inventory.input';
import { OrderCreateWithoutInventoryInput } from './order-create-without-inventory.input';

@InputType()
export class OrderUpsertWithoutInventoryInput {

    @Field(() => OrderUpdateWithoutInventoryInput, {nullable:false})
    update!: OrderUpdateWithoutInventoryInput;

    @Field(() => OrderCreateWithoutInventoryInput, {nullable:false})
    create!: OrderCreateWithoutInventoryInput;
}
