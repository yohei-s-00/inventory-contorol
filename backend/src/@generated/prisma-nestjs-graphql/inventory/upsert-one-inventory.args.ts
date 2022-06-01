import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryWhereUniqueInput } from './inventory-where-unique.input';
import { InventoryCreateInput } from './inventory-create.input';
import { InventoryUpdateInput } from './inventory-update.input';

@ArgsType()
export class UpsertOneInventoryArgs {

    @Field(() => InventoryWhereUniqueInput, {nullable:false})
    where!: InventoryWhereUniqueInput;

    @Field(() => InventoryCreateInput, {nullable:false})
    create!: InventoryCreateInput;

    @Field(() => InventoryUpdateInput, {nullable:false})
    update!: InventoryUpdateInput;
}
