import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InventoryWhereInput } from './inventory-where.input';

@InputType()
export class InventoryRelationFilter {

    @Field(() => InventoryWhereInput, {nullable:true})
    is?: InventoryWhereInput;

    @Field(() => InventoryWhereInput, {nullable:true})
    isNot?: InventoryWhereInput;
}
