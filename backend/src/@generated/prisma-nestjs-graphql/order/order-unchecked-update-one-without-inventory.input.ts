import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutInventoryInput } from './order-create-without-inventory.input';
import { OrderCreateOrConnectWithoutInventoryInput } from './order-create-or-connect-without-inventory.input';
import { OrderUpsertWithoutInventoryInput } from './order-upsert-without-inventory.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutInventoryInput } from './order-update-without-inventory.input';

@InputType()
export class OrderUncheckedUpdateOneWithoutInventoryInput {

    @Field(() => OrderCreateWithoutInventoryInput, {nullable:true})
    create?: OrderCreateWithoutInventoryInput;

    @Field(() => OrderCreateOrConnectWithoutInventoryInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutInventoryInput;

    @Field(() => OrderUpsertWithoutInventoryInput, {nullable:true})
    upsert?: OrderUpsertWithoutInventoryInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutInventoryInput, {nullable:true})
    update?: OrderUpdateWithoutInventoryInput;
}
