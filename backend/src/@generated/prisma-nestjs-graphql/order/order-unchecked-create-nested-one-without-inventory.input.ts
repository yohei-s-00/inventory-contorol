import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutInventoryInput } from './order-create-without-inventory.input';
import { OrderCreateOrConnectWithoutInventoryInput } from './order-create-or-connect-without-inventory.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderUncheckedCreateNestedOneWithoutInventoryInput {

    @Field(() => OrderCreateWithoutInventoryInput, {nullable:true})
    create?: OrderCreateWithoutInventoryInput;

    @Field(() => OrderCreateOrConnectWithoutInventoryInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutInventoryInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;
}
