import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InventoryCreateNestedOneWithoutOrderInput } from '../inventory/inventory-create-nested-one-without-order.input';

@InputType()
export class OrderCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => InventoryCreateNestedOneWithoutOrderInput, {nullable:false})
    inventory!: InventoryCreateNestedOneWithoutOrderInput;

    @Field(() => String, {nullable:false})
    sendAdress!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    mailContent!: string;

    @Field(() => String, {nullable:false})
    sendCc!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
