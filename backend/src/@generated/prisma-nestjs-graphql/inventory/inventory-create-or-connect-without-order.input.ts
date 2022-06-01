import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InventoryWhereUniqueInput } from './inventory-where-unique.input';
import { InventoryCreateWithoutOrderInput } from './inventory-create-without-order.input';

@InputType()
export class InventoryCreateOrConnectWithoutOrderInput {

    @Field(() => InventoryWhereUniqueInput, {nullable:false})
    where!: InventoryWhereUniqueInput;

    @Field(() => InventoryCreateWithoutOrderInput, {nullable:false})
    create!: InventoryCreateWithoutOrderInput;
}
