import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryUpdateInput } from './inventory-update.input';
import { InventoryWhereUniqueInput } from './inventory-where-unique.input';

@ArgsType()
export class UpdateOneInventoryArgs {

    @Field(() => InventoryUpdateInput, {nullable:false})
    data!: InventoryUpdateInput;

    @Field(() => InventoryWhereUniqueInput, {nullable:false})
    where!: InventoryWhereUniqueInput;
}
