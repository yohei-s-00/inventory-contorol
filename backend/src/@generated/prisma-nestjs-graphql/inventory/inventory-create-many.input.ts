import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class InventoryCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Int, {nullable:false})
    inventoryItems!: number;

    @Field(() => Int, {nullable:false})
    requiredItems!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:false})
    orderCode!: string;

    @Field(() => Date, {nullable:true})
    orderDates?: Date | string;

    @Field(() => String, {nullable:true})
    thumbNailUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
