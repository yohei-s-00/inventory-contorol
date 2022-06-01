import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InventoryCreateWithoutOrderInput } from './inventory-create-without-order.input';
import { InventoryCreateOrConnectWithoutOrderInput } from './inventory-create-or-connect-without-order.input';
import { InventoryWhereUniqueInput } from './inventory-where-unique.input';

@InputType()
export class InventoryCreateNestedOneWithoutOrderInput {

    @Field(() => InventoryCreateWithoutOrderInput, {nullable:true})
    create?: InventoryCreateWithoutOrderInput;

    @Field(() => InventoryCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: InventoryCreateOrConnectWithoutOrderInput;

    @Field(() => InventoryWhereUniqueInput, {nullable:true})
    connect?: InventoryWhereUniqueInput;
}
