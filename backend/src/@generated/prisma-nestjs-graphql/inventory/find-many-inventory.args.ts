import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryWhereInput } from './inventory-where.input';
import { InventoryOrderByWithRelationInput } from './inventory-order-by-with-relation.input';
import { InventoryWhereUniqueInput } from './inventory-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InventoryScalarFieldEnum } from './inventory-scalar-field.enum';

@ArgsType()
export class FindManyInventoryArgs {

    @Field(() => InventoryWhereInput, {nullable:true})
    where?: InventoryWhereInput;

    @Field(() => [InventoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InventoryOrderByWithRelationInput>;

    @Field(() => InventoryWhereUniqueInput, {nullable:true})
    cursor?: InventoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InventoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof InventoryScalarFieldEnum>;
}
