import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutInventoryInput } from './order-create-without-inventory.input';
import { OrderCreateOrConnectWithoutInventoryInput } from './order-create-or-connect-without-inventory.input';
import { OrderUpsertWithWhereUniqueWithoutInventoryInput } from './order-upsert-with-where-unique-without-inventory.input';
import { OrderCreateManyInventoryInputEnvelope } from './order-create-many-inventory-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutInventoryInput } from './order-update-with-where-unique-without-inventory.input';
import { OrderUpdateManyWithWhereWithoutInventoryInput } from './order-update-many-with-where-without-inventory.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUpdateManyWithoutInventoryInput {

    @Field(() => [OrderCreateWithoutInventoryInput], {nullable:true})
    create?: Array<OrderCreateWithoutInventoryInput>;

    @Field(() => [OrderCreateOrConnectWithoutInventoryInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutInventoryInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutInventoryInput], {nullable:true})
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutInventoryInput>;

    @Field(() => OrderCreateManyInventoryInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyInventoryInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    set?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    delete?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutInventoryInput], {nullable:true})
    update?: Array<OrderUpdateWithWhereUniqueWithoutInventoryInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutInventoryInput], {nullable:true})
    updateMany?: Array<OrderUpdateManyWithWhereWithoutInventoryInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderScalarWhereInput>;
}
