import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InventoryUpdateWithoutOrderInput } from './inventory-update-without-order.input';
import { InventoryCreateWithoutOrderInput } from './inventory-create-without-order.input';

@InputType()
export class InventoryUpsertWithoutOrderInput {

    @Field(() => InventoryUpdateWithoutOrderInput, {nullable:false})
    update!: InventoryUpdateWithoutOrderInput;

    @Field(() => InventoryCreateWithoutOrderInput, {nullable:false})
    create!: InventoryCreateWithoutOrderInput;
}
