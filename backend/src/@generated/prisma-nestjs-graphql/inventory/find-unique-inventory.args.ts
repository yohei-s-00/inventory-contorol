import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InventoryWhereUniqueInput } from './inventory-where-unique.input';

@ArgsType()
export class FindUniqueInventoryArgs {

    @Field(() => InventoryWhereUniqueInput, {nullable:false})
    where!: InventoryWhereUniqueInput;
}
