import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryWhereInput } from './inventory-where.input';

@ArgsType()
export class DeleteManyInventoryArgs {

    @Field(() => InventoryWhereInput, {nullable:true})
    where?: InventoryWhereInput;
}
