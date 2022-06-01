import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutInventoryInput } from './order-create-without-inventory.input';
import { OrderCreateOrConnectWithoutInventoryInput } from './order-create-or-connect-without-inventory.input';
import { OrderCreateManyInventoryInputEnvelope } from './order-create-many-inventory-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderUncheckedCreateNestedManyWithoutInventoryInput {

    @Field(() => [OrderCreateWithoutInventoryInput], {nullable:true})
    create?: Array<OrderCreateWithoutInventoryInput>;

    @Field(() => [OrderCreateOrConnectWithoutInventoryInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutInventoryInput>;

    @Field(() => OrderCreateManyInventoryInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyInventoryInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;
}
