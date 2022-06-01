import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryUpdateManyMutationInput } from './inventory-update-many-mutation.input';
import { InventoryWhereInput } from './inventory-where.input';

@ArgsType()
export class UpdateManyInventoryArgs {

    @Field(() => InventoryUpdateManyMutationInput, {nullable:false})
    data!: InventoryUpdateManyMutationInput;

    @Field(() => InventoryWhereInput, {nullable:true})
    where?: InventoryWhereInput;
}
