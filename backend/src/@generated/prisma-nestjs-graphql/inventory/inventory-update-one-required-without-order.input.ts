import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InventoryCreateWithoutOrderInput } from './inventory-create-without-order.input';
import { InventoryCreateOrConnectWithoutOrderInput } from './inventory-create-or-connect-without-order.input';
import { InventoryUpsertWithoutOrderInput } from './inventory-upsert-without-order.input';
import { InventoryWhereUniqueInput } from './inventory-where-unique.input';
import { InventoryUpdateWithoutOrderInput } from './inventory-update-without-order.input';

@InputType()
export class InventoryUpdateOneRequiredWithoutOrderInput {

    @Field(() => InventoryCreateWithoutOrderInput, {nullable:true})
    create?: InventoryCreateWithoutOrderInput;

    @Field(() => InventoryCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: InventoryCreateOrConnectWithoutOrderInput;

    @Field(() => InventoryUpsertWithoutOrderInput, {nullable:true})
    upsert?: InventoryUpsertWithoutOrderInput;

    @Field(() => InventoryWhereUniqueInput, {nullable:true})
    connect?: InventoryWhereUniqueInput;

    @Field(() => InventoryUpdateWithoutOrderInput, {nullable:true})
    update?: InventoryUpdateWithoutOrderInput;
}
